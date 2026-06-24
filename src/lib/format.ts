const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Deterministic ISO (YYYY-MM-DD) -> "Mon D, YYYY". Avoids locale/timezone
 * differences between server and client that cause hydration mismatches.
 */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}
