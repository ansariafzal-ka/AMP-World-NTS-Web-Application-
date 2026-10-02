"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/common/Button";

export default function StudentRegistrationGuidePage() {
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
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-zinc-200 uppercase backdrop-blur-sm mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span>OFFICIAL REGISTRATION MANUAL · NTS 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                REGISTRATION DETAILS
              </h1>

              <p className="mt-3 text-base sm:text-lg text-zinc-200 max-w-3xl leading-relaxed font-normal">
                Comprehensive step-by-step instructions for Individual Web Registrations, AMP World Mobile App, and Institutional Bulk Registrations for AMP NTS 2026.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  href="/student-registration"
                  variant="secondary"
                  size="md"
                  className="font-bold shadow-xs"
                >
                  Register Now →
                </Button>
                <Button
                  href="/portal/institution/bulk-student-registration"
                  variant="frosted"
                  size="md"
                  className="font-bold"
                >
                  Bulk Registration
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. WAYS TO REGISTER & HALL TICKETS (TWO COLUMNS)
        ========================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Registration Channels & Webpage Instructions */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 lg:p-9 shadow-xs flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Channel Overview */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#610D17] tracking-tight">
                      The Registration will be done through:
                    </h2>
                    <ol className="mt-4 space-y-3.5 text-sm sm:text-base text-zinc-800">
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <strong className="font-semibold text-zinc-900 block">
                            AMP World Website:
                          </strong>
                          <Link
                            href="/student-registration"
                            className="font-bold text-[#610D17] underline hover:text-[#4B0A12] block mt-0.5"
                          >
                            https://ampworld.in/student-registration
                          </Link>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs mt-0.5">
                          2
                        </span>
                        <div className="mt-0.5">
                          <strong className="font-semibold text-zinc-900">Bulk Registration</strong> through your School / College
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs mt-0.5">
                          3
                        </span>
                        <div className="mt-0.5">
                          <strong className="font-semibold text-zinc-900">AMP World Mobile App</strong>
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* How to Register through Webpage */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-lg sm:text-xl font-bold text-[#610D17]">
                      How to Register through Webpage:
                    </h3>
                    <ul className="mt-3.5 space-y-2.5 text-sm sm:text-base text-zinc-700">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-1">•</span>
                        <span>
                          Visit{" "}
                          <Link
                            href="/student-registration"
                            className="font-bold text-[#610D17] underline hover:text-[#4B0A12]"
                          >
                            www.ampworld.in
                          </Link>
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-1">•</span>
                        <span>Register for NTS 2026, by filling the Student Registration form</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-1">•</span>
                        <span>Follow all the instructions written on the Website</span>
                      </li>
                    </ul>

                    <div className="mt-5">
                      <Button
                        href="/student-registration"
                        variant="primary"
                        size="md"
                      >
                        <span>Register Now</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hall Tickets & App Instructions */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8 lg:p-9 shadow-xs flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Hall Tickets */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#610D17] tracking-tight">
                      Hall Tickets
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed">
                      After the successful registration, the hall tickets will be available to every student on or after the given date.
                    </p>
                    <ol className="mt-4 space-y-3 text-sm sm:text-base text-zinc-800">
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                          1
                        </span>
                        <div>
                          <strong className="font-semibold text-zinc-900">AMP World Webpage:</strong> Hall Tickets of all the Students will be available on{" "}
                          <a
                            href="https://ampworld.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#610D17] underline hover:text-[#4B0A12]"
                          >
                            www.ampworld.in
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#610D17] text-white font-bold text-xs">
                          2
                        </span>
                        <div>
                          <strong className="font-semibold text-zinc-900">AMP World Mobile App:</strong> Hall Tickets of all the Students will be available under the <em>My Registration Tab</em> of AMP World Mobile App.
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* How to Register through App */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-lg sm:text-xl font-bold text-[#610D17]">
                      How to Register through App:
                    </h3>
                    <ul className="mt-3.5 space-y-2.5 text-sm sm:text-base text-zinc-700">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-1">•</span>
                        <span>
                          Download the AMP World App from Google Play store at:{" "}
                          <a
                            href="https://www.tinyurl.com/AMPWorldApp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#1A73E8] underline hover:text-[#1557B0] break-all"
                          >
                            www.tinyurl.com/AMPWorldApp
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-1">•</span>
                        <span>Sign-in to the app with your personal details</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#610D17] font-bold mt-1">•</span>
                        <span>Register for NTS 2026, by filling the form at Student&apos;s Registration Tab</span>
                      </li>
                    </ul>

                    <div className="mt-5">
                      <Button
                        href="/AMP_World_App"
                        variant="primary"
                        size="md"
                      >
                        <span>Download AMP World App</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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
            3. BULK REGISTRATION (ONLY FOR SCHOOLS AND COLLEGES)
        ========================================================= */}
        <section id="bulk-registration" className="py-14 sm:py-20 bg-zinc-50 border-y border-zinc-200 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center mx-auto mb-10 sm:mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3.5 py-1 text-xs font-bold text-[#610D17] uppercase tracking-wider mb-2">
                Institutions &amp; Group Coordinators
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] tracking-tight">
                Bulk Registration (Only for Schools and Colleges)
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                Schools and Colleges can register their students at once by using the Bulk Registration Facility provided by AMP NTS. (Please follow the steps given below)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Step A */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#610D17] text-white font-bold text-sm mb-4">
                    A
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug">
                    Fill Student Details in the Excel Template
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#610D17] font-bold mt-0.5">•</span>
                      <span>Use the Excel sheet Template provided by AMP NTS Team to enter the required student details.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#610D17] font-bold mt-0.5">•</span>
                      <span>Ensure all fields in the template are accurately filled with complete and correct information for each student.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <Button
                    href="/portal/institution/bulk-student-registration"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Bulk Registration Portal →
                  </Button>
                </div>
              </div>

              {/* Step B */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#610D17] text-white font-bold text-sm mb-4">
                    B
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug">
                    Provide SPOC Details
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#610D17] font-bold mt-0.5">•</span>
                      <span>The registrations will be done on behalf of the SPOC</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#610D17] font-bold mt-0.5">•</span>
                      <span>The designated SPOC (Single Point of Contact) will be responsible for communication between Students and AMP NTS Team.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#610D17] font-bold mt-0.5">•</span>
                      <span>Share details of SPOC to receive updates and important information (Name, Email ID, Phone Number).</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  Direct communication link for all batch verifications.
                </div>
              </div>

              {/* Step C */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#610D17] text-white font-bold text-sm mb-4">
                    C
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug">
                    Send the Complete Information
                  </h3>
                  <ul className="mt-4 space-y-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#610D17] font-bold mt-0.5">•</span>
                      <span>
                        Email the completed registration details to{" "}
                        <a
                          href="mailto:nts@ampindia.org?subject=NTS%202026%20Bulk%20Registration%20Submission"
                          className="font-bold text-[#610D17] underline hover:text-[#4B0A12]"
                        >
                          nts@ampindia.org
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#610D17] font-bold mt-0.5">•</span>
                      <span>
                        For assistance, you may also contact us at{" "}
                        <a
                          href="tel:+918657003085"
                          className="font-bold text-[#610D17] underline hover:text-[#4B0A12]"
                        >
                          +91 8657003085
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <Button
                    href="mailto:nts@ampindia.org?subject=NTS%202026%20Bulk%20Registration%20Submission"
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Email Registration File
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            5. BOTTOM CTA BANNER (HELPDESK & QUICK START)
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-[#420B13] via-[#5E0E1C] to-[#7E1222] text-white p-6 sm:p-8 lg:p-10 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="inline-block text-[11px] font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    SUPPORT &amp; QUERY RESOLUTION
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    Need Assistance with Registration?
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                    Our academic coordinators and state team leads are available to assist you Monday through Saturday, 11:00 AM to 7:00 PM (IST).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <Button
                    href="/student-registration"
                    variant="secondary"
                    size="lg"
                    className="whitespace-nowrap font-bold"
                  >
                    Start Registration
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
