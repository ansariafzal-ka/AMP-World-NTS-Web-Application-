'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  FileText, 
  Globe, 
  Clock, 
  Layers, 
  Plus, 
  ExternalLink, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CMSPage } from '@/types/cms.types';
import { cmsClient } from '@/lib/api/cms.client';

export default function CmsDashboardPage() {
  const router = useRouter();
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState('');
  const [newPageSlug, setNewPageSlug] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    cmsClient.getAllPages().then((data) => {
      setPages(data);
      setLoading(false);
    });
  }, []);

  const publishedCount = pages.filter((p) => p.status === 'PUBLISHED').length;
  const draftCount = pages.filter((p) => p.status === 'DRAFT').length;
  const totalBlocks = pages.reduce((acc, p) => acc + (p.blocks?.length || 0), 0);

  const handleTitleChange = (val: string) => {
    setNewPageTitle(val);
    // Auto-generate slug
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-_]/g, '');
    setNewPageSlug(generatedSlug);
  };

  const handleCreatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPageTitle.trim() || !newPageSlug.trim()) return;

    setIsCreating(true);
    try {
      const created = await cmsClient.createPage({
        title: newPageTitle.trim(),
        slug: newPageSlug.trim(),
        status: 'DRAFT',
        blocks: [],
      });
      router.push(`/portal/cms/builder/${created.id}`);
    } catch (err) {
      console.error(err);
      setIsCreating(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            CMS Dashboard
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Welcome to the AMP National Talent Search content management console.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#4A0E17] hover:bg-[#380910] text-white px-5 py-2.5 text-sm font-bold shadow-2xs transition-all duration-150 active:scale-95 self-start sm:self-auto cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Create New Page
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">Total Pages</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-tight">{pages.length}</p>
            <span className="text-[11px] text-zinc-500 font-medium mt-0.5 block">{publishedCount} published · {draftCount} draft</span>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">Published</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-tight">{publishedCount}</p>
            <span className="text-[11px] text-emerald-600 font-semibold mt-0.5 block">Live on public site</span>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">Drafts</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-tight">{draftCount}</p>
            <span className="text-[11px] text-amber-600 font-semibold mt-0.5 block">Preview only</span>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-2xs flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">Content Blocks</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-tight">{totalBlocks}</p>
            <span className="text-[11px] text-zinc-400 font-medium mt-0.5 block">Across all pages</span>
          </div>
        </div>
      </div>

      {/* Pages Section */}
      <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-2xs">
        <div className="p-5 sm:p-6 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#4A0E17]" />
            <h2 className="text-base font-bold text-zinc-900">Recent CMS Pages</h2>
          </div>

          <Link
            href="/portal/cms/pages"
            className="text-xs font-bold text-[#4A0E17] hover:underline flex items-center gap-1"
          >
            View All Pages
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {loading ? (
          <div className="p-12 text-center text-zinc-400 text-sm">Loading pages...</div>
        ) : pages.length === 0 ? (
          <div className="p-12 text-center text-zinc-500 space-y-3">
            <p>No CMS pages created yet.</p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A0E17] hover:underline"
            >
              <Plus className="h-3.5 w-3.5" />
              Create your first page
            </button>
          </div>
        ) : (
          <div className="divide-y divide-zinc-100">
            {pages.map((page) => (
              <div
                key={page.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-50/70 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/portal/cms/builder/${page.id}`}
                      className="text-sm sm:text-base font-bold text-zinc-900 hover:text-[#4A0E17] transition-colors"
                    >
                      {page.title}
                    </Link>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        page.status === 'PUBLISHED'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {page.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono">
                    <span>/{page.slug}</span>
                    <span>•</span>
                    <span>{page.blocks?.length || 0} blocks</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <Link
                    href={`/${page.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Preview
                  </Link>

                  <Link
                    href={`/portal/cms/builder/${page.id}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-[#4A0E17] text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#380910] transition-colors"
                  >
                    Open Builder
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal: Create Page */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-zinc-200 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Create New CMS Page</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Enter a title and slug to launch the page builder.
              </p>
            </div>

            <form onSubmit={handleCreatePage} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Page Title
                </label>
                <input
                  type="text"
                  required
                  value={newPageTitle}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Student Leadership Summit"
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-sm text-zinc-900 focus:border-[#4A0E17] focus:outline-none"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  URL Slug
                </label>
                <div className="flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2">
                  <span className="font-mono text-xs text-zinc-400">/</span>
                  <input
                    type="text"
                    required
                    value={newPageSlug}
                    onChange={(e) => setNewPageSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                    placeholder="student-summit"
                    className="ml-1 w-full bg-transparent font-mono text-xs font-bold text-zinc-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="rounded-xl border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreating}
                  className="rounded-xl bg-[#4A0E17] hover:bg-[#380910] text-white px-4 py-2 text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  {isCreating ? 'Creating...' : 'Create & Open Builder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
