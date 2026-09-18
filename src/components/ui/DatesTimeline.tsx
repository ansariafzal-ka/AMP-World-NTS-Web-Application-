import React from "react";
import Link from "next/link";

export interface TimelineEvent {
  id: string;
  step: string;
  title: string;
  schedule: string;
  status: string;
  statusType: "live" | "tentative" | "confirmed";
  description: string;
  icon: React.ReactNode;
  highlightNote: string;
  actionLabel?: string | null;
  actionHref?: string | null;
  isExternal?: boolean;
  isMilestone?: boolean;
}

export default function DatesTimeline() {
  const events: TimelineEvent[] = [
    {
      id: "info-sessions",
      step: "01",
      title: "Helpline & Info Sessions",
      schedule: "Daily (Mon–Sat) from 5:00 PM to 6:00 PM (IST)",
      status: "Daily / Live",
      statusType: "live",
      description:
        "Get your queries resolved directly by our academic coordinators and learn about the registration workflow, exam syllabus, and scholarship rewards.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      highlightNote: "Open to students, parents, schools, and junior colleges.",
      actionLabel: "Join Daily Meet (5 PM)",
      actionHref: "https://tinyurl.com/HelplineAMPNTS",
      isExternal: true,
    },
    {
      id: "launch-date",
      step: "02",
      title: "Launch Date & Registration Opens",
      schedule: "20th September 2026",
      status: "Confirmed",
      statusType: "confirmed",
      description:
        "Official launch of AMP NTS 2026. Online registration portal opens for School, Junior College, and Degree College students across India via the AMP World App.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      highlightNote: "Register via the official AMP World Mobile App.",
      actionLabel: "Download AMP World App",
      actionHref: "/AMP_World_App",
      isExternal: false,
    },
    {
      id: "omr-distribution",
      step: "03",
      title: "OMR Sheet Distribution",
      schedule: "5th November 2026",
      status: "Confirmed",
      statusType: "confirmed",
      description:
        "Physical OMR answer sheets, candidate roll verification lists, and examination materials are dispatched and distributed to 1,500+ verified test centres nationwide.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      highlightNote: "Coordinated directly with authorized Institutional Exam Centres.",
      actionLabel: "Exam Centre Portal",
      actionHref: "/Become_An_Exam_Center",
      isExternal: false,
    },
    {
      id: "registration-closes",
      step: "04",
      title: "Registration Closes",
      schedule: "22nd November 2026",
      status: "Confirmed",
      statusType: "confirmed",
      description:
        "Final deadline for submission of student application forms and institutional candidate batches to appear for AMP NTS 2026. Portal closes at midnight.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      highlightNote: "Ensure complete registration submission before the portal closes.",
      actionLabel: null,
      actionHref: null,
      isExternal: false,
    },
    {
      id: "admit-card",
      step: "05",
      title: "Admit Card Release",
      schedule: "Late November 2026",
      status: "Confirmed",
      statusType: "confirmed",
      description:
        "Download your verified hall ticket containing roll number, category code, reporting instructions, and allocated exam center venue.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      highlightNote: "Available on the AMP World Mobile App.",
      actionLabel: "Get Hall Ticket Info",
      actionHref: "/AMP_World_App",
      isExternal: false,
    },
    {
      id: "exam-date",
      step: "06",
      title: "AMP National Talent Search 2026 Exam",
      schedule: "5th December 2026",
      status: "Confirmed",
      statusType: "confirmed",
      description:
        "The nationwide physical offline pen & paper examination will be held simultaneously on a single designated day across all categories nationwide.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      highlightNote: "Flagship milestone — 90-minute offline test with 100 MCQs (No negative marking).",
      actionLabel: "View Syllabus & Pattern",
      actionHref: "/About_NTS",
      isExternal: false,
      isMilestone: true,
    },
    {
      id: "results",
      step: "07",
      title: "Results Announcements",
      schedule: "26th January 2027",
      status: "Confirmed",
      statusType: "confirmed",
      description:
        "Official announcement of National, State, and District Merit Lists, followed by distribution of academic scholarships, excellence awards, and verifiable e-certificates.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
          />
        </svg>
      ),
      highlightNote: "Declared on Republic Day · Awards, cash prizes & merit ranks.",
      actionLabel: null,
      actionHref: null,
      isExternal: false,
    },
    {
      id: "counselling",
      step: "08",
      title: "Career Counselling Session",
      schedule: "1st February 2027",
      status: "Confirmed",
      statusType: "confirmed",
      description:
        "Comprehensive career guidance, NEET/IIT-JEE coaching seat allocations, and higher education mentorship sessions on 1st February 2027.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      highlightNote: "Counselling Date: 1 Feb 2027.",
      actionLabel: "Helpline & Contact",
      actionHref: "/Contact",
      isExternal: false,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
            Step-by-Step Overview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] mt-2">
            NTS 2026 Examination Timeline
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-3">
            Follow each milestone from query resolution and registration to exam day and merit list
            announcements.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="relative space-y-6 sm:space-y-8">
          {/* Vertical Guide Line (Desktop) */}
          <div className="hidden sm:block absolute left-[31px] top-6 bottom-6 w-0.5 bg-zinc-200" />

          {events.map((event) => (
            <div
              key={event.id}
              className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl border p-5 sm:p-6 transition-all duration-200 ${
                event.isMilestone
                  ? "border-[#610D17]/30 bg-[#FBF2F3]/40 shadow-xs"
                  : "border-zinc-200 bg-white hover:border-[#610D17]/30 hover:shadow-xs"
              }`}
            >
              {/* Step Badge / Icon Circle */}
              <div
                className={`relative z-10 shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black text-sm shadow-xs ${
                  event.isMilestone
                    ? "bg-[#610D17] text-white ring-4 ring-[#610D17]/10"
                    : event.statusType === "live"
                    ? "bg-emerald-600 text-white ring-4 ring-emerald-50"
                    : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                }`}
              >
                {event.icon}
              </div>

              {/* Event Details */}
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Phase {event.step}
                    </span>
                    <span className="text-zinc-300">•</span>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900">{event.title}</h3>
                  </div>

                  {/* Status Tag */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      event.statusType === "confirmed"
                        ? "bg-[#FBF2F3] text-[#610D17] border border-[#610D17]/20"
                        : event.statusType === "live"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        event.statusType === "confirmed"
                          ? "bg-[#610D17]"
                          : event.statusType === "live"
                          ? "bg-emerald-500 animate-pulse"
                          : "bg-zinc-400"
                      }`}
                    />
                    {event.status}
                  </span>
                </div>

                {/* Schedule Date Callout */}
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#610D17] mb-2">
                  <svg
                    className="w-4 h-4 shrink-0 text-[#610D17]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{event.schedule}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlight Note & Optional CTA */}
                <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                    <svg
                      className="w-4 h-4 text-[#610D17] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{event.highlightNote}</span>
                  </div>

                  {event.actionLabel && event.actionHref && (
                    <div>
                      {event.isExternal ? (
                        <a
                          href={event.actionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#610D17] hover:text-[#4B0A12] bg-[#FBF2F3] hover:bg-[#F3E2E5] px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <span>{event.actionLabel}</span>
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
                      ) : (
                        <Link
                          href={event.actionHref}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#610D17] hover:text-[#4B0A12] bg-[#FBF2F3] hover:bg-[#F3E2E5] px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <span>{event.actionLabel}</span>
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
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
