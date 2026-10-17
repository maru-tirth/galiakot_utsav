"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { mandalSong } from "@/data/site";
import { cn } from "@/lib/cn";

/**
 * The mandal's song, offered rather than imposed.
 *
 * Deliberately NOT autoplaying: every current browser blocks audio that
 * starts without a gesture, and a page that begins singing at a visitor is
 * hostile even where it is permitted. The file is `preload="none"`, so its
 * 7 MB are not fetched until someone actually asks for it.
 *
 * Playback state is read back off the <audio> element's own events rather
 * than assumed at the call site, so the pill stays truthful if playback is
 * interrupted by the OS, another tab, or a hardware media key.
 */
export function SongPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => {
      const { currentTime, duration } = el;
      setProgress(duration > 0 ? currentTime / duration : 0);
    };
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      /* A rejected play() leaves the element paused — the listener keeps
         the button honest, so there is nothing to undo here. */
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, []);

  return (
    /* Bottom-right: clear of the hero's call-to-action pair on the left,
       and of the framework's dev indicator. */
    <div className="on-dark fixed bottom-4 right-4 z-40 print:hidden">
      <audio ref={audioRef} src={mandalSong.src} preload="none" />

      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          playing
            ? `Pause ${mandalSong.subtitle}`
            : `Play ${mandalSong.subtitle}`
        }
        className={cn(
          "group relative flex items-center gap-3 overflow-hidden rounded-full border border-gold/35 bg-maroon/90 py-2 pl-2 pr-3 shadow-[var(--shadow-lift)] backdrop-blur-md transition-colors duration-300 hover:border-gold/60 sm:pr-4",
        )}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-maroon transition-transform duration-300 group-hover:scale-105">
          {playing ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="ml-0.5 h-4 w-4" aria-hidden="true" />
          )}
        </span>

        <span className="hidden min-w-0 text-left sm:block">
          <span
            lang={mandalSong.titleLang}
            className="block truncate text-sm font-semibold leading-tight text-ivory"
          >
            {mandalSong.title}
          </span>
          <span className="block text-[0.625rem] uppercase tracking-[0.16em] text-gold/70">
            {playing ? "Now playing" : mandalSong.subtitle}
          </span>
          {mandalSong.credit ? (
            <span className="block truncate text-[0.625rem] leading-relaxed text-ivory/45">
              {mandalSong.credit}
            </span>
          ) : null}
        </span>

        {/* Equalizer — purely decorative, only while sound is actually out. */}
        <span
          aria-hidden="true"
          className={cn(
            "hidden h-4 shrink-0 items-end gap-[3px] transition-opacity duration-300 sm:flex",
            playing ? "opacity-100" : "opacity-0",
          )}
        >
          {[0, 1, 2, 3].map((bar) => (
            <span
              key={bar}
              className={cn("eq-bar w-[2px] rounded-full bg-gold/80")}
              style={{
                height: "100%",
                animationPlayState: playing ? "running" : "paused",
                animationDelay: `${bar * 130}ms`,
              }}
            />
          ))}
        </span>

        {/* Progress hairline along the foot of the pill. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gold/15"
        >
          <span
            className="block h-full bg-gold/70 transition-[width] duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </span>
      </button>
    </div>
  );
}

export default SongPlayer;
