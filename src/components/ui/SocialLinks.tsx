import Link from "next/link";
import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
}

export function buildSocialLinks(links: { github: string; linkedin: string; email: string }): SocialLink[] {
  const out: SocialLink[] = [];
  if (links.github) out.push({ label: "GitHub", href: links.github, icon: Github, external: true });
  if (links.linkedin) out.push({ label: "LinkedIn", href: links.linkedin, icon: Linkedin, external: true });
  out.push({ label: "Email", href: `mailto:${links.email}`, icon: Mail, external: false });
  return out;
}

export function SocialLinks({ items, className }: { items: SocialLink[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {items.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <Link
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group inline-flex min-h-9 items-center gap-2 text-[13px] text-muted opacity-90 transition-[color,opacity] duration-200 hover:text-fg hover:opacity-100"
          >
            <Icon
              className="size-3.5 transition-[transform,color] duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent"
              aria-hidden
            />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
