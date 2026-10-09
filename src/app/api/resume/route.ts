import { readFile } from "node:fs/promises";
import { NextResponse } from "next/server";
import { RESUME_FILE } from "@/lib/assets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const file = await readFile(RESUME_FILE);
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Diptanil_Sarkar_Resume.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { message: "Resume not available yet. Add public/resume/Diptanil_Sarkar_Resume.pdf." },
      { status: 404 },
    );
  }
}
