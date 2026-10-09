"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

const roles = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "AI & Automation Specialist",
  "Node.js Backend Architect",
];

export function RoleRotator() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <div className="inline-flex items-center font-mono text-sm sm:text-base font-semibold text-accent">
      <span className="text-zinc-500 mr-2 font-normal font-sans">Specializing in</span>
      <div className="relative inline-block h-6 min-w-[200px] sm:min-w-[250px] overflow-hidden align-middle">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-accent via-[#689aff] to-[#a8c7ff] bg-clip-text text-transparent"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="ml-1 inline-block h-4 w-1 bg-accent animate-pulse" aria-hidden />
    </div>
  );
}
