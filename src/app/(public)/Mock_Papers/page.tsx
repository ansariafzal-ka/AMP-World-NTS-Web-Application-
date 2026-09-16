import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MockPapersContent from "@/components/mock-papers/MockPapersContent";

export const metadata = {
  title: "Mock Papers & Question Bank - AMP NTS 2026",
  description:
    "Download official previous years question papers, practice test sets, and answer keys from 2020 through 2025 for Schools, Junior Colleges, and Senior Degree Colleges.",
};

export default function MockPapersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <MockPapersContent />
      </main>
      <Footer />
    </div>
  );
}
