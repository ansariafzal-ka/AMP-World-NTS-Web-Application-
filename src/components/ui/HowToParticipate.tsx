import React from "react";
import Ribbon from "@/components/common/Ribbon";

const eligibilityCriteria = [
  "Students currently enrolled in classes 8th, 9th, or 10th at schools or madrasas (age alignment - 13 years with class 8th, 14 years with class 9th, and 15 years with class 10th).",
  "Students enrolled in junior (11th & 12th) or degree college during the academic year 2025–2026.",
  "Diploma and ITI students aged 15–17 qualify under the junior college category; those aged 17–21 qualify under the senior college category.",
  "NIOS students take the school-level exam for secondary (class 10th) and the junior college-level exam for senior secondary.",
  "Only Indian citizens studying in India are eligible.",
  "All age criteria are based on cutoff date of October 2, 2025.",
];

const steps = [
  {
    step: "01",
    title: "Register",
    description: (
      <>
        Register via the{" "}
        <a
          href="https://www.tinyurl.com/AMPWorldApp"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#610D17] underline decoration-[#610D17]/40 hover:decoration-[#610D17] hover:text-[#4B0A12] transition-colors"
        >
          AMP World App
        </a>{" "}
        or on the web at{" "}
        <a
          href="https://ampworld.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#610D17] underline decoration-[#610D17]/40 hover:decoration-[#610D17] hover:text-[#4B0A12] transition-colors"
        >
          ampworld.in
        </a>
        .
      </>
    ),
  },
  {
    step: "02",
    title: "Prepare",
    description: "Check the syllabus, guidelines and preparation resources.",
  },
  {
    step: "03",
    title: "Appear",
    description: "Attend the examination at your allotted Centre.",
  },
  {
    step: "04",
    title: "Achieve",
    description: "Check your result and access scholarships, certificates and further opportunities.",
  },
];

export default function HowToParticipate() {
  return (
    <section className="bg-zinc-50/60 py-12 sm:py-16 lg:py-20 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Eligibility Criteria Card */}
          <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-9 shadow-sm flex flex-col justify-between h-full">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#610D17]">
                WHO CAN APPLY &amp; HOW?
              </span>

              <h2 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-zinc-900 tracking-tight leading-tight">
                Eligibility Criteria for NTS 2026
              </h2>

              <div className="w-12 h-1 bg-[#C89D4B] mt-2.5 mb-5 rounded-full" />

              {/* Checklist items with gold circled checkmarks */}
              <ul className="space-y-3 sm:space-y-3.5">
                {eligibilityCriteria.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#C89D4B] shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 12 2 2 4-4"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note Box */}
            <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-start gap-2 text-xs sm:text-[13px] text-zinc-700 bg-amber-50/70 p-3 rounded-xl border border-amber-200/70">
              <span className="font-bold text-zinc-900 uppercase tracking-wide shrink-0">
                NOTE:
              </span>
              <span>Winning students must provide valid identity and eligibility documents.</span>
            </div>
          </div>

          {/* Right Column: 4 Simple Steps Stacked Ribbons */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="mb-4 sm:mb-5">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#610D17]">
                HOW TO PARTICIPATE
              </span>
              <h3 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-zinc-900 tracking-tight">
                4 Simple Steps
              </h3>
              <div className="w-12 h-1 bg-[#C89D4B] mt-2.5 rounded-full" />
            </div>

            <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-3.5">
              {steps.map((item) => (
                <Ribbon
                  key={item.step}
                  title={item.title}
                  description={item.description}
                  icon={
                    <span className="text-base font-extrabold text-[#C89D4B] tracking-tight">
                      {item.step}
                    </span>
                  }
                  className="flex-1 hover:translate-x-1.5 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
