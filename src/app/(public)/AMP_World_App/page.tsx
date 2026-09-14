import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/common/Button";
import Link from "next/link";

export const metadata = {
  title: "AMP World Mobile App - NTS 2026 Download & Registration",
  description:
    "Download the official AMP World Mobile App for AMP National Talent Search (NTS) 2026. Register, select exam centres, download hall tickets, and access results & scholarships.",
};

export default function AMPWorldAppPage() {
  const appFeatures = [
    {
      title: "One-Stop Student Registration",
      description:
        "Seamless registration for School (8th–10th & Madarsas), Junior College (11th & 12th, Diploma, ITI, NIOS), and Senior Degree College undergraduates.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "1,500+ Exam Centre Selection",
      description:
        "Choose your preferred examination centre across 400+ districts in India directly from your smartphone.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Digital Hall Ticket & Admit Card",
      description:
        "Receive roll numbers, examination venue allotment, and digital hall tickets delivered securely inside the app.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
    },
    {
      title: "Syllabus, Prep & Mock Papers",
      description:
        "Check class-wise syllabus breakdown, Mental Ability Test (MAT) & Scholastic Aptitude Test (SAT) guidelines, and sample test materials.",
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
      title: "Scorecards & Merit Ranking",
      description:
        "Access national, state, and district ranks instantly upon result declaration with official e-certificates.",
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
    {
      title: "Scholarship & Career Ecosystem",
      description:
        "Connect with ₹10 Crore+ coaching scholarships (NEET/IIT-JEE), ₹5 Lakh+ in cash awards, and AMP's higher education career mentorship network.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description:
        "Download the AMP World Mobile App directly via the official link or Google Play Store, and install it on your Android smartphone.",
    },
    {
      number: "02",
      title: "Create Student Profile",
      description:
        "Sign up with your mobile number, select your category (School, Junior College, or Degree College), and fill in your school/college details.",
    },
    {
      number: "03",
      title: "Select Exam Centre",
      description:
        "Browse the interactive directory of 1,500+ test centres across 400+ districts and pick the most convenient examination venue near you.",
    },
    {
      number: "04",
      title: "Receive Hall Ticket & Compete",
      description:
        "Get your official hall ticket inside the app, prepare using syllabus materials, and attend the 90-minute offline examination on exam day.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1">
        {/* =========================================================
            HEADER TITLE BLOCK (WITH SIGNATURE CRIMSON GRADIENT)
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-10 sm:py-12 md:py-14 border-b border-[#B81E34]/30">
          {/* Luminous crimson and rose ambient glow */}
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[300px] w-full max-w-7xl rounded-full bg-[#B81E34]/30 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-[#9E1528]/35 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-zinc-100 backdrop-blur-xs">
                  <span className="h-2 w-2 rounded-full bg-[#E06D7A] animate-pulse" />
                  AMP OFFICIAL MOBILE APP · NTS 2026
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
                  Download AMP World App
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-zinc-200/90 max-w-2xl leading-relaxed">
                  The official registration and examination portal for the AMP National Talent Search 2026.
                  Register, select your centre, and access syllabus resources.
                </p>
              </div>

              {/* Direct Download & Support CTAs */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  href="https://www.tinyurl.com/AMPWorldApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  className="gap-2 font-bold shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.5V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download App</span>
                </Button>

                <Button
                  href="https://tinyurl.com/HelplineAMPNTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="frosted"
                  size="md"
                  className="font-semibold"
                >
                  Daily Helpline
                </Button>
              </div>
            </div>
          </div>
        </section>



        {/* =========================================================
            HOW TO REGISTER VIA THE APP (4 STEPS)
        ========================================================= */}
        <section className="py-10 sm:py-12 bg-white border-t border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Step-by-Step Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-1">
                How to Register via AMP World App
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2">
                Follow these 4 simple steps on your mobile device to complete your NTS 2026 entry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-5 flex flex-col justify-between transition-all hover:border-[#610D17]/30 hover:bg-white hover:shadow-sm"
                >
                  <div>
                    <span className="text-2xl font-black text-[#610D17] block mb-2">
                      {step.number}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            APP FEATURES & STUDENT BENEFITS
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Key App Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-1">
                Everything You Need for NTS 2026
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2">
                The AMP World App powers every stage of your competition journey from initial enrollment to scholarship distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-zinc-300"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] mb-4">
                      {feat.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SUPPORT & HELPLINE SECTION (MATCHING SIGNATURE GRADIENT CARD)
        ========================================================= */}
        <section className="py-10 sm:py-12 bg-white border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-[#420B13] via-[#5E0E1C] to-[#7E1222] text-white p-6 sm:p-8 lg:p-9 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-white block mb-1">
                    Need Help Installing or Registering?
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Connect with the AMP NTS Student Helpdesk
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-zinc-200 leading-relaxed">
                    Our coordinators are available Monday to Saturday, 11:00 AM to 7:00 PM (IST) to guide you through installation, registration, and centre selection.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <Button
                    href="/Contact"
                    variant="secondary"
                    size="md"
                    className="whitespace-nowrap font-bold shadow-xs"
                  >
                    View Category Phone Numbers
                  </Button>

                  <Button
                    href="https://tinyurl.com/HelplineAMPNTS"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="frosted"
                    size="md"
                    className="whitespace-nowrap font-semibold gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Join Daily Live Session (5–6 PM)</span>
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
