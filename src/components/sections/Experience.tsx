import { ArrowRight, CheckCircle2, Calendar, Building2 } from "lucide-react";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/[0.08] bg-zinc-950/60 py-16 backdrop-blur-sm md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="LATEST EXPERIENCE"
          title="Work Experience"
          aside="Hands-on industry experience building scalable React components and optimizing web products."
        />
        <ul className="mt-10 space-y-4 md:mt-12">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 0.08}>
              <CardSpotlight
                spotlightColor="rgba(61, 123, 255, 0.12)"
                className="group grid gap-6 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-[var(--ease-premium)] hover:border-white/[0.2] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.85)] sm:p-7 md:grid-cols-[minmax(0,340px)_1fr] md:gap-10"
              >
                {/* Left: Company & Period */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="size-3.5 text-accent" />
                      <p className="font-mono text-xs font-semibold tracking-wider text-zinc-300 transition-colors duration-300 group-hover:text-white">
                        {item.company}
                      </p>
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-white">{item.role}</h3>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                      <Calendar className="size-3 text-zinc-500" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Technologies or Achievements */}
                <div className="flex items-start justify-between gap-4 border-t border-white/[0.06] pt-4 md:border-t-0 md:pt-0">
                  {item.achievements ? (
                    <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="w-full">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                        Core Tech Stack & Methodology
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                        {item.technologies?.map((t) => (
                          <li key={t}>
                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors group-hover:border-white/[0.16] group-hover:text-white">
                              <TechIcon name={t} className="size-3.5 shrink-0" />
                              <span>{t}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ArrowRight
                    className="mt-1 hidden size-4 shrink-0 text-zinc-500 transition-all duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1 group-hover:text-accent md:block"
                    aria-hidden
                  />
                </div>
              </CardSpotlight>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
