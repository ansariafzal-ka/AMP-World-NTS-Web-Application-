import React from "react";

export default function DatesHero() {
  return (
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
            <span>NTS 2026 · IMPORTANT DATES</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            Important Dates & Schedule
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
            Stay ahead and mark your calendars! The timeline for the AMP National Talent Search is
            designed to give you ample time to prepare, register, and excel. Key exam date is set
            for December 2026.
          </p>
        </div>

        {/* 4 Bottom Milestone Cards */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Featured White Card */}
          <div className="rounded-2xl bg-white p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center shadow-md">
            <div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 leading-tight block">
                5:00 – 6:00 PM
              </span>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-snug font-medium max-w-[220px] mx-auto">
                Daily live orientation & student doubt-clearing sessions
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-zinc-100">
              <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                DAILY HELPLINE
              </span>
            </div>
          </div>

          {/* Card 2: Translucent Maroon Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
            <div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                Sep – Nov 2026
              </span>
              <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                Online registration portal open for all categories
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                REGISTRATION WINDOW
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
                Nationwide offline pen & paper examination day
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                EXAM DATE
              </span>
            </div>
          </div>

          {/* Card 4: Translucent Maroon Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
            <div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                January 2027
              </span>
              <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                National merit ranks & scholarship awardees declared
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                RESULTS & MERIT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
