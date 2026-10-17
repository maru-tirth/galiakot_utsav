"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll reveal driven by IntersectionObserver.
 *
 * The animation itself lives in CSS (`[data-reveal]` in globals.css), so
 * `prefers-reduced-motion` neutralises it without any JS branching, and
 * content is never hidden from users who disable JavaScript for long —
 * the observer fires on mount for anything already in view.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Guard: if IntersectionObserver is unavailable, show content immediately.
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-reveal", "in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
