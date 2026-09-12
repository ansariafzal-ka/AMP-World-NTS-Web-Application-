import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FaqInteractive from "@/components/faqs/FaqInteractive";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Frequently Asked Questions (FAQs) | AMP NTS 2026",
  description:
    "Find answers to all frequently asked questions regarding AMP National Talent Search (NTS) 2026: eligibility, offline exam format, syllabus, ₹10 Cr+ scholarships, cash prizes, and registration.",
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            1. PAGE HERO HEADER (MAROON GRADIENT BACKGROUND)
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#610D17] via-[#520A13] to-[#3B070D] text-white pt-12 pb-14 sm:pt-16 sm:pb-20 shadow-inner">
          {/* Ambient Lighting Glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              Find clear, authoritative answers to questions regarding eligibility, exam structure,
              scholarships, cash prizes, and institutional partnerships.
            </p>

            {/* Quick Feature Highlights Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-3.5 backdrop-blur-xs text-center">
                <div className="text-[11px] uppercase tracking-wider text-zinc-300 font-semibold">Exam Mode</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">Offline / Physical Only</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-3.5 backdrop-blur-xs text-center">
                <div className="text-[11px] uppercase tracking-wider text-zinc-300 font-semibold">Marking Policy</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">Zero Negative Marks</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-3.5 backdrop-blur-xs text-center">
                <div className="text-[11px] uppercase tracking-wider text-zinc-300 font-semibold">Exam Timeline</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">December 2026</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-3.5 backdrop-blur-xs text-center">
                <div className="text-[11px] uppercase tracking-wider text-zinc-300 font-semibold">Scholarship Pool</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">₹10 Cr+ for 5,000+</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. MAIN FAQS INTERACTIVE SECTION
        ========================================================= */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <FaqInteractive />
          </div>
        </section>

        {/* =========================================================
            3. "STILL HAVE QUESTIONS?" HELPDESK BANNER
        ========================================================= */}
        <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#610D17] via-[#520A13] to-[#3B070D] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-0.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Direct Student Assistance
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Still have a question?
                </h3>
                <p className="text-sm sm:text-base text-zinc-200 max-w-lg leading-relaxed">
                  Our national team hosts a daily live consultation (Mon–Sat, 5–6 PM) and
                  operates dedicated WhatsApp helplines for each category.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
                <Button
                  variant="secondary"
                  size="md"
                  href="https://tinyurl.com/HelplineAMPNTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto shadow-md"
                >
                  <span>Daily Live Meet</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
                <Button
                  variant="frosted"
                  size="md"
                  href="/Contact"
                  className="w-full sm:w-auto"
                >
                  <span>Contact Helpdesk</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
