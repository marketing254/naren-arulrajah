import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this site collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl text-paper-50">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-[1.8] text-paper-300">{children}</p>;
}

export default function PrivacyPage() {
  return (
    <Section theme="dark" className="!pt-32">
      <Container>
        <div className="mx-auto max-w-[68ch]">
          <h1 className="font-display text-[length:var(--text-display)] font-semibold text-paper-50">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-500">Last updated: June 2026</p>

          <P>
            This Privacy Policy explains how {SITE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;) collects, uses, and protects information when you visit this
            website. By using the site, you agree to the practices described below.
          </P>

          <H2>Information we collect</H2>
          <P>
            We only collect information you choose to provide and basic technical data needed
            to run the site:
          </P>
          <ul className="mt-4 space-y-2 text-base leading-[1.8] text-paper-300">
            <li>
              <strong className="text-paper-50">Information you submit.</strong> When you
              complete a form (for example, to book a session, send a message, or join the
              newsletter), we collect the details you enter, such as your name, email, phone,
              practice name, and message.
            </li>
            <li>
              <strong className="text-paper-50">Usage data.</strong> Like most websites, we
              may collect standard analytics such as pages visited, approximate location, browser
              type, and referring links. This helps us understand how the site is used.
            </li>
            <li>
              <strong className="text-paper-50">Cookies.</strong> We may use cookies and
              similar technologies for essential functionality and analytics. You can control
              cookies through your browser settings.
            </li>
          </ul>

          <H2>How we use your information</H2>
          <P>
            We use the information to respond to your inquiries, schedule and deliver sessions,
            send content you request, improve the site, and keep it secure. We do not sell your
            personal information.
          </P>

          <H2>Service providers</H2>
          <P>
            We use trusted third-party services to operate the site, including hosting and form
            handling (Netlify), scheduling (YouCanBook.me), and embedded media (such as YouTube
            and Instagram). These providers process data on our behalf and have their own
            privacy policies.
          </P>

          <H2>Data retention</H2>
          <P>
            We keep the information you provide only as long as needed to respond to you and for
            legitimate business purposes, after which it is deleted or anonymized.
          </P>

          <H2>Your rights</H2>
          <P>
            You may request access to, correction of, or deletion of the personal information we
            hold about you, and you can unsubscribe from emails at any time using the link in
            any message. To make a request, contact us at{" "}
            <a className="text-accent-300 hover:text-accent-500" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </P>

          <H2>Children&apos;s privacy</H2>
          <P>
            This site is intended for a professional, adult audience and is not directed to
            children under 13. We do not knowingly collect information from children.
          </P>

          <H2>Changes to this policy</H2>
          <P>
            We may update this policy from time to time. The &ldquo;last updated&rdquo; date
            above reflects the most recent revision.
          </P>

          <H2>Contact</H2>
          <P>
            Questions about this policy? Email{" "}
            <a className="text-accent-300 hover:text-accent-500" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </P>

          <p className="mt-10 text-xs leading-relaxed text-muted-500">
            This is a general privacy policy provided for convenience and is not legal advice.
            Please have it reviewed by qualified counsel before relying on it.
          </p>
        </div>
      </Container>
    </Section>
  );
}
