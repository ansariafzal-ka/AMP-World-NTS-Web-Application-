"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import OnlineMockPapersSection from "./OnlineMockPapersSection";

export default function MockPapersContent() {
  return (
    <div className="flex flex-col">
      {/* =========================================================
          1. HERO HEADER (EXACT MAROON GRADIENT + 4 STAT CARDS)
      ========================================================= */}
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
              <span>OFFICIAL ARCHIVE · QUESTION PAPERS & KEYS</span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              Mock & Practice Papers
            </h1>

            {/* Description */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
              Access authentic past exam papers, multilingual school test sets, and official master answer keys from <strong>2020 through 2025</strong>. Benchmark your preparation with the actual offline 100-MCQ format.
            </p>

            {/* Action Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://drive.google.com/drive/folders/1wKE-nYBvp3_xRPoR_Tjm-bwDGJoF7oFM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#610D17] hover:bg-zinc-100 shadow-md transition-all"
              >
                <svg className="w-4 h-4 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <span>Browse All Papers ↗</span>
              </a>
              <Link
                href="/student-registration"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#610D17] hover:bg-zinc-100 shadow-md transition-all"
              >
                <span>Register for NTS 2026 →</span>
              </Link>
            </div>
          </div>

          {/* 4 Bottom Stat / Highlight Cards */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            {/* Card 1: Featured White Card */}
            <div className="rounded-2xl bg-white p-5 lg:p-6 flex flex-col justify-center text-center shadow-md min-h-[140px] sm:min-h-[155px]">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-zinc-900 leading-tight block">
                  2020 – 2025
                </span>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-snug font-medium max-w-[220px] mx-auto">
                  6 years of verified nationwide actual papers & answer keys
                </p>
              </div>
            </div>

            {/* Card 2: Translucent Maroon Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:px-2.5 xl:px-4 flex flex-col justify-center text-center backdrop-blur-xs min-h-[140px] sm:min-h-[155px]">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white leading-tight block">
                  3 Categories
                </span>
                <div className="mt-2 text-[11px] sm:text-xs xl:text-[12.5px] text-zinc-200/90 leading-snug font-medium space-y-0.5">
                  <p>Schools (8th, 9th &amp; 10th)</p>
                  <p className="whitespace-nowrap">Junior / Intermediate Colleges (11th &amp; 12th)</p>
                  <p>Senior / Degree Colleges (Undergraduates)</p>
                </div>
              </div>
            </div>

            {/* Card 3: Translucent Maroon Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 lg:p-6 flex flex-col justify-center text-center backdrop-blur-xs min-h-[140px] sm:min-h-[155px]">
              <div>
                <span className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-white leading-tight block">
                  6 Mediums for schools
                </span>
                <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                  English, Hindi, Urdu, Bengali &amp; Gujarati languages
                </p>
              </div>
            </div>

            {/* Card 4: Translucent Maroon Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 lg:p-6 flex flex-col justify-center text-center backdrop-blur-xs min-h-[140px] sm:min-h-[155px]">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-white leading-tight block">
                  100% Free
                </span>
                <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                  Instant PDF downloads &amp; offline practice sets for every student
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* =========================================================
          2. ONLINE MOCK PAPERS (PRACTICE MOCK PAPERS ONLINE)
      ========================================================= */}
      <OnlineMockPapersSection />

      {/* =========================================================
          3. CORE REPOSITORIES (PROFESSIONAL CATEGORY CARDS)
      ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Resource Collections
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                PDF Papers Available for Download
              </h2>
              <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
                Select your academic tier below to access verified previous years&apos; question papers, marking keys, and test packages.
              </p>
            </div>

            <a
              href="https://drive.google.com/drive/folders/1wKE-nYBvp3_xRPoR_Tjm-bwDGJoF7oFM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#610D17] hover:underline"
            >
              <span>View Complete Archive</span>
              <span>→</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Category Card 1: Schools */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6 flex flex-col justify-between hover:border-[#610D17]/40 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-200">
                    Classes 8th, IX, X
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors">
                  School Category Papers
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Question papers for 8th, 9th, and 10th in 5 languages (English, Urdu, Hindi, Gujarati, Bengali).
                </p>

                <div className="mt-4 space-y-1.5 text-xs text-zinc-600">
                  <a
                    href="https://drive.google.com/drive/folders/14BYedE007saHdPHDbBcT9f90LDH5DfUk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 transition-colors"
                  >
                    <span>Class 8th Papers</span>
                    <span className="text-[#610D17] font-bold">↗</span>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1jZ1Rcmerw0DB7DpXaC05kcJcfXcLw6SU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 transition-colors"
                  >
                    <span>Class 9th Papers</span>
                    <span className="text-[#610D17] font-bold">↗</span>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1m6pYNt8ebwtztgJkaluLGd0lUITY_odG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 transition-colors"
                  >
                    <span>Class 10th Papers</span>
                    <span className="text-[#610D17] font-bold">↗</span>
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-200">
                <a
                  href="https://drive.google.com/drive/folders/1uh9ZFUVT_WviWdCy3Wo0aZW_dba9VCsZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#610D17] text-white py-2.5 text-xs font-bold hover:bg-[#4a0a12] transition-colors"
                >
                  Access School Papers →
                </a>
              </div>
            </div>

            {/* Category Card 4: NTS 2025 Latest Edition */}
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-5 sm:p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-300">
                    Latest 2025 Edition
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-emerald-900 transition-colors">
                  AMP NTS 2025 Latest Edition
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  The latest examination papers with official master solutions and verified scoring keys.
                </p>

                <div className="mt-4 space-y-1.5 text-xs text-zinc-700">
                  <a
                    href="https://drive.google.com/file/d/1XqQflG4hy0loE_2UkEV6jJ-x1t54IRw6/view?usp=drive_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-emerald-200 hover:border-emerald-400 font-semibold text-emerald-800 transition-colors"
                  >
                    <span>2025 Master Answer Key</span>
                    <span>PDF ↗</span>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1qRF44TNFmtmJ1yDGDJBDOY8GMHbU88ik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-emerald-200 hover:border-emerald-400 text-zinc-800 transition-colors"
                  >
                    <span>2025 Question Papers</span>
                    <span className="text-emerald-700 font-bold">↗</span>
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-emerald-200">
                <a
                  href="https://drive.google.com/drive/folders/1qRF44TNFmtmJ1yDGDJBDOY8GMHbU88ik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-700 text-white py-2.5 text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  Access 2025 Collection →
                </a>
              </div>
            </div>

            {/* Category Card 2: Junior College */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6 flex flex-col justify-between hover:border-[#610D17]/40 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-800 border border-blue-200">
                    Classes XI & XII
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors">
                  Junior College Papers
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Science, Commerce & Arts intermediate papers covering 2020 through 2025.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-200">
                <a
                  href="https://drive.google.com/drive/folders/1Y7FoYmq1uoi204gIbIo2kHjxkaIELUSb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#610D17] text-white py-2.5 text-xs font-bold hover:bg-[#4a0a12] transition-colors"
                >
                  Access Junior College Papers →
                </a>
              </div>
            </div>

            {/* Category Card 3: Senior College */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6 flex flex-col justify-between hover:border-[#610D17]/40 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-5.25 6.557c.75.25 1.5.47 2.25.66" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-bold text-purple-800 border border-purple-200">
                    Undergraduate (UG)
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors">
                  Senior College Papers
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  General Degree & Technical student question papers focusing on aptitude and career exams.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-200">
                <a
                  href="https://drive.google.com/drive/folders/1P0w5m9OGgBIqB9lRfrQKCPjzcW9BJM0T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#610D17] text-white py-2.5 text-xs font-bold hover:bg-[#4a0a12] transition-colors"
                >
                  Access Senior College Papers →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. EXAM PATTERN & PREPARATION TIPS
      ========================================================= */}
      {/* 4A. School Structure */}
      <section className="py-12 sm:py-16 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              School Structure
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Standard Pattern for Practice
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              When solving these mock test papers, simulate real exam conditions following this exact distribution.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Section A</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">MAT (Mental Ability Test)</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                50 Questions evaluating logical deduction, analytical aptitude, pattern completion, and spatial reasoning.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 50 Marks</span>
                <span className="text-emerald-700">Verbal & Non-Verbal</span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Section B</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">SAT (Scholastic Aptitude)</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                50 Questions assessing core subject proficiency tailored to student level (Math, Science, Social Sciences/General Knowledge).
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 50 Marks</span>
                <span className="text-emerald-700">NCERT/State Syllabus</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#610D17]/30 bg-[#fbf2f3]/40 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Marking Guidelines</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Zero Negative Marking</h3>
              <p className="mt-1 text-xs text-zinc-700 leading-relaxed">
                Total 100 MCQs in 90 Minutes. +1 mark for each correct answer. 0 marks deducted for wrong answers. Attempt all 100 questions!
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-800 flex items-center justify-between">
                <span>Exam Format: Pen & Paper</span>
                <span className="text-[#610D17] font-bold">OMR Sheet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4B. Junior College Structure */}
      <section className="py-12 sm:py-16 bg-zinc-50/60 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Junior College Structure
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Junior / Intermediate Colleges (11th &amp; 12th)
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Benchmarked on CUET (UG) and national entrance aptitude examinations (100 MCQs in 90 Minutes).
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Sections 1 & 2</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Quantitative & Data Interpretation</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                40 Questions (20 Qs each) covering Arithmetic, Algebra, Ratio, Charts, Graphs, Seating Arrangements, and Logical Reasoning.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 40 Marks</span>
                <span className="text-emerald-700">Analytical Aptitude</span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Sections 3, 4 & 5</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Language, Awareness & Deeniyat</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                60 Questions (20 Qs each) evaluating Reading Comprehension, Vocabulary, National/International Current Affairs, and General Knowledge & Ethics.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 60 Marks</span>
                <span className="text-emerald-700">CUET Foundation</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#610D17]/30 bg-[#fbf2f3]/40 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Marking Guidelines</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Zero Negative Marking</h3>
              <p className="mt-1 text-xs text-zinc-700 leading-relaxed">
                Total 100 MCQs in 90 Minutes. +1 mark for each correct answer. 0 marks deducted for wrong answers. Attempt all 100 questions!
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-800 flex items-center justify-between">
                <span>Exam Format: Pen & Paper</span>
                <span className="text-[#610D17] font-bold">OMR Sheet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4C. Senior College Structure */}
      <section className="py-12 sm:py-16 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Senior College Structure
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Senior / Degree Colleges (Undergraduates)
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Benchmarked on UPSC CSAT, CAT, CUET-PG, GRE, and IT Campus Placement Aptitude (TCS, Infosys, Wipro).
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Sections 1 & 2</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Higher Quantitative & Critical Reasoning</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                40 Questions (20 Qs each) covering Higher Mathematics, Probability, Permutations, Data Sufficiency, Caselets, and Analytical Deductions.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 40 Marks</span>
                <span className="text-emerald-700">CSAT & Placement Level</span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Sections 3, 4 & 5</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Verbal Command, Affairs & Heritage</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                60 Questions (20 Qs each) testing Inference-based Reading Comprehension, Error Spotting, National/Global Affairs, Economy, and Islamic Heritage & Values.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 60 Marks</span>
                <span className="text-emerald-700">Competitive Benchmark</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#610D17]/30 bg-[#fbf2f3]/40 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Marking Guidelines</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Zero Negative Marking</h3>
              <p className="mt-1 text-xs text-zinc-700 leading-relaxed">
                Total 100 MCQs in 90 Minutes. +1 mark for each correct answer. 0 marks deducted for wrong answers. Attempt all 100 questions!
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-800 flex items-center justify-between">
                <span>Exam Format: Pen & Paper</span>
                <span className="text-[#610D17] font-bold">OMR Sheet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CALL TO ACTION
      ========================================================= */}
      <section className="bg-zinc-50 py-14 sm:py-20 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Ready to Take the Actual Examination?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Practice with past papers, master the OMR format, and enroll online for the nationwide offline test across 600+ districts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href="/student-registration" variant="primary" size="md">
              Register as Student
            </Button>
            <a
              href="https://drive.google.com/drive/folders/1wKE-nYBvp3_xRPoR_Tjm-bwDGJoF7oFM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors"
            >
              Browse Master Repository ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
