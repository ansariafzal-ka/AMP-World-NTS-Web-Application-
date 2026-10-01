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
    <section id="participate" className="py-14 sm:py-18 lg:py-22 bg-zinc-50/70 border-b border-zinc-200/80 scroll-mt-24 sm:scroll-mt-28">
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
            As an individual, contribute to the National Talent Search by joining AMP NTS in one of the following roles:
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

            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-col gap-3.5">
              <p className="text-xs sm:text-[13px] text-zinc-600">
                For further queries please contact:{" "}
                <a
                  href="tel:+918291101316"
                  className="font-bold text-[#610D17] hover:underline"
                >
                  +91 8291101316
                </a>
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
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

            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs text-zinc-500 font-medium">For further queries please contact</p>
                <p className="text-sm font-bold text-zinc-900 mt-0.5">Coordinator Helpdesk</p>
              </div>

              <a
                href="tel:+918291101316"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#610D17] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#520A13] transition-all whitespace-nowrap self-start sm:self-auto"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                </svg>
                <span>MS. ZAINAB BATOOL</span>
              </a>
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

      </div>
    </section>
  );
}
