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
    title: "Institute Registration",
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
            <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl ring-1 ring-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-white/10">
              <Image
                src="/nts-logo-2026.jpg"
                alt="AMP National Talent Search 2026 Logo"
                width={943}
                height={1136}
                className="w-28 sm:w-36 md:w-56 lg:w-68 xl:w-76 h-auto object-cover select-none"
                priority
              />
            </div>
          </div>

          {/* Content & Registration Column */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6">
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                AMP National Talent Search 2026
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-bold text-rose-200 tracking-tight">
                India&apos;s Biggest National Talent Search
              </p>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-rose-100/95 tracking-tight max-w-2xl mx-auto md:mx-0">
                Discover Your Talent. Compete with the Best. Shape Your Future.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
                For School, Junior College, Madarsa &amp; Undergraduate Students across India.
              </p>

              <p className="pt-1 text-sm sm:text-base md:text-lg font-bold text-white tracking-tight">
                <span className="inline-block mr-3 sm:mr-5">Registration Closes: 22 Nov 2026</span>
                <span className="inline-block">Exam Date: 5 Dec 2026</span>
              </p>
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
