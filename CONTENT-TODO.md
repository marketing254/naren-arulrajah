# Content & Asset Checklist

Everything the owner must supply before launch. Nothing here is invented — each
item is a real placeholder in the code. Search the codebase for `TODO` and
`[[ ]]` to find every spot in context.

The two single config files to drop live values into:

- **`src/lib/site.ts`** — name, URLs, email, socials, and the **MSM booking URL**.
- **`.env.local`** — analytics ID (see `.env.example`).

All photography uses a labelled placeholder box (`PlaceholderImage`) until real
assets land. Swap each for `next/image` when supplied.

---

## 1. Identity
- [ ] Logo / wordmark (or confirm the text wordmark is fine) — `src/components/Header.tsx`, `Footer.tsx`
- [ ] Brand color, if different from gold — update `--accent-500/600` + `--accent-soft` in `src/app/globals.css`
- [ ] Favicon — replace `src/app/favicon.ico`
- [ ] OG image — currently auto-generated at `src/app/opengraph-image.tsx`; replace with a supplied 1200×630 if preferred

## 2. Photography (`PlaceholderImage` boxes today)
- [ ] Hero portrait — `src/components/Hero.tsx`
- [ ] Stage photo / speaker reel still — `/speaking`
- [ ] Studio / podcast photo — home, `/about`
- [ ] Candid / personal photo — `/about`, home About teaser
- [ ] Testimonial headshots — `src/content/testimonials.ts`
- [ ] Strategist / host photo — `/book`
- Note: only two photos of Naren are in heavy rotation. Plan a fresh shoot with
  varied angles (mic, seated, candid) + live-seminar / event photos.

## 3. Video & reels
- [x] Real YouTube appearances embedded under **Interviews, webinars & features** + homepage —
      `src/content/videos.ts` (`youtubeVideos`, auto-sourced — **please verify each is the right Naren**)
- [x] **Latest reels** section shows the 9 Instagram reels supplied — `src/content/instagram-reels.ts`.
      Without a feed they render as Instagram's own on-site embeds (real covers visible, no new tab;
      pressing play uses Instagram's player). Instagram blocks pulling a reel's raw video/thumbnail
      from a plain link, so this is the best possible without the feed below.
- [ ] **Instagram feed — enables NATIVE inline playback + real thumbnails + auto-update (recommended):**
      set `INSTAGRAM_FEED_URL` (a free **Behold.so** feed for @narenarulrajah, or the Instagram Graph
      API `/me/media`). Then each reel shows its real poster and **plays natively inline on the page**
      (`<video>`, no new tab), and the latest 10 refresh hourly with no code changes. Notes in
      `src/lib/instagram.ts` + `.env.example`. Until then the manual list is used (newest first).
- [ ] **Video series** section is intentionally reserved/empty for now (per direction). Drop content
      in `src/app/media/page.tsx` when the long-form series exists.
- [ ] (Optional) Podcast featured episode embeds for the placeholder shows — `src/content/podcasts.ts`

## 4. Copy
- [ ] Final approved hero H1 + subhead — `src/components/Hero.tsx`
- [ ] About story: origin / why → Ekwa & the system → personal layer — `src/app/about/page.tsx`
- [ ] Real credibility stats, or confirmation to omit the strip — `src/app/about/page.tsx`
- [ ] Speaking topic list + "what you get" — `src/app/speaking/page.tsx`
- [ ] **Verify every number** (e.g. the "$10M agency" figure) before publishing.

## 5. Proof
- [ ] Real, permissioned testimonials (quote + name + practice + location) — `src/content/testimonials.ts`
- [x] "As seen across" logos added (Business of Aesthetics, Less Insurance Dependence,
      The Thriving Dentist, RIDA) — `src/content/appearances.ts` (`mediaLogos`). Add more anytime.
- [ ] Appearance links (interviews / webinars / features) — `src/content/appearances.ts`
- [ ] Speaker reel / video + speaker testimonials — `/speaking`

## 6. Quotes
- [ ] Naren's own / endorsed quotes for the rotator — `src/content/quotes.ts`

## 7. Insights
- [ ] 3–6 real starter articles (or approval to launch with fewer) — `src/content/insights.ts`

## 8. Resources / lead magnets
- [ ] ~20 freebie titles + files (gated by email) — `src/content/resources.ts`

## 9. Conversion plumbing (handoff to Reshani — wire live)
- [ ] **MSM booking URL / Calendly** — `src/lib/site.ts` (`msmUrl`). If set to a URL, all
      primary CTAs point there. On `/book`, also swap the lead form for the live widget.
- [ ] Newsletter / ESP endpoint + consent line — `src/components/NewsletterForm.tsx` + `src/app/api/lead/route.ts`
- [ ] Lead-form destination (CRM / email) — `src/app/api/lead/route.ts` (the stub logs + 200s)
- [ ] Analytics ID + source tracking — `.env.local` (`NEXT_PUBLIC_ANALYTICS`)
- [x] Social links added (LinkedIn, YouTube, Instagram, Facebook, TikTok) — `src/lib/site.ts` (`socials`)
- [ ] Contact email — `src/lib/site.ts` (`email`)

## 10. Legal
- [ ] Privacy Policy copy — `src/app/privacy/page.tsx`
- [ ] Terms copy — `src/app/terms/page.tsx`

---

### SEO — what's done on-page, and the honest path to ranking

On-page optimization is in place, targeting **Naren Arulrajah** + "marketing expert" /
"thought leader":
- Keyword-rich `<title>` ("Naren Arulrajah — Marketing Expert & Thought Leader for
  Healthcare Practices"), meta description, and `keywords` — `src/lib/site.ts`, `src/app/layout.tsx`
- JSON-LD `Person` schema with `knowsAbout` topics + `sameAs` linking all 5 socials — `src/lib/seo.ts`
- Those terms placed in prominent on-page copy (hero, About), semantic one-H1-per-page,
  `sitemap.xml`, `robots.txt`, OG/Twitter cards, fast pages.

**Reality check on "show up first":** on-page SEO can't *guarantee* a #1 Google ranking
for broad, competitive terms like "marketing expert" — that's decided by Google based on
**off-page** signals this site can't set by itself:
- A real domain with history (point `narenarulrajah.com` at this site and let it age)
- **Backlinks** from reputable sites (Ekwa, podcast show notes, interviews, press)
- Consistent NAP + a Google Business Profile, and the socials all linking back here
- Ongoing fresh content (the Insights articles)

Quickest wins: publish on the real domain, add the social profile links *back* to the site,
get the YouTube/podcast hosts to link episode pages here, and ship a few real articles.

### Analytics events already wired
- `book_msm_click` — fires on every primary "Book an MSM" CTA (with a `location` prop)
- `book_msm_submit` — fires on `/book` form submit
- `newsletter_submit`, `lead_submit` — newsletter, speaking, media, general, resource forms

They no-op until `NEXT_PUBLIC_ANALYTICS` is set; in dev they log to the console.
