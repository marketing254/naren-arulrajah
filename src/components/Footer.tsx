import Link from "next/link";
import { Container } from "@/components/Container";
import { NewsletterForm } from "@/components/NewsletterForm";
import { brandIcon } from "@/components/brand-icons";
import { NAV_LINKS, PRIMARY_CTA, MSM_CTA, SITE } from "@/lib/site";

const year = 2026; // TODO: update on yearly redeploy.

export function Footer() {
  return (
    <footer className="border-t border-paper-300/10 bg-ink-800 py-16 text-paper-300">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-semibold text-paper-50">{SITE.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-500">
              {SITE.brandStatement}
            </p>
            <div className="mt-5 flex gap-3">
              {SITE.socials.map((s) => {
                const Icon = brandIcon[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-300/15 text-paper-300 transition-colors hover:border-accent-300 hover:bg-ink-700 hover:text-accent-300"
                  >
                    {Icon ? <Icon className="h-[18px] w-[18px]" /> : s.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="text-sm">
            <p className="mb-4 font-semibold uppercase tracking-[0.14em] text-muted-500">Explore</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-paper-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Work with Naren */}
          <nav aria-label="Work with Naren" className="text-sm">
            <p className="mb-4 font-semibold uppercase tracking-[0.14em] text-muted-500">
              Work with Naren
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href={PRIMARY_CTA.href} className="hover:text-paper-50">
                  {PRIMARY_CTA.label} (speaking)
                </Link>
              </li>
              <li>
                <Link href={MSM_CTA.href} className="hover:text-paper-50">
                  {MSM_CTA.label}
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-paper-50">
                  Newsletter
                </Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter mini */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-muted-500">
              Stay in the loop
            </p>
            <p className="mb-4 text-sm text-paper-300">
              New podcasts, articles, highlights, and speaking dates, straight to your inbox.
            </p>
            <NewsletterForm compact source="footer" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper-300/10 pt-6 text-xs text-muted-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. {SITE.flagship}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper-50">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-paper-50">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
