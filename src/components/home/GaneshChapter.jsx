import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Clock } from "lucide-react";
import { ganeshPillars } from "@/data/festivals";
import { darshanStatus } from "@/data/announcements";
import { films, lastConfirmedAagman } from "@/data/site";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AwaitingNote from "@/components/ui/AwaitingNote";
import { LotusDivider } from "@/components/ui/Ornament";

/**
 * Ganesh Utsav reads as one chapter in three beats — intro, Darshan,
 * Aagman — rather than three near-identical maroon sections in a row.
 */
export function GaneshChapter() {
  return (
    <section
      id="ganesh-utsav"
      aria-labelledby="ganesh-title"
      className="surface-light scroll-mt-24 pt-20 lg:pt-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading
          as="h2"
          tone="light"
          eyebrow="Ganesh Utsav"
          title="Chembur Cha Aadidev"
          lede="From the Aagman Sohala to the final farewell, the Utsav is the heart of the mandal's year."
          align="center"
          divider
        />

        {/* ---------- The four pillars ---------- */}
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ganeshPillars.map((pillar, i) => (
            <li key={pillar.id}>
              <Reveal delay={i * 80} className="h-full">
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-crimson/30 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent"
                    />
                    {pillar.placeholderImage ? (
                      <span className="absolute left-2 top-2 rounded-xs bg-void/70 px-2 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.14em] text-gold">
                        Placeholder image
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-semibold text-charcoal">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-soft">
                      {pillar.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-crimson">
                      {pillar.linkLabel}
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- Darshan panel ---------- */}
      <div
        id="darshan"
        className="on-dark surface-dark mt-24 scroll-mt-24 py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/darshan-idol.jpg"
                alt="Close view of the mandal's Ganpati murti, crowned in gold and framed by lotus garlands"
                width={1920}
                height={1080}
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              as="h2"
              eyebrow="Ganpati Darshan"
              title={darshanStatus.headline}
            />

            <p className="mt-6 max-w-xl leading-relaxed text-ivory/70">
              {darshanStatus.detail}
            </p>

            {darshanStatus.status === "awaiting" ? (
              <AwaitingNote className="mt-6 max-w-xl">
                Darshan timings for the coming Utsav have not yet been
                announced. This section updates the moment the committee
                confirms them — no live stream is running at present.
              </AwaitingNote>
            ) : null}

            {lastConfirmedAagman ? (
              <div className="mt-8 max-w-xl rounded-sm border border-gold/20 p-5">
                <p className="eyebrow text-gold">
                  Last recorded Aagman · {lastConfirmedAagman.year}
                </p>
                <dl className="mt-3 space-y-1.5 text-sm text-ivory/70">
                  <div className="flex gap-2">
                    <dt className="sr-only">Date</dt>
                    <Clock
                      size={15}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-gold/60"
                    />
                    <dd>
                      {lastConfirmedAagman.date} · {lastConfirmedAagman.time}
                    </dd>
                  </div>
                  <dd className="pl-[23px] text-ivory/55">
                    {lastConfirmedAagman.route}
                  </dd>
                </dl>
                <p className="mt-3 text-[0.6875rem] text-ivory/35">
                  Shown as a record of a past celebration, not an upcoming
                  event.
                </p>
              </div>
            ) : null}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/gallery?category=darshan">View Darshan gallery</Button>
              <Button
                href="https://www.youtube.com/watch?v=JtxXbPl2ulE"
                variant="outlineGold"
                external
              >
                Watch our films
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Aagman filmstrip ---------- */}
      <div id="aagman" className="scroll-mt-24 bg-ivory-dim py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              as="h2"
              tone="light"
              eyebrow="Aagman Sohala"
              title="The arrival"
              lede="Dhol-tasha, petals over the street, and Bappa carried home to Chembur."
              className="max-w-xl"
            />
            <Reveal delay={120}>
              <Button href="/gallery?category=aagman" variant="outlineDark">
                Full Aagman gallery
              </Button>
            </Reveal>
          </div>

          <LotusDivider className="mt-10 text-crimson/50" />
        </div>

        {/* Horizontal, touch-friendly filmstrip */}
        {/* Aligned with the content column on the left, bleeding off to the right. */}
        <Reveal className="mx-auto mt-10 max-w-[1400px] px-4 sm:px-8">
          <ul className="no-scrollbar -mr-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:-mr-8">
            {[
              { src: "/images/aagman-01.jpg", caption: "The float, by night" },
              { src: "/images/aagman-04.jpg", caption: "The dhol-tasha pathak" },
              { src: "/images/aagman-02.jpg", caption: "Petals over the street" },
              { src: "/images/aagman-05.jpg", caption: "Beneath the saffron flag" },
              { src: "/images/crowd-01.jpg", caption: "The street celebrates" },
              { src: "/images/pathak-bw-01.jpg", caption: "Before it begins" },
            ].map((shot) => (
              <li
                key={shot.src}
                className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw]"
              >
                <figure className="group">
                  <div className="relative aspect-16/10 overflow-hidden rounded-sm">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.75rem] uppercase tracking-[0.14em] text-charcoal-soft/70">
                    {shot.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Films */}
        <div className="mx-auto mt-14 max-w-[1400px] px-4 sm:px-8">
          <h3 className="eyebrow text-crimson">Festival films</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-3">
            {films.map((film, i) => (
              <li key={film.id}>
                <Reveal delay={i * 80}>
                  <a
                    href={film.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-sm border border-charcoal/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-crimson/30 hover:shadow-[var(--shadow-lift)]"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={film.poster}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 92vw, 30vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-void/35 transition-colors duration-300 group-hover:bg-void/20" />
                      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-maroon/70 text-gold backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Play size={20} aria-hidden="true" fill="currentColor" />
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="font-display text-base font-semibold text-charcoal">
                        {film.title}
                      </p>
                      <p className="mt-1 text-xs text-charcoal-soft">
                        Watch on YouTube · Beyond Thought Films
                      </p>
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GaneshChapter;
