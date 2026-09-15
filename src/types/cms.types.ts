export type BlockType = 
  | 'Hero' 
  | 'Text' 
  | 'Image' 
  | 'Cards' 
  | 'Features' 
  | 'Accordion' 
  | 'CTA';

export interface HeroBlockContent {
  tag: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface TextBlockContent {
  heading: string;
  body: string;
  alignment: 'left' | 'center';
}

export interface ImageBlockContent {
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface CardsBlockContent {
  sectionTitle: string;
  sectionSubtitle: string;
  columns: 2 | 3;
  items: CardItem[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface FeaturesBlockContent {
  sectionTitle: string;
  sectionSubtitle: string;
  items: FeatureItem[];
}

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionBlockContent {
  sectionTitle: string;
  sectionSubtitle: string;
  items: AccordionItem[];
}

export interface CtaBlockContent {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export type BlockContentMap = {
  Hero: HeroBlockContent;
  Text: TextBlockContent;
  Image: ImageBlockContent;
  Cards: CardsBlockContent;
  Features: FeaturesBlockContent;
  Accordion: AccordionBlockContent;
  CTA: CtaBlockContent;
};

export interface CMSBlock {
  id: string;
  type: BlockType;
  sortOrder: number;
  isVisible: boolean;
  content: any;
}

export interface CMSPage {
  id: string;
  title: string;
  slug: string;
  status: 'DRAFT' | 'PUBLISHED';
  metaTitle?: string;
  metaDescription?: string;
  blocks: CMSBlock[];
  createdAt: string;
  updatedAt: string;
}

export interface CMSUser {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor';
  lastLogin: string;
  status: 'Active' | 'Inactive';
  password?: string;
}
