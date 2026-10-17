import { cn } from "@/lib/cn";

/**
 * The mandal's ornamental vocabulary — four hand-authored SVG motifs used
 * as controlled accents. Rule of the design system: at most two ornaments
 * per viewport, never layered on top of the murti, never on cards.
 */

/** A toran valance — hung beneath headers and above dark bands. */
export function Toran({ className }) {
  return (
    <svg
      viewBox="0 0 1200 34"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block w-full", className)}
    >
      <defs>
        <pattern
          id="gk-toran"
          x="0"
          y="0"
          width="60"
          height="34"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0h60v6H0z"
            fill="currentColor"
            fillOpacity="0.35"
          />
          <path
            d="M6 6c0 12 8 18 24 18s24-6 24-18"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.1"
          />
          <circle cx="30" cy="26" r="2.4" fill="currentColor" fillOpacity="0.6" />
          <path
            d="M30 28.4v4"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="1200" height="34" fill="url(#gk-toran)" />
    </svg>
  );
}

/** A lotus-and-rule divider for ivory editorial bands. */
export function LotusDivider({ className }) {
  return (
    <svg
      viewBox="0 0 240 24"
      aria-hidden="true"
      className={cn("h-6 w-[240px]", className)}
    >
      <path
        d="M4 12h86M150 12h86"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <path
        d="M120 4c4 3.6 6.4 6.4 6.4 8s-2.8 4-6.4 8c-3.6-4-6.4-6.4-6.4-8s2.4-4.4 6.4-8Z"
        fill="currentColor"
        fillOpacity="0.75"
      />
      <path
        d="M120 7.2c6.8 2 10.8 3.6 12 4.8-1.2 1.2-5.2 2.8-12 4.8-6.8-2-10.8-3.6-12-4.8 1.2-1.2 5.2-2.8 12-4.8Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <circle cx="100" cy="12" r="1.6" fill="currentColor" fillOpacity="0.6" />
      <circle cx="140" cy="12" r="1.6" fill="currentColor" fillOpacity="0.6" />
    </svg>
  );
}

/** A mandala rosette — used once per page as a large, faint backdrop. */
export function MandalaRosette({ className }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        transform="translate(200 200)"
      >
        {petals.map((deg) => (
          <ellipse
            key={deg}
            rx="26"
            ry="96"
            cy="-78"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="44" />
        <circle r="60" strokeDasharray="2 6" />
        <circle r="150" strokeDasharray="1 9" />
        <circle r="178" />
      </g>
    </svg>
  );
}

/** A temple-arch frame used around the hero murti and feature imagery. */
export function TempleArch({ className }) {
  return (
    <svg
      viewBox="0 0 400 560"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path
        d="M8 552V210C8 100 94 16 200 16s192 84 192 194v342"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path
        d="M24 552V212C24 110 103 32 200 32s176 78 176 180v340"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <circle cx="200" cy="16" r="4" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}
