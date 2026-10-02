import React from "react";

const scholarshipDetails = [
  {
    id: "top-500",
    text: "The top 500+ performers in AMP NTS 2026 will be eligible for 100% scholarships for coaching programs such as NEET, IIT-JEE, CLAT, and other competitive exams. These will be offered by AMP's partner coaching institutes across India.",
  },
  {
    id: "top-2500",
    text: "An additional 2,500+ high-performing students will receive partial scholarships ranging from 75% to 50%.",
  },
  {
    id: "offline-test",
    text: "Shortlisted students may be required to appear for an offline test, interview, and/or counselling, conducted by AMP, its training partners, or both.",
  },
  {
    id: "selection-process",
    text: "The final selection process will follow established models used by national admission authorities (e.g., NEET counselling procedures).",
  },
];

const importantNotes = [
  "Scholarships are offered exclusively by AMP's training partners as a fee waiver on their annual tuition structure.",
  "Scholarships apply to tuition fees only, and may or may not include residential facilities.",
  "For updates and detailed information, please visit the AMP website, which will be updated regularly.",
];

const cashAwards = [
  { rank: "1st Position", award: "₹30,000", highlight: true },
  { rank: "2nd Position", award: "₹20,000", highlight: true },
  { rank: "3rd Position", award: "₹10,000", highlight: true },
  { rank: "4th to 10th Position Winners", award: "₹2,000 each", highlight: false },
  { rank: "11th to 50th Position Winners", award: "₹1,000 each", highlight: false },
  { rank: "State Topper (in each category)", award: "₹1,000 each", highlight: false },
];

const certificateItems = [
  {
    title: "Special e-Certificates",
    subtitle: "For Top 50 National-level Winners (in each category)",
    icon: "trophy",
  },
  {
    title: "E-Certificates of Merit",
    subtitle: "For Top 1%, 2%, 5%, 10%, and 20% in the nation (in each category)",
    icon: "medal",
  },
  {
    title: "State-level Recognition",
    subtitle: "E-Certificates for Top 10 State-level Winners & Top 1% in the States (in each category)",
    icon: "star",
  },
  {
    title: "E-Certificates of Participation",
    subtitle: "Awarded to all verified registered participants",
    icon: "certificate",
  },
];

const additionalBenefits = [
  { label: "Employability Training Programs (ETPs)", desc: "Soft skills & interview readiness" },
  { label: "Job Fairs & Campus Placement Programs", desc: "Via AMPowerJobs.com" },
  { label: "Skill-Based & Job-Oriented Training Programs", desc: "Industry-aligned vocational skills" },
  { label: "Scholarship Guidance & Application Support", desc: "National & state schemes navigation" },
  { label: "International Scholarship Guidance", desc: "Global academic opportunities" },
  { label: "Financial Aid for Higher Education", desc: "Via IndiaZakat.com crowdfunding" },
  { label: "Internship Opportunities", desc: "Corporate & non-profit experience" },
  { label: "One-on-One Mentorship", desc: "AMP Career Guidance Cell & Industry Connect" },
];

