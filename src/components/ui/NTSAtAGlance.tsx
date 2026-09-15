import React from "react";
import Button from "@/components/common/Button";

interface GlanceCard {
  id: string;
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  points: string[];
}

const glanceCards: GlanceCard[] = [
  {
    id: "highlights",
    title: "Competition Highlights",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    points: [
      "2 Lakh+ students from 20,000+ schools & colleges participating across India.",
      "1,500+ Exam Centres in 600+ Districts across all states.",
      "₹10 Crore+ scholarships & ₹5 Lakh+ cash awards for top performers.",
    ],
  },
  {
    id: "objectives",
    title: "Key Objectives",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    points: [
      "Build competitive awareness and test exam readiness early on.",
      "Prepare students for IIT-JEE, NEET, UPSC, CAT, CLAT & NDA.",
      "Provide career mentorship, counselling, and national recognition.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility Criteria",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.999-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    points: [
      "School Students: Enrolled in Classes 8th, 9th, or 10th & Madrasas.",
      "College Students: Junior College (11th & 12th) & Senior Degree Colleges.",
      "Diploma, ITI, and NIOS students in India are eligible.",
    ],
  },
  {
    id: "exam-mode",
    title: "Exam Pattern & Mode",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    points: [
      "Conducted 100% in Offline/Physical Mode on 5th December 2026.",
      "90-minute paper featuring 100 Multiple Choice Questions (MCQs).",
      "No negative marking; crafted by distinguished national academicians.",
    ],
  },
  {
    id: "benefits-rewards",
    title: "Scholarships & Coaching",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.657 1.343 3 3 3h4.5" />
      </svg>
    ),
    points: [
      "Up to 100% tuition scholarships for top 1,500+ performers.",
      "75% to 50% partial scholarships for next 2,500+ performers.",
      "Partner institute coaching fee waivers for competitive exams.",
    ],
  },
  {
    id: "cash-prizes",
    title: "Cash Prizes & Awards",
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    points: [
      "₹30,000 for 1st Rankers in each student category.",
      "₹20,000 and ₹10,000 for 2nd and 3rd rankers respectively.",
      "Cash awards for top 50 rankers and individual State Toppers.",
    ],
  },
];

export default function NTSAtAGlance() {
  return (
    <section className="bg-zinc-50 py-14 sm:py-18 lg:py-22 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#610D17]">
            Overview
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-zinc-900 tracking-tight">
            NTS 2026 At a Glance
          </h2>
          <div className="w-12 h-1 bg-[#C89D4B] mx-auto mt-2.5 mb-3 rounded-full" />
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Essential facts, eligibility rules, and key benefits you need to know about the National Talent Search.
          </p>
        </div>

        {/* 6 Cards Grid (3 cols on lg, 2 cols on md, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {glanceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:shadow-md hover:border-zinc-300"
              >
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-colors duration-200 group-hover:bg-[#610D17] group-hover:text-white mb-5">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-3">
                  {card.title}
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-2.5 flex-1">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C89D4B] shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Left Details Redirection Button */}
                <div className="pt-4 mt-5 border-t border-zinc-100 flex justify-start">
                  <Button
                    href="/NTS_Details"
                    variant="brand-outline"
                    size="sm"
                    className="gap-1.5"
                  >
                    <span>Details</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
