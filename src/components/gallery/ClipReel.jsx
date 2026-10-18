"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { mandalClips } from "@/data/gallery";
import { cn } from "@/lib/cn";

/**
 * The mandal's own footage from 2026, served from this site rather than a
 * third party.
 *
 * Each card holds its poster frame until someone asks for the clip — the
 * <video> carries `preload="none"`, so none of the megabytes move until a
 * play is requested. Starting one clip pauses whichever was playing, so the
 * page never has two soundtracks at once.
 */
export function ClipReel() {
  /* Once a clip has been started it keeps its controls — reverting to the
     poster would throw away the viewer's place in it. */
  const [started, setStarted] = useState(() => new Set());
  const refs = useRef(new Map());

  const play = useCallback((id) => {
    for (const [key, el] of refs.current) {
      if (key !== id) el?.pause();
    }
    setStarted((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
    // The click is the gesture that permits playback with sound.
    refs.current.get(id)?.play().catch(() => {});
  }, []);

  if (!mandalClips.length) return null;

  return (
    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {mandalClips.map((clip) => (
        <li key={clip.id}>
          <figure className="group relative overflow-hidden rounded-sm border border-gold/20 transition-colors duration-500 hover:border-gold/50">
            <div className="relative aspect-9/16 bg-void/60">
              <video
                ref={(el) => {
                  if (el) refs.current.set(clip.id, el);
                  else refs.current.delete(clip.id);
                }}
                src={clip.src}
                poster={clip.poster}
                preload="none"
                playsInline
                controls={started.has(clip.id)}
                onPlay={() => play(clip.id)}
                className="h-full w-full object-cover"
              />

              {/* The poster overlay, lifted on first play. */}
              {!started.has(clip.id) ? (
                <button
                  type="button"
                  onClick={() => play(clip.id)}
                  aria-label={`Play: ${clip.caption}`}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={clip.poster}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/15 to-void/25 transition-colors duration-300 group-hover:from-void/70"
                  />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-maroon/70 text-gold backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play size={22} aria-hidden="true" fill="currentColor" />
                  </span>
                </button>
              ) : null}
            </div>

            <figcaption
              className={cn(
                "flex items-baseline justify-between gap-3 p-4",
                "text-sm text-ivory",
              )}
            >
              <span className="font-display font-semibold">{clip.caption}</span>
              <span className="shrink-0 text-[0.625rem] uppercase tracking-[0.14em] text-gold/60">
                {clip.occasion}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default ClipReel;
