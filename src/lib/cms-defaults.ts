import { BlockType } from '@/types/cms.types';

export function getDefaultBlock(type: BlockType, existingCount: number) {
  const id = `blk-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
  const sortOrder = existingCount + 1;

  switch (type) {
    case 'Hero':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          tag: '',
          title: '',
          subtitle: '',
          buttonText: '',
          buttonLink: '',
        },
      };

    case 'Text':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          heading: '',
          body: '',
          alignment: 'left',
        },
      };

    case 'Image':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          imageUrl: '',
          alt: '',
          caption: '',
        },
      };

    case 'Cards':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          sectionTitle: '',
          sectionSubtitle: '',
          columns: 3,
          items: [],
        },
      };

    case 'Features':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          sectionTitle: '',
          sectionSubtitle: '',
          items: [],
        },
      };

    case 'Accordion':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          sectionTitle: '',
          sectionSubtitle: '',
          items: [],
        },
      };

    case 'CTA':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          title: '',
          description: '',
          primaryButtonText: '',
          primaryButtonLink: '',
          secondaryButtonText: '',
          secondaryButtonLink: '',
        },
      };
  }
}
