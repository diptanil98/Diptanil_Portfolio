import Link from "next/link";
import { ArrowRight, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Magnetic } from "@/components/ui/Magnetic";

export function ProjectCard({
  project,
  reverse = false,
  index = 0,
}: {
  project: Project;
  reverse?: boolean;
  index?: number;
}) {
  const href = `/work/${project.slug}`;

  return (
    <Reveal delay={Math.min(index, 3) * 0.08}>
      <CardSpotlight
        spotlightColor="rgba(61, 123, 255, 0.14)"
        className={cn(
          "group relative grid gap-8 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 p-5 shadow-[var(--shadow-card)] sm:p-7 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-8",
          "transition-all duration-300 ease-[var(--ease-premium)] hover:border-white/[0.2] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)]"
        )}
      >
        {/* Project Preview with Hover Zoom */}
        <Link
          href={href}
          className={cn(
            "group/preview block overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent",
            reverse && "lg:order-2"
          )}
          aria-label={`View ${project.name} case study`}
        >
          <ProjectPreview slug={project.slug} />
        </Link>

        {/* Content Column */}
        <div className={cn("flex flex-col", reverse && "lg:order-1")}>
          {/* Eyebrow and Category */}
          <div className="flex items-center gap-2.5">
            <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#8fb2ff]">
              {project.number}
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider text-zinc-300">
              {project.name}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
              {project.category}
            </span>
          </div>

          {/* Heading */}
          <h3 className="mt-3.5 text-xl font-bold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-zinc-100 sm:text-2xl">
            <Link href={href} className="hover:text-accent transition-colors">
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          {/* Technology Badges */}
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.technologies.map((t) => (
              <li key={t}>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-colors group-hover:border-white/[0.16] group-hover:text-white">
                  <TechIcon name={t} className="size-3.5 shrink-0" />
                  <span>{t}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Key Features List */}
          <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 text-[13px] text-zinc-300 sm:grid-cols-2" aria-label="Key features">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 shrink-0 text-accent" aria-hidden />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* Special Highlight Badge */}
          {project.highlight && (
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-[#9ec0ff]">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                {project.highlight}
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.15}>
              <Link
                href={href}
                className="group/cta inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent bg-accent px-4 text-sm font-medium text-white shadow-[0_0_20px_-3px_rgba(61,123,255,0.4)] transition-all duration-200 hover:bg-[#5a90ff] hover:shadow-[0_0_25px_0px_rgba(61,123,255,0.6)] active:scale-[0.97]"
              >
                View Project
                <ArrowRight className="size-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/cta:translate-x-1" aria-hidden />
              </Link>
            </Magnetic>

            {project.githubUrl && (
              <Magnetic strength={0.15}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/[0.1] bg-zinc-900/80 px-4 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all duration-150 hover:border-white/[0.25] hover:bg-zinc-800 hover:text-white active:scale-[0.97]"
                >
                  <Github className="size-4" aria-hidden />
                  GitHub
                </a>
              </Magnetic>
            )}

            {project.liveUrl && (
              <Magnetic strength={0.15}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/[0.1] bg-zinc-900/80 px-4 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all duration-150 hover:border-white/[0.25] hover:bg-zinc-800 hover:text-white active:scale-[0.97]"
                >
                  <ExternalLink className="size-4" aria-hidden />
                  Live Demo
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </CardSpotlight>
    </Reveal>
  );
}
