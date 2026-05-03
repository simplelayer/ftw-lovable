export interface BundleIncludedSolution {
  title: string;
  description: string;
  href: string;
}

export interface BundleValueCallout {
  metric: string;
  description: string;
}

export interface BundleFAQ {
  question: string;
  answer: string;
}

export interface BundleRelatedLink {
  label: string;
  href: string;
}

export interface BundleCaseStudyLink {
  label: string;
  href: string;
  summary: string;
}

export interface BundlePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  includedSolutions: BundleIncludedSolution[];
  idealFor: string;
  valueCallout: BundleValueCallout;
  faqs: BundleFAQ[];
  relatedIndustries: BundleRelatedLink[];
  relatedCaseStudy?: BundleCaseStudyLink;
}

export const BUNDLES: BundlePage[] = [
  {
    slug: 'hipaa-compliance',
    title: 'HIPAA Compliance Stack',
    metaTitle: 'HIPAA Compliance Stack for Medical Practices | FollowThrough Works',
    metaDescription:
      'A complete HIPAA compliance package — managed IT, environmental monitoring, access control, visitor check-in, and encrypted communications. Built for medical practices in Folsom and Sacramento.',
    heroTitle: 'HIPAA Compliance Stack: Everything Your Practice Needs',
    heroSubtitle:
      'A complete package of managed IT, environmental monitoring, access control, visitor check-in, and compliance documentation — built specifically to meet HIPAA technical safeguards.',

    includedSolutions: [
      {
        title: 'Managed IT & Compliance',
        description:
          'HIPAA-ready network, encrypted email, endpoint protection, and full audit documentation.',
        href: '/solutions/managed-it-compliance',
      },
      {
        title: 'Environmental Monitoring',
        description:
          '24/7 temperature monitoring for medication storage, vaccine fridges, and server rooms.',
        href: '/solutions/environmental-monitoring',
      },
      {
        title: 'Access Control',
        description:
          'Smart access to medication rooms, supply closets, and the building — with compliance-grade audit trails.',
        href: '/solutions/access-control',
      },
      {
        title: 'Visitor Check-In',
        description: 'HIPAA-compliant digital check-in replacing paper sign-in sheets.',
        href: '/solutions/visitor-check-in',
      },
      {
        title: 'Business Phones',
        description: 'Encrypted voice communication and reliable multi-line phone systems.',
        href: '/solutions/business-phones',
      },
    ],

    idealFor:
      'Medical practices, dental offices, behavioral health clinics, and any healthcare business that needs to meet HIPAA Security Rule requirements without hiring a full-time IT compliance team.',

    valueCallout: {
      metric: '100%',
      description:
        'HIPAA audit pass rate across our healthcare clients. This stack covers every technical safeguard required by the Security Rule.',
    },

    faqs: [
      {
        question: 'What HIPAA requirements does this stack cover?',
        answer:
          "This bundle addresses the full HIPAA Security Rule technical safeguard requirements: access controls (who can access what), audit controls (who did what and when), integrity controls (data isn't altered), transmission security (encrypted communications), and authentication. We also provide the documentation and Business Associate Agreements required during audits.",
      },
      {
        question: 'How much does the HIPAA Compliance Stack cost?',
        answer:
          "Pricing depends on your practice size, number of locations, existing equipment, and specific configuration. We build a custom quote after your free Site Score assessment — so you know exactly what you're getting and what it costs before you commit.",
      },
      {
        question: 'How long does it take to deploy the full stack?',
        answer:
          'Most practices are fully deployed within 2–4 weeks. We start with your network and IT infrastructure, then layer in access control, environmental sensors, and visitor check-in. We schedule around your patient hours to minimize disruption.',
      },
      {
        question: 'Do you handle Business Associate Agreements (BAAs)?',
        answer:
          'Yes. We execute a BAA with every healthcare client before beginning work. Our documentation package includes the BAA, risk assessment records, and compliance logs your auditor will ask for.',
      },
      {
        question: 'What if we already have some of this equipment?',
        answer:
          "We evaluate your existing setup during the Site Score walkthrough. If your current equipment meets HIPAA requirements and integrates with our management platform, we'll use it. We recommend replacements only when necessary for compliance or reliability.",
      },
    ],

    relatedIndustries: [{ label: 'Medical Offices', href: '/industries/medical-offices' }],

    relatedCaseStudy: {
      label: 'See how a Folsom medical practice passed their HIPAA audit with zero findings',
      href: '/case-studies/folsom-medical-practice-hipaa',
      summary: 'We deployed the full HIPAA stack and they passed with zero audit findings.',
    },
  },
  {
    slug: 'new-location-starter',
    title: 'New Location Starter',
    metaTitle: 'New Location Starter Bundle | FollowThrough Works',
    metaDescription:
      'Opening a new office, clinic, or storefront? Get your network, phones, cameras, and access control set up right from day one. Professionally installed and fully managed.',
    heroTitle: 'New Location Starter: Everything Set Up Right From Day One',
    heroSubtitle:
      'Opening a new office, clinic, or storefront? This package covers your network, phones, cameras, and access control — professionally installed and fully managed from the start.',

    includedSolutions: [
      {
        title: 'Managed IT',
        description:
          'Network setup, firewall, WiFi, and ongoing management — your infrastructure done right from the start.',
        href: '/solutions/managed-it-compliance',
      },
      {
        title: 'Business Phones',
        description: 'Phone system deployed and configured for day one — no scrambling after move-in.',
        href: '/solutions/business-phones',
      },
      {
        title: 'Access Control',
        description: 'Smart entry on all primary doors, configured and ready when your team arrives.',
        href: '/solutions/access-control',
      },
      {
        title: 'Camera Monitoring',
        description: 'Interior and exterior coverage properly placed — not afterthought installs.',
        href: '/solutions/camera-monitoring',
      },
    ],

    idealFor:
      "Any business opening a new location — whether it's your first office or your tenth. Especially valuable for businesses expanding into new cities who need consistent technology across locations.",

    valueCallout: {
      metric: '1 Week',
      description:
        'from walkthrough to fully operational. Network, phones, cameras, and access — deployed and managed before your staff moves in.',
    },

    faqs: [
      {
        question: 'How quickly can you have everything operational?',
        answer:
          'Most new locations are fully operational within one week of our walkthrough — network and phones first, then cameras and access control. We work backward from your move-in date so everything is ready when your team arrives.',
      },
      {
        question: 'Can you coordinate with our landlord or general contractor?',
        answer:
          "Yes. We're used to working alongside construction and build-out teams. We handle low-voltage coordination, conduit planning, and final walk-throughs — and we communicate directly with your landlord or GC so you don't have to translate between teams.",
      },
      {
        question: 'We have other locations already — can you match what we have there?',
        answer:
          "Absolutely. If you have existing locations, we'll assess what's in place and configure your new location to match — same platforms, same management, same experience. Consistency across locations is one of the key reasons multi-location businesses choose us.",
      },
      {
        question: 'How do you ensure consistency across multiple locations?',
        answer:
          'We use the same vendors, platforms, and configuration standards across every location we manage. Your IT, cameras, phones, and access control all report to the same dashboards — so managing one location or ten looks the same.',
      },
    ],

    relatedIndustries: [
      { label: 'Medical Offices', href: '/industries/medical-offices' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Coworking', href: '/industries/coworking' },
      { label: 'Professional Offices', href: '/industries/professional-offices' },
    ],
  },
  {
    slug: 'smart-building-essentials',
    title: 'Smart Building Essentials',
    metaTitle: 'Smart Building Essentials Bundle | FollowThrough Works',
    metaDescription:
      'Access control, cameras, and environmental monitoring — the three foundational systems that make any commercial building smarter, safer, and more manageable.',
    heroTitle: 'Smart Building Essentials: The Foundation Every Building Needs',
    heroSubtitle:
      'Access control, cameras, and environmental monitoring — the three foundational systems that make any commercial building smarter, safer, and more manageable.',

    includedSolutions: [
      {
        title: 'Access Control',
        description: 'Keyless entry and audit trails — know who enters every door and when.',
        href: '/solutions/access-control',
      },
      {
        title: 'Camera Monitoring',
        description: 'Smart cameras with AI search — find any incident in seconds, not hours.',
        href: '/solutions/camera-monitoring',
      },
      {
        title: 'Environmental Monitoring',
        description: 'Temperature, humidity, and leak detection — 24/7 alerts before problems escalate.',
        href: '/solutions/environmental-monitoring',
      },
    ],

    idealFor:
      "Commercial building owners, property managers, and any business that wants to modernize their building's core security and monitoring infrastructure.",

    valueCallout: {
      metric: '3 Systems',
      description:
        'that work together through one dashboard. See who entered, watch the footage, and monitor conditions — all in one place.',
    },

    faqs: [
      {
        question: 'What types of buildings is this designed for?',
        answer:
          "Any commercial building — office buildings, medical facilities, coworking spaces, light industrial, retail, and hospitality. If it's a building you own or manage with employees, vendors, or tenants coming and going, this bundle applies.",
      },
      {
        question: 'Can we add more systems later?',
        answer:
          'Yes. This bundle is the foundation, not the ceiling. Visitor check-in, VoIP phones, managed IT, and additional sensor coverage can all be layered in as your needs grow. Everything is designed to integrate.',
      },
      {
        question: 'Do you handle the installation, or do we need a separate contractor?',
        answer:
          "We handle everything — low-voltage wiring, hardware mounting, network configuration, and software setup. You don't need a separate contractor. We coordinate directly with your building and work around your operations.",
      },
      {
        question: 'We have multiple tenants — can this work in a multi-tenant building?',
        answer:
          "Yes. We configure access control with tenant-level permissions, cameras with appropriate coverage and privacy zones, and environmental monitoring per zone. Each tenant or floor can have appropriate access without seeing each other's data.",
      },
    ],

    relatedIndustries: [
      { label: 'Coworking', href: '/industries/coworking' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Hospitality', href: '/industries/hospitality' },
    ],
  },
  {
    slug: 'hospitality-av-starter',
    title: 'Hospitality AV Starter',
    metaTitle: 'Hospitality AV Starter Bundle | Displays, Sound & Control | FollowThrough Works',
    metaDescription:
      'Commercial displays, distributed audio, and wall controller for taprooms, restaurants, and hospitality spaces. Installed and managed by FollowThrough Works.',
    heroTitle:
      'Hospitality AV Starter: Displays, Sound, and Control — Done Right From Day One',
    heroSubtitle:
      'Commercial-grade displays, distributed indoor/outdoor audio, and a wall-mounted controller — designed for taprooms, restaurants, and hospitality spaces that need AV done right the first time.',

    includedSolutions: [
      {
        title: 'Commercial Displays',
        description:
          'Bright, commercial-grade screens built for all-day use — menu boards, live sports, event schedules, or digital signage.',
        href: '/solutions/commercial-displays',
      },
      {
        title: 'Distributed Audio',
        description:
          'Indoor and outdoor speaker zones with independent volume control — consistent coverage without dead spots or bleed.',
        href: '/solutions/distributed-audio',
      },
      {
        title: 'Wall Controller',
        description:
          'A single wall-mounted panel your staff can use to switch inputs, adjust volume, and control zones — no app or laptop required.',
        href: '/solutions/wall-controller',
      },
      {
        title: 'Network Integration',
        description:
          'Properly configured network backbone so every AV component is reliable, remotely manageable, and ready to scale.',
        href: '/solutions/managed-it-compliance',
      },
    ],

    idealFor:
      "Taprooms, breweries, restaurants, event venues, and any hospitality space that wants reliable AV from day one — without cobbling together consumer gear or managing multiple vendor relationships.",

    valueCallout: {
      metric: '1 Panel',
      description:
        'Your staff controls displays, audio zones, and inputs from one wall-mounted panel. No apps, no laptops, no confusion.',
    },

    faqs: [
      {
        question: 'What screens are included?',
        answer:
          'We spec commercial-grade displays rated for all-day use — not consumer TVs. Size, quantity, and mounting are determined during your Site Score walkthrough based on your layout and viewing distances.',
      },
      {
        question: 'Can we add outdoor speakers?',
        answer:
          "Yes. Outdoor-rated speakers are included in the distributed audio design when your space has a patio, deck, or outdoor seating area. They run on separate zones so your staff can control indoor and outdoor volume independently.",
      },
      {
        question: 'Can we add cameras or access control later?',
        answer:
          'Absolutely. The network backbone we install as part of this bundle is designed to support additional systems. Cameras, access control, and environmental monitoring can all be layered in without re-wiring.',
      },
      {
        question: 'Does this work for new construction and existing spaces?',
        answer:
          "Yes. For new builds we coordinate with your GC on conduit and pre-wire. For existing spaces we assess what infrastructure is in place and design around it — minimizing drywall cuts and disruption.",
      },
    ],

    relatedIndustries: [
      { label: 'Brewery & Taproom', href: '/industries/brewery-taproom' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Event Venue', href: '/industries/event-venue' },
    ],
  },
  {
    slug: 'hybrid-meeting-room',
    title: 'Hybrid Meeting Room',
    metaTitle: 'Hybrid Meeting Room Bundle | Zoom Room Install | FollowThrough Works',
    metaDescription:
      'Complete Zoom Room bundle — AI camera, intelligent audio, display, and one-touch control. Installed and managed by FollowThrough Works in Folsom and Sacramento.',
    heroTitle:
      'Hybrid Meeting Room: One-Touch Meetings That Work for Everyone in the Room and on the Call',
    heroSubtitle:
      'A complete Zoom Room bundle — AI camera, intelligent audio, display, and one-touch control. Walk in, press start, and your meeting runs itself.',

    includedSolutions: [
      {
        title: 'AI-Tracking Camera',
        description:
          'Automatically detects and frames active speakers in real time. No camera operator. No manual PTZ control. Remote participants always see the right person.',
        href: '/solutions/av-zoom-rooms',
      },
      {
        title: 'Intelligent Microphone Array',
        description:
          'Beam-forming ceiling microphones that follow the conversation, suppress HVAC and room noise, and deliver clear audio to remote participants regardless of where people are sitting.',
        href: '/solutions/av-zoom-rooms',
      },
      {
        title: 'Presentation Display',
        description:
          'Room-appropriate display sized for readability from every seat — with a secondary screen for remote participant video if the room warrants it.',
        href: '/solutions/av-displays',
      },
      {
        title: 'One-Touch Room Control',
        description:
          'A tablet or wall panel that starts the meeting, connects to Zoom, Teams, or Google Meet, and configures the room — one press, fully operational.',
        href: '/solutions/av-zoom-rooms',
      },
      {
        title: 'Network & Security',
        description:
          'Dedicated VLAN for conference room equipment, encrypted media streams, and remote management through the same platform as the rest of your building.',
        href: '/solutions/managed-it-compliance',
      },
    ],

    idealFor:
      "Coworking spaces adding conference room amenities for members. Corporate offices upgrading from consumer webcams and speakerphones. Any business that runs regular hybrid meetings and is tired of the 10-minute setup ritual before every call.",

    valueCallout: {
      metric: 'Zero',
      description:
        'IT calls needed to start a meeting. Walk in, press start, and the room handles the rest — camera, audio, display, and call platform fully configured.',
    },

    faqs: [
      {
        question: 'Which meeting platforms does this support?',
        answer:
          "Zoom Rooms, Microsoft Teams Rooms, Google Meet, and Webex. We configure for your platform — or for multiple platforms if you need flexibility for different clients or use cases.",
      },
      {
        question: 'Can you upgrade our existing conference room instead of starting over?',
        answer:
          "Often yes. We assess what's worth keeping — usually the display and any structured cabling — and add the components that make the biggest difference. Camera and audio upgrades deliver the most immediate improvement.",
      },
      {
        question: 'How long does installation take?',
        answer:
          'Most single-room installations are completed in one day. Rooms requiring acoustic treatment or multi-camera configurations may take two days.',
      },
      {
        question: 'Is there ongoing support?',
        answer:
          'Yes. We offer a managed conference room package — firmware updates, health monitoring, remote configuration, and fast on-site response if something goes wrong before an important meeting.',
      },
      {
        question: 'Can this be added to an existing coworking space or office?',
        answer:
          'Yes. We install Hybrid Meeting Room bundles as standalone upgrades to individual rooms — no need to change the rest of your technology stack.',
      },
    ],

    relatedIndustries: [
      { label: 'Coworking', href: '/industries/coworking' },
      { label: 'Event Venue', href: '/industries/event-venue' },
      { label: 'Hospitality', href: '/industries/hospitality' },
    ],
  },
];

export function getBundleBySlug(slug: string): BundlePage | null {
  return BUNDLES.find((b) => b.slug === slug) ?? null;
}
