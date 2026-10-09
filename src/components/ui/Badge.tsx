import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 font-mono text-[11px] leading-none transition-colors duration-300",
        tone === "accent"
          ? "border-accent/30 bg-accent-soft text-[#8fb2ff]"
          : "border-line bg-white/[0.02] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
