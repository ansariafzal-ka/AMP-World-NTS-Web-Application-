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
              India&apos;s Largest Community Talent Search
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              The Association of Muslim Professionals (AMP) has been working since 2007 towards Education, Employment Assistance and Economic Empowerment for the community and the nation. With the aim of developing students&apos; general awareness, identifying talent and fostering a healthy spirit of competition, AMP launched the National Talent Search (NTS) in November 2020. Over the years, 3.5 lakh+ students from 400+ Districts have participated in NTS, making it one of India&apos;s largest community-led talent search initiatives. AMP National Talent Search – NTS 2026 will be conducted on 5 December 2026 in Offline/Physical Mode across India. It will be open to students from Schools, Colleges, Universities and Madarsa systems.
            </p>

            <div className="pt-2">
              <Link
                href="/About_NTS"
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
                src="https://www.youtube.com/embed/dHoS5WfGT4o"
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
