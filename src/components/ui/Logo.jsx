import { cn } from "@/lib/cn";

/**
 * Logo placeholder — a brass medallion carrying the mandal's initials.
 *
 * PLACEHOLDER: replace with the mandal's official emblem when supplied.
 * Keep the same 1:1 footprint so no layout shift occurs.
 */
export function Logo({ className, tone = "gold" }) {
  const stroke = tone === "gold" ? "#D6AE58" : "#7E151C";
  const fill = tone === "gold" ? "#FFF8EC" : "#310E14";

  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Galiakot Sanskrutik Utsav Mandal emblem"
      className={cn("h-11 w-11 shrink-0", className)}
    >
      <circle cx="32" cy="32" r="30.5" fill="none" stroke={stroke} strokeWidth="1.2" />
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="0.8"
        strokeDasharray="1.5 4"
      />
      {/* Temple arch silhouette */}
      <path
        d="M20 46V31c0-6.6 5.4-12 12-12s12 5.4 12 12v15"
        fill="none"
        stroke={stroke}
        strokeWidth="1.3"
      />
      <path d="M17 46h30" stroke={stroke} strokeWidth="1.3" />
      {/* Kalash finial */}
      <circle cx="32" cy="15.5" r="2" fill={stroke} />
      <text
        x="32"
        y="40.5"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="13"
        fontWeight="600"
        fill={stroke}
        letterSpacing="0.5"
      >
        GK
      </text>
      <circle cx="32" cy="32" r="30.5" fill={fill} fillOpacity="0" />
    </svg>
  );
}

export default Logo;
