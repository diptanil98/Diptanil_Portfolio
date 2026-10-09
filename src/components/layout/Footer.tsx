import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <Reveal as="footer" y={0} scale={1} className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-fg">DIPTANIL SARKAR</p>
          <p className="mt-2 text-xs text-muted">
            © {new Date().getFullYear()} Diptanil Sarkar. Built with Next.js, TypeScript and MongoDB.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((n) => (
            <Link key={n.id} href={n.href} className="text-xs text-muted transition-colors hover:text-fg">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-muted">
          {site.github && (
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-fg">
              <Github className="size-4" aria-hidden />
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-fg">
              <Linkedin className="size-4" aria-hidden />
            </a>
          )}
          <a href={`mailto:${site.email}`} aria-label="Email" className="transition-colors hover:text-fg">
            <Mail className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
