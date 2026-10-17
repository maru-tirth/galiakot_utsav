import { ArrowUpRight } from "lucide-react";
import { socialLinks, site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialIcons } from "@/components/ui/SocialIcons";

const icons = socialIcons;

/**
 * Plain external links — no embedded feeds. An embed that the provider
 * blocks or rate-limits would leave a dead rectangle on the page; a link
 * always works.
 */
export function SocialStrip() {
  return (
    <section
      aria-labelledby="social-title"
      className="on-dark surface-void py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading
          as="h2"
          eyebrow="Stay Connected"
          title="Follow the mandal"
          lede="Announcements, darshan updates and festival moments are shared first on our official channels."
          align="center"
          divider
        />

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {socialLinks.map((s, i) => {
            const Icon = icons[s.id] ?? ArrowUpRight;
            return (
              <li key={s.id}>
                <Reveal delay={i * 80} className="h-full">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.shortName} on ${s.label} (opens in a new tab)`}
                    className="group flex h-full flex-col rounded-sm border border-gold/20 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-gold/[0.06]"
                  >
                    <span className="flex items-center justify-between">
                      <Icon
                        size={24}
                        aria-hidden="true"
                        className="text-gold transition-transform duration-500 group-hover:scale-110"
                      />
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="text-gold/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                      />
                    </span>
                    <span className="mt-5 block font-display text-xl font-semibold text-ivory">
                      {s.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-gold/70">
                      {s.handle}
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-ivory/55">
                      {s.description}
                    </span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SocialStrip;
