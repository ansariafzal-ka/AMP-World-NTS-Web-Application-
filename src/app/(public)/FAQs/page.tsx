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
        <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-12 sm:py-16 lg:py-8 lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center">
          {/* Luminous crimson and rose ambient glow */}
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[350px] w-full max-w-7xl rounded-full bg-[#B81E34]/30 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-[#9E1528]/35 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center my-auto">
            {/* Top Text Block (Left-Aligned) */}
            <div className="max-w-5xl">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-zinc-200 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span>NTS 2026 · HELP & FAQS</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
                Frequently Asked Questions
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
                Find clear, authoritative answers to questions regarding eligibility, exam structure,
                scholarships, cash prizes, and institutional partnerships.
              </p>
            </div>

            {/* 4 Bottom Feature Highlight Cards */}
            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Card 1: Featured White Card */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center shadow-md">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 leading-tight block">
                    Offline / Physical
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-snug font-medium max-w-[220px] mx-auto">
                    Conducted at designated schools & centers pan-India
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-zinc-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    EXAM MODE
                  </span>
                </div>
              </div>

              {/* Card 2: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                    Zero Negative
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    No marks deducted for unattempted or incorrect answers
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    MARKING POLICY
                  </span>
                </div>
              </div>

              {/* Card 3: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                    December 2026
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    Single-day standardized competitive assessment
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    EXAM TIMELINE
                  </span>
                </div>
              </div>

              {/* Card 4: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                    ₹10 Cr+ Pool
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    Financial scholarships & cash awards for 5,000+ toppers
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    SCHOLARSHIPS
                  </span>
                </div>
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
