export interface IndustryPainPoint {
  title: string;
  description: string;
  icon: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface IndustryComplianceCallout {
  framework: string;
  headline: string;
  description: string;
  requirements: string[];
}

export interface IndustryCaseStudy {
  headline: string;
  summary: string;
  metric: string;
  metricLabel: string;
  caseStudySlug?: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryRelatedBundle {
  label: string;
  href: string;
}

export interface IndustryPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: IndustryPainPoint[];
  solutions: IndustrySolution[];
  relatedBundles: IndustryRelatedBundle[];
  complianceCallout?: IndustryComplianceCallout;
  caseStudy?: IndustryCaseStudy;
  caseStudies?: IndustryCaseStudy[];
  faqs: IndustryFAQ[];
  serviceAreaNote: string;
}

export const INDUSTRIES: IndustryPage[] = [
  {
    slug: 'medical-offices',
    title: 'Medical Offices',
    metaTitle:
      'Medical Office IT & Building Automation | HIPAA Compliant | FollowThrough Works',
    metaDescription:
      'HIPAA-compliant managed IT, environmental monitoring, access control, and digital check-in for medical practices and clinics in Folsom, Sacramento, and the Highway 50 corridor.',
    heroTitle: 'Technology Operations for Medical Practices',
    heroSubtitle:
      'HIPAA-compliant IT, environment monitoring, access control, and digital check-in — designed for practices that need everything to work, stay compliant, and not require an IT degree to manage.',

    painPoints: [
      {
        title: 'HIPAA compliance feels like guesswork',
        description:
          "You know you need to be compliant, but the technical requirements are dense and your current IT can't give you a straight answer on where you stand. We make compliance clear and manageable.",
        icon: 'ShieldAlert',
      },
      {
        title: 'Manual temperature logs waste clinical staff time',
        description:
          'Your staff is checking medication fridges and vaccine storage with a clipboard twice a day. Automated sensors log continuously, alert on out-of-range conditions, and produce audit-ready documentation.',
        icon: 'Thermometer',
      },
      {
        title: 'Your front desk is a paper sign-in sheet',
        description:
          "Paper sign-in sheets are a HIPAA liability — patients can see other patients' names. Digital check-in is private, professional, and produces compliant visitor logs.",
        icon: 'ClipboardList',
      },
      {
        title: 'Nobody knows who has keys to the medication room',
        description:
          'Physical keys with no audit trail is a compliance and safety gap. Smart access control logs every entry and makes it trivial to manage who has access to sensitive areas.',
        icon: 'KeyRound',
      },
    ],

    solutions: [
      {
        title: 'Managed IT & Compliance',
        description:
          'HIPAA-ready network, encrypted communications, endpoint protection, and audit documentation — your full IT department.',
        href: '/solutions/managed-it-compliance',
        icon: 'Monitor',
      },
      {
        title: 'Environmental Monitoring',
        description:
          '24/7 temperature and humidity monitoring for medication storage, vaccine fridges, and server rooms with real-time alerts.',
        href: '/solutions/environmental-monitoring',
        icon: 'Thermometer',
      },
      {
        title: 'Access Control',
        description:
          'Smart access to medication rooms, supply closets, and the building itself — with full audit trails for compliance.',
        href: '/solutions/access-control',
        icon: 'Lock',
      },
      {
        title: 'Visitor Check-In',
        description:
          'HIPAA-compliant digital check-in that replaces paper sign-in sheets and protects patient privacy.',
        href: '/solutions/visitor-check-in',
        icon: 'UserCheck',
      },
      {
        title: 'Business Phones & UCaaS',
        description:
          'Reliable phone systems for patient calls, after-hours routing, and multi-location communication.',
        href: '/solutions/business-phones',
        icon: 'Phone',
      },
      {
        title: 'Camera Monitoring',
        description:
          'Coverage for parking, entries, and common areas — with AI search to find incidents fast.',
        href: '/solutions/camera-monitoring',
        icon: 'Camera',
      },
    ],

    relatedBundles: [
      { label: 'HIPAA Compliance Stack', href: '/bundles/hipaa-compliance' },
      { label: 'New Location Starter', href: '/bundles/new-location-starter' },
    ],

    complianceCallout: {
      framework: 'HIPAA',
      headline: 'HIPAA Technical Safeguards — We Handle Them',
      description:
        "The HIPAA Security Rule requires specific technical controls. Here's what we implement and manage for your practice:",
      requirements: [
        'Encrypted data at rest and in transit',
        'Role-based access controls with unique user IDs',
        'Automated audit logs for access and activity',
        'Secure backup with tested recovery procedures',
        'Network segmentation and firewall management',
        'Business Associate Agreements (BAAs) with all vendors',
        'Continuous vulnerability monitoring and patching',
        'Documented policies and incident response procedures',
      ],
    },

    caseStudy: {
      headline: 'A Growing Practice in Folsom Passed Their HIPAA Audit With Zero Findings',
      summary:
        'A multi-provider family practice was operating with consumer-grade networking, no access logs, manual temperature checks, and a paper sign-in sheet. We deployed managed IT with compliance documentation, environmental sensors, smart access control, and digital check-in. Their next audit: zero findings.',
      metric: 'Zero',
      metricLabel: 'HIPAA audit findings',
      caseStudySlug: 'folsom-medical-practice-hipaa',
    },

    faqs: [
      {
        question: 'Do you have experience with medical practices specifically?',
        answer:
          "Yes. Medical offices are our primary vertical. We understand HIPAA requirements, EHR networking needs, and the specific technology challenges practices face — from medication storage monitoring to patient check-in.",
      },
      {
        question: 'Can you help us prepare for a HIPAA audit?',
        answer:
          "That's one of our core services. We implement the technical safeguards, maintain the documentation, and can walk you through what auditors look for. Our clients have maintained a 100% audit pass rate.",
      },
      {
        question: 'Do you work with our EHR system?',
        answer:
          "We work alongside any major EHR platform. We handle the network, security, and infrastructure that the EHR runs on — we don't replace your clinical software, we make sure it runs reliably and compliantly.",
      },
      {
        question: 'What does this cost for a typical practice?',
        answer:
          "It varies by practice size and needs, but our free Site Score gives you a clear picture of what you need and approximate investment ranges — no commitment required. Most practices find that proper managed IT costs less than the risk of non-compliance.",
      },
      {
        question: 'Can you handle multi-location practices?',
        answer:
          "Yes. We manage technology across multiple locations from a single dashboard. Consistent compliance, centralized monitoring, and unified access control — whether you have 2 locations or 10.",
      },
    ],

    serviceAreaNote:
      'Serving medical practices in Folsom, Sacramento, El Dorado Hills, Granite Bay, Rancho Cordova, Roseville, Rocklin, and the Highway 50 corridor.',
  },

  {
    slug: 'retail',
    title: 'Retail',
    metaTitle:
      'IT & Security for Retail Businesses | Folsom & Sacramento | FollowThrough Works',
    metaDescription:
      'Reliable IT, smart cameras, and access control for retail businesses in Folsom, Sacramento, and the Highway 50 corridor. Reduce shrink, protect your network, and keep POS systems running.',
    heroTitle: 'Technology That Keeps Your Retail Business Running and Protected',
    heroSubtitle:
      'From POS network reliability to smart cameras and access control — we manage the technology layer so you can focus on customers, not downtime.',

    painPoints: [
      {
        title: 'POS downtime costs you sales and credibility',
        description:
          'A network hiccup at checkout is a lost sale and a frustrated customer. We monitor and manage your network so payment systems stay up during peak hours.',
        icon: 'Monitor',
      },
      {
        title: 'Shrink is happening and you have no visibility',
        description:
          'Employee theft, shoplifting, and inventory discrepancies drain margin quietly. Smart cameras with AI search help you investigate incidents in seconds, not hours.',
        icon: 'EyeOff',
      },
      {
        title: 'Back-of-house access is uncontrolled',
        description:
          "Stock rooms, safes, and receiving areas need more than a key. Access control logs who entered and when — critical for loss prevention investigations.",
        icon: 'KeyRound',
      },
    ],

    solutions: [
      {
        title: 'Managed IT & Compliance',
        description:
          'Reliable network management, POS connectivity, PCI compliance, and IT support that keeps your business running.',
        href: '/solutions/managed-it-compliance',
        icon: 'Monitor',
      },
      {
        title: 'Camera Monitoring & AI Search',
        description:
          'Smart cameras covering sales floor, registers, and receiving — with AI search to find any incident in seconds.',
        href: '/solutions/camera-monitoring',
        icon: 'Camera',
      },
      {
        title: 'Access Control',
        description:
          'Restrict stock room, office, and safe access to authorized staff with digital credentials and full audit logs.',
        href: '/solutions/access-control',
        icon: 'Lock',
      },
    ],

    relatedBundles: [
      { label: 'New Location Starter', href: '/bundles/new-location-starter' },
      { label: 'Smart Building Essentials', href: '/bundles/smart-building-essentials' },
    ],

    faqs: [
      {
        question: 'Can you help with PCI compliance?',
        answer:
          'Yes. Our managed IT service covers the technical controls required for PCI DSS compliance — network segmentation, firewall management, patch management, and documentation. We keep your cardholder data environment properly isolated.',
      },
      {
        question: 'How do smart cameras help with loss prevention?',
        answer:
          'AI-powered search lets you describe what you are looking for — a specific time, a person, a transaction — and the system finds the corresponding footage in seconds. This turns your camera system from a passive recorder into an active loss prevention tool.',
      },
      {
        question: 'Can cameras cover parking lots?',
        answer:
          'Yes. We use weatherproof exterior cameras with wide-angle coverage and night vision. Parking lot coverage is one of the highest-value camera placements for retail.',
      },
      {
        question: 'What happens if our internet goes down?',
        answer:
          'We configure failover options for critical systems. For POS environments, we can add cellular backup so payment processing continues even during an internet outage.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We serve retail businesses in Folsom, Sacramento, El Dorado Hills, Granite Bay, Rancho Cordova, Roseville, Rocklin, and surrounding communities along the Highway 50 corridor.',
      },
    ],

    serviceAreaNote:
      'Serving retail businesses in Folsom, El Dorado Hills, Sacramento, Rancho Cordova, Granite Bay, Roseville, and Rocklin — with on-site response across the Highway 50 corridor.',
  },

  {
    slug: 'coworking',
    title: 'Coworking & Shared Offices',
    metaTitle:
      'IT & Access Control for Coworking Spaces | Folsom & Sacramento | FollowThrough Works',
    metaDescription:
      'Smart access control, guest WiFi management, visitor check-in, and managed IT for coworking spaces in Folsom, Sacramento, and the Highway 50 corridor.',
    heroTitle:
      'Run a Tighter, More Professional Coworking Operation — With Technology That Impresses Members',
    heroSubtitle:
      'Smart access control, member credentials, guest WiFi isolation, digital visitor logs, and Zoom Rooms for hybrid meetings — the full technology layer your members expect and your operation depends on.',

    painPoints: [
      {
        title: 'After-hours access is a constant management headache',
        description:
          'Keys get copied, codes get shared, and you have no way to know who was in the building at 11pm. Digital credentials let you grant, restrict, and revoke access per member — and see exactly who used it.',
        icon: 'Clock',
      },
      {
        title: 'Guest WiFi abuse is eroding bandwidth for paying members',
        description:
          "Walk-ins and neighboring businesses are using your public WiFi, slowing down members who are paying for reliable internet. Proper network segmentation and guest portal management fix this.",
        icon: 'Wifi',
      },
      {
        title: 'Visitor management is a paper clipboard at the front desk',
        description:
          'Paper sign-in sheets are unprofessional and create no real record. Digital check-in gives guests a polished first impression and gives you a searchable, timestamped log.',
        icon: 'ClipboardList',
      },
      {
        title: "Your conference room isn't ready for hybrid meetings",
        description:
          "Members expect to walk into a conference room, tap a button, and be in a Zoom call that sounds and looks professional — for both the people in the room and the people on the call. A laptop propped on a stack of books isn't good enough anymore. AI-powered Zoom Rooms make every hybrid meeting work the way it should.",
        icon: 'Video',
      },
    ],

    solutions: [
      {
        title: 'Access Control',
        description:
          'Per-member digital credentials, scheduled access windows, real-time audit logs, and remote lock/unlock for every door.',
        href: '/solutions/access-control',
        icon: 'Lock',
      },
      {
        title: 'Managed IT & Compliance',
        description:
          'Network management, guest WiFi isolation, bandwidth control, and IT support for your infrastructure and members.',
        href: '/solutions/managed-it-compliance',
        icon: 'Monitor',
      },
      {
        title: 'Visitor Check-In',
        description:
          'Professional digital check-in kiosk for day passes, guests, and delivery — with host notifications and searchable logs.',
        href: '/solutions/visitor-check-in',
        icon: 'UserCheck',
      },
      {
        title: 'Camera Monitoring & AI Search',
        description:
          'Coverage for entrances, common areas, and parking — with AI search to resolve any incident quickly.',
        href: '/solutions/camera-monitoring',
        icon: 'Camera',
      },
      {
        title: 'Zoom Rooms & Hybrid Meeting',
        description:
          'AI-powered cameras and intelligent audio that auto-track speakers and make hybrid meetings work — for everyone in the room and everyone on the call.',
        href: '/solutions/av-zoom-rooms',
        icon: 'Video',
      },
    ],

    relatedBundles: [
      { label: 'Smart Building Essentials', href: '/bundles/smart-building-essentials' },
      { label: 'New Location Starter', href: '/bundles/new-location-starter' },
    ],

    caseStudy: {
      headline: 'A Growing Coworking Space Cut Help Desk Calls in Half',
      summary:
        'A 15,000 sq ft coworking space in Sacramento automated member access with individual mobile credentials, segmented the network, and deployed smart cameras. Help desk calls dropped by more than half within the first month.',
      metric: '50%+',
      metricLabel: 'reduction in help desk calls',
      caseStudySlug: 'sacramento-coworking-smart-building',
    },

    caseStudies: [
      {
        headline: 'A Growing Coworking Space Cut Help Desk Calls in Half',
        summary:
          'A 15,000 sq ft coworking space in Sacramento automated member access with individual mobile credentials, segmented the network, and deployed smart cameras. Help desk calls dropped by more than half within the first month.',
        metric: '50%+',
        metricLabel: 'reduction in help desk calls',
        caseStudySlug: 'sacramento-coworking-smart-building',
      },
      {
        headline: 'Granite City Workspaces — Historic Downtown Folsom',
        summary:
          'FollowThrough Works operates Granite City Workspaces in Folsom — a coworking and event space running on the same managed technology stack we install for clients. Member access control, isolated guest WiFi, smart cameras, visitor check-in, and Zoom Room capabilities — all live, all managed, and available to tour.',
        metric: 'Live Demo',
        metricLabel: 'Granite City Workspaces — Historic Downtown Folsom',
      },
    ],

    faqs: [
      {
        question: 'Can access control integrate with our membership management software?',
        answer:
          'In many cases, yes. We can configure access schedules tied to membership status so active members have access and lapsed members are automatically restricted. We will evaluate the specific integration during the Site Score assessment.',
      },
      {
        question: 'How do you handle guest WiFi vs member WiFi?',
        answer:
          'We segment your network so guest WiFi is completely isolated from your member and management networks. We can add a captive portal for guest login, bandwidth throttling for guest connections, and usage monitoring to catch abuse.',
      },
      {
        question: 'Can we grant temporary access for day passes?',
        answer:
          'Yes. We can issue time-limited credentials — valid for a single day or specific time window — for day pass users without creating a permanent access record. When the pass expires, access revokes automatically.',
      },
      {
        question: 'Do cameras need to cover every desk?',
        answer:
          'No. We focus cameras on high-value positions: entrances, exits, common areas, and parking. Individual desks are rarely appropriate or necessary — and members generally prefer privacy at their workspace.',
      },
      {
        question: 'Can you install a Zoom Room in our conference room?',
        answer:
          'Yes. We design and install AI-powered Zoom Rooms with auto-tracking cameras, intelligent microphone arrays, and one-touch meeting control. Members walk in, press start, and the room handles the rest — no IT support required.',
      },
      {
        question: 'Do you have a reference site we can visit?',
        answer:
          'Yes. We operate Granite City Workspaces in Historic Downtown Folsom — a coworking and event venue running on the same managed technology stack we install for clients. Contact us to arrange a tour.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We serve coworking and shared office spaces in Folsom, Sacramento, El Dorado Hills, Granite Bay, Rancho Cordova, Roseville, Rocklin, and surrounding communities along the Highway 50 corridor.',
      },
    ],

    serviceAreaNote:
      'Serving coworking spaces and shared offices in Folsom, El Dorado Hills, Sacramento, Rancho Cordova, Granite Bay, Roseville, and Rocklin — with on-site response across the Highway 50 corridor.',
  },

  {
    slug: 'manufacturing',
    title: 'Manufacturing & Warehousing',
    metaTitle:
      'IT & Security for Manufacturing & Warehousing | Folsom & Sacramento | FollowThrough Works',
    metaDescription:
      'Environmental monitoring, perimeter cameras, access control, and managed IT for manufacturing and warehousing operations in Folsom, Sacramento, and the Highway 50 corridor.',
    heroTitle: 'Protect Your Facility, Equipment, and Uptime',
    heroSubtitle:
      'Environmental sensors, perimeter cameras, access-controlled restricted areas, and managed network infrastructure — keeping your facility secure and your operations uninterrupted.',

    painPoints: [
      {
        title: 'Equipment failure from temperature or humidity goes undetected until it is too late',
        description:
          'Server rooms, cold storage, and sensitive production areas need 24/7 environmental monitoring. A weekend spike in temperature can mean ruined inventory or failed equipment by Monday.',
        icon: 'Thermometer',
      },
      {
        title: 'Your perimeter and loading dock have blind spots',
        description:
          'After-hours theft and unauthorized access are hardest to catch without camera coverage at every entry point. Smart cameras with AI search turn hours of footage review into seconds.',
        icon: 'EyeOff',
      },
      {
        title: 'Restricted areas rely on keys or nothing at all',
        description:
          'Tool cribs, server rooms, executive areas, and hazmat storage need access controls that log who entered and when — not keys that get copied and never returned.',
        icon: 'KeyRound',
      },
    ],

    solutions: [
      {
        title: 'Environmental Monitoring',
        description:
          'Temperature, humidity, water leak, and air quality sensors with real-time alerts for server rooms, cold storage, and production areas.',
        href: '/solutions/environmental-monitoring',
        icon: 'Thermometer',
      },
      {
        title: 'Camera Monitoring & AI Search',
        description:
          'Perimeter, loading dock, and interior cameras with AI-powered search — find any incident in seconds.',
        href: '/solutions/camera-monitoring',
        icon: 'Camera',
      },
      {
        title: 'Access Control',
        description:
          'Restrict and audit access to server rooms, tool cribs, hazmat storage, and executive areas with digital credentials.',
        href: '/solutions/access-control',
        icon: 'Lock',
      },
      {
        title: 'Managed IT & Compliance',
        description:
          'Network infrastructure management, endpoint protection, and IT support for industrial and office environments.',
        href: '/solutions/managed-it-compliance',
        icon: 'Monitor',
      },
    ],

    relatedBundles: [
      { label: 'Smart Building Essentials', href: '/bundles/smart-building-essentials' },
    ],

    faqs: [
      {
        question: 'Can sensors work in dusty or high-humidity industrial environments?',
        answer:
          'Yes. We select sensors rated for the specific environment — industrial-grade units where needed. We evaluate your facility conditions during the Site Score walkthrough and recommend appropriate hardware.',
      },
      {
        question: 'How many cameras do we need for a large warehouse?',
        answer:
          'Far fewer than you might think when placed strategically. We focus on loading docks, perimeter entry points, high-value storage areas, and any compliance-sensitive zones. Strategic placement beats blanket coverage every time.',
      },
      {
        question: 'Can access control work with time-and-attendance systems?',
        answer:
          'In many cases yes. Access logs can serve as a secondary record of arrivals and departures. We will evaluate integration options with your specific HR or payroll system during the assessment.',
      },
      {
        question: 'What about network infrastructure for industrial equipment?',
        answer:
          'We design and manage networks that segment industrial control systems from corporate IT — reducing attack surface and ensuring operational technology stays isolated from general business traffic.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We serve manufacturing and warehousing operations in Folsom, Sacramento, El Dorado Hills, Granite Bay, Rancho Cordova, Roseville, Rocklin, and surrounding communities along the Highway 50 corridor.',
      },
    ],

    serviceAreaNote:
      'Serving manufacturing and warehousing facilities in Folsom, El Dorado Hills, Sacramento, Rancho Cordova, Granite Bay, Roseville, and Rocklin — with on-site response across the Highway 50 corridor.',
  },

  {
    slug: 'hospitality',
    title: 'Hospitality & Food Service',
    metaTitle:
      'IT & Technology for Hospitality & Restaurants | Folsom & Sacramento | FollowThrough Works',
    metaDescription:
      'Reliable WiFi, VoIP phones, camera systems, and managed IT for hotels, restaurants, and hospitality businesses in Folsom, Sacramento, and the Highway 50 corridor.',
    heroTitle: 'Technology That Keeps Guests Happy and Operations Smooth',
    heroSubtitle:
      'Reliable WiFi, managed phone systems, and smart cameras — built for hospitality environments where downtime affects the guest experience and your reputation.',

    painPoints: [
      {
        title: "Guest WiFi that's slow or unreliable damages your reviews",
        description:
          "Guests expect fast, reliable WiFi — and they will tell everyone when they don't get it. Properly designed guest networks with appropriate bandwidth and isolation deliver the experience they expect.",
        icon: 'Wifi',
      },
      {
        title: 'Your phone system misses calls and frustrates guests',
        description:
          'Missed reservations, dropped transfers, and voicemails that disappear cost you revenue. Modern VoIP systems handle call routing professionally — and scale as you grow.',
        icon: 'Phone',
      },
      {
        title: 'Kitchen, bar, and back-of-house incidents have no record',
        description:
          'Slip-and-fall claims, theft, and vendor disputes are harder to resolve without camera coverage. Smart cameras protect you from liability and help you investigate quickly.',
        icon: 'Camera',
      },
    ],

    solutions: [
      {
        title: 'Managed IT & Compliance',
        description:
          'Guest and staff network management, POS connectivity, PCI compliance, and proactive IT support.',
        href: '/solutions/managed-it-compliance',
        icon: 'Monitor',
      },
      {
        title: 'Business Phones & UCaaS',
        description:
          'Professional VoIP phone systems with auto-attendant, room phones, and reliable call routing.',
        href: '/solutions/business-phones',
        icon: 'Phone',
      },
      {
        title: 'Camera Monitoring & AI Search',
        description:
          'Coverage for entrances, dining areas, bar, kitchen, and parking — with AI search for rapid incident review.',
        href: '/solutions/camera-monitoring',
        icon: 'Camera',
      },
    ],

    relatedBundles: [
      { label: 'Smart Building Essentials', href: '/bundles/smart-building-essentials' },
      { label: 'New Location Starter', href: '/bundles/new-location-starter' },
    ],

    faqs: [
      {
        question: 'How do you handle guest WiFi vs staff networks?',
        answer:
          'We design separate SSIDs for guests and staff, properly isolated so guests cannot access POS systems, kitchen displays, or internal management systems. Guest bandwidth is managed to prevent any single user from degrading the experience for others.',
      },
      {
        question: 'Can we keep our existing phone numbers?',
        answer:
          'Yes. Number porting brings your existing business numbers to the new VoIP system. Guests and vendors continue dialing the same numbers — no disruption during the transition.',
      },
      {
        question: 'Do cameras need to cover the dining room?',
        answer:
          'It depends on your priorities. Most hospitality operators focus camera coverage on entrances, exits, bar areas, cash handling, and parking. Dining room coverage can help with liability claims but should be balanced against guest comfort expectations.',
      },
      {
        question: 'What about PCI compliance for card payments?',
        answer:
          'Our managed IT service includes the network controls required for PCI DSS compliance — segmenting your payment environment from guest WiFi and general business traffic.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We serve hospitality and food service businesses in Folsom, Sacramento, El Dorado Hills, Granite Bay, Rancho Cordova, Roseville, Rocklin, and surrounding communities along the Highway 50 corridor.',
      },
    ],

    serviceAreaNote:
      'Serving hotels, restaurants, and hospitality businesses in Folsom, El Dorado Hills, Sacramento, Rancho Cordova, Granite Bay, Roseville, and Rocklin — with on-site response across the Highway 50 corridor.',
  },

  {
    slug: 'brewery-taproom',
    title: 'Brewery & Taproom',
    metaTitle:
      'IT & Environmental Monitoring for Breweries | Folsom & Sacramento | FollowThrough Works',
    metaDescription:
      'Temperature monitoring for fermentation, smart cameras for the taproom, and managed IT for breweries and taprooms in Folsom, Sacramento, and the Highway 50 corridor.',
    heroTitle: 'Technology Built for the Brewery Environment',
    heroSubtitle:
      'Temperature monitoring for fermentation and cold storage, taproom cameras, and reliable IT for POS and WiFi — protecting your product and your operation.',

    painPoints: [
      {
        title: 'A fermenter temperature spike can ruin a batch overnight',
        description:
          'Manual checks miss what happens at 3am on a Sunday. Continuous temperature sensors alert you the moment a fermenter or cold storage unit drifts out of range.',
        icon: 'Thermometer',
      },
      {
        title: 'Taproom incidents have no documentation',
        description:
          'Slip-and-fall claims, disputes, and theft are difficult to resolve without camera footage. Smart cameras with AI search let you find any incident in seconds.',
        icon: 'EyeOff',
      },
      {
        title: 'POS and WiFi reliability affects the guest experience',
        description:
          "A POS crash during a busy Friday night costs you sales and damages the taproom experience. Managed IT keeps your network stable so the guest-facing systems stay up.",
        icon: 'Monitor',
      },
    ],

    solutions: [
      {
        title: 'Environmental Monitoring',
        description:
          'Temperature and humidity sensors for fermenters, brite tanks, cold storage, and walk-in coolers — with real-time alerts.',
        href: '/solutions/environmental-monitoring',
        icon: 'Thermometer',
      },
      {
        title: 'Camera Monitoring & AI Search',
        description:
          'Taproom, production floor, and parking coverage with AI-powered search for fast incident review.',
        href: '/solutions/camera-monitoring',
        icon: 'Camera',
      },
      {
        title: 'Managed IT & Compliance',
        description:
          'Reliable network management, POS connectivity, guest WiFi, and IT support for your taproom and production operations.',
        href: '/solutions/managed-it-compliance',
        icon: 'Monitor',
      },
    ],

    relatedBundles: [
      { label: 'Smart Building Essentials', href: '/bundles/smart-building-essentials' },
    ],

    caseStudy: {
      headline: 'Caught a Fermenter Failure Before It Ruined a Batch',
      summary:
        'A local Folsom brewery installed continuous temperature monitoring on their fermenters and cold storage. Within the first month, an alert triggered at 2am when a glycol chiller failed — staff were on-site within the hour and the batch was saved.',
      metric: '1 Batch',
      metricLabel: 'Saved in the first 30 days',
    },

    faqs: [
      {
        question: 'What types of sensors do you use for fermentation monitoring?',
        answer:
          'We use temperature and humidity sensors rated for high-moisture environments. For fermenters and brite tanks, we place sensors at the vessel level and at the glycol chiller. Alert thresholds are set based on your specific fermentation profiles.',
      },
      {
        question: 'How do we get alerts when something goes wrong?',
        answer:
          'Via text message, email, or automated phone call — your choice, configurable per alert type. You can set escalation rules so a backup contact is notified if the primary does not acknowledge within a set time window.',
      },
      {
        question: 'Can cameras cover both the production floor and the taproom?',
        answer:
          'Yes. We typically place cameras at taproom entrances, the bar area, the production floor perimeter, and parking. Interior production equipment coverage is optional based on your insurance and security requirements.',
      },
      {
        question: 'What about WiFi for taproom customers?',
        answer:
          'We set up a properly isolated guest WiFi network so taproom customers get a reliable experience without being on the same network as your POS, production monitoring, or internal systems.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We serve breweries and taprooms in Folsom, Sacramento, El Dorado Hills, Granite Bay, Rancho Cordova, Roseville, Rocklin, and surrounding communities along the Highway 50 corridor.',
      },
    ],

    serviceAreaNote:
      'Serving breweries and taprooms in Folsom, El Dorado Hills, Sacramento, Rancho Cordova, Granite Bay, Roseville, and Rocklin — with on-site response across the Highway 50 corridor.',
  },

  {
    slug: 'event-venue',
    title: 'Event Venue',
    metaTitle:
      'Technology for Event Venues | AV, Sound & Smart Automation | FollowThrough Works',
    metaDescription:
      'Video walls, PA systems, wireless mics, silent disco, and smart event automation for event venues in Folsom, Sacramento, and the Highway 50 corridor.',
    heroTitle: 'Technology That Makes Every Event Run Without a Hitch',
    heroSubtitle:
      "Video walls, PA systems, wireless mics, silent disco, smart HVAC, and one-button automation — designed for event venues that can't afford a technical failure in front of a full house.",

    painPoints: [
      {
        title: 'AV that requires a technician to operate',
        description:
          "If your staff needs to call someone every time a client wants to change an input or adjust the sound, your AV system is working against you. We install wall controllers and scene-based automation so any staff member can run a full event without technical knowledge.",
        icon: 'Sliders',
      },
      {
        title: 'A sound system that was never designed for your space',
        description:
          "Echo, feedback, dead zones, and a PA that only sounds good if you're standing in one specific spot. Commercial sound systems are engineered for the room — speaker placement, amplification, acoustic treatment, and DSP calibration are all part of the install.",
        icon: 'Volume2',
      },
      {
        title: 'Displays that look like an afterthought',
        description:
          "A row of mismatched consumer TVs on rolling stands is not a venue feature — it's a liability. A properly installed video wall or multi-zone display system becomes part of the room, runs unified content or independent zones, and impresses clients before the event even starts.",
        icon: 'Tv2',
      },
      {
        title: 'No way to set the space for different event types',
        description:
          'A corporate seminar needs different lighting, sound levels, and display content than a DJ night or a private dinner. Scene-based automation lets staff switch the entire room configuration — displays, audio, HVAC, and lighting — with a single button press.',
        icon: 'LayoutGrid',
      },
    ],

    solutions: [
      {
        title: 'AV & Entertainment',
        description:
          'Video walls, distributed audio, PA systems, wireless mics, silent disco, and full event automation — designed for venues that run multiple event types.',
        href: '/solutions/av-entertainment',
        icon: 'Music',
      },
      {
        title: 'Commercial AV & Displays',
        description:
          'Multi-panel video walls with zone control — run one unified display or split into independent content areas on demand.',
        href: '/solutions/av-displays',
        icon: 'Tv2',
      },
      {
        title: 'Sound & Entertainment Systems',
        description:
          'High-fidelity PA, distributed background audio, wireless mics, DJ integration, silent disco, and smart HVAC automation.',
        href: '/solutions/av-sound',
        icon: 'Volume2',
      },
      {
        title: 'Camera Monitoring & AI Search',
        description:
          'Coverage for entrances, event floor, bar, and parking — with AI search for rapid incident review.',
        href: '/solutions/camera-monitoring',
        icon: 'Camera',
      },
      {
        title: 'Access Control',
        description:
          'Keyless entry for staff and vendors, scheduled access for event hours, and full audit logs.',
        href: '/solutions/access-control',
        icon: 'Key',
      },
    ],

    relatedBundles: [
      { label: 'Smart Building Essentials', href: '/bundles/smart-building-essentials' },
      { label: 'New Location Starter', href: '/bundles/new-location-starter' },
    ],

    caseStudies: [
      {
        headline: '15-Foot Video Wall — Event Venue, Sacramento Area',
        summary:
          'We installed a 6-panel commercial video wall with a wall controller that lets staff switch between a unified full-wall display and independently zoned screens. Staff controls the entire system — inputs, zones, and content — from a single panel. No remote, no app, no technician.',
        metric: '15-Foot',
        metricLabel: 'Video Wall — Event Venue, Sacramento Area',
      },
      {
        headline: 'One Button Event Mode Automation',
        summary:
          'A single scene preset switches the venue from background mode to full event mode — PA activated, displays configured, HVAC adjusted, and lighting set. The same system supports corporate seminars, DJ nights, private dinners, silent disco, and hybrid presentations with wireless mics. Staff triggers the right scene for the event type and the room configures itself.',
        metric: 'One Button',
        metricLabel: 'Event Mode Automation',
      },
    ],

    faqs: [
      {
        question: 'Can you handle events with both in-person and virtual attendees?',
        answer:
          'Yes. We integrate Zoom Room and hybrid meeting capability into event venue builds — AI cameras, beam-forming microphones, and display systems that make remote participants a full part of the event rather than a thumbnail in the corner.',
      },
      {
        question: 'What is silent disco and is it right for our venue?',
        answer:
          "Silent disco uses wireless headphones that receive audio on multiple channels simultaneously. Guests tune to their preferred channel — useful for private events in noise-restricted areas, multi-track experiences, or simply running two different music environments in the same space. It's a strong differentiator for event venues targeting corporate and private event bookings.",
      },
      {
        question: 'Can the system be operated by our staff without AV training?',
        answer:
          "That's the design goal. Wall controllers with labeled scene buttons mean any staff member can run a standard event. For complex productions with live performers and multiple inputs, a dedicated operator may be appropriate — but your staff can handle corporate events, private parties, and standard DJ nights without technical help.",
      },
      {
        question: 'How long does a full event venue AV install take?',
        answer:
          'A comprehensive install — video wall, PA, distributed audio, wireless mics, wall controllers, and automation — typically takes 3–5 days. Larger venues or builds with significant structured cabling and acoustic treatment may take longer. We\'ll give you a clear project timeline before we start.',
      },
      {
        question: 'Do you integrate with our booking and venue management software?',
        answer:
          'We can integrate room control with calendar and booking platforms for automated scene activation — the system knows when an event is scheduled and can pre-configure the space. We evaluate specific integrations during the design phase.',
      },
    ],

    serviceAreaNote:
      'Serving event venues in Folsom, Sacramento, El Dorado Hills, Rancho Cordova, Granite Bay, Roseville, and Rocklin — with on-site response across the Highway 50 corridor.',
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | null {
  return INDUSTRIES.find((i) => i.slug === slug) ?? null;
}
