"use client";

import { TechIcon } from "./TechIcon";

const row1 = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Docker",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
];

const row2 = [
  "TensorFlow.js",
  "n8n",
  "Python",
  "AWS",
  "Git / GitHub",
  "Postman",
  "Razorpay",
  "MySQL",
  "Firebase",
  "REST APIs",
  "Docker",
];

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.06] bg-zinc-950/40 py-8 backdrop-blur-sm">
      {/* Edge gradient masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-36 bg-gradient-to-r from-bg via-bg/80 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-36 bg-gradient-to-l from-bg via-bg/80 to-transparent"
      />

      <div className="space-y-3">
        {/* Row 1: Forward Marquee */}
        <div className="flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex gap-3 pr-3">
            {[...row1, ...row1].map((tech, i) => (
              <div
                key={`r1-${tech}-${i}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-zinc-900/40 px-3.5 py-1.5 backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-zinc-800/60 hover:shadow-[0_0_20px_-4px_rgba(61,123,255,0.25)]"
              >
                <TechIcon
                  name={tech}
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                />
                <span className="font-mono text-xs font-medium text-zinc-300 transition-colors group-hover:text-white">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee-reverse flex gap-3 pr-3">
            {[...row2, ...row2].map((tech, i) => (
              <div
                key={`r2-${tech}-${i}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-zinc-900/40 px-3.5 py-1.5 backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-zinc-800/60 hover:shadow-[0_0_20px_-4px_rgba(61,123,255,0.25)]"
              >
                <TechIcon
                  name={tech}
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                />
                <span className="font-mono text-xs font-medium text-zinc-300 transition-colors group-hover:text-white">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
