import React from "react";
import SectionCard from "./SectionCard";
import { Observer } from "./dashboardData";

interface ObserverDetailsSectionProps {
  observers: Observer[];
}

export default function ObserverDetailsSection({ observers }: ObserverDetailsSectionProps) {
  return (
    <SectionCard id="observer-details" title="Observer Details:" uppercase={false}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm text-zinc-800 border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
              <th scope="col" className="py-3 px-4 w-12 text-center">#</th>
              <th scope="col" className="py-3 px-4">Observer Name</th>
              <th scope="col" className="py-3 px-4">Observer Phone Number</th>
              <th scope="col" className="py-3 px-4">Observer Type</th>
              <th scope="col" className="py-3 px-4">Observer Designation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {observers.map((obs) => (
              <tr key={obs.id} className="hover:bg-zinc-50/60 transition-colors">
                <td className="py-3 px-4 text-center font-semibold text-zinc-400">{obs.id}</td>
                <td className="py-3 px-4 font-bold text-[#3D0C13]">{obs.name}</td>
                <td className="py-3 px-4">
                  <a
                    href={`tel:${obs.phone}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono text-xs font-semibold border border-zinc-200 shadow-2xs transition-colors"
                    title={`Call ${obs.name}`}
                  >
                    <svg className="w-3 h-3 text-[#3D0C13]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span>{obs.phone}</span>
                  </a>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      obs.type.includes("AMP")
                        ? "bg-rose-50 text-[#3D0C13] border border-rose-200/60"
                        : "bg-[#FEF7EC] text-[#9A6218] border border-[#FDE6C8]"
                    }`}
                  >
                    {obs.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-zinc-600">{obs.designation || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
