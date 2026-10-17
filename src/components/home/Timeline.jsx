import { timeline } from "@/data/timeline";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { MandalaRosette } from "@/components/ui/Ornament";
import { cn } from "@/lib/cn";

/**
 * Legacy timeline. Unconfirmed milestones render in a visibly quieter
 * state rather than being invented or hidden.
 */
export function Timeline() {
  return (
    <section
      aria-labelledby="timeline-title"
      className="on-dark surface-dark relative overflow-hidden py-20 lg:py-28"
    >
      <MandalaRosette className="pointer-events-none absolute -left-40 top-1/4 h-[560px] w-[560px] text-gold/[0.05]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading
          as="h2"
          eyebrow="Our Legacy"
          title="Milestones across the generations"
          lede="The mandal's record is kept by the people who built it. Entries marked as awaiting confirmation will be filled in as the committee verifies them."
          align="center"
          divider
          className="mx-auto"
        />

        <ol className="relative mx-auto mt-16 max-w-3xl">
          {/* The spine */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent sm:left-1/2"
          />

          {timeline.map((entry, i) => (
            <li key={`${entry.year}-${entry.title}`} className="relative">
              <Reveal
                delay={i * 70}
                className={cn(
                  "relative pb-12 pl-10 sm:w-1/2 sm:pl-0",
                  i % 2 === 0
                    ? "sm:mr-auto sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12",
                )}
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border",
                    i % 2 === 0
                      ? "sm:left-auto sm:-right-3"
                      : "sm:-left-3",
                    entry.confirmed
                      ? "border-gold/60 bg-maroon"
                      : "border-gold/25 bg-maroon",
                  )}
                >
                  <span
                    className={cn(
                      "h-2 w-2 rotate-45",
                      entry.confirmed ? "bg-gold" : "bg-gold/35",
                    )}
                  />
                </span>

                <p
                  className={cn(
                    "font-display text-2xl font-semibold sm:text-3xl",
                    entry.confirmed ? "text-gold" : "text-gold/40",
                  )}
                >
                  {entry.year}
                </p>
                <h3
                  className={cn(
                    "mt-1 font-display text-xl",
                    entry.confirmed ? "text-ivory" : "text-ivory/55",
                  )}
                >
                  {entry.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    entry.confirmed ? "text-ivory/65" : "text-ivory/40",
                  )}
                >
                  {entry.body}
                </p>

                {!entry.confirmed ? (
                  <p className="mt-3 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold/45">
                    Awaiting official confirmation
                  </p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
