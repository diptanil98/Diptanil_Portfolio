"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal as TermIcon, CornerDownLeft, Sparkles } from "lucide-react";

interface Line {
  id: number;
  kind: "cmd" | "out";
  text: string;
}

const INTRO: Array<Omit<Line, "id">> = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "Diptanil Sarkar — Full-Stack Developer & CS Engineer" },
  { kind: "cmd", text: "stack" },
  { kind: "out", text: "React  Node.js  TypeScript  MongoDB  Docker  AI  Automation" },
  { kind: "cmd", text: "status" },
  { kind: "out", text: "AVAILABLE_FOR_OPPORTUNITIES=true (Full-time / Projects)" },
];

const SUGGESTIONS = ["projects", "skills", "experience", "contact", "whoami", "stack", "clear"];

const TYPE_MS = 24;

function run(cmd: string): string[] | "clear" {
  switch (cmd) {
    case "help":
      return [
        "Available commands:",
        "  projects    — list featured full-stack projects",
        "  skills      — view technical stack by domain",
        "  experience  — view internships and background",
        "  contact     — get email and social links",
        "  whoami      — developer bio summary",
        "  stack       — active tech stack",
        "  status      — current availability",
        "  clear       — clear the console screen",
      ];
    case "about":
    case "whoami":
      return [
        "Diptanil Sarkar — B.Tech Computer Science (8.07 CGPA).",
        "Based in Ghaziabad, India.",
        "Focus: Building resilient React, Node.js, and AI-automated applications.",
      ];
    case "projects":
      return [
        "Featured Projects:",
        ...projects.map((p) => `  ${p.number}  ${p.name.padEnd(10)} [${p.category}]`),
        "Type 'work' or scroll up to view interactive case studies.",
      ];
    case "work":
      return projects.map((p) => `  ${p.number} ${p.name}: ${p.title}`);
    case "skills":
      return [
        "Skills Matrix:",
        ...skillGroups.map((g) => `  ${g.title.padEnd(18)}: ${g.items.join(", ")}`),
      ];
    case "experience":
      return [
        "Work History:",
        ...experience.map((e) => `  ${e.company.padEnd(22)}: ${e.role} (${e.period})`),
      ];
    case "contact":
      return [
        `Email   : ${site.email}`,
        `GitHub  : ${site.github || "https://github.com/diptanil98"}`,
        `LinkedIn: ${site.linkedin || "https://www.linkedin.com/in/diptanilsarkar"}`,
      ];
    case "stack":
      return ["Frontend: React.js, TypeScript, Tailwind CSS", "Backend : Node.js, Express.js, MongoDB", "AI & Ops: TensorFlow.js, n8n, Docker, GitHub Actions"];
    case "status":
      return ["AVAILABLE_FOR_OPPORTUNITIES=true", "Ready for Software Engineer / Full-Stack Developer roles."];
    case "clear":
      return "clear";
    default:
      return [`command not found: "${cmd}". Type "help" or click a suggestion chip below.`];
  }
}

