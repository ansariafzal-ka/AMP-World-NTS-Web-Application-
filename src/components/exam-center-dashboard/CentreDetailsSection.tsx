import React from "react";
import SectionCard from "./SectionCard";
import { CentreData } from "./dashboardData";

interface CentreDetailsSectionProps {
  centre: CentreData;
}

export default function CentreDetailsSection({ centre }: CentreDetailsSectionProps) {
  const mapLink = centre.mapUrl || centre.googleMapLink;

  return (
    <SectionCard id="centre-details" title="CENTER DETAILS">
      <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-2.5 font-medium leading-relaxed">
        <div className="flex flex-wrap items-center gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">Centre Number:</strong>
          <span className="font-mono font-bold text-xs bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-md border border-zinc-200">
            {centre.code}
          </span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">Centre Name:</strong>
          <span className="font-bold text-[#3D0C13] text-sm sm:text-base">{centre.name}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">Single Point of Contact:</strong>
          <span className="text-zinc-900">{centre.pocName}</span>
          <span className="text-zinc-500 font-mono text-xs">(Phone: {centre.pocPhone})</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">Centre Address:</strong>
          <span className="text-zinc-700">{centre.address}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">City:</strong>
          <span className="text-zinc-700">{centre.city}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">State:</strong>
          <span className="text-zinc-700">{centre.state}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">Pincode:</strong>
          <span className="text-zinc-700 font-mono">{centre.pincode}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36 sm:min-w-44 shrink-0">Map:</strong>
          {mapLink ? (
            <a
              href={mapLink.startsWith("http") ? mapLink : `https://${mapLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 hover:underline font-semibold break-all"
            >
              <span>{mapLink}</span>
              <svg className="w-3.5 h-3.5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          ) : (
            <span className="text-zinc-400 font-normal"></span>
          )}
        </div>
      </div>
    </SectionCard>
  );
}
