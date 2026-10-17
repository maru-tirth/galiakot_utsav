"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Accessible image lightbox.
 *
 * - Escape closes, arrow keys navigate, focus is trapped and restored.
 * - Touch swipe on mobile.
 * - Body scroll locked while open.
 */
export function Lightbox({ items, index, onClose, onIndexChange }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);
  const touchStart = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const item = items[index];
  const count = items.length;

  const go = useCallback(
    (delta) => {
      setLoaded(false);
      onIndexChange((index + delta + count) % count);
    },
    [index, count, onIndexChange],
  );

  useEffect(() => {
    openerRef.current = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        const f = dialogRef.current?.querySelectorAll("button");
        if (!f?.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
    };
  }, [go, onClose]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${count}: ${item.caption}`}
      className="on-dark fixed inset-0 z-[80] flex flex-col bg-void/96 backdrop-blur-sm"
      onTouchStart={(e) => {
        touchStart.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold/70">
          {index + 1} / {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/30 text-gold transition-colors hover:bg-gold/10"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
        {count > 1 ? (
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-maroon/70 text-gold transition-colors hover:bg-gold/15 sm:left-4"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
        ) : null}

        <div className="relative flex h-full w-full items-center justify-center">
          {!loaded ? (
            <div
              aria-hidden="true"
              className="skeleton absolute inset-x-8 inset-y-12 rounded-sm"
            />
          ) : null}
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="100vw"
            onLoad={() => setLoaded(true)}
            className={`max-h-full w-auto max-w-full object-contain transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {count > 1 ? (
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-maroon/70 text-gold transition-colors hover:bg-gold/15 sm:right-4"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <div className="shrink-0 px-4 py-5 text-center sm:px-6">
        <p className="font-display text-lg text-ivory">{item.caption}</p>
        <p className="mt-1 text-xs text-ivory/45">
          {item.placeholder
            ? "Placeholder image — the mandal's own photograph awaited"
            : "Galiakot Sanskrutik Utsav Mandal · Film by Beyond Thought Films"}
        </p>
      </div>
    </div>
  );
}

export default Lightbox;
