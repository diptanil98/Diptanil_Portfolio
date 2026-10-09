import Image from "next/image";
import { ArrowDown, Download, MapPin, GraduationCap, Terminal as TerminalIcon } from "lucide-react";
import { site } from "@/data/site";
import { getProfileImage } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SocialLinks, buildSocialLinks } from "@/components/ui/SocialLinks";
import { RoleRotator } from "@/components/ui/RoleRotator";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const photo = getProfileImage();
  const socials = buildSocialLinks({ github: site.github, linkedin: site.linkedin, email: site.email });

  return (
    <section id="top" className="relative pb-16 pt-28 sm:pt-32 md:pb-24">
      {/* Ambient background highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.18fr_1fr] lg:gap-16">
        <div>
          {/* Eyebrow badge */}
          <Reveal immediate delay={0.2} y={16} scale={1} duration={0.6}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md transition-colors hover:border-white/[0.2]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <p className="eyebrow tracking-[0.16em] text-zinc-300">
                FULL-STACK DEVELOPER · REACT · AI
              </p>
            </div>
          </Reveal>

          {/* Main Title */}
          <Reveal as="h1" immediate delay={0.28} y={22} scale={1} duration={0.7} className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Diptanil.
            </span>
          </Reveal>

          {/* Subtitle */}
          <Reveal as="p" immediate delay={0.36} y={20} scale={1} duration={0.7} className="mt-3 text-xl font-normal text-zinc-400 sm:text-2xl">
            I build things for the web.
          </Reveal>

          {/* Dynamic Animated Role Rotator */}
          <Reveal immediate delay={0.42} y={18} scale={1} duration={0.7} className="mt-4">
            <RoleRotator />
          </Reveal>

          {/* Description */}
          <Reveal as="p" immediate delay={0.48} y={18} scale={1} duration={0.7} className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            Computer Science engineer focused on building modern web applications with{" "}
            <span className="font-medium text-zinc-200">React</span>,{" "}
            <span className="font-medium text-zinc-200">Node.js</span>,{" "}
            <span className="font-medium text-zinc-200">TypeScript</span>,{" "}
            <span className="font-medium text-accent">AI-powered workflows</span>, and automation.
          </Reveal>

          {/* CTA Buttons with Magnetic micro-interaction */}
          <Reveal immediate delay={0.56} y={16} scale={1} duration={0.7} className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Magnetic strength={0.2}>
              <Button
                href="/#work"
                icon={ArrowDown}
                className="shadow-[0_0_24px_-4px_rgba(61,123,255,0.4)] hover:shadow-[0_0_32px_0px_rgba(61,123,255,0.6)] [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-y-0.5"
              >
                Explore My Work
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button href={site.resumeHref} variant="secondary" icon={Download} download>
                Download Resume
              </Button>
            </Magnetic>
          </Reveal>

          {/* Subtle Social Links */}
          <Reveal immediate delay={0.64} y={12} scale={1} duration={0.6} className="mt-8">
            <SocialLinks items={socials} />
          </Reveal>
        </div>

        {/* Right Column: Hero Portrait */}
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <ImageReveal delay={0.4} parallax={6} className="relative">
            {/* Portrait Frame */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-950 shadow-[var(--shadow-card)] transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_-5px_rgba(61,123,255,0.3)]">
              {/* Corner Viewfinder Accents */}
              <div className="pointer-events-none absolute left-3 top-3 z-20 size-2.5 border-l-2 border-t-2 border-accent/60 transition-colors group-hover:border-accent" />
              <div className="pointer-events-none absolute right-3 top-3 z-20 size-2.5 border-r-2 border-t-2 border-accent/60 transition-colors group-hover:border-accent" />
              <div className="pointer-events-none absolute bottom-3 left-3 z-20 size-2.5 border-b-2 border-l-2 border-accent/60 transition-colors group-hover:border-accent" />
              <div className="pointer-events-none absolute bottom-3 right-3 z-20 size-2.5 border-b-2 border-r-2 border-accent/60 transition-colors group-hover:border-accent" />

              {/* Top Floating Badge */}
              <div className="absolute right-3.5 top-3.5 z-20">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.15] bg-black/70 px-2.5 py-1 font-mono text-[9px] font-medium text-white backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              {photo ? (
                <Image
                  src={photo}
                  alt="Portrait of Diptanil Sarkar"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 400px, 90vw"
                  className="object-cover grayscale-[0.25] transition-[transform,filter] duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                  <span className="font-mono text-6xl font-semibold tracking-tight text-white/80">DS</span>
                  <span className="eyebrow max-w-[16rem] px-4 leading-relaxed">
                    Diptanil Sarkar
                  </span>
                </div>
              )}

              {/* Bottom Vignette & Glowing Edge */}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
            </div>
          </ImageReveal>

          {/* Under-image Metadata Cards */}
          <Reveal immediate delay={0.85} y={8} scale={1} duration={0.5}>
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-white/[0.08] bg-zinc-950/70 p-3 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  <MapPin className="size-2.5 text-accent" />
                  Location
                </span>
                <span className="mt-1 font-mono text-xs font-medium text-zinc-200">
                  {site.locationShort}
                </span>
              </div>

              <div className="flex flex-col border-x border-white/[0.08] px-2.5">
                <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  <GraduationCap className="size-2.5 text-emerald-400" />
                  Education
                </span>
                <span className="mt-1 font-mono text-xs font-medium text-zinc-200">
                  B.Tech CS (8.07)
                </span>
              </div>

              <div className="flex flex-col pl-1">
                <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  <TerminalIcon className="size-2.5 text-blue-400" />
                  Role
                </span>
                <span className="mt-1 font-mono text-xs font-medium text-zinc-200">
                  Full-Stack Dev
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue indicator at bottom of hero */}
      <div className="mt-16 flex justify-center">
        <ScrollCue targetId="work" />
      </div>
    </section>
  );
}
