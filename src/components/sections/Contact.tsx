import { Github, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="pb-20 pt-4 md:pb-28">
      <div className="container-x">
        <Reveal duration={0.7}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-zinc-900/60 to-zinc-950/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md">
            {/* Top ambient highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-full max-w-2xl -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]"
            />

            <div className="border-b border-white/[0.08] px-6 py-12 text-center sm:px-10 md:py-16">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 mb-5">
                  <Sparkles className="size-3 text-accent" />
                  <p className="eyebrow tracking-[0.16em] text-zinc-300">GET IN TOUCH</p>
                </div>
              </Reveal>

              <Reveal as="h2" delay={0.08} y={16} scale={1} className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Let&apos;s build something useful.
              </Reveal>

              <Reveal as="p" delay={0.16} y={14} scale={1} className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
                Have an idea, opportunity, or interesting problem? I&apos;d love to hear about it.
              </Reveal>

              <Reveal delay={0.24} y={12} scale={1} className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Magnetic strength={0.2}>
                  <Button
                    href="#contact-form"
                    arrow
                    className="shadow-[0_0_24px_-4px_rgba(61,123,255,0.4)] hover:shadow-[0_0_32px_0px_rgba(61,123,255,0.6)]"
                  >
                    Start a Conversation
                  </Button>
                </Magnetic>
                {site.github && (
                  <Magnetic strength={0.2}>
                    <Button href={site.github} variant="secondary" external icon={Github}>
                      View GitHub
                    </Button>
                  </Magnetic>
                )}
              </Reveal>

              {/* Contact Metadata Bar */}
              <Reveal delay={0.32} y={8} scale={1} className="mt-12">
                <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 border-t border-white/[0.08] pt-8 text-left sm:grid-cols-3 sm:gap-6">
                  <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      <Mail className="size-3 text-accent" />
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1.5 block truncate font-mono text-xs text-zinc-200 transition-colors hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      <Phone className="size-3 text-emerald-400" />
                      Phone
                    </span>
                    <a
                      href="tel:+919810808326"
                      className="mt-1.5 block font-mono text-xs text-zinc-200 transition-colors hover:text-accent"
                    >
                      +91 9810808326
                    </a>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      <MapPin className="size-3 text-blue-400" />
                      Location
                    </span>
                    <span className="mt-1.5 block font-mono text-xs text-zinc-200">
                      {site.location}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Direct Message Form */}
            <div id="contact-form" className="scroll-mt-24 px-6 py-10 sm:px-10 md:py-12">
              <div className="relative mx-auto max-w-2xl">
                <p className="eyebrow mb-6 text-zinc-400">Or send a message directly</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
