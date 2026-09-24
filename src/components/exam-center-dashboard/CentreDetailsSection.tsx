import React from "react";
import SectionCard from "./SectionCard";
import { CentreData } from "./dashboardData";

interface CentreDetailsSectionProps {
  centre: CentreData;
}

export default function CentreDetailsSection({ centre }: CentreDetailsSectionProps) {
  return (
    <SectionCard id="centre-details" title="CENTER DETAILS">
      <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-800 space-y-2.5 font-medium leading-relaxed">
        <div className="flex flex-wrap items-center gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36">Centre Number:</strong>
          <span className="font-mono font-bold text-xs bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-md border border-zinc-200">
            {centre.code}
          </span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36">Centre Name:</strong>
          <span className="font-bold text-[#3D0C13] text-sm sm:text-base">{centre.name}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36">Point of Contact:</strong>
          <span className="text-zinc-900">{centre.pocName}</span>
          <span className="text-zinc-500 font-mono text-xs">(Phone: {centre.pocPhone})</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36">Centre Address:</strong>
          <span className="text-zinc-700">{centre.address}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36">City:</strong>
          <span className="text-zinc-700">{centre.city}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36">State:</strong>
          <span className="text-zinc-700">{centre.state}</span>
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <strong className="text-zinc-900 font-semibold min-w-36">Pincode:</strong>
          <span className="text-zinc-700 font-mono">{centre.pincode}</span>
        </div>
      </div>
    </SectionCard>
  );
}
