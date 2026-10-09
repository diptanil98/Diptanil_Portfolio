import { Cloud, Database, LayoutTemplate, Server, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/skills";
import type { SkillGroup } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

interface SkillStyle {
  icon: LucideIcon;
  color: string;
  glow: string;
  spotlightColor: string;
  pillBorder: string;
}

const styles: Record<SkillGroup["icon"], SkillStyle> = {
  frontend: {
    icon: LayoutTemplate,
    color: "text-sky-400",
    glow: "group-hover:border-sky-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.15)]",
    spotlightColor: "rgba(56, 189, 248, 0.12)",
    pillBorder: "hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-200",
  },
  backend: {
    icon: Server,
    color: "text-emerald-400",
    glow: "group-hover:border-emerald-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.15)]",
    spotlightColor: "rgba(52, 211, 153, 0.12)",
    pillBorder: "hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-200",
  },
  ai: {
    icon: Sparkles,
    color: "text-purple-400",
    glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(192,132,252,0.15)]",
    spotlightColor: "rgba(192, 132, 252, 0.12)",
    pillBorder: "hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-200",
  },
  database: {
    icon: Database,
    color: "text-amber-400",
    glow: "group-hover:border-amber-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.15)]",
    spotlightColor: "rgba(251, 191, 36, 0.12)",
    pillBorder: "hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-200",
  },
  cloud: {
    icon: Cloud,
    color: "text-blue-400",
    glow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(96,165,250,0.15)]",
    spotlightColor: "rgba(96, 165, 250, 0.12)",
    pillBorder: "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-200",
  },
  tools: {
    icon: Wrench,
    color: "text-rose-400",
    glow: "group-hover:border-rose-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(251,113,133,0.15)]",
    spotlightColor: "rgba(251, 113, 133, 0.12)",
    pillBorder: "hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-200",
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="TECHNICAL SKILLS"
          title="Skills & Technology Stack"
          aside="Core languages, modern frontend/backend frameworks, and automation pipelines with real-world application."
        />
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const itemStyle = styles[g.icon];
            const Icon = itemStyle.icon;
            return (
              <Reveal as="li" key={g.id} delay={(i % 3) * 0.06} className="h-full">
                <CardSpotlight
                  spotlightColor={itemStyle.spotlightColor}
                  className={`group h-full rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/50 to-zinc-950/80 p-5 sm:p-6 transition-all duration-300 ease-[var(--ease-premium)] hover:bg-zinc-900/80 ${itemStyle.glow}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03]">
                      <Icon
                        className={`size-4 ${itemStyle.color} transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-110`}
                        aria-hidden
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight text-white">{g.title}</h3>
                      <p className="font-mono text-[10px] text-zinc-500">{g.items.length} technologies</p>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s}>
                        <div
                          className={`inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-zinc-300 transition-all duration-200 ${itemStyle.pillBorder}`}
                        >
                          <TechIcon name={s} className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-105" />
                          <span>{s}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardSpotlight>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
