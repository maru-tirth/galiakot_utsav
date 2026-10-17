import Image from "next/image";
import { site } from "@/data/site";
import PageHero from "@/components/layout/PageHero";
import Timeline from "@/components/home/Timeline";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AwaitingNote from "@/components/ui/AwaitingNote";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Our History",
  description: `The story of ${site.name} in Chembur — established in ${site.established}, home of Chembur Cha Aadidev and the oldest Navratri Utsav in Chembur.`,
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow={`Since ${site.established}`}
        title="Devotion through generations"
        lede="The mandal's story is the story of a neighbourhood — of families who have kept the same festival alive across more than six decades."
        image="/images/pathak-bw-01.jpg"
        imageAlt=""
      />

      <section className="surface-light py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading
              as="h2"
              tone="light"
              eyebrow="Our beginnings"
              title="A mandal of Chembur"
              divider
            />

            <div className="prose-body mt-8 text-charcoal-soft">
              <Reveal as="p">
                Galiakot Sanskrutik Utsav Mandal was established in{" "}
                {site.established}. Its activities have long been associated
                with the Galiakot Estate precinct in Chembur, and in the years
                since, the mandal has become part of how the neighbourhood
                marks its year.
              </Reveal>

              <Reveal as="p" delay={70}>
                The Ganeshotsav is known locally as{" "}
                <strong className="font-semibold text-crimson">
                  Chembur Cha Aadidev
                </strong>
                . Each year the Aagman Sohala brings the murti through the
                streets accompanied by the dhol-tasha pathak, followed by the
                Sthapana Puja, days of darshan and aarti, the Mahaprasad, and
                finally the Visarjan.
              </Reveal>

              <Reveal as="p" delay={140}>
                Alongside it, the mandal runs what is the oldest Navratri
                Utsav in Chembur — nine nights of Garba, Dandiya and Mata Ki
                Chowki that have drawn generations of families to the same
                ground.
              </Reveal>
            </div>

            <AwaitingNote tone="light" className="mt-8 max-w-xl">
              The detailed history of the mandal — its founders, the story of
              its first Utsav, and the milestones of the decades since — is
              awaiting records from the committee. We have published only what
              the mandal itself has confirmed.
            </AwaitingNote>

            <Reveal delay={200} className="mt-9">
              <Button href="/contact" variant="outlineDark">
                Help us complete our record
              </Button>
            </Reveal>
          </div>

          <Reveal delay={100} className="space-y-4">
            <figure>
              <div className="relative aspect-4/5 overflow-hidden rounded-sm shadow-[var(--shadow-deep)]">
                <Image
                  src="/images/idol-detail-02.jpg"
                  alt="The mandal's murti draped in a red and gold shela during the procession"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[0.6875rem] uppercase tracking-[0.16em] text-charcoal-soft/60">
                Chembur Cha Aadidev, Aagman Sohala
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/images/puja-04.jpg"
                  alt="Devotees with folded hands during the aarti"
                  fill
                  sizes="21vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/images/aagman-04.jpg"
                  alt="The dhol-tasha pathak playing during the Aagman Sohala"
                  fill
                  sizes="21vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Timeline />
    </>
  );
}