export function Terminal() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -15% 0px" });
  const idRef = useRef(0);
  const tokenRef = useRef(0);
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number | null>(null);

  const mk = useCallback((kind: Line["kind"], text: string): Line => ({ id: idRef.current++, kind, text }), []);

  const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

  useEffect(() => {
    if (!inView) return;
    const token = ++tokenRef.current;

    if (reduce) {
      setLines(INTRO.map((l) => mk(l.kind, l.text)));
      return;
    }

    (async () => {
      setLines([]);
      for (const item of INTRO) {
        if (tokenRef.current !== token) return;
        if (item.kind === "cmd") {
          for (let i = 1; i <= item.text.length; i++) {
            if (tokenRef.current !== token) return;
            setTyping(item.text.slice(0, i));
            await sleep(TYPE_MS);
          }
          await sleep(120);
          if (tokenRef.current !== token) return;
          setTyping(null);
          setLines((prev) => [...prev, mk("cmd", item.text)]);
        } else {
          await sleep(80);
          if (tokenRef.current !== token) return;
          setLines((prev) => [...prev, mk("out", item.text)]);
        }
      }
    })();

    return () => {
      tokenRef.current++;
    };
  }, [inView, reduce, mk]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const introActive = typing !== null || lines.length < INTRO.length;
    tokenRef.current++;
    setTyping(null);
    const base = introActive && lines.length < INTRO.length ? INTRO.map((l) => mk(l.kind, l.text)) : lines;

    setHistory((h) => [...h, cmd]);
    setHistIdx(null);
    setValue("");

    const result = run(cmd);
    if (result === "clear") {
      setLines([]);
      return;
    }
    setLines([...base, mk("cmd", cmd), ...result.map((t) => mk("out", t))]);
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    executeCommand(value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const next = histIdx === null ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setValue(history[next]);
    } else if (e.key === "ArrowDown" && histIdx !== null) {
      e.preventDefault();
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(null);
        setValue("");
      } else {
        setHistIdx(next);
        setValue(history[next]);
      }
    }
  }

  return (
    <section aria-label="Terminal" className="py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-2">
            <TermIcon className="size-4 text-accent" />
            <p className="eyebrow">A LITTLE SOMETHING FOR DEVELOPERS</p>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Interactive Console
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div
            ref={wrapRef}
            className="mx-auto overflow-hidden rounded-xl border border-white/[0.1] bg-[#08080b] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md"
          >
            {/* Top Bar with controls */}
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-zinc-950/80 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f56]/80 transition-opacity hover:opacity-100" />
                  <span className="size-2.5 rounded-full bg-[#ffbd2e]/80 transition-opacity hover:opacity-100" />
                  <span className="size-2.5 rounded-full bg-[#27c93f]/80 transition-opacity hover:opacity-100" />
                </div>
                <span className="ml-3 font-mono text-xs text-zinc-400">diptanil@portfolio: ~</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-zinc-500 hidden sm:inline">zsh v5.9</span>
                <button
                  type="button"
                  onClick={() => executeCommand("clear")}
                  className="rounded border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-400 transition-colors hover:border-white/[0.2] hover:text-white"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.06] bg-black/40 px-4 py-2 text-xs">
              <span className="flex items-center gap-1 font-mono text-[10px] uppercase text-zinc-500">
                <Sparkles className="size-2.5 text-accent" />
                Run:
              </span>
              {SUGGESTIONS.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => executeCommand(cmd)}
                  className="rounded border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-zinc-300 transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-[#8fb2ff]"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div
              ref={bodyRef}
              onClick={() => document.getElementById("terminal-input")?.focus()}
              className="h-72 overflow-y-auto px-4 py-4 font-mono text-[12.5px] leading-6 sm:h-80 sm:px-5"
              role="log"
              aria-live="polite"
            >
              <AnimatePresence initial={false}>
                {lines.map((l) => (
                  <motion.div
                    key={l.id}
                    initial={reduce ? false : { opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: EASE }}
                    className={l.kind === "cmd" ? "text-white font-medium" : "whitespace-pre-wrap break-words text-zinc-400"}
                  >
                    {l.kind === "cmd" ? (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-accent font-bold">➜</span>
                        <span className="text-emerald-400">~</span>
                        <span className="text-white">{l.text}</span>
                      </div>
                    ) : l.text.includes("AVAILABLE_FOR") ? (
                      <span className="text-[#8fb2ff] font-semibold">{l.text}</span>
                    ) : l.text.startsWith("Featured Projects") || l.text.startsWith("Skills Matrix") || l.text.startsWith("Work History") ? (
                      <span className="text-zinc-200 font-semibold">{l.text}</span>
                    ) : (
                      l.text
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {typing !== null && (
                <div className="flex items-center gap-1.5 text-white font-medium mt-1">
                  <span className="text-accent font-bold">➜</span>
                  <span className="text-emerald-400">~</span>
                  <span>{typing}</span>
                  <span className="inline-block h-3.5 w-1.5 bg-accent [animation:caret_1s_steps(1)_infinite]" aria-hidden />
                </div>
              )}

              <form onSubmit={submit} className="flex items-center gap-2 mt-2" aria-label="Terminal command input">
                <div className="flex items-center gap-1.5">
                  <span className="text-accent font-bold">➜</span>
                  <span className="text-emerald-400">~</span>
                </div>
                <input
                  id="terminal-input"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder="type a command (e.g. 'skills' or 'help')..."
                  className="min-w-0 flex-1 bg-transparent text-white placeholder:text-zinc-600 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Submit command"
                  className="text-zinc-500 hover:text-accent transition-colors"
                >
                  <CornerDownLeft className="size-3.5" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
