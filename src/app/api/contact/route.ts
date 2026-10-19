import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactMessage } from "@/models/ContactMessage";
import { sendContactNotification } from "@/services/email";
import { site } from "@/data/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 10_000;
const MIN_FILL_MS = 1500;

const json = (body: unknown, status = 200, headers?: HeadersInit) =>
  NextResponse.json(body, { status, headers });

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  // Same-origin guard against cross-site form posts.
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) {
    return json({ message: "Forbidden." }, 403);
  }

  const ip = clientIp(req);
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) {
    return json({ message: "Too many messages. Please try again later." }, 429, {
      "Retry-After": String(limit.retryAfter),
    });
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return json({ message: "Message is too large." }, 413);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ message: "Invalid request." }, 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    // Honeypot filled => pretend success, store nothing.
    if (typeof body === "object" && body !== null && "website" in body && (body as { website?: unknown }).website) {
      return json({ ok: true });
    }
    return json({ message: "Please check the highlighted fields.", errors: parsed.error.flatten().fieldErrors }, 422);
  }

  const { website, startedAt, ...data } = parsed.data;
  if (website || (startedAt && Date.now() - startedAt < MIN_FILL_MS)) {
    return json({ ok: true }); // silent drop for bots
  }

  // Email is the primary delivery path. MongoDB is optional archival storage and
  // must not prevent a contact message from reaching the site owner.
  const email = await sendContactNotification(data);
  if (!email.sent) {
    console.error("[contact] email delivery failed:", email.reason);
    return json(
      { message: `Email delivery is not configured yet. Please email me directly at ${site.email}.` },
      503,
    );
  }

  try {
    await connectToDatabase();
    await ContactMessage.create({ ...data, ip });
  } catch (err) {
    console.warn("[contact] message emailed but not archived:", err instanceof Error ? err.message : err);
  }

  return json({ ok: true, message: "Message sent successfully. I'll get back to you soon." }, 201);
}

export function GET() {
  return json({ message: "Method not allowed." }, 405, { Allow: "POST" });
}
