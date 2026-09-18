import React from "react";
import { AccordionItem } from "@/components/common/Accordion";

export interface FaqCategory {
  id: string;
  name: string;
  shortName: string;
  count: number;
  description: string;
  items: AccordionItem[];
}

const linkClass =
  "font-semibold text-[#610D17] underline decoration-[#610D17]/40 underline-offset-2 hover:text-[#420A11] hover:decoration-[#610D17] transition-colors";

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "overview",
    name: "1. Overview & Eligibility",
    shortName: "Overview & Eligibility",
    count: 6,
    description: "About AMP, NTS overview, exam date, physical mode, eligibility criteria, and exam languages.",
    items: [
      {
        id: "faq-1",
        title: "1. What is AMP?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              The Association of Muslim Professionals (AMP) is a non-profit organization working for over 18 years in:
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Education Support</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Employment Assistance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Economic Empowerment</span>
              </li>
            </ul>
            <p>
              AMP helps uplift communities by providing guidance, resources, and opportunities.
            </p>
            <p className="pt-1">
              Website:{" "}
              <a
                href="https://www.ampindia.org/What_is_AMP"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                www.ampindia.org/What_is_AMP
              </a>
            </p>
          </div>
        ),
      },
      {
        id: "faq-2",
        title: "2. What is NTS?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              The AMP National Talent Search (NTS) is a national-level competition designed to:
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Promote general awareness and competitive spirit</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Identify academically talented students from schools and colleges across India</span>
              </li>
            </ul>
            <p className="pt-1">
              Details:{" "}
              <a
                href="https://www.ampindia.org/national_talent_search"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                www.ampindia.org/national_talent_search
              </a>
            </p>
          </div>
        ),
      },
      {
        id: "faq-3",
        title: "3. When will the exam be held?",
        points: [
          <span><strong>Date:</strong> 5th December 2026</span>,
          <span><strong>Duration:</strong> 90 minutes</span>,
          <span><strong>Exam Start Time:</strong> 11:00 AM</span>,
        ],
      },
      {
        id: "faq-4",
        title: "4. How will the exam be conducted?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            Offline (physical) mode at 1500+ centers in 600+ districts across India.
          </p>
        ),
      },
      {
        id: "faq-5",
        title: "5. Who can participate in NTS 2026?",
        points: [
          "School students: Classes 8, 9, 10",
          "Junior College students: Classes 11 & 12",
          "Senior/Degree College students: 1st–4th year undergraduates",
          "Madrasa students: Aged 13–15 (equivalent to Classes 8–10)",
          "Diploma, ITI, and NIOS students: Aged 13–21",
          "Only Indian citizens studying in India; age as on 2nd October 2026",
        ],
      },
      {
        id: "faq-6",
        title: "6. In which languages will the exam be conducted?",
        points: [
          <span><strong>School-level:</strong> English, Hindi, Urdu, Gujarati, Bengali</span>,
          <span><strong>Junior &amp; Senior College:</strong> English only</span>,
        ],
      },
    ],
  },
  {
    id: "registration",
    name: "2. Registration & Preparation",
    shortName: "Registration & Prep",
    count: 8,
    description: "Free participation, online/app/bulk registration, mobile number policy, edit window, syllabus, and book list.",
    items: [
      {
        id: "faq-7",
        title: "7. Is there any registration or exam fee?",
        points: ["No, participation is completely free"],
      },
      {
        id: "faq-8",
        title: "8. How can students register for NTS 2026?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <p className="font-bold text-zinc-900">1: AMP World Website</p>
              <p>
                <a
                  href="https://ampworld.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  www.ampworld.in
                </a>
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <p className="font-bold text-zinc-900">2: AMP World Mobile App</p>
              <p>
                <a
                  href="https://www.tinyurl.com/AMPWorldApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Download Here
                </a>
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-3">
              <p className="font-bold text-zinc-900">3: Bulk Registration through your School/College</p>
              <p className="font-semibold text-zinc-800">Bulk Registration Steps:</p>

              <div className="space-y-2 text-sm pl-1">
                <div>
                  <p className="font-semibold text-zinc-900">A. Fill Student Details in Excel Template</p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2">
                    <li>Use the template provided by AMP NTS</li>
                    <li>Fill all fields accurately for each student</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">B. Provide SPOC (Single Point of Contact) Details</p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2">
                    <li>Name, Email ID, Phone Number</li>
                    <li>SPOC will handle communication between students and AMP NTS</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">C. Send Complete Information</p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2">
                    <li>
                      Email the filled details to{" "}
                      <a href="mailto:nts@ampindia.org" className={linkClass}>
                        nts@ampindia.org
                      </a>
                    </li>
                    <li>
                      For any assistance:{" "}
                      <a href="tel:8657003081" className={linkClass}>
                        8657003081
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "faq-9",
        title: "9. Can multiple students register using the same mobile number?",
        points: ["Yes. Instructions are provided in the “Instructions” tab of the AMP World App"],
      },
      {
        id: "faq-10",
        title: "10. Can I edit my registration details?",
        points: [
          "Editing allowed until 25th November 2026",
          "A separate edit form will be provided for corrections between 26th–30th November",
        ],
      },
      {
        id: "faq-11",
        title: "11. What is the syllabus for the exam?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <h4 className="font-bold text-zinc-900">School Students (Classes 8–10):</h4>
              <div className="space-y-2 text-sm pl-1">
                <div>
                  <p className="font-semibold text-zinc-800">Mental Ability Test (MAT):</p>
                  <ul className="list-disc list-inside text-zinc-600 pl-2">
                    <li>Verbal &amp; Non-Verbal Reasoning (50 questions)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-zinc-800">Scholastic Aptitude Test (SAT):</p>
                  <ul className="list-disc list-inside text-zinc-600 pl-2">
                    <li>English, Mathematics, Science, Social Science, GK &amp; Current Affairs (50 questions)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <h4 className="font-bold text-zinc-900">Junior &amp; Senior College Students:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 pl-2">
                <li>Quantitative Analysis</li>
                <li>Data Interpretation &amp; Logical Reasoning</li>
                <li>Vocabulary &amp; Reading Comprehension</li>
                <li>Current Affairs</li>
                <li>General Knowledge</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "faq-12",
        title: "12. What books are recommended for school students?",
        points: [
          <span><strong>MAT:</strong> R.S. Aggarwal, McGraw Hill, Arihant Objective Reasoning</span>,
          <span><strong>Mathematics:</strong> NCERT, R.D. Sharma, Pearson NTSE Mathematics</span>,
          <span><strong>Science:</strong> NCERT, Lakhmir Singh, H.C. Verma (Vol I &amp; II)</span>,
          <span><strong>Social Science:</strong> NCERT, Arihant Guide</span>,
          <span><strong>English:</strong> Wren &amp; Martin, Norman Lewis, S.P. Bakshi</span>,
          <span><strong>GK &amp; Current Affairs:</strong> Manorama Yearbook, Lucent, Pratiyogita Darpan</span>,
        ],
      },
      {
        id: "faq-13",
        title: "13. What books are recommended for college students?",
        points: [
          <span><strong>Quantitative Analysis:</strong> R.S. Aggarwal, Arun Sharma</span>,
          <span><strong>Data Interpretation &amp; Reasoning:</strong> R.S. Aggarwal, M.K. Pandey</span>,
          <span><strong>Vocabulary &amp; Comprehension:</strong> Norman Lewis, S.P. Bakshi</span>,
          <span><strong>Current Affairs &amp; GK:</strong> Manorama Yearbook, CSR, Pratiyogita Darpan</span>,
          <span><strong>Islamic Studies/Deeniyat:</strong> Wahiduddin Khan, Hamidullah, Ar-Raheeq Al-Makhtum, Riyadh-us-Saliheen</span>,
        ],
      },
      {
        id: "faq-14",
        title: "14. Are mock test papers available?",
        points: [
          <span>
            Yes, via the Mock Papers section in the AMP World App (and online at{" "}
            <a href="/Mock_Papers" className={linkClass}>
              Mock Papers Page
            </a>
            )
          </span>,
        ],
      },
    ],
  },
  {
    id: "helpline-sessions",
    name: "3. Training, Helplines & Hall Tickets",
    shortName: "Training & Helplines",
    count: 5,
    description: "Daily helplines, live training sessions, parent guidance, marking policy, and hall ticket release.",
    items: [
      {
        id: "faq-15",
        title: "15. Are there helpline numbers for students?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Yes, Students can use the Daily Helpline Number (11 AM to 7 PM).
            </p>
            <p className="font-semibold text-zinc-900">Please WhatsApp before calling:</p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#610D17]" />
                <a
                  href="https://wa.me/918657506907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  8657506907
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#610D17]" />
                <a
                  href="https://wa.me/918657506909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  8657506909
                </a>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-16",
        title: "16. Is there special training sessions offered before the exam?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Yes, online guidance sessions for students (Monday–Friday), 5 PM – 6 PM IST
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Topics: Registration, App Usage, Syllabus, Preparation Tips, Rewards &amp; Benefits</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>MAT &amp; SAT Practice</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Time Management &amp; Study Strategies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Career Awareness &amp; Scholarships</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Mock Tests &amp; Question Analysis</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Motivation &amp; Growth Mindset</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>
                  Join Link:{" "}
                  <a
                    href="https://tinyurl.com/HelplineAMPNTS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Join Live Meeting
                  </a>
                </span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-17",
        title: "17. Are there sessions for parents also?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Yes, there will be online sessions for parents on 7th November 2026.
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Topics: Supporting students, understanding hall tickets &amp; OMR sheets, guiding children for best performance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Time: 5 PM – 6 PM IST</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>
                  Join Link:{" "}
                  <a
                    href="https://tinyurl.com/HelplineAMPNTS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Join Live Meeting
                  </a>
                </span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-18",
        title: "18. What is the marking scheme?",
        points: [
          "1 mark for each correct answer",
          "No negative marking",
        ],
      },
      {
        id: "faq-19",
        title: "19. How to get hall tickets?",
        points: [
          "Available from Monday, 31st November 2026",
          <span>
            AMP World Webpage:{" "}
            <a
              href="https://ampworld.in"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              www.ampworld.in
            </a>
          </span>,
          "AMP World App: “My Registration” tab",
        ],
      },
    ],
  },
  {
    id: "scholarships-prizes",
    name: "4. Scholarships, Cash Prizes & Benefits",
    shortName: "Scholarships & Prizes",
    count: 5,
    description: "₹10 Cr+ scholarships pool, rank-wise cash awards, IndiaZakat aid, and AMP student empowerment initiatives.",
    items: [
      {
        id: "faq-20",
        title: "20. What scholarships can students get?",
        points: [
          "Top 500+ students are eligible for scholarships worth over ₹10 crore.",
          "Scholarships include partial or full support for coaching fees for IIT-JEE, NEET, CLAT, and other competitive exams through AMP’s training partners.",
          <span>
            Top 200 deserving students (family income &lt; ₹2 lakh per year) will receive a merit-cum-means scholarship of at least ₹10,000 via AMP’s crowdfunding initiative,{" "}
            <a
              href="https://indiazakat.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              IndiaZakat.com
            </a>
            .
          </span>,
        ],
      },
      {
        id: "faq-21",
        title: "21. What cash prizes can a student win?",
        points: [
          <span><strong>1st Place:</strong> ₹30,000</span>,
          <span><strong>2nd Place:</strong> ₹20,000</span>,
          <span><strong>3rd Place:</strong> ₹10,000</span>,
          <span><strong>4th–10th Place:</strong> ₹2,000 each</span>,
          <span><strong>11th–50th Place:</strong> ₹1,000 each</span>,
          <span><strong>State Topper:</strong> ₹1,000 for each State Topper in every category</span>,
        ],
      },
      {
        id: "faq-22",
        title: "22. What other benefits are available to students?",
        points: [
          "Guidance for scholarship applications (national and international) through AMP’s platform.",
          "Mentorship from experts via TheIndiaMentors.com.",
          <span>
            Employment support through{" "}
            <a
              href="https://ampowerjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              AMPowerJobs.com
            </a>
            , including resume assistance, skills &amp; employability training.
          </span>,
          "Access to multiple educational and career support programs, including training, internships, and workshops.",
        ],
      },
      {
        id: "faq-23",
        title: "23. What are the additional benefits for students?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Following Initiatives by AMP are strongly focused on Students’ Higher Education &amp; Professional Training. All participating students will be invited to participate in the following flagship programs conducted by AMP:
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Employability Training Programs (ETPs)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Employment assistance through Job Fairs &amp; Campus Placement Programs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Skill Training Programs (Job Oriented Training)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Scholarship Guidance and Assistance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>International Scholarship Guidance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Financial Assistance for Higher Education</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Internship Programs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Students’ Mentorship by Industry Experts</span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-24",
        title: "24. How can I know that I am eligible for a Cash Prize?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            All information about NTS 2026 results and all other related communication will be made through the AMP World mobile app. Please check the ‘Alert’ tab for any updates.
          </p>
        ),
      },
    ],
  },
  {
    id: "support-partners",
    name: "5. Support, Partners & Updates",
    shortName: "Support & Partners",
    count: 3,
    description: "Technical issue resolution, institution & volunteer engagement, and official updates.",
    items: [
      {
        id: "faq-25",
        title: "25. What should a student do if they face technical issues during registration or accessing the app?",
        points: [
          <span>
            Contact the NTS support team via helpline or email:{" "}
            <a href="mailto:nts@ampindia.org" className={linkClass}>
              nts@ampindia.org
            </a>
          </span>,
          "Detailed instructions available in the “Help” section of the AMP World App",
        ],
      },
      {
        id: "faq-26",
        title: "26. How can institutions or individuals become partners or volunteers?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Individuals can support us by helping us to Establish Exam Centers in their Districts and Blocks, Promote NTS 2026 &amp; Become Exam Observers.
            </p>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>
                  NGOs/Institutions:{" "}
                  <a
                    href="https://www.tinyurl.com/AMPNGOConnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    www.tinyurl.com/AMPNGOConnect
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>
                  Volunteers:{" "}
                  <a
                    href="https://www.tinyurl.com/AMPNTSVolunteer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    www.tinyurl.com/AMPNTSVolunteer
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>
                  Exam Observers:{" "}
                  <a
                    href="https://www.tinyurl.com/AMP-Observer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    www.tinyurl.com/AMP-Observer
                  </a>
                </span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-27",
        title: "27. Where to find official updates?",
        points: [
          <span>
            AMP NTS Website:{" "}
            <a
              href="https://www.ampindia.org/national_talent_search"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              www.ampindia.org/national_talent_search
            </a>
          </span>,
          <span>
            AMP World App:{" "}
            <a
              href="https://www.tinyurl.com/AMPWorldApp"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              https://www.tinyurl.com/AMPWorldApp
            </a>
          </span>,
          "WhatsApp & Email alerts via registered contact details",
        ],
      },
    ],
  },
  {
    id: "scholarship-selection",
    name: "6. Scholarship Selection & Admission",
    shortName: "Scholarship Process",
    count: 5,
    description: "4-round selection timeline, partner interviews, provisional offer letter, and follow-up guidance.",
    items: [
      {
        id: "faq-28",
        title: "28. When will the selection status be announced for Scholarship Seats for NTS 2026?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              The selection process will be conducted in four rounds, beginning on 1st February 2027. Shortlisted names will be shared with the respective Training Partners after each round. Students will be contacted based on the round in which their names appear.
            </p>

            <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-xs">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#610D17] text-white font-semibold">
                  <tr>
                    <th className="px-4 py-2.5">Round</th>
                    <th className="px-4 py-2.5">Dates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-zinc-900">1st Round</td>
                    <td className="px-4 py-2.5 text-zinc-700">1st week of February 2027</td>
                  </tr>
                  <tr className="bg-zinc-50/60">
                    <td className="px-4 py-2.5 font-medium text-zinc-900">2nd Round</td>
                    <td className="px-4 py-2.5 text-zinc-700">2nd week of February 2027</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-zinc-900">3rd Round</td>
                    <td className="px-4 py-2.5 text-zinc-700">3rd week of February 2027</td>
                  </tr>
                  <tr className="bg-zinc-50/60">
                    <td className="px-4 py-2.5 font-medium text-zinc-900">4th (Mop-up) Round</td>
                    <td className="px-4 py-2.5 text-zinc-700">4th week of February 2027</td>
                  </tr>
                  <tr className="bg-[#fbf2f3] font-semibold text-[#610D17]">
                    <td className="px-4 py-2.5">Final list of seat offers</td>
                    <td className="px-4 py-2.5">6th March 2027, Saturday</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500">
              Students are advised to regularly check their email and WhatsApp during this period.
            </p>
          </div>
        ),
      },
      {
        id: "faq-29",
        title: "29. What will happen after a student is shortlisted?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            After a student is shortlisted, they will be contacted by the assigned Training Partner. A counselling session or interview will be arranged. Parents or guardians will also be engaged in the process. If selected, a Provisional Admission Offer Letter will be issued through email and WhatsApp.
          </p>
        ),
      },
      {
        id: "faq-30",
        title: "30. What details will be included in the Provisional Admission Offer Letter?",
        points: [
          "Full student identification",
          "Course name, duration, and timeline",
          "Important dates and deadline for response",
          "Applicable course fees and scholarship amount offered",
          "Payment or bank details (if applicable)",
          "Benefits covered and not covered under the scholarship",
          "Required documentation to be submitted",
        ],
        content: (
          <p className="mt-3 text-xs sm:text-sm text-zinc-500 italic">
            The letter will be sent via both email and WhatsApp, with AMP marked in copy.
          </p>
        ),
      },
      {
        id: "faq-31",
        title: "31. What should be done if no response is received from the Training Partner?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              If no communication is received within a few days of the result announcement, students should first check their email inbox and spam folder. If no message is found, they should reach out to AMP directly using the following contact details:
            </p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#610D17]" />
                <span>
                  Email:{" "}
                  <a href="mailto:nts@ampindia.org" className={linkClass}>
                    nts@ampindia.org
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#610D17]" />
                <span>
                  Helpline:{" "}
                  <a href="https://wa.me/918657506907" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    8657506907
                  </a>{" "}
                  /{" "}
                  <a href="https://wa.me/918657506909" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    8657506909
                  </a>{" "}
                  (WhatsApp before calling)
                </span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-32",
        title: "32. Will students be informed if they are not selected?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Yes. If a student is not selected after counselling and interview, a formal rejection message will be sent by the Training Partner. The reason for non-selection will be stated. Students not selected in the earlier rounds may still be considered in later rounds, including the mop-up round, and should remain engaged throughout the process.
            </p>
            <p className="pt-1">
              Scholarship Details:{" "}
              <a
                href="https://www.tinyurl.com/ampntsscholarshipslist"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                https://www.tinyurl.com/ampntsscholarshipslist
              </a>
            </p>
          </div>
        ),
      },
    ],
  },
];

