import { clsx, type ClassValue } from "clsx";

/** Tiny className combiner. Tailwind v4 + clsx; no tailwind-merge needed for our usage. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
