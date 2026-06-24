"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";
import { CheckIcon } from "@/components/icons";

export type LeadType = "booking" | "msm" | "speaking" | "media" | "general";

const VERTICALS = ["Dental", "Veterinary", "Medical aesthetics", "Legal", "Other"] as const;
const EVENT_TYPES = [
  "Live / In-Person Speaking",
  "Virtual / Online Event",
  "Podcast Interview",
  "Media & Press",
] as const;

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  practice: z.string().optional(),
  vertical: z.string().optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  organization: z.string().optional(),
  eventType: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const headingCopy: Record<LeadType, { submit: string; success: string }> = {
  booking: { submit: "Request a booking", success: "Booking request received." },
  msm: { submit: "Book my session", success: "Request received." },
  speaking: { submit: "Send speaking inquiry", success: "Inquiry received." },
  media: { submit: "Send media inquiry", success: "Inquiry received." },
  general: { submit: "Send message", success: "Message received." },
};

const inputClass =
  "w-full rounded-xl border border-paper-300/20 bg-ink-900/60 px-4 py-3 text-sm text-paper-50 placeholder:text-muted-500 focus:border-accent-300 focus:outline-none";
const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-500";

export function LeadForm({ type = "msm" }: { type?: LeadType }) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    // Deliver to Netlify Forms (dashboard → Forms + email notifications).
    const payload: Record<string, string> = {
      "form-name": "naren-leads",
      "bot-field": "",
      type,
      ...Object.fromEntries(
        Object.entries(values).map(([k, v]) => [k, v == null ? "" : String(v)]),
      ),
    };
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });
    } catch {
      /* network hiccup — still show success so the user isn't stuck */
    }
    if (type === "booking") track("book_naren_submit");
    else if (type === "msm") track("book_msm_submit");
    else track("lead_submit", { type });
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-success-500/30 bg-ink-800 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-500/15 text-success-500">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl text-paper-50">{headingCopy[type].success}</h3>
        <p className="mt-3 text-sm text-paper-300">
          {type === "booking"
            ? "Thanks. Naren's team will reach out to confirm details and availability for your event."
            : type === "msm"
              ? "What happens next: a member of the team will reach out to confirm a time. This is a working session, so come with your biggest growth challenge."
              : "Thanks for reaching out. You'll hear back shortly."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className={labelClass}>
            Name
          </label>
          <input id="lf-name" className={inputClass} aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-accent-300">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="lf-email" className={labelClass}>
            Email
          </label>
          <input
            id="lf-email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-accent-300">{errors.email.message}</p>}
        </div>
      </div>

      {type === "msm" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lf-practice" className={labelClass}>
                Practice name
              </label>
              <input id="lf-practice" className={inputClass} {...register("practice")} />
            </div>
            <div>
              <label htmlFor="lf-vertical" className={labelClass}>
                Practice type
              </label>
              <select id="lf-vertical" className={inputClass} {...register("vertical")} defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                {VERTICALS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lf-phone" className={labelClass}>
                Phone
              </label>
              <input id="lf-phone" type="tel" className={inputClass} {...register("phone")} />
            </div>
            <div>
              <label htmlFor="lf-website" className={labelClass}>
                Website
              </label>
              <input id="lf-website" className={inputClass} placeholder="https://" {...register("website")} />
            </div>
          </div>
          <div>
            <label htmlFor="lf-message" className={labelClass}>
              Biggest growth challenge
            </label>
            <textarea id="lf-message" rows={4} className={inputClass} {...register("message")} />
          </div>
        </>
      )}

      {type === "booking" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lf-org" className={labelClass}>
                Organization / event
              </label>
              <input id="lf-org" className={inputClass} {...register("organization")} />
            </div>
            <div>
              <label htmlFor="lf-eventtype" className={labelClass}>
                Type of event
              </label>
              <select id="lf-eventtype" className={inputClass} {...register("eventType")} defaultValue="">
                <option value="" disabled>
                  Select…
                </option>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="lf-date" className={labelClass}>
              Preferred date
            </label>
            <input id="lf-date" type="date" className={inputClass} {...register("eventDate")} />
          </div>
          <div>
            <label htmlFor="lf-message" className={labelClass}>
              Brief description
            </label>
            <textarea id="lf-message" rows={4} className={inputClass} {...register("message")} />
          </div>
        </>
      )}

      {type === "speaking" && (
        <>
          <div>
            <label htmlFor="lf-org" className={labelClass}>
              Organization / event
            </label>
            <input id="lf-org" className={inputClass} {...register("organization")} />
          </div>
          <div>
            <label htmlFor="lf-message" className={labelClass}>
              Tell us about the opportunity
            </label>
            <textarea id="lf-message" rows={4} className={inputClass} {...register("message")} />
          </div>
        </>
      )}

      {(type === "media" || type === "general") && (
        <div>
          <label htmlFor="lf-message" className={labelClass}>
            Message
          </label>
          <textarea id="lf-message" rows={4} className={inputClass} {...register("message")} />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "mt-2 inline-flex items-center justify-center rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:bg-accent-600 disabled:opacity-60",
        )}
      >
        {isSubmitting ? "Sending…" : headingCopy[type].submit}
      </button>
      <p className="text-xs text-muted-500">
        {type === "msm"
          ? "No obligation. This is a working session, not a sales call."
          : "No obligation. Naren's team will follow up to confirm the details."}
      </p>
    </form>
  );
}
