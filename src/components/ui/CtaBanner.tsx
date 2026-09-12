import React from "react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-10 sm:py-14 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#610D17] px-6 py-12 sm:px-12 sm:py-16 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif tracking-tight text-white leading-tight">
            Your Talent. Your Opportunity. Your Future.
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-200 max-w-2xl mx-auto font-normal">
            Join 2 Lakh+ students across India in AMP National Talent Search 2026.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/Student_Registration"
              className="w-full max-w-xs sm:max-w-none sm:w-72 inline-flex items-center justify-center rounded-xl bg-[#C89D4B] px-4 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-950 shadow-md transition-all duration-200 hover:bg-[#d4a854] hover:shadow-lg active:scale-95 text-center whitespace-nowrap"
            >
              REGISTER NOW
            </Link>

            <Link
              href="/About_NTS"
              className="w-full max-w-xs sm:max-w-none sm:w-72 inline-flex items-center justify-center rounded-xl border border-[#C89D4B]/60 bg-white/5 px-4 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E5B869] transition-all duration-200 hover:bg-[#C89D4B]/15 hover:border-[#C89D4B] active:scale-95 text-center whitespace-nowrap"
            >
              DOWNLOAD SYLLABUS
            </Link>

            <Link
              href="/Become_An_Exam_Center"
              className="w-full max-w-xs sm:max-w-none sm:w-72 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-4 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white transition-all duration-200 hover:bg-white/10 hover:border-white/50 active:scale-95 text-center whitespace-nowrap"
            >
              BECOME AN EXAM CENTRE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
