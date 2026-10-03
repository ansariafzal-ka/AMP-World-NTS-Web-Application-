import React from "react";
import Button from "@/components/common/Button";

export default function MobilizationPartnerSection() {
  return (
    <section id="mobilization-partner" className="py-14 sm:py-18 lg:py-22 bg-white border-b border-zinc-200/80 scroll-mt-32 sm:scroll-mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#610D17]">
            Community Outreach
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#610D17] tracking-tight">
            Become a Mobilization Partner
          </h2>
          <div className="w-12 h-1 bg-[#C89D4B] mx-auto mt-2.5 mb-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            NGOs and Institutions can become our Mobilization Partner for AMP NTS 2026. With this effort, we would like to make this competition a national community initiative.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Column 1: Role of Supporting NGO/Partner */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 shadow-xs transition-all hover:border-[#610D17]/30 hover:bg-white hover:shadow-md">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#610D17] tracking-tight mb-5">
                Role of Supporting NGO/Partner:
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#610D17] shrink-0 mt-1.5" />
                  <span>
                    <strong className="text-zinc-900 font-semibold">Promote NTS 2026</strong> in your area, serve as an{" "}
                    <strong className="text-zinc-900 font-semibold">Exam Observer</strong> at the nearest centre, and{" "}
                    <strong className="text-zinc-900 font-semibold">assist students</strong> with completing their online registration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#610D17] shrink-0 mt-1.5" />
                  <span>
                    Connect with all schools, teachers, principals, management, colleges, professors, and higher education leaders across your city.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#610D17] shrink-0 mt-1.5" />
                  <span>
                    Engage with community leaders, Ulema, NGOs, and partner organisations.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200/80">
              <Button
                href="https://www.tinyurl.com/AMPNGOConnect"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                <span>REGISTER HERE</span>
                <svg
                  className="w-4 h-4"
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

          {/* Column 2: Benefits */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 shadow-xs transition-all hover:border-[#610D17]/30 hover:bg-white hover:shadow-md">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#610D17] tracking-tight mb-5">
                Benefits:
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#610D17] shrink-0 mt-1.5" />
                  <span>Capacity Building of Member Organizations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#610D17] shrink-0 mt-1.5" />
                  <span>Execution of AMP Projects in partnership with Member Organizations in your respective Geographies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#610D17] shrink-0 mt-1.5" />
                  <span>Replication of work of successful Member Organizations at local level.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#610D17] shrink-0 mt-1.5" />
                  <span>Planning for future with set goals and plans.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200/80">
              <Button
                href="https://certificate-generator-hvul.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                <span>GET YOUR CERTIFICATE</span>
                <svg
                  className="w-4 h-4"
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

        </div>

      </div>
    </section>
  );
}
