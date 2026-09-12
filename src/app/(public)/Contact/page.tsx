import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Contact Us & Helpdesk | AMP NTS 2026",
  description:
    "Have questions about AMP National Talent Search (NTS) 2026? Connect with our dedicated category helplines, join our daily live meeting, or reach out via email.",
};

export default function ContactPage() {
  const helplineCategories = [
    {
      badge: "School Category",
      title: "School Students",
      subtitle: "Classes 8th, 9th & 10th",
      phoneRaw: "8657506907",
      phoneFormatted: "+91 86575 06907",
      whatsappUrl: "https://wa.me/918657506907?text=Hello%20AMP%20NTS%20Helpdesk%2C%20I%20have%20a%20query%20regarding%20School%20Category%20(8th%2C%209th%20%26%2010th).",
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
      badge: "Higher Secondary",
      title: "Junior College Students",
      subtitle: "Classes 11th & 12th",
      phoneRaw: "8657506909",
      phoneFormatted: "+91 86575 06909",
      whatsappUrl: "https://wa.me/918657506909?text=Hello%20AMP%20NTS%20Helpdesk%2C%20I%20have%20a%20query%20regarding%20Junior%20College%20Category%20(11th%20%26%2012th).",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      badge: "Higher Education",
      title: "Undergraduate / Degree College",
      subtitle: "All Undergraduate Streams",
      phoneRaw: "8657003085",
      phoneFormatted: "+91 86570 03085",
      whatsappUrl: "https://wa.me/918657003085?text=Hello%20AMP%20NTS%20Helpdesk%2C%20I%20have%20a%20query%20regarding%20Undergraduate%20%2F%20Degree%20College%20Category.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const sessionTopics = [
    "How to Register",
    "AMP World App",
    "Eligibility Criteria",
    "Syllabus & Exam Pattern",
    "Preparation Tips",
    "Rewards & Scholarships",
    "Admit Card & Exam Day Guidelines",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            1. PAGE HEADER (MAROON GRADIENT BACKGROUND)
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
                <span>NTS 2026 · GET IN TOUCH</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
                Contact Us & Helpdesk
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
                Have questions about AMP National Talent Search 2026? We&apos;re here to help. Reach
                out to our category helplines, attend our daily live session, or connect via WhatsApp and email.
              </p>
            </div>

            {/* 4 Bottom Channel Highlight Cards */}
            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Card 1: Featured White Card */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center shadow-md">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 leading-tight block">
                    Mon – Sat
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-snug font-medium max-w-[220px] mx-auto">
                    Operational hours from 11:00 AM to 7:00 PM IST
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-zinc-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    SUPPORT HOURS
                  </span>
                </div>
              </div>

              {/* Card 2: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                    3 Categories
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    Dedicated lines for School, Junior & Degree students
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    DEDICATED HELPLINES
                  </span>
                </div>
              </div>

              {/* Card 3: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight block">
                    5:00 – 6:00 PM
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    Daily live interactive student guidance sessions
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    DAILY LIVE SESSIONS
                  </span>
                </div>
              </div>

              {/* Card 4: Translucent Maroon Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
                <div>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight block truncate">
                    nts@ampindia.org
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                    Official email desk for institutional & exam queries
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                    EMAIL ASSISTANCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. HELPLINE NUMBERS SECTION
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Direct Student Assistance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] mt-2 flex items-center justify-center gap-2">
                <span>📞</span> Helpline Numbers
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 font-medium">
                Our team is available <strong>Monday to Saturday, 11:00 AM to 7:00 PM (IST)</strong>.
              </p>
            </div>

            {/* Advisory Alert Callout */}
            <div className="mx-auto max-w-3xl mb-10 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 text-lg">
                  ⚠️
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-amber-900">
                    Please WhatsApp before calling for quicker assistance.
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                    Our student support coordinators can review messages, share registration links,
                    and troubleshoot app queries fastest via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Helpline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {helplineCategories.map((item) => (
                <div
                  key={item.phoneRaw}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#610D17]/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="inline-flex items-center rounded-full bg-[#610D17]/10 px-2.5 py-0.5 text-xs font-bold text-[#610D17]">
                        {item.badge}
                      </span>
                      <div className="text-[#610D17]">{item.icon}</div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug">{item.title}</h3>
                    <p className="text-xs font-medium text-zinc-500 mt-0.5">{item.subtitle}</p>

                    {/* Prominent Phone Display */}
                    <div className="mt-4 rounded-xl bg-zinc-50 p-2.5 sm:p-3 border border-zinc-100 text-center">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-0.5">
                        Helpline Number
                      </span>
                      <a
                        href={`tel:${item.phoneRaw}`}
                        className="text-xl sm:text-2xl md:text-lg lg:text-2xl font-black text-zinc-900 tracking-tight whitespace-nowrap transition-colors hover:text-[#610D17]"
                      >
                        {item.phoneRaw}
                      </a>
                      <span className="block text-[11px] text-zinc-500 mt-0.5">
                        ({item.phoneFormatted})
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 space-y-2 pt-3.5 border-t border-zinc-100">
                    <a
                      href={item.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-emerald-700 hover:shadow"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>WhatsApp Support</span>
                    </a>

                    <a
                      href={`tel:${item.phoneRaw}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-200"
                    >
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call {item.phoneRaw}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. DAILY HELPLINE MEETING (FEATURED LIVE INTERACTIVE CARD)
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-[#610D17]/15 p-6 sm:p-10 md:p-12 shadow-sm">
              {/* Background ambient corner glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#610D17]/5 blur-3xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

              <div className="relative z-10">
                {/* Live Pill & Title */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Live Doubt Resolution
                  </div>

                  <span className="text-xs font-semibold text-zinc-500">
                    Open for all Students, Parents & Teachers
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#610D17] leading-tight flex items-center gap-2">
                  <span>💬</span> Daily Helpline Meeting
                </h2>

                <p className="mt-2 text-base sm:text-lg text-zinc-700 max-w-3xl font-normal leading-relaxed">
                  Join our live interactive session every day to get all your doubts resolved
                  instantly.
                </p>

                {/* Session Schedule Bar */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-zinc-50 p-5 sm:p-6 border border-zinc-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                        Session Days
                      </span>
                      <span className="text-sm sm:text-base font-bold text-zinc-900">
                        Monday to Saturday
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                        Session Time
                      </span>
                      <span className="text-sm sm:text-base font-bold text-zinc-900">
                        5:00 PM – 6:00 PM (IST)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center sm:justify-end">
                    <a
                      href="https://tinyurl.com/HelplineAMPNTS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#610D17] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#4B0A12] hover:shadow-md active:scale-95"
                    >
                      <span>Join Live Meeting</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Topics Covered Banner */}
                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <span className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Special sessions cover:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sessionTopics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg bg-zinc-100 border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. EMAIL SUPPORT & ADDITIONAL RESOURCES
        ========================================================= */}
        <section className="py-14 sm:py-16 md:py-20 bg-white border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Email Support Card (Takes 2 Columns on LG) */}
              <div className="lg:col-span-2 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#610D17]">
                        📧 Email Us
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                        For any clarifications, queries, or support
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-white border border-zinc-200 p-5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      Official Support Email
                    </span>
                    <a
                      href="mailto:nts@ampindia.org"
                      className="text-xl sm:text-2xl font-bold text-[#610D17] hover:underline break-all"
                    >
                      nts@ampindia.org
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    We aim to respond within <strong>24–48 hours</strong>.
                  </span>
                  <a
                    href="mailto:nts@ampindia.org"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#610D17] hover:underline"
                  >
                    <span>Write Email</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Resources & Guidelines Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#610D17] to-[#4B0A12] text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white mb-4 backdrop-blur-xs">
                    Self Help
                  </span>
                  <h3 className="text-xl font-bold text-white">Looking for Syllabus or Dates?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    Most answers regarding eligibility, exam pattern, and important dates are
                    already documented for your convenience.
                  </p>
                </div>

                <div className="mt-6 space-y-2.5 pt-4 border-t border-white/20">
                  <Link
                    href="/About_NTS"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-white/20"
                  >
                    <span>Syllabus & Preparation Guide</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <a
                    href="https://www.tinyurl.com/AllNTSDocument"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#610D17] transition-all hover:bg-zinc-100"
                  >
                    <span>View All NTS Guidelines</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
