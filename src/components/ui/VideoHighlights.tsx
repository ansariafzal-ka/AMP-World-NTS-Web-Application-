"use client";

import React, { useState } from "react";
import Image from "next/image";

interface VideoHighlight {
  id: string;
  videoId: string;
  start?: number;
  title: string;
  description: string;
}

const videoHighlights: VideoHighlight[] = [
  {
    id: "journey",
    videoId: "zY0a5vSg6Xw",
    start: 2,
    title: "AMP National Talent Search Journey",
    description:
      "Discover how AMP NTS has empowered thousands of students across 400+ Districts in India.",
  },
  {
    id: "winners",
    videoId: "UJUCHnrzXCo",
    title: "Scholarship Winners & Success Stories",
    description:
      "Hear directly from past winners on how NTS scholarships opened doors for higher education.",
  },
  {
    id: "prepare",
    videoId: "WrtdcJPuH64",
    start: 10,
    title: "How to Prepare & Excel in NTS 2026",
    description:
      "Expert guidance on syllabus breakdown, time management, and scoring tips for MAT & SAT.",
  },
];

export default function VideoHighlights() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#610D17]">
            WATCH &amp; LEARN
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-zinc-900 tracking-tight">
            NTS Video Highlights
          </h2>
          <div className="w-12 h-1 bg-[#C89D4B] mx-auto mt-2.5 mb-3 rounded-full" />
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Watch students, parents, and educators share their NTS experiences and guidance.
          </p>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {videoHighlights.map((video) => {
            const isPlaying = activeVideo === video.id;
            const embedSrc = `https://www.youtube.com/embed/${video.videoId}?autoplay=1${
              video.start ? `&start=${video.start}` : ""
            }`;

            return (
              <div
                key={video.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-zinc-300"
              >
                {/* Video Area / Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  {isPlaying ? (
                    <iframe
                      src={embedSrc}
                      title={video.title}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video.id)}
                      className="relative h-full w-full cursor-pointer group/btn block text-left"
                      aria-label={`Play ${video.title}`}
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover/btn:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-opacity group-hover/btn:bg-black/30" />

                      {/* Circular Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#801321] text-white shadow-lg ring-4 ring-white/30 transition-transform duration-200 group-hover/btn:scale-110 group-hover/btn:bg-[#610D17]">
                          <svg
                            className="h-6 w-6 fill-current translate-x-0.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#610D17] leading-snug">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
