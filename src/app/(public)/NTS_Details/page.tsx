import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import NTSDetailsContent from "@/components/nts-details/NTSDetailsContent";

export const metadata = {
  title: "NTS Details — AMP National Talent Search 2026",
  description:
    "Complete details, competition scale, eligibility criteria, exam mode, syllabus, ₹10 Cr+ scholarships, cash prizes, and guidelines for AMP National Talent Search (NTS) 2026.",
};

export default function NTSDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <NTSDetailsContent />
      </main>
      <Footer />
    </div>
  );
}
