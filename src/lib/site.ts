/**
 * Central site configuration.
 *
 * Positioning: this is Naren's PERSONAL BRAND hub. Two separate conversion
 * flows that must never be merged:
 *   - PRIMARY_CTA  "Book Naren"  -> /book  (speaking, events, podcast guest)
 *   - MSM_CTA      "Book an MSM" -> /msm   (Ekwa Marketing discovery call)
 *
 * Audience wording rule: always "healthcare practices" (never "and
 * professional-services practices").
 */
export const SITE = {
  name: "Naren Arulrajah",
  role: "Founder of Ekwa Marketing · Speaker · Author",
  flagship: "Founder & CEO of Ekwa Marketing",
  tagline: "Healthcare Marketing Expert, Speaker & Author",
  // Core brand philosophy — used across the site.
  brandStatement:
    "Marketing is helping the right customers find you, like you, and choose you.",
  description:
    "Naren Arulrajah, founder of Ekwa Marketing, helps healthcare practices grow by helping the right patients find them, like them, and choose them. Explore his podcasts, interviews, articles, books, and clips — and book him to speak.",
  // TODO: set the real production URL before deploy.
  url: "https://narenarulrajah.com",

  keywords: [
    "Naren Arulrajah",
    "healthcare marketing expert",
    "healthcare marketing speaker",
    "marketing keynote speaker",
    "dental marketing",
    "practice growth",
    "Ekwa Marketing",
    "find like choose",
    "SEO speaker",
    "AI and search",
  ],

  // MSM (Marketing Strategy Meeting) = Ekwa discovery call. Separate flow.
  // On-site /msm page (trackable). TODO: swap for the real MSM scheduler URL.
  msmUrl: "/msm",

  // TODO: real contact email.
  email: "hello@narenarulrajah.com",

  // Live social profiles (used for nav, footer, and JSON-LD sameAs).
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/narena/" },
    { label: "YouTube", href: "https://www.youtube.com/@NarenArulrajah" },
    { label: "Instagram", href: "https://www.instagram.com/narenarulrajah/" },
    { label: "Facebook", href: "https://www.facebook.com/narenarulrajah2" },
    { label: "TikTok", href: "https://www.tiktok.com/@narenarulrajah" },
  ],

  org: {
    name: "Ekwa Marketing",
    url: "https://www.ekwa.com/",
  },
} as const;

/** The three pillars of the brand philosophy. */
export const PILLARS_INTRO = "Find you. Like you. Choose you.";

/** Speaking topics — shown on /book and referenced in bios. */
export const SPEAKING_TOPICS = [
  "Search Engine Optimization — How to Dominate Search",
  "The Impact of AI on Search",
  "The Impact of AI on Marketing",
  "Healthcare Practice Marketing (Find. Like. Choose.)",
  "The Founder Journey",
  "Building a Company That Gives Back",
  "Success Stories from the Field",
] as const;

export const NAV_LINKS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Naren", href: "/about" },
      { label: "About Ekwa Marketing", href: "/about/ekwa" },
    ],
  },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Interviews", href: "/interviews" },
  { label: "Articles", href: "/articles" },
  { label: "Books", href: "/books" },
  { label: "Highlights", href: "/highlights" },
] as const;

/** Primary CTA — booking Naren for speaking / events. */
export const PRIMARY_CTA = {
  label: "Book Naren",
  longLabel: "Book Naren to speak",
  href: "/book",
} as const;

/**
 * Secondary CTA — Ekwa's free marketing session (discovery call).
 * Audience-facing wording only: never show the "MSM" acronym to visitors.
 */
export const MSM_CTA = {
  label: "Complimentary Marketing Session",
  longLabel: "Book a Complimentary Marketing Session",
  href: SITE.msmUrl,
} as const;
