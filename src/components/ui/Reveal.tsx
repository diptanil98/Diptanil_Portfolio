"use client";

import { motion, useReducedMotion } from "motion/react";
import { DURATION, EASE, useMotionScale } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  /** Animate on mount (hero) instead of on scroll-into-view. */
  immediate?: boolean;
  duration?: number;
  className?: string;
  as?: "div" | "li" | "section" | "footer" | "article" | "p" | "h1" | "h2" | "span";
}

/** The one reveal primitive: opacity + small upward move + tiny scale. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  scale = 0.99,
  immediate = false,
  duration = DURATION.section,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const k = useMotionScale();
  const Tag = motion[as];

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: y * k, scale };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };
  const transition = { duration: reduce ? 0.01 : duration, delay: reduce ? 0 : delay * (k === 1 ? 1 : 0.6), ease: EASE };

  return (
    <Tag
      className={className}
      initial={hidden}
      {...(immediate
        ? { animate: shown }
        : { whileInView: shown, viewport: { once: true, margin: "0px 0px -8% 0px" } })}
      transition={transition}
    >
      {children}
    </Tag>
  );
}
