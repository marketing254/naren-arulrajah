/**
 * Quote rotator content — Naren's own words (supplied by the owner).
 */
export type Quote = {
  id: string;
  text: string;
  attribution?: string;
};

export const quotes: Quote[] = [
  {
    id: "q-1",
    text: "In business and in leadership, the mindset you carry determines almost everything.",
    attribution: "Naren Arulrajah",
  },
  {
    id: "q-2",
    text: "See in people what they can't see in themselves, then lift them up. That's what separates good from great.",
    attribution: "Naren Arulrajah",
  },
  {
    id: "q-3",
    text: "Before people care about you, care about them first. That's curiosity: questions, not judgment.",
    attribution: "Naren Arulrajah",
  },
];
