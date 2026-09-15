'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AccordionBlockContent } from '@/types/cms.types';

export default function AccordionBlock({ content }: { content: AccordionBlockContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {(content.sectionTitle || content.sectionSubtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            {content.sectionTitle && (
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                {content.sectionTitle}
              </h2>
            )}
            {content.sectionSubtitle && (
              <p className="text-base text-zinc-600">
                {content.sectionSubtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-3">
          {content.items?.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#610D17]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-zinc-600 border-t border-zinc-100 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
