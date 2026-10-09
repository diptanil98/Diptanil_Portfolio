import type { Certification } from "@/types";

export const certifications: Certification[] = [
  { title: "AWS Data Analytics", issuer: "Amazon Web Services" },
  { title: "AWS Cloud Foundations", issuer: "Amazon Web Services" },
  { title: "AI-ML IBM SkillsBuild", issuer: "IBM SkillsBuild" },
  { title: "Generative AI", issuer: "Google Cloud" },
  { title: "React.js Internship", issuer: "Celebal Technologies" },
];

export const education = {
  degree: "B.Tech — Computer Science",
  institution: "Raj Kumar Goel Institute of Technology and Management",
  period: "Sept 2022 — Present",
  cgpa: "8.07",
  location: "Ghaziabad, Uttar Pradesh",
} as const;
