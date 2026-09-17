import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/ui/hero-section";
import HomeQuickNav from "@/components/ui/HomeQuickNav";
import HomeVideoSection from "@/components/ui/HomeVideoSection";
import ScholarshipsRewards from "@/components/ui/ScholarshipsRewards";
import CertificatesBeyond from "@/components/ui/CertificatesBeyond";
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
        <HomeQuickNav />

        <div id="about-nts" className="scroll-mt-32 sm:scroll-mt-36">
          <HomeVideoSection />
        </div>

        <div id="scholarships" className="scroll-mt-32 sm:scroll-mt-36">
          <ScholarshipsRewards />
        </div>

        <div id="certificates-beyond" className="scroll-mt-32 sm:scroll-mt-36">
          <CertificatesBeyond />
        </div>

        <div id="glance" className="scroll-mt-32 sm:scroll-mt-36">
          <NTSAtAGlance />
        </div>

        <div id="how-to-participate" className="scroll-mt-32 sm:scroll-mt-36">
          <HowToParticipate />
        </div>

        <div id="registration" className="scroll-mt-32 sm:scroll-mt-36">
          <section className="w-full bg-zinc-50 py-10 sm:py-14 lg:py-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                <ImageCard
                  title="Student Registration"
                  imageSrc="/student-registration.jpg"
                  imageAlt="Student Registration"
                  buttonText="REGISTER"
                  buttonHref="/Student_Registration"
                />
                <ImageCard
                  title="Become an Exam Centre"
                  imageSrc="/exam-centre.jpg"
                  imageAlt="Become an Exam Centre"
                  buttonText="KNOW MORE"
                  buttonHref="/Become_An_Exam_Center"
                />
                <ImageCard
                  title="Institution"
                  imageSrc="/nts-hero banner.jpg"
                  imageAlt="Exam Pattern & Syllabus"
                  buttonText="KNOW MORE"
                  buttonHref="/About_NTS"
                />
              </div>
            </div>
          </section>
        </div>

        <div id="highlights" className="scroll-mt-32 sm:scroll-mt-36">
          <VideoHighlights />
        </div>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}