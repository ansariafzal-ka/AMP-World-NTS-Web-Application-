import React from "react";
import Link from "next/link";

export default function HomeVideoSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              AMP National Talent Search 2026
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              <p>
                Association of Muslim Professionals (AMP) has been actively working since 2007 in the areas of Education, Employment Assistance, and Economic Empowerment for the Community and the Nation. With the aim of enhancing students&apos; general awareness and fostering a spirit of healthy competition, AMP launched a nationwide competition National Talent Search in November 2020.
              </p>
              <p>
                The 7th Edition of the AMP National Talent Search 2026, one of the largest talent search competitions in India, is scheduled for December 2026. This nationwide competition will be conducted in Offline/Physical mode and is open to students from all education boards, universities, and Madarsa systems across India.
              </p>
            </div>

            <div className="pt-1">
              <p className="text-sm font-semibold text-zinc-900">
                The competition will be conducted in the following three categories:
              </p>
              <ol className="mt-2 space-y-1.5 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17]/10 text-xs font-bold text-[#610D17]">
                    1
                  </span>
                  <span>School Students (8th, 9th &amp; 10th Standard)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17]/10 text-xs font-bold text-[#610D17]">
                    2
                  </span>
                  <span>Junior College Students (11th &amp; 12th Standard)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#610D17]/10 text-xs font-bold text-[#610D17]">
                    3
                  </span>
                  <span>Senior/Degree College Students (Undergraduates)</span>
                </li>
              </ol>
            </div>

            <div className="pt-2">
              <Link
                href="/NTS_Details"
                className="inline-flex items-center gap-2 rounded-xl bg-[#610D17] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#520A13]"
              >
                <span>Learn More About NTS</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: YouTube Video Embed */}
          <div className="lg:col-span-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 shadow-xl ring-1 ring-black/5">
              <iframe
                src="https://www.youtube.com/embed/SL7EeShaX0Q"
                title="AMP National Talent Search Video"
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
