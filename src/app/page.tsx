import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/ui/hero-section";
import HomeQuickNav from "@/components/ui/HomeQuickNav";
import HomeVideoSection from "@/components/ui/HomeVideoSection";
import ScholarshipsRewards from "@/components/ui/ScholarshipsRewards";
import NTSAtAGlance from "@/components/ui/NTSAtAGlance";
import HowToParticipate from "@/components/ui/HowToParticipate";
import ExamDayGuidelines from "@/components/ui/ExamDayGuidelines";
import VideoHighlights from "@/components/ui/VideoHighlights";
import MobilizationPartnerSection from "@/components/ui/MobilizationPartnerSection";
import ParticipateInNTS from "@/components/ui/ParticipateInNTS";
import CtaBanner from "@/components/ui/CtaBanner";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <HeroSection />
        <HomeQuickNav />

        <div id="about-nts" className="scroll-mt-32 sm:scroll-mt-36">
          <HomeVideoSection />
        </div>

        <div id="scholarships" className="scroll-mt-32 sm:scroll-mt-36">
          <ScholarshipsRewards />
        </div>

        <div id="glance" className="scroll-mt-32 sm:scroll-mt-36">
          <NTSAtAGlance />
        </div>

        <div id="how-to-participate" className="scroll-mt-32 sm:scroll-mt-36">
          <HowToParticipate />
        </div>

        <div id="exam-day-instructions" className="scroll-mt-32 sm:scroll-mt-36">
          <ExamDayGuidelines />
        </div>

        <div id="highlights" className="scroll-mt-32 sm:scroll-mt-36">
          <VideoHighlights />
        </div>

        <MobilizationPartnerSection />

        <ParticipateInNTS />

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}