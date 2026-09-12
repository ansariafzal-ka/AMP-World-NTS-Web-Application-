import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import DatesHero from "@/components/ui/DatesHero";
import DatesTimeline from "@/components/ui/DatesTimeline";
import DatesStudentNotes from "@/components/ui/DatesStudentNotes";
import DatesCTA from "@/components/ui/DatesCTA";

export const metadata = {
  title: "Important Dates & Timeline | AMP NTS 2026",
  description:
    "Official schedule and important dates for AMP National Talent Search (NTS) 2026. Mark your calendar for registration deadlines, admit cards, exam day in December 2026, and results.",
};

export default function ImportantDatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 1. Hero Header & Milestones */}
        <DatesHero />

        {/* 2. Chronological Timeline Roadmap */}
        <DatesTimeline />

        {/* 3. Essential Student Notes & Direct Helplines */}
        <DatesStudentNotes />

        {/* 4. Bottom Preparation Call to Action */}
        <DatesCTA />
      </main>

      <Footer />
    </div>
  );
}
