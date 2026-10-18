import Image from "next/image";
import { navratriEvents } from "@/data/festivals";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AwaitingNote from "@/components/ui/AwaitingNote";

/**
 * Navratri gets its own identity: a warmer saffron key within the same
 * token system, a different ornament rhythm, and an event-listing layout
 * ready to carry confirmed dates when the committee supplies them.
 */
export function Navratri() {
  return (
    <section
      id="navratri"
      aria-labelledby="navratri-title"
      className="on-dark surface-navratri scroll-mt-24 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              as="h2"
              eyebrow="Navratri Utsav"
              title="Nine nights of Garba"
              lede={`${site.navratriClaim} — a ground that has drawn the families of the neighbourhood together for generations.`}
            />

            <ul className="mt-10 divide-y divide-saffron/20 border-y border-saffron/20">
              {navratriEvents.map((event, i) => (
                <li key={event.id}>
                  <Reveal
                    delay={i * 70}
                    className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
                  >
                    <h3 className="font-display text-xl font-semibold text-saffron">
                      {event.title}
                    </h3>
                    <p className="order-3 w-full text-sm leading-relaxed text-ivory/65">
                      {event.body}
                    </p>
                    <p className="ml-auto text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/35">
                      {event.schedule}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>

            <AwaitingNote className="mt-8 border-saffron/30 bg-saffron/[0.07]">
              Dates, daily timings and venue details for the coming Navratri
              will be published here once confirmed by the committee.
            </AwaitingNote>

            <Reveal delay={150} className="mt-9">
              <Button href="/navratri">Explore Navratri Utsav</Button>
            </Reveal>
          </div>

          {/* Offset image pair */}
          <Reveal delay={100} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-10">
                <Figure
                  src="/images/navratri-01.jpg"
                  alt="The lane filled with Garba dancers, the lit stage at the far end"
                  ratio="aspect-3/4"
                />
                <Figure
                  src="/images/navratri-06.jpg"
                  alt="The decorated Navratri stage lit in blue and green"
                  ratio="aspect-4/3"
                />
              </div>
              <div className="space-y-4">
                <Figure
                  src="/images/navratri-05.jpg"
                  alt="Dandiya sticks meeting under the coloured lights of the Utsav"
                  ratio="aspect-4/3"
                />
                <Figure
                  src="/images/navratri-02.jpg"
                  alt="Families in festival dress walking the decorated lane during Navratri"
                  ratio="aspect-3/4"
                />
              </div>
            </div>

            <p className="mt-5 text-center text-[0.625rem] uppercase tracking-[0.16em] text-ivory/30">
              Navratri 2026 · Galiakot Sanskrutik Utsav Mandal
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Figure({ src, alt, ratio }) {
  return (
    <div className={`relative ${ratio} overflow-hidden rounded-sm`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 46vw, 23vw"
        className="object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#2a0a10]/55 to-transparent"
      />
    </div>
  );
}

export default Navratri;
