"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { announcements } from "@/data/announcements";

/**
 * Compact official announcement strip.
 *
 * Content comes from src/data/announcements.js. It rotates only when more
 * than one notice exists, pauses on hover/focus, and stops entirely under
 * `prefers-reduced-motion` (where it shows the first notice statically).
 */
export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (announcements.length < 2 || paused) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = setInterval(
      () => setIndex((i) => (i + 1) % announcements.length),
      6500,
    );
    return () => clearInterval(id);
  }, [paused]);

  const item = announcements[index];
  if (!item) return null;

  return (
    <aside
      aria-label="Mandal announcements"
      className="on-dark relative z-50 bg-void text-ivory/85"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-2.5 sm:px-8">
        <span className="eyebrow hidden shrink-0 text-gold sm:inline">
          Notice
        </span>
        <span
          aria-hidden="true"
          className="hidden h-3 w-px shrink-0 bg-gold/30 sm:block"
        />

        <p
          key={item.id}
          aria-live="polite"
          className="min-w-0 flex-1 truncate text-[0.8125rem] leading-relaxed"
        >
          {item.text}
          {item.href ? (
            <>
              {" — "}
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold-soft underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
                >
                  {item.linkLabel}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="font-medium text-gold-soft underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
                >
                  {item.linkLabel}
                </Link>
              )}
            </>
          ) : null}
        </p>

        {announcements.length > 1 ? (
          <div className="hidden shrink-0 items-center gap-1.5 md:flex">
            {announcements.map((a, i) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show announcement ${i + 1} of ${announcements.length}`}
                aria-current={i === index}
                /* Hit area is 24px tall; the visible dot stays hairline. */
                className="group flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-5 bg-gold"
                      : "w-1.5 bg-gold/30 group-hover:bg-gold/60"
                  }`}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </aside>
  );
}

export default AnnouncementBar;
