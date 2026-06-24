/**
 * The three pillars of Naren's brand philosophy:
 * "Marketing is helping the right customers find you, like you, and choose you."
 */
export type Pillar = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  icon: "find" | "like" | "choose";
  points: string[];
};

export const pillars: Pillar[] = [
  {
    id: "find",
    title: "Find You",
    tagline: "Be there when patients are searching.",
    body: "SEO and organic search put your practice in front of the right patients at the exact moment they go looking for care.",
    icon: "find",
    points: ["SEO and organic search", "Local search visibility", "Reach the right patients"],
  },
  {
    id: "like",
    title: "Like You",
    tagline: "Earn trust before the first visit.",
    body: "Video, a clear website, Google reviews, and real testimonials make patients feel they already know you and want to come in.",
    icon: "like",
    points: ["Video and landing pages", "Reviews and testimonials", "An easy first impression"],
  },
  {
    id: "choose",
    title: "Choose You",
    tagline: "Make saying yes effortless.",
    body: "Trust, clear calls to action, and a simple booking experience turn interest into booked patients who choose your practice.",
    icon: "choose",
    points: ["Trust and social proof", "Clear calls to action", "Simple, fast booking"],
  },
];
