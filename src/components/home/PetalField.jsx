"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient marigold-petal drift — the "Enhanced" motion tier.
 *
 * Canvas 2D rather than WebGL on purpose: the hero must paint fast on a
 * mid-range Android during the festival, so nothing here blocks LCP and no
 * 3D engine is downloaded. It self-disables for reduced-motion users,
 * scales its petal count to the viewport, and stops when offscreen or
 * when the tab is hidden.
 */
export function PetalField({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let petals = [];
    let raf = 0;
    let running = true;
    let last = performance.now();

    const COLOURS = ["#E6A23C", "#D6AE58", "#C8761F", "#E8CF95"];

    const makePetal = (seedTop = false) => ({
      x: Math.random() * width,
      y: seedTop ? Math.random() * height : -20,
      r: 3 + Math.random() * 5,
      speed: 14 + Math.random() * 26,
      drift: (Math.random() - 0.5) * 18,
      spin: (Math.random() - 0.5) * 1.4,
      angle: Math.random() * Math.PI * 2,
      alpha: 0.2 + Math.random() * 0.4,
      colour: COLOURS[(Math.random() * COLOURS.length) | 0],
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      // Cap DPR — retina at 3x doubles fill cost for no visible gain here.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Restrained density: ~1 petal per 14k px², hard-capped.
      const target = Math.min(42, Math.round((width * height) / 14000));
      petals = Array.from({ length: target }, () => makePetal(true));
    };

    const draw = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, width, height);

      for (const p of petals) {
        p.y += p.speed * dt;
        p.x += Math.sin(p.angle) * p.drift * dt;
        p.angle += p.spin * dt;

        if (p.y - p.r > height) Object.assign(p, makePetal());

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.colour;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.58, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    raf = requestAnimationFrame(draw);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const onVisibility = () =>
      document.hidden ? stop() : start();
    document.addEventListener("visibilitychange", onVisibility);

    // Stop rendering entirely once the hero scrolls out of view.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}

export default PetalField;
