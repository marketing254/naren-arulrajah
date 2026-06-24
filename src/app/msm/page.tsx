import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Book a Complimentary Marketing Session",
  description:
    "Book a free, high-value marketing session with Ekwa Marketing, Naren's agency. A working session focused on your healthcare practice and your numbers. Not a sales call.",
  alternates: { canonical: "/msm" },
};

const walkAway = [
  "A clear read on where your practice stands today",
  "The few highest-leverage moves to help patients find, like, and choose you",
  "An honest view of what a predictable growth system looks like for your practice",
  "Real numbers and next steps you can act on, with no obligation",
];

export default function MsmPage() {
  return (
    <Section theme="dark" grain className="!pt-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>Complimentary Marketing Session</Eyebrow>
              <h1 className="text-[length:var(--text-display)] font-semibold leading-[1.05] text-paper-50">
                A working session to grow your practice.
              </h1>
              <p className="mt-5 text-lg text-paper-300">
                This is a free, high-value marketing session with Ekwa Marketing, Naren&apos;s
                agency. It is not a sales call. It is focused on your healthcare practice and
                your numbers, and it gives you a clear read on where your practice stands today.
              </p>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-accent-300">
                By the end of the session, you&apos;ll walk away with:
              </p>
              <ul className="mt-4 space-y-3">
                {walkAway.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-paper-300">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-paper-300/10 bg-ink-800 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-300">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <p className="text-sm text-paper-300">
                  You&apos;ll meet with a strategist from the Ekwa team who works with
                  healthcare practices every day. No obligation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-paper-300/10 bg-ink-800 p-4 sm:p-6">
              <h2 className="px-2 font-display text-2xl text-paper-50">Pick a time</h2>
              <p className="mb-4 mt-2 px-2 text-sm text-muted-500">
                Choose a slot that works for you and you&apos;re booked, no back-and-forth.
              </p>
              {/* Live scheduler (YouCanBook.me) — transparent so it sits on the dark card */}
              <iframe
                src="https://ekwasales-withceo-lila-alerted.youcanbook.me?embed=true"
                title="Book your complimentary marketing session"
                className="h-[480px] w-full rounded-2xl"
                style={{ border: 0, background: "transparent" }}
                allow="payment"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
