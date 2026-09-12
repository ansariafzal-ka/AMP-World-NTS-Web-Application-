import React from "react";

const scholarshipItems = [
  {
    id: "top-500",
    text: "Top 500+ students – Coaching scholarship opportunities through partner institutes.",
  },
  {
    id: "top-1500",
    text: "Top 1,500+ performers – 100% to 75% scholarship opportunities.",
  },
  {
    id: "top-2500",
    text: "Additional 2,500+ students – 75% to 50% partial scholarship opportunities.",
  },
  {
    id: "coaching-programmes",
    text: "Scholarships may cover coaching programmes such as NEET, IIT-JEE, CLAT, UPSC and other competitive examinations.",
  },
];

const cashAwards = [
  { rank: "1st Position", award: "₹30,000" },
  { rank: "2nd Position", award: "₹20,000" },
  { rank: "3rd Position", award: "₹10,000" },
  { rank: "4th–10th", award: "₹2,000 each" },
  { rank: "11th–50th", award: "₹1,000 each" },
  { rank: "State Topper", award: "₹1,000 each" },
];

export default function ScholarshipsRewards() {
  return (
    <section className="py-12 sm:py-16 bg-zinc-50 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Maroon Banner */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#610D17] px-6 py-10 sm:px-12 sm:py-12 text-center text-white shadow-xl">
          <div className="relative z-10 flex flex-col items-center">
            {/* Ribbon / Medal Icon */}
            <svg
              className="h-9 w-9 text-amber-300 mb-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="5.5" />
              <path
                d="M15.5 13.5 18 22l-6-3.5L6 22l2.5-8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-300">
              Scholarships &amp; Rewards
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-5xl font-bold font-serif tracking-tight text-white">
              ₹10 Crore+ Scholarship Opportunities
            </h2>

            <p className="mt-3 text-sm sm:text-base text-zinc-200 max-w-2xl mx-auto font-normal leading-relaxed">
              NTS 2026 provides deserving students with access to scholarships and opportunities through AMP&apos;s training partners.
            </p>
          </div>
        </div>

        {/* 2-Column Grid Below Banner */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Scholarship Opportunities & Merit-cum-Means Support */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 1: Scholarship Opportunities */}
            <div className="flex-1 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#610D17] tracking-tight mb-5">
                Scholarship Opportunities
              </h3>

              <ul className="space-y-4">
                {scholarshipItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-3.5">
                    {/* Lightbulb Icon */}
                    <svg
                      className="h-5 w-5 text-amber-600 shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                    >
                      <path d="M9 18h6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 22h4" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M12 2a7 7 0 0 0-7 7c0 2.5 1.2 4.6 3 5.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3c1.8-1.1 3-3.2 3-5.7a7 7 0 0 0-7-7Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-zinc-700 leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Merit-cum-Means Support */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#610D17] tracking-tight mb-2">
                Merit-cum-Means Support
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Top deserving students from families with annual income below ₹2 lakh may also receive financial assistance through{" "}
                <a
                  href="https://indiazakat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-[#610D17] transition-colors"
                >
                  IndiaZakat.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right Column: Cash Awards Table */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#610D17] tracking-tight">
                    Cash Awards
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-amber-600">
                    ₹5 Lakh+ Cash Prizes
                  </span>
                </div>

                {/* Table Container */}
                <div className="overflow-hidden rounded-xl border border-zinc-200">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#610D17] text-white">
                        <th className="px-5 py-3.5 text-xs sm:text-sm font-semibold">
                          Rank
                        </th>
                        <th className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-right">
                          Cash Award
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200/70">
                      {cashAwards.map((row, index) => (
                        <tr
                          key={row.rank}
                          className={index % 2 === 0 ? "bg-zinc-50/50" : "bg-white"}
                        >
                          <td className="px-5 py-3.5 text-xs sm:text-sm font-medium text-zinc-800">
                            {row.rank}
                          </td>
                          <td className="px-5 py-3.5 text-xs sm:text-sm font-bold text-zinc-900 text-right">
                            {row.award}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
