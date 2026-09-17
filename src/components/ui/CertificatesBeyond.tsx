import React from "react";

const certificatePoints = [
  "Participation Certificate for all participants",
  "Merit Certificates for top national performers",
  "Special Certificates for national winners",
  "State-level Merit Certificates",
  "Recognition across AMP platforms for outstanding performers",
];

const leftBeyondOpportunities = [
  "Career Guidance",
  "Skill Development Programmes",
  "Scholarship Guidance",
  "Higher Education Financial Assistance",
  "Mentorship through AMP Career Guidance Cell",
];

const rightBeyondOpportunities = [
  "Employability Training",
  "Job Fairs & Campus Placements",
  "International Scholarship Guidance",
  "Internship Opportunities",
];

function CertificateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M8 15h4" />
      <circle cx="16" cy="15.5" r="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17 14 19.5l2-1 2 1-1-2.5" />
    </svg>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6m-9.75 3h13.5A1.5 1.5 0 0 1 20.25 10.5v8.25A1.5 1.5 0 0 1 18.75 20.25H5.25A1.5 1.5 0 0 1 3.75 18.75V10.5A1.5 1.5 0 0 1 5.25 9Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5h16.5" />
    </svg>
  );
}

export default function CertificatesBeyond() {
  return (
    <section className="py-12 sm:py-16 bg-zinc-50 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Certificates */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-zinc-900 tracking-tight">
                Certificates
              </h3>
              {/* Golden accent bar */}
              <div className="w-12 h-0.5 bg-[#C59B27] mt-3 mb-5" />

              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed mb-8">
                Every participant gets an opportunity to receive recognition based on performance.
              </p>

              <ul className="space-y-4 sm:space-y-5">
                {certificatePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <CertificateIcon className="w-5 h-5 text-[#610D17] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-[15px] font-medium text-zinc-700 leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Beyond the Exam */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#610D17] p-6 sm:p-8 lg:p-10 text-white shadow-xl">
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#E5A96E]">
                BEYOND THE EXAM
              </span>

              <h3 className="mt-3 text-2xl sm:text-3xl lg:text-[32px] font-serif font-bold text-white tracking-tight leading-tight">
                Your NTS Journey Doesn&apos;t End with the Result.
              </h3>

              <p className="mt-2.5 text-sm sm:text-base text-rose-100/90 font-normal">
                Selected students may also get access to:
              </p>

              {/* 2-Column Grid of Opportunity Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {/* Left Sub-column (5 items) */}
                <div className="flex flex-col gap-3 sm:gap-3.5">
                  {leftBeyondOpportunities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 px-3.5 py-3 sm:py-3.5 transition-colors min-h-[54px]"
                    >
                      <BriefcaseIcon className="w-4 h-4 text-[#E5A96E] shrink-0" />
                      <span className="text-xs sm:text-[13.5px] font-medium text-white leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Sub-column (4 items) */}
                <div className="flex flex-col gap-3 sm:gap-3.5">
                  {rightBeyondOpportunities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 px-3.5 py-3 sm:py-3.5 transition-colors min-h-[54px]"
                    >
                      <BriefcaseIcon className="w-4 h-4 text-[#E5A96E] shrink-0" />
                      <span className="text-xs sm:text-[13.5px] font-medium text-white leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <p className="mt-6 pt-2 text-xs sm:text-sm text-rose-100/80 leading-relaxed font-normal">
              This makes NTS a gateway to a larger education and career ecosystem, not just a one-day examination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
