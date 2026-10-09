export const site = {
  name: "Diptanil Sarkar",
  shortName: "Diptanil",
  title: "Diptanil Sarkar — Full-Stack Developer",
  description:
    "Portfolio of Diptanil Sarkar, a Computer Science engineer building full-stack web applications with React, Node.js, TypeScript, AI and automation.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: "diptanilsarkar98@gmail.com",
  location: "Ghaziabad, Uttar Pradesh",
  locationShort: "Ghaziabad, India",
  focus: "React · Node.js · AI workflows",
  // Set these in .env.local. Links are hidden while empty rather than invented.
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/diptanil98",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/diptanilsarkar",
  resumeHref: "/resume",
} as const;

export const navItems = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;
