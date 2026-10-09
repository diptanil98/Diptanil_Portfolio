import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "frontend",
    items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  { id: "backend", title: "Backend", icon: "backend", items: ["Node.js", "Express.js"] },
  {
    id: "ai",
    title: "AI & Automation",
    icon: "ai",
    items: ["TensorFlow.js", "AI workflows", "n8n"],
  },
  { id: "database", title: "Database", icon: "database", items: ["MongoDB", "MySQL"] },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "GCP", "Firebase", "Docker", "GitHub Actions"],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: "tools",
    items: ["Git", "GitHub", "Chrome DevTools"],
  },
];
