import React from "react";

interface SectionCardProps {
  id: string;
  title: string;
  uppercase?: boolean;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
}

export default function SectionCard({
  id,
  title,
  uppercase = true,
  children,
  headerRight,
}: SectionCardProps) {
  return (
    <section
      aria-labelledby={`section-${id}`}
      className="rounded-2xl border border-zinc-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
    >
      <div className="bg-[#3D0C13] px-5 sm:px-6 py-3.5 text-white flex items-center justify-between">
        <h2
          id={`section-${id}`}
          className={`text-xs sm:text-sm font-bold tracking-wider ${
            uppercase ? "uppercase" : ""
          }`}
        >
          {title}
        </h2>
        {headerRight && <div>{headerRight}</div>}
      </div>
      <div>{children}</div>
    </section>
  );
}
