import React from "react";

export default function DatesHero() {
  const milestoneHighlights = [
    {
      label: "Daily Sessions",
      value: "5:00 – 6:00 PM",
      subtext: "Mon to Sat (IST)",
    },
    {
      label: "Registration Window",
      value: "Sep – Nov 2026",
      subtext: "Tentative Schedule",
    },
    {
      label: "Exam Date",
      value: "December 2026",
      subtext: "Confirmed Offline Exam",
    },
    {
      label: "Results & Merit",
      value: "January 2027",
      subtext: "Scholarships Announced",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#610D17] via-[#520A13] to-[#3B070D] text-white pt-12 pb-14 sm:pt-16 sm:pb-20 shadow-inner">
      {/* Ambient Glow Accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-10 w-80 h-80 bg-white/5 rounded-full blur-2xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Important Dates & Schedule
        </h1>

        {/* Lead Narrative */}
        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
          Stay ahead and mark your calendars! The timeline for the AMP National Talent Search is
          designed to give you ample time to prepare, register, and excel. Please note that the
          dates for registration, result announcements, and other events are tentative and will
          be confirmed on the official website. The key date is set for{" "}
          <strong className="text-white font-bold">December 2026</strong>, so plan your
          preparation accordingly.
        </p>

        {/* Key Timeline Milestone Highlights Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {milestoneHighlights.map((milestone) => (
            <div
              key={milestone.label}
              className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs text-left"
            >
              <span className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wide block">
                {milestone.label}
              </span>
              <span className="text-lg sm:text-xl font-black text-white mt-0.5 block">
                {milestone.value}
              </span>
              <span className="text-[11px] text-zinc-300 font-medium">{milestone.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
