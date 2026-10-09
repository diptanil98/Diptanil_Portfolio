import { Terminal, GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

const facts = [
  { label: "ROLE", value: "Full-Stack Developer", icon: Terminal, accent: "text-accent" },
  { label: "EDUCATION", value: "B.Tech Computer Science", icon: GraduationCap, accent: "text-emerald-400" },
  { label: "LOCATION", value: "Ghaziabad, India", icon: MapPin, accent: "text-blue-400" },
];

export function Intro() {
  return (
    <section id="about" className="border-y border-white/[0.08] bg-zinc-950/60 py-16 backdrop-blur-sm md:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 mb-4">
              <span className="size-1.5 rounded-full bg-accent" />
              <p className="eyebrow tracking-[0.16em] text-zinc-300">A LITTLE ABOUT ME</p>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              I enjoy turning ideas into practical software.
            </h2>
          </Reveal>
          
          <Reveal delay={0.08}>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              I work across the stack: <span className="text-zinc-200 font-medium">React</span> and <span className="text-zinc-200 font-medium">TypeScript</span> on the front end, <span className="text-zinc-200 font-medium">Node.js</span> and <span className="text-zinc-200 font-medium">MongoDB</span> behind it. I care more about software that holds up outside a demo than about fleeting hype.
            </p>
          </Reveal>
          
          <Reveal delay={0.16}>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              Lately that includes AI and automation: <span className="text-accent font-medium">OCR bill scanning</span>, <span className="text-accent font-medium">in-browser food recognition</span> and <span className="text-accent font-medium">n8n workflows</span> that eliminate repetitive manual work. I start from the real problem, then pick the right tools.
            </p>
          </Reveal>
        </div>

        {/* 3 Fact Cards */}
        <dl className="mt-12 grid gap-3 sm:grid-cols-3">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.label} delay={i * 0.06}>
                <CardSpotlight
                  spotlightColor="rgba(61, 123, 255, 0.15)"
                  className="group relative rounded-xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-white/[0.2] hover:shadow-[0_10px_30px_-10px_rgba(61,123,255,0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <dt className="eyebrow text-zinc-400">{f.label}</dt>
                    <Icon className={`size-4 ${f.accent} transition-transform duration-300 group-hover:scale-110`} aria-hidden />
                  </div>
                  <dd className="mt-3 text-base font-semibold text-white tracking-tight">{f.value}</dd>
                </CardSpotlight>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
