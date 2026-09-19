"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/common/Button";

export default function NTSDetailsContent() {
  const [syllabusTab, setSyllabusTab] = useState<"school" | "college">("school");
  const [booksTab, setBooksTab] = useState<"school" | "college">("school");

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================
          SECTION 1: HERO & SCALE HIGHLIGHTS (PDF Page 1)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-14 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[380px] w-full max-w-7xl rounded-full bg-[#B81E34]/30 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-[#9E1528]/35 blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-zinc-200 uppercase backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>December 2026 · Nationwide Offline Exam</span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              AMP National Talent Search 2026
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-zinc-100 leading-relaxed max-w-3xl font-normal">
              India’s premier nationwide offline talent benchmark conducted by the <strong className="text-white font-semibold">Association of Muslim Professionals (AMP)</strong>. In the past 6 years, over <strong className="text-white font-semibold">3.5 Lakh+ students across 400+ districts</strong> have participated. NTS 2026 welcomes students from all educational boards, universities, and Madarsa systems across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="/student-registration" variant="secondary" size="md">
                Register as Student
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: 8 OBJECTIVES OF THE COMPETITION (PDF Pages 1–2)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Purpose & Vision
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Objectives of the Competition
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Crafted by distinguished academicians from across the nation to elevate student readiness, benchmark aptitude, and bridge talent with opportunity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Awareness & Competition",
                desc: "Create widespread awareness and instill a spirited drive for academic excellence early in education.",
              },
              {
                num: "02",
                title: "Competitive Readiness",
                desc: "Rigorously assess general knowledge, logical faculties, and real-time exam preparedness.",
              },
              {
                num: "03",
                title: "Strengths & Weaknesses",
                desc: "Provide students with actionable diagnostic feedback on their analytical capabilities and subject gaps.",
              },
              {
                num: "04",
                title: "National Exam Gateway",
                desc: "Serve as a stepping stone for IIT-JEE, NEET, UPSC, CAT, CUET, CLAT, NDA, CDS, and career gateways.",
              },
              {
                num: "05",
                title: "Institutional Recognition",
                desc: "Gain widespread prestige and credentialing among leading universities, colleges, and schools.",
              },
              {
                num: "06",
                title: "Benchmark for Parents",
                desc: "Offer reliable, standardized insights for educators and families to support their children's progress.",
              },
              {
                num: "07",
                title: "Mentorship & Resources",
                desc: "Direct integration into AMP's ongoing scholarship, career guidance, and empowerment ecosystems.",
              },
              {
                num: "08",
                title: "Firsthand Experience",
                desc: "Authentic national exam exposure using test papers created by distinguished subject matter experts.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 transition-all hover:border-[#610D17]/30 hover:bg-white hover:shadow-md flex flex-col"
              >
                <span className="text-3xl font-black text-[#610D17]/25">{item.num}</span>
                <h3 className="mt-2 text-base font-bold text-zinc-900 leading-snug">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: ELIGIBILITY CRITERIA & AGE MATRIX (PDF Page 2)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Participation Rules
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Eligibility Criteria for NTS 2026
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Open to all Indian citizens studying in India across schools, junior colleges, degree colleges, NIOS, and Madarsa systems.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* School Tier */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col">
              <div className="inline-block rounded-lg bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17] w-fit">
                Category 01
              </div>
              <h3 className="mt-3 text-xl font-bold text-zinc-900">School Students</h3>
              <p className="text-sm text-zinc-500 font-medium mt-1">Classes 8th, 9th & 10th</p>

              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>Enrolled in recognized schools or madrasas across India.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-zinc-900">Age Alignment:</strong> 13 years with Class 8th, 14 years with Class 9th, and 15 years with Class 10th.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>NIOS Secondary (Class 10th) students take this school-level exam.</span>
                </li>
              </ul>
            </div>

            {/* Junior College Tier */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col">
              <div className="inline-block rounded-lg bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17] w-fit">
                Category 02
              </div>
              <h3 className="mt-3 text-xl font-bold text-zinc-900">Junior College</h3>
              <p className="text-sm text-zinc-500 font-medium mt-1">Classes 11th & 12th / Intermediate</p>

              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>Enrolled in 11th or 12th during the academic year 2026–2027.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>Diploma and ITI students aged 15–17 qualify under this category.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>NIOS Senior Secondary students take this junior college exam.</span>
                </li>
              </ul>
            </div>

            {/* Senior College Tier */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col">
              <div className="inline-block rounded-lg bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17] w-fit">
                Category 03
              </div>
              <h3 className="mt-3 text-xl font-bold text-zinc-900">Senior / Degree College</h3>
              <p className="text-sm text-zinc-500 font-medium mt-1">Undergraduate Degree Students</p>

              <ul className="mt-5 space-y-3 text-xs sm:text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>Students enrolled in undergraduate degree programs in AY 2026–2027.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>Diploma and ITI students aged 17–21 qualify under this category.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#610D17] font-bold mt-0.5">•</span>
                  <span>Open to all disciplines (BA, BSc, BCom, BTech, MBBS, BBA, Law, etc.).</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm">
              !
            </span>
            <div className="text-xs sm:text-sm text-amber-900">
              <strong className="font-bold">Important Cutoff Date:</strong> All age criteria are calculated based on the cutoff date of <strong className="underline">September 20, 2026</strong>. Only Indian citizens studying in India are eligible. Winning students must provide valid identity and institutional eligibility documents.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: EXAM MODE & TEST SPECIFICATIONS (PDF Page 2)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Format & Date
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Offline Pen & Paper Examination
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
              To guarantee fairness, integrity, and equal accessibility across all urban and rural talukas, <strong className="text-zinc-900 font-semibold">there will be NO Online Exam</strong> for NTS 2026.
            </p>
          </div>

          {/* Confirmed Date Banner */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#5E0E1C] to-[#801424] text-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-2xl">
                📅
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-200">
                  Confirmed Examination Date
                </span>
                <p className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                  Saturday, 05th December 2026
                </p>
                <p className="text-xs sm:text-sm text-rose-100 mt-1">
                  Exams for all three categories (School, Junior College, Senior College) will be held simultaneously on the same day nationwide.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-xl bg-white/20 px-4 py-2 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                Pan-India Physical Mode
              </span>
            </div>
          </div>

          {/* 4 Parameter Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] text-lg">
                  ⏱️
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm">90 Minutes</h3>
                  <span className="text-[11px] font-medium text-zinc-500">Standard duration</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-600 leading-relaxed">
                A focused 1.5-hour testing window designed to evaluate speed, analytical precision, and time management.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] text-lg">
                  📝
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm">100 MCQs (OMR)</h3>
                  <span className="text-[11px] font-medium text-zinc-500">Objective physical format</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-600 leading-relaxed">
                Objective questions with bubbling on official printed OMR sheets evaluated using automated optical scanners.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 text-lg font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm">No Negative Marking</h3>
                  <span className="text-[11px] font-medium text-zinc-500">Zero penalty score</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-600 leading-relaxed">
                Full marks awarded for every correct answer with zero negative deductions, encouraging confident student participation.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] text-lg">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm">1,500+ Exam Centres</h3>
                  <span className="text-[11px] font-medium text-zinc-500">600+ Districts</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-600 leading-relaxed">
                Located in 1,200+ blocks across India. Students choose their nearest preferred centre during registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: REGISTRATION PATHWAYS & BULK EXCEL (PDF Page 3)
          COMPLETELY ELIMINATING EMPTY WHITE SPACE
      ========================================================= */}
      <section id="bulk-registration" className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              How to Register
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              3 Convenient Registration Options
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Register individually through the web portal, via the mobile app, or in bulk through your educational institution.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1: Web Portal */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Method 1</span>
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-semibold text-zinc-600">Individual</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-zinc-900">AMP World Website</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Direct online candidate portal with instant application submission.
              </p>

              <div className="mt-4 space-y-3 text-xs text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17]/10 text-[#610D17] font-bold text-[11px]">
                    1
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Access Web Portal:</strong>
                    <span>
                      Visit{' '}
                      <a
                        href="https://www.ampworld.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#610D17] underline decoration-[#610D17]/40 underline-offset-2 hover:decoration-[#610D17] hover:text-[#45090f] transition-colors"
                      >
                        www.ampworld.in
                      </a>{' '}
                      on desktop or mobile.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17]/10 text-[#610D17] font-bold text-[11px]">
                    2
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Fill Student Details:</strong>
                    <span>Select student tier, fill profile, and pick nearest Exam Centre.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17]/10 text-[#610D17] font-bold text-[11px]">
                    3
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Instant Confirmation:</strong>
                    <span>Submit form and receive official registration ID via SMS & email.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[11px] text-zinc-500 font-medium">
                <span className="bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">✓ Instant ID</span>
                <span className="bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">✓ Centre Selection</span>
                <span className="bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">✓ Web Access</span>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-100">
                <Button href="/student-registration" variant="primary" size="sm" className="w-full justify-center">
                  Register on Website
                </Button>
              </div>
            </div>

            {/* Option 2: Mobile App */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Method 2</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">Android App</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-zinc-900">AMP World Mobile App</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Download from Google Play Store for registration and hall ticket access.
              </p>

              <div className="mt-4 space-y-3 text-xs text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                    1
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Download from Play Store:</strong>
                    <span>
                      Install app via{' '}
                      <a
                        href="https://tinyurl.com/AMPWorldApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-700 underline decoration-emerald-500/40 underline-offset-2 hover:decoration-emerald-700 hover:text-emerald-900 transition-colors"
                      >
                        tinyurl.com/AMPWorldApp
                      </a>
                      .
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                    2
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Sign In & Profile:</strong>
                    <span>Log in using your verified mobile number and personal details.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                    3
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Register & Track:</strong>
                    <span>Apply under Student Tab and download Hall Ticket on Dec 1st.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 flex flex-wrap gap-1.5 text-[11px] text-zinc-500 font-medium">
                <span className="bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">✓ In-App Hall Ticket</span>
                <span className="bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">✓ Push Alerts</span>
                <span className="bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">✓ Easy Updates</span>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-100">
                <Button
                  href="https://www.tinyurl.com/AMPWorldApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Download Android App
                </Button>
              </div>
            </div>

            {/* Option 3: Bulk Institutional Registration */}
            <div className="rounded-2xl border border-[#610D17]/30 bg-[#fbf2f3]/40 p-6 sm:p-7 shadow-xs flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Method 3</span>
                <span className="rounded-full bg-[#610D17]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#610D17]">Bulk Option</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-zinc-900">Bulk Registration (Institutes)</h3>
              <p className="mt-1.5 text-xs text-zinc-700 leading-relaxed">
                Schools and colleges can enroll entire student batches in one single go.
              </p>

              <div className="mt-4 space-y-3 text-xs text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-[11px]">
                    A
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Excel Template:</strong>
                    <span>Enter student particulars in the standard template provided by AMP.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-[11px]">
                    B
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Provide SPOC Details:</strong>
                    <span>Share coordinator name, email, and mobile for communication.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-[11px]">
                    C
                  </span>
                  <div>
                    <strong className="text-zinc-900 block font-semibold">Email Completed Sheet:</strong>
                    <span>
                      Send details to{' '}
                      <a
                        href="mailto:nts@ampindia.org?subject=NTS%202026%20Bulk%20Registration%20Request"
                        className="font-bold text-[#610D17] underline decoration-[#610D17]/40 underline-offset-2 hover:decoration-[#610D17] hover:text-[#45090f] transition-colors"
                      >
                        nts@ampindia.org
                      </a>{' '}
                      (Call:{' '}
                      <a
                        href="tel:+918657003081"
                        className="font-bold text-[#610D17] underline decoration-[#610D17]/40 underline-offset-2 hover:decoration-[#610D17] hover:text-[#45090f] transition-colors"
                      >
                        8657003081
                      </a>
                      ).
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-200 flex flex-wrap gap-1.5 text-[11px] text-zinc-600 font-medium">
                <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">✓ Zero Paperwork</span>
                <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">✓ Batch Processing</span>
                <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">✓ Dedicated SPOC</span>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-200">
                <Button
                  href="mailto:nts@ampindia.org?subject=NTS%202026%20Bulk%20Registration%20Request"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center text-[#610D17] border-[#610D17]/40 hover:bg-[#610D17] hover:text-white"
                >
                  Email Bulk Excel Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: HALL TICKETS (PDF Page 4)
      ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-r from-zinc-50 to-white p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#610D17] text-white text-2xl font-bold shadow-md">
                🎫
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Important Milestone</span>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  Hall Tickets Release: Tuesday, 1st December 2026
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 max-w-2xl">
                  Available for all registered candidates under the <em>“My Registration”</em> tab on the{" "}
                  <Link
                    href="/AMP_World_App"
                    className="font-bold text-[#610D17] underline decoration-[#610D17]/40 underline-offset-2 hover:decoration-[#610D17] hover:text-[#4B0A12] transition-colors"
                  >
                    AMP World Mobile App
                  </Link>{" "}
                  and directly downloadable from{" "}
                  <a
                    href="https://www.ampworld.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#610D17] underline decoration-[#610D17]/40 underline-offset-2 hover:decoration-[#610D17] hover:text-[#4B0A12] transition-colors"
                  >
                    www.ampworld.in
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Button href="https://www.ampworld.in" target="_blank" rel="noopener noreferrer" variant="secondary" size="md">
                Visit AMP World Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: BENEFITS & REWARDS — SCHOLARSHIPS & CASH AWARDS (PDF Pages 4–5)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Rewards & Recognition
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Scholarships Worth ₹10 Crore+ & Cash Prizes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Substantial career-launching scholarships, cash prizes, and fee waivers provided by AMP’s premier training partners across India.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Scholarships Breakdown */}
            <div className="lg:col-span-7 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col">
              <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                <span>🎓</span>
                <span>Higher Education Coaching Scholarships</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600">
                Partner institutes offer fee waivers on their annual tuition for NEET, IIT-JEE, CLAT, UPSC, and competitive foundation batches.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-900 text-sm">Top 1,500+ Rankers</span>
                    <span className="rounded-full bg-emerald-600 text-white px-2.5 py-0.5 text-xs font-bold">
                      100% to 75% Scholarship
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-800">
                    Full or near-full tuition waiver at premier coaching academies across India.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-900 text-sm">Next 2,500+ High Performers</span>
                    <span className="rounded-full bg-blue-600 text-white px-2.5 py-0.5 text-xs font-bold">
                      75% to 50% Scholarship
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-blue-800">
                    Partial tuition assistance through AMP partner coaching institutions nationwide.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-xs text-zinc-500 space-y-1 bg-zinc-50 p-4 rounded-xl">
                <p>• Scholarships apply exclusively to annual tuition fees (residential facilities may vary).</p>
                <p>• Final selection adheres to established national admission authority screening procedures.</p>
              </div>
            </div>

            {/* Cash Prizes Table */}
            <div className="lg:col-span-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col">
              <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                <span>🏆</span>
                <span>Cash Awards (₹5 Lakh+ Total)</span>
              </h3>
              <p className="mt-1 text-xs text-zinc-500">Awarded to top rankers in each category</p>

              <div className="mt-5 space-y-2.5">
                {[
                  { rank: "1st Position Winner", prize: "₹30,000", highlight: true },
                  { rank: "2nd Position Winner", prize: "₹20,000", highlight: true },
                  { rank: "3rd Position Winner", prize: "₹10,000", highlight: true },
                  { rank: "4th to 10th Position", prize: "₹2,000 each" },
                  { rank: "11th to 50th Position", prize: "₹1,000 each" },
                  { rank: "State Toppers (in each category)", prize: "₹1,000 each" },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-xs sm:text-sm ${
                      row.highlight
                        ? "bg-[#fbf2f3] text-[#610D17] font-bold border border-[#610D17]/20"
                        : "bg-zinc-50 text-zinc-800"
                    }`}
                  >
                    <span>{row.rank}</span>
                    <span className="font-extrabold">{row.prize}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 text-center text-xs text-zinc-500">
                Awarded across School, Junior College & Undergrad categories.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 8: CERTIFICATES & INDIAZAKAT SUPPORT (PDF Page 5)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* E-Certificates of Merit */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Credentials</span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-zinc-900">
                Certificates of Merit & Participation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Official verified e-Certificates issued by AMP recognizing excellence across national and state percentiles.
              </p>

              <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-zinc-200">
                  <span className="text-[#610D17] font-bold text-base">🎖️</span>
                  <span>Special e-Certificates for <strong>Top 50 National-level Winners</strong> in each category</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-zinc-200">
                  <span className="text-blue-600 font-bold text-base">🏅</span>
                  <span>E-Certificates of Merit for <strong>Top 1%, 2%, 5%, 10%, and 20%</strong> in the nation</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-zinc-200">
                  <span className="text-emerald-600 font-bold text-base">🏆</span>
                  <span>E-Certificates for <strong>Top 10 State-level Winners</strong> and Top 1% in States</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-zinc-200">
                  <span className="text-zinc-600 font-bold text-base">📜</span>
                  <span><strong>E-Certificates of Participation</strong> to all verified registered participants</span>
                </div>
              </div>
            </div>

            {/* Academic Scholarships & IndiaZakat */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Underprivileged Aid</span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-zinc-900">
                Merit-cum-Means Support for 500 Students
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Financial assistance of <strong className="text-zinc-900">₹10,000 or more</strong> through AMP’s crowdfunding platform, <a href="https://www.indiazakat.com" target="_blank" rel="noopener noreferrer" className="text-[#610D17] underline font-bold">IndiaZakat.com</a>, for deserving students.
              </p>

              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
                <p><strong>Eligibility Requirement:</strong> The student&apos;s annual family income must be below <strong>₹2,00,000 per annum</strong>.</p>
                <p>AMP guides shortlisted students through application, verification, and disbursement.</p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-200">
                <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider block mb-2">
                  Additional AMP Career Services:
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] font-medium text-zinc-700">
                  <span className="bg-white border border-zinc-200 px-2.5 py-1 rounded-md">Employability Training (ETPs)</span>
                  <span className="bg-white border border-zinc-200 px-2.5 py-1 rounded-md">Job Fairs (AMPowerJobs.com)</span>
                  <span className="bg-white border border-zinc-200 px-2.5 py-1 rounded-md">Skill Development</span>
                  <span className="bg-white border border-zinc-200 px-2.5 py-1 rounded-md">International Scholarships</span>
                  <span className="bg-white border border-zinc-200 px-2.5 py-1 rounded-md">Internships</span>
                  <span className="bg-white border border-zinc-200 px-2.5 py-1 rounded-md">1-on-1 Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 9: SYLLABUS & PREPARATION GUIDE (PDF Pages 6–13)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Curriculum
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Syllabus & Exam Pattern
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-600">
                Aligned with NCERT NTSE for schools and national aptitude standards for colleges.
              </p>
            </div>

            <div className="inline-flex rounded-xl bg-zinc-200/80 p-1 self-start md:self-auto">
              <button
                onClick={() => setSyllabusTab("school")}
                className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  syllabusTab === "school"
                    ? "bg-white text-[#610D17] shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                School (Classes 8th, 9th, 10th)
              </button>
              <button
                onClick={() => setSyllabusTab("college")}
                className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  syllabusTab === "college"
                    ? "bg-white text-[#610D17] shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                College (Junior & Senior)
              </button>
            </div>
          </div>

          {/* School Tab Content */}
          {syllabusTab === "school" && (
            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-[#610D17]/20 bg-[#fbf2f3] p-4 text-xs sm:text-sm text-zinc-800">
                <strong>NCERT NTSE Model:</strong> Divided into <strong>MAT (Mental Ability Test)</strong> and <strong>SAT (Scholastic Aptitude Test)</strong>. Separate question papers are prepared for Class 8th, 9th, and 10th. The MAT section is common for all classes; SAT varies by grade.
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Part 1: MAT */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                    <div>
                      <span className="text-xs font-bold text-[#610D17] uppercase">Part 01</span>
                      <h3 className="text-lg font-bold text-zinc-900">Mental Ability Test (MAT)</h3>
                    </div>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-700">
                      50 Questions
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-zinc-500">
                    Common test paper across Classes 8th, 9th, and 10th evaluating core cognitive power.
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-zinc-900 text-xs font-bold uppercase tracking-wider">
                          Verbal Reasoning
                        </strong>
                        <span className="text-[11px] font-semibold text-zinc-500">25 MCQs</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-700">
                        {[
                          "Analogy",
                          "Alphabet Test",
                          "Classification",
                          "Puzzle Test",
                          "Logical Venn Diagrams",
                          "Blood Relations",
                          "Coding–Decoding",
                          "Direction Sense",
                          "Problems on Clocks",
                          "Series Completion",
                          "Mathematical Operations",
                          "Arithmetical Reasoning",
                          "Missing Character",
                        ].map((t, idx) => (
                          <span key={idx} className="bg-white border border-zinc-200 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-zinc-900 text-xs font-bold uppercase tracking-wider">
                          Non-Verbal Reasoning
                        </strong>
                        <span className="text-[11px] font-semibold text-zinc-500">25 MCQs</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-700">
                        {[
                          "Series & Analogy",
                          "Classification",
                          "Transparent Paper Folding",
                          "Dot Fixing Situation",
                          "Embedded Figures",
                          "Problems on Cubes & Dice",
                          "Water Images",
                          "Paper Cutting",
                          "Incomplete Figures",
                          "Analytical Reasoning",
                        ].map((t, idx) => (
                          <span key={idx} className="bg-white border border-zinc-200 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                    *Total 50 MCQs: 25 Verbal + 25 Non-Verbal questions.
                  </div>
                </div>

                {/* Part 2: SAT */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                    <div>
                      <span className="text-xs font-bold text-[#610D17] uppercase">Part 02</span>
                      <h3 className="text-lg font-bold text-zinc-900">Scholastic Aptitude Test (SAT)</h3>
                    </div>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-700">
                      50 Questions
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-zinc-500">
                    Grade-specific curriculum assessing standard academic subjects (10 Questions each).
                  </p>

                  <div className="mt-5 space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-zinc-900 block">1. Mathematics</strong>
                        <span className="text-[11px] text-zinc-500">Algebra, Number System, Geometry, Mensuration, Quadratic Eq.</span>
                      </div>
                      <span className="font-bold text-[#610D17] text-xs bg-white px-2 py-0.5 rounded border border-zinc-200 shrink-0 ml-2">10 Qs</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-zinc-900 block">2. Science</strong>
                        <span className="text-[11px] text-zinc-500">Motion, Atoms, Acids & Bases, Cells, Life Processes, Heredity</span>
                      </div>
                      <span className="font-bold text-[#610D17] text-xs bg-white px-2 py-0.5 rounded border border-zinc-200 shrink-0 ml-2">10 Qs</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-zinc-900 block">3. Social Science</strong>
                        <span className="text-[11px] text-zinc-500">Freedom Struggle, Constitution, Resources, Atmosphere, History</span>
                      </div>
                      <span className="font-bold text-[#610D17] text-xs bg-white px-2 py-0.5 rounded border border-zinc-200 shrink-0 ml-2">10 Qs</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-zinc-900 block">4. English</strong>
                        <span className="text-[11px] text-zinc-500">Grammar, Vocabulary, Synonyms, Comprehension, Error Spotting</span>
                      </div>
                      <span className="font-bold text-[#610D17] text-xs bg-white px-2 py-0.5 rounded border border-zinc-200 shrink-0 ml-2">10 Qs</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-zinc-900 block">5. GK & Islamic Studies / Deeniyat</strong>
                        <span className="text-[11px] text-zinc-500">Current Affairs, Everyday Science, Quran/Hadith, Islamic History</span>
                      </div>
                      <span className="font-bold text-[#610D17] text-xs bg-white px-2 py-0.5 rounded border border-zinc-200 shrink-0 ml-2">10 Qs</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                    *Total 50 MCQs: 5 subjects × 10 questions each.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* College Tab Content */}
          {syllabusTab === "college" && (
            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-xs sm:text-sm text-blue-900">
                <strong>Benchmark Standards:</strong> The NTS for College Students is designed along the lines of national entrance tests: <strong>UPSC CSAT, CAT, CUET, GRE, GMAT, GATE (Aptitude), and IT Campus Placements (TCS, Infosys, Wipro)</strong>. Each paper consists of <strong>5 sections with 20 questions each (Total: 100 MCQs)</strong>. Separate papers for Junior (11th/12th) and Senior (Degree UG).
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#610D17] uppercase">Section 01</span>
                    <span className="text-xs font-semibold bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">20 Qs</span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">Quantitative Analysis</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Arithmetic (Percentages, Profit & Loss, Ratio, Time & Work), Algebra, Progressions, Geometry, Mensuration, Permutations & Combinations, Probability, Data Sufficiency (Higher Maths for Degree).
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                    Aptitude & Analytical Mathematics
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#610D17] uppercase">Section 02</span>
                    <span className="text-xs font-semibold bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">20 Qs</span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">Data Interpretation & Reasoning</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Tables, Graphs, Charts, Caselets, Blood Relations, Coding-Decoding, Seating Arrangements, Direction Sense, Analytical and Critical Reasoning.
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                    Logical deduction & graph analysis
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#610D17] uppercase">Section 03</span>
                    <span className="text-xs font-semibold bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">20 Qs</span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">Vocabulary & Comprehension</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Synonyms, Antonyms, Idioms & Phrases, Grammar & Error Spotting, Reading Comprehension Passages, Inference-based questions, Critical Reasoning.
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                    Verbal ability & language command
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#610D17] uppercase">Section 04</span>
                    <span className="text-xs font-semibold bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">20 Qs</span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">Current Affairs</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    National & International Events (last 1–2 years), Government Schemes & Policies, Science & Tech, Sports, Awards, Ecology, International Bodies (UN, WHO, IMF).
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                    National & global awareness
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs col-span-1 md:col-span-2 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#610D17] uppercase">Section 05</span>
                    <span className="text-xs font-semibold bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">20 Qs</span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">GK & Islamic Studies / Deeniyat</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Indian & World History, Polity, Economy, Geography, Famous Personalities, Fundamentals of Islam (Quran, Hadith, Seerah), Islamic contributions to civilization and sciences, Ethics, Morality, and Social Values.
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
                    Foundational heritage, ethics, and world culture
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          SECTION 10: RECOMMENDED PREPARATION BOOKS (PDF Pages 9–10 & 13)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Study Toolkit
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Recommended Reference Books
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-600">
                Curated by subject matter experts to support structured preparation.
              </p>
            </div>

            <div className="inline-flex rounded-xl bg-zinc-100 p-1">
              <button
                onClick={() => setBooksTab("school")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  booksTab === "school"
                    ? "bg-white text-[#610D17] shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                School Books
              </button>
              <button
                onClick={() => setBooksTab("college")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  booksTab === "college"
                    ? "bg-white text-[#610D17] shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                College Books
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booksTab === "school" ? (
              <>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Mental Ability</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Reasoning & Problem Solving</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• A Modern Approach to Verbal & Non-Verbal Reasoning – R.S. Aggarwal</li>
                    <li>• NTSE Mental Ability Test Workbook – McGraw Hill</li>
                    <li>• Objective Reasoning for Competitive Exams – Arihant</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Mathematics</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">NCERT & Foundation Guides</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• NCERT Mathematics Textbooks (Class 8th, 9th & 10th)</li>
                    <li>• Mathematics for Class 9 & 10 – R.D. Sharma</li>
                    <li>• Comprehensive Mathematics for NTSE – Tata McGraw Hill</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Science</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Physics, Chemistry, Biology</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• NCERT Science Textbooks (Class 8th, 9th & 10th)</li>
                    <li>• Foundation Science – Lakhmir Singh & Manjit Kaur</li>
                    <li>• Concepts of Physics (Vol I & II) – H.C. Verma</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Social Science</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">History, Civics, Geography</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• NCERT Social Science Textbooks (Class 8th, 9th & 10th)</li>
                    <li>• Guide to NTSE Social Science – Arihant</li>
                    <li>• Comprehensive Social Science for NTSE – McGraw Hill</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">English</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Grammar & Vocabulary</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• High School English Grammar – Wren & Martin</li>
                    <li>• Word Power Made Easy – Norman Lewis</li>
                    <li>• Objective English for Competitive Exams – S.P. Bakshi</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">GK & Current Affairs</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Yearbooks & Periodicals</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• Manorama Yearbook (Latest Edition)</li>
                    <li>• Lucent&apos;s General Knowledge</li>
                    <li>• The Hindu / Indian Express Daily</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Quantitative Analysis</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Aptitude & Speed Math</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• Quantitative Aptitude – R.S. Aggarwal</li>
                    <li>• Fast Track Objective Arithmetic – Rajesh Verma</li>
                    <li>• Quantitative Aptitude for CAT – Arun Sharma</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Logical Reasoning & DI</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Data Interpretation & Logic</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• Modern Approach to Logical Reasoning – R.S. Aggarwal</li>
                    <li>• LR & DI for CAT – Nishit Sinha (Pearson)</li>
                    <li>• Analytical Reasoning – M.K. Pandey</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Verbal Ability</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Comprehension & Vocabulary</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• Word Power Made Easy – Norman Lewis</li>
                    <li>• Objective General English – S.P. Bakshi</li>
                    <li>• Editorials from The Hindu & Indian Express</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">Current Affairs</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Magazines & Updates</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• Manorama Yearbook & Pratiyogita Darpan</li>
                    <li>• Monthly Current Affairs PDFs (Vision IAS / Drishti IAS)</li>
                    <li>• Daily National & Global News Updates</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 col-span-1 md:col-span-2 flex flex-col">
                  <span className="text-xs font-bold text-[#610D17] uppercase">General Knowledge & Deeniyat</span>
                  <h3 className="mt-1 font-bold text-zinc-900 text-sm">Ethics, Seerah & Society</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-zinc-600">
                    <li>• Lucent&apos;s General Knowledge & Arihant GK 2026</li>
                    <li>• The Sealed Nectar (Ar-Raheeq Al-Makhtum) – Biography of Prophet Muhammad (PBUH)</li>
                    <li>• Selected Ahadith from Riyadh-us-Saliheen (Ethics & Social Values)</li>
                    <li>• Islamic Studies for Competitive Exams – Maulana Wahiduddin Khan</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 11: EXAM GUIDELINES (PDF Page 14)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Advisory
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Exam Guidelines & Code of Conduct
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Essential instructions every candidate, parent, and institutional coordinator must follow.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-700">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                  1
                </span>
                <span>Students may register individually or through their schools/colleges.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                  2
                </span>
                <span>All announcements are shared on <strong>ampworld.in</strong>, <strong>ampindia.org</strong>, and the mobile app.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                  3
                </span>
                <span>Stay updated via registered email, WhatsApp announcements, and SMS alerts.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                  4
                </span>
                <span><strong>Strict single-attempt policy:</strong> No extra attempts will be permitted under any circumstances.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                  5
                </span>
                <span><strong>No Negative Marking:</strong> Every attempt has value with zero score deduction.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                  6
                </span>
                <span>All decisions made by the AMP NTS Committee regarding evaluation and awards are final.</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">
                For complete rules, please consult the official guidelines document.
              </span>
              <Button
                href="https://drive.google.com/drive/folders/1qzirip8K-OzIRuexnOa7XXH2CAo_B0At"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              >
                Read Full Guidelines Document →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 12: DAILY LIVE HELPLINE & PHONE DESK (PDF Page 14)
          BALANCED SIDES - ZERO EMPTY SPACE
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Student Support Desk
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Live Daily Support & Category Helplines
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Direct assistance channels for students, parents, and coordinators throughout the registration period.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Live Google Meet Session */}
            <div className="lg:col-span-6 rounded-2xl border border-zinc-200 bg-gradient-to-br from-[#fbf2f3] to-white p-6 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Live Video Desk
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Daily Interactive Meet
                </span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-zinc-900">
                Daily Live Helpline Meeting
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Special daily live sessions on AMP NTS 2026 for students, parents, and teachers to resolve all queries directly with the central advisory team.
              </p>

              {/* Schedule Details Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-zinc-200 space-y-1.5 text-xs text-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-600">🗓️ Meeting Days:</span>
                  <span className="font-bold text-zinc-900">Monday to Saturday</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-600">⏰ Session Time:</span>
                  <span className="font-bold text-[#610D17]">5:00 PM – 6:00 PM (IST)</span>
                </div>
              </div>

              {/* Topics Covered */}
              <div className="mt-4">
                <span className="text-[11px] font-bold text-zinc-700 uppercase tracking-wider block mb-2">
                  Key Topics Addressed Daily:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-700 font-medium">
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 flex items-center gap-1.5">
                    <span className="text-emerald-600">✓</span>
                    <span>App & Portal Registration</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 flex items-center gap-1.5">
                    <span className="text-emerald-600">✓</span>
                    <span>Eligibility & Age Matrix</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 flex items-center gap-1.5">
                    <span className="text-emerald-600">✓</span>
                    <span>Syllabus & Test Pattern</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 flex items-center gap-1.5">
                    <span className="text-emerald-600">✓</span>
                    <span>₹10 Cr+ Scholarships</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#610D17]/15">
                <Button
                  href="https://www.tinyurl.com/HelplineAMPNTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Join Live Meeting (5 PM IST) →
                </Button>
              </div>
            </div>

            {/* Category Helplines */}
            <div className="lg:col-span-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Direct Support</span>
                <span className="text-xs font-semibold text-zinc-500 bg-white px-2.5 py-0.5 rounded-full border border-zinc-200">
                  11:00 AM – 7:00 PM IST
                </span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-zinc-900">Category Phone Helplines</h3>
              <p className="mt-1 text-xs text-zinc-500">
                *Please WhatsApp your inquiry first before calling for immediate resolution.
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="https://wa.me/918657506907?text=Hello%2C%20I%20have%20a%20query%20regarding%20AMP%20NTS%202026%20School%20Category."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-emerald-500 hover:shadow-xs transition-all"
                >
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block">School Students (8th, IX & X)</span>
                    <span className="text-xs text-zinc-500 font-medium">Helpline: +91 8657506907</span>
                  </div>
                  <span className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-1.5 text-xs font-bold border border-emerald-200">
                    WhatsApp Chat →
                  </span>
                </a>

                <a
                  href="https://wa.me/918657506909?text=Hello%2C%20I%20have%20a%20query%20regarding%20AMP%20NTS%202026%20Junior%20College%20Category."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-emerald-500 hover:shadow-xs transition-all"
                >
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block">Junior Colleges (XI & XII)</span>
                    <span className="text-xs text-zinc-500 font-medium">Helpline: +91 8657506909</span>
                  </div>
                  <span className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-1.5 text-xs font-bold border border-emerald-200">
                    WhatsApp Chat →
                  </span>
                </a>

                <a
                  href="https://wa.me/918657003085?text=Hello%2C%20I%20have%20a%20query%20regarding%20AMP%20NTS%202026%20Senior%20College%20Category."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-emerald-500 hover:shadow-xs transition-all"
                >
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block">Senior / Degree College (UG)</span>
                    <span className="text-xs text-zinc-500 font-medium">Helpline: +91 8657003085</span>
                  </div>
                  <span className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-1.5 text-xs font-bold border border-emerald-200">
                    WhatsApp Chat →
                  </span>
                </a>
              </div>

              <div className="mt-4 pt-3.5 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
                <span>Official Email Inquiries:</span>
                <a href="mailto:nts@ampindia.org" className="text-[#610D17] font-bold underline">
                  nts@ampindia.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 13: PARTNERSHIPS & ECOSYSTEM (PDF Pages 15–17)
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Ecosystem
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Partnership & Volunteer Opportunities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Join hands as an institutional partner, host exam centre, mobilization NGO, or exam observer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Institution Partner */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
              <span className="text-2xl">🏫</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">Institution Partner</h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                Register your school or college for NTS 2026. Empower your campus with prestigious awards and MoU.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Formal MoU by AMP</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Best Performance Award</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Institutional Certificates</span>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-zinc-100">
                <Button href="/institution-registration" variant="outline" size="sm" className="w-full justify-center">
                  Partner Details →
                </Button>
              </div>
            </div>

            {/* Become an Exam Centre */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
              <span className="text-2xl">🏛️</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">Become an Exam Centre</h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                Host the physical pen-and-paper exam for your block or taluka. Serve as regional cluster hub.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Host NTS in your campus</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Regional talent leadership</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Cluster hub credentialing</span>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-zinc-100">
                <Button
                  href="/Become_An_Exam_Center"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Centre Form →
                </Button>
              </div>
            </div>

            {/* Mobilization Partner */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
              <span className="text-2xl">🤝</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">Mobilization Partner</h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                For NGOs and civil society organisations to lead local outreach and assist students with registrations.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Community grassroots impact</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Connect schools & ulema</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Nominate exam observers</span>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-zinc-100">
                <Button
                  href="https://www.tinyurl.com/AMPNGOConnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  NGO Connect →
                </Button>
              </div>
            </div>

            {/* Volunteers & Observers */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col">
              <span className="text-2xl">🛡️</span>
              <h3 className="mt-2 text-lg font-bold text-zinc-900">Volunteers & Observers</h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                Serve as grassroots NTS Ambassadors or official Exam Observers ensuring standard test integrity.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-zinc-600">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Promote in your locality</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Oversee exam centre fairness</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>AMP leadership network</span>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    href="https://www.tinyurl.com/AMPNTSVolunteer"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-[11px] px-2"
                  >
                    Volunteer →
                  </Button>
                  <Button
                    href="https://www.tinyurl.com/AMP-Observer"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-[11px] px-2"
                  >
                    Observer →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 14: BOTTOM CALL TO ACTION
      ========================================================= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
            Take the First Step
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Ready to Benchmark Your Knowledge?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Join over 2,00,000+ ambitious students across 600+ districts taking the definitive national test for scholarships and academic recognition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href="/student-registration" variant="primary" size="md">
              Register as Student
            </Button>
            <Button href="/institution-registration" variant="outline" size="md">
              Register Institution
            </Button>
            <Button href="/Contact" variant="outline" size="md">
              Contact Student Helpdesk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
