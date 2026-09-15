import Link from 'next/link';
import { CtaBlockContent } from '@/types/cms.types';

export default function CtaBlock({ content }: { content: CtaBlockContent }) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#610D17] to-[#4D0911] text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          {content.title}
        </h2>
        {content.description && (
          <p className="text-base sm:text-lg text-rose-100/90 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {content.primaryButtonText && (
            <Link
              href={content.primaryButtonLink || '#'}
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-[#610D17] shadow-lg transition-all duration-200 hover:bg-rose-50 hover:scale-[1.02] active:scale-[0.98]"
            >
              {content.primaryButtonText}
            </Link>
          )}
          {content.secondaryButtonText && (
            <Link
              href={content.secondaryButtonLink || '#'}
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-xs px-7 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-200 hover:bg-white/20"
            >
              {content.secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
