import { ProjectItem, ServiceItem, PricingPlan } from '../types';

export const WHATSAPP_NUMBER = '919897286918'; // Dedicated WhatsApp business inquiry channel
export const WHATSAPP_DISPLAY = '+91 98972 86918';
export const CONTACT_EMAIL = 'ayaanrangrezz1032008@gmail.com'; // Direct Studio email channel
export const INSTAGRAM_URL = 'https://www.instagram.com/ayaanali__77?stkn=MW13NXd5YXI3N3pxZQ==';
export const INSTAGRAM_HANDLE = '@ayaanali__77';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ayaan-ali-4a4b3a381?utm_source=share_via&utm_content=profile&utm_medium=member_android';
export const LINKEDIN_DISPLAY = 'Ayaan Ali';
export const GITHUB_URL = 'https://github.com/ayaanrangrerz';
export const GITHUB_HANDLE = 'ayaanrangrerz';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Website Development',
    tagline: 'Modern, high-performance web experiences engineered for credibility and conversion.',
    description: 'Custom-coded, responsive business websites and digital portals tailored to your brand identity with lightning-fast load times and clean technical foundations.',
    features: [
      'Responsive design across 360px to 4K displays',
      'Modern UI/UX with seamless interactions',
      'Mobile-first performance & sub-second loading',
      'Integrated contact & lead capture forms',
      'Clean SEO-ready semantic architecture',
      'Domain setup, SSL & production deployment support'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    idealFor: 'Businesses needing a serious, credible online identity that outshines competitors.'
  },
  {
    id: 'digital-marketing',
    number: '02',
    title: 'Digital Marketing & Ads',
    tagline: 'Data-driven paid media campaigns connecting your business to high-intent buyers.',
    description: 'Strategic acquisition campaigns across Google Ads and Meta Ads (Facebook & Instagram) engineered to generate qualified inbound leads rather than vanity impressions.',
    features: [
      'Google Search & Performance Max campaign setups',
      'Meta Ads (Facebook & Instagram) targeted funnels',
      'Audience segmentation & demographic research',
      'Conversion tracking & lead attribution',
      'High-CTR ad copy and creative direction',
      'Continuous budget optimization & A/B testing'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'Analytics'],
    idealFor: 'Businesses wanting predictable lead flow and real customer inquiries.'
  },
  {
    id: 'ai-solutions',
    number: '03',
    title: 'AI Digital Solutions',
    tagline: 'Intelligent automation and workflow enhancements designed for modern business operations.',
    description: 'We integrate smart AI tools, conversational lead bots, and automated digital workflows into your business systems to save hours of manual effort.',
    features: [
      'Custom AI chatbot integrations for instant customer replies',
      'Automated inquiry routing & notification workflows',
      'AI-powered document & lead qualification concepts',
      'Content generation & translation workflow tools',
      'API connections to modern intelligence models',
      'Operational efficiency consulting'
    ],
    techStack: ['Gemini API', 'OpenAI APIs', 'Python', 'Node.js', 'Webhooks'],
    idealFor: 'Companies seeking automated customer support and streamlined operational processes.'
  },
  {
    id: 'landing-pages',
    number: '04',
    title: 'Conversion Landing Pages',
    tagline: 'Laser-focused, single-purpose pages engineered to turn clicks into paying clients.',
    description: 'High-converting landing pages built specifically for ad campaigns, product rollouts, or dedicated service promotions with zero distraction and clear calls to action.',
    features: [
      'High-converting visual hierarchy & persuasive layouts',
      'Instant-load asset optimization for paid traffic',
      'Direct WhatsApp and lead form conversion points',
      'Device-calibrated readability & sticky call buttons',
      'Event tracking on every click, scroll, and submission',
      'Rapid turnaround for live marketing campaigns'
    ],
    techStack: ['HTML5/CSS3', 'React', 'Tailwind', 'Google Analytics'],
    idealFor: 'Marketing campaigns where every visitor drop-off equals wasted ad budget.'
  },
  {
    id: 'web-optimization',
    number: '05',
    title: 'Website Optimization',
    tagline: 'Speed up, modernize, and fix conversion bottlenecks in your existing website.',
    description: 'Comprehensive technical audit and overhaul of slow, outdated, or unresponsive websites to elevate your Core Web Vitals, mobile usability, and visitor retention.',
    features: [
      'Core Web Vitals acceleration (LCP, FID, CLS)',
      'Mobile layout restructuring & touch-target fixing',
      'Code minification, image compression & caching setup',
      'Form usability and frictionless UX improvements',
      'SEO meta auditing and structural cleanup',
      'Cross-browser and cross-device testing'
    ],
    techStack: ['Lighthouse', 'PageSpeed Insights', 'Modern CSS', 'Asset Bundlers'],
    idealFor: 'Existing websites that feel sluggish, look outdated on mobile, or fail to convert.'
  },
  {
    id: 'digital-presence',
    number: '06',
    title: 'Business Digital Presence',
    tagline: 'Transition your business from social-only presence to a permanent, authoritative digital asset.',
    description: 'For businesses relying solely on WhatsApp, Instagram, or local word-of-mouth. We build a unified digital footprint with official website, Google Maps integration, and branded touchpoints.',
    features: [
      'Professional digital storefront and service directory',
      'Google Business Profile integration assistance',
      'Direct one-tap WhatsApp chat & phone dialers',
      'Service pricing menus and transparent offerings',
      'Local search discoverability structure',
      'Sharable digital business card and link-in-bio hub'
    ],
    techStack: ['Web Standards', 'Schema.org LocalBusiness', 'Maps Embeds'],
    idealFor: 'Local service businesses, technicians, consultants, and independent practitioners.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'sumit-gas-service',
    title: 'Sumit Gas Service',
    category: 'client',
    subCategory: 'Business Website & Local SEO',
    description: 'Official production website for a premier gas stove and chimney repair, deep cleaning, and installation service operating across Delhi NCR. Features instant phone/WhatsApp booking, service breakdown, and local search architecture.',
    technologies: ['HTML5/CSS3', 'JavaScript', 'Responsive UI', 'Local SEO', 'WhatsApp Integration'],
    image: '/src/assets/images/project_sumit_gas_1790491064975.jpg',
    liveUrl: 'https://sumitgasservice.in',
    isClientProject: true,
    businessDetails: {
      clientName: 'Sumit Gas Service',
      industry: 'Home Appliance & Repair Services',
      location: 'Delhi NCR, India',
      keyDeliverables: [
        'Complete responsive commercial website',
        'Direct 1-tap call & WhatsApp emergency booking',
        'Transparent service pricing structure & chimney models',
        'Optimized for mobile field searches'
      ]
    }
  },
  {
    id: 'farhan-malik-digital',
    title: 'Farhan Malik Digital',
    category: 'client',
    subCategory: 'Digital Advertising Portfolio & Showcase',
    description: 'A comprehensive digital advertising demonstration and landing portal focused on high-performance paid campaigns across Google Ads, Meta Ads (Instagram/Facebook), and Snapchat Ads with campaign structures and conversion tracking.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Google Ads Architecture', 'Meta Ads Funnels'],
    image: '/src/assets/images/project_farhan_ads_1790491081042.jpg',
    liveUrl: 'https://farhanmalikdigital.netlify.app',
    isClientProject: true,
    businessDetails: {
      clientName: 'Farhan Malik Digital Showcase',
      industry: 'Performance Marketing & Paid Ads',
      location: 'Digital / Remote',
      keyDeliverables: [
        'Cross-platform ad framework demonstration',
        'Interactive campaign structure breakdown',
        'High-converting agency landing interface',
        'Integrated inquiry submission pipeline'
      ]
    }
  },
  {
    id: 'smart-study-tracker',
    title: 'Smart Study Tracker',
    category: 'tech',
    subCategory: 'Productivity & Systems Concept',
    description: 'A structured Python-based productivity application concept designed to monitor subject-wise study sessions, generate analytical progress metrics, and prevent academic burnout through scheduled active recall cycles.',
    technologies: ['Python', 'Data Analytics', 'CLI / GUI', 'File Persistence'],
    image: '/src/assets/images/studio_atmosphere_1790491094095.jpg',
    githubUrl: GITHUB_URL,
    isClientProject: false
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    category: 'tech',
    subCategory: 'AI & Natural Language Processing',
    description: 'An AI-driven project concept for parsing resume documents, matching candidate skills against job descriptions, and providing actionable semantic recommendations to improve ATS match scores.',
    technologies: ['Python', 'NLP', 'Machine Learning Concepts', 'FastAPI'],
    image: '/src/assets/images/studio_atmosphere_1790491094095.jpg',
    githubUrl: GITHUB_URL,
    isClientProject: false
  },
  {
    id: 'jarvis-assistant',
    title: 'JARVIS AI Assistant',
    category: 'tech',
    subCategory: 'Automation & Voice Assistant',
    description: 'An intelligent desktop assistant concept designed to execute voice-driven system commands, automate daily repetitive tasks, perform web lookups, and integrate with external APIs for instant information retrieval.',
    technologies: ['Python', 'Speech Recognition', 'Automation Scripts', 'System APIs'],
    image: '/src/assets/images/studio_atmosphere_1790491094095.jpg',
    githubUrl: GITHUB_URL,
    isClientProject: false
  },
  {
    id: 'student-grade-system',
    title: 'Student Grade Management System',
    category: 'tech',
    subCategory: 'Software Engineering / C++',
    description: 'An algorithmic academic record system implemented in C++ featuring robust file I/O operations, sorting algorithms, GPA calculations, and structured record searching without external database dependencies.',
    technologies: ['C++', 'Object-Oriented Programming', 'Data Structures', 'File Handling'],
    image: '/src/assets/images/studio_atmosphere_1790491094095.jpg',
    githubUrl: GITHUB_URL,
    isClientProject: false
  },
  {
    id: 'banking-system',
    title: 'Banking Transaction System',
    category: 'tech',
    subCategory: 'Software Engineering / C++',
    description: 'A secure financial transaction simulation program in C++ with transactional logging, ledger balance validation, PIN verification, and debit/credit state safety mechanisms.',
    technologies: ['C++', 'Data Structures', 'Transaction Logic', 'System Architecture'],
    image: '/src/assets/images/studio_atmosphere_1790491094095.jpg',
    githubUrl: GITHUB_URL,
    isClientProject: false
  },
  {
    id: 'registration-system',
    title: 'User Registration & Auth System',
    category: 'tech',
    subCategory: 'Software Engineering / C++',
    description: 'A modular authentication and credential management application in C++ demonstrating secure record verification, input validation routines, and encrypted data storage structures.',
    technologies: ['C++', 'Authentication Logic', 'Input Sanitization', 'Data Hashing'],
    image: '/src/assets/images/studio_atmosphere_1790491094095.jpg',
    githubUrl: GITHUB_URL,
    isClientProject: false
  },
  {
    id: 'cgpa-calculator',
    title: 'Modular CGPA Calculator',
    category: 'tech',
    subCategory: 'Software Engineering / C++',
    description: 'An exact academic grading computation tool built in C++ handling credit hour weighting, multi-semester grading scales, and accurate grade-point average projections.',
    technologies: ['C++', 'Algorithmic Computation', 'CLI Interface'],
    image: '/src/assets/images/studio_atmosphere_1790491094095.jpg',
    githubUrl: GITHUB_URL,
    isClientProject: false
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹1,499',
    numericPrice: 1499,
    summary: 'Essential single-page business website to establish your verified digital presence.',
    features: [
      'Single-page / responsive business layout',
      'Clean modern visual styling',
      'Direct WhatsApp and click-to-call buttons',
      'About Us and Service showcase sections',
      'Basic domain connection & deployment support',
      'Clean mobile testing across smartphone screen sizes'
    ],
    timeline: '2–3 Business Days',
    deliverables: ['1 Responsive Landing Page', 'Mobile Touch Optimization', 'Deployment to Web']
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹3,499',
    numericPrice: 3499,
    highlighted: true,
    badge: 'Most Popular',
    summary: 'Multi-section commercial website with lead capture, modern UI, and search-ready setup.',
    features: [
      'Multi-section structured business website',
      'Interactive service showcases & portfolio cards',
      'Functional contact & lead capture inquiry form',
      'Google Maps & social media embeds',
      'SEO-ready semantic markup & meta configuration',
      'High-speed asset optimization & smooth animations',
      'Full deployment support on fast cloud hosting'
    ],
    timeline: '4–6 Business Days',
    deliverables: ['Multi-Section Website', 'Lead Capture Form', 'Search Ready Markup', 'Cloud Hosting Setup']
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: '₹6,999',
    numericPrice: 6999,
    summary: 'Premium multi-page digital platform with bespoke UI/UX, conversion flows, and enhanced micro-interactions.',
    features: [
      'Comprehensive multi-page website architecture',
      'Bespoke luxury/futuristic UI/UX styling',
      'Lead qualification funnels & targeted forms',
      'Enhanced interactive components & micro-animations',
      'Complete Core Web Vitals performance tuning',
      'Ad campaign landing readiness (Google & Meta)',
      'Detailed launch QA and post-launch verification'
    ],
    timeline: '7–10 Business Days',
    deliverables: ['Advanced Multi-Page Site', 'High-Converting Funnel', 'Performance Tuning', 'Analytics Ready']
  },
  {
    id: 'full-platform',
    name: 'Full Platform',
    price: '₹9,999+',
    numericPrice: 9999,
    badge: 'Custom Enterprise',
    summary: 'Tailor-made digital platform, custom business functionality, third-party integrations, and scalable architecture.',
    features: [
      'Custom web application or extensive business portal',
      'Tailored functionality, databases & API integrations',
      'AI chatbot or custom workflow automation hooks',
      'Dynamic content management & custom data models',
      'Scalable cloud architecture & high-load readiness',
      'Full brand design system & custom component library',
      'Dedicated launch consultation & architecture briefing'
    ],
    timeline: '12–18 Business Days',
    deliverables: ['Custom Architecture', 'API Integrations', 'AI/Automation Concept', 'Priority Engineering']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understand the business, audience and objectives',
    description: 'We analyze your target market, competitors, service differentiators, and core conversion goals. We identify exactly how your customers search and what will convince them to take action.'
  },
  {
    step: '02',
    title: 'Plan',
    tagline: 'Define structure, technology and digital strategy',
    description: 'We construct the content hierarchy, wireframes, and technology stack. Whether you need a lightning-fast static landing page or an interactive business portal, the plan is mapped to real business outcomes.'
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'Create the visual identity and user experience',
    description: 'Crafting clean, futuristic, luxury layouts with deliberate typography, high contrast, and frictionless navigation. Every button, card, and section is engineered for legibility and aesthetic authority.'
  },
  {
    step: '04',
    title: 'Build',
    tagline: 'Develop and integrate the website',
    description: 'Writing clean, modern TypeScript and React code without unnecessary bloat. We ensure mobile-first responsiveness, smooth compositor animations, and integrated lead capture mechanisms.'
  },
  {
    step: '05',
    title: 'Launch',
    tagline: 'Deploy, test and connect required services',
    description: 'We configure your custom domain, SSL security certificates, Google search indexing tags, analytics, and contact routing so inquiries arrive directly in your inbox or WhatsApp.'
  },
  {
    step: '06',
    title: 'Optimize',
    tagline: 'Improve usability, performance and conversion paths',
    description: 'After deployment, we inspect performance metrics, test mobile speeds across real network connections, and refine conversion paths based on incoming user engagement.'
  }
];
