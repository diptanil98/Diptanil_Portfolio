import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Reveal } from "@/components/ui/Reveal";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function Certifications() {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-2 mb-2">
          <BadgeCheck className="size-3.5 text-accent" />
          <p className="eyebrow">VERIFIED CREDENTIALS</p>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Certifications</h2>
      </Reveal>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 0.05} y={16} className="sm:last:odd:col-span-2">
            <CardSpotlight
              spotlightColor="rgba(61, 123, 255, 0.12)"
              className="group flex h-full flex-col justify-between rounded-xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/50 to-zinc-950/80 p-4.5 transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-white/[0.2] hover:shadow-[0_12px_30px_-10px_rgba(61,123,255,0.15)]"
            >
              <div className="flex items-start justify-between">
                <BadgeCheck className="size-4 text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden />
                <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  Verified
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-semibold leading-snug text-white transition-colors group-hover:text-zinc-100">
                  {c.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-zinc-400">{c.issuer}</p>
              </div>
            </CardSpotlight>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
