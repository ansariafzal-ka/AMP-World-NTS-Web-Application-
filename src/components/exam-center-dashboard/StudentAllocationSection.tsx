import React from "react";
import SectionCard from "./SectionCard";
import { AllocationRow, DEFAULT_ALLOCATION_ROWS } from "./dashboardData";

interface StudentAllocationSectionProps {
  capacityAllocated: number;
  capacityTotal: number;
  rows?: AllocationRow[];
}

export default function StudentAllocationSection({
  capacityAllocated,
  capacityTotal,
  rows = DEFAULT_ALLOCATION_ROWS,
}: StudentAllocationSectionProps) {
  return (
    <SectionCard id="student-allocation" title="STUDENT ALLOCATION DETAILS">
      <div className="p-4 sm:p-5">
        <div className="mb-3 text-xs sm:text-sm font-semibold text-zinc-800">
          Capacity:{" "}
          <span className="text-[#3D0C13] font-extrabold">{capacityAllocated}</span>
          <span className="text-zinc-500"> / {capacityTotal}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center text-xs sm:text-sm text-zinc-800 border border-zinc-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
                <th scope="col" className="py-2.5 px-4 text-left border-r border-zinc-200">Class</th>
                <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Urdu</th>
                <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Hindi</th>
                <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">English</th>
                <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Gujarati</th>
                <th scope="col" className="py-2.5 px-3 border-r border-zinc-200">Bengali</th>
                <th scope="col" className="py-2.5 px-4 font-black text-zinc-900">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 font-medium">
              {rows.map((r) => (
                <tr key={r.classLabel} className="hover:bg-zinc-50/60">
                  <td className="py-2 px-4 text-left font-bold text-zinc-900 border-r border-zinc-200">
                    {r.classLabel}
                  </td>
                  <td className={`py-2 px-3 border-r border-zinc-200 ${r.urdu === 0 ? "text-zinc-400" : "text-zinc-700 font-semibold"}`}>
                    {r.urdu}
                  </td>
                  <td className={`py-2 px-3 border-r border-zinc-200 ${r.hindi === 0 || r.hindi === "-" ? "text-zinc-400" : "text-zinc-700 font-semibold"}`}>
                    {r.hindi}
                  </td>
                  <td className={`py-2 px-3 border-r border-zinc-200 ${r.english === 0 || r.english === "-" ? "text-zinc-400" : "text-zinc-700 font-semibold"}`}>
                    {r.english}
                  </td>
                  <td className={`py-2 px-3 border-r border-zinc-200 ${r.gujarati === 0 || r.gujarati === "-" ? "text-zinc-400" : "text-zinc-700 font-semibold"}`}>
                    {r.gujarati}
                  </td>
                  <td className={`py-2 px-3 border-r border-zinc-200 ${r.bengali === 0 || r.bengali === "-" ? "text-zinc-400" : "text-zinc-700 font-semibold"}`}>
                    {r.bengali}
                  </td>
                  <td className="py-2 px-4 font-bold text-zinc-900">{r.total}</td>
                </tr>
              ))}
              <tr className="bg-zinc-100/90 font-black text-zinc-900 border-t-2 border-zinc-300">
                <td className="py-2.5 px-4 text-left border-r border-zinc-200 font-bold uppercase tracking-wide">Total</td>
                <td className="py-2.5 px-3 border-r border-zinc-200">0</td>
                <td className="py-2.5 px-3 border-r border-zinc-200">3</td>
                <td className="py-2.5 px-3 border-r border-zinc-200 font-extrabold text-[#3D0C13]">180</td>
                <td className="py-2.5 px-3 border-r border-zinc-200">0</td>
                <td className="py-2.5 px-3 border-r border-zinc-200">0</td>
                <td className="py-2.5 px-4 font-extrabold text-[#3D0C13] text-sm">183</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SectionCard>
  );
}
