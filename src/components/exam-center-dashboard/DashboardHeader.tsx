import React from "react";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className="space-y-4 pt-1 pb-2">
      <div className="flex items-center justify-between gap-4">
        <Image
          src="/amp_Logo.png"
          alt="Association of Muslim Professionals"
          width={260}
          height={48}
          className="h-9 sm:h-12 w-auto object-contain"
          priority
        />
        <Image
          src="/nts-logo-2026.jpg"
          alt="National Talent Search 2026"
          width={120}
          height={120}
          className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded-md"
          priority
        />
      </div>

      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold text-[#3D0C13] tracking-tight uppercase">
        AMP NTS 2026 EXAM CENTRE DASHBOARD
      </h1>
    </div>
  );
}
