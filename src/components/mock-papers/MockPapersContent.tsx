"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/common/Button";

interface PaperItem {
  id: string;
  title: string;
  category: "school" | "junior" | "senior" | "key";
  subCategory?: string;
  year: string;
  language?: string;
  url: string;
  isFolder?: boolean;
}

const ALL_PAPERS: PaperItem[] = [
  // 2025 Edition
  {
    id: "key-2025",
    title: "AMP NTS 2025 Official Answer Key (Master)",
    category: "key",
    subCategory: "All Categories",
    year: "2025",
    url: "https://drive.google.com/file/d/1XqQflG4hy0loE_2UkEV6jJ-x1t54IRw6/view?usp=drive_web",
  },
  {
    id: "junior-2025",
    title: "NTS 2025 Junior College Question Paper (XI & XII)",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2025",
    url: "https://drive.google.com/file/d/1i259J66UFkGRTo0vAfQ5sRbU_zab3v2w/view?usp=drive_web",
  },
  {
    id: "senior-2025",
    title: "NTS 2025 Senior College Question Paper (Undergraduates)",
    category: "senior",
    subCategory: "Degree College",
    year: "2025",
    url: "https://drive.google.com/file/d/1QaU8yszNR6G5OJhAROVyHkQELmv0R1iI/view?usp=drive_web",
  },
  {
    id: "school-2025-folder",
    title: "NTS 2025 School Question Papers (8th, IX & X)",
    category: "school",
    subCategory: "Class 8th, 9th & 10th",
    year: "2025",
    url: "https://drive.google.com/drive/folders/18Co76WOjdOIdsvlwtoeez5OEsNqjvSCh",
    isFolder: true,
  },

  // 2024 Edition - Answer Key & Categories
  {
    id: "key-2024",
    title: "AMP NTS 2024 Official Master Answer Keys",
    category: "key",
    subCategory: "All Categories",
    year: "2024",
    url: "https://drive.google.com/file/d/1So3iXh28VHmvXHHh69_pMZM3v5f-Md1W/view?usp=drive_web",
  },
  {
    id: "junior-2024",
    title: "Junior-Intermediate Colleges (XI & XII) Paper 2024",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2024",
    url: "https://drive.google.com/file/d/1xdT-N67Hf9gusJTXgJlIOuPz7BK2gsrz/view?usp=drive_web",
  },
  {
    id: "senior-2024",
    title: "Senior-Degree Colleges (Undergraduates) Paper 2024",
    category: "senior",
    subCategory: "Undergraduates",
    year: "2024",
    url: "https://drive.google.com/file/d/1v9nFa7h708paKm60E6GLMTq0KKYujJ5F/view?usp=drive_web",
  },

  // 2024 School Class 10th
  {
    id: "s10-en-2024",
    title: "Class 10th Question Paper 2024",
    category: "school",
    subCategory: "Class 10",
    year: "2024",
    language: "English",
    url: "https://drive.google.com/file/d/1jCDHoZVUdhtHxXR-6V8WUdohsaDTm-fT/view?usp=drive_web",
  },
  {
    id: "s10-ur-2024",
    title: "Class 10th Question Paper 2024",
    category: "school",
    subCategory: "Class 10",
    year: "2024",
    language: "Urdu",
    url: "https://drive.google.com/file/d/1TO2XdHhdnbXwJ-1TLr8uGw17j38uo8tF/view?usp=drive_web",
  },
  {
    id: "s10-hi-2024",
    title: "Class 10th Question Paper 2024",
    category: "school",
    subCategory: "Class 10",
    year: "2024",
    language: "Hindi",
    url: "https://drive.google.com/file/d/13uxaJ8iKXlZ3CqDTJKdEKPTWK-hHPhne/view?usp=drive_web",
  },
  {
    id: "s10-gu-2024",
    title: "Class 10th Question Paper 2024",
    category: "school",
    subCategory: "Class 10",
    year: "2024",
    language: "Gujarati",
    url: "https://drive.google.com/file/d/1xyXV_6glKwXKldZ1U6iVxgLvgr6axD-M/view?usp=drive_web",
  },
  {
    id: "s10-bn-2024",
    title: "Class 10th Question Paper 2024",
    category: "school",
    subCategory: "Class 10",
    year: "2024",
    language: "Bengali",
    url: "https://drive.google.com/file/d/1_uv3TfdSheLgFf3lDrjLtgTOJbwESe1V/view?usp=drive_web",
  },

  // 2024 School Class 9th
  {
    id: "s9-en-2024",
    title: "Class 9th Question Paper 2024",
    category: "school",
    subCategory: "Class 9",
    year: "2024",
    language: "English",
    url: "https://drive.google.com/file/d/1sIxD6RXsH7C8iKPhY5Xedb_qhiYRzYK_/view?usp=drive_web",
  },
  {
    id: "s9-ur-2024",
    title: "Class 9th Question Paper 2024",
    category: "school",
    subCategory: "Class 9",
    year: "2024",
    language: "Urdu",
    url: "https://drive.google.com/file/d/1G9mYVlliK_cizFOEp0a23QfswsgaGbUd/view?usp=drive_web",
  },
  {
    id: "s9-hi-2024",
    title: "Class 9th Question Paper 2024",
    category: "school",
    subCategory: "Class 9",
    year: "2024",
    language: "Hindi",
    url: "https://drive.google.com/file/d/19Mmjxj8o946ivuPveuEtV_fDPmkLhWes/view?usp=drive_web",
  },
  {
    id: "s9-gu-2024",
    title: "Class 9th Question Paper 2024",
    category: "school",
    subCategory: "Class 9",
    year: "2024",
    language: "Gujarati",
    url: "https://drive.google.com/file/d/1e7HnQZQVoIt8PHY5AESptzt6gudv7fMi/view?usp=drive_web",
  },
  {
    id: "s9-bn-2024",
    title: "Class 9th Question Paper 2024",
    category: "school",
    subCategory: "Class 9",
    year: "2024",
    language: "Bengali",
    url: "https://drive.google.com/file/d/1eeac1-qPdwPPaxtOwkRqP5pIomsYgr9X/view?usp=drive_web",
  },

  // 2024 School Class 8th
  {
    id: "s8-en-2024",
    title: "Class 8th Question Paper 2024",
    category: "school",
    subCategory: "Class 8",
    year: "2024",
    language: "English",
    url: "https://drive.google.com/file/d/1it6_biNzwmx6UylS9XAsvCiyyvjK4iNq/view?usp=drive_web",
  },
  {
    id: "s8-ur-2024",
    title: "Class 8th Question Paper 2024",
    category: "school",
    subCategory: "Class 8",
    year: "2024",
    language: "Urdu",
    url: "https://drive.google.com/file/d/1y3yTE_yvkcU7oAdI2SeytsdHPn2vW-fM/view?usp=drive_web",
  },
  {
    id: "s8-hi-2024",
    title: "Class 8th Question Paper 2024",
    category: "school",
    subCategory: "Class 8",
    year: "2024",
    language: "Hindi",
    url: "https://drive.google.com/file/d/1PnKR6QmYyBRVlrBq1hKSt_IcSH3CM2dL/view?usp=drive_web",
  },
  {
    id: "s8-gu-2024",
    title: "Class 8th Question Paper 2024",
    category: "school",
    subCategory: "Class 8",
    year: "2024",
    language: "Gujarati",
    url: "https://drive.google.com/file/d/1qwNBwtt9FdJAnlpw5na9fBp_qRDb8EEk/view?usp=drive_web",
  },
  {
    id: "s8-bn-2024",
    title: "Class 8th Question Paper 2024",
    category: "school",
    subCategory: "Class 8",
    year: "2024",
    language: "Bengali",
    url: "https://drive.google.com/file/d/1l8O62pr8_8db4phQszjR8TzBR29oF_It/view?usp=drive_web",
  },

  // Junior College Archives (2020-2023)
  {
    id: "jr-2023-dec25",
    title: "Junior Intermediate College Paper (25 Dec 2023)",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2023",
    url: "https://drive.google.com/file/d/1ecUS8waYBmGRn02NzzLlWRPkSGsnxf2B/view?usp=drive_web",
  },
  {
    id: "jr-2023-dec2",
    title: "Junior Intermediate College Paper (2 Dec 2023)",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2023",
    url: "https://drive.google.com/file/d/1d6LboG7p8l1nQKYjlP26csGF76mD5Seo/view?usp=drive_web",
  },
  {
    id: "jr-2022",
    title: "Junior Intermediate College Question Paper 2022",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2022",
    url: "https://drive.google.com/file/d/16iz8Jyb9uqznUCLciH-6lSK14hvsw17h/view?usp=drive_web",
  },
  {
    id: "jr-2021",
    title: "Junior Intermediate College Question Paper 2021",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2021",
    url: "https://drive.google.com/file/d/17eebA5o1cB0GnW0cfsyPDPTnV4XGEpSN/view?usp=drive_web",
  },
  {
    id: "jr-2020-a",
    title: "Junior Intermediate College Paper 2020 (Set A)",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2020",
    url: "https://drive.google.com/file/d/15oND6IHUNPcHe_lJB2fxkCoCGG-QE8EZ/view?usp=drive_web",
  },
  {
    id: "jr-2020-b",
    title: "Junior Intermediate College Paper 2020 (Set B)",
    category: "junior",
    subCategory: "Classes XI & XII",
    year: "2020",
    url: "https://drive.google.com/file/d/1sAMwNgHYxJ92DoSu0ivoZ5cDaqapVmva/view?usp=drive_web",
  },

  // Senior College Archives (2020-2023)
  {
    id: "sr-2023-dec2",
    title: "Senior-Degree College Paper (2 Dec 2023)",
    category: "senior",
    subCategory: "Undergraduates",
    year: "2023",
    url: "https://drive.google.com/file/d/1HDqMvzqFMOKYzUfAFuVQ4nibMnp9471j/view?usp=drive_web",
  },
  {
    id: "sr-2023-nov25",
    title: "Senior-Degree College Paper (25 Nov 2023)",
    category: "senior",
    subCategory: "Undergraduates",
    year: "2023",
    url: "https://drive.google.com/file/d/1_z88hTg9rSLzqQ1SNsM5VzVMv9Dqh9Xb/view?usp=drive_web",
  },
  {
    id: "sr-2022",
    title: "Senior-Degree College Question Paper 2022",
    category: "senior",
    subCategory: "Undergraduates",
    year: "2022",
    url: "https://drive.google.com/file/d/1NnWH1iuhy0wA1inxDXWDZ_CBcelaITmk/view?usp=drive_web",
  },
  {
    id: "sr-2021",
    title: "Senior-Degree College Question Paper 2021",
    category: "senior",
    subCategory: "Undergraduates",
    year: "2021",
    url: "https://drive.google.com/file/d/1cc97qWejxLA__rNexjM3MHoMzUjtmFty/view?usp=drive_web",
  },
  {
    id: "sr-2020-a",
    title: "Senior-Degree College Paper 2020 (Set A)",
    category: "senior",
    subCategory: "Undergraduates",
    year: "2020",
    url: "https://drive.google.com/file/d/1Tst_UGwT4BK-nsz_E1dfG_iEBOIqI8qc/view?usp=drive_web",
  },
  {
    id: "sr-2020-b",
    title: "Senior-Degree College Paper 2020 (Set B)",
    category: "senior",
    subCategory: "Undergraduates",
    year: "2020",
    url: "https://drive.google.com/file/d/1lM-T7oKIIVSczEHNZNQ532XkZyUpIsKP/view?usp=drive_web",
  },
];

