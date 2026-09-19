import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FaqInteractive from "@/components/faqs/FaqInteractive";
import { IMPORTANT_LINKS } from "@/components/faqs/FaqData";
import Button from "@/components/common/Button";

export const metadata = {
  title: "FAQs",
  description:
    "Find answers to all 25 frequently asked questions regarding AMP National Talent Search (NTS) 2026: eligibility, offline exam format, syllabus, ₹10 Cr+ scholarships, cash prizes, and registration.",
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            1. PAGE HERO HEADER (MAROON GRADIENT BACKGROUND)
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-12 sm:py-16 lg:py-14 flex flex-col justify-center">
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
                <span>NTS 2026 · HELP &amp; FAQS</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
                Frequently Asked Questions
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
                Find clear, authoritative answers to questions regarding eligibility, exam structure,
                syllabus, ₹10 Cr+ scholarships, cash prizes, and institutional partnerships.
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
                    1500+ centers in 600+ districts across India
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
                    1 mark for each correct answer; no negative marking
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
                    5th December 2026
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    11:00 AM start time · 90 minutes duration
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    EXAM SCHEDULE
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
                    Coaching scholarships for 500+ &amp; cash prizes up to ₹30,000
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
            2. MAIN FAQS INTERACTIVE SECTION (32 QUESTIONS)
        ========================================================= */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <FaqInteractive />
          </div>
        </section>

        {/* =========================================================
            3. IMPORTANT LINKS & QUICK DIRECTORY SECTION (FROM PDF)
        ========================================================= */}
        <section className="py-10 sm:py-12 bg-zinc-100/70 border-y border-zinc-200/80 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17] uppercase tracking-wider">
                Direct Portal Links
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-2">
                Important Links &amp; Official Portals
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-1">
                Quick access to official registration links, downloadable PDFs, syllabus, and support channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {IMPORTANT_LINKS.map((link) => {
                const isExternal = link.url.startsWith("http");
                const cardContent = (
                  <>
                    <div className="flex flex-1 items-center justify-center min-h-[44px]">
                      <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors leading-snug text-center">
                        {link.title}
                      </h3>
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-[#610D17] bg-white px-3.5 py-2 text-xs sm:text-sm font-bold text-[#610D17] shadow-xs transition-all duration-200 group-hover:bg-[#610D17] group-hover:text-white">
                        <span>Open Link</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </div>
                  </>
                );

                const cardClasses =
                  "group flex flex-col justify-between text-center rounded-2xl border border-zinc-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#610D17]/40 hover:shadow-md";

                return isExternal ? (
                  <a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link key={link.title} href={link.url} className={cardClasses}>
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. "STILL HAVE QUESTIONS?" HELPDESK BANNER
        ========================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
                  Join our daily live guidance sessions (Monday–Friday, 5:00 PM – 7:00 PM IST) or reach out directly to the NTS Student Helpline (8657506907 / 8657506909 / 8657003085).
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
                  <span>Join Live Meeting</span>
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
