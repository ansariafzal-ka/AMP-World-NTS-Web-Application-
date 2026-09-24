import React from "react";
import SectionCard from "./SectionCard";

interface AttendanceSummarySectionProps {
  onOpenModal: () => void;
}

export default function AttendanceSummarySection({ onOpenModal }: AttendanceSummarySectionProps) {
  return (
    <SectionCard id="attendance-summary" title="Attendance Summary" uppercase={false}>
      <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4">
        <p className="font-medium leading-relaxed">
          <strong className="text-zinc-900 font-bold">Note:</strong> Please submit your Exam Centre Attendance Summary immediately after the examination. This is important and mandatory.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 rounded-lg bg-[#3D0C13] hover:bg-[#2B080D] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <span>Submit Summary</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
