import React from "react";
import { AccordionItem } from "@/components/common/Accordion";
import Button from "@/components/common/Button";

export interface FaqCategory {
  id: string;
  name: string;
  shortName: string;
  count: number;
  description: string;
  items: AccordionItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "general",
    name: "General Questions",
    shortName: "General",
    count: 5,
    description: "Overview, background, schedule, and participation scale of AMP NTS 2026.",
    items: [
      {
        id: "gen-1",
        title: "1. What is AMP National Talent Search (NTS)?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            AMP NTS is a nationwide talent search competition launched by the{" "}
            <strong>Association of Muslim Professionals (AMP)</strong> in November 2020 to enhance
            students&apos; general awareness and foster healthy competition. Over the past six
            years, more than <strong>3.5 lakh students from 400+ districts</strong> across India have
            participated, making it one of the largest talent search competitions in the country.
          </p>
        ),
      },
      {
        id: "gen-2",
        title: "2. When is AMP NTS 2026 scheduled?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            AMP NTS 2026 is scheduled to be conducted in offline physical mode on{" "}
            <strong className="text-[#610D17]">5th December 2026</strong> across verified exam centres
            nationwide. Registration opens on <strong>20th September 2026</strong> and closes on{" "}
            <strong>22nd November 2026</strong>. Results will be announced on{" "}
            <strong>26th January 2027</strong> followed by counselling from <strong>27th January to 3rd February 2027</strong>.
          </p>
        ),
      },
      {
        id: "gen-3",
        title: "3. Who can participate in AMP NTS 2026?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-3">
            Students from all education boards (CBSE, ICSE, State Boards), universities, and Madarsa
            systems across India can participate across three distinct categories:
          </p>
        ),
        points: [
          "School Students (Classes 8th, 9th & 10th)",
          "Junior College Students (Classes 11th & 12th)",
          "Senior / Degree College Students (Undergraduates)",
        ],
      },
      {
        id: "gen-4",
        title: "4. Is AMP NTS 2026 conducted online or offline?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            AMP NTS 2026 will be conducted <strong>only in Offline/Physical mode</strong> this year.
            There will be <strong>no online exam option</strong> for NTS 2026. Students must attend
            their designated physical exam centre.
          </p>
        ),
      },
      {
        id: "gen-5",
        title: "5. How big is AMP NTS 2026 expected to be?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            Over <strong>2 lakh students</strong> from <strong>20,000+ schools and colleges</strong>{" "}
            are expected to participate, with exams conducted at{" "}
            <strong>1,200+ to 1,500+ verified exam centres</strong> spanning 600+ districts and
            1,200 blocks throughout India.
          </p>
        ),
      },
    ],
  },
  {
    id: "eligibility",
    name: "Eligibility Criteria",
    shortName: "Eligibility",
    count: 7,
    description: "Age criteria, classes, NIOS, Diploma/ITI, and citizenship requirements.",
    items: [
      {
        id: "elig-6",
        title: "6. Who is eligible for the School category?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-2">
            Students currently enrolled in Classes 8th, 9th, or 10th at recognized schools or
            madrasas are eligible, with age alignment:
          </p>
        ),
        points: [
          "Class 8th: 13 years",
          "Class 9th: 14 years",
          "Class 10th: 15 years",
        ],
      },
      {
        id: "elig-7",
        title: "7. Who is eligible for the Junior / Senior College categories?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            Students enrolled in junior college (Classes 11th & 12th / Intermediate / PU) or degree
            college (any undergraduate bachelor stream) during the{" "}
            <strong>2026–2027 academic year</strong> are eligible.
          </p>
        ),
      },
      {
        id: "elig-8",
        title: "8. Are Diploma and ITI students eligible?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-2">
            <strong>Yes.</strong> Diploma and ITI students are eligible under corresponding age bands:
          </p>
        ),
        points: [
          "Ages 15–17: Qualify under the Junior College category",
          "Ages 17–21: Qualify under the Senior / Degree College category",
        ],
      },
      {
        id: "elig-9",
        title: "9. Can NIOS students participate?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-2">
            <strong>Yes.</strong> NIOS (National Institute of Open Schooling) students are fully
            welcome:
          </p>
        ),
        points: [
          "Secondary (Class 10th) takes the School-level examination",
          "Senior Secondary (Class 12th) takes the Junior College-level examination",
        ],
      },
      {
        id: "elig-10",
        title: "10. Are non-Indian citizens or students studying abroad eligible?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            <strong>No.</strong> Only Indian citizens studying within India are eligible to
            participate in AMP NTS 2026.
          </p>
        ),
      },
      {
        id: "elig-11",
        title: "11. What is the cutoff date for age criteria?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            All age criteria calculations are strictly based on the cutoff date of{" "}
            <strong className="text-[#610D17]">September 20, 2026</strong>.
          </p>
        ),
      },
      {
        id: "elig-12",
        title: "12. What documents will winners need to provide?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-2">
            Winning students must submit valid identification and student status proofs during
            verification before receiving cash prizes or scholarship disbursements:
          </p>
        ),
        points: [
          "Current Student ID card or Institutional Bonafide Certificate",
          "Government photo ID (Aadhaar card, etc.)",
          "Academic marksheets / proof of age (DOB certificate)",
        ],
      },
    ],
  },
  {
    id: "format",
    name: "Exam Format & Guidelines",
    shortName: "Exam Format",
    count: 5,
    description: "Duration, question count, marking rules, timings, and exam center selection.",
    items: [
      {
        id: "fmt-13",
        title: "13. What is the duration and format of the exam?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            The exam is <strong>90 minutes</strong> (1.5 hours) in duration and consists of{" "}
            <strong>100 Multiple-Choice Questions (MCQs)</strong> designed to evaluate core aptitude
            and knowledge.
          </p>
        ),
      },
      {
        id: "fmt-14",
        title: "14. Is there negative marking?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            <strong>No, there is no negative marking</strong> for incorrect answers. There is no
            penalty for guessing, and students are strongly encouraged to attempt all 100 questions.
          </p>
        ),
      },
      {
        id: "fmt-15",
        title: "15. Will all categories have their exam on the same day?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            <strong>Yes.</strong> The examinations for all three categories (School, Junior College,
            and Senior/Degree College) will be conducted on the{" "}
            <strong>same scheduled date and at the same time</strong> across all exam centres in
            India.
          </p>
        ),
      },
      {
        id: "fmt-16",
        title: "16. Can I choose my exam centre?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            <strong>Yes.</strong> During registration, candidates can pick their preferred physical
            exam centre from the verified list of partner schools and colleges in their district/taluka.
          </p>
        ),
      },
      {
        id: "fmt-17",
        title: "17. Can I get an extra attempt if I miss my exam?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            <strong>No.</strong> No re-tests or extra attempts are permitted under any
            circumstances. Candidates must appear in person during their designated slot.
          </p>
        ),
      },
    ],
  },
  {
    id: "syllabus",
    name: "Syllabus & Exam Pattern",
    shortName: "Syllabus & Pattern",
    count: 4,
    description: "NTSE alignment, college competitive benchmarks, 5 core sections, and syllabus link.",
    items: [
      {
        id: "syl-18",
        title: "18. What is the exam pattern for School Students (Classes 8, 9 & 10)?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-3">
            The pattern is modeled on national talent tests like <strong>NTSE (by NCERT)</strong>{" "}
            and includes two balanced components:
          </p>
        ),
        points: [
          "MAT (Mental Ability Test) – Analytical reasoning and problem-solving (common across classes)",
          "SAT (Scholastic Aptitude Test) – Subject knowledge aligned with school curriculum",
          "Separate, class-specific question papers are set for Class 8, Class 9, and Class 10.",
        ],
      },
      {
        id: "syl-19",
        title: "19. What is the exam pattern for College Students (Junior & Senior / Degree)?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              The pattern is benchmarked against top competitive and entrance examinations,
              including: <strong>UPSC CSAT, CAT, CUET, GRE, GMAT, GATE (General Aptitude), SSC CGL</strong>,
              and major corporate campus placement aptitude tests (TCS, Infosys, Wipro, etc.).
            </p>
            <p>
              It rigorously assesses analytical aptitude, logical reasoning, verbal comprehension,
              and contemporary awareness. Dedicated separate question papers are administered for{" "}
              <strong>Junior/Intermediate College</strong> and <strong>Senior/Degree College</strong>.
            </p>
          </div>
        ),
      },
      {
        id: "syl-20",
        title: "20. What sections are in the College-level exam?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-3">
            Each college-level question paper consists of <strong>5 distinct sections</strong> with{" "}
            <strong>20 questions each</strong> (total 100 MCQs):
          </p>
        ),
        points: [
          "Section 1: Quantitative Analysis (20 Questions)",
          "Section 2: Data Interpretation & Logical Reasoning (20 Questions)",
          "Section 3: Vocabulary & Reading Comprehension (20 Questions)",
          "Section 4: Current Affairs (20 Questions)",
          "Section 5: General Knowledge & Islamic Studies / Deeniyat (20 Questions)",
        ],
      },
      {
        id: "syl-21",
        title: "21. Where can I find the detailed syllabus?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              You can access the official comprehensive syllabus document directly online:
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                variant="primary"
                size="sm"
                href="http://www.tinyurl.com/NTS-Syllabus-25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Detailed Syllabus (PDF)</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="/About_NTS"
              >
                <span>View Syllabus Breakdown Page</span>
                <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "scholarships",
    name: "Scholarships & Rewards",
    shortName: "Scholarships & Rewards",
    count: 7,
    description: "₹10 Cr+ coaching scholarships, cash prizes, merit e-certificates, and IndiaZakat aid.",
    items: [
      {
        id: "rew-22",
        title: "22. What scholarships are available for top performers?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Scholarships worth <strong>over ₹10 Crore</strong> are made available for the{" "}
              <strong>top 5,000+ rankers</strong> through AMP&apos;s 50+ national coaching partners:
            </p>
            <ul className="space-y-2.5 text-sm sm:text-base text-zinc-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span><strong>Top 1,500+ performers:</strong> 75% to 100% full tuition scholarships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span><strong>Next 2,500+ performers:</strong> 50% to 75% partial fee waivers</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-zinc-500 italic">
              These apply to premier coaching programs for NEET, IIT-JEE, CLAT, CUET, and other
              prestigious competitive exam courses offered by AMP&apos;s partner coaching institutes.
            </p>
          </div>
        ),
      },
      {
        id: "rew-23",
        title: "23. Do I need to do anything else to claim a scholarship?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            Shortlisted students may need to appear for an offline assessment, interview, and/or
            counselling conducted by AMP and its coaching partners. Final allocation follows standard
            transparent counselling models benchmarked to national admission protocols (e.g., NEET
            counselling).
          </p>
        ),
      },
      {
        id: "rew-24",
        title: "24. What do the scholarships cover?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            Scholarships are offered exclusively by AMP&apos;s training partners as a fee waiver on
            their regular annual tuition structure. They apply to{" "}
            <strong>tuition fees only</strong> and may or may not include boarding or residential
            facilities depending on individual institute terms.
          </p>
        ),
      },
      {
        id: "rew-25",
        title: "25. What cash prizes are on offer?",
        content: (
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              Substantial national cash awards are distributed across <strong>each category</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
              <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-3 text-center">
                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">1st Position</div>
                <div className="text-xl font-black text-zinc-900 mt-0.5">₹30,000</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center">
                <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">2nd Position</div>
                <div className="text-xl font-black text-zinc-900 mt-0.5">₹20,000</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center">
                <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">3rd Position</div>
                <div className="text-xl font-black text-zinc-900 mt-0.5">₹10,000</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center">
                <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">4th–10th Position</div>
                <div className="text-lg font-bold text-zinc-900 mt-0.5">₹2,000 each</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center">
                <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">11th–50th Position</div>
                <div className="text-lg font-bold text-zinc-900 mt-0.5">₹1,000 each</div>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center">
                <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Each State Topper</div>
                <div className="text-lg font-bold text-zinc-900 mt-0.5">₹1,000 each</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "rew-26",
        title: "26. What certificates will I receive?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-3">
            Every participant receives official digital recognition according to performance tier:
          </p>
        ),
        points: [
          "Special e-Certificates for Top 50 National-level Winners (per category)",
          "E-Certificates of Merit for Top 1%, 2%, 5%, 10%, and 20% nationally (per category)",
          "E-Certificates for Top 10 State-level Winners (per category)",
          "E-Certificates of Merit for Top 1% in the States (per category)",
          "E-Certificates of Participation for all appearing candidates",
        ],
      },
      {
        id: "rew-27",
        title: "27. Is there financial assistance for needy students?",
        content: (
          <div className="space-y-2 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              <strong>Yes.</strong> The <strong>top 500 deserving students</strong> across all
              categories will receive direct financial assistance of <strong>₹10,000 or more</strong>{" "}
              through AMP&apos;s crowdfunding platform, <strong>IndiaZakat.com</strong>.
            </p>
            <p className="text-zinc-600">
              Eligibility requires an annual family income below ₹2,00,000. AMP will personally guide
              shortlisted eligible students through the quick application process.
            </p>
          </div>
        ),
      },
      {
        id: "rew-28",
        title: "28. What other benefits do participants get?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-3">
            Beyond scholarships and prizes, all NTS participants gain priority access to AMP&apos;s
            broader student empowerment ecosystem:
          </p>
        ),
        points: [
          "Employability Training Programs (ETPs) & soft skill workshops",
          "Job Fairs & Campus Placements via AMPowerJobs.com",
          "Skill-Based & Job-Oriented Training Programs",
          "Scholarship Guidance & Application Support (including international scholarships)",
          "Higher Education Financial Aid via IndiaZakat.com",
          "Internship Opportunities with leading organizations",
          "One-on-One Mentorship through AMP's Career Guidance Cell & Industry Connect",
        ],
      },
    ],
  },
  {
    id: "registration",
    name: "Registration & Updates",
    shortName: "Registration & Help",
    count: 5,
    description: "How to register, official channels, category helplines, daily live meet, and guidelines.",
    items: [
      {
        id: "reg-29",
        title: "29. How do I register for NTS 2026?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            Students can register <strong>individually</strong> through the online registration portal
            or through their respective <strong>schools, junior colleges, or degree colleges</strong>{" "}
            that have enrolled as partner institutions.
          </p>
        ),
      },
      {
        id: "reg-30",
        title: "30. Where will updates and announcements be shared?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              All official schedules, admit card notifications, and exam notices are published on:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.ampindia.org/national_talent_search"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#610D17] font-semibold underline underline-offset-4 hover:text-[#4B0A12]"
              >
                ampindia.org/national_talent_search
              </a>
              <span className="text-zinc-300">|</span>
              <a
                href="http://www.ampworld.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#610D17] font-semibold underline underline-offset-4 hover:text-[#4B0A12]"
              >
                ampworld.in
              </a>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500">
              Registered candidates will also receive alerts directly on their registered mobile number,
              WhatsApp, and email ID.
            </p>
          </div>
        ),
      },
      {
        id: "reg-31",
        title: "31. Is there a helpline for questions about registration or the exam?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
              <div className="font-bold text-zinc-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Daily Live Helpline Session (Mon–Sat, 5:00 PM – 6:00 PM IST)
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 mb-2.5">
                Join our daily live meet session to get real-time answers directly from the national organizing committee.
              </p>
              <Button
                variant="primary"
                size="sm"
                href="https://tinyurl.com/HelplineAMPNTS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Join Daily Live Meet</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            </div>

            <div>
              <p className="font-semibold text-zinc-900 mb-2">
                Direct Category Helpline Numbers (11:00 AM – 7:00 PM IST — WhatsApp preferred):
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
                  <span className="text-zinc-600">School Students (8th, 9th & 10th):</span>
                  <a href="https://wa.me/918657506907" target="_blank" rel="noopener noreferrer" className="font-bold text-[#610D17] hover:underline">
                    +91 86575 06907
                  </a>
                </li>
                <li className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
                  <span className="text-zinc-600">Junior College (11th & 12th):</span>
                  <a href="https://wa.me/918657506909" target="_blank" rel="noopener noreferrer" className="font-bold text-[#610D17] hover:underline">
                    +91 86575 06909
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-600">Senior/Degree College (Undergraduate):</span>
                  <a href="https://wa.me/918657003085" target="_blank" rel="noopener noreferrer" className="font-bold text-[#610D17] hover:underline">
                    +91 86570 03085
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "reg-32",
        title: "32. Who do I contact for other clarifications?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            For written queries or institutional inquiries, contact the central NTS Helpdesk at{" "}
            <a
              href="mailto:nts@ampindia.org"
              className="font-bold text-[#610D17] underline hover:text-[#4B0A12]"
            >
              nts@ampindia.org
            </a>
            . Response time is typically within 24 to 48 hours.
          </p>
        ),
      },
      {
        id: "reg-33",
        title: "33. Where can I read the detailed guidelines?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Download the official comprehensive NTS 2026 handbook covering full regulations and
              instructions:
            </p>
            <Button
              variant="primary"
              size="sm"
              href="http://www.tinyurl.com/AllNTSDocument"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View All NTS Guidelines (PDF)</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </div>
        ),
      },
    ],
  },
  {
    id: "institutions",
    name: "For Institutions, Partners & Volunteers",
    shortName: "Institutions & Partners",
    count: 7,
    description: "School/college partnerships, exam center hosting, mobilization, volunteering, and sponsorships.",
    items: [
      {
        id: "inst-34",
        title: "34. How can my school/college register as an Institution Partner?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Download the <strong>AMP World Mobile App</strong> from the Google Play Store, sign up,
              log in, and navigate to the <strong>Institution Registration</strong> form to submit
              your school or college details.
            </p>
            <Button
              variant="primary"
              size="sm"
              href="http://www.tinyurl.com/AMPWorldApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download AMP World App</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </div>
        ),
      },
      {
        id: "inst-35",
        title: "35. What benefits do registered institutions receive?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-3">
            Registered educational institutions gain institutional prestige, national recognition,
            and continuous student development resources:
          </p>
        ),
        points: [
          "Official Memorandum of Understanding (MoU) from AMP upon registration and verification",
          "Best Performance Award: Certificate of Excellence for the Top 100 performing institutions that enroll 100+ students",
          "Best Participation Award: Certificate of Appreciation for institutions enrolling 100+ students",
          "Appreciation Award: Certificate of Participation for institutions enrolling 20+ students",
          "Priority educational updates via AMP WhatsApp groups and the AMP World App",
        ],
      },
      {
        id: "inst-36",
        title: "36. How can my institution become an Exam Centre?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              You can partner with AMP as an Exam Centre for your block or taluka. Responsibilities
              include hosting the physical exam, promoting NTS 2026 locally, encouraging neighboring
              schools to participate, and facilitating student logistics.
            </p>
            <Button
              variant="primary"
              size="sm"
              href="http://www.tinyurl.com/NTSExamCenter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Apply as Exam Centre (Details & Form)</span>
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        ),
      },
      {
        id: "inst-37",
        title: "37. How can NGOs / institutions become a Mobilization Partner?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              NGOs, trusts, and community foundations can collaborate as Mobilization Partners to
              spread awareness in rural and underserved districts, assist in student registrations,
              and connect local educators.
            </p>
            <Button
              variant="primary"
              size="sm"
              href="http://www.tinyurl.com/AMPNGOConnect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Register on AMP NGO Connect</span>
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        ),
      },
      {
        id: "inst-38",
        title: "38. How can I become an NTS Volunteer?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Volunteers champion NTS in their localities by visiting schools, assisting students with
              registration, and coordinating examination day logistics alongside local chapter leaders.
            </p>
            <Button
              variant="primary"
              size="sm"
              href="http://www.tinyurl.com/AMPNTSVolunteer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Volunteer Registration Form</span>
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        ),
      },
      {
        id: "inst-39",
        title: "39. How can I become an NTS Exam Observer?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Senior educators, professionals, and community leaders can serve as independent Exam
              Observers to uphold exam integrity, verify question seal verification, and oversee
              fair conduct at assigned test centres.
            </p>
            <Button
              variant="primary"
              size="sm"
              href="http://www.tinyurl.com/AMP-Observer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Register as Exam Observer</span>
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        ),
      },
      {
        id: "inst-40",
        title: "40. How can organizations become a sponsor?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              AMP NTS 2026 offers sponsors unparalleled nationwide visibility reaching{" "}
              <strong>5 lakh+ students and young professionals</strong>, 20,000+ educational institutions,
              1.5 lakh+ social media followers, 200+ AMP city chapters, and 10,000+ NGO partners.
            </p>
            <p className="text-xs sm:text-sm text-zinc-600">
              Sponsorship tiers include Title Sponsor, Co-Sponsor, and Category Partner with prominent
              presence across press, national awards ceremonies, and print/digital examination collaterals.
            </p>
            <div className="pt-1">
              <Button
                variant="primary"
                size="sm"
                href="mailto:nts@ampindia.org?subject=AMP%20NTS%202026%20Sponsorship%20Inquiry"
              >
                <span>Inquire About Sponsorship (nts@ampindia.org)</span>
                <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>
        ),
      },
    ],
  },
];
