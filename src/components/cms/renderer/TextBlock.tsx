import { TextBlockContent } from '@/types/cms.types';

export default function TextBlock({ content }: { content: TextBlockContent }) {
  const isCentered = content.alignment === 'center';

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-zinc-100">
      <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 ${isCentered ? 'text-center' : 'text-left'}`}>
        {content.heading && (
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-6">
            {content.heading}
          </h2>
        )}
        {content.body && (
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed whitespace-pre-line">
            {content.body}
          </p>
        )}
      </div>
    </section>
  );
}
