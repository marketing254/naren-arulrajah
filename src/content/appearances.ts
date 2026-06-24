/**
 * Appearances ("On Stage & On Screen").
 *
 * This file holds only the hand-picked VIDEO appearances (with YouTube
 * thumbnails) — curated from The Thriving Dentist Show, keeping the
 * digital-marketing episodes that feature Naren.
 *
 * Recent PODCAST episodes (Less Insurance Dependence + Thriving Dentist) are
 * pulled LIVE from their feeds at build/runtime and merged in on the Interviews
 * page, so the page auto-updates as new episodes drop. See
 * src/lib/podcast-feeds.ts.
 */
export type AppearanceType = "interview" | "webinar" | "feature";

export type Appearance = {
  id: string;
  type: AppearanceType;
  title: string;
  outlet: string;
  logo?: string;
  url: string;
  date: string; // ISO
  /** YouTube id — shows a thumbnail in the list when present. */
  videoId?: string;
  /** When true, this appears in the Featured grid; otherwise under "More appearances". */
  featured?: boolean;
};

const watch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const SHOW = "The Thriving Dentist Show";

export const appearances: Appearance[] = [
  {
    id: "a-1",
    type: "feature",
    title: "Google now reads three websites and writes the answer itself. Is one of them yours?",
    outlet: SHOW,
    url: watch("iUy2dM_rRl4"),
    videoId: "iUy2dM_rRl4",
    date: "2026-06-02",
  },
  {
    id: "a-2",
    type: "interview",
    title: "42% of Patients Avoid You: How to Win Dental Fear Patients",
    outlet: SHOW,
    url: watch("-3o41gdKqr8"),
    videoId: "-3o41gdKqr8",
    date: "2026-06-03",
  },
  {
    id: "a-3",
    type: "feature",
    title: "3% of Dental Practices Get 95% of Google Traffic — Why",
    outlet: SHOW,
    url: watch("cn7q3PHpVNo"),
    videoId: "cn7q3PHpVNo",
    date: "2026-05-12",
  },
  {
    id: "a-4",
    type: "interview",
    title: "Why Dentists Must Win Zero-Click Search on Google",
    outlet: SHOW,
    url: watch("9t0GoFdUvvA"),
    videoId: "9t0GoFdUvvA",
    date: "2026-05-08",
  },
  {
    id: "a-5",
    type: "interview",
    title: "Dos and Don'ts in the World of AI Search and Zero-Click Search",
    outlet: SHOW,
    url: watch("WfOq9wpVh0M"),
    videoId: "WfOq9wpVh0M",
    date: "2026-05-06",
  },
  {
    id: "a-6",
    type: "feature",
    title: "Stop Wasting Money on Social Media Ads (Here's Why)",
    outlet: SHOW,
    url: watch("CgYAb6ncr3s"),
    videoId: "CgYAb6ncr3s",
    date: "2026-05-05",
  },
  // Newer Thriving Dentist marketing episodes — featured in the grid.
  {
    id: "a-7",
    type: "feature",
    title: "The easiest marketing audit most dentists never do",
    outlet: SHOW,
    url: watch("11dkJX_AWk0"),
    videoId: "11dkJX_AWk0",
    date: "2026-06-20",
    featured: true,
  },
  {
    id: "a-8",
    type: "feature",
    title: "Find the Marketing Gap That Will Increase Your New Patient Flow",
    outlet: SHOW,
    url: watch("RZG2EtrPcMU"),
    videoId: "RZG2EtrPcMU",
    date: "2026-06-19",
    featured: true,
  },
  {
    id: "a-9",
    type: "feature",
    title: "Why Dentists Must Master Local Search in 2026",
    outlet: SHOW,
    url: watch("yA5iXLn-BRk"),
    videoId: "yA5iXLn-BRk",
    date: "2026-06-17",
    featured: true,
  },
];

/** Logos for the "As seen across" trust strip. Real media logos supplied. */
export type MediaLogo = { id: string; name: string; logo: string; w: number; h: number };
export const mediaLogos: MediaLogo[] = [
  { id: "l-1", name: "Business of Aesthetics", logo: "/logos/business-of-aesthetics.png", w: 331, h: 132 },
  { id: "l-2", name: "Less Insurance Dependence", logo: "/logos/less-insurance-dependence.png", w: 260, h: 120 },
  { id: "l-3", name: "The Thriving Dentist", logo: "/logos/thriving-dentist.png", w: 300, h: 58 },
  { id: "l-4", name: "RIDA", logo: "/logos/rida.svg", w: 959, h: 314 },
  { id: "l-5", name: "Veterinary Business Institute", logo: "/logos/veterinary-business-institute.png", w: 2874, h: 973 },
  { id: "l-6", name: "Dominate Law", logo: "/logos/dominate-law.png", w: 360, h: 196 },
  { id: "l-7", name: "Insurance Untangled", logo: "/logos/insurance-untangled.png", w: 462, h: 340 },
  { id: "l-9", name: "Ophthalmology Business Academy", logo: "/logos/ophthalmology-business-academy.png", w: 252, h: 70 },
];
