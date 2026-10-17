import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { TempleArch, MandalaRosette } from "@/components/ui/Ornament";
import PetalField from "./PetalField";

/**
 * Cinematic hero.
 *
 * Composition rule: the murti is the only fully-lit object in the frame.
 * Nothing overlays it — ornament surrounds, text sits beside it.
 *
 * The hero image is the mandal's OWN murti, taken from the Aagman Sohala
 * 2023 film. Replace with a higher-resolution still when the mandal's
 * photographer supplies one — same near-square crop, ≥1600px.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark surface-dark relative isolate overflow-hidden"
    >
      {/* Ambient layers, furthest back first */}
      <MandalaRosette className="pointer-events-none absolute left-1/2 top-[-18%] -z-10 h-[820px] w-[820px] -translate-x-1/2 text-gold/[0.055]" />
      <PetalField className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-20 pt-[calc(var(--header-h)+2rem)] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-[calc(var(--header-h)+4rem)]">
        {/* ---------- Copy ---------- */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p
            data-reveal="in"
            className="eyebrow text-gold"
          >
            Galiakot Sanskrutik Utsav Mandal · Chembur
          </p>

          <h1
            id="hero-title"
            lang="mr"
            className="display-1 mt-5 text-ivory text-balance"
          >
            चेंबुरचा
            <span className="block text-gold">आदिदेव</span>
          </h1>

          {/* The transliteration, for readers who do not read Devanagari. */}
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-ivory/55">
            {site.tagline}
          </p>

          <p className="font-deva mx-auto mt-5 max-w-lg text-xl leading-relaxed text-gold-soft/85 sm:text-2xl lg:mx-0">
            {site.taglineMarathi}
          </p>

          <p className="lede mx-auto mt-5 max-w-xl text-ivory/70 lg:mx-0">
            Faith, heritage and devotion since {site.established} — the
            celebration that has brought the families of Chembur together for
            generations.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <Button href="/ganesh-utsav#darshan">Experience Darshan</Button>
            <Button href="/history" variant="outlineGold">
              Explore Our Legacy
            </Button>
          </div>

          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/15 lg:mx-0">
            {[
              { k: "Established", v: site.established },
              { k: "Festivals", v: "Ganesh & Navratri" },
              { k: "Home", v: "Chembur" },
            ].map((stat) => (
              <div key={stat.k} className="bg-maroon px-3 py-4 text-center">
                <dt className="text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-gold/70">
                  {stat.k}
                </dt>
                <dd className="mt-1.5 font-display text-base font-semibold text-ivory sm:text-lg">
                  {stat.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------- The murti ---------- */}
        <div className="order-1 lg:order-2">
          <figure className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            <TempleArch className="pointer-events-none absolute -inset-x-4 -top-8 bottom-0 text-gold/35" />

            {/* Warm lamplight pooling behind the murti */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(230,162,60,.28),rgba(230,162,60,0)_62%)] blur-xl"
            />

            <div className="relative overflow-hidden rounded-t-[14rem] rounded-b-sm">
              <Image
                src="/images/hero-idol.jpg"
                alt="Chembur Cha Aadidev — the mandal's Ganpati murti lit against the night sky during the Aagman Sohala"
                width={1240}
                height={1050}
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="h-auto w-full object-cover"
              />
              {/* Base-only scrim so the photo meets the maroon band cleanly.
                  It never rises far enough to touch the murti's face. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-maroon via-maroon/55 to-transparent"
              />
            </div>

            <figcaption className="mt-4 text-center text-[0.6875rem] uppercase tracking-[0.18em] text-ivory/35">
              Aagman Sohala · Film by Beyond Thought Films
            </figcaption>
          </figure>
        </div>
      </div>

      {/* ---------- Scroll cue ---------- */}
      <a
        href="#heritage"
        aria-label="Scroll to the mandal's story"
        className="group absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold/60 transition-colors hover:text-gold lg:flex"
      >
        <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>
        <span className="relative h-9 w-px overflow-hidden bg-gold/20">
          <span className="absolute inset-x-0 top-0 h-3 bg-gold [animation:gk-scroll-cue_2.4s_ease-in-out_infinite]" />
        </span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-y-0.5"
        />
      </a>
    </section>
  );
}

export default Hero;
