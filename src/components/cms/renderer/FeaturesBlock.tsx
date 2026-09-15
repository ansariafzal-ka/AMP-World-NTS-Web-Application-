import { CheckCircle2 } from 'lucide-react';
import { FeaturesBlockContent } from '@/types/cms.types';

export default function FeaturesBlock({ content }: { content: FeaturesBlockContent }) {
  const items = content.items || [];
  const totalItems = items.length;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(content.sectionTitle || content.sectionSubtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
            {content.sectionTitle && (
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                {content.sectionTitle}
              </h2>
            )}
            {content.sectionSubtitle && (
              <p className="text-sm sm:text-base text-zinc-600">
                {content.sectionSubtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {items.map((item, idx) => {
            // When total is 3 or odd, center the last item on tablet (2-column layout)
            const isLastOdd = totalItems % 2 === 1 && idx === totalItems - 1;

            return (
              <div
                key={item.id}
                className={`flex items-start gap-4 rounded-2xl border border-zinc-200/80 bg-white p-5 sm:p-6 shadow-2xs transition-all hover:border-[#610D17]/30 hover:shadow-xs min-w-0 ${
                  isLastOdd
                    ? 'sm:col-span-2 sm:max-w-md sm:w-full sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0'
                    : 'w-full'
                }`}
              >
                <div className="shrink-0 rounded-xl bg-[#fbf2f3] p-2.5 text-[#610D17]">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#610D17]" />
                </div>
                <div className="space-y-1.5 min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug break-words">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

