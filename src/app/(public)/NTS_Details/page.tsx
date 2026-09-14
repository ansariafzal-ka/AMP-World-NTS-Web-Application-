import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/common/Button";
import Link from "next/link";

export const metadata = {
  title: "NTS Details - AMP National Talent Search 2026",
  description:
    "Complete details, competition highlights, eligibility criteria, exam patterns, and rewards for AMP National Talent Search (NTS) 2026.",
};

export default function NTSDetailsPage() {
  const detailSections = [
    {
      id: "highlights",
      badge: "Scale & Reach",
      title: "Competition Highlights",
      description:
        "AMP National Talent Search 2026 is India's premier multi-tier talent identification initiative, connecting aspiring minds with life-changing scholarships and career mentorship.",
      metrics: [
        { label: "Participating Students", value: "2,00,000+" },
        { label: "Schools & Colleges", value: "20,000+" },
        { label: "Exam Centers", value: "1,500+" },
        { label: "Scholarship Corpus", value: "₹10 Crore+" },
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ),
    },
    {
      id: "eligibility",
      badge: "Who Can Apply",
      title: "Eligibility Criteria",
      description:
        "Open across three structured academic tiers to ensure equitable competitive benchmarking for students across India.",
      metrics: [
        { label: "Category 1", value: "School Students (8th, 9th, 10th)" },
        { label: "Category 2", value: "Junior College (11th & 12th)" },
        { label: "Category 3", value: "Undergraduate Degree College" },
        { label: "Special Stream", value: "Diploma, ITI & NIOS Eligible" },
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      id: "pattern",
      badge: "Format",
      title: "Exam Pattern & Structure",
      description:
        "Designed to evaluate comprehensive intellectual readiness without punitive negative scoring, fostering confident student participation.",
      metrics: [
        { label: "Total Questions", value: "80 – 100 MCQs" },
        { label: "Duration", value: "90 Minutes" },
        { label: "Negative Marking", value: "None (Zero Penalty)" },
        { label: "Testing Mode", value: "Center-Based Online App" },
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      id: "rewards",
      badge: "Incentives",
      title: "Scholarships & Awards",
      description:
        "National, State, and District level recognition with cash rewards, premier coaching sponsorships, and academic mentorship.",
      metrics: [
        { label: "National 1st Prize", value: "₹30,000 Cash + Trophy" },
        { label: "National 2nd Prize", value: "₹20,000 Cash + Trophy" },
        { label: "National 3rd Prize", value: "₹10,000 Cash + Trophy" },
        { label: "Coaching Tie-Ups", value: "100% Fee Waiver (Top Rankers)" },
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            HERO HEADER
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[350px] w-full max-w-7xl rounded-full bg-[#B81E34]/30 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-[#9E1528]/35 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-zinc-200 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                <span>NTS 2026 · DETAILED OVERVIEW</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                AMP National Talent Search 2026 Details
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
                Explore comprehensive specifications, eligibility rules, competition scale, syllabus breakdown, and scholarship opportunities for India’s largest student benchmarking test.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button href="/About_NTS" variant="secondary" size="md">
                  View Syllabus & Guidelines
                </Button>
                <Button
                  href="https://www.tinyurl.com/AllNTSDocument"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="frosted"
                  size="md"
                >
                  Download All Documents
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DETAILED SPECIFICATION CARDS
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {detailSections.map((section) => (
                <div
                  key={section.id}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-200 hover:shadow-md hover:border-zinc-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17]">
                        {section.badge}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17]">
                        {section.icon}
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                      {section.title}
                    </h2>

                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 pt-5 border-t border-zinc-100">
                      {section.metrics.map((metric, idx) => (
                        <div key={idx} className="rounded-xl bg-zinc-50 p-3 border border-zinc-100">
                          <span className="block text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="block text-sm sm:text-base font-bold text-zinc-900 mt-0.5">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <Link
                      href="/About_NTS"
                      className="text-xs sm:text-sm font-bold text-[#610D17] hover:underline flex items-center gap-1.5"
                    >
                      <span>Explore In-Depth</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM CALL TO ACTION
        ========================================================= */}
        <section className="bg-white py-12 sm:py-16 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Ready to Benchmark Your Knowledge?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
              Join over 2,00,000+ students taking the first step toward prestigious academic recognition and scholarships.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3.5">
              <Button href="/Student_Registration" variant="primary" size="md">
                Register as Student
              </Button>
              <Button href="/Contact" variant="outline" size="md">
                Contact Helpdesk
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
