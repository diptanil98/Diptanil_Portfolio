# Diptanil Sarkar — Portfolio

Full-stack portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Motion, MongoDB (Mongoose), Zod and Resend.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

## Add your own assets

| File | Purpose |
| --- | --- |
| `public/images/diptanil.jpg` (or `.png` / `.webp`) | Hero portrait (4:5 crop works best). A placeholder shows until added. |
| `public/resume/Diptanil_Sarkar_Resume.pdf` | Served at `/resume` as a download. |

## Environment variables

| Variable | Notes |
| --- | --- |
| `MONGODB_URI` | Optional MongoDB Atlas connection string for archiving contact messages (server only) |
| `RESEND_API_KEY` | Required to email contact form submissions through Resend |
| `CONTACT_EMAIL` | Optional recipient override; defaults to the address in `src/data/site.ts` |
| `CONTACT_FROM_EMAIL` | Optional verified sender address for Resend |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (used by sitemap, OG, canonical) |
| `NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_LINKEDIN_URL` | Social links. Hidden while empty |

Project GitHub / live URLs live in `src/data/projects.ts` (`githubUrl`, `liveUrl`); buttons appear once filled.

## Structure

- `src/data/*` — all content (projects, experience, skills, certifications)
- `src/components/sections/*` — page sections (Server Components unless interactive)
- `src/app/api/contact` — Zod-validated, rate-limited, honeypot-protected, stored in MongoDB
- `src/services/email.ts` — provider-isolated notifications

## Deploy

Push to Vercel, set the env vars above, and use MongoDB Atlas (allow Vercel IPs / `0.0.0.0/0`).
The in-memory rate limiter is per-instance; swap in Upstash/Redis for stricter limits.
