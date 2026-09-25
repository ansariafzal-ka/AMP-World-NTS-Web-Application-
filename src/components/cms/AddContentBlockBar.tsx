'use client';

import { 
  Columns, 
  Type, 
  ImageIcon, 
  LayoutGrid, 
  CheckSquare2, 
  ListCollapse, 
  Megaphone, 
  Plus 
} from 'lucide-react';
import { BlockType } from '@/types/cms.types';

interface AddContentBlockBarProps {
  onAddBlock: (type: BlockType) => void;
}

const BLOCK_OPTIONS: Array<{
  type: BlockType;
  label: string;
  icon: any;
}> = [
  { type: 'Hero', label: 'Hero', icon: Columns },
  { type: 'Text', label: 'Text', icon: Type },
  { type: 'Image', label: 'Image', icon: ImageIcon },
  { type: 'Cards', label: 'Cards', icon: LayoutGrid },
  { type: 'Features', label: 'Features', icon: CheckSquare2 },
  { type: 'Accordion', label: 'Accordion', icon: ListCollapse },
  { type: 'CTA', label: 'CTA', icon: Megaphone },
];

export default function AddContentBlockBar({ onAddBlock }: AddContentBlockBarProps) {
  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-2xs">
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-600 mb-3.5">
        <Plus className="h-3.5 w-3.5 text-[#4A0E17]" />
        <span>Add Content Block</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {BLOCK_OPTIONS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.type}
              type="button"
              onClick={() => onAddBlock(item.type)}
              className="group flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50/60 px-3.5 py-2 text-xs sm:text-sm font-semibold text-zinc-700 shadow-2xs transition-all duration-150 hover:border-[#4A0E17] hover:bg-[#4A0E17]/5 hover:text-[#4A0E17] active:scale-95"
            >
              <Icon className="h-4 w-4 text-zinc-500 group-hover:text-[#4A0E17] transition-colors" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
