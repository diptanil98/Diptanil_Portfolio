import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, CheckCircle2 } from "lucide-react";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  const title = `${project.name.charAt(0)}${project.name.slice(1).toLowerCase()} — Case Study`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description: project.description, type: "article", url: `/work/${project.slug}` },
    twitter: { title, description: project.description },
  };
}

function Block({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay} className="grid gap-4 border-t border-white/[0.08] py-8 md:grid-cols-[200px_1fr] md:gap-10">
      <h2 className="eyebrow pt-1 text-zinc-400">{title}</h2>
      <div className="text-[15px] leading-relaxed text-zinc-300">{children}</div>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(project.slug);
  const { caseStudy: cs } = project;
  const displayName = `${project.name.charAt(0)}${project.name.slice(1).toLowerCase()}`;

  return (
    <article className="pb-20 pt-28 sm:pt-32">
      <div className="container-x">
        <Reveal immediate y={10} scale={1} duration={0.4}>
          <Link
            href="/#work"
            className="group inline-flex min-h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-[13px] text-zinc-400 transition-colors hover:border-white/[0.2] hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden />
            All work
          </Link>
        </Reveal>

        <header className="mt-8 max-w-3xl">
          <Reveal immediate delay={0.05} y={16} scale={1}>
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-accent/40 bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#8fb2ff]">
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
          </Reveal>
          
          <Reveal as="h1" immediate delay={0.12} y={20} scale={1} className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {project.title}
          </Reveal>
          
          <Reveal as="p" immediate delay={0.2} y={16} scale={1} className="mt-5 text-base leading-relaxed text-zinc-400">
            {project.description}
          </Reveal>
          
          <Reveal immediate delay={0.28} y={12} scale={1}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {project.technologies.map((t) => (
                <li key={t}>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300">
                    <TechIcon name={t} className="size-3.5 shrink-0" />
                    <span>{t}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </header>

        <ImageReveal delay={0.35} className="mt-10 md:mt-14">
          <div className="group/preview mx-auto max-w-4xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)]">
            <ProjectPreview slug={project.slug} />
          </div>
        </ImageReveal>

        <div className="mx-auto mt-14 max-w-4xl">
          <Block title="Overview">
            <p>{cs.overview}</p>
          </Block>
          
          <Block title="Problem">
            <p>{cs.problem}</p>
          </Block>
          
          <Block title="Solution">
            <p>{cs.solution}</p>
          </Block>
          
          <Block title="Key Features">
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            {project.highlight && (
              <p className="mt-4 font-mono text-xs text-[#8fb2ff]">
                ✦ {project.highlight}
              </p>
            )}
          </Block>
          
          <Block title="Tech Stack">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t}>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 font-mono text-xs font-medium text-zinc-200">
                    <TechIcon name={t} className="size-4 shrink-0" />
                    <span>{t}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Block>
          
          <Block title="Architecture">
            <ul className="space-y-2.5">
              {cs.architecture.map((a) => (
                <li key={a} className="flex gap-2.5 text-zinc-300">
                  <ArrowRight className="mt-1 size-3.5 shrink-0 text-accent" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </Block>
          
          <Block title="Challenges">
            <p>{cs.challenges}</p>
          </Block>
          
          <Block title="Links">
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary" external icon={Github}>
                  GitHub Repository
                </Button>
              )}
              {project.liveUrl && (
                <Button href={project.liveUrl} external icon={ArrowUpRight}>
                  Live Application
                </Button>
              )}
            </div>
          </Block>

          <nav aria-label="More projects" className="mt-8 grid gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
            {[
              { p: prev, dir: "Previous Project" },
              { p: next, dir: "Next Project" },
            ].map(({ p, dir }) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-zinc-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.2] hover:bg-zinc-900/60"
              >
                <p className="eyebrow text-zinc-500">{dir}</p>
                <p className="mt-3 flex items-center justify-between text-base font-bold text-white">
                  <span>
                    {p.number} / {p.name}
                  </span>
                  <ArrowUpRight className="size-4 text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" aria-hidden />
                </p>
                <p className="mt-1 text-xs text-zinc-400">{p.category}</p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <span className="sr-only">{displayName} case study</span>
    </article>
  );
}
