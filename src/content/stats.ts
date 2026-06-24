/**
 * Home credibility band.
 *
 * The first two values are PLACEHOLDERS — do NOT publish invented figures.
 * Replace "[[ ]]" with real, verified numbers from Naren before launch
 * (see CONTENT-TODO.md). The last two are truthful, derivable facts.
 */
export type Stat = { value: string; label: string; todo?: boolean };

export const stats: Stat[] = [
  // Supplied by the owner — confirm accuracy before public launch.
  { value: "20+", label: "Years in healthcare marketing" },
  { value: "1,000+", label: "Healthcare practices served" },
  { value: "8", label: "Podcasts he co-hosts" }, // the 8 shows on the Podcasts page
  { value: "3", label: "The growth pillars" }, // Find · Like · Choose
];
