"use client";

import React, { useState } from "react";
import { MOCK_LINKS_DATA } from "./mockLinksData";

type MainCategory = "school" | "junior" | "degree";

export default function OnlineMockPapersSection() {
  const [activeCategory, setActiveCategory] = useState<MainCategory>("school");
  const [selectedClass, setSelectedClass] = useState<"8th" | "9th" | "10th">("10th");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const schoolLanguages = ["English", "Urdu", "Hindi", "Bengali", "Gujarati"];

  // Helper to get active links
  const getActiveLinks = (): string[] => {
    if (activeCategory === "school") {
      const classData = MOCK_LINKS_DATA.school[selectedClass];
      return classData ? classData[selectedLanguage] || [] : [];
    }
    if (activeCategory === "junior") {
      return MOCK_LINKS_DATA.junior;
    }
    if (activeCategory === "degree") {
      return MOCK_LINKS_DATA.degree;
    }
    return [];
  };

  const activeLinks = getActiveLinks();

  return (
    <section className="py-12 sm:py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (No badge) */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Practice Mock Papers Online
          </h2>
        </div>

        {/* Level 1: Category Selector Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-zinc-200 pb-4">
          <button
            type="button"
            onClick={() => setActiveCategory("school")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === "school"
                ? "bg-[#610D17] text-white shadow-xs"
                : "bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200"
            }`}
          >
            Schools (8th, 9th &amp; 10th)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("junior")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === "junior"
                ? "bg-[#610D17] text-white shadow-xs"
                : "bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200"
            }`}
          >
            Junior / Intermediate Colleges (11th &amp; 12th)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("degree")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === "degree"
                ? "bg-[#610D17] text-white shadow-xs"
                : "bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200"
            }`}
          >
            Senior / Degree Colleges (Undergraduates)
          </button>
        </div>

        {/* Level 2 Sub-Filters for Schools */}
        {activeCategory === "school" && (
          <div className="mt-6 space-y-4 rounded-2xl bg-white border border-zinc-200/90 p-4 sm:p-5 shadow-xs">
            {/* Class Pill Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 shrink-0">
                Select Class:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(["8th", "9th", "10th"] as const).map((cls) => {
                  const isSelected = selectedClass === cls;
                  return (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => setSelectedClass(cls)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#610D17] text-white shadow-xs"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      Class {cls}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Medium / Language Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-3 border-t border-zinc-100">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 shrink-0">
                Select Medium:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {schoolLanguages.map((lang) => {
                  const isSelected = selectedLanguage === lang;
                  const count =
                    MOCK_LINKS_DATA.school[selectedClass]?.[lang]?.length || 0;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setSelectedLanguage(lang)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-zinc-900 text-white shadow-xs"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      <span>{lang}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-zinc-200 text-zinc-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}


        {/* Practice Test Cards Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeLinks.map((link, idx) => {
            const paperNumber = idx + 1;
            const paddedNumber = paperNumber < 10 ? `0${paperNumber}` : `${paperNumber}`;
            const subtitle =
              activeCategory === "school"
                ? `${selectedLanguage} Medium`
                : `English Medium`;

            return (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-xs hover:border-[#610D17]/40 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors leading-snug">
                    Mock Paper {paddedNumber}
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-500 font-medium">
                    {subtitle}
                  </p>
                </div>

                <div className="shrink-0 pl-3">
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#610D17] group-hover:translate-x-0.5 transition-transform">
                    <span>Attempt Test</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {activeLinks.length === 0 && (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 text-center">
            <p className="text-sm font-semibold text-zinc-600">
              No online mock papers are currently available for this selection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
