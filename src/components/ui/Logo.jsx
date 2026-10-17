import Image from "next/image";
import { cn } from "@/lib/cn";

import logoMark from "../../../public/images/logo.png";

/**
 * The mandal's official emblem — a saffron seal carrying Ganesh, the mandal's
 * name in Devanagari, and "चेंबुरचा आदिदेव".
 *
 * `tone="gold"` paints the same artwork in brass using it as a CSS mask, for
 * places where the saffron would fight the surrounding palette. The footprint
 * is identical either way, so swapping tones costs no layout shift.
 */
export function Logo({ className, tone = "brand" }) {
  const sizing = cn("h-11 w-11 shrink-0", className);

  if (tone === "gold") {
    return (
      <span
        role="img"
        aria-label="Galiakot Sanskrutik Utsav Mandal emblem"
        className={cn(sizing, "block bg-gold")}
        style={{
          maskImage: `url(${logoMark.src})`,
          WebkitMaskImage: `url(${logoMark.src})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    );
  }

  return (
    <Image
      src={logoMark}
      alt="Galiakot Sanskrutik Utsav Mandal emblem"
      className={cn(sizing, "object-contain")}
      sizes="96px"
      priority
    />
  );
}

export default Logo;
