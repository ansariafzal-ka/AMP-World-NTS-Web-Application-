import React from "react";
import Link from "next/link";

export default function DatesStudentNotes() {
  return (
    <section className="py-16 md:py-20 bg-zinc-50 border-t border-zinc-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
            Essential Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] mt-2">
            Important Notes for Students
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Key advisory reminders to keep your preparation, registration, and attendance on track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Stay Updated */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:border-[#610D17]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#610D17]/10 flex items-center justify-center text-[#610D17] mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-zinc-900">Stay Updated</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                All confirmed dates and important announcements will be shared on the official
                website{" "}
                <a
                  href="https://www.ampindia.org/national_talent_search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#610D17] underline hover:text-[#4B0A12]"
                >
                  www.ampindia.org/national_talent_search
                </a>{" "}
                and the <strong>AMP World Mobile App</strong>. Keep checking these platforms for
                the latest verified information, notification releases, and admit card download links.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-3">
              <a
                href="https://www.ampindia.org/national_talent_search"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#610D17] hover:text-[#4B0A12] bg-[#FBF2F3] hover:bg-[#F3E2E5] px-3.5 py-2 rounded-lg transition-colors"
              >
                <span>Visit Official NTS Portal</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Helpline Assistance */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:border-[#610D17]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-5 border border-emerald-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-zinc-900">Direct Category Helpline</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                For immediate assistance, please use the daily helpline number for your specific
                category (available <strong>11:00 AM to 7:00 PM</strong>) or email us at{" "}
                <a
                  href="mailto:nts@ampindia.org"
                  className="font-bold text-[#610D17] underline hover:text-[#4B0A12]"
                >
                  nts@ampindia.org
                </a>
                . Our team is dedicated to addressing your inquiries promptly.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-3">
              <Link
                href="/Contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#610D17] hover:bg-[#4B0A12] px-3.5 py-2 rounded-lg transition-colors shadow-xs"
              >
                <span>View Category Helplines</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <a
                href="mailto:nts@ampindia.org"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-lg transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>nts@ampindia.org</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
