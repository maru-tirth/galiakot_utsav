import Image from "next/image";
import { communityActivities } from "@/data/festivals";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="surface-light scroll-mt-24 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading
          as="h2"
          tone="light"
          eyebrow="Our Community"
          title="Built by the hands of Chembur"
          lede="The mandal's festivals are run by volunteers drawn from the neighbourhood itself — and they are open to every family in it."
          align="center"
          divider
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm">
              <Image
                src="/images/puja-03.jpg"
                alt="A young devotee performing the aarti before the murti"
                fill
                sizes="(max-width: 1024px) 46vw, 28vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-4/5 overflow-hidden rounded-sm">
              <Image
                src="/images/community-03.jpg"
                alt="A child watching the mandal's procession pass"
                fill
                sizes="(max-width: 1024px) 46vw, 28vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <ul className="space-y-6">
            {communityActivities.map((item, i) => (
              <li key={item.id}>
                <Reveal
                  delay={i * 80}
                  className={cn(
                    "rounded-sm border p-6",
                    item.awaiting
                      ? "border-charcoal/10 bg-transparent"
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

            <Reveal as="li" delay={240}>
              <Button href="/social-activities" variant="outlineDark">
                Social activities
              </Button>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Community;
