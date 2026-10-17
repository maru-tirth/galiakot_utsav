import Image from "next/image";
import { site } from "@/data/site";
import { communityActivities } from "@/data/festivals";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AwaitingNote from "@/components/ui/AwaitingNote";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "Social Activities",
  description: `Community work and cultural activities of ${site.name}, Chembur.`,
};

export default function SocialActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Community"
        title="Beyond the festival"
        lede="The mandal exists because of the people of Chembur — and much of what it does happens away from the mandap."
        image="/images/community-01.jpg"
        imageAlt=""
      />

      <section className="surface-light py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <SectionHeading
                as="h2"
                tone="light"
                eyebrow="Social Activities"
                title="Service alongside devotion"
                divider
              />

              <AwaitingNote tone="light" className="mt-8">
                We have not published any charitable project, donation drive or
                social-impact figure that the committee has not confirmed. This
                page is built and ready — it needs only the mandal&rsquo;s
                verified details to go live in full.
              </AwaitingNote>

              <Reveal delay={150} className="mt-8">
                <Button href="/contact">Submit activity details</Button>
              </Reveal>
            </div>

            <ul className="space-y-5">
              {communityActivities.map((item, i) => (
                <li key={item.id}>
                  <Reveal
                    delay={i * 80}
                    className={cn(
                      "rounded-sm border p-6",
                      item.awaiting
                        ? "border-dashed border-charcoal/15"
                        : "border-crimson/20 bg-white shadow-[var(--shadow-lift)]",
                    )}
                  >
                    <h3
                      className={cn(
                        "font-display text-xl font-semibold",
                        item.awaiting ? "text-charcoal/50" : "text-charcoal",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        item.awaiting
                          ? "text-charcoal-soft/60"
                          : "text-charcoal-soft",
                      )}
                    >
                      {item.body}
                    </p>
                    {item.awaiting ? (
                      <p className="mt-3 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-crimson/50">
                        Awaiting confirmed details
                      </p>
                    ) : null}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { src: "/images/puja-06.jpg", alt: "Mahaprasad offered to devotees during the puja" },
              { src: "/images/community-02.jpg", alt: "Devotees of the mandal at prayer" },
              { src: "/images/crowd-02.jpg", alt: "Devotees with raised hands during the Aagman celebration" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-4/3 overflow-hidden rounded-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, 30vw"
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
