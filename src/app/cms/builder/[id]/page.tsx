'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { CMSPage, CMSBlock, BlockType } from '@/types/cms.types';
import { cmsClient } from '@/lib/api/cms.client';
import { getDefaultBlock } from '@/lib/cms-defaults';
import CmsHeader from '@/components/cms/CmsHeader';
import SlugEditorCard from '@/components/cms/SlugEditorCard';
import AddContentBlockBar from '@/components/cms/AddContentBlockBar';
import BlockItemCard from '@/components/cms/BlockItemCard';

export default function CmsBuilderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  const [page, setPage] = useState<CMSPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Changes saved successfully!');

  useEffect(() => {
    cmsClient.getPageById(id).then((data) => {
      if (data) {
        setPage(data);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[70vh] w-full items-center justify-center">
        <div className="flex items-center gap-3 text-zinc-500 font-medium">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#610D17] border-t-transparent" />
          <span>Loading Page Builder...</span>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="p-12 text-center space-y-4">
        <p className="text-zinc-500">Page not found.</p>
        <button
          onClick={() => router.push('/cms/pages')}
          className="rounded-xl bg-[#610D17] text-white px-4 py-2 text-sm font-bold"
        >
          Return to All Pages
        </button>
      </div>
    );
  }

  // Save changes
  const handleSave = async (target?: any, message = 'Changes saved successfully!') => {
    // If called directly from an onClick event handler, ignore the DOM click event object
    const isEvent = target && (target.nativeEvent || target.target || target._reactName);
    const pageToSave = target && !isEvent && 'blocks' in target ? (target as CMSPage) : page;
    if (!pageToSave) return;
    setIsSaving(true);
    try {
      await cmsClient.updatePage(pageToSave.id, pageToSave);
      setToastMessage(message);
      setShowSaveToast(true);
      setTimeout(() => setShowSaveToast(false), 3000);
    } catch (err) {
      console.error('Failed to save page:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // Header Handlers
  const handleTitleChange = (newTitle: string) => {
    setPage((prev) => (prev ? { ...prev, title: newTitle } : null));
  };

  const handleStatusToggle = async () => {
    if (!page) return;
    const newStatus = page.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
    const updatedPage: CMSPage = { ...page, status: newStatus };
    setPage(updatedPage);
    await handleSave(
      updatedPage,
      newStatus === 'PUBLISHED'
        ? 'Page published and saved successfully!'
        : 'Page unpublished and saved as draft!'
    );
  };

  const handleSlugChange = (newSlug: string) => {
    setPage((prev) => (prev ? { ...prev, slug: newSlug } : null));
  };

  // Block Actions
  const handleAddBlock = (type: BlockType) => {
    setPage((prev) => {
      if (!prev) return null;
      const newBlock = getDefaultBlock(type, prev.blocks.length);
      return {
        ...prev,
        blocks: [...prev.blocks, newBlock],
      };
    });
  };

  const handleMoveUp = (index: number) => {
    if (index === 0 || !page) return;
    const newBlocks = [...page.blocks];
    const temp = newBlocks[index - 1];
    newBlocks[index - 1] = newBlocks[index];
    newBlocks[index] = temp;
    newBlocks.forEach((b, i) => {
      b.sortOrder = i + 1;
    });
    setPage({ ...page, blocks: newBlocks });
  };

  const handleMoveDown = (index: number) => {
    if (!page || index >= page.blocks.length - 1) return;
    const newBlocks = [...page.blocks];
    const temp = newBlocks[index + 1];
    newBlocks[index + 1] = newBlocks[index];
    newBlocks[index] = temp;
    newBlocks.forEach((b, i) => {
      b.sortOrder = i + 1;
    });
    setPage({ ...page, blocks: newBlocks });
  };

  const handleToggleVisibility = (index: number) => {
    if (!page) return;
    const newBlocks = [...page.blocks];
    newBlocks[index] = {
      ...newBlocks[index],
      isVisible: !newBlocks[index].isVisible,
    };
    setPage({ ...page, blocks: newBlocks });
  };

  const handleDuplicate = (index: number) => {
    if (!page) return;
    const target = page.blocks[index];
    const duplicated: CMSBlock = {
      ...target,
      id: `blk-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      content: JSON.parse(JSON.stringify(target.content)),
    };
    const newBlocks = [...page.blocks];
    newBlocks.splice(index + 1, 0, duplicated);
    newBlocks.forEach((b, i) => {
      b.sortOrder = i + 1;
    });
    setPage({ ...page, blocks: newBlocks });
  };

  const handleDelete = (index: number) => {
    if (!page) return;
    const newBlocks = page.blocks.filter((_, i) => i !== index);
    newBlocks.forEach((b, i) => {
      b.sortOrder = i + 1;
    });
    setPage({ ...page, blocks: newBlocks });
  };

  const handleUpdateContent = (index: number, updatedContent: any) => {
    if (!page) return;
    const newBlocks = [...page.blocks];
    newBlocks[index] = {
      ...newBlocks[index],
      content: updatedContent,
    };
    setPage({ ...page, blocks: newBlocks });
  };


  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      {/* Top Header */}
      <CmsHeader
        title={page.title}
        slug={page.slug}
        status={page.status}
        isSaving={isSaving}
        onTitleChange={handleTitleChange}
        onStatusToggle={handleStatusToggle}
        onSave={() => handleSave()}
      />

      {/* Main Content Area: Expanded layout matching Pages Table */}
      <div className="p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Option to edit slug (replaces Page Layout dropdown per request) */}
        <SlugEditorCard slug={page.slug} onChange={handleSlugChange} />

        {/* Add Content Block Bar with all 7 components */}
        <AddContentBlockBar onAddBlock={handleAddBlock} />

        {/* Block Canvas Stack */}
        <div className="space-y-4">
          {page.blocks.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-zinc-200 bg-white p-12 text-center space-y-3">
              <p className="text-sm font-semibold text-zinc-600">No content blocks on this page yet.</p>
              <p className="text-xs text-zinc-400">
                Click any component button above to start adding content.
              </p>
            </div>
          ) : (
            page.blocks.map((block, idx) => (
              <BlockItemCard
                key={block.id}
                block={block}
                index={idx}
                totalBlocks={page.blocks.length}
                onMoveUp={() => handleMoveUp(idx)}
                onMoveDown={() => handleMoveDown(idx)}
                onToggleVisibility={() => handleToggleVisibility(idx)}
                onDuplicate={() => handleDuplicate(idx)}
                onDelete={() => handleDelete(idx)}
                onUpdateContent={(content) => handleUpdateContent(idx, content)}
              />
            ))
          )}
        </div>
      </div>

      {/* Floating Save Toast */}
      {showSaveToast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-zinc-900 text-white px-5 py-3 text-sm font-bold shadow-xl flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {toastMessage}
        </div>
      )}
    </div>
  );
}
