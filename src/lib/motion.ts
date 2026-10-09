"use client";

import { useSyncExternalStore } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = { fast: 0.15, base: 0.3, section: 0.55, hero: 0.8 } as const;

function subscribe(query: string) {
  return (cb: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  };
}

function useMedia(query: string): boolean {
  return useSyncExternalStore(
    subscribe(query),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Motion distance multiplier: gentler on small screens. */
export function useMotionScale(): number {
  const small = useMedia("(max-width: 767px)");
  return small ? 0.5 : 1;
}

export function useIsDesktop(): boolean {
  return useMedia("(min-width: 1024px)");
}
