"use client";

import React, { useState } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  points?: string[];
  content?: React.ReactNode;
  icon?: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

export interface AccordionProps {
  items: AccordionItem[];
  columns?: 1 | 2;
  defaultOpenIds?: string[];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion = ({
  items,
  columns = 2,
  defaultOpenIds = [],
  allowMultiple = true,
  className = "",
}: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (isOpen) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  const renderItem = (item: AccordionItem) => {
    const isOpen = openIds.includes(item.id);
    const Icon = item.icon;

    return (
      <div
        key={item.id}
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
            ? "border-[#610D17]/40 bg-white shadow-md ring-1 ring-[#610D17]/10"
            : "border-zinc-200/90 bg-white shadow-xs hover:border-[#610D17]/30 hover:shadow-sm"
          }`}
      >
        <button
          type="button"
          onClick={() => toggleAccordion(item.id)}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${item.id}`}
          className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#610D17]"
        >
          <div className="flex items-center gap-3.5 sm:gap-4">
            {Icon && (
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${isOpen
                    ? "border-[#610D17] bg-[#610D17] text-white shadow-sm"
                    : "border-[#610D17]/15 bg-[#FBF2F3] text-[#610D17]"
                  }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
            )}

            <h3
              className={`text-base sm:text-lg lg:text-xl font-bold transition-colors ${isOpen ? "text-[#610D17]" : "text-zinc-900"
                }`}
            >
              {item.title}
            </h3>
          </div>

          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen
                ? "rotate-180 bg-zinc-100 text-zinc-800"
                : "bg-zinc-100 text-zinc-500"
              }`}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div
            id={`accordion-content-${item.id}`}
            className="border-t border-zinc-100 px-5 pt-4 pb-6 sm:px-6 sm:pb-7"
          >
            {item.points && (
              <ul className="space-y-2.5 text-sm sm:text-base text-zinc-700 leading-relaxed">
                {item.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#610D17]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.content}
          </div>
        )}
      </div>
    );
  };

  if (columns === 1) {
    return (
      <div className={`space-y-4 sm:space-y-5 ${className}`}>
        {items.map((item) => renderItem(item))}
      </div>
    );
  }

  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start ${className}`}
    >
      <div className="flex flex-col space-y-4 sm:space-y-5">
        {leftItems.map((item) => renderItem(item))}
      </div>
      <div className="flex flex-col space-y-4 sm:space-y-5">
        {rightItems.map((item) => renderItem(item))}
      </div>
    </div>
  );
};

export default Accordion;
