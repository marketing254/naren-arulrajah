# Naren Arulrajah — Personal Brand Website

A premium, cinematic personal-brand site for Naren Arulrajah (Founder & CEO of
Ekwa Marketing). The site's job is to make him read as the category's marquee
authority and to drive one primary action: **booking a Marketing Strategy
Meeting (MSM)**.

Refined editorial-dark aesthetic, warm-gold accent, characterful typography, and
one well-orchestrated load animation with scroll-triggered section reveals.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Tailwind CSS v4** with a CSS-variable design-token layer (`src/app/globals.css`)
- **Motion** (Framer Motion) for the load + scroll animations
- **React Hook Form + Zod** for all forms
- Typed content layer in `src/content/` (no CMS for v1; structured so one can be added)
- Deploys to **Netlify** (`netlify.toml` + `@netlify/plugin-nextjs`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

Requires Node 20+ (Node 24 also works locally).

## Where to drop content & assets

Everything unknown is a visible placeholder. The full checklist lives in
[`CONTENT-TODO.md`](./CONTENT-TODO.md). The short version:

| What | Where |
| --- | --- |
| Name, URLs, email, socials, **MSM booking URL** | `src/lib/site.ts` |
| Analytics ID | `.env.local` (see `.env.example`) |
| Podcasts & episodes | `src/content/podcasts.ts` |
| Testimonials | `src/content/testimonials.ts` |
| Appearances + media logos | `src/content/appearances.ts` |
| Quote rotator | `src/content/quotes.ts` |
| Articles | `src/content/insights.ts` |
| Resources / lead magnets | `src/content/resources.ts` |
| Photography | swap each `<PlaceholderImage>` for `next/image` |
| Legal copy | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |

### Conversion plumbing (handoff to Reshani)

The front end is built so the live wiring is a few clearly-labelled config points:

- **`src/lib/site.ts` → `msmUrl`**: set to the real Calendly/booking URL and every
  primary CTA points there. Left as `/book`, the on-site lead form is used.
- **`src/app/api/lead/route.ts`**: a stub endpoint that logs the payload and
  returns `200`. Replace its body to forward leads to the CRM / ESP / email.
  Every payload carries a `type` (`msm` | `speaking` | `media` | `general` |
  `newsletter` | `resource`) and a `source`, so leads stay attributable.
- **`.env.local` → `NEXT_PUBLIC_ANALYTICS`**: GA4 id or `plausible`.

## Project structure

```
src/
  app/                 routes (App Router)
    page.tsx           home
    about/ speaking/ media/ insights/ insights/[slug]/
    book/ contact/ resources/ privacy/ terms/
    api/lead/route.ts  stub lead endpoint
    opengraph-image.tsx  generated OG/Twitter image
    sitemap.ts robots.ts
  components/          Header, Footer, Button, Section, Hero, QuoteRotator,
                      LeadForm, NewsletterForm, cards, Reveal, …
  content/            typed data layer (podcasts, testimonials, quotes, …)
  lib/                site config, seo (JSON-LD), analytics, helpers
```

## Deploying to Netlify

1. Push this repo to GitHub/GitLab.
2. In Netlify, **Add new site → Import an existing project**, pick the repo.
3. Build settings are read from `netlify.toml` (command `npm run build`, the
   Next.js plugin handles the rest). No manual publish-dir change needed.
4. Set environment variables (Site settings → Environment): `NEXT_PUBLIC_ANALYTICS`,
   and `NEXT_PUBLIC_SITE_URL` once the domain is known.
5. Deploy. After the domain is set, update `url` in `src/lib/site.ts` so
   canonical/OG/sitemap point at the live domain.

## Accessibility, SEO, performance

- One H1 per page, semantic landmarks, skip link, visible focus rings, keyboard
  nav, ARIA on nav/carousel/tabs, `prefers-reduced-motion` honored throughout.
- Per-page metadata + canonical, OG/Twitter cards, `sitemap.xml`, `robots.txt`,
  JSON-LD `Person` + `Organization` (site-wide) and `Article` (posts).
- Self-hosted fonts via `next/font` (`display: swap`), placeholder images carry
  fixed aspect ratios to avoid layout shift, embeds link out (load on click).

## Notes

- `AGENTS.md` flags that this Next.js version has breaking changes vs. older
  docs — dynamic routes use async `params` (`await params`), which this code
  follows.
- No facts, stats, testimonials, awards, or media features are invented. Every
  unknown is a placeholder tracked in `CONTENT-TODO.md`.
