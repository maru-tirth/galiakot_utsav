import { site } from "@/data/site";
import PageHero from "@/components/layout/PageHero";
import GaneshChapter from "@/components/home/GaneshChapter";
import MediaGallery from "@/components/gallery/MediaGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Ganesh Utsav",
  description: `Chembur Cha Aadidev — the Aagman Sohala, Sthapana Puja, Ganpati Darshan and Visarjan of ${site.name}.`,
};

export default function GaneshUtsavPage() {
  return (
    <>
      <PageHero
        eyebrow="Ganesh Utsav"
        title="Chembur Cha Aadidev"
        lede="From the first beat of the dhol at the Aagman to the farewell at the water, these are the days that define the mandal's year."
        image="/images/aagman-01.jpg"
        imageAlt=""
      />

      <GaneshChapter />

      <section className="surface-light py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <SectionHeading
            as="h2"
            tone="light"
            eyebrow="Ganesh Utsav Gallery"
            title="The Utsav in pictures"
            align="center"
            divider
          />
          <Reveal className="mt-12">
            <MediaGallery initialCategory="darshan" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
