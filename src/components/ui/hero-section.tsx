import Link from "next/link";
import Image from "next/image";

interface RegistrationLink {
  id: string;
  title: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const registrationLinks: RegistrationLink[] = [
  {
    id: "student",
    title: "Student Registration",
    href: "/student-registration",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.657 1.343 3 3 3h4.5" />
      </svg>
    ),
  },
  {
    id: "exam-center",
    title: "Exam Center Registration",
    href: "/exam-centre-registration",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    id: "institute",
    title: "Participating Institution Registration",
    href: "/institution-registration",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.333A48.24 48.24 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.583V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-10 sm:py-12 md:py-14 lg:py-12 xl:py-16 lg:min-h-[calc(100dvh-5rem)]">
      {/* Luminous crimson and rose ambient glow */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[350px] w-full max-w-7xl rounded-full bg-[#B81E34]/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-[#9E1528]/35 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center my-auto">
        {/* 2-Column Grid starting on Tablet (md: 768px+) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Logo Column */}
          <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center">
            <div className="relative group rounded-none shadow-xl md:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="/nts-logo-white.jpeg"
                alt="AMP National Talent Search 2026 Logo"
                width={536}
                height={648}
                className="w-32 sm:w-40 md:w-56 lg:w-68 xl:w-76 h-auto object-contain select-none"
                priority
              />
            </div>
          </div>

          {/* Content & Registration Column */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center text-center md:text-left space-y-5 sm:space-y-6">
            <h1 className="sr-only">AMP National Talent Search 2026</h1>

            {/* 2-Column Categories & Key Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 text-left">
              {/* Column 1: Categories */}
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider text-white">
                  Categories
                </h2>

                <div className="space-y-4 sm:space-y-5">
                  {/* Schools */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-white shrink-0 mt-0.5">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H15M9 3.75a2.25 2.25 0 0 0-2.25 2.25v.75m6-3a2.25 2.25 0 0 1 2.25 2.25v.75m-8.25 0h10.5A2.25 2.25 0 0 1 20.25 9v9.75a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V9A2.25 2.25 0 0 1 6 6.75h1.5m3 4.5h3m-4.5 4.5h6" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                        Schools
                      </div>
                      <div className="text-sm sm:text-base text-white/90 font-medium leading-snug mt-1">
                        (8th, 9th &amp; 10th)
                      </div>
                    </div>
                  </div>

                  {/* Junior Colleges */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-white shrink-0 mt-0.5">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                        Junior / Intermediate Colleges
                      </div>
                      <div className="text-sm sm:text-base text-white/90 font-medium leading-snug mt-1">
                        (11th &amp; 12th)
                      </div>
                    </div>
                  </div>

                  {/* Senior Colleges */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-white shrink-0 mt-0.5">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.657 1.343 3 3 3h4.5" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                        Senior / Degree Colleges
                      </div>
                      <div className="text-sm sm:text-base text-white/90 font-medium leading-snug mt-1">
                        (Undergraduates)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Dates */}
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider text-white">
                  Important Dates
                </h2>

                <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base lg:text-lg text-white">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <div className="leading-snug">
                      <span className="font-semibold text-white/95">Registration Open Date : </span>
                      <span className="font-bold text-white">Monday, 21 Sep 2026</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <div className="leading-snug">
                      <span className="font-semibold text-white/95">Registration Close Date : </span>
                      <span className="font-bold text-white">Friday, 20 Nov 2026</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.253M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <div className="leading-snug">
                      <span className="font-semibold text-white/95">Exam Date : </span>
                      <span className="font-bold text-white">Saturday, 05 Dec 2026</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.496m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.496 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492c.981.142 1.954.317 2.916.52a6.003 6.003 0 0 1-5.395 4.972m-2.749 1.35a6.726 6.726 0 0 1-2.748 1.35" />
                    </svg>
                    <div className="leading-snug">
                      <span className="font-semibold text-white/95">Result and Counselling : </span>
                      <span className="font-bold text-white">Tuesday, 26 Jan 2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Stacked on mobile & tablet, 3-column row on large desktop (lg+) */}
            <div className="pt-2 border-t border-white/15">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 sm:gap-3">
                {registrationLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="group flex items-center justify-between gap-3 rounded-xl bg-white px-3.5 sm:px-4 py-3 sm:py-3.5 text-[#610D17] shadow-md transition-all duration-200 hover:bg-zinc-100 hover:shadow-xl hover:translate-x-1 active:translate-x-0"
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <Icon className="h-5 w-5 text-[#610D17] shrink-0" />
                        <span className="text-xs sm:text-sm font-bold leading-tight line-clamp-2 text-left">
                          {link.title}
                        </span>
                      </span>
                      <svg
                        className="h-4 w-4 text-[#610D17] transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
