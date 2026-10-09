"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const unsubscribeScroll = scrollY.on("change", (latest) => {
      setVisible(latest > 360);
    });
    const unsubscribeProgress = scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });
    return () => {
      unsubscribeScroll();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll back to top"
          className="group fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full border border-white/[0.12] bg-zinc-950/80 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-colors hover:border-accent/60 hover:bg-zinc-900"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 44 44" aria-hidden>
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="var(--color-accent, #3d7bff)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-75"
            />
          </svg>

          {/* Up arrow */}
          <ArrowUp className="size-4 text-zinc-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
