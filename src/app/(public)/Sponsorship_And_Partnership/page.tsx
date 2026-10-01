import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Sponsorship & Partnership - AMP National Talent Search 2026",
  description:
    "Partner with AMP NTS 2026. Gain nationwide brand visibility across 2 Lakh+ students, 10,000+ schools, 2,000+ colleges, and 600+ districts across India.",
};

const audienceStats = [
  { value: "5 Lakh+", label: "Students & Professionals" },
  { value: "20,000+", label: "Educational Institutions" },
  { value: "1.5 Lakh+", label: "Social Media Followers" },
  { value: "200+", label: "AMP City Chapters" },
  { value: "8,000+", label: "NGO Partners Across India" },
];

const partnershipTypes = [
  {
    name: "Title Sponsor",
    badge: "Premier",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "Exclusive top-billing sponsorship with maximum prominent brand exposure across all media, stage backdrops, print kits, and web platforms.",
  },
  {
    name: "Co-Sponsor",
    badge: "Principal",
    badgeColor: "bg-rose-100 text-[#610D17] border-rose-200",
    description: "High-tier partnership with prominent co-branding across national event campaigns, examination centres, and awards presentations.",
  },
  {
    name: "Associate Sponsor",
    badge: "Partner",
    badgeColor: "bg-zinc-100 text-zinc-800 border-zinc-300",
    description: "Valued partner status with branding on marketing collaterals, digital outreach materials, and student certificates.",
  },
  {
    name: "Institution Partner",
    badge: "Academic",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    description: "Universities, colleges, and coaching academies joining hands to host centres, sponsor test modules, and conduct career workshops.",
  },
  {
    name: "In-kind Sponsor",
    badge: "Support",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "Sponsor may choose to provide goods or value in kind instead of money as part of the agreement (e.g. stationery, software, gifts, logistics).",
  },
  {
    name: "Scholarship Sponsor",
    badge: "High Impact",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    description: "Any organisation who wants to fund a Student through School, College or for any other academic endeavour. Can even adopt a student for their entire academic pursuit.",
  },
];

const sponsorBenefits = [
  "Sponsors gain massive brand exposure among over five lakh students and professionals across India.",
  "The partnership offers visibility across more than seven thousand schools, colleges, and universities.",
  "Sponsors enjoy promotion on AMP's social media platforms reaching one and a half lakh engaged followers.",
  "The campaign connects sponsors with professionals, academics, and students across more than two hundred city chapters via email and WhatsApp.",
  "Sponsors can reach over six thousand NGOs nationwide who support student registrations for the exam.",
  "Sponsors' branding appears in AMP's monthly reports, press coverage, and all related communications.",
  "Sponsors are publicly recognized at a national awards event attended by industry leaders, academics, and top-performing students.",
  "Title sponsors receive top-priority branding across all event materials, banners, and communications.",
];

