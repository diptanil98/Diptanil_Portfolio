import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

const steps = ["BUILD", "LEARN", "SHIP", "REPEAT"];

export function AboutQuote() {
  return (
    <section aria-label="Philosophy Quote" className="relative border-y border-white/[0.08] bg-zinc-950/70 py-24 md:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[100px]"
      />

      <div className="container-x text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 mb-6">
            <Sparkles className="size-3 text-accent" />
            <p className="eyebrow tracking-[0.16em] text-zinc-400">CORE PHILOSOPHY</p>
          </div>
        </Reveal>

        <Reveal as="div" duration={0.7} delay={0.1}>
          <blockquote className="mx-auto max-w-3xl text-balance text-2xl font-semibold leading-relaxed tracking-tight text-white sm:text-4xl sm:leading-snug">
            <p>
              “I like building things that solve real problems — and learning whatever is necessary to make them
              work.”
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.25} y={12} scale={1} className="mt-12">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {steps.map((w, i) => (
              <li key={w} className="flex items-center gap-2 sm:gap-3">
                <span
                  className={
                    i === steps.length - 1
                      ? "inline-block rounded-lg border border-accent/40 bg-accent/15 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-[0.18em] text-[#8fb2ff] shadow-[0_0_15px_rgba(61,123,255,0.25)]"
                      : "inline-block rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs font-medium tracking-[0.18em] text-zinc-300"
                  }
                >
                  {w}
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight className="size-3 text-zinc-600" aria-hidden />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
