import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  aside?: string;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({ eyebrow, title, aside, as: Tag = "h2", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12", className)}>
      <div className="space-y-4">
        <p className="eyebrow">{eyebrow}</p>
        <Tag className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{title}</Tag>
      </div>
      {aside && <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">{aside}</p>}
    </Reveal>
  );
}
