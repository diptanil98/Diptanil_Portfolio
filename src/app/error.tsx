"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center pt-16">
      <div className="container-x">
        <p className="eyebrow">SOMETHING WENT WRONG</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-5xl">This page hit an error.</h1>
        <p className="mt-4 max-w-md text-[15px] text-muted">Try again. If it keeps happening, email me and I&apos;ll fix it.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex min-h-11 items-center rounded-lg border border-accent bg-accent px-4 text-sm font-medium text-white transition-[background-color,transform] hover:bg-[#5a90ff] active:scale-[0.97]"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
