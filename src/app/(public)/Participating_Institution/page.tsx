"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/common/Button";

export default function ParticipatingInstitutionPage() {
  const benefits = [
    {
      title: "Memorandum of Understanding",
      badge: "Institutional Partnership",
      description:
        "Upon registration and verification, each Institution will get MoU by AMP for National Talent Search 2026.",
      icon: (
        <svg className="w-6 h-6 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      highlight: false,
    },
    {
      title: "Best Performance Award",
      badge: "Top 100 Schools / Colleges",
      description:
        "Certificate of Excellence will be given to 100 Top-performing Schools/ Colleges/ Institutes from among the institutions that enrol more than 100 Students for the competition.",
      icon: (
        <svg className="w-6 h-6 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      highlight: true,
    },
    {
      title: "Best Participation Award",
      badge: "100+ Enrolments",
      description:
        "Certificate of Appreciation will be presented to all the Schools/ Colleges/ Institutes that enrol more than 100 Students for the competition.",
      icon: (
        <svg className="w-6 h-6 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      highlight: false,
    },
    {
      title: "Appreciation Award",
      badge: "20+ Enrolments",
      description:
        "Certificate of Participation will be presented to all the Schools / Colleges / Institutes that enrol more than 20 Students for the competition.",
      icon: (
        <svg className="w-6 h-6 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            1. PAGE HERO HEADER (STANDARDIZED MAROON GRADIENT)
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-12 sm:py-16 lg:py-20 border-b border-[#B81E34]/30">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Institution Partner
              </h1>

              <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                Institutions that register for NTS 2026 will receive regular updates through{" "}
                <strong className="text-white font-semibold">AMP WhatsApp groups</strong> and{" "}
                <strong className="text-white font-semibold">AMP World App alerts</strong> so that your students are well prepared in advance. Once registered, your institution will be added to the{" "}
                <strong className="text-white font-semibold">NTS 2026 Institution list</strong> to help students select the correct spelling of your institution and ensure they are accurately mapped. This inclusion also supports proper{" "}
                <strong className="text-white font-semibold">recognition and awarding of your institution</strong> during the event.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  href="/institution-registration"
                  variant="secondary"
                  size="md"
                  className="font-bold shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  <span>Register Institution</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
                <Button
                  href="/AMP_World_App"
                  variant="frosted"
                  size="md"
                  className="font-bold whitespace-nowrap"
                >
                  Download AMP World App →
                </Button>
                <Button
                  href="/portal/institution/bulk-student-registration"
                  variant="frosted"
                  size="md"
                  className="font-bold whitespace-nowrap"
                >
                  Bulk Student Registration
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. REGISTRATION STEPS & ROLES / RESPONSIBILITIES
        ========================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

              {/* Left Column: Register your Institutions */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 lg:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17] uppercase tracking-wider mb-3">
                    Step-by-Step Onboarding
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#610D17] tracking-tight">
                    Register your Institutions
                  </h2>

                  <ul className="mt-6 space-y-5 text-sm sm:text-base text-zinc-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#610D17] font-bold text-lg leading-none mt-1">•</span>
                      <span>
                        Download the{" "}
                        <Link
                          href="/AMP_World_App"
                          className="font-semibold text-[#610D17] underline hover:text-[#7E1222] transition-colors"
                        >
                          AMP World Mobile App
                        </Link>{" "}
                        (available on the Google Play Store) or Visit{" "}
                        <a
                          href="https://www.ampworld.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#610D17] underline hover:text-[#7E1222] transition-colors"
                        >
                          www.ampworld.in
                        </a>
                        .
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-[#610D17] font-bold text-lg leading-none mt-1">•</span>
                      <span>Sign up and register</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-[#610D17] font-bold text-lg leading-none mt-1">•</span>
                      <span>
                        Log in with your personal details and complete the registration form using the{" "}
                        <strong className="text-zinc-900 font-semibold">Institution Registration tab</strong> in the app.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-200/80 text-xs text-zinc-500">
                  Available on Google Play Store
                </div>
              </div>

              {/* Right Column: Roles and Responsibilities */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 lg:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold text-[#610D17] uppercase tracking-wider mb-3">
                    Institutional Mandate
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#610D17] tracking-tight">
                    Roles and Responsibilities
                  </h2>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base text-zinc-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#610D17] font-bold text-lg leading-none mt-1">•</span>
                      <span>
                        Institutions should strongly promote the NTS competition actively and encourage maximum student participation.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-[#610D17] font-bold text-lg leading-none mt-1">•</span>
                      <span>
                        Institutions must register through the AMP World App and ensure their name is listed correctly to enable proper student mapping.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-[#610D17] font-bold text-lg leading-none mt-1">•</span>
                      <span>
                        Institutions are responsible for supporting students with the exam process, including understanding the mode, syllabus, and registration steps and ensuring accurate mapping via the official institution list.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-200/80 text-xs text-zinc-500">
                  Direct partnership for transparent institutional student tracking.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            3. BENEFITS TO INSTITUTION
        ========================================================= */}
        <section className="py-14 sm:py-20 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3.5 py-1 text-xs font-bold text-[#610D17] uppercase tracking-wider mb-2">
                Recognition &amp; Rewards
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] tracking-tight">
                Benefits to Institution
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                By partnering with AMP for the National Talent Search 2026, institutions gain national visibility, MoUs, and prestigious institutional awards based on student engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                    benefit.highlight
                      ? "bg-white border-[#B81E34]/40 shadow-sm ring-1 ring-[#B81E34]/20"
                      : "bg-white border-zinc-200 shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#610D17]/10 flex items-center justify-center shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-700">
                        {benefit.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-[#610D17]">
                    <span>Official NTS 2026 Award Category</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. BOTTOM CTA BANNER (HELPDESK & QUICK START)
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-white border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-[#420B13] via-[#5E0E1C] to-[#7E1222] text-white p-6 sm:p-8 lg:p-10 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="inline-block text-[11px] font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    SUPPORT &amp; INSTITUTION DESK
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    Need Assistance with Institution Registration?
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                    Connect with the AMP NTS academic coordination desk via email at{" "}
                    <a
                      href="mailto:nts@ampindia.org"
                      className="underline font-bold text-white hover:text-amber-200"
                    >
                      nts@ampindia.org
                    </a>{" "}
                    or call our helpline at{" "}
                    <a
                      href="tel:+918657003085"
                      className="underline font-bold text-white hover:text-amber-200"
                    >
                      +91 8657003085
                    </a>
                    .
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <Button
                    href="/portal/institution/bulk-student-registration"
                    variant="secondary"
                    size="lg"
                    className="whitespace-nowrap font-bold"
                  >
                    Bulk Student Registration
                  </Button>

                  <Button
                    href="/Contact"
                    variant="frosted"
                    size="lg"
                    className="whitespace-nowrap"
                  >
                    Contact Helpline
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
