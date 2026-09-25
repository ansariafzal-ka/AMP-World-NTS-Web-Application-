'use client';

import { useState } from 'react';
import { Link2, Copy, Check } from 'lucide-react';

interface SlugEditorCardProps {
  slug: string;
  onChange: (newSlug: string) => void;
}

export default function SlugEditorCard({ slug, onChange }: SlugEditorCardProps) {
  const [copied, setCopied] = useState(false);

  const cleanSlug = (input: string) => {
    return input
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-_]/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(cleanSlug(e.target.value));
  };

  const handleCopy = () => {
    const fullUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}/${slug}`
      : `/${slug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-2xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4A0E17]/10 text-[#4A0E17]">
            <Link2 className="h-4 w-4" />
          </div>
          <h2 className="text-base font-bold text-zinc-900">Page Slug & URL</h2>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-2.5 py-1 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-zinc-400" />
              Copy URL
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-zinc-500 mb-4">
        Customize the slug for direct public routing. Use letters, numbers, hyphens, and underscores.
      </p>

      <div className="flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 focus-within:border-[#4A0E17] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#4A0E17] transition-all">
        <span className="select-none font-mono text-xs sm:text-sm font-semibold text-zinc-400">
          /
        </span>
        <input
          type="text"
          value={slug}
          onChange={handleInputChange}
          placeholder="your-page-slug"
          className="ml-1 w-full bg-transparent font-mono text-xs sm:text-sm font-bold text-zinc-900 focus:outline-none"
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
        <span>Target URL: <strong className="font-mono text-zinc-800">/{slug || '...'}</strong></span>
        <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Direct Route
        </span>
      </div>
    </div>
  );
}