export default function SponsorshipAndPartnershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900 antialiased">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            1. PAGE HERO HEADER (MATCHING FAQS & IMPORTANT DATES DESIGN)
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-12 sm:py-16 lg:py-16 flex flex-col justify-center">
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
                <span>NTS 2026 · SPONSORSHIP &amp; PARTNERSHIP</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
                Sponsorship &amp; Partnership Overview
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-4xl">
                The <strong className="text-white font-semibold">6th AMP National Talent Search 2026</strong> is set to be one of the largest student-centric events in India, with <strong className="text-amber-300 font-semibold">2 lakh+ students</strong> expected to participate from over <strong className="text-white font-semibold">10,000 schools</strong>, <strong className="text-white font-semibold">2,000 colleges</strong>, and <strong className="text-white font-semibold">600+ districts</strong> across the country. Scheduled for December 2026, this mega talent search exam will have centres in <strong className="text-white font-semibold">1,200+ blocks</strong> nationwide and will be conducted in three categories:
              </p>

              {/* 3 Categories Badges */}
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-xl bg-white/10 border border-white/15 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  School Level (Classes 8th, 9th &amp; 10th)
                </span>
                <span className="rounded-xl bg-white/10 border border-white/15 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Junior College Level (Classes 11th &amp; 12th)
                </span>
                <span className="rounded-xl bg-white/10 border border-white/15 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Senior College Level (Undergraduate students)
                </span>
              </div>
            </div>

            {/* 4 Bottom Highlight Cards (Alternating White & Translucent Maroon) */}
            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Card 1: Featured White Card */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center shadow-md">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 leading-tight block">
                    2 Lakh+
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-snug font-medium max-w-[220px] mx-auto">
                    Students expected to participate across India
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-zinc-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    STUDENT REACH
                  </span>
                </div>
              </div>

              {/* Card 2: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                    10,000+
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    Schools and 2,000+ colleges nationwide
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    ACADEMIC NETWORK
                  </span>
                </div>
              </div>

              {/* Card 3: Featured White Card */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center shadow-md">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 leading-tight block">
                    1,200+ Blocks
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-snug font-medium max-w-[220px] mx-auto">
                    Examination centres across 600+ districts
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-zinc-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    GRASSROOTS SCALE
                  </span>
                </div>
              </div>

              {/* Card 4: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                    December 2026
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    Nationwide pen &amp; paper OMR test day
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    EXAM TIMELINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. MAIN DUAL-COLUMN CONTENT SECTION
        ========================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-zinc-50 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* ====================================================
                  LEFT COLUMN: OPPORTUNITY & PARTNERSHIP TYPES
              ==================================================== */}
              <div className="lg:col-span-6 flex flex-col gap-8">
                
                {/* Card 1: Partnership & Sponsorship Opportunity */}
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-9 shadow-xs">
                  <div className="pb-4 border-b border-zinc-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#610D17] mb-2">
                      Reach &amp; Scale
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#610D17] tracking-tight">
                      Partnership &amp; Sponsorship Opportunity
                    </h2>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
                    The AMP NTS-2026 offers a powerful platform for sponsors to engage with a vast and diverse audience, including:
                  </p>

                  {/* Audience Stats Grid */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {audienceStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80"
                      >
                        <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#610D17]/10 text-[#610D17]">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </span>
                        <div>
                          <div className="text-base font-extrabold text-[#610D17] leading-none">
                            {stat.value}
                          </div>
                          <div className="text-xs text-zinc-600 font-medium mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Narrative details */}
                  <div className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-700 leading-relaxed bg-[#fbf2f3]/50 p-4 sm:p-5 rounded-2xl border border-[#610D17]/15">
                    <p>
                      Sponsors will benefit from <strong className="text-zinc-900 font-semibold">nationwide brand exposure</strong>, visibility in press, media, and AMP communications, and <strong className="text-zinc-900 font-semibold">premium positioning</strong> in all event-related material.
                    </p>
                    <p>
                      The <strong className="text-zinc-900 font-semibold">Awards Ceremony</strong> will host dignitaries from academia, industry, and civil society, providing further networking and branding opportunities.
                    </p>
                    <p className="font-semibold text-[#610D17] pt-1">
                      This is a high-impact initiative to connect with India&apos;s youth, educational ecosystem, and social sector at scale.
                    </p>
                  </div>
                </div>

                {/* Card 2: Partnership Types */}
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-9 shadow-xs">
                  <div className="pb-4 border-b border-zinc-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#610D17] mb-2">
                      Categories
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#610D17] tracking-tight">
                      Partnership Type
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-600">
                      Flexible engagement models aligned with your corporate social responsibility (CSR) and brand goals.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {partnershipTypes.map((type, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 transition-all hover:bg-white hover:border-[#610D17]/30 hover:shadow-xs"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h3 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight">
                            {type.name}
                          </h3>
                          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${type.badgeColor}`}>
                            {type.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* ====================================================
                  RIGHT COLUMN: SPONSOR BENEFITS & CTA
              ==================================================== */}
              <div className="lg:col-span-6 flex flex-col gap-8">
                
                {/* Card 3: Sponsor Benefits */}
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-9 shadow-xs">
                  <div className="pb-4 border-b border-zinc-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#610D17] mb-2">
                      Brand Value &amp; ROI
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#610D17] tracking-tight">
                      Sponsor Benefits
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Partnering with AMP NTS-2026 offers wide-reaching exposure and impactful brand visibility across India&apos;s educational and professional ecosystem:
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {sponsorBenefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/70 hover:bg-rose-50/40 hover:border-[#610D17]/25 transition-all"
                      >
                        <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#610D17]/10 text-[#610D17]">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 4: Get in Touch / Connect with Corporate Desk */}
                <div className="rounded-3xl bg-[#610D17] text-white p-6 sm:p-8 lg:p-9 shadow-xl relative overflow-hidden">
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />

                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Connect With Us
                  </span>

                  <h3 className="mt-2 text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                    Partner With AMP for NTS 2026
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                    Custom sponsorship packages, CSR alignments, and institutional co-branding proposals are available upon request. Join us in shaping India&apos;s next generation of talent.
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      href="/Contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C89D4B] px-5 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-950 shadow-md hover:bg-[#d4a854] transition-all text-center"
                    >
                      <span>ENQUIRE FOR SPONSORSHIP</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>

                    <a
                      href="tel:+918291101316"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-all text-center"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                      </svg>
                      <span>+91 8291101316</span>
                    </a>
                  </div>
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
