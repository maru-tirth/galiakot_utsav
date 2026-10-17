"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Toran } from "@/components/ui/Ornament";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  /**
   * The drawer stores the route it was opened on rather than a boolean, so
   * navigating anywhere closes it as a derived consequence — no effect, no
   * cascading render.
   */
  const [openPath, setOpenPath] = useState(null);
  const open = openPath === pathname;
  const setOpen = useCallback(
    (next) => setOpenPath(next ? pathname : null),
    [pathname],
  );

  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  /* Transparent over the hero, solid once past it. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll + trap focus while the drawer is open. */
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const node = drawerRef.current;
    const focusables = node?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  const isActive = useCallback(
    (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname],
  );

  /* Solid whenever we're not sitting on an un-scrolled homepage hero. */
  const solid = scrolled || !isHome;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-sm focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-maroon"
      >
        Skip to content
      </a>

      {/*
        The negative margin pulls the page content up behind the header so a
        transparent header sits over the dark hero rather than over the ivory
        body. Every page hero compensates with matching top padding.
      */}
      <header
        className={cn(
          "on-dark sticky top-0 z-40 -mb-[72px] transition-[background-color,box-shadow,backdrop-filter] duration-500",
          solid
            ? "bg-maroon/95 shadow-[0_1px_0_0_rgba(214,174,88,.18)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center gap-4 px-4 sm:px-8">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            {/* Gold tone: the emblem's saffron linework is too fine to read
                against the maroon header. */}
            <Logo
              tone="gold"
              className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[8deg]"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-[1.0625rem] font-semibold leading-tight text-ivory">
                Galiakot <span className="text-gold">Mandal</span>
              </span>
              <span className="hidden text-[0.625rem] font-medium uppercase tracking-[0.2em] text-ivory/50 sm:block">
                Chembur · Since {site.established}
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="ml-auto hidden items-center gap-1 lg:flex"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-sm px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300",
                  "after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left",
                  "after:scale-x-0 after:bg-gold after:transition-transform after:duration-300",
                  "hover:text-gold hover:after:scale-x-100",
                  isActive(item.href)
                    ? "text-gold after:scale-x-100"
                    : "text-ivory/80",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-3">
            {/*
              Wrapped rather than using `hidden sm:inline-flex` on the Button
              itself: Button's base class already sets `inline-flex`, and
              Tailwind orders display utilities canonically, so `hidden`
              would lose regardless of class order.
            */}
            <span className="hidden sm:block">
              <Button
                href="/ganesh-utsav#darshan"
                variant="primary"
                className="px-5 py-2.5 text-[0.6875rem]"
              >
                Darshan
              </Button>
            </span>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/30 text-gold transition-colors hover:border-gold hover:bg-gold/10 lg:hidden"
            >
              {open ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {solid ? (
          <Toran className="h-[14px] text-gold/40" />
        ) : null}
      </header>

      {/* ---------- Mobile drawer ---------- */}
      {/*
        `overflow-hidden` clips the off-canvas panel so its translated width
        can never create horizontal overflow on small screens. `invisible`
        (transitioned, so the slide-out still plays) plus `inert` keeps the
        closed drawer out of the tab order and the accessibility tree.
      */}
      <div
        className={cn(
          "fixed inset-0 z-50 overflow-hidden transition-[visibility] duration-500 lg:hidden",
          open
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-void/80 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          ref={drawerRef}
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "on-dark surface-dark absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col",
            "border-l border-gold/20 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-gold/15 px-5">
            <span className="font-display text-lg font-semibold text-ivory">
              Menu
            </span>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/30 text-gold transition-colors hover:bg-gold/10"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {primaryNav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between gap-4 rounded-sm px-3 py-3 font-display text-xl transition-colors",
                      isActive(item.href)
                        ? "bg-gold/10 text-gold"
                        : "text-ivory/85 hover:bg-gold/5 hover:text-gold",
                    )}
                  >
                    {item.label}
                    <span className="text-[0.625rem] font-sans tracking-[0.2em] text-ivory/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-gold/15 px-5 py-6">
            <Button href="/ganesh-utsav#darshan" className="w-full">
              Experience Darshan
            </Button>
            <p className="mt-4 text-center text-[0.6875rem] uppercase tracking-[0.2em] text-ivory/40">
              Chembur · Since {site.established}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
