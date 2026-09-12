"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SimpleCard from "@/components/common/SimpleCard";
import Button from "@/components/common/Button";
import Ribbon from "@/components/common/Ribbon";

export default function BecomeAnExamCenterPage() {
  const responsibilities = [
    {
      id: "01",
      badge: "Venue Hosting",
      title: "Host the NTS Exam",
      description:
        "Provide your institution classrooms, desks, and examination halls to conduct a disciplined, secure, and well-organized offline examination on exam day.",
    },
    {
      id: "02",
      badge: "Campus Promotion",
      title: "Promote NTS 2026 in Your Institution",
      description:
        "Announce NTS 2026 across notice boards, student assemblies, and parent-teacher meetings to encourage your own high-potential students to register.",
    },
    {
      id: "03",
      badge: "Institution Outreach",
      title: "Encourage Nearby Schools & Colleges to Participate",
      description:
        "Act as an educational cluster hub for your block/taluka by inviting nearby schools, high schools, and junior colleges to participate at your venue.",
    },
    {
      id: "04",
      badge: "Student Support",
      title: "Support Students with Registrations",
      description:
        "Set up a student assistance desk to help candidates register smoothly, verify eligibility across School or College categories, and understand the exam pattern.",
    },
  ];

  const benefits = [
    {
      title: "Authorized MoU & Credentialing",
      badge: "Official Agreement",
      description:
        "Receive a formal Memorandum of Understanding (MoU) with the Association of Muslim Professionals, authenticating your institution as an approved regional exam authority.",
    },
    {
      title: "Inclusion in National Directory",
      badge: "Brand Exposure",
      description:
        "Your institution is featured in the official AMP National Talent Search Directory, viewed by tens of thousands of educators, parents, and community leaders across India.",
    },
    {
      title: "Institutional Awards & Trophies",
      badge: "Felicitation",
      description:
        "Qualify for prestigious awards, including Best Performance Award (for top rankers produced) and Best Participation Award (for hosting 100+ registered candidates).",
    },
    {
      title: "Certificates for Coordinators",
      badge: "Recognition",
      description:
        "Principals, Centre Superintendents, and Teacher Coordinators receive official national Certificate of Appreciation recognizing their valuable contribution to youth education.",
    },
  ];

  const requirements = [
    {
      title: "Seating Capacity",
      detail: "Minimum 50 to 100+ student seating capacity with proper desk spacing.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Basic Student Amenities",
      detail: "Hygienic drinking water, clean separate washrooms, and well-lit ventilated rooms.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Centre SPOC & Invigilators",
      detail: "Appoint one Single Point of Contact (SPOC) and competent faculty invigilators.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Secure Material Storage",
      detail: "Lockable, safe cupboard/room for question papers and OMR sheets upon delivery.",
      icon: (
        <svg className="w-5 h-5 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Submit Online Application",
      desc: "Fill in institution particulars, seating capacity, and SPOC details via the official portal.",
    },
    {
      step: "02",
      title: "Verification & MoU",
      desc: "AMP Central Team verifies your details and issues a formal digital Memorandum of Understanding.",
    },
    {
      step: "03",
      title: "Conduct Exam & Dispatch",
      desc: "Administer the offline exam smoothly with the appointed observer and dispatch sealed answer sheets.",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* =========================================================
            1. HERO HEADER (MAROON GRADIENT WITH AMBIENT LIGHTING)
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#610D17] via-[#520A13] to-[#3B070D] text-white pt-14 pb-16 sm:pt-16 sm:pb-20 shadow-inner">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Become an Exam Centre
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              Join hands with us as an Exam Centre for your block / Taluka and benefit your Institution as well as Students.
            </p>
          </div>
        </section>

        {/* =========================================================
            2. ONBOARDING ROADMAP SECTION (IMMEDIATELY AFTER HERO)
        ========================================================= */}
        <section className="bg-white border-b border-zinc-200/80 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold text-[#610D17] uppercase tracking-wider">
                Simple Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2 tracking-tight">
                How to Become an Exam Centre
              </h2>
              <p className="text-zinc-600 mt-3 text-sm sm:text-base leading-relaxed">
                Getting authorized is seamless and transparent across 4 straightforward stages:
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {steps.map((st) => (
                <Ribbon
                  key={st.step}
                  title={st.title}
                  description={st.desc}
                  icon={
                    <span className="text-base font-black text-[#610D17]">
                      {st.step}
                    </span>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. RESPONSIBILITIES SECTION
        ========================================================= */}
        <section id="responsibilities" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-[#610D17] uppercase tracking-wider">
              Core Responsibilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2 tracking-tight">
              Roles & Responsibilities of an Exam Centre
            </h2>
            <p className="text-zinc-600 mt-3 text-sm sm:text-base leading-relaxed">
              As an authorized centre, your institution takes local leadership in creating an accessible, inspiring testing environment for aspiring students in your block or taluka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((item) => (
              <SimpleCard
                key={item.id}
                badge={item.badge}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            4. DOCUMENTATION LINK BANNER
        ========================================================= */}
        <section className="bg-white border-t border-zinc-200 py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base sm:text-lg text-zinc-700 font-medium max-w-2xl mx-auto leading-relaxed">
              View all official documents, circulars, and detailed guidelines regarding the roles, responsibilities, and benefits of becoming an Exam Centre.
            </p>

            <div className="mt-6 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                href="https://www.tinyurl.com/NTSExamCenter"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Official Documents
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
