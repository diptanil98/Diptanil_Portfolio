"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { DURATION, EASE, useIsDesktop } from "@/lib/motion";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Max parallax in px (desktop only). 0 disables. */
  parallax?: number;
  /** Reveal when scrolled into view instead of on mount. */
  onView?: boolean;
}

/** Clip + scale + blur-to-sharp reveal, with optional very subtle scroll parallax. */
export function ImageReveal({ children, className, delay = 0, parallax = 0, onView = false }: ImageRevealProps) {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const shift = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);
  const useParallax = !reduce && desktop && parallax > 0;

  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.97, y: 20, filter: "blur(4px)", clipPath: "inset(8% 6% 8% 6% round 16px)" };
  const shown = reduce
    ? { opacity: 1 }
    : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0% 0% 0% 0% round 16px)" };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      {...(onView ? { whileInView: shown, viewport: { once: true, margin: "0px 0px -10% 0px" } } : { animate: shown })}
      transition={{ duration: reduce ? 0.01 : DURATION.hero, delay: reduce ? 0 : delay, ease: EASE }}
    >
      <motion.div style={useParallax ? { y: shift } : undefined} className="h-full w-full">
        {children}
      </motion.div>
    </motion.div>
  );
}