export default function MockPapersContent() {
  const [activeTab, setActiveTab] = useState<"all" | "school" | "junior" | "senior" | "key">("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPapers = ALL_PAPERS.filter((paper) => {
    const matchesTab = activeTab === "all" || paper.category === activeTab;
    const matchesYear = selectedYear === "all" || paper.year === selectedYear;
    const matchesSearch =
      searchQuery === "" ||
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (paper.language && paper.language.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (paper.subCategory && paper.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesYear && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* =========================================================
          1. HERO HEADER (EXACT MAROON GRADIENT + 4 STAT CARDS)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#420B13] via-[#5E0E1C] to-[#911628] text-white py-12 sm:py-16 lg:py-8 lg:min-h-[calc(100dvh-5rem)] flex flex-col justify-center">
        {/* Luminous crimson and rose ambient glow */}
        <div
          className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[350px] w-full max-w-7xl rounded-full bg-[#B81E34]/30 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-[#9E1528]/35 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center my-auto">
          {/* Top Text Block (Left-Aligned) */}
          <div className="max-w-5xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-zinc-200 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span>OFFICIAL ARCHIVE · QUESTION PAPERS & KEYS</span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              Mock & Practice Papers
            </h1>

            {/* Description */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-normal max-w-3xl">
              Access authentic past exam papers, multilingual school test sets, and official master answer keys from <strong>2020 through 2025</strong>. Benchmark your preparation with the actual offline 100-MCQ format.
            </p>

            {/* Action Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://drive.google.com/drive/folders/1wKE-nYBvp3_xRPoR_Tjm-bwDGJoF7oFM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#610D17] hover:bg-zinc-100 shadow-md transition-all"
              >
                <svg className="w-4 h-4 text-[#610D17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <span>Browse All Papers ↗</span>
              </a>
              <Link
                href="/student-registration"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#610D17] hover:bg-zinc-100 shadow-md transition-all"
              >
                <span>Register for NTS 2026 →</span>
              </Link>
            </div>
          </div>

          {/* 4 Bottom Stat / Highlight Cards */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Card 1: Featured White Card */}
            <div className="rounded-2xl bg-white p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center shadow-md">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-zinc-900 leading-tight block">
                  2020 – 2025
                </span>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-snug font-medium max-w-[220px] mx-auto">
                  6 years of verified nationwide actual papers & answer keys
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-zinc-100">
                <span className="h-1.5 w-1.5 rounded-full bg-[#610D17] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  ARCHIVE TIMELINE
                </span>
              </div>
            </div>

            {/* Card 2: Translucent Maroon Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-white leading-tight block">
                  3 Tiers
                </span>
                <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                  Schools (8th–X), Junior College & Degree (UG) levels
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                  STUDENT CATEGORIES
                </span>
              </div>
            </div>

            {/* Card 3: Translucent Maroon Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-white leading-tight block">
                  5 Mediums
                </span>
                <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                  English, Hindi, Urdu, Bengali & Gujarati languages
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                  QUESTION PAPERS
                </span>
              </div>
            </div>

            {/* Card 4: Translucent Maroon Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 sm:p-5 lg:p-6 min-h-[150px] sm:min-h-[165px] lg:h-48 flex flex-col justify-between text-center backdrop-blur-xs">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-tight text-white leading-tight block">
                  100% Free
                </span>
                <p className="mt-2 text-xs sm:text-sm text-zinc-200/90 leading-snug font-medium max-w-[220px] mx-auto">
                  Instant PDF downloads & offline practice sets for every student
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2.5 border-t border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E06D7A] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70">
                  OPEN ACCESS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CORE REPOSITORIES (PROFESSIONAL CATEGORY CARDS)
      ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
                Resource Collections
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Official Category Collections
              </h2>
              <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
                Select your academic tier below to access verified previous years&apos; question papers, marking keys, and test packages.
              </p>
            </div>

            <a
              href="https://drive.google.com/drive/folders/1wKE-nYBvp3_xRPoR_Tjm-bwDGJoF7oFM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#610D17] hover:underline"
            >
              <span>View Complete Archive</span>
              <span>→</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Category Card 1: Schools */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6 flex flex-col justify-between hover:border-[#610D17]/40 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#610D17]/10 text-[#610D17] transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-200">
                    Classes 8th, IX, X
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors">
                  School Category Papers
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Question papers for 8th, 9th, and 10th in 5 languages (English, Urdu, Hindi, Gujarati, Bengali).
                </p>

                <div className="mt-4 space-y-1.5 text-xs text-zinc-600">
                  <a
                    href="https://drive.google.com/drive/folders/14BYedE007saHdPHDbBcT9f90LDH5DfUk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 transition-colors"
                  >
                    <span>Class 8th Papers</span>
                    <span className="text-[#610D17] font-bold">↗</span>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1jZ1Rcmerw0DB7DpXaC05kcJcfXcLw6SU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 transition-colors"
                  >
                    <span>Class 9th Papers</span>
                    <span className="text-[#610D17] font-bold">↗</span>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1m6pYNt8ebwtztgJkaluLGd0lUITY_odG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 transition-colors"
                  >
                    <span>Class 10th Papers</span>
                    <span className="text-[#610D17] font-bold">↗</span>
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-200">
                <a
                  href="https://drive.google.com/drive/folders/1uh9ZFUVT_WviWdCy3Wo0aZW_dba9VCsZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#610D17] text-white py-2.5 text-xs font-bold hover:bg-[#4a0a12] transition-colors"
                >
                  Access School Papers →
                </a>
              </div>
            </div>

            {/* Category Card 4: NTS 2025 Latest Edition */}
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-5 sm:p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-300">
                    Latest 2025 Edition
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-emerald-900 transition-colors">
                  NTS 2025 Latest Edition
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  The latest examination papers with official master solutions and verified scoring keys.
                </p>

                <div className="mt-4 space-y-1.5 text-xs text-zinc-700">
                  <a
                    href="https://drive.google.com/file/d/1XqQflG4hy0loE_2UkEV6jJ-x1t54IRw6/view?usp=drive_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-emerald-200 hover:border-emerald-400 font-semibold text-emerald-800 transition-colors"
                  >
                    <span>2025 Master Answer Key</span>
                    <span>PDF ↗</span>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1qRF44TNFmtmJ1yDGDJBDOY8GMHbU88ik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-emerald-200 hover:border-emerald-400 text-zinc-800 transition-colors"
                  >
                    <span>2025 Question Papers</span>
                    <span className="text-emerald-700 font-bold">↗</span>
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-emerald-200">
                <a
                  href="https://drive.google.com/drive/folders/1qRF44TNFmtmJ1yDGDJBDOY8GMHbU88ik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-700 text-white py-2.5 text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  Access 2025 Collection →
                </a>
              </div>
            </div>

            {/* Category Card 2: Junior College */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6 flex flex-col justify-between hover:border-[#610D17]/40 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-800 border border-blue-200">
                    Classes XI & XII
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors">
                  Junior College Papers
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Science, Commerce & Arts intermediate papers covering 2020 through 2025.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-200">
                <a
                  href="https://drive.google.com/drive/folders/1Y7FoYmq1uoi204gIbIo2kHjxkaIELUSb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#610D17] text-white py-2.5 text-xs font-bold hover:bg-[#4a0a12] transition-colors"
                >
                  Access Junior College Papers →
                </a>
              </div>
            </div>

            {/* Category Card 3: Senior College */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6 flex flex-col justify-between hover:border-[#610D17]/40 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-5.25 6.557c.75.25 1.5.47 2.25.66" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-bold text-purple-800 border border-purple-200">
                    Undergraduate (UG)
                  </span>
                </div>
                <h3 className="mt-3.5 text-lg font-bold text-zinc-900 group-hover:text-[#610D17] transition-colors">
                  Senior College Papers
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  General Degree & Technical student question papers focusing on aptitude and career exams.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-200">
                <a
                  href="https://drive.google.com/drive/folders/1P0w5m9OGgBIqB9lRfrQKCPjzcW9BJM0T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#610D17] text-white py-2.5 text-xs font-bold hover:bg-[#4a0a12] transition-colors"
                >
                  Access Senior College Papers →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. INTERACTIVE FILTERABLE PAPERS VAULT
      ========================================================= */}
      <section className="py-12 sm:py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Download Vault
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Individual Question Papers & Keys
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Filter by category, academic year, or search by subject or language.
            </p>
          </div>

          {/* Controls: Tabs & Filters */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-zinc-200">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "all"
                    ? "bg-[#610D17] text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                All ({ALL_PAPERS.length})
              </button>
              <button
                onClick={() => setActiveTab("school")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "school"
                    ? "bg-[#610D17] text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                Schools (8th–X)
              </button>
              <button
                onClick={() => setActiveTab("junior")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "junior"
                    ? "bg-[#610D17] text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                Junior College (XI–XII)
              </button>
              <button
                onClick={() => setActiveTab("senior")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "senior"
                    ? "bg-[#610D17] text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                Senior College (UG)
              </button>
              <button
                onClick={() => setActiveTab("key")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "key"
                    ? "bg-[#610D17] text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                Answer Keys
              </button>
            </div>

            {/* Year & Search Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full sm:w-auto bg-white border border-zinc-200 rounded-xl px-3 py-2 text-xs font-semibold text-zinc-700 focus:outline-none focus:border-[#610D17]"
              >
                <option value="all">All Years (2020–2025)</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>

              <div className="relative w-full sm:w-60">
                <input
                  type="text"
                  placeholder="Search papers (e.g. Urdu, 10th)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-zinc-200 rounded-xl pl-8 pr-3 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#610D17]"
                />
                <svg
                  className="w-4 h-4 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers.map((paper) => {
              const isKey = paper.category === "key";
              const isFolder = paper.isFolder;

              return (
                <div
                  key={paper.id}
                  className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                    isKey
                      ? "border-emerald-200 bg-white hover:border-emerald-400 hover:shadow-xs"
                      : isFolder
                      ? "border-[#610D17]/25 bg-white hover:border-[#610D17] hover:shadow-xs"
                      : "border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-xs"
                  }`}
                >
                  <div>
                    {/* Badge Row */}
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span
                        className={`rounded-full px-2.5 py-0.5 ${
                          isKey
                            ? "bg-emerald-100 text-emerald-800"
                            : paper.category === "school"
                            ? "bg-amber-100 text-amber-800"
                            : paper.category === "junior"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {paper.subCategory || paper.category.toUpperCase()}
                      </span>
                      <span className="text-zinc-500 font-semibold">{paper.year} Edition</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-base font-bold text-zinc-900 leading-snug">
                      {paper.title}
                    </h3>

                    {/* Metadata */}
                    <div className="mt-2.5 flex items-center gap-2 text-xs text-zinc-500">
                      {paper.language && (
                        <span className="inline-flex items-center gap-1 rounded bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                          {paper.language} Medium
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 rounded bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                        {isFolder ? "Full Collection" : "PDF Document"}
                      </span>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors ${
                        isKey
                          ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                          : "bg-zinc-50 text-[#610D17] hover:bg-[#610D17] hover:text-white border border-zinc-200"
                      }`}
                    >
                      <span>{isFolder ? "View Collection" : isKey ? "View Answer Key" : "View Paper"}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPapers.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-zinc-200 mt-6">
              <p className="text-sm font-semibold text-zinc-600">No mock papers match your filter criteria.</p>
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSelectedYear("all");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-[#610D17] underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          4. EXAM PATTERN & PREPARATION TIPS
      ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
              Exam Structure
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Standard NTS Pattern for Practice
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              When solving these mock test papers, simulate real exam conditions following this exact distribution.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Section A</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">MAT (Mental Ability Test)</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                50 Questions evaluating logical deduction, analytical aptitude, pattern completion, and spatial reasoning.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 50 Marks</span>
                <span className="text-emerald-700">Verbal & Non-Verbal</span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Section B</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">SAT (Scholastic Aptitude)</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                50 Questions assessing core subject proficiency tailored to student level (Math, Science, Social Sciences/General Knowledge).
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Weightage: 50 Marks</span>
                <span className="text-emerald-700">NCERT/State Syllabus</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#610D17]/30 bg-[#fbf2f3]/40 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#610D17]">Marking Guidelines</span>
              <h3 className="mt-1.5 text-lg font-bold text-zinc-900">Zero Negative Marking</h3>
              <p className="mt-1 text-xs text-zinc-700 leading-relaxed">
                Total 100 MCQs in 90 Minutes. +1 mark for each correct answer. 0 marks deducted for wrong answers. Attempt all 100 questions!
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-200 text-xs font-semibold text-zinc-800 flex items-center justify-between">
                <span>Exam Format: Pen & Paper</span>
                <span className="text-[#610D17] font-bold">OMR Sheet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CALL TO ACTION
      ========================================================= */}
      <section className="bg-zinc-50 py-14 sm:py-20 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#610D17]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#610D17]">
            Upcoming NTS 2026
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Ready to Take the Actual Examination?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Practice with past papers, master the OMR format, and enroll online for the nationwide offline test across 600+ districts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button href="/student-registration" variant="primary" size="md">
              Register as Student
            </Button>
            <Button href="/About_NTS" variant="outline" size="md">
              Read Complete Syllabus
            </Button>
            <a
              href="https://drive.google.com/drive/folders/1wKE-nYBvp3_xRPoR_Tjm-bwDGJoF7oFM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors"
            >
              Browse Master Repository ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
