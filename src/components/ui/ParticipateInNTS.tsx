import React from "react";

const rolesList = [
  "Volunteer",
  "Interns (Degree College & University Students)",
  "Trainers",
  "Observers",
  "Invigilators",
  "AMP Team Members",
];

const volunteerPoints = [
  "Promote NTS in your city, institution, and neighborhood, while encouraging institutions nearby to participate and helping students register online.",
  "Build connections with schools, colleges, educators, administrators, community leaders, Ulema, NGOs, and work closely with other NTS ambassadors.",
  "Act as a local representative by raising awareness, supporting student registration, and collaborating with partners in your city or state.",
  "Managing volunteers and interns",
  "Coordinating meetings and team communications",
  "Assigning tasks, monitoring progress, and ensuring follow-ups",
];

const internResponsibilities = [
  "District Coordination – Promote the NTS 2026 competition within your institution, city, district, and state.",
  "Social Media – Research and collect relevant data for outreach and promotion.",
  "Outreach – Connect using existing data and engage with educational institutions and management in your city/district through reference calling.",
];

const internBenefits = [
  "Receive an official Internship Certificate acknowledging your participation by AMP.",
  "Letter of Recommendation highlighting your contributions and skills.",
  "Get preference for involvement in other AMP initiatives.",
];

const trainerPoints = [
  "Conduct sessions for students to explain the NTS 2026 syllabus, motivate them, and guide their preparation.",
  "Orient exam centers on logistics, planning, student registration, and support the smooth execution of NTS 2026.",
  "Brief invigilators and observers on exam procedures, roles, and guidelines to ensure fair and efficient conduct.",
];

const observerPoints = [
  "Supporting the Exam Center in maintaining the integrity & fairness of the examination process",
  "Upholding the standards & ensuring that all candidates have an equal opportunity to prove their knowledge and competitive skills.",
];

