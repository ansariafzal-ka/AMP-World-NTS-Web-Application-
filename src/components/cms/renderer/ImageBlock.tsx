import { ImageBlockContent } from '@/types/cms.types';

export default function ImageBlock({ content }: { content: ImageBlockContent }) {
  return (
    <section className="py-10 sm:py-14 bg-zinc-50 border-b border-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white p-3 sm:p-4 shadow-md border border-zinc-200/80">
          <div className="w-full overflow-hidden rounded-xl bg-zinc-50 flex items-center justify-center">
            {content.imageUrl ? (
              <img
                src={content.imageUrl}
                alt={content.alt || 'CMS image'}
                className="w-full h-auto max-h-[750px] object-contain rounded-lg mx-auto"
                loading="lazy"
              />
            ) : (
              <div className="py-16 text-zinc-400 text-sm font-medium">No image provided</div>
            )}
          </div>
          {content.caption && (
            <p className="mt-3 text-center text-xs sm:text-sm font-medium text-zinc-500 italic">
              {content.caption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
