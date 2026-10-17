"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/data/timeline";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { MandalaRosette } from "@/components/ui/Ornament";
import { cn } from "@/lib/cn";

/**
 * Legacy timeline. Unconfirmed milestones render in a visibly quieter
 * state rather than being invented or hidden.
 *
 * The spine is drawn by scroll position — the gold fill tracks a point a
 * little below the middle of the viewport, so the line reaches each
 * milestone just as it comes up to be read. Each entry then slides in from
 * its own side and its node settles into the spine (see `[data-reveal]` and
 * `.tl-node` in globals.css). Under `prefers-reduced-motion` the spine is
 * simply drawn in full and the scroll listener never attaches.
 */
export function Timeline() {
  const listRef = useRef(null);
  const [drawn, setDrawn] = useState(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduced) {
        setDrawn(1);
        return;
      }
      const { top, height } = el.getBoundingClientRect();
      if (height <= 0) return;
      /* Anchor sits below centre so the line leads the eye, not trails it. */
      const anchor = window.innerHeight * 0.62;
      setDrawn(Math.min(1, Math.max(0, (anchor - top) / height)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    if (reduced) return;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      aria-labelledby="timeline-title"
      className="on-dark surface-dark relative overflow-hidden py-20 lg:py-28"
    >
      <MandalaRosette className="pointer-events-none absolute -left-40 top-1/4 h-[560px] w-[560px] text-gold/[0.05]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading
          as="h2"
          titleId="timeline-title"
          eyebrow="Our Legacy"
          title="Milestones across the generations"
          lede="The mandal's record is kept by the people who built it. Entries marked as awaiting confirmation will be filled in as the committee verifies them."
          align="center"
          divider
          className="mx-auto"
        />

        <ol ref={listRef} className="relative mx-auto mt-16 max-w-3xl">
          {/* The spine: an unlit track, the gold drawn over it by scroll. */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[11px] top-2 w-px bg-gold/10 sm:left-1/2"
          >
            <span
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-gold/65 to-gold/35 transition-[height] duration-200 ease-out"
              style={{ height: `${drawn * 100}%` }}
            />
            {/* The spark riding the leading edge of the draw. */}
            <span
              className="absolute -left-[3.5px] h-[8px] w-[8px] -translate-y-1/2 rotate-45 bg-gold shadow-[0_0_14px_3px_rgba(214,174,88,0.5)] transition-[top,opacity] duration-200 ease-out"
              style={{
                top: `${drawn * 100}%`,
                opacity: drawn > 0.004 && drawn < 0.996 ? 1 : 0,
              }}
            />
          </span>

          {timeline.map((entry, i) => (
            <li key={`${entry.year}-${entry.title}`} className="relative">
              <Reveal
                delay={i * 70}
                data-from={i % 2 === 0 ? "left" : "right"}
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
                    "tl-node absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border",
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
                  lang={entry.titleLang}
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
