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
    count: 5,
    description: "About AMP, NTS background, official webpage, eligibility criteria, and exam categories/languages.",
    items: [
      {
        id: "faq-1",
        title: "1. What is AMP?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Association of Muslim Professionals (AMP) has been working for more than a decade, in the domains of Education Support, Employment Assistance and Economic Empowerment for the Community and the Country.
            </p>
            <p className="pt-1">
              Know more:{" "}
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
              With the intention of increasing the Students’ General Awareness and Competitive Spirit and identifying the best and brightest students to support and nurture, AMP launched a National Level Competition, the AMP National Talent Search for School, Junior &amp; Senior/Degree College Students.
            </p>
            <p className="pt-1">
              Find more information at:{" "}
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
        title: "3. What’s the official webpage of NTS 2026?",
        content: (
          <div className="space-y-2 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>We have an official landing page dedicated to this exam.</p>
            <p>
              Please visit us at{" "}
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
        id: "faq-4",
        title: "4. Who can participate in NTS 2026 / What are the students' eligibility criteria to take the exam?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <ul className="space-y-2.5 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Students who are currently enrolled in a school studying in classes 8th, 9th or 10th</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Students who are currently enrolled in a junior or degree college for the academic year 2025 – 2026</span>
              </li>
              <li className="flex flex-col gap-1.5">
                <div className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>Madrasa students between the ages 13 to 15 years may participate:</span>
                </div>
                <ul className="list-disc list-inside pl-6 space-y-1 text-zinc-600 text-sm">
                  <li>13 years with class 8,</li>
                  <li>14 years with class 9,</li>
                  <li>15 years with class 10.</li>
                </ul>
              </li>
              <li className="flex flex-col gap-1.5">
                <div className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>Diploma students, ITI, NIOS students with age limits from 13 to 21 years old can participate:</span>
                </div>
                <ul className="list-disc list-inside pl-6 space-y-1 text-zinc-600 text-sm">
                  <li>Diploma students with junior college,</li>
                  <li>NIOS students in the secondary course will take the school paper for class 10, and senior secondary with junior college.</li>
                  <li>ITI students will join junior college if 17 years or less, and senior/degree college otherwise.</li>
                </ul>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Only Indian citizens studying in India are eligible.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>All ages are as of October 31, 2026.</span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-5",
        title: "5. What is the Category and Language available for the Exam?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div>
              <p className="font-semibold text-zinc-900 mb-2">The competition will be held in 3-Categories:</p>
              <ul className="space-y-1.5 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>Senior / Degree Colleges (Undergraduate) Students</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>Junior / Intermediate Colleges (11th &amp; 12th Standard) Students</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>Schools (8th, 9th &amp; 10th Standard) Students</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <p className="font-bold text-zinc-900">Note:</p>
              <ul className="space-y-2 text-sm text-zinc-600 pl-1">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>School Students of 8th, 9th &amp; 10th Standard will have separate question papers; which will be available in 5 languages i.e. <strong>English, Hindi, Gujarati, Urdu, Bengali</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>Junior/Intermediate and Senior/Degree College question papers will be in <strong>English only</strong></span>
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "registration",
    name: "2. Registration",
    shortName: "Registration",
    count: 7,
    description: "Free examination, registration modes, website & app guides, bulk institution registration, mobile number rules, and profile editing.",
    items: [
      {
        id: "faq-6",
        title: "6. What is the fee for this exam?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            There is no FEE. The exam is completely <strong>FREE</strong> of charge.
          </p>
        ),
      },
      {
        id: "faq-7",
        title: "7. How to Apply for NTS 2026 / How to register for the exam?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>This year, students can register through three modes:</p>
            <ol className="list-decimal list-inside space-y-2 pl-1 font-medium text-zinc-800">
              <li>
                AMP World Website Visit:{" "}
                <a href="https://ampworld.in" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  www.ampworld.in
                </a>
              </li>
              <li>
                AMP World Mobile App:{" "}
                <a href="https://www.tinyurl.com/AMPWorldApp" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  www.tinyurl.com/AMPWorldApp
                </a>
              </li>
              <li>Bulk Registration (Institutions Only)</li>
            </ol>
          </div>
        ),
      },
      {
        id: "faq-8",
        title: "8. How to Register through AMP World Website?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <p className="font-bold text-zinc-900">AMP World Website</p>
              <p>
                Registration for the National Talent Search competition can also be done through the official website of AMP World.
              </p>
              <div className="pt-2">
                <p className="font-semibold text-zinc-800">How to Register:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2 text-sm mt-1">
                  <li>
                    Visit the AMP World Website:{" "}
                    <a href="https://ampworld.in" target="_blank" rel="noopener noreferrer" className={linkClass}>
                      www.ampworld.in
                    </a>
                  </li>
                  <li>Register for NTS by filling the Student’s Registration Form available on the website</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "faq-9",
        title: "9. How to Register through AMP World Mobile App?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <p className="font-bold text-zinc-900">AMP World Mobile APP</p>
              <p>
                The Registration for National Talent Search competition will be on a specially designed mobile app, which is called AMP World.
              </p>
              <div className="pt-2">
                <p className="font-semibold text-zinc-800">How to Register:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2 text-sm mt-1">
                  <li>
                    Download the AMP World App from the Google Play Store:{" "}
                    <a href="https://www.tinyurl.com/AMPWorldApp" target="_blank" rel="noopener noreferrer" className={linkClass}>
                      www.tinyurl.com/AMPWorldApp
                    </a>
                  </li>
                  <li>Sign-up to the app with your personal details</li>
                  <li>Register for NTS by filling the Student’s Registration tab</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "faq-10",
        title: "10. How to Register through Bulk?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p className="font-bold text-zinc-900">Steps for Bulk Registration:</p>

            <div className="space-y-3 text-sm pl-1">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
                <p className="font-bold text-zinc-900">1. Fill Student Details in the Excel Template</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2 mt-1">
                  <li>Use the Excel sheet Template provided by AMP NTS Team to enter the required student details.</li>
                  <li>Ensure all fields in the template are accurately filled with complete and correct information for each student.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
                <p className="font-bold text-zinc-900">2. Provide SPOC Details</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2 mt-1">
                  <li>The registrations will be done on behalf of the SPOC.</li>
                  <li>The designated SPOC (Single Point of Contact) will be responsible for communication between Students and AMP NTS Team.</li>
                  <li>Share the following details of SPOC to receive updates and important information. (Name, Email ID, Phone Number)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
                <p className="font-bold text-zinc-900">3. Send the Complete Information</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-2 mt-1">
                  <li>
                    Email the completed registration details to{" "}
                    <a href="mailto:nts@ampindia.org" className={linkClass}>
                      nts@ampindia.org
                    </a>
                    .
                  </li>
                  <li>
                    For assistance, you may also contact us at{" "}
                    <a href="tel:8657003081" className={linkClass}>
                      8657003081
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-3.5">
                <p className="font-bold text-zinc-900">4. Verification and Hall Tickets</p>
                <p className="text-zinc-600 mt-1">
                  Once the registration is verified, hall tickets will be shared with the SPOC through one of the following:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-zinc-700 pl-2 mt-1.5 font-medium">
                  <li><strong>Email:</strong> Hall Tickets will be mailed to the SPOC Email ID provided during registration.</li>
                  <li><strong>AMP World App:</strong> Hall Tickets of all the Students will be available under the My Registration Tab of AMP World Mobile App registered on the SPOC phone.</li>
                </ol>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "faq-11",
        title: "11. Can we register two students using the same mobile number in the AMP World APP?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            Yes, multiple students can be registered with one mobile number. Please read detailed information in Instruction Tab on AMP World App.
          </p>
        ),
      },
      {
        id: "faq-12",
        title: "12. Can I edit my Registration/profile details, i.e., Name correction, address, class, etc.?",
        content: (
          <div className="space-y-2 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p>
              Yes, simply go to <strong>My Registration Details Tab</strong> on AMP World mobile app, and click edit to make the relevant changes.
            </p>
            <p className="font-semibold text-[#610D17]">
              The edit can only be done till the last date of Registration i.e., Sunday, 22nd November 2026.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "syllabus",
    name: "3. Examination & Syllabus",
    shortName: "Exam & Syllabus",
    count: 5,
    description: "Marking scheme, sample mock papers, category syllabi for schools (Classes 8–10) and college categories.",
    items: [
      {
        id: "faq-13",
        title: "13. What is the marking scheme for NTS?",
        points: [
          "+1 mark for the correct answer",
          "no negative marking for wrong answer",
        ],
      },
      {
        id: "faq-14",
        title: "14. Will I get any sample test papers before appearing in NTS 2026?",
        points: [
          "Yes. Test papers for all categories are available in the ‘Mock Papers’ section of the AMP World Mobile App.",
          <span>
            You can also access it under ‘All NTS 2026 Documents’ on the website:{" "}
            <a
              href="https://www.tinyurl.com/AllNTSDocument2026"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              www.tinyurl.com/AllNTSDocument2026
            </a>{" "}
            (and on the{" "}
            <a href="/Mock_Papers" className={linkClass}>
              Mock Papers Page
            </a>
            )
          </span>,
        ],
      },
      {
        id: "faq-15",
        title: "15. Will the Syllabus for all 3 exams be the same?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            No, there will be a different syllabus for each category
          </p>
        ),
      },
      {
        id: "faq-16",
        title: "16. What is the Syllabus for the School Section?",
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

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-1.5">
              <p className="font-bold text-zinc-900">Important Notes:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 pl-2">
                <li>There will be a separate question paper for each class: 8, 9, and 10.</li>
                <li>The MAT section will be common for all classes.</li>
                <li>The SAT section will vary depending on the class.</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "faq-17",
        title: "17. What is the syllabus for the College Section?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
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

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-1.5">
              <p className="font-bold text-zinc-900">There will be separate question papers for:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 pl-2">
                <li>Junior/Intermediate College (Classes 11 &amp; 12)</li>
                <li>Senior/Degree College (Undergraduate)</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "exam-mode",
    name: "4. Examination Mode",
    shortName: "Exam Mode",
    count: 3,
    description: "Offline exam centers pan-India, center selection procedure, and 90-minute exam timing.",
    items: [
      {
        id: "faq-18",
        title: "18. How will the exam be conducted?",
        points: [
          "The AMP National Talent Search 2026 will be conducted only in Offline/Physical Mode.",
          "The exam will be conducted at 1500+ Exam Centres across 450+ districts in India.",
          "During registration, candidates can select their preferred Exam Centre.",
          "Exams for all categories will be held on the same day.",
          "The question paper will consist of 100 multiple-choice questions (MCQs).",
          <span><strong>Note:</strong> This year there will be No Online Exam for NTS 2026.</span>,
          <span><strong>Exam Date:</strong> Saturday, 5th December 2026</span>,
        ],
      },
      {
        id: "faq-19",
        title: "19. How to select the Exam Centre?",
        content: (
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            While filling the registration form, every student has to select the Exam Centre available in their own District or the centres available in any nearby District.
          </p>
        ),
      },
      {
        id: "faq-20",
        title: "20. What will be the Exam Duration?",
        points: [
          <span><strong>Time &amp; Duration:</strong> The exam will start at 11 am for 90 minutes</span>,
          <span><strong>Note:</strong> All the categories will have an exam on the same day</span>,
        ],
      },
    ],
  },
  {
    id: "awards-benefits",
    name: "5. Awards & Benefits",
    shortName: "Awards & Benefits",
    count: 5,
    description: "₹10 Cr+ coaching scholarships, category-wise cash prizes, IndiaZakat crowdfunding, and flagship programs.",
    items: [
      {
        id: "faq-21",
        title: "21. What scholarships can students get?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p className="font-bold text-zinc-900">Scholarships for Top 500+ Students worth ₹10 Crore+:</p>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>Top 500+ performers at the AMP NTS will be privileged to receive Scholarships ranging from 50% - 100% for IIT-JEE/NEET coaching from top institutes of India, who are our training partners.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>In order to qualify for the various scholarships, these top 500+ students from different categories shall have to appear for an offline test by AMP or respective training partners.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>This selection/admission procedure will be based on similar models followed by various admission authorities across the Country.</span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-22",
        title: "22. What are the Cash Prizes a student can win?",
        content: (
          <div className="space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <p className="font-bold text-zinc-900">CASH PRIZES</p>
            <p className="text-zinc-600">The Toppers in each of the categories will win Cash Prizes:</p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>₹ 30,000 for 1st place Winners</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>₹ 20,000 for 2nd place Winners</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>₹ 10,000 for 3rd place Winners</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>₹ 2,000 for 4th to 10th place Winners</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>₹ 1,000 for 11th to 50th place Winners</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                <span>₹ 1,000 for each State Topper (in each category)</span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "faq-23",
        title: "23. What are the other benefits a student can get?",
        content: (
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <p className="font-bold text-zinc-900">FINANCIAL SUPPORT FOR STUDENTS (ALL CATEGORIES)</p>
              <ul className="space-y-1.5 pl-1 text-sm text-zinc-600">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>
                    Top 200 needy students will receive support to get Merit-cum-means scholarship of at least ₹10,000 through AMP’s crowdfunding initiative;{" "}
                    <a href="https://indiazakat.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                      IndiaZakat.com
                    </a>
                    . The beneficiary student’s total family income must be less than Rs. 200,000 per annum.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 space-y-2">
              <p className="font-bold text-zinc-900">AMP’s SUPPORT TO ALL STUDENTS</p>
              <ul className="space-y-2 pl-1 text-sm text-zinc-600">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>
                    AMP will guide deserving and needy students in applying for funds through its Crowdfunding platform -{" "}
                    <a href="https://indiazakat.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                      IndiaZakat.com
                    </a>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>
                    AMP will provide free guidance and mentorship by experts from top corporates and academic institutions to all students through TheIndiaMentors.com.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>
                    Students can take advantage of the numerous Scholarship programs offered by various National or International Institutes and Organizations that are supported and promoted on AMP’s platform.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                  <span>
                    AMP will extend support through its employment website{" "}
                    <a href="https://ampowerjobs.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                      AMPowerJobs.com
                    </a>{" "}
                    to reduce the gap between the recruiter and job seeker by offering free Resume Assistance, Skills &amp; Employability training and more.
                  </span>
                </li>
              </ul>
            </div>
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
      {
        id: "faq-25",
        title: "25. What are the additional benefits for students?",
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
    ],
  },
];

export interface ImportantLinkItem {
  title: string;
  url: string;
  linkText: string;
}

export const IMPORTANT_LINKS: ImportantLinkItem[] = [
  {
    title: "Official NTS Page",
    url: "https://www.ampindia.org/national_talent_search",
    linkText: "www.ampindia.org/national_talent_search",
  },
  {
    title: "Download AMP World App",
    url: "https://www.tinyurl.com/AMPWorldApp",
    linkText: "www.tinyurl.com/AMPWorldApp",
  },
  {
    title: "Participating Institution Registration",
    url: "/institution-registration",
    linkText: "/institution-registration",
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
    url: "https://www.tinyurl.com/NTS-Syllabus-26",
    linkText: "www.tinyurl.com/NTS-Syllabus-26",
  },
  {
    title: "Check the Scholarships Details",
    url: "https://www.tinyurl.com/ampntsscholarshipslist",
    linkText: "www.tinyurl.com/ampntsscholarshipslist",
  },
  {
    title: "Access All Documents",
    url: "https://www.tinyurl.com/AllNTSDocument2026",
    linkText: "www.tinyurl.com/AllNTSDocument2026",
  },
];
