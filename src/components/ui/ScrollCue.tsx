"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ScrollCue({ targetId = "work" }: { targetId?: string }) {
  const reduce = useReducedMotion();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="group inline-flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300"
      aria-label="Scroll to explore projects"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase transition-colors group-hover:text-accent">
        SCROLL TO EXPLORE
      </span>

      <div className="relative flex h-8 w-4 items-start justify-center rounded-full border border-white/[0.15] p-1 transition-colors group-hover:border-accent/60">
        {!reduce ? (
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(61,123,255,0.8)]"
          />
        ) : (
          <div className="size-1.5 rounded-full bg-accent" />
        )}
      </div>

      <ChevronDown className="size-3 text-zinc-600 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-accent" />
    </a>
  );
}
