'use client';

import { useState } from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  Eye, 
  EyeOff, 
  Copy, 
  Trash2, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CMSBlock } from '@/types/cms.types';

interface BlockItemCardProps {
  block: CMSBlock;
  index: number;
  totalBlocks: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onToggleVisibility: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onUpdateContent: (updatedContent: any) => void;
}

export default function BlockItemCard({
  block,
  index,
  totalBlocks,
  onMoveUp,
  onMoveDown,
  onToggleVisibility,
  onDuplicate,
  onDelete,
  onUpdateContent,
}: BlockItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper title from block content
  const getBlockSummary = () => {
    const c = block.content || {};
    switch (block.type) {
      case 'Hero':
        return c.title || c.tag || 'Hero Banner Section';
      case 'Text':
        return c.heading || (c.body ? c.body.slice(0, 60) + '...' : 'Text Content Block');
      case 'Image':
        return c.caption || c.alt || 'Media & Image Block';
      case 'Cards':
        return c.sectionTitle || `${c.items?.length || 0} Cards Grid`;
      case 'Features':
        return c.sectionTitle || `${c.items?.length || 0} Features List`;
      case 'Accordion':
        return c.sectionTitle || `${c.items?.length || 0} FAQ Items`;
      case 'CTA':
        return c.title || 'Call to Action Section';
      default:
        return 'Custom Block';
    }
  };

  const renderContentEditor = () => {
    const c = block.content || {};

    const updateField = (key: string, value: any) => {
      onUpdateContent({ ...c, [key]: value });
    };

    switch (block.type) {
      case 'Hero':
        return (
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Badge Tag</label>
              <input
                type="text"
                value={c.tag || ''}
                onChange={(e) => updateField('tag', e.target.value)}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                placeholder="e.g. Teachers' Appreciation Award"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Hero Title</label>
              <input
                type="text"
                value={c.title || ''}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold focus:border-[#610D17] focus:outline-none"
                placeholder="Enter headline"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Subtitle</label>
              <textarea
                value={c.subtitle || ''}
                onChange={(e) => updateField('subtitle', e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                placeholder="Enter descriptive subtitle"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Button Text</label>
                <input
                  type="text"
                  value={c.buttonText || ''}
                  onChange={(e) => updateField('buttonText', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                  placeholder="e.g. Submit Nomination"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Button Link</label>
                <input
                  type="text"
                  value={c.buttonLink || ''}
                  onChange={(e) => updateField('buttonLink', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                  placeholder="#section or /url"
                />
              </div>
            </div>
          </div>
        );

      case 'Text':
        return (
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Heading</label>
              <input
                type="text"
                value={c.heading || ''}
                onChange={(e) => updateField('heading', e.target.value)}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold focus:border-[#610D17] focus:outline-none"
                placeholder="Section heading"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Body Text</label>
              <textarea
                value={c.body || ''}
                onChange={(e) => updateField('body', e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                placeholder="Enter text paragraphs..."
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Text Alignment</label>
              <select
                value={c.alignment || 'left'}
                onChange={(e) => updateField('alignment', e.target.value)}
                className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm focus:border-[#610D17] focus:outline-none"
              >
                <option value="left">Left Aligned</option>
                <option value="center">Centered</option>
              </select>
            </div>
          </div>
        );

      case 'Image':
        return (
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Image URL / Path</label>
              <input
                type="text"
                value={c.imageUrl || ''}
                onChange={(e) => updateField('imageUrl', e.target.value)}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-mono focus:border-[#610D17] focus:outline-none"
                placeholder="/nts-logo-2026.jpg or https://..."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Alt Text</label>
                <input
                  type="text"
                  value={c.alt || ''}
                  onChange={(e) => updateField('alt', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                  placeholder="Image description"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Caption</label>
                <input
                  type="text"
                  value={c.caption || ''}
                  onChange={(e) => updateField('caption', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                  placeholder="Visible caption below image"
                />
              </div>
            </div>
          </div>
        );

      case 'Cards':
        return (
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Section Title</label>
                <input
                  type="text"
                  value={c.sectionTitle || ''}
                  onChange={(e) => updateField('sectionTitle', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold focus:border-[#610D17] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Section Subtitle</label>
                <input
                  type="text"
                  value={c.sectionSubtitle || ''}
                  onChange={(e) => updateField('sectionSubtitle', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-700 uppercase">Card Items ({c.items?.length || 0})</span>
                <button
                  type="button"
                  onClick={() => {
                    const items = c.items || [];
                    updateField('items', [
                      ...items,
                      {
                        id: `card-${Date.now()}`,
                        title: 'New Feature Card',
                        description: 'Enter short card description here.',
                        tag: 'Feature',
                        linkText: 'Learn more →',
                        linkUrl: '#',
                      },
                    ]);
                  }}
                  className="text-xs font-bold text-[#610D17] hover:underline"
                >
                  + Add Card
                </button>
              </div>

              {c.items?.map((item: any, i: number) => (
                <div key={item.id || i} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-600">Card #{i + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        updateField(
                          'items',
                          c.items.filter((_: any, idx: number) => idx !== i)
                        );
                      }}
                      className="text-xs text-rose-600 hover:text-rose-800"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={item.title || ''}
                      onChange={(e) => {
                        const newItems = [...c.items];
                        newItems[i] = { ...newItems[i], title: e.target.value };
                        updateField('items', newItems);
                      }}
                      placeholder="Title"
                      className="text-xs rounded border border-zinc-200 bg-white p-1.5 font-bold"
                    />
                    <input
                      type="text"
                      value={item.tag || ''}
                      onChange={(e) => {
                        const newItems = [...c.items];
                        newItems[i] = { ...newItems[i], tag: e.target.value };
                        updateField('items', newItems);
                      }}
                      placeholder="Tag (e.g. Highlights)"
                      className="text-xs rounded border border-zinc-200 bg-white p-1.5"
                    />
                  </div>
                  <textarea
                    value={item.description || ''}
                    onChange={(e) => {
                      const newItems = [...c.items];
                      newItems[i] = { ...newItems[i], description: e.target.value };
                      updateField('items', newItems);
                    }}
                    rows={2}
                    placeholder="Description"
                    className="w-full text-xs rounded border border-zinc-200 bg-white p-1.5"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'Features':
        return (
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Section Title</label>
              <input
                type="text"
                value={c.sectionTitle || ''}
                onChange={(e) => updateField('sectionTitle', e.target.value)}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold focus:border-[#610D17] focus:outline-none"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-700 uppercase">Features ({c.items?.length || 0})</span>
                <button
                  type="button"
                  onClick={() => {
                    const items = c.items || [];
                    updateField('items', [
                      ...items,
                      {
                        id: `feat-${Date.now()}`,
                        title: 'New Feature Highlight',
                        description: 'Detailed description of this milestone or advantage.',
                      },
                    ]);
                  }}
                  className="text-xs font-bold text-[#610D17] hover:underline"
                >
                  + Add Feature
                </button>
              </div>

              {c.items?.map((item: any, i: number) => (
                <div key={item.id || i} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-600">Feature #{i + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        updateField('items', c.items.filter((_: any, idx: number) => idx !== i));
                      }}
                      className="text-xs text-rose-600 hover:text-rose-800"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="text"
                    value={item.title || ''}
                    onChange={(e) => {
                      const newItems = [...c.items];
                      newItems[i] = { ...newItems[i], title: e.target.value };
                      updateField('items', newItems);
                    }}
                    placeholder="Feature Title"
                    className="w-full text-xs rounded border border-zinc-200 bg-white p-1.5 font-bold"
                  />
                  <textarea
                    value={item.description || ''}
                    onChange={(e) => {
                      const newItems = [...c.items];
                      newItems[i] = { ...newItems[i], description: e.target.value };
                      updateField('items', newItems);
                    }}
                    rows={2}
                    placeholder="Description"
                    className="w-full text-xs rounded border border-zinc-200 bg-white p-1.5"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'Accordion':
        return (
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Section Title</label>
              <input
                type="text"
                value={c.sectionTitle || ''}
                onChange={(e) => updateField('sectionTitle', e.target.value)}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold focus:border-[#610D17] focus:outline-none"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-700 uppercase">Q&A Items ({c.items?.length || 0})</span>
                <button
                  type="button"
                  onClick={() => {
                    const items = c.items || [];
                    updateField('items', [
                      ...items,
                      {
                        id: `faq-${Date.now()}`,
                        question: 'Frequently Asked Question',
                        answer: 'Answer to this question.',
                      },
                    ]);
                  }}
                  className="text-xs font-bold text-[#610D17] hover:underline"
                >
                  + Add Question
                </button>
              </div>

              {c.items?.map((item: any, i: number) => (
                <div key={item.id || i} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-600">Question #{i + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        updateField('items', c.items.filter((_: any, idx: number) => idx !== i));
                      }}
                      className="text-xs text-rose-600 hover:text-rose-800"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="text"
                    value={item.question || ''}
                    onChange={(e) => {
                      const newItems = [...c.items];
                      newItems[i] = { ...newItems[i], question: e.target.value };
                      updateField('items', newItems);
                    }}
                    placeholder="Question..."
                    className="w-full text-xs rounded border border-zinc-200 bg-white p-1.5 font-bold"
                  />
                  <textarea
                    value={item.answer || ''}
                    onChange={(e) => {
                      const newItems = [...c.items];
                      newItems[i] = { ...newItems[i], answer: e.target.value };
                      updateField('items', newItems);
                    }}
                    rows={2}
                    placeholder="Answer..."
                    className="w-full text-xs rounded border border-zinc-200 bg-white p-1.5"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'CTA':
        return (
          <div className="space-y-4 pt-4 border-t border-zinc-100">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Headline</label>
              <input
                type="text"
                value={c.title || ''}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold focus:border-[#610D17] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Description</label>
              <textarea
                value={c.description || ''}
                onChange={(e) => updateField('description', e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Primary Button Text</label>
                <input
                  type="text"
                  value={c.primaryButtonText || ''}
                  onChange={(e) => updateField('primaryButtonText', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Primary Button Link</label>
                <input
                  type="text"
                  value={c.primaryButtonLink || ''}
                  onChange={(e) => updateField('primaryButtonLink', e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-[#610D17] focus:outline-none"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-150 bg-white ${
        block.isVisible ? 'border-zinc-200/90 shadow-2xs' : 'border-zinc-200/60 bg-zinc-50/50 opacity-60'
      }`}
    >
      {/* Top Header Row matching screenshot */}
      <div className="flex items-center justify-between p-4 sm:p-5">
        {/* Left: Number + Label + Title */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xs font-black text-zinc-600 border border-zinc-200/80">
            {index + 1}
          </div>

          <div className="min-w-0">
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#610D17]">
              {block.type} BLOCK
            </span>
            <p className="truncate text-sm sm:text-base font-bold text-zinc-900">
              {getBlockSummary()}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-3">
          {/* Move Up */}
          <button
            type="button"
            disabled={index === 0}
            onClick={onMoveUp}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Move Up"
          >
            <ArrowUp className="h-4 w-4" />
          </button>

          {/* Move Down */}
          <button
            type="button"
            disabled={index === totalBlocks - 1}
            onClick={onMoveDown}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Move Down"
          >
            <ArrowDown className="h-4 w-4" />
          </button>

          <span className="text-zinc-200 select-none">|</span>

          {/* Visibility Toggle */}
          <button
            type="button"
            onClick={onToggleVisibility}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 transition-colors"
            title={block.isVisible ? 'Hide Block' : 'Show Block'}
          >
            {block.isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4 text-amber-600" />}
          </button>

          {/* Duplicate */}
          <button
            type="button"
            onClick={onDuplicate}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 transition-colors"
            title="Duplicate Block"
          >
            <Copy className="h-4 w-4" />
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={onDelete}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            title="Delete Block"
          >
            <Trash2 className="h-4 w-4 text-rose-500" />
          </button>

          {/* Expand/Collapse Editor */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 hover:bg-[#610D17] hover:text-white transition-colors ml-1"
            title={isExpanded ? 'Collapse' : 'Edit Content'}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Expandable Form Drawer */}
      {isExpanded && (
        <div className="px-5 pb-5 pt-1">
          {renderContentEditor()}
        </div>
      )}
    </div>
  );
}
