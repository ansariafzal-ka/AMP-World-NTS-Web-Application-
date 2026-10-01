"use client";

import Link from "next/link";
import Button from "@/components/common/Button";

interface PlatformLink {
  title: string;
  subtitle: string;
  href: string;
}

const platforms: PlatformLink[] = [
  {
    title: "IndiaZakat",
    subtitle: "Zakat Crowdfunding",
    href: "https://indiazakat.com/",
  },
  {
    title: "AMPowerJobs",
    subtitle: "Employment & Jobs",
    href: "https://ampowerjobs.com/",
  },
  {
    title: "AMP India",
    subtitle: "Education & Progress",
    href: "https://www.ampindia.org/",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/groups/2228112/profile",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "http://x.com/AMPIndia",
    icon: (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ampindia.org/",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

interface FooterProps {
  hidePreFooter?: boolean;
}

export default function Footer({ hidePreFooter = false }: FooterProps = {}) {
  return (
    <>
      {/* Pre-Footer: About the AMP World App Full Section */}
      {!hidePreFooter && (
        <aside id="about-amp-world-app" aria-label="About the AMP World App" className="border-t border-zinc-200 bg-zinc-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
              {/* Subtle crimson accent flare */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#610D17]/5 blur-3xl"
                aria-hidden="true"
              />

              {/* Header: Emblem + Title + Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7D111E] via-[#610D17] to-[#420B13] text-white shadow-md shadow-[#610D17]/25">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-flex items-center rounded-full bg-rose-50 border border-rose-200/80 px-3 py-0.5 text-xs font-bold text-[#610D17] uppercase tracking-wider mb-1.5">
                      Official Mobile App
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#610D17] tracking-tight">
                      About the AMP World App
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-500">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>2.5 Lakh+ Student Community</span>
                </div>
              </div>

              {/* Paragraph 1: Scale & History */}
              <p className="mt-6 text-sm sm:text-base lg:text-lg text-zinc-700 leading-relaxed">
                The <strong className="font-bold text-zinc-900">AMP World App</strong> has successfully hosted all previous editions of the National Talent Search, with over <strong className="font-bold text-[#610D17]">2.5 lakh students</strong> from across India registering and participating.
              </p>

              {/* Student-Focused Programs Introduction */}
              <div className="mt-8">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#610D17]" />
                  The app also offers access to several student-focused programs by AMP, including:
                </h3>

                {/* 5 Program Cards */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
                  {/* 1. Career Counselling */}
                  <div className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 transition-all duration-200 hover:bg-white hover:border-[#610D17]/40 hover:shadow-md flex flex-col justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-colors group-hover:bg-[#610D17] group-hover:text-white mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      Career Counselling
                    </span>
                  </div>

                  {/* 2. Scholarship Guidance */}
                  <div className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 transition-all duration-200 hover:bg-white hover:border-[#610D17]/40 hover:shadow-md flex flex-col justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-colors group-hover:bg-[#610D17] group-hover:text-white mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.496m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.496 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492c.981.142 1.954.317 2.916.52a6.003 6.003 0 0 1-5.395 4.972m-2.749 1.35a6.726 6.726 0 0 1-2.748 1.35" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      Scholarship Guidance
                    </span>
                  </div>

                  {/* 3. Employment Training */}
                  <div className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 transition-all duration-200 hover:bg-white hover:border-[#610D17]/40 hover:shadow-md flex flex-col justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-colors group-hover:bg-[#610D17] group-hover:text-white mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v1.069m7.5 0c1.238.09 2.45.228 3.637.411m-14.774.411c1.237-.183 2.45-.321 3.637-.411m7.5 0a47.382 47.382 0 0 1-7.5 0" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      Employment Training
                    </span>
                  </div>

                  {/* 4. Financial Assistance */}
                  <div className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 transition-all duration-200 hover:bg-white hover:border-[#610D17]/40 hover:shadow-md flex flex-col justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-colors group-hover:bg-[#610D17] group-hover:text-white mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      Financial Assistance for Higher Education
                    </span>
                  </div>

                  {/* 5. College Admissions Support */}
                  <div className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 transition-all duration-200 hover:bg-white hover:border-[#610D17]/40 hover:shadow-md flex flex-col justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-colors group-hover:bg-[#610D17] group-hover:text-white mb-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.657 1.343 3 3 3h4.5" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      Support in College Admissions
                    </span>
                  </div>
                </div>
              </div>

              {/* Concluding Paragraph Highlight */}
              <div className="mt-8 rounded-2xl bg-[#610D17]/5 border border-[#610D17]/15 p-4 sm:p-5">
                <p className="text-xs sm:text-sm md:text-base text-zinc-800 leading-relaxed font-medium">
                  AMP aims to keep students continuously engaged and connected through the <strong className="font-bold text-[#610D17]">AMP World App</strong>, enabling them to benefit from its free educational and career-support programs in the long term.
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Instant Registration
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    1,500+ Centres
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Free Educational Programs
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <Link
                    href="/AMP_World_App"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-[#610D17] px-5 sm:px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-[#610D17]/20 transition-all duration-200 hover:bg-[#520A13] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap"
                  >
                    <span>Download AMP World App</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}

      <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#610D17] via-[#520A13] to-[#3B070D] text-white">
        {/* Decorative ambient background glows */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8B1321]/25 blur-3xl"
          aria-hidden="true"
        />

        {/* Main Footer Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* Top Grid: Brand & Description | Get in Touch */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-start">
            {/* Brand & Short Description */}
            <div className="lg:col-span-7 space-y-2.5">
              <Link
                href="/"
                className="inline-flex flex-col transition-opacity hover:opacity-90 focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight">
                  AMP NTS
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  National Talent Search
                </span>
              </Link>

              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-zinc-200">
                AMP is an intellectual organization spread out at a national level, having more than 200 active chapters across India and growing further with a strong presence of professional base across the country.
              </p>
            </div>

            {/* Get In Touch */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Get In Touch
                </h3>
                <div className="h-0.5 w-8 bg-white/40 rounded-full" />
              </div>

              <div className="space-y-2 pt-0.5">
                {/* Mail Us */}
                <a
                  href="mailto:nts@ampindia.org"
                  className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-all hover:border-white/25 hover:bg-white/10"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-zinc-200 transition-colors group-hover:bg-white group-hover:text-[#610D17]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Mail Us
                    </span>
                    <span className="truncate text-xs sm:text-sm font-semibold text-white transition-colors group-hover:text-zinc-100">
                      nts@ampindia.org
                    </span>
                  </div>
                </a>

                {/* Working Hours & Phone Numbers */}
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 transition-all hover:border-white/25 hover:bg-white/10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-zinc-200 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Mon to Fri : 11:00 AM – 7:00 PM
                    </span>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold text-white">
                      <a
                        href="tel:+918657506907"
                        className="hover:text-zinc-200 hover:underline transition-colors"
                      >
                        +91 86575 06907
                      </a>
                      <a
                        href="tel:+918657506909"
                        className="hover:text-zinc-200 hover:underline transition-colors"
                      >
                        +91 86575 06909
                      </a>
                      <a
                        href="tel:+918657003085"
                        className="hover:text-zinc-200 hover:underline transition-colors"
                      >
                        +91 86570 03085
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section: Platforms & Social Links */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Our Platforms */}
              <div className="flex-1 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Our Platforms
                  </span>
                  <div className="h-0.5 w-6 bg-white/40 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {platforms.map((platform) => (
                    <Button
                      key={platform.title}
                      variant="frosted"
                      size="sm"
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full justify-between rounded-lg border-white/10 bg-white/5 !px-3 !py-2.5 text-left hover:border-white/25 hover:bg-white/10"
                    >
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white transition-colors group-hover:text-zinc-100">
                          {platform.title}
                        </h4>
                        <p className="text-[11px] font-normal text-zinc-300">{platform.subtitle}</p>
                      </div>
                      <svg
                        className="h-3.5 w-3.5 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Connect With Us */}
              <div className="space-y-2.5 lg:pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Connect With Us
                  </span>
                  <div className="h-0.5 w-6 bg-white/40 rounded-full" />
                </div>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="frosted"
                      size="sm"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name}`}
                      className="!h-9 !w-9 !p-0 rounded-lg border-white/10 bg-white/5 text-zinc-200 transition-all hover:border-white hover:bg-white hover:text-[#610D17]"
                    >
                      {social.icon}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright Only */}
          <div className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-zinc-300">
            <p>
              &copy; 2026 Association of Muslim Professionals. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
