import React from "react";
import type { Metadata } from "next";
import ExamCentreSidebar from "@/components/exam-centre/ExamCentreSidebar";
import ExamCentreTopBar from "@/components/exam-centre/ExamCentreTopBar";

export const metadata: Metadata = {
  title: "Exam Centre Portal - AMP NTS 2026",
  description: "Official Examination Centre Management Portal for AMP National Talent Search 2026",
};

export default function ExamCentreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-zinc-900 font-sans antialiased flex-col md:flex-row">
      {/* Sidebar with only Dashboard under OVERVIEW */}
      <ExamCentreSidebar />

      {/* Main Content Area with Top Bar */}
      <div className="flex-1 flex flex-col min-w-0">
        <ExamCentreTopBar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
