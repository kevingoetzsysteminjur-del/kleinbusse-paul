import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import UeberUnsSection from "@/components/sections/UeberUnsSection";
import LeistungenSection from "@/components/sections/LeistungenSection";
import FlotteSection from "@/components/sections/FlotteSection";
import VideoSection from "@/components/sections/VideoSection";
import BarrierefreiheitSection from "@/components/sections/BarrierefreiheitSection";
import CtaBanner from "@/components/sections/CtaBanner";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import KontaktSection from "@/components/sections/KontaktSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBadges />
      <UeberUnsSection />
      <LeistungenSection />
      <FlotteSection />
      <VideoSection />
      <BarrierefreiheitSection />
      <CtaBanner />
      <TestimonialsSection />
      <FAQSection />
      <KontaktSection />
    </main>
  );
}
