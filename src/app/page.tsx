import HeroSection from "@/components/sections/HeroSection";
import UeberUnsSection from "@/components/sections/UeberUnsSection";
import LeistungenSection from "@/components/sections/LeistungenSection";
import FlotteSection from "@/components/sections/FlotteSection";
import VideoSection from "@/components/sections/VideoSection";
import BarrierefreiheitSection from "@/components/sections/BarrierefreiheitSection";
import CtaBanner from "@/components/sections/CtaBanner";
import KontaktSection from "@/components/sections/KontaktSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UeberUnsSection />
      <LeistungenSection />
      <FlotteSection />
      <VideoSection />
      <BarrierefreiheitSection />
      <CtaBanner />
      <KontaktSection />
    </main>
  );
}