export interface ImportantLinkItem {
  title: string;
  url: string;
  linkText: string;
  description?: string;
  isGoogleMeet?: boolean;
}

export const IMPORTANT_LINKS: ImportantLinkItem[] = [
  {
    title: "Official NTS Page",
    url: "https://www.ampindia.org/National_Talent_Search",
    linkText: "www.ampindia.org/National_Talent_Search",
  },
  {
    title: "Download AMP World App",
    url: "https://www.tinyurl.com/AMPWorldApp",
    linkText: "www.tinyurl.com/AMPWorldApp",
  },
  {
    title: "Institution Registration",
    url: "http://www.tinyurl.com/AMP-Institute-Connect",
    linkText: "www.tinyurl.com/AMP-Institute-Connect",
  },
  {
    title: "Volunteer Registration",
    url: "https://www.tinyurl.com/AMPNTSVolunteer",
    linkText: "www.tinyurl.com/AMPNTSVolunteer",
  },
  {
    title: "NGO/Mobilization Partner Registration",
    url: "https://www.tinyurl.com/AMPNGOConnect",
    linkText: "www.tinyurl.com/AMPNGOConnect",
  },
  {
    title: "Detailed Syllabus",
    url: "https://www.tinyurl.com/NTS-Syllabus-25",
    linkText: "www.tinyurl.com/NTS-Syllabus-25",
  },
  {
    title: "Check the Scholarships Details",
    url: "https://www.tinyurl.com/ampntsscholarshipslist",
    linkText: "https://www.tinyurl.com/ampntsscholarshipslist",
  },
  {
    title: "Access All Documents",
    url: "https://www.tinyurl.com/AllNTSDocument",
    linkText: "www.tinyurl.com/AllNTSDocument",
  },
];
