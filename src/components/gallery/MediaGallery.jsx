"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems } from "@/data/gallery";
import Lightbox from "./Lightbox";
import { cn } from "@/lib/cn";

/**
 * Filterable editorial gallery with an accessible lightbox.
 *
 * `limit` + `categories` let the homepage teaser reuse the same component
 * rather than duplicating a second grid.
 */
export function MediaGallery({
  limit,
  initialCategory = "all",
  showFilter = true,
}) {
  const [category, setCategory] = useState(initialCategory);
  const [openIndex, setOpenIndex] = useState(null);

  const items = useMemo(() => {
    const filtered =
      category === "all"
        ? galleryItems
        : galleryItems.filter((i) => i.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);

  const available = useMemo(
    () =>
      galleryCategories.filter(
        (c) =>
          c.id === "all" ||
          galleryItems.some((i) => i.category === c.id),
      ),
    [],
  );

  return (
    <div>
      {showFilter ? (
        <div
          role="group"
          aria-label="Filter gallery by category"
          className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {available.map((c) => {
            const active = c.id === category;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={active}
                className={cn(
                  "min-h-10 shrink-0 rounded-sm border px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300",
                  active
                    ? "border-crimson bg-crimson text-ivory"
                    : "border-charcoal/15 text-charcoal-soft hover:border-crimson/40 hover:text-crimson",
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {items.length === 0 ? (
        <p className="mt-10 text-sm text-charcoal-soft">
          No images in this category yet.
        </p>
      ) : (
        <ul
          className={cn(
            "mt-8 grid gap-4",
            "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
          )}
        >
          {items.map((item, i) => (
            <li
              key={item.id}
              className={cn(
                // A deliberate editorial rhythm rather than a flat grid
                i % 7 === 0 && "col-span-2 row-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-sm bg-maroon/10"
                aria-label={`Open image: ${item.caption}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading={i < 4 ? "eager" : "lazy"}
                  sizes={
                    i % 7 === 0
                      ? "(max-width: 640px) 92vw, (max-width: 1024px) 62vw, 46vw"
                      : "(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 23vw"
                  }
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                />

                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                />

                <span className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <span
                    lang={item.captionLang}
                    className="block font-display text-sm font-semibold leading-tight text-ivory sm:text-base"
                  >
                    {item.caption}
                  </span>
                  {item.placeholder ? (
                    <span className="mt-1 block text-[0.5625rem] uppercase tracking-[0.14em] text-gold/70">
                      Placeholder
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {openIndex !== null ? (
        <Lightbox
          items={items}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
    </div>
  );
}

export default MediaGallery;