export default function ParticipateInNTS() {
  return (
    <section id="participate" className="py-14 sm:py-18 lg:py-22 bg-zinc-50/70 border-b border-zinc-200/80 scroll-mt-32 sm:scroll-mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#610D17]">
            Get Involved
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#610D17] tracking-tight">
            Participate in AMP NTS
          </h2>
          <div className="w-12 h-1 bg-[#C89D4B] mx-auto mt-2.5 mb-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            As an individual, contribute to the National Talent Search by participating in one of the following roles:
          </p>

          {/* Roles Summary Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {rolesList.map((role, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-zinc-200 px-3 sm:px-3.5 py-1 text-xs sm:text-[13px] font-semibold text-zinc-800 shadow-2xs hover:border-[#610D17]/40 hover:text-[#610D17] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#610D17]" />
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* 2x2 Grid of Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* ========================================================
              CARD 1: BECOME AN NTS VOLUNTEER
          ======================================================== */}
          <div className="rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="pb-4 border-b border-zinc-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#610D17] mb-2">
                  Community Leadership
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                  Become an NTS Volunteer
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Individuals passionate about supporting students can join AMP NTS as Volunteers
                </p>
              </div>

              <div className="mt-5">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89D4B]" />
                  Role of NTS Volunteer:
                </h4>

                <ul className="space-y-2.5">
                  {volunteerPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-zinc-700 leading-relaxed">
                      <span className="shrink-0 mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#610D17]/10 text-[#610D17]">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://www.tinyurl.com/AMPNTSVolunteer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#610D17] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#520A13] transition-all"
              >
                <span>REGISTER HERE</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="https://certificate-generator-hvul.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 transition-all"
              >
                GET YOUR CERTIFICATE
              </a>
            </div>
          </div>

          {/* ========================================================
              CARD 2: INTERNSHIP PROGRAM (COLLEGE & UNIVERSITY)
          ======================================================== */}
          <div className="rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="pb-4 border-b border-zinc-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#610D17] mb-2">
                  Campus Opportunity
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                  Internship Program (Degree College &amp; University Students)
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  This is an excellent opportunity for committed and dynamic students to gain hands-on experience and contribute to one of India&apos;s largest talent search competitions.
                </p>
              </div>

              {/* Roles & Responsibilities */}
              <div className="mt-5">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wide mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89D4B]" />
                  Roles &amp; Responsibilities:
                </h4>

                <ul className="space-y-2">
                  {internResponsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-zinc-700 leading-relaxed">
                      <span className="shrink-0 mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#610D17]/10 text-[#610D17]">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-5">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wide mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89D4B]" />
                  Benefits:
                </h4>

                <ul className="space-y-2">
                  {internBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-zinc-700 leading-relaxed">
                      <span className="shrink-0 mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100">
              <a
                href="https://www.tinyurl.com/AMPNTSInternships"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#610D17] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#520A13] transition-all"
              >
                <span>REGISTER HERE</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ========================================================
              CARD 3: BECOME AN NTS TRAINER
          ======================================================== */}
          <div className="rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="pb-4 border-b border-zinc-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#610D17] mb-2">
                  Academic Mentorship
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                  Become an NTS Trainer
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Guide candidates, train volunteers, and orient examination center coordinators across India.
                </p>
              </div>

              <div className="mt-5">
                <ul className="space-y-3">
                  {trainerPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-zinc-700 leading-relaxed">
                      <span className="shrink-0 mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#610D17]/10 text-[#610D17]">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </div>

          {/* ========================================================
              CARD 4: BECOME AN NTS OBSERVER
          ======================================================== */}
          <div className="rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="pb-4 border-b border-zinc-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#610D17] mb-2">
                  Exam Integrity
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#610D17] tracking-tight">
                  Become an NTS Observer
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Become an AMP NTS 2026 Exam Observer &amp; ensure a smooth and fair exam experience for all Students appearing for the Exam.
                </p>
              </div>

              <div className="mt-5">
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89D4B]" />
                  Role as an Exam Observer:
                </h4>

                <ul className="space-y-3">
                  {observerPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-zinc-700 leading-relaxed">
                      <span className="shrink-0 mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#610D17]/10 text-[#610D17]">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100">
              <a
                href="https://www.tinyurl.com/AMP-Observer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#610D17] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#520A13] transition-all"
              >
                <span>REGISTER HERE</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            BANNER: BE A PART OF AMP NTS (CONTACT & COORDINATION)
        ======================================================== */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#540a13] via-[#610D17] to-[#40060d] text-white p-5 sm:p-6 lg:p-7 shadow-xl relative overflow-hidden border border-white/10">
          {/* Subtle ambient lighting */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#C89D4B]/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />

          {/* Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3.5 border-b border-white/15">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                CONNECT WITH US
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                Be a Part of the AMP National Talent Search
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-rose-100/90 leading-relaxed max-w-2xl">
                Join us and contribute to the success of AMP NTS in various roles:
              </p>
            </div>

          </div>

          {/* Cards Section */}
          <div className="relative z-10 mt-4 sm:mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
              {/* Card 1: Nasim Ma'am */}
              <div className="rounded-xl sm:rounded-2xl border border-white/20 bg-gradient-to-b from-white/[0.12] to-white/[0.05] p-3.5 sm:p-4 backdrop-blur-md shadow-md flex flex-col justify-between transition-all duration-200 hover:border-white/35 hover:from-white/[0.15]">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200 flex items-center gap-1.5">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 text-[9px]">
                        ✦
                      </span>
                      CONTACT
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.07] border border-white/10 px-3 py-1.5 sm:py-2 transition-all hover:bg-white/[0.13]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/25">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.25 2.25 0 1 1-5.25 0 2.25 2.25 0 0 1 5.25 0Z" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white">Volunteers / Observers</span>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.07] border border-white/10 px-3 py-1.5 sm:py-2 transition-all hover:bg-white/[0.13]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/25">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.48.91 2.748 2.203 3.255" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white">Interns (Degree College &amp; University Students)</span>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.07] border border-white/10 px-3.5 py-1.5 sm:py-2 transition-all hover:bg-white/[0.13]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/25">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white">AMP Team Members</span>
                    </div>
                  </div>
                </div>

                {/* Coordinator Call Bar */}
                <a
                  href="tel:+918291101319"
                  className="flex items-center justify-between gap-2.5 rounded-xl border border-white/20 bg-white/15 px-3 py-2 sm:py-2.5 transition-all hover:bg-white/25 hover:border-amber-300/60 group shadow-xs mt-auto"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-[#610D17] font-black group-hover:scale-105 transition-transform shadow-xs">
                      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold text-rose-200 leading-tight">Ms. Nasim Ma&apos;am</span>
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors leading-tight">+91 82911 01319</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-md border border-white/15 group-hover:bg-amber-400 group-hover:text-[#610D17] transition-all">
                    Call
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Card 2: Ms. Zainab Batool */}
              <div className="rounded-xl sm:rounded-2xl border border-white/20 bg-gradient-to-b from-white/[0.12] to-white/[0.05] p-3.5 sm:p-4 backdrop-blur-md shadow-md flex flex-col justify-between transition-all duration-200 hover:border-white/35 hover:from-white/[0.15]">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200 flex items-center gap-1.5">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 text-[9px]">
                        ✦
                      </span>
                      CONTACT
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.07] border border-white/10 px-3 py-1.5 sm:py-2 transition-all hover:bg-white/[0.13]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/25">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white">Trainers</span>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.07] border border-white/10 px-3.5 py-1.5 sm:py-2 transition-all hover:bg-white/[0.13]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/25">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white">Invigilators</span>
                    </div>
                  </div>
                </div>

                {/* Coordinator Call Bar */}
                <a
                  href="tel:+918291101316"
                  className="flex items-center justify-between gap-2.5 rounded-xl border border-white/20 bg-white/15 px-3 py-2 sm:py-2.5 transition-all hover:bg-white/25 hover:border-amber-300/60 group shadow-xs mt-auto"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-[#610D17] font-black group-hover:scale-105 transition-transform shadow-xs">
                      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold text-rose-200 leading-tight">Ms. Zainab Batool</span>
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors leading-tight">+91 82911 01316</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-md border border-white/15 group-hover:bg-amber-400 group-hover:text-[#610D17] transition-all">
                    Call
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
