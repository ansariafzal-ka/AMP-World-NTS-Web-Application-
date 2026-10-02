"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/common/Button";

export default function BecomeAnExamCentrePage() {
  const heroStats = [
    {
      value: "1,500+",
      label: "TOTAL EXAM CENTRES",
      desc: "Nationwide exam centres hosting offline NTS candidates",
      featured: true,
    },
    {
      value: "400+",
      label: "DISTRICT REACH",
      desc: "Districts covered across all Indian States & UTs",
      featured: false,
    },
    {
      value: "20,000+",
      label: "INSTITUTIONS",
      desc: "Educational institutions engaged in the talent movement",
      featured: false,
    },
    {
      value: "₹10 Cr+",
      label: "SCHOLARSHIPS",
      desc: "Total scholarships & awards for participating students",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            1. PAGE HERO HEADER (STANDARDIZED MAROON GRADIENT)
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
                <span>INSTITUTIONAL PARTNERSHIP · NTS 2026</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
                Become an Exam Centre
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
                Partner with AMP to host the National Talent Search 2026 in your Block or Taluka. Empower your students, foster academic excellence, and position your institution as a premier regional talent hub.
              </p>
            </div>

            {/* 4 Bottom Milestone / Metric Cards */}
            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {heroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center ${
                    stat.featured
                      ? "bg-white shadow-md"
                      : "border border-white/10 bg-white/[0.08] backdrop-blur-xs"
                  }`}
                >
                  <div>
                    <span
                      className={`text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight block ${
                        stat.featured ? "text-zinc-900" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </span>
                    <p
                      className={`mt-2 text-xs sm:text-sm leading-snug font-medium max-w-[220px] mx-auto ${
                        stat.featured ? "text-zinc-600" : "text-zinc-200"
                      }`}
                    >
                      {stat.desc}
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-center gap-2 pt-2.5 border-t ${
                      stat.featured ? "border-zinc-100" : "border-white/10"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                        stat.featured ? "bg-[#610D17]" : "bg-red-400"
                      }`}
                    />
                    <span
                      className={`text-[11px] sm:text-xs font-semibold uppercase tracking-wider ${
                        stat.featured ? "text-zinc-500" : "text-zinc-300"
                      }`}
                    >
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            2. BECOME EXAM CENTRE (CORE DETAILS, ROLES & BENEFITS)
        ========================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3.5 py-1 text-xs font-bold text-[#610D17] uppercase tracking-wider mb-2">
                Operational Guidelines &amp; Directives
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#610D17] tracking-tight">
                Become Exam Centre
              </h2>
              <p className="mt-3 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                Join hands with us as an Exam Centre for your block/ Taluka and benefit your Institution as well as Students.
              </p>
              <p className="mt-1 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Read Complete Details related to Roles, Responsibilities and Benefits of becoming Exam Centre at{" "}
                <a
                  href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A73E8] hover:underline font-semibold"
                >
                  www.tinyurl.com/NTSExamCenter
                </a>
              </p>
            </div>

            {/* Two-Column Grid */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Left Column Card */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Registration Process */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#610D17]">
                      Registration Process
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      Register with us as an Exam Centre for your block/ taluka and benefit your Institution as well as Students. The Exam Centre will assign an Observer and a Single Point of Contact (SPOC) who will communicate with the AMP NTS Team.
                    </p>
                    <p className="mt-3 text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                      Please provide the required Exam Centre information in the Google Form at the following link:
                    </p>
                    <div className="mt-5">
                      <Button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSduA3LlbIJsvfUCsfJeocHLifmrju864gwHhdxEZ76LB1b-yA/viewform?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="md"
                      >
                        <span>AMP NTS Exam Centre Form</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Button>
                    </div>
                  </div>

                  {/* Roles of the Exam Centre Responsibilities */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#610D17]">
                      Roles of the Exam Centre Responsibilities
                    </h3>
                    <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-zinc-700">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Promote NTS 2026 in your district/city and maximize student participation from your area</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Encourage nearby schools/colleges to participate</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Assist students with online registrations</span>
                      </li>
                    </ul>
                  </div>

                  {/* Responsibilities of the Exam Centre */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#610D17]">
                      Responsibilities of the Exam Centre
                    </h3>
                    <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-zinc-700">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Provide Single Point of Contact (SPOC) and Observers</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Provide sufficient invigilators to ensure a fair exam</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Venue Setup with proper seating and exam decorum</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Minimum capacity: 100 students</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column Card */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Exam Materials */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#610D17]">
                      Exam Materials
                    </h3>
                    <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-zinc-700">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Based on student registrations, the centre is to print Question Papers</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Students will keep the question papers</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Soft copies of the Question Papers will be shared well in advance for Exam Centres to print locally. Hard copies of OMR sheets will be provided by AMP.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>Collect all OMRs and courier them to AMP office address as below, as soon as the exam is over.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Exam Centre Benefits */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#610D17]">
                      Exam Centre Benefits.
                    </h3>
                    <ul className="mt-3.5 space-y-3.5 text-xs sm:text-sm text-zinc-700">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>
                          <strong className="text-zinc-900 font-bold">Memorandum of Understanding:</strong> Upon registration and verification, each Institution will get MoU by AMP for National Talent Search 2026
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>
                          <strong className="text-zinc-900 font-bold">Best Performance Award:</strong> Certificate of Excellence will be given to 100 Top-performing Schools/ Colleges/ Institutes from among the institutions that enrol more than 100 Students for the competition
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>
                          <strong className="text-zinc-900 font-bold">Best Participation Award:</strong> Certificate of Appreciation will be presented to all the Schools/ Colleges/ Institutes that enrol more than 100 Students for the competition.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-0.5">•</span>
                        <span>
                          <strong className="text-zinc-900 font-bold">Appreciation Award:</strong> Certificate of Participation will be present to all the Schools / Colleges / Institutes that enrol more than 20 Students for the competition.
                        </span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Button
                        href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="md"
                      >
                        <span>NTS Exam Centre Documents</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. CTA BANNER (OFFICIAL DOCUMENTS & REGISTRATION)
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-[#420B13] via-[#5E0E1C] to-[#7E1222] text-white p-6 sm:p-8 lg:p-10 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="inline-block text-[11px] font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    NO AFFILIATION FEES REQUIRED
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    Ready to Partner with AMP NTS 2026?
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-zinc-200 leading-relaxed">
                    Join over 1,500+ exam centres nationwide. Complete the simple registration form to receive your formal Memorandum of Understanding (MoU) and guidelines.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <Button
                    href="/exam-centre-registration"
                    variant="secondary"
                    size="lg"
                    className="whitespace-nowrap font-bold"
                  >
                    Register as Exam Centre
                  </Button>

                  <Button
                    href="https://drive.google.com/drive/folders/181G2tsjfI4HCQXkcGi-J9uZYTAunB0iJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="frosted"
                    size="lg"
                    className="whitespace-nowrap"
                  >
                    View Official Documents
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
