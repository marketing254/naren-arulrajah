"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";
import { CheckIcon } from "@/components/icons";

const schema = z.object({
  email: z.string().email("Enter a valid email address."),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please agree to receive emails.",
  }),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm({
  compact = false,
  source = "newsletter-band",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    // Send to our API route, which forwards to the Google Sheet.
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "Newsletter",
          email: values.email,
          message: values.consent ? "consent: yes" : "consent: no",
          source,
        }),
      });
    } catch {
      /* network hiccup — still confirm so the user isn't stuck */
    }
    track("newsletter_submit", { source });
    setDone(true);
  }

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm text-success-500">
        <CheckIcon className="h-5 w-5" />
        You&apos;re on the list. Talk soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <div className={cn("flex gap-2", compact ? "flex-col" : "flex-col sm:flex-row")}>
        <label className="sr-only" htmlFor={`email-${source}`}>
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          placeholder="you@practice.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
          className="min-w-0 flex-1 rounded-full border border-paper-300/20 bg-ink-900/60 px-5 py-3 text-sm text-paper-50 placeholder:text-muted-500 focus:border-accent-300 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent-600 disabled:opacity-60"
        >
          {isSubmitting ? "Joining…" : "Subscribe"}
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs text-accent-300">{errors.email.message}</p>
      )}
      <label className="mt-3 flex items-start gap-2 text-xs text-muted-500">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-0.5 h-4 w-4 accent-[var(--color-accent-500)]"
        />
        {/* TODO: replace with the final approved marketing-consent line. */}
        <span>
          I agree to receive marketing emails and can unsubscribe at any time.
        </span>
      </label>
      {errors.consent && (
        <p className="mt-1 text-xs text-accent-300">{errors.consent.message}</p>
      )}
    </form>
  );
}
