"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/common/Button";

export default function BecomeAnExamCenterPage() {
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

  const benefits = [
    {
      title: "Authorized MoU & Credentialing",
      badge: "Official Agreement",
      description:
        "Receive a formal Memorandum of Understanding (MoU) with the Association of Muslim Professionals, establishing your campus as an accredited regional exam authority.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Inclusion in National Directory",
      badge: "Brand Exposure",
      description:
        "Your institution is spotlighted in the official AMP National Talent Search Directory, viewed by tens of thousands of educators, parents, and community leaders nationwide.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Institutional Awards & Trophies",
      badge: "Felicitation",
      description:
        "Qualify for prestigious institutional honors, including Best Performance Award (for producing top rankers) and Best Participation Award (for hosting 100+ registered candidates).",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Certificates for Coordinators",
      badge: "Recognition",
      description:
        "Principals, Centre Superintendents, and Teacher Coordinators receive official national Certificates of Appreciation acknowledging their leadership in youth development.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
  ];

  const responsibilities = [
    {
      id: "01",
      badge: "Venue Hosting",
      title: "Host the NTS Offline Exam",
      description:
        "Provide your institution's classrooms, desks, and examination halls to conduct a disciplined, secure, and seamless pen-and-paper examination on test day.",
    },
    {
      id: "02",
      badge: "Campus Mobilization",
      title: "Promote NTS in Your Institution",
      description:
        "Display NTS 2026 posters, broadcast announcements during assemblies, and encourage your high-potential students across classes 8th to Degree levels to participate.",
    },
    {
      id: "03",
      badge: "Cluster Outreach",
      title: "Connect Nearby Schools & Colleges",
      description:
        "Act as an educational cluster hub for your block or taluka by inviting neighboring schools, junior colleges, and institutions to take the exam at your centre.",
    },
    {
      id: "04",
      badge: "Student Guidance",
      title: "Support Candidate Registrations",
      description:
        "Set up an internal assistance desk to help candidates submit their entries, verify category eligibility, and understand the examination syllabus and structure.",
    },
  ];

  const requirements = [
    {
      title: "Seating Capacity",
      detail: "Minimum 50 to 100+ student seating capacity with standardized desk spacing for fair testing.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Student Amenities",
      detail: "Hygienic drinking water facilities, clean separate washrooms, and well-lit, properly ventilated rooms.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Centre SPOC & Faculty",
      detail: "Appoint one Single Point of Contact (SPOC) and competent faculty members to serve as room invigilators.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Secure Material Storage",
      detail: "Lockable, safe cupboard or confidential room for question papers and OMR sheets upon physical delivery.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Submit Online Application",
      desc: "Fill in your institution details, estimated seating capacity, and SPOC contact particulars via the official NTS portal.",
    },
    {
      step: "02",
      title: "Verification & MoU Issuance",
      desc: "The AMP Central Team reviews your campus profile and issues a formal digital Memorandum of Understanding (MoU).",
    },
    {
      step: "03",
      title: "Conduct Exam & Dispatch Answer Sheets",
      desc: "Administer the offline examination smoothly alongside the appointed AMP observer and securely dispatch sealed OMR sheets.",
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
            2. INSTITUTIONAL BENEFITS SECTION
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Institutional Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2 tracking-tight">
                Why Partner as an Exam Centre?
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 font-medium">
                Hosting NTS 2026 brings formal credentialing, national recognition, and prestigious awards to your institution and leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs hover:-translate-y-1 hover:border-[#610D17]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block text-[11px] font-bold text-[#610D17] bg-[#FBF2F3] px-2.5 py-1 rounded-md">
                        {item.badge}
                      </span>
                      <div className="h-10 w-10 rounded-xl bg-[#FBF2F3] text-[#610D17] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. ROLES & RESPONSIBILITIES SECTION
        ========================================================= */}
        <section id="responsibilities" className="py-14 sm:py-16 md:py-20 bg-zinc-50 border-y border-zinc-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Core Responsibilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2 tracking-tight">
                Roles & Responsibilities of an Exam Centre
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 font-medium">
                As an authorized centre, your institution takes local leadership in establishing an accessible, inspiring, and disciplined testing environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {responsibilities.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs hover:-translate-y-1 hover:border-[#610D17]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-[#610D17] bg-[#FBF2F3] px-2.5 py-1 rounded-md">
                        STAGE {item.id}
                      </span>
                      <span className="text-xs font-bold text-zinc-500">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. MINIMUM INFRASTRUCTURE REQUIREMENTS
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Facility Criteria
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2 tracking-tight">
                Minimum Infrastructure Requirements
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 font-medium">
                Standard facility parameters ensuring an orderly, safe, and comfortable testing atmosphere for all candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 shadow-xs transition-all duration-300 hover:bg-white hover:border-[#610D17]/30 hover:shadow-md"
                >
                  <div className="h-10 w-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-xs">
                    {req.icon}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-1.5 leading-snug">
                    {req.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {req.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. ONBOARDING ROADMAP SECTION
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-zinc-50 border-t border-zinc-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Simple Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2 tracking-tight">
                How to Become an Exam Centre
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 font-medium">
                Authorization is quick, seamless, and transparent across three simple stages:
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {steps.map((st) => (
                <div
                  key={st.step}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-[#610D17]/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FBF2F3] text-[#610D17] font-black text-base flex items-center justify-center shrink-0">
                    {st.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            6. CTA BANNER (OFFICIAL DOCUMENTS & REGISTRATION)
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-white border-t border-zinc-200">
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
                    href="https://www.tinyurl.com/NTSExamCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="lg"
                    className="whitespace-nowrap font-bold"
                  >
                    Register as Exam Centre
                  </Button>

                  <Button
                    href="https://www.tinyurl.com/NTSExamCenter"
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
