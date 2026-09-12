import Link from "next/link";

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
    href: "/Student_Registration",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.657 1.343 3 3 3h4.5" />
      </svg>
    ),
  },
  {
    id: "exam-center",
    title: "Exam Center Registration",
    href: "/Exam_Center_Registration",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    id: "institute",
    title: "Institute Registration",
    href: "/Institute_Registration",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.333A48.24 48.24 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.583V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] lg:h-[calc(100dvh-5rem)] lg:min-h-0 items-center justify-center overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-6 sm:py-8 lg:py-4 xl:py-6">
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
        {/* 2-Column Grid: Left Content Hierarchy / Right 3 Registration Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Unified Text Content Hierarchy */}
          <div className="lg:col-span-7 flex flex-col space-y-4 pr-0 lg:pr-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              AMP National Talent Search 2026
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-medium text-zinc-100">
              Discover Your Talent. Compete with the Best. Shape Your Future.
            </p>

            <div className="pt-1 space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-zinc-200 tracking-tight">
                Your Gateway to National Recognition & Scholarships
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                The AMP National Talent Search (NTS) provides students from schools, junior colleges, and universities a national benchmark to test competitive readiness, earn premier scholarships for exams like NEET & IIT-JEE, and gain lifelong mentorship.
              </p>
            </div>
          </div>

          {/* Right Side: 3 Simple, Clean Registration Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3.5 sm:space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-white tracking-tight">
                Register for NTS 2026
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                Select your category to start your registration:
              </p>
            </div>

            {/* The 3 Clean Buttons */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3 pt-1">
              {registrationLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl bg-white px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-[#610D17] shadow-md transition-all duration-200 hover:bg-zinc-100 hover:shadow-lg hover:translate-x-1"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#610D17] shrink-0" />
                      <span>{link.title}</span>
                    </span>
                    <svg
                      className="h-5 w-5 text-[#610D17] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
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
    </section>
  );
}
