/** Tiny class-name joiner. No dependency needed for this scale. */
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
