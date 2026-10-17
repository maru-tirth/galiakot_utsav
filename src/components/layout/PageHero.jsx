import Image from "next/image";
import { MandalaRosette, LotusDivider } from "@/components/ui/Ornament";

/** Compact cinematic masthead shared by every inner page. */
export function PageHero({ eyebrow, title, lede, image, imageAlt }) {
  return (
    <section className="on-dark surface-dark relative isolate overflow-hidden">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-30"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-maroon/70 via-maroon/85 to-maroon"
          />
        </>
      ) : null}

      <MandalaRosette className="pointer-events-none absolute -right-24 -top-20 -z-10 h-[420px] w-[420px] text-gold/[0.06]" />

      <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:pb-28 lg:pt-[calc(var(--header-h)+5rem)]">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="display-2 mt-4 max-w-3xl text-balance text-ivory">
          {title}
        </h1>
        <LotusDivider className="mt-6 text-gold" />
        {lede ? (
          <p className="lede mt-6 max-w-2xl text-ivory/70">{lede}</p>
        ) : null}
      </div>
    </section>
  );
}

export default PageHero;
