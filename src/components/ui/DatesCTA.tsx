import React from "react";
import Button from "@/components/common/Button";

export default function DatesCTA() {
  return (
    <section className="bg-white border-t border-zinc-200 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17] mb-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#610D17]" />
              Start Your Preparation Early
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Prepare for Success in NTS 2026
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Review the 5-section syllabus breakdown, category guidelines, and preparation tips
              crafted by India&apos;s leading academicians.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button variant="primary" size="md" href="/About_NTS" className="whitespace-nowrap">
              <span>Explore Syllabus</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="md"
              href="https://tinyurl.com/HelplineAMPNTS"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Daily Meet (5–6 PM)</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
