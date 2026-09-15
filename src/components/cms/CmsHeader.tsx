'use client';

import Link from 'next/link';
import { ChevronLeft, Globe, EyeOff, Save, Check, Loader2 } from 'lucide-react';

interface CmsHeaderProps {
  title: string;
  slug: string;
  status: 'DRAFT' | 'PUBLISHED';
  isSaving: boolean;
  onTitleChange: (newTitle: string) => void;
  onStatusToggle: () => void;
  onSave: () => void;
}

export default function CmsHeader({
  title,
  slug,
  status,
  isSaving,
  onTitleChange,
  onStatusToggle,
  onSave,
}: CmsHeaderProps) {
  const isPublished = status === 'PUBLISHED';

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur-md px-6 py-4">
      {/* Top Bar: Title & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Back, Editable Title, Slug */}
        <div className="flex items-start gap-3">
          <Link
            href="/cms/pages"
            className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
            title="Back to All Pages"
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>

          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <input
                type="text"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder="Page Title"
                className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight bg-transparent hover:bg-zinc-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#610D17] rounded-md px-1.5 py-0.5 -ml-1.5 transition-colors max-w-sm sm:max-w-md"
              />
              
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                  isPublished
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isPublished ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                {status}
              </span>
            </div>

            <p className="text-xs text-zinc-500 font-mono">
              /{slug || 'untitled'}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            href={`/${slug}`}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors shadow-2xs"
          >
            <Globe className="h-4 w-4 text-zinc-500" />
            Live Site
          </Link>

          <button
            type="button"
            onClick={onStatusToggle}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors shadow-2xs ${
              isPublished
                ? 'border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100'
                : 'border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            {isPublished ? (
              <>
                <EyeOff className="h-4 w-4" />
                Unpublish
              </>
            ) : (
              <>
                <Check className="h-4 w-4" />
                Publish Page
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onSave}
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-xl bg-[#610D17] hover:bg-[#4D0911] text-white px-4 py-2 text-xs sm:text-sm font-bold shadow-sm transition-all duration-150 disabled:opacity-70 active:scale-95"
          >
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
