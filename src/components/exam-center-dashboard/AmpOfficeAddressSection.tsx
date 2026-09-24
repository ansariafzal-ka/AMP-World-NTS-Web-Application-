import React from "react";
import SectionCard from "./SectionCard";
import { HEAD_OFFICE_DETAILS } from "./dashboardData";

export default function AmpOfficeAddressSection() {

  return (
    <SectionCard id="amp-address" title="AMP OFFICE ADDRESS">
      <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-4">
        <div className="space-y-1 font-medium leading-relaxed">
          <div className="font-bold text-zinc-900">To,</div>
          <div className="font-bold text-[#3D0C13]">{HEAD_OFFICE_DETAILS.recipient}</div>
          <div className="font-semibold text-zinc-900">{HEAD_OFFICE_DETAILS.organization}</div>
          <div>{HEAD_OFFICE_DETAILS.addressLine1}</div>
          <div>{HEAD_OFFICE_DETAILS.addressLine2}</div>
          <div className="flex items-center gap-2 pt-0.5">
            <strong className="text-zinc-900">Contact No:</strong>{" "}
            <a
              href={`tel:${HEAD_OFFICE_DETAILS.contactPhone}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono text-xs font-semibold border border-zinc-200 shadow-2xs transition-colors"
            >
              <svg className="w-3 h-3 text-[#3D0C13]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>{HEAD_OFFICE_DETAILS.contactPhone}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/PlainAddress.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3D0C13] hover:bg-[#2B080D] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Download Address Slip</span>
          </a>
        </div>
      </div>
    </SectionCard>
  );
}
