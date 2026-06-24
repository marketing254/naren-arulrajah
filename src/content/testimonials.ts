/**
 * Real, publicly published client reviews from https://www.ekwa.com/reviews/.
 * Attributed exactly as Ekwa publishes them (practice type + city — the reviews
 * are anonymized on the source page). Lightly trimmed for length; wording kept
 * faithful. Verify before launch if you want named, headshot'd testimonials.
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  practice: string;
  location: string;
  vertical: string;
  headshot?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Getting to know Naren and the Ekwa team has been a wonderful advantage. The results have been amazing, at not even a fraction of what I spent on marketing before. We've reduced our marketing expenses significantly and increased our new-patient volume. The value is in the numbers.",
    name: "Dermatology practice",
    practice: "Verified Ekwa client",
    location: "Portland, OR",
    vertical: "Dermatology",
  },
  {
    id: "t-2",
    quote:
      "We had our best year ever, topping $2,000,000 in collections and almost 600 new patients. Thank you, Ekwa.",
    name: "Dental practice",
    practice: "Verified Ekwa client",
    location: "Greenville, SC",
    vertical: "Dental",
  },
  {
    id: "t-3",
    quote:
      "Choosing Ekwa was a game changer for our practice. Nine out of ten new patients say they found us through Google or our website — we're now getting 25 to 30 new patients a month from the internet.",
    name: "Dental practice",
    practice: "Verified Ekwa client",
    location: "Longview, TX",
    vertical: "Dental",
  },
];
