import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/** Editorial introduction — asymmetric 7/5 grid on ivory. */
export function Heritage() {
  return (
    <section
      id="heritage"
      aria-labelledby="heritage-title"
      className="surface-light scroll-mt-24 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
        {/* Image, framed and offset */}
        <Reveal className="relative order-2 lg:order-1">
          {/* The slot fixes its own ratio so the layout holds whatever shape
              the mandal's photograph arrives in. */}
          <div className="relative aspect-4/5 overflow-hidden rounded-sm shadow-[var(--shadow-deep)]">
            <Image
              src="/images/heritage-main.jpg"
              alt="The neighbourhood lane at night, lined with devotees as the Aagman approaches"
              fill
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover"
            />
          </div>

          {/* Inset detail image, overlapping — the asymmetry */}
          <div className="absolute -bottom-8 -right-4 hidden aspect-square w-40 overflow-hidden rounded-sm border-4 border-ivory shadow-[var(--shadow-lift)] sm:block lg:-right-10 lg:w-52">
            <Image
              src="/images/heritage-detail.jpg"
              alt="The murti garlanded in marigold, the mandal's name board beside it"
              fill
              sizes="208px"
              className="object-cover"
            />
          </div>

          <p className="mt-5 text-[0.6875rem] uppercase tracking-[0.18em] text-charcoal-soft/60">
            Aagman Sohala, Chembur
          </p>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            as="h2"
            tone="light"
            eyebrow={`Established ${site.established}`}
            title={
              <>
                An eternal tradition.
                <br />A united community.
              </>
            }
            divider
          />

          <div className="prose-body mt-8 text-charcoal-soft">
            <Reveal as="p" delay={60}>
              For more than six decades, Galiakot Sanskrutik Utsav Mandal has
              been part of the rhythm of Chembur. What began in{" "}
              {site.established} continues each year in the same spirit — the
              welcome of the Aagman, the stillness of the aarti, and the
              hands of the volunteers who make it all possible.
            </Reveal>

            <Reveal as="p" delay={120}>
              Our Ganeshotsav is known across the neighbourhood as{" "}
              <strong lang="mr" className="font-semibold text-crimson">
                {site.taglineDeva}
              </strong>{" "}
              ({site.tagline}), and our Navratri Utsav is the oldest in Chembur. Between them
              they have drawn generations of families to the same ground, year
              after year.
            </Reveal>
          </div>

          <Reveal delay={180} className="mt-9">
            <Button href="/history" variant="outlineDark">
              Read our full history
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Heritage;
