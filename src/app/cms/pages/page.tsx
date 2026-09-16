'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  FileText, 
  Plus, 
  Search, 
  ExternalLink, 
  Edit3, 
  Trash2,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { CMSPage } from '@/types/cms.types';
import { cmsClient } from '@/lib/api/cms.client';
import { useAuthStore } from '@/store/auth.store';

export default function AllPagesPage() {
  const router = useRouter();
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [filter, setFilter] = useState<'ALL' | 'PUBLISHED' | 'DRAFT'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState('');
  const [newPageSlug, setNewPageSlug] = useState('');
  const user = useAuthStore((state) => state.user);
  const loadFromStorage = useAuthStore((state) => state.loadFromStorage);

  const loadPages = () => {
    setLoading(true);
    cmsClient.getAllPages().then((data) => {
      setPages(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadFromStorage();
    loadPages();
  }, [loadFromStorage]);


  const handleDelete = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      setPages((prev) => prev.filter((p) => p.id !== id));
      await cmsClient.deletePage(id);
      loadPages();
    }
  };

  const filteredPages = pages.filter((page) => {
    const matchesFilter = filter === 'ALL' || page.status === filter;
    const matchesSearch = 
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const [createError, setCreateError] = useState<string | null>(null);

  const handleCreatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPageTitle.trim()) return;

    setCreateError(null);
    const slug =
      newPageSlug.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '') ||
      newPageTitle.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '');

    try {
      const created = await cmsClient.createPage({
        title: newPageTitle.trim(),
        slug,
        status: 'DRAFT',
        blocks: [],
      });
      router.push(`/cms/builder/${created.id}`);
    } catch (err: any) {
      setCreateError(err.message || 'Failed to create page');
    }
  };

  return (
    <div className="p-4 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            All Pages
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Manage your dynamic CMS pages, customize content, and edit URL slugs.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#610D17] hover:bg-[#4D0911] text-white px-4 py-2.5 text-sm font-bold shadow-sm transition-all duration-150 active:scale-95 self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          Create New Page
        </button>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-zinc-200/90 shadow-2xs">
        {/* Status Filters */}
        <div className="flex items-center gap-1.5">
          {(['ALL', 'PUBLISHED', 'DRAFT'] as const).map((statusKey) => (
            <button
              key={statusKey}
              type="button"
              onClick={() => setFilter(statusKey)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                filter === statusKey
                  ? 'bg-[#610D17] text-white'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {statusKey === 'ALL' ? 'All Pages' : statusKey === 'PUBLISHED' ? 'Published' : 'Drafts'}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pages or slug..."
            className="w-full rounded-xl border border-zinc-200 pl-9 pr-3.5 py-1.5 text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-[#610D17] focus:outline-none"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-2xs">
        {loading ? (
          <div className="p-16 text-center text-zinc-400 text-sm">Loading pages...</div>
        ) : filteredPages.length === 0 ? (
          <div className="p-16 text-center text-zinc-500 space-y-2">
            <p className="font-semibold">No pages found.</p>
            <p className="text-xs text-zinc-400">Try changing your filters or create a new page.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200/80 bg-zinc-50/75 text-[11px] font-black uppercase tracking-wider text-zinc-500">
                  <th className="py-3 px-5">Page Title</th>
                  <th className="py-3 px-5">URL Slug</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5">Blocks</th>
                  <th className="py-3 px-5">Last Updated</th>
                  <th className="py-3 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-sm">
                {filteredPages.map((page) => (
                  <tr key={page.id} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fbf2f3] text-[#610D17]">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <Link
                            href={`/cms/builder/${page.id}`}
                            className="font-bold text-zinc-900 hover:text-[#610D17] transition-colors"
                          >
                            {page.title}
                          </Link>
                          {page.metaTitle && (
                            <p className="text-xs text-zinc-400 truncate max-w-xs">{page.metaTitle}</p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-5 font-mono text-xs text-zinc-600">
                      /{page.slug}
                    </td>

                    <td className="py-4 px-5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                          page.status === 'PUBLISHED'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {page.status === 'PUBLISHED' ? (
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        ) : (
                          <Clock className="h-3 w-3 text-amber-600" />
                        )}
                        {page.status}
                      </span>
                    </td>

                    <td className="py-4 px-5 text-xs font-semibold text-zinc-600">
                      {page.blocks?.length || 0} blocks
                    </td>

                    <td className="py-4 px-5 text-xs text-zinc-400">
                      {new Date(page.updatedAt).toLocaleDateString()}
                    </td>

                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/${page.slug}`}
                          target="_blank"
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
                          title="View Live Site"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                          href={`/cms/builder/${page.id}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#610D17] text-white hover:bg-[#4D0911] transition-colors"
                          title="Open Page Builder"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                        </Link>

                        {user?.role === 'Admin' && (
                          <button
                            type="button"
                            onClick={() => handleDelete(page.id, page.title)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                            title="Delete Page"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              {createError && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-700 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{createError}</span>
                </div>
              )}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Page Title
                </label>
                <input
                  type="text"
                  required
                  value={newPageTitle}
                  onChange={(e) => {
                    setNewPageTitle(e.target.value);
                    setNewPageSlug(e.target.value.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, ''));
                  }}
                  placeholder="e.g. My Favourite Teacher"
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-sm text-zinc-900 focus:border-[#610D17] focus:outline-none"
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
                    placeholder="my-favourite-teacher"
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
                  className="rounded-xl bg-[#610D17] hover:bg-[#4D0911] text-white px-4 py-2 text-xs font-bold shadow-xs transition-colors"
                >
                  Create & Open Builder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