export default function ScholarshipsRewards() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-50 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Banner */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#610D17] px-6 py-9 sm:px-10 sm:py-11 text-center text-white shadow-xl shadow-[#610D17]/15">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-2xl" />
          
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-xs">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Rewards &amp; Recognition
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">
              Scholarships Worth ₹10 Crore+ &amp; Cash Prizes
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-rose-100/90 leading-relaxed font-normal">
              Empowering academic ambition with nationwide coaching scholarships, cash awards for category toppers, merit-cum-means financial aid, and long-term career support.
            </p>
          </div>
        </div>

        {/* ========================================================
            ROW 1: SCHOLARSHIPS (LEFT) & CASH PRIZES (RIGHT)
        ======================================================== */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Scholarships */}
          <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-zinc-100">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                  Scholarships
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-amber-700 mt-0.5">
                  Scholarships Worth ₹10 Crore+ for Top 5,000+ Students!
                </p>
              </div>

              {/* Scholarship Detail Points */}
              <ul className="mt-5 space-y-3.5">
                {scholarshipDetails.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#610D17]/10 text-[#610D17]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Notes Sub-Card */}
            <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-amber-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                <h4 className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wide">
                  Important Notes:
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-zinc-700">
                {importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span className="leading-snug">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Cash Prizes worth Rs. 5 Lakh+ */}
          <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-4 border-b border-zinc-100">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                  Cash Prizes worth Rs. 5 Lakh+!
                </h3>
                <span className="self-start sm:self-center text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md">
                  All Categories
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-zinc-600">
                Cash Awards for Students (All Categories): Top performers in each category will receive the following cash prizes
              </p>

              {/* Table Container */}
              <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#610D17] text-white">
                      <th className="px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold">
                        Rank
                      </th>
                      <th className="px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold text-right">
                        Cash Award
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/70 text-xs sm:text-sm">
                    {cashAwards.map((row, index) => (
                      <tr
                        key={row.rank}
                        className={row.highlight ? "bg-amber-50/40 font-semibold" : index % 2 === 0 ? "bg-zinc-50/50" : "bg-white"}
                      >
                        <td className="px-4 sm:px-5 py-3.5 text-zinc-800">
                          {row.rank}
                        </td>
                        <td className={`px-4 sm:px-5 py-3.5 text-right ${row.highlight ? "font-bold text-[#610D17]" : "font-medium text-zinc-900"}`}>
                          {row.award}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <span>National &amp; State Level Recognition</span>
              <span className="font-semibold text-[#610D17]">Total Cash Pool: ₹5,00,000+</span>
            </div>
          </div>

        </div>

        {/* ========================================================
            ROW 2: ACADEMIC SCHOLARSHIPS (LEFT) & CERTIFICATES (RIGHT)
        ======================================================== */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 3: Academic Scholarships / Merit-cum-Means */}
          <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-zinc-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                    Academic Scholarships
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-800 mt-0.5">
                    Merit-cum-Means Support for 500 Needy Students
                  </p>
                </div>
                <a
                  href="https://indiazakat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-center inline-flex items-center gap-1.5 rounded-full bg-[#610D17] px-4 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#520A13] transition-all whitespace-nowrap"
                >
                  <span>INDIA ZAKAT</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

              <div className="mt-5 space-y-3.5 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <p className="flex items-start gap-2.5">
                  <span className="text-[#610D17] font-bold text-base leading-none mt-0.5">•</span>
                  <span>
                    The top 500 deserving students from all categories will receive financial assistance of{" "}
                    <strong className="text-zinc-900 font-semibold">₹10,000 or more</strong> through AMP&apos;s crowdfunding platform –{" "}
                    <a
                      href="https://indiazakat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#610D17] underline hover:text-[#520A13]"
                    >
                      IndiaZakat.com
                    </a>
                    .
                  </span>
                </p>

                <div className="rounded-xl bg-zinc-50 border border-zinc-200/80 p-3.5 text-xs sm:text-sm text-zinc-800">
                  <p className="font-semibold text-zinc-900 mb-1">
                    Eligibility Requirement:
                  </p>
                  <p className="text-zinc-600">
                    The student&apos;s family income must be below <strong className="text-zinc-900 font-semibold">₹2,00,000 per annum</strong>.
                  </p>
                </div>

                <p className="flex items-start gap-2.5">
                  <span className="text-[#610D17] font-bold text-base leading-none mt-0.5">•</span>
                  <span>
                    AMP will guide eligible students in applying for these scholarships via{" "}
                    <a
                      href="https://indiazakat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#610D17] underline hover:text-[#520A13]"
                    >
                      IndiaZakat.com
                    </a>
                    .
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-100 text-xs text-zinc-500">
              Crowdfunding assistance provided directly to verified student bank accounts.
            </div>
          </div>

          {/* Card 4: Certificates */}
          <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-zinc-100">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                  Certificates
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-zinc-800">
                  Special e-Certificates for Top 50 National-level Winners (in each category)
                </p>
              </div>

              <div className="mt-4 space-y-2.5">
                {certificateItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/70"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#610D17]/10 text-[#610D17] mt-0.5">
                      {item.icon === "trophy" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.496m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.496 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492c.981.142 1.954.317 2.916.52a6.003 6.003 0 0 1-5.395 4.972m-2.749 1.35a6.726 6.726 0 0 1-2.748 1.35" />
                        </svg>
                      )}
                      {item.icon === "medal" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="8" r="5" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.5 13-3 8-3-8" />
                        </svg>
                      )}
                      {item.icon === "star" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                      )}
                      {item.icon === "certificate" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <rect x="4" y="3" width="16" height="18" rx="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M8 15h5" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 text-xs text-zinc-500">
              Downloadable verified digital credentials delivered through AMP World App.
            </div>
          </div>

        </div>

        {/* ========================================================
            ROW 3: ADDITIONAL BENEFITS FOR STUDENTS (FULL WIDTH)
        ======================================================== */}
        <div className="mt-6 sm:mt-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-9 shadow-xs">
            <div className="max-w-3xl pb-4 border-b border-zinc-100">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                Additional Benefits for Students
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                In addition to the competition, AMP offers a range of support services to aid students in their academic and professional journey. AMP will provide priority access to the following student-focused initiatives:
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {additionalBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:bg-rose-50/40 hover:border-[#610D17]/25 transition-all group"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#610D17]/10 text-[#610D17] shrink-0 mt-0.5 group-hover:bg-[#610D17] group-hover:text-white transition-colors">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-zinc-800 leading-snug group-hover:text-[#610D17] transition-colors">
                        {benefit.label}
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
