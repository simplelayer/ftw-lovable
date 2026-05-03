export const COMPANY = {
  name: 'FollowThrough Works',
  tagline: 'Managed Technology Operations for Business',
  phone: '(916) 415-3555',
  phoneRaw: '+19164153555',
  email: 'hello@followthroughworks.com',
  address: {
    street: '705 Gold Lake Dr, Ste 250',
    city: 'Folsom',
    state: 'CA',
    zip: '95630',
  },
  serviceArea:
    'Sacramento Metro, Folsom, El Dorado Hills, Granite Bay, Rancho Cordova, Roseville, Rocklin',
  url: 'https://followthroughworks.com',
  social: {
    linkedin: 'https://www.linkedin.com/company/followthrough-works',
    facebook: 'https://www.facebook.com/followthroughworks',
    instagram: 'https://www.instagram.com/followthroughworks',
  },
};

export const CTA_PRIMARY = {
  label: 'Free Stack Score',
  href: '/stack-score',
};

export interface NavChildItem {
  label: string;
  href: string;
}

export interface NavGroupedChild {
  group: string;
  items: NavChildItem[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[] | NavGroupedChild[];
}

export function isGroupedChildren(
  children: NavChildItem[] | NavGroupedChild[],
): children is NavGroupedChild[] {
  return children.length > 0 && 'group' in children[0];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Start Here', href: '/start-here' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        group: 'Managed IT & Communications',
        items: [
          { label: 'Managed IT & Compliance', href: '/solutions/managed-it-compliance' },
          { label: 'Business Phones & UCaaS', href: '/solutions/business-phones' },
        ],
      },
      {
        group: 'Email & Domain Security',
        items: [
          { label: 'Domain Security', href: '/solutions/domain-security' },
        ],
      },
      {
        group: 'Building & Security',
        items: [
          { label: 'Access Control', href: '/solutions/access-control' },
          { label: 'Camera Monitoring & AI Search', href: '/solutions/camera-monitoring' },
          { label: 'Environmental Monitoring', href: '/solutions/environmental-monitoring' },
          { label: 'Visitor Check-In', href: '/solutions/visitor-check-in' },
        ],
      },
      {
        group: 'AV & Entertainment',
        items: [
          { label: 'Commercial AV & Displays', href: '/solutions/av-displays' },
          { label: 'Sound & Entertainment', href: '/solutions/av-sound' },
          { label: 'Zoom Rooms & Hybrid Meeting', href: '/solutions/av-zoom-rooms' },
        ],
      },
      {
        group: 'Event Services',
        items: [
          { label: 'Event Charging Kiosks', href: '/events' },
        ],
      },
    ] as NavGroupedChild[],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Medical Offices', href: '/industries/medical-offices' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Coworking', href: '/industries/coworking' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Event Venue', href: '/industries/event-venue' },
      { label: 'Brewery & Taproom', href: '/industries/brewery-taproom' },
    ] as NavChildItem[],
  },
  { label: 'Bundles', href: '/bundles' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Start Here', href: '/start-here' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Bundles', href: '/bundles' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Event Charging Kiosks', href: '/events' },
    { label: 'Free Stack Score', href: '/stack-score' },
  ],
  industries: [
    { label: 'Medical Offices', href: '/industries/medical-offices' },
    { label: 'Retail', href: '/industries/retail' },
    { label: 'Hospitality', href: '/industries/hospitality' },
    { label: 'Event Venue', href: '/industries/event-venue' },
    { label: 'Brewery & Taproom', href: '/industries/brewery-taproom' },
    { label: 'Coworking', href: '/industries/coworking' },
    { label: 'Manufacturing', href: '/industries/manufacturing' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Rancho Cordova', href: '/rancho-cordova' },
    { label: 'Events', href: '/events' },
    { label: 'Affiliate Program', href: '/affiliate' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  guides: [
    { label: 'HIPAA IT Support Sacramento', href: '/resources/hipaa-it-support-sacramento' },
    { label: 'Access Control vs Keys', href: '/resources/access-control-vs-keys-small-business' },
    { label: 'Temperature Monitoring', href: '/resources/medical-office-temperature-monitoring' },
    { label: 'Camera AI Search', href: '/resources/camera-system-ai-search-business' },
  ],
};

export function trackCTAClick(label: string, path: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'cta_click', {
      event_label: label,
      page_path: path,
    });
  }
}

export function trackPhoneClick(path: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_click', {
      page_path: path,
    });
  }
}

export function trackTextClick(path: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'text_click', {
      page_path: path,
    });
  }
}

export function trackCalendarOpen(path: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'calendar_open', {
      page_path: path,
    });
  }
}

export const SLUG_LABELS: Record<string, string> = {
  'stack-score': 'Stack Score',
  'start-here': 'Start Here',
  'site-score': 'Site Score',
  'shield-score': 'Shield Score',
  'managed-it-compliance': 'Managed IT & Compliance',
  'access-control': 'Access Control',
  'camera-monitoring': 'Camera Monitoring',
  'business-phones': 'Business Phones',
  'domain-security': 'Email & Domain Security',
  'environmental-monitoring': 'Environmental Monitoring',
  'visitor-check-in': 'Visitor Check-In',
  'av-displays': 'AV & Displays',
  'av-sound': 'AV & Sound',
  'av-zoom-rooms': 'Zoom Rooms',
  'medical-offices': 'Medical Offices',
  'retail': 'Retail',
  'coworking': 'Coworking',
  'manufacturing': 'Manufacturing',
  'hospitality': 'Hospitality',
  'brewery-taproom': 'Brewery & Taproom',
  'event-venue': 'Event Venue',
  'hipaa-compliance': 'HIPAA Compliance Stack',
  'new-location-starter': 'New Location Starter',
  'smart-building-essentials': 'Smart Building Essentials',
  'hospitality-av-starter': 'Hospitality AV Starter',
  'hybrid-meeting-room': 'Hybrid Meeting Room',
};

export function trackFormSubmit(formType: string, path: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'generate_lead', {
      form_type: formType,
      page_path: path,
    });
  }
}

export function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
  };
}
