export interface SolutionPainPoint {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionStep {
  title: string;
  description: string;
}

export interface SolutionROICallout {
  metric: string;
  description: string;
}

export interface SolutionComparisonItem {
  question: string;
  answer: string;
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionRelatedLink {
  label: string;
  href: string;
}

export interface SolutionProtocolCard {
  name: string;
  description: string;
}

export interface SolutionPricingTier {
  name: string;
  price: string;
  features: string[];
}

export interface SolutionPricingCard {
  title: string;
  price: string;
  description: string;
  features: string[];
  tiers?: SolutionPricingTier[];
  note?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface SolutionBottomCta {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
}

export type SolutionGroup =
  | 'Managed IT & Communications'
  | 'Email & Domain Security'
  | 'Building & Security'
  | 'AV & Entertainment';

export interface SolutionFeatureGroup {
  group: string;
  items: { label: string; description: string }[];
}

export interface SolutionPage {
  slug: string;
  title: string;
  group: SolutionGroup;
  cardIcon: string;
  cardDescription: string;
  cardBadge?: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: SolutionPainPoint[];
  featureList?: SolutionFeatureGroup[];
  howItWorks: SolutionStep[];
  roiCallout: SolutionROICallout;
  comparisonContent: SolutionComparisonItem[];
  faqs: SolutionFAQ[];
  relatedIndustries: SolutionRelatedLink[];
  relatedBundles: SolutionRelatedLink[];
  relatedSolutions: SolutionRelatedLink[];
  relatedResources?: SolutionRelatedLink[];
  heroCtaLabel?: string;
  heroCtaHref?: string;
  protocolCards?: SolutionProtocolCard[];
  pricingCards?: SolutionPricingCard[];
  bottomCta?: SolutionBottomCta;
}

export const SOLUTION_GROUP_ORDER: SolutionGroup[] = [
  'Managed IT & Communications',
  'Email & Domain Security',
  'Building & Security',
  'AV & Entertainment',
];

export const SOLUTION_GROUP_COLUMNS: Record<SolutionGroup, 2 | 3 | 4> = {
  'Managed IT & Communications': 2,
  'Email & Domain Security': 2,
  'Building & Security': 4,
  'AV & Entertainment': 3,
};

export const SOLUTIONS: SolutionPage[] = [];

export function getSolutionBySlug(slug: string): SolutionPage | null {
  return SOLUTIONS.find((s) => s.slug === slug) ?? null;
}
