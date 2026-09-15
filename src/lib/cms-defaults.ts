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
          tag: 'Campaign Spotlight',
          title: 'Enter High-Impact Title Here',
          subtitle: 'Describe the initiative, key dates, and who can participate in one compelling sentence.',
          buttonText: 'Participate Now',
          buttonLink: '#',
        },
      };

    case 'Text':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          heading: 'About This Initiative',
          body: 'Provide rich informational content, historical context, or guidelines here for your visitors.',
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
          imageUrl: '/nts-logo-2026.jpg',
          alt: 'AMP Event Media',
          caption: 'AMP National Talent Search event showcase',
        },
      };

    case 'Cards':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          sectionTitle: 'Key Highlights',
          sectionSubtitle: 'Explore stages and requirements for this program.',
          columns: 3,
          items: [
            {
              id: `c-${Date.now()}-1`,
              tag: 'Step 1',
              title: 'Registration',
              description: 'Open to all eligible students and educators across India.',
              linkText: 'Read rules →',
              linkUrl: '#',
            },
            {
              id: `c-${Date.now()}-2`,
              tag: 'Step 2',
              title: 'Evaluation',
              description: 'Carefully reviewed by academic leaders and regional juries.',
              linkText: 'View criteria →',
              linkUrl: '#',
            },
            {
              id: `c-${Date.now()}-3`,
              tag: 'Step 3',
              title: 'Recognition',
              description: 'National certificates, cash awards, and institutional accolades.',
              linkText: 'Past winners →',
              linkUrl: '#',
            },
          ],
        },
      };

    case 'Features':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          sectionTitle: 'Program Benefits',
          sectionSubtitle: 'Why thousands choose to be a part of this initiative.',
          items: [
            {
              id: `f-${Date.now()}-1`,
              title: 'National Recognition',
              description: 'Verified credentials and certificates honored across India.',
            },
            {
              id: `f-${Date.now()}-2`,
              title: 'Free Participation',
              description: 'Zero registration fee to ensure equal opportunity for all.',
            },
            {
              id: `f-${Date.now()}-3`,
              title: 'Mentorship Access',
              description: 'Guidance from top civil servants, doctors, and engineers.',
            },
          ],
        },
      };

    case 'Accordion':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          sectionTitle: 'Frequently Asked Questions',
          sectionSubtitle: 'Quick answers to common questions about this page.',
          items: [
            {
              id: `a-${Date.now()}-1`,
              question: 'Who is eligible to participate?',
              answer: 'Participation is open according to the guidelines set out for this category.',
            },
            {
              id: `a-${Date.now()}-2`,
              question: 'How do I check my submission status?',
              answer: 'You will receive an email confirmation and can track progress with your registration ID.',
            },
          ],
        },
      };

    case 'CTA':
      return {
        id,
        type,
        sortOrder,
        isVisible: true,
        content: {
          title: 'Join The Movement Today',
          description: 'Take the first step towards academic excellence and community leadership.',
          primaryButtonText: 'Get Started Now',
          primaryButtonLink: '#',
          secondaryButtonText: 'Download Brochure',
          secondaryButtonLink: '#',
        },
      };
  }
}
