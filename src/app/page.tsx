import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/ui/hero-section";
import NTSAtAGlance from "@/components/ui/NTSAtAGlance";
import ImpactMilestones from "@/components/ui/ImpactMilestones";
import Footer from "@/components/layout/footer";
import ImageCard from "@/components/common/ImageCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <HeroSection />
        <NTSAtAGlance />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <ImageCard
            title="Become an Exam Centre"
            imageSrc="/exam-centre.jpg"
            imageAlt="Become an Exam Centre"
            buttonText="KNOW MORE"
            buttonHref="/Become_An_Exam_Center"
          />
          <ImageCard
            title="Student Registration"
            imageSrc="/exam-centre.jpg"
            imageAlt="Student Registration"
            buttonText="REGISTER"
            buttonHref="/Student_Registration"
          />
          <ImageCard
            title="Institute Connect"
            imageSrc="/exam-centre.jpg"
            imageAlt="Institute Connect"
            buttonText="KNOW MORE"
            buttonHref="/About_NTS"
          />
          <ImageCard
            title="Exam Pattern & Syllabus"
            imageSrc="/exam-centre.jpg"
            imageAlt="Exam Pattern & Syllabus"
            buttonText="KNOW MORE"
            buttonHref="/About_NTS"
          />
        </section>
        <ImpactMilestones />
      </main>
      <Footer />
    </div>
  );
}