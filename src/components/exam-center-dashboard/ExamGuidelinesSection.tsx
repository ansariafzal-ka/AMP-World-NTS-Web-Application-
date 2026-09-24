import React from "react";
import SectionCard from "./SectionCard";
import { DRIVE_DOWNLOAD_URL, VIDEO_ORIENTATION_URL } from "./dashboardData";

export default function ExamGuidelinesSection() {
  return (
    <SectionCard id="exam-guidelines" title="EXAM GUIDELINES">
      <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm font-semibold text-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 py-1.5 border-b border-zinc-100">
          <span>Exam Centre Instruction</span>
          <a
            href={DRIVE_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
          >
            <span>Click Here</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-1.5 border-b border-zinc-100">
          <span>Students Instruction</span>
          <a
            href={DRIVE_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
          >
            <span>Click Here</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-1.5 border-b border-zinc-100">
          <span>Orientation Video</span>
          <a
            href={VIDEO_ORIENTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
            </svg>
            <span>Watch Video</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-1.5">
          <span>Invigilator Instruction</span>
          <a
            href={DRIVE_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
          >
            <span>Click Here</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
      </div>
    </SectionCard>
  );
}
