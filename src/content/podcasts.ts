/**
 * Podcast brands Naren hosts or is a regular presence on.
 *
 * "Listen" links point to each show's official website (verified resolving).
 * VERIFY before launch: confirm Naren's exact role on each show. If you have
 * direct Spotify / Apple feed URLs, swap them in here.
 */
export type ShowLink = { label: string; href: string };

export type Show = {
  id: string;
  name: string;
  abbr: string;
  specialty: string;
  role: string;
  description: string;
  links: ShowLink[];
  logo?: string; // path under /public/logos/ — shown next to the show name
  comingSoon?: boolean;
};

export const shows: Show[] = [
  {
    id: "td",
    logo: "/logos/thriving-dentist.png",
    name: "Thriving Dentist",
    abbr: "TD",
    specialty: "Dental",
    role: "Co-host",
    description:
      "Conversations on building a thriving, profitable dental practice — from patient experience to marketing that actually works.",
    links: [{ label: "Listen", href: "https://www.thrivingdentist.com/" }],
  },
  {
    id: "lid",
    logo: "/logos/less-insurance-dependence.png",
    name: "Less Insurance Dependence",
    abbr: "LID",
    specialty: "Dental",
    role: "Co-host",
    description:
      "Helping dental practices reduce their reliance on insurance and grow on their own terms.",
    links: [{ label: "Listen", href: "https://www.lessinsurancedependence.com/" }],
  },
  {
    id: "boa",
    logo: "/logos/business-of-aesthetics.png",
    name: "Business of Aesthetics",
    abbr: "BOA",
    specialty: "Medical aesthetics",
    role: "Co-host",
    description:
      "The business side of running a successful medical aesthetics practice — growth, marketing, and leadership.",
    links: [{ label: "Listen", href: "https://www.thebusinessofaesthetics.com/" }],
  },
  {
    id: "vbi",
    logo: "/logos/veterinary-business-institute.png",
    name: "Veterinary Business Institute",
    abbr: "VBI",
    specialty: "Veterinary",
    role: "Co-host",
    description:
      "Practical strategies for veterinary practice owners who want to grow a healthy, sustainable business.",
    links: [{ label: "Listen", href: "https://www.veterinarybusinessinstitute.com/" }],
  },
  {
    id: "dominate-law",
    logo: "/logos/dominate-law.png",
    name: "Dominate Law",
    abbr: "DL",
    specialty: "Legal",
    role: "Co-host",
    description:
      "Marketing and growth conversations for law firms that want to stand out and win the right clients.",
    links: [{ label: "Listen", href: "https://www.dominatelaw.com/" }],
  },
  {
    id: "rida",
    logo: "/logos/rida.svg",
    name: "RIDA",
    abbr: "RIDA",
    specialty: "Healthcare",
    role: "Co-host",
    description:
      "Insight-driven conversations for healthcare practice owners on growth, marketing, and patient experience.",
    links: [{ label: "Listen", href: "https://www.rid.academy/" }],
  },
  {
    id: "oba",
    logo: "/logos/ophthalmology-business-academy.png",
    name: "Ophthalmology Business Academy",
    abbr: "OBA",
    specialty: "Ophthalmology",
    role: "Co-host",
    description:
      "The business of ophthalmology — marketing, leadership, and practice growth for eye-care professionals.",
    links: [{ label: "Listen", href: "https://www.obacademy.org/" }],
  },
  {
    id: "iu",
    logo: "/logos/insurance-untangled.png",
    name: "Insurance Untangled",
    abbr: "IU",
    specialty: "Healthcare",
    role: "Co-host",
    description:
      "Making sense of insurance for healthcare practices — and how to grow beyond depending on it.",
    links: [{ label: "Listen", href: "https://www.insuranceuntangled.com/" }],
  },
];

/** Naren's planned original series (not about digital marketing). */
export const originalPodcast = {
  name: "An Original Series (Coming Soon)",
  description:
    "Naren is launching a personal podcast on the founder journey, giving back, and success stories from the field — short 5–10 minute episodes to start. Not about digital marketing.",
  comingSoon: true,
};
