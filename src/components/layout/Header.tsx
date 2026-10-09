"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, FileText } from "lucide-react";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function Header({ avatarSrc }: { avatarSrc: string | null }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking (home page only)
  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname.startsWith("/work") ? "work" : "");
      return;
    }
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.01 : 0.5, delay: reduce ? 0 : 0.1, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[height,background-color,border-color,backdrop-filter] duration-[400ms] ease-[var(--ease-premium)]",
          scrolled
            ? "h-14 border-line bg-bg/80 backdrop-blur-md"
            : "h-16 border-transparent bg-transparent backdrop-blur-0",
        )}
      >
        <div className="container-x flex h-full items-center justify-between gap-6">
          <Link href="/" className="font-mono text-xs font-medium tracking-[0.14em] text-fg" aria-label="Diptanil Sarkar — home">
            <span className="hidden md:inline">DIPTANIL SARKAR</span>
            <span className="md:hidden">DIPTANIL.</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "group relative py-2 text-[13px] transition-colors duration-200",
                    isActive ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-transform duration-200 ease-[var(--ease-premium)]",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:bg-fg/50",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <p className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted lg:flex">
              <span className="size-1.5 rounded-full bg-accent [animation:pulse-dot_2.4s_ease-in-out_infinite]" aria-hidden />
              AVAILABLE FOR OPPORTUNITIES
            </p>
            <Magnetic strength={0.2} className="hidden md:inline-flex">
              <a
                href={site.resumeHref}
                download
                className="min-h-9 items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 text-xs font-medium text-fg transition-[border-color,background-color,transform] duration-150 hover:border-line-strong active:scale-[0.97] inline-flex"
              >
                <FileText className="size-3.5" aria-hidden />
                Resume
              </a>
            </Magnetic>
            {avatarSrc && (
              <Link href="/" className="hidden overflow-hidden rounded-full border border-line md:block" aria-label="Home">
                <Image src={avatarSrc} alt="" width={28} height={28} className="size-7 object-cover grayscale" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-fg active:scale-[0.97] md:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.01 : 0.25, ease: EASE }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 cursor-default bg-black/70"
              onClick={() => setOpen(false)}
              tabIndex={-1}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col border-l border-line bg-surface p-5"
              initial={{ x: reduce ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduce ? 0 : "100%" }}
              transition={{ duration: reduce ? 0.01 : 0.4, ease: EASE }}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-line"
                  autoFocus
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>
              <nav aria-label="Mobile" className="mt-6 flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-12 items-center justify-between border-b border-line text-base",
                      active === item.id ? "text-fg" : "text-muted",
                    )}
                  >
                    {item.label}
                    {active === item.id && <span className="size-1.5 rounded-full bg-accent" aria-hidden />}
                  </Link>
                ))}
              </nav>
              <a
                href={site.resumeHref}
                download
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-white"
              >
                <FileText className="size-4" aria-hidden />
                Download Resume
              </a>
              <p className="mt-auto flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                AVAILABLE FOR OPPORTUNITIES
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
