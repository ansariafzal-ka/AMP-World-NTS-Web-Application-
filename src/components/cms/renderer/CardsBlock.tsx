import Link from 'next/link';
import { CardsBlockContent } from '@/types/cms.types';

export default function CardsBlock({ content }: { content: CardsBlockContent }) {
  const isTwoCol = content.columns === 2;

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(content.sectionTitle || content.sectionSubtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
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

        <div className={`grid grid-cols-1 ${isTwoCol ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 sm:gap-8`}>
          {content.items?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#610D17]/30 transition-all duration-200"
            >
              <div className="space-y-3">
                {item.tag && (
                  <span className="inline-block rounded-md bg-[#fbf2f3] px-2.5 py-1 text-xs font-bold text-[#610D17]">
                    {item.tag}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.linkText && (
                <div className="pt-5 mt-4 border-t border-zinc-100">
                  <Link
                    href={item.linkUrl || '#'}
                    className="inline-flex items-center text-sm font-semibold text-[#610D17] hover:text-[#4D0911] hover:underline"
                  >
                    {item.linkText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
