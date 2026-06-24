import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to be notified when Naren Arulrajah publishes new podcasts, articles, clips, and speaking announcements.",
  alternates: { canonical: "/newsletter" },
};

const perks = [
  "New podcast episodes and interviews",
  "Fresh articles and short clips",
  "Speaking dates and event announcements",
];

export default function NewsletterPage() {
  return (
    <Section theme="dark" grain className="!pt-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Newsletter</Eyebrow>
            <h1 className="text-[length:var(--text-display)] font-semibold leading-[1.05] text-paper-50">
              Stay up to date with Naren.
            </h1>
            <p className="mt-5 text-lg text-paper-300">
              Get notified whenever there&apos;s something new. No fluff, no spam.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mx-auto mt-8 inline-flex flex-col items-start gap-3 text-left">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-paper-300">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent-300" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mx-auto mt-10 max-w-md text-left">
              <NewsletterForm source="newsletter-page" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
