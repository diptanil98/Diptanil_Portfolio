export type ProjectSlug = "expenzo" | "shophub" | "fitbuddy";

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string;
}

export interface Project {
  slug: ProjectSlug;
  number: string;
  name: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  /** Optional highlight line shown on the card (only verified claims). */
  highlight?: string;
  /** Optional raster image path. When absent, the coded product preview is used. */
  image?: string;
  /** Fill these in to show the GitHub / live buttons. Empty = hidden. */
  githubUrl: string;
  liveUrl: string;
  caseStudy: CaseStudy;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  technologies?: string[];
  achievements?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: "frontend" | "backend" | "ai" | "database" | "cloud" | "tools";
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface ContactMessageInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactStatus = "new" | "read" | "replied";
