import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { education } from "@/data/certifications";
import { Reveal } from "@/components/ui/Reveal";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function Education() {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="size-3.5 text-accent" />
          <p className="eyebrow">ACADEMIC BACKGROUND</p>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Education</h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <CardSpotlight
          spotlightColor="rgba(61, 123, 255, 0.14)"
          className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/50 to-zinc-950/80 p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-white/[0.2] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.85)] sm:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03]">
                <GraduationCap className="size-5 text-accent" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">{education.degree}</h3>
                <p className="mt-1 text-sm text-zinc-400">{education.institution}</p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 font-mono text-xs font-semibold text-[#8fb2ff] shadow-[0_0_12px_rgba(61,123,255,0.25)]">
                <Award className="size-3 text-accent" />
                CGPA {education.cgpa}
              </span>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-4 text-xs">
            <div>
              <dt className="eyebrow text-zinc-500">Timeline</dt>
              <dd className="mt-1.5 flex items-center gap-1.5 font-mono text-xs font-medium text-zinc-300">
                <Calendar className="size-3 text-zinc-500" />
                {education.period}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-zinc-500">Campus Location</dt>
              <dd className="mt-1.5 flex items-center gap-1.5 font-mono text-xs font-medium text-zinc-300">
                <MapPin className="size-3 text-accent" />
                {education.location}
              </dd>
            </div>
          </dl>
        </CardSpotlight>
      </Reveal>
    </div>
  );
}
