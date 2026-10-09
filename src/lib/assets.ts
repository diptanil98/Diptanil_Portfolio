import { existsSync } from "node:fs";
import path from "node:path";

const CANDIDATES = ["diptanil.jpg", "diptanil.jpeg", "diptanil.png", "diptanil.webp"];

/** Returns the public path of the profile photo if it has been added, else null. */
export function getProfileImage(): string | null {
  const dir = path.join(process.cwd(), "public", "images");
  const found = CANDIDATES.find((f) => existsSync(path.join(dir, f)));
  return found ? `/images/${found}` : null;
}

export const RESUME_FILE = path.join(process.cwd(), "public", "resume", "Diptanil_Sarkar_Resume.pdf");
