import { CMSBlock } from '@/types/cms.types';
import HeroBlock from './HeroBlock';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
import CardsBlock from './CardsBlock';
import FeaturesBlock from './FeaturesBlock';
import AccordionBlock from './AccordionBlock';
import CtaBlock from './CtaBlock';

export default function BlockRenderer({ blocks }: { blocks: CMSBlock[] }) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="py-24 text-center text-zinc-400">
        <p className="text-lg">This page does not have any content blocks yet.</p>
      </div>
    );
  }

  // Filter visible blocks and sort by sortOrder
  const activeBlocks = [...blocks]
    .filter((b) => b.isVisible !== false)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="w-full flex flex-col">
      {activeBlocks.map((block) => {
        switch (block.type) {
          case 'Hero':
            return <HeroBlock key={block.id} content={block.content} />;
          case 'Text':
            return <TextBlock key={block.id} content={block.content} />;
          case 'Image':
            return <ImageBlock key={block.id} content={block.content} />;
          case 'Cards':
            return <CardsBlock key={block.id} content={block.content} />;
          case 'Features':
            return <FeaturesBlock key={block.id} content={block.content} />;
          case 'Accordion':
            return <AccordionBlock key={block.id} content={block.content} />;
          case 'CTA':
            return <CtaBlock key={block.id} content={block.content} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
