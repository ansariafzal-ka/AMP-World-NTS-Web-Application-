"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/common/Accordion";

const NTSAtAGlance = () => {
  const accordionItems: AccordionItem[] = [
    {
      id: "highlights",
      title: "Highlights",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ),
      points: [
        "India’s biggest talent search for School, Junior & Senior College Students",
        "2 lakh+ students from 20,000+ Schools & Colleges across India to participate",
        "Exams will be conducted in 1,200+ Exam Centers in 1,200 Blocks of 600+ Districts of India",
        "Scholarships worth ₹10 Crores+ for top 5,000+ Rankers by 50+ Training Partners!",
        "Cash Awards, Academic Scholarships, E-Certificates, and many more benefits",
        "Access to AMP’s Career Guidance, Skill Development & Empowerment programs",
        "Winners will be featured across AMP’s national platforms and media coverage",
        "Education Support for students from underprivileged backgrounds",
      ],
    },
    {
      id: "objectives",
      title: "Objectives of the Competition",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      ),
      points: [
        "To create awareness and enhance the competitive spirit",
        "To test their general knowledge and competitive readiness",
        "To make students aware of their strengths and weaknesses",
        "To prepare Students for IIT-JEE, NEET, UPSC, CAT, CUET, CLAT, NDA, CDS & other competitive exams",
        "To get recognition nationally among universities, colleges, schools, and other institutions",
        "To provide parents and teachers a benchmark to work with",
        "To help the participating students with resources, mentorship & future opportunities in other AMP projects",
        "To give students a firsthand experience of competitive exams, the NTS test papers are crafted by distinguished academicians from around the country",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility Criteria for NTS 2026",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.999-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      points: [
        "Students currently enrolled in classes 8th, 9th, or 10th at schools or madrasas (age alignment: 13 years with class 8th, 14 years with class 9th, and 15 years with class 10th).",
        "Students enrolled in junior (11th & 12th) or degree college during the academic year 2026–2027.",
        "Diploma and ITI students aged 15–17 qualify under the junior college category; those aged 17–21 qualify under the senior college category.",
        "NIOS students take the school-level exam for secondary (class 10th) and the junior college-level exam for senior secondary.",
        "Only Indian citizens studying in India are eligible.",
        "All age criteria are based on cutoff date of September 20, 2026.",
        "Note: Winning students must provide valid identity and eligibility documents.",
      ],
    },
    {
      id: "exam-mode",
      title: "Exam Mode",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      points: [
        "The AMP National Talent Search 2026 will be conducted only in Offline/Physical Mode.",
        "The exam will have a duration of 90 minutes.",
        "The question paper will consist of 100 multiple-choice questions (MCQs).",
        "Marks will be awarded for each correct answer. There is no negative marking for incorrect answers.",
        "The exam will be conducted at 1,500+ Exam Centres across 600+ districts in India. During registration, candidates can select their preferred Exam Centre.",
        "Note: This year there will be No Online Exam for NTS 2026. Exams for all categories will be held on the same day, same time.",
      ],
    },
    {
      id: "benefits-rewards",
      title: "Benefits and Rewards",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.657 1.343 3 3 3h4.5" />
        </svg>
      ),
      points: [
        "Scholarships Worth ₹10 Crore+ for Top 5,000+ Students!",
        "The top 1,500+ performers in AMP NTS 2026 will be eligible for 100% to 75% scholarships.",
        "An additional 2,500+ high-performing students will receive partial scholarships of 75% to 50%.",
        "Scholarships provided for coaching programs (NEET, IIT-JEE, CLAT, etc.) by AMP partner institutes.",
        "Shortlisted students may appear for an offline test, interview, or counselling by AMP and its partners.",
        "Scholarships are offered exclusively by training partners as fee waivers on annual tuition fees.",
        "Scholarships apply to tuition fees only and may or may not include residential facilities.",
      ],
    },
    {
      id: "cash-prizes",
      title: "Cash Prizes worth Rs. 5 Lakh+!",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      points: [
        "Cash Awards for Top Performers across all student categories",
        "₹30,000 for 1st position winners in each category",
        "₹20,000 for 2nd position winners in each category",
        "₹10,000 for 3rd position winners in each category",
        "₹2,000 each for 4th to 10th position winners",
        "₹1,000 each for 11th to 50th position winners",
        "₹1,000 for each State Topper (in each category)",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#610D17]/[0.03] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-[#610D17]/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl uppercase">
            NTS 2026 AT A GLANCE
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-700 max-w-3xl mx-auto">
            The <span className="font-semibold text-[#610D17]">Association of Muslim Professionals (AMP)</span> established
            the <span className="font-semibold text-zinc-950">National Talent Search (NTS)</span> to bridge the gap
            between academic learning and competitive success. By offering students early exposure to standard testing
            environments, NTS helps them assess their readiness, recognize their academic potential, and access
            opportunities for higher education and career development.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion
            items={accordionItems}
            columns={1}
            defaultOpenIds={[]}
          />
        </div>
      </div>
    </section>
  );
};

export default NTSAtAGlance;
