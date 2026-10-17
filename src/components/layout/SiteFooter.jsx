import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, socialLinks } from "@/data/site";
import { footerNav } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { Toran, MandalaRosette } from "@/components/ui/Ornament";
import { socialIcons } from "@/components/ui/SocialIcons";

const icons = socialIcons;

export function SiteFooter() {
  return (
    <footer className="on-dark surface-void relative overflow-hidden">
      <Toran className="h-[14px] rotate-180 text-gold/25" />

      <MandalaRosette
        className="pointer-events-none absolute -right-28 -top-24 h-[380px] w-[380px] text-gold/[0.07]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <div>
                <p className="font-display text-xl font-semibold leading-tight text-ivory">
                  {site.name}
                </p>
                <p className="mt-0.5 text-[0.6875rem] uppercase tracking-[0.2em] text-gold/70">
                  {site.locality} · Est. {site.established}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">
              {site.description}
            </p>

            <p className="font-deva mt-5 text-lg text-gold-soft/80">
              {site.taglineMarathi}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="eyebrow text-gold">{group.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-7 items-center text-sm text-ivory/65 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-gold/15 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((s) => {
                const Icon = icons[s.id] ?? ArrowUpRight;
                return (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.shortName} on ${s.label} (opens in a new tab)`}
                      className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/25 text-gold/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="text-xs leading-relaxed text-ivory/40">
              © {site.established}–present {site.name}. All rights reserved.
            </p>
          </div>

          <p className="mt-6 text-[0.6875rem] leading-relaxed text-ivory/30">
            Festival photographs are stills from the mandal&rsquo;s own
            Aagman Sohala and Sthapana Puja films by Beyond Thought Films.
            Navratri and Visarjan images are licensed placeholders pending
            the mandal&rsquo;s own photographs — see ASSETS.md.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
