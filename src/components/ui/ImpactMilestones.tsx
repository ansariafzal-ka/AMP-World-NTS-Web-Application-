import React from "react";

interface Milestone {
  year: string;
  description: string;
  icon: React.ReactNode;
}

const ImpactMilestones = () => {
  const milestones: Milestone[] = [
    {
      year: "2007",
      description: "AMP Founded",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
        </svg>
      ),
    },
    {
      year: "2013",
      description: "AMP Zakat Fund & AMP Job Fairs Launched",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .982-3.172M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 0 1-2.25 2.25H18a3.75 3.75 0 0 1-2.25-.75M3 9.75A2.25 2.25 0 0 0 5.25 12H6a3.75 3.75 0 0 0 2.25-.75" />
        </svg>
      ),
    },
    {
      year: "2020",
      description: "AMP Zakat Fund & AMP Job Fairs Launched",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      year: "2023",
      description: "25-year Roadmap for the Community Launched",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
    },
    {
      year: "2025",
      description: "National NGO Conference at Lucknow, UP",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.999-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-t border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#610D17] leading-tight">
              18 Years of Impactful Service
            </h2>

            <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
              AMP has successfully completed 18 years of service, marking significant milestones with the collaboration of its dedicated team of members, donors, volunteers, partners and well-wishers.
            </p>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              The collective strength of these individuals and institutions has been at the heart of AMP&apos;s achievements. We have reached out to more than <strong className="text-zinc-900 font-semibold">200+ cities</strong> in India and <strong className="text-zinc-900 font-semibold">20+ countries</strong> abroad.
            </p>
          </div>

          {/* Right Column: Timeline Milestone List */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 sm:gap-5 rounded-2xl p-2 transition-all hover:bg-zinc-50/80"
              >
                {/* Rounded Icon Badge */}
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FBF2F3] text-[#610D17] transition-transform duration-200 group-hover:scale-105">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#610D17] leading-tight">
                    {item.year}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMilestones;
