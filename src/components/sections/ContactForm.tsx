"use client";

import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type Field = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<Field, string>>;

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-bg px-3.5 py-3 text-sm text-fg placeholder:text-muted/60 transition-colors duration-200 hover:border-line-strong focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400/60";

export function ContactForm() {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current,
    };

    // Client-side pass for fast feedback; the server validates again.
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        if (key in inputsMap && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    setErrors({});
    setFormError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        errors?: Partial<Record<Field, string[]>>;
      };

      if (res.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      if (data.errors) {
        const next: FieldErrors = {};
        (Object.keys(data.errors) as Field[]).forEach((k) => {
          const msg = data.errors?.[k]?.[0];
          if (msg) next[k] = msg;
        });
        setErrors(next);
      }
      setFormError(data.message ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="size-8 text-accent" aria-hidden />
        <p className="text-base font-medium text-fg">Message sent successfully.</p>
        <p className="text-sm text-muted">I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = Date.now();
            setStatus("idle");
          }}
          className="mt-2 text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fields: Array<{ name: Field; label: string; type?: string; autoComplete: string }> = [
    { name: "name", label: "Name", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" aria-describedby={formError ? "form-error" : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={`c-${f.name}`} className="text-[13px] text-fg">
              {f.label}
            </label>
            <input
              id={`c-${f.name}`}
              name={f.name}
              type={f.type ?? "text"}
              autoComplete={f.autoComplete}
              aria-invalid={Boolean(errors[f.name])}
              aria-describedby={errors[f.name] ? `e-${f.name}` : undefined}
              className={inputClass}
            />
            {errors[f.name] && (
              <p id={`e-${f.name}`} className="mt-1.5 text-xs text-red-300">
                {errors[f.name]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="c-subject" className="text-[13px] text-fg">
          Subject
        </label>
        <input
          id="c-subject"
          name="subject"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "e-subject" : undefined}
          className={inputClass}
        />
        {errors.subject && (
          <p id="e-subject" className="mt-1.5 text-xs text-red-300">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="c-message" className="text-[13px] text-fg">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "e-message" : undefined}
          className={cn(inputClass, "resize-y")}
        />
        {errors.message && (
          <p id="e-message" className="mt-1.5 text-xs text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from humans and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="c-website">Website</label>
        <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {formError && (
        <p id="form-error" role="alert" className="flex items-start gap-2 rounded-lg border border-red-400/30 bg-red-400/5 px-3.5 py-3 text-sm text-red-200">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {formError}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent bg-accent px-5 text-sm font-medium text-white transition-[background-color,transform] duration-150 hover:bg-[#5a90ff] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputsMap = { name: 1, email: 1, subject: 1, message: 1 } as const;
