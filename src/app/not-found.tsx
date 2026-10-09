import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-16">
      <div className="container-x">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fg sm:text-6xl">Nothing here.</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try the work section instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent bg-accent px-4 text-sm font-medium text-white transition-[background-color,transform] duration-150 hover:bg-[#5a90ff] active:scale-[0.97]"
          >
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden />
            Back home
          </Link>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center rounded-lg border border-line bg-surface-2 px-4 text-sm font-medium text-fg transition-colors hover:border-line-strong"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
