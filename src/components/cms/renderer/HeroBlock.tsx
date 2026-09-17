import Link from 'next/link';
import { HeroBlockContent } from '@/types/cms.types';

export default function HeroBlock({ content }: { content: HeroBlockContent }) {
  const c = content || {} as HeroBlockContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#610D17] via-[#4D0911] to-[#2b050a] text-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {c.tag && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold text-zinc-100 backdrop-blur-sm border border-white/20">
            <span className="h-2 w-2 rounded-full bg-[#E06D7A] animate-pulse" />
            {c.tag}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {c.title}
        </h1>

        {c.subtitle && (
          <p className="text-base sm:text-lg md:text-xl font-normal text-rose-100/90 max-w-3xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        )}

        {c.buttonText && (
          <div className="pt-4 flex justify-center">
            <Link
              href={c.buttonLink || '#'}
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-[#610D17] shadow-lg transition-all duration-200 hover:bg-rose-50 hover:scale-[1.02] active:scale-[0.98]"
            >
              {c.buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
