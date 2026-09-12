import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/common/Button";

export const metadata = {
  title: "About NTS — Syllabus & Preparation Guide | AMP NTS 2026",
  description:
    "Comprehensive Syllabus, Exam Pattern, and Preparation Guide for AMP National Talent Search (NTS) 2026 for Schools and Colleges.",
};

export default function AboutNTSPage() {
  const syllabusSections = [
    {
      number: "01",
      title: "Quantitative Analysis",
      questions: "20 Questions",
      description:
        "Assesses fundamental mathematical concepts, numerical computation, problem-solving, and quantitative analytical skills.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Data Interpretation & Logical Reasoning",
      questions: "20 Questions",
      description:
        "Tests your capability to decipher graphs, charts, and structured data, alongside applying critical logical reasoning to solve complex problems.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Vocabulary & Reading Comprehension",
      questions: "20 Questions",
      description:
        "Evaluates comprehensive English language command, contextual vocabulary, sentence structuring, and analytical passage reading skills.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Current Affairs",
      questions: "20 Questions",
      description:
        "Examines knowledge of recent national and international events, technological breakthroughs, socio-economic developments, and key milestones.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "05",
      title: "General Knowledge & Islamic Studies / Deeniyat",
      questions: "20 Questions",
      description:
        "Tests broad general awareness as well as foundational ethical, moral, and spiritual understanding to nurture holistic character development.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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
            1. PAGE HEADER (MAROON BACKGROUND)
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#610D17] via-[#520A13] to-[#3B070D] text-white pt-12 pb-14 sm:pt-14 sm:pb-16 shadow-inner">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About AMP NTS 2026
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              The National Talent Search (NTS) 2026 question papers are designed by a team of
              eminent academicians from prestigious universities and institutes across India.
            </p>

            {/* Quick Metrics Bar (Frosted Light Badges on Maroon) */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-2xl font-black text-white">100</span>
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">
                  Total Questions
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-2xl font-black text-white">5</span>
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">
                  Distinct Sections
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-2xl font-black text-white">20 Qs</span>
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">
                  Per Section
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-2xl font-black text-white">Zero</span>
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">
                  Negative Marking
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. CATEGORY BREAKDOWN: SCHOOL VS. COLLEGE
        ========================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Tailored Academic Rigor
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] mt-2">
                Exam Formats for Schools & Colleges
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3">
                Structured separately for school learners and higher education students to evaluate
                fundamental cognition, analytical reasoning, and competitive readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {/* COL 1: School Students (Classes 8, 9 & 10) */}
              <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#610D17]/40 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17]">
                      School Category
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">Classes 8, 9 & 10</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900">For School Students</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Pattern aligned with <strong>NTSE (by NCERT)</strong>, divided into two core
                    components:
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-zinc-900">MAT (Mental Ability)</span>
                        <span className="text-[10px] font-bold text-[#610D17] bg-[#FBF2F3] px-2 py-0.5 rounded">
                          Common for all
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600">
                        Tests logical reasoning, problem-solving, and cognitive ability.
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-zinc-900">SAT (Scholastic)</span>
                        <span className="text-[10px] font-bold text-zinc-600 bg-zinc-200/70 px-2 py-0.5 rounded">
                          Class-specific
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600">
                        Tests academic subject knowledge based on the respective class level.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5 text-xs text-amber-900 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Separate paper for each class: <strong>8, 9, and 10</strong></span>
                  </div>
                </div>
              </div>

              {/* COL 2: Junior / Intermediate College (Classes 11th & 12th) */}
              <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#610D17]/40 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17]">
                      Higher Secondary
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">Classes 11th & 12th</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900">Junior College</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Designed on the lines of major national entrance examinations to build strong
                    academic foundations and analytical aptitude.
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-100">
                      <span className="block text-xs font-bold text-zinc-900 mb-1">Core Focus Areas</span>
                      <p className="text-xs text-zinc-600">
                        Analytical reasoning, quantitative skills, language comprehension, and
                        general awareness.
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-100">
                      <span className="block text-xs font-bold text-zinc-900 mb-2">Key Benchmarks</span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                          CUET (UG)
                        </span>
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                          National Entrances
                        </span>
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                          Aptitude Foundation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
                    <span>Dedicated paper for <strong>Classes 11th & 12th</strong></span>
                  </div>
                </div>
              </div>

              {/* COL 3: Senior / Degree College (Undergraduate) */}
              <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#610D17]/40 hover:shadow-md md:col-span-2 lg:col-span-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17]">
                      Higher Education
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">Undergraduate</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900">Senior / Degree College</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Geared towards competitive examinations, higher education admissions, and
                    campus recruitment readiness.
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-100">
                      <span className="block text-xs font-bold text-zinc-900 mb-2">Comparable Standards</span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-semibold text-zinc-800">
                          UPSC (CSAT)
                        </span>
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-semibold text-zinc-800">
                          CAT
                        </span>
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-semibold text-zinc-800">
                          GRE / GMAT
                        </span>
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-semibold text-zinc-800">
                          GATE
                        </span>
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-semibold text-zinc-800">
                          SSC CGL
                        </span>
                        <span className="rounded-md bg-white border border-zinc-200 px-2 py-0.5 text-[11px] font-semibold text-zinc-800">
                          Campus Placements (TCS, Infosys, Wipro)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
                    <span>Dedicated paper for <strong>Undergraduate Students</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. EXAM PATTERN & 5 SECTIONS
        ========================================================= */}
        <section className="py-16 md:py-20 bg-zinc-50 border-y border-zinc-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Uniform Structure
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] mt-2">
                NTS Exam Syllabus & Pattern
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3">
                Each question paper consists of <strong>5 structured sections</strong>, featuring{" "}
                <strong>20 questions per section</strong> (100 Multiple Choice Questions in total).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {syllabusSections.map((sec, idx) => (
                <div
                  key={sec.number}
                  className={`relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#610D17]/40 hover:shadow-md ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBF2F3] text-[#610D17] font-black text-sm">
                        {sec.number}
                      </span>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                        {sec.questions}
                      </span>
                    </div>

                    <div className="text-[#610D17] mb-3">{sec.icon}</div>

                    <h3 className="text-lg font-bold text-zinc-900 leading-snug">{sec.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{sec.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium">
                    <span>Objective MCQ Format</span>
                    <span className="text-[#610D17] font-bold">20 Marks</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. EXAM GUIDELINES NTS 2026
        ========================================================= */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Essential Instructions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] mt-2">
                Exam Guidelines NTS 2026
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3">
                Please review the official rules, marking scheme, and candidate protocol carefully
                prior to examination day.
              </p>
            </div>

            {/* Key Rule Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-zinc-900">No Negative Marking</h3>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                  Candidates are encouraged to attempt all 100 questions. Incorrect responses will
                  not incur any negative score penalty.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-zinc-900">Single Attempt Policy</h3>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                  No extra attempts or re-tests will be granted under any circumstances once the
                  exam window closes.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-zinc-900">Flexible Registration</h3>
                <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                  Students can register directly as individual applicants or collectively through
                  their participating schools and colleges.
                </p>
              </div>
            </div>

            {/* Official Announcement Channels Banner */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                    Stay Updated on Announcements & Schedules
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    All schedule updates, admit card alerts, and results are published on the
                    official portal and distributed via registered communications. All decisions
                    by the AMP NTS Team remain final.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-700">
                    <span className="rounded-md bg-white border border-zinc-200 px-2.5 py-1">
                      Registered Email ID
                    </span>
                    <span className="rounded-md bg-white border border-zinc-200 px-2.5 py-1">
                      WhatsApp Alerts
                    </span>
                    <span className="rounded-md bg-white border border-zinc-200 px-2.5 py-1">
                      AMP World Mobile App
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <Button
                    href="https://www.ampindia.org/national_talent_search"
                    target="_blank"
                    variant="outline"
                    size="sm"
                  >
                    <span>ampindia.org/national_talent_search</span>
                    <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Support and Document Link CTA Card */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#610D17] to-[#4B0A12] text-white p-6 sm:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Check out Detailed Guideline Document
                  </h3>
                  <p className="mt-2 text-sm text-zinc-200 leading-relaxed">
                    Access the complete document detailing exam day instructions, technical
                    requirements, and coordinator guidelines. Have questions? Our helpdesk team is
                    ready to assist.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <Button
                    href="https://www.tinyurl.com/AllNTSDocument"
                    target="_blank"
                    variant="secondary"
                    size="lg"
                  >
                    View Guideline Doc
                  </Button>

                  <Button
                    href="mailto:nts@ampindia.org"
                    variant="frosted"
                    size="lg"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email: nts@ampindia.org</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
