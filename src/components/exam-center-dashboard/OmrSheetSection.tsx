import React from "react";
import SectionCard from "./SectionCard";
import { DRIVE_DOWNLOAD_URL } from "./dashboardData";

interface OmrSheetSectionProps {
  capacityAllocated: number;
}

export default function OmrSheetSection({ capacityAllocated }: OmrSheetSectionProps) {
  return (
    <SectionCard id="omr-sheet" title="OMR SHEET">
      <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4 leading-relaxed">
        <h3 className="text-base sm:text-lg font-bold text-zinc-900">
          Total number of OMR Sheet required :{" "}
          <span className="text-[#3D0C13] font-extrabold">{capacityAllocated}</span>
        </h3>

        <ol className="space-y-3 list-decimal list-inside text-zinc-700 font-medium">
          <li>
            OMR Sheet will be sent to any One Exam Centre in District Headquarter of your District/City between 26th November to 5th December 2026.
          </li>
          <li>
            You will be notified when it is available to collect it from Central Exam Centre at District Head Quarter.
          </li>
          <li className="flex flex-wrap items-center gap-2 py-1">
            <span>Please see this image to understand how to use OMR Sheet (OMR Sample with Instructions):</span>
            <a
              href={DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download Sample</span>
            </a>
          </li>
          <li className="flex flex-wrap items-center gap-2 py-1">
            <span>For any Extra Students, you will have to download this Actual OMR Sheet and do High Quality Printing on 100 GSM Paper:</span>
            <a
              href={DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download OMR Sheet</span>
            </a>
          </li>
          <li className="flex flex-wrap items-center gap-2 py-1">
            <span>How to Use OMR Sheet:</span>
            <a
              href={DRIVE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-[#3D0C13] hover:bg-[#2B080D] text-white shadow-2xs transition-colors cursor-pointer"
            >
              <span>Important Instructions</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </SectionCard>
  );
}
