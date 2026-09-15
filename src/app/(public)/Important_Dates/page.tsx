import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import DatesHero from "@/components/ui/DatesHero";
import DatesTimeline from "@/components/ui/DatesTimeline";
import DatesStudentNotes from "@/components/ui/DatesStudentNotes";
import DatesCTA from "@/components/ui/DatesCTA";

export const metadata = {
  title: "Important Dates - AMP NTS 2026 Schedule",
  description:
    "Official schedule and important dates for AMP National Talent Search 2026: Launch on 20 Sep 2026, Registration Closes on 22 Nov 2026, Exam on 5 Dec 2026, Results on 26 Jan 2027, and Counselling from 27 Jan to 3 Feb 2027.",
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
