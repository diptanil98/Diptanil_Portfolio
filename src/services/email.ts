import { Resend } from "resend";
import { site } from "@/data/site";
import type { ContactMessageInput } from "@/types";

export interface EmailResult {
  sent: boolean;
  reason?: string;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

/**
 * Provider-isolated notification sender. Swap the internals (Resend → anything else)
 * without touching the route handler. Never throws: email is best-effort.
 */
export async function sendContactNotification(input: ContactMessageInput): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || site.email;
  if (!apiKey) return { sent: false, reason: "RESEND_API_KEY is not configured" };

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: input.email,
      subject: `[Portfolio] ${input.subject}`,
      html: `<p><strong>${escapeHtml(input.name)}</strong> &lt;${escapeHtml(input.email)}&gt;</p>
<p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>`,
      text: `${input.name} <${input.email}>\n\n${input.message}`,
    });
    return error ? { sent: false, reason: error.message } : { sent: true };
  } catch (err) {
    return { sent: false, reason: err instanceof Error ? err.message : "unknown error" };
  }
}
