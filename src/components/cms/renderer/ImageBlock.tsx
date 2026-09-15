import Image from 'next/image';
import { ImageBlockContent } from '@/types/cms.types';

export default function ImageBlock({ content }: { content: ImageBlockContent }) {
  return (
    <section className="py-12 sm:py-16 bg-zinc-50 border-b border-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-md border border-zinc-200/80">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-100 flex items-center justify-center">
            {content.imageUrl ? (
              <Image
                src={content.imageUrl}
                alt={content.alt || 'CMS image'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="text-zinc-400 text-sm font-medium">No image provided</div>
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
