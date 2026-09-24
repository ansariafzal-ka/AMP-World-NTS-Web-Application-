import React from "react";
import SectionCard from "./SectionCard";

interface AttendanceSheetSectionProps {
  onOpenAttendanceSheet?: (classLabel: string) => void;
}

export default function AttendanceSheetSection({
  onOpenAttendanceSheet,
}: AttendanceSheetSectionProps) {
  const classes = [
    { label: "Class 8th", value: "8" },
    { label: "Class 9th", value: "9" },
    { label: "Class 10th", value: "10" },
    { label: "Class XI & XII", value: "XI & XII" },
    { label: "Senior College", value: "Senior College" },
  ];

  return (
    <SectionCard id="attendance-sheet" title="ATTENDANCE SHEET (WEB FORM)">
      <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4 leading-relaxed">
        <div>
          <p className="font-semibold text-zinc-900 text-sm">
            Digital Student Attendance Roster:
          </p>
          <p className="text-xs text-zinc-500 mt-0.5">
            Select a class below to open the online web attendance form and mark <strong>Present / Absent</strong> for registered candidates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {classes.map((cls) => (
            <button
              key={cls.value}
              type="button"
              onClick={() => onOpenAttendanceSheet && onOpenAttendanceSheet(cls.value)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-rose-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              <span>{cls.label}</span>
            </button>
          ))}
        </div>

        <p className="text-xs text-zinc-500 font-medium pt-1 border-t border-zinc-100">
          <strong className="text-zinc-700">Note:</strong> Registered student records become active for attendance after Hall Tickets generation.
        </p>
      </div>
    </SectionCard>
  );
}
