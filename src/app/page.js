import Hero from "@/components/home/Hero";
import Heritage from "@/components/home/Heritage";
import Timeline from "@/components/home/Timeline";
import GaneshChapter from "@/components/home/GaneshChapter";
import Navratri from "@/components/home/Navratri";
import Community from "@/components/home/Community";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import SocialStrip from "@/components/home/SocialStrip";
import ContactSection from "@/components/home/ContactSection";
import SongPlayer from "@/components/home/SongPlayer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Heritage />
      <Timeline />
      <GaneshChapter />
      <Navratri />
      <Community />
      <GalleryTeaser />
      <SocialStrip />
      <ContactSection />
      <SongPlayer />
    </>
  );
}
