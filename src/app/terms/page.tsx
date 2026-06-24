import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of this website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl text-paper-50">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-[1.8] text-paper-300">{children}</p>;
}

export default function TermsPage() {
  return (
    <Section theme="dark" className="!pt-32">
      <Container>
        <div className="mx-auto max-w-[68ch]">
          <h1 className="font-display text-[length:var(--text-display)] font-semibold text-paper-50">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-muted-500">Last updated: June 2026</p>

          <P>
            These Terms of Use govern your access to and use of this website. By using the site,
            you agree to these terms. If you do not agree, please do not use the site.
          </P>

          <H2>Use of the site</H2>
          <P>
            You may use this site for lawful, personal, and professional purposes. You agree not
            to misuse the site, attempt to disrupt it, access it through automated means without
            permission, or use it in any way that could harm the site or other users.
          </P>

          <H2>Intellectual property</H2>
          <P>
            The content on this site, including text, design, graphics, and logos, is owned by{" "}
            {SITE.name} or used with permission, and is protected by applicable laws. You may not
            copy, reproduce, or redistribute it without prior written consent. Third-party
            trademarks, podcast names, and logos shown on the site remain the property of their
            respective owners and are used for identification and reference only.
          </P>

          <H2>No professional advice</H2>
          <P>
            Content on this site is provided for general informational purposes and does not
            constitute professional, legal, financial, or marketing advice for your specific
            situation. Any results or examples referenced are not guarantees of future outcomes.
          </P>

          <H2>External links and embeds</H2>
          <P>
            The site links to and embeds third-party content (such as podcasts, videos, articles,
            and scheduling tools). We are not responsible for the content, accuracy, or practices
            of those third-party sites and services.
          </P>

          <H2>Bookings and submissions</H2>
          <P>
            Submitting a form or booking request does not create a binding agreement. We will
            follow up to confirm details, and any engagement is subject to a separate agreement.
          </P>

          <H2>Disclaimer and limitation of liability</H2>
          <P>
            The site is provided &ldquo;as is&rdquo; without warranties of any kind. To the
            fullest extent permitted by law, {SITE.name} is not liable for any damages arising
            from your use of, or inability to use, the site.
          </P>

          <H2>Changes to these terms</H2>
          <P>
            We may update these terms from time to time. Continued use of the site after changes
            take effect constitutes acceptance of the revised terms.
          </P>

          <H2>Contact</H2>
          <P>
            Questions about these terms? Email{" "}
            <a className="text-accent-300 hover:text-accent-500" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </P>

          <p className="mt-10 text-xs leading-relaxed text-muted-500">
            These are general terms of use provided for convenience and are not legal advice.
            Please have them reviewed by qualified counsel before relying on them.
          </p>
        </div>
      </Container>
    </Section>
  );
}
