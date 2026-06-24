import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ContactRouter } from "@/components/ContactRouter";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Naren Arulrajah for general, speaking, or media inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section theme="dark" grain className="!pt-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="text-[length:var(--text-display)] font-semibold leading-[1.05] text-paper-50">
                Get in touch.
              </h1>
              <p className="mt-5 text-lg text-paper-300">
                Choose the kind of inquiry and we&apos;ll route it to the right
                place. For practice growth, the fastest path is to{" "}
                <a href="/book" className="text-accent-300 link-underline">
                  book a Marketing Strategy Meeting
                </a>
                .
              </p>

              <div className="mt-8 space-y-2 text-sm text-paper-300">
                <p>
                  Email:{" "}
                  {/* TODO: real contact email (lib/site.ts) */}
                  <a href={`mailto:${SITE.email}`} className="text-accent-300 link-underline">
                    {SITE.email}
                  </a>
                </p>
                <div className="flex gap-4 pt-2">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper-300 hover:text-accent-300"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-paper-300/10 bg-ink-800 p-6 sm:p-8">
              <ContactRouter />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
