import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/ui/hero-section";
import HomeVideoSection from "@/components/ui/HomeVideoSection";
import ScholarshipsRewards from "@/components/ui/ScholarshipsRewards";
import NTSAtAGlance from "@/components/ui/NTSAtAGlance";
import HowToParticipate from "@/components/ui/HowToParticipate";
import VideoHighlights from "@/components/ui/VideoHighlights";
import CtaBanner from "@/components/ui/CtaBanner";
import Footer from "@/components/layout/footer";
import ImageCard from "@/components/common/ImageCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <HeroSection />
        <HomeVideoSection />
        <ScholarshipsRewards />
        <NTSAtAGlance />
        <HowToParticipate />
        <section className="w-full bg-zinc-50 py-10 sm:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
              <ImageCard
                title="Become an Exam Centre"
                imageSrc="/exam-centre.jpg"
                imageAlt="Become an Exam Centre"
                buttonText="KNOW MORE"
                buttonHref="/Become_An_Exam_Center"
              />
              <ImageCard
                title="Student Registration"
                imageSrc="/student-registration.jpg"
                imageAlt="Student Registration"
                buttonText="REGISTER"
                buttonHref="/Student_Registration"
              />
              <ImageCard
                title="Exam Pattern & Syllabus"
                imageSrc="/nts-hero banner.jpg"
                imageAlt="Exam Pattern & Syllabus"
                buttonText="KNOW MORE"
                buttonHref="/About_NTS"
              />

            </div>
          </div>
        </section>
        <VideoHighlights />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}