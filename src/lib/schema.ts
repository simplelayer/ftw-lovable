const SITE_URL = 'https://followthroughworks.com';
const SITE_NAME = 'FollowThrough Works';

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description:
      'Managed technology operations company based in Folsom, CA. We design, install, and manage IT, security, phones, and building systems for businesses in the Sacramento metro area.',
    url: SITE_URL,
    telephone: '+19165551234',
    email: 'hello@followthroughworks.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '705 Gold Lake Dr',
      addressLocality: 'Folsom',
      addressRegion: 'CA',
      postalCode: '95630',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '38.6780',
      longitude: '-121.1760',
    },
    areaServed: 'Sacramento, Folsom, El Dorado Hills, Granite Bay, Rancho Cordova',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: 'Sacramento, Folsom, El Dorado Hills, Granite Bay, Rancho Cordova',
  };
}

export function generateBreadcrumbSchema(
  items: { label: string; href: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}
