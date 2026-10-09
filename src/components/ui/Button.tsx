import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  icon?: LucideIcon;
  arrow?: boolean;
  external?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white border-accent hover:bg-[#5a90ff] hover:border-[#8fb2ff] hover:-translate-y-px",
  secondary:
    "bg-surface-2 text-fg border-line hover:border-line-strong hover:bg-[#1b1b20] hover:-translate-y-px",
  ghost: "bg-transparent text-muted border-transparent hover:text-fg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  arrow = false,
  external = false,
  download = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border font-medium",
    "transition-[transform,background-color,border-color,color] duration-150 ease-[var(--ease-premium)]",
    "active:scale-[0.97]",
    size === "sm" ? "min-h-9 px-3 text-xs" : "px-4 text-sm",
    variants[variant],
    className,
  );
  const inner = (
    <>
      {Icon && <Icon className="size-4" aria-hidden />}
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 ease-[var(--ease-premium)] group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
