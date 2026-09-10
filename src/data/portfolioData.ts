import {
  MetricItem,
  ExperienceRole,
  EarlyCareerRole,
  AICardItem,
  ExpertiseCategory,
  ImpactDashboardTab,
  CertificationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Shubham Khandelwal',
  title: 'Senior AI & SEO Analyst',
  corePositioning:
    'Senior AI & SEO Analyst helping SaaS and digital businesses build scalable organic growth systems with Technical SEO, AI-powered workflows, automation, and data-driven content strategy.',
  location: 'Alwar, Rajasthan, India',
  email: 'shubhamk9772@gmail.com',
  phone: '+91-7014267674',
  linkedIn: 'https://www.linkedin.com/in/shubham-khandelwal-seo/',
  summary:
    'Senior AI & SEO Analyst with 5+ years of experience driving organic traffic, enhancing Core Web Vitals, and scaling content strategy across B2B, SaaS, OTT, local, and listing platforms. Currently leading AI-powered SEO and topical cluster strategy at Muvi.com — a globally recognized enterprise OTT streaming platform. Proven track record of boosting organic visibility by 30%+ in under 4 months, securing 100+ high-authority backlinks through Digital PR, resolving 500+ crawl and indexing errors, and implementing schema markup across commercial platforms.',
};

export const HERO_TRUST_SKILLS = [
  'Technical SEO',
  'AI for SEO',
  'Core Web Vitals',
  'Structured Data',
  'GA4',
  'Ahrefs',
];

export const HERO_METRICS: MetricItem[] = [
  {
    id: 'exp',
    value: '5+',
    numericTarget: 5,
    suffix: '+',
    label: 'Years of SEO Experience',
    context: 'Enterprise SaaS, OTT & High-Traffic Portals',
  },
  {
    id: 'traffic',
    value: '20%+',
    numericTarget: 20,
    suffix: '%+',
    label: 'Organic Traffic Growth',
    context: 'Scaled at Muvi.com (and 30%+ at Tractor Junction)',
  },
  {
    id: 'clusters',
    value: '14',
    numericTarget: 14,
    label: 'Topical Clusters Built',
    context: 'High-intent OTT & streaming SaaS architecture',
  },
  {
    id: 'crawl',
    value: '500+',
    numericTarget: 500,
    suffix: '+',
    label: 'Crawl Errors Resolved',
    context: 'Through Screaming Frog & Search Console audits',
  },
  {
    id: 'backlinks',
    value: '100+',
    numericTarget: 100,
    suffix: '+',
    label: 'High-Authority Backlinks',
    context: 'Secured through targeted Digital PR & outreach',
  },
  {
    id: 'gaps',
    value: '20+',
    numericTarget: 20,
    suffix: '+',
    label: 'Cluster Gaps Identified',
    context: 'AI-driven content gap analysis & SERP alignment',
  },
];

export const HOW_I_THINK_STEPS = [
  {
    step: '01',
    title: 'Understand the business',
    desc: 'Map product monetization, ICP, buyer journey stages, and commercial unit economics before touching a single keyword.',
  },
  {
    step: '02',
    title: 'Understand search intent',
    desc: 'Analyze SERP anatomy to uncover true user problem-state (informational, transactional, investigative) to prevent keyword cannibalization.',
  },
  {
    step: '03',
    title: 'Find technical & content gaps',
    desc: 'Conduct architectural audits (render paths, Core Web Vitals, indexing bottlenecks) alongside systematic topical coverage audits.',
  },
  {
    step: '04',
    title: 'Use AI to accelerate research & execution',
    desc: 'Deploy AI models for high-velocity semantic clustering, competitor entity extraction, content brief generation, and automated QA.',
  },
  {
    step: '05',
    title: 'Build scalable systems',
    desc: 'Institutionalize repeatable workflows: automated decay checks, schema templating, internal linking matrices, and content production SOPs.',
  },
  {
    step: '06',
    title: 'Measure business impact',
    desc: 'Track beyond vanity impressions — connect organic visibility directly to qualified pipeline, CTR lifts, and revenue impact.',
  },
];

export const AI_SEO_WORKFLOW_STAGES = [
  {
    stage: 'DATA INGESTION',
    sources: ['Google Search Console', 'GA4', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
    role: 'Raw query logs, impressions, crawl depth, and competitor backlink profiles ingested.',
  },
  {
    stage: 'AI ANALYSIS ENGINE',
    sources: ['Keyword Clustering', 'Content Gap Analysis', 'Intent Classification', 'Competitor Entity Mapping'],
    role: 'AI accelerates synthesis, spotting semantic gaps across 20+ feature verticals without manual fatigue.',
  },
  {
    stage: 'SEO STRATEGY & EXECUTION',
    sources: ['Topical Clusters', 'Core Web Vitals Fixes', 'Structured Data', 'Internal Linking Graph'],
    role: 'Engineered actions prioritizing highest ROI technical tickets and scalable content briefs.',
  },
  {
    stage: 'MEASUREMENT & ITERATION',
    sources: ['Rankings Lift', 'Indexation Health', 'Organic Pipeline', 'Cluster Authority'],
    role: 'Verified closed-loop tracking feeding real-world SERP behavioral feedback back into data ingestion.',
  },
];

export const AI_CARDS: AICardItem[] = [
  {
    id: 'keyword-research',
    title: 'AI-Powered Keyword Research',
    shortDesc: 'Semantic grouping and intent classification across massive query volumes.',
    iconName: 'Search',
    workflowStep: 'Research Acceleration',
    practicalApplication: 'Group thousands of long-tail queries into topical entities in minutes rather than weeks.',
  },
  {
    id: 'content-gap',
    title: 'AI Content Gap Analysis',
    shortDesc: 'Systematic comparison of domain topical coverage vs top ranking competitors.',
    iconName: 'GitCompare',
    workflowStep: 'Gap Identification',
    practicalApplication: 'Identified and filled 20 critical cluster gaps at Muvi to capture missing buyer intent.',
  },
  {
    id: 'topical-clusters',
    title: 'Topical Cluster Development',
    shortDesc: 'Architecting authoritative pillar and cluster hubs that search engines trust.',
    iconName: 'Network',
    workflowStep: 'Information Architecture',
    practicalApplication: 'Engineered 14 comprehensive clusters around live streaming, VOD, and DRM.',
  },
  {
    id: 'seo-automation',
    title: 'SEO Automation',
    shortDesc: 'Automating repetitive data aggregation, meta schema generation, and indexing audits.',
    iconName: 'Cpu',
    workflowStep: 'Operational Efficiency',
    practicalApplication: 'Reduced manual technical maintenance overhead while speeding up developer handoffs.',
  },
  {
    id: 'competitive-analysis',
    title: 'Competitive Analysis',
    shortDesc: 'Deconstructing competitor SERP wins, technical configurations, and link velocities.',
    iconName: 'TrendingUp',
    workflowStep: 'Market Intelligence',
    practicalApplication: 'Continuous reverse-engineering of category leaders to seize high-intent opportunities.',
  },
  {
    id: 'content-optimization',
    title: 'Content Optimization',
    shortDesc: 'On-page entity enrichment, heading hierarchy alignment, and search intent precision.',
    iconName: 'Sparkles',
    workflowStep: 'Asset Upgrades',
    practicalApplication: 'Revamped 50+ landing pages to double non-branded search acquisition.',
  },
  {
    id: 'seo-data-analysis',
    title: 'SEO Data Analysis',
    shortDesc: 'Mining Search Console and GA4 logs for indexing friction and CTR anomalies.',
    iconName: 'BarChart3',
    workflowStep: 'Diagnostic Intelligence',
    practicalApplication: 'Identified crawl depth patterns and indexation bottlenecks across enterprise URLs.',
  },
  {
    id: 'ai-seo-assistant',
    title: 'AI as SEO Assistant',
    shortDesc: 'Using targeted AI models as co-pilots for drafting briefs, regex, and schema markup.',
    iconName: 'Bot',
    workflowStep: 'Workflow Amplification',
    practicalApplication: 'Certified in LinkedIn Learning’s "Using AI as Your SEO Assistant" to scale team velocity.',
  },
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: 'technical-seo',
    title: 'TECHNICAL SEO',
    badge: 'Core Infrastructure',
    description: 'Engineering site architecture and crawl efficiency so search bots index priority assets frictionlessly.',
    items: [
      'Core Web Vitals',
      'Structured Data / Schema Markup',
      'JavaScript SEO',
      'Crawl Optimization',
      'Site Architecture',
      'Indexation Management',
      'Technical Audits',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    badge: 'Modern Force Multiplier',
    description: 'Scaling research, content pipelines, and repetitive technical verification through intelligent workflows.',
    items: [
      'AI for SEO workflows',
      'AI-powered content production',
      'Using AI as SEO Assistant',
      'Content Gap Analysis',
      'Competitive Gap Analysis',
      'SEO Automation',
      'Topical Authority Building',
    ],
  },
  {
    id: 'onpage-content',
    title: 'ON-PAGE & CONTENT',
    badge: 'Topical Dominance',
    description: 'Building topical clusters and high-intent landing pages that satisfy user queries and demonstrate E-E-A-T.',
    items: [
      'Keyword Clustering',
      'Search Intent Mapping',
      'Topical Clusters',
      'E-E-A-T Strategy',
      'Content Audits',
      'Topic Mapping',
      'Content Optimization',
    ],
  },
  {
    id: 'data-analytics',
    title: 'DATA & ANALYTICS',
    badge: 'Quantified Impact',
    description: 'Connecting technical diagnostics directly to stakeholder KPIs and quantifiable business growth.',
    items: [
      'Google Analytics 4',
      'Google Search Console',
      'Ahrefs',
      'SEMrush',
      'Screaming Frog',
      'SEO KPI Tracking',
      'SEO ROI Tracking',
    ],
  },
  {
    id: 'offpage-local',
    title: 'OFF-PAGE & LOCAL',
    badge: 'Authority & Footprint',
    description: 'Securing editorial backlinks, enhancing brand equity, and maximizing local search visibility.',
    items: [
      'Link Building',
      'Digital PR',
      'Local SEO Optimization',
      'GMB Optimization',
      'Authority Building',
    ],
  },
];

export const IMPACT_HIGHLIGHTS = {
  company: 'MUVI.COM',
  companyContext: 'Enterprise OTT SaaS Streaming Platform (190+ Global Markets)',
  stats: [
    { label: 'Organic Traffic Growth', value: '+20%', note: 'Overall platform organic lift' },
    { label: 'Topical Clusters Managed', value: '14', note: 'Core OTT themes (VOD, Live, DRM)' },
    { label: 'Crawl/Indexing Issues Resolved', value: '50+', note: 'Technical health & schema fixes' },
    { label: 'Cluster Gaps Identified & Filled', value: '20', note: 'AI-driven content gap analysis' },
    { label: 'Priority Keyword Lift', value: '10 pos', note: 'Average improvement across top terms' },
    { label: 'Content Production Scaled', value: '15/mo', note: 'Articles/mo via AI SEO workflows' },
  ],
  beforeAfterComparison: [
    {
      metric: 'ORGANIC TRAFFIC',
      before: 'Baseline Traffic',
      after: 'Grew by +20%',
      state: 'Improved',
      description: 'Drove end-to-end OTT SaaS SEO strategy across 190+ global markets.',
    },
    {
      metric: 'KEYWORD POSITION',
      before: 'Lagging SERP Rankings',
      after: '+10 Positions Lift',
      state: 'Improved',
      description: 'Average position leap across priority commercial keywords.',
    },
    {
      metric: 'CONTENT SCALE',
      before: 'Manual Production Pace',
      after: '+15 Articles / Month',
      state: 'Scaled',
      description: 'Leveraged AI SEO tools and automation to accelerate 20+ feature coverage.',
    },
    {
      metric: 'TECHNICAL HEALTH',
      before: 'Crawl & Schema Friction',
      after: '50+ Issues Resolved',
      state: 'Resolved',
      description: 'Eliminated indexation blockers, integrated structured data and Core Web Vitals fixes.',
    },
  ],
};

export const DASHBOARD_TABS: ImpactDashboardTab[] = [
  {
    id: 'traffic',
    title: 'Organic Traffic',
    icon: 'TrendingUp',
    metrics: [
      {
        label: 'Muvi.com Organic Growth',
        value: '+20%',
        changeLabel: 'Measured across 190+ countries',
        subtext: 'End-to-end enterprise OTT SaaS strategy',
      },
      {
        label: 'Tractor Junction Growth',
        value: '+30%',
        changeLabel: 'Achieved in 4 months',
        subtext: 'High-traffic vehicle listing & category pages',
      },
      {
        label: 'ActivBuzz Non-Branded Organic',
        value: '2x',
        changeLabel: 'Doubled non-branded volume',
        subtext: 'Revamped 50+ landing pages with intent mapping',
      },
    ],
    details: [
      'Comprehensive search intent mapping aligning buyer stages to product capabilities',
      'Accelerated indexation velocity for newly released OTT features and categories',
      'Continuous monthly performance reporting to executive stakeholders in GA4 & GSC',
    ],
  },
  {
    id: 'rankings',
    title: 'Keyword Rankings',
    icon: 'Target',
    metrics: [
      {
        label: 'Muvi Priority Terms',
        value: '+10 Pos',
        changeLabel: 'Average rank leap',
        subtext: 'High-intent commercial terms across global SERPs',
      },
      {
        label: 'W3Era Client Accounts',
        value: '+20+ Pos',
        changeLabel: 'Average improvement',
        subtext: 'Across 6+ B2B and B2C client websites',
      },
      {
        label: 'Local Search Impressions',
        value: '+35%',
        changeLabel: 'Impression expansion',
        subtext: 'Optimized Google My Business listings for local clients',
      },
    ],
    details: [
      'Engineered structured data schemas ensuring rich snippet eligibility on commercial pages',
      'Optimized on-page heading structure and semantic entity relevance',
      'Protected priority keywords from internal cannibalization across product lines',
    ],
  },
  {
    id: 'technical',
    title: 'Technical SEO Health',
    icon: 'ShieldCheck',
    metrics: [
      {
        label: 'W3Era Crawl Errors Fixed',
        value: '500+',
        changeLabel: 'Resolved via GSC & Screaming Frog',
        subtext: 'Directly restored indexation for orphan pages',
      },
      {
        label: 'Muvi.com Issues Solved',
        value: '50+',
        changeLabel: 'Crawl & indexing fixes',
        subtext: 'Strengthened SERP presence in competitive streaming category',
      },
      {
        label: 'Tractor Junction Errors',
        value: '40%+',
        changeLabel: 'Crawl/indexing issues eliminated',
        subtext: 'Optimized Core Web Vitals across critical truck listings',
      },
    ],
    details: [
      'Comprehensive audits in Screaming Frog identifying redirect chains and soft 404s',
      'Collaborated closely with software engineers to resolve render-blocking scripts',
      'Restructured site URLs and eliminated 200+ broken links at ActivBuzz',
    ],
  },
  {
    id: 'content',
    title: 'Topical Authority & Content',
    icon: 'Layers',
    metrics: [
      {
        label: 'Topical Clusters Managed',
        value: '14',
        changeLabel: 'Core OTT thematic clusters',
        subtext: 'Live streaming, VOD, white-label, monetization & DRM',
      },
      {
        label: 'Cluster Gaps Identified',
        value: '20',
        changeLabel: 'Gaps filled via AI workflows',
        subtext: 'Covered missing intent queries across blog & landing pages',
      },
      {
        label: 'ActivBuzz Landing Pages',
        value: '50+',
        changeLabel: 'Revamped with UX insights',
        subtext: 'Cut bounce rate by 18% through improved internal linking',
      },
    ],
    details: [
      'Built authoritative topic maps preventing fragmented thin content',
      'Structured logical internal linking hierarchies to route page equity to conversion hubs',
      'Conducted ongoing content decay audits to refresh decaying evergreen posts',
    ],
  },
  {
    id: 'ai',
    title: 'AI Workflows & Automation',
    icon: 'Zap',
    metrics: [
      {
        label: 'Content Production Velocity',
        value: '+15/mo',
        changeLabel: 'Articles scaled with AI workflows',
        subtext: 'Accelerating coverage for 20+ feature OTT product suite',
      },
      {
        label: 'Cluster Gap Acceleration',
        value: '20 Gaps',
        changeLabel: 'Discovered via semantic AI audit',
        subtext: 'Surfaced competitive keywords missed in standard searches',
      },
      {
        label: 'Workflow Methodology',
        value: 'Systemic',
        changeLabel: 'AI as force multiplier',
        subtext: 'Augmenting human expertise without compromising quality',
      },
    ],
    details: [
      'Integrated AI for entity analysis, competitor outline extraction, and initial draft curation',
      'Implemented rigorous human-in-the-loop review to guarantee technical correctness & E-E-A-T',
      'Trained cross-functional content team on prompt frameworks and semantic entity optimization',
    ],
  },
];

export const WORK_EXPERIENCE: ExperienceRole[] = [
  {
    id: 'muvi',
    role: 'Senior AI & SEO Analyst',
    company: 'Muvi.com',
    companyContext: 'Enterprise OTT Streaming Platform (Full-time | Virginia, United States · Remote)',
    location: 'Remote',
    period: '09/2025 – Present',
    isCurrent: true,
    type: 'Full-time · Remote',
    highlights: [
      'Drove end-to-end OTT SaaS SEO strategy for Muvi.com — boosting organic traffic by 20% and improving keyword rankings for 10 high-intent terms across 190+ global markets.',
      'Built and managed 14 topical clusters around core OTT themes — live streaming, VOD, white-label platforms, video monetization, and DRM — establishing Muvi as a topical authority in the streaming SaaS space.',
      'Leveraged AI SEO tools and automation to help team scale content production by 15 articles/month, accelerating keyword research and competitive gap analysis for a 20+ feature OTT SaaS product.',
      'Conducted technical SEO audits and resolved 50+ crawl/indexing issues; implemented structured data and Core Web Vitals fixes to strengthen SERP presence in a highly competitive SaaS category.',
      'Collaborated cross-functionally with content, product marketing, and growth teams to align AI-driven SEO strategy with go-to-market goals across Muvi One, Muvi Live, and Muvi Flex.',
      'Used AI-driven content gap analysis to identify and fill 20 cluster gaps — optimizing existing blog and landing page assets, improving rankings for priority keywords by 10 positions on average.',
      'Tracked and reported on organic traffic growth, keyword rankings, and SEO pipeline using Google Search Console, SEMrush/Ahrefs, and GA4 — presenting insights to the stakeholders monthly.',
    ],
    metrics: [
      { label: 'Organic Traffic', value: '+20%' },
      { label: 'Topical Clusters', value: '14' },
      { label: 'Crawl Issues Fixed', value: '50+' },
      { label: 'Content Scaling', value: '+15 articles/mo' },
    ],
  },
  {
    id: 'tractor-junction',
    role: 'Senior SEO Executive',
    company: 'Tractor Junction',
    companyContext: 'Rural Commerce & Automotive Marketplace Portal',
    location: 'Alwar, India · On-site',
    period: '05/2024 – 08/2025',
    type: 'Full-time · On-site',
    highlights: [
      'Led enterprise SEO roadmap for high-traffic truck listings, brand, and category pages — increased organic traffic by 30% in 4 months through structured audits, technical fixes, and schema implementation.',
      'Resolved 40%+ of crawl and indexing issues; optimized Core Web Vitals across key commercial pages.',
      'Collaborated with developers and content strategists to integrate structured data and secure rich results in SERPs.',
      'Developed SEO dashboards to present ROI-driven insights, directly influencing product and content roadmap decisions.',
    ],
    metrics: [
      { label: 'Traffic Lift', value: '+30% in 4 mo' },
      { label: 'Crawl Errors', value: '-40%+' },
    ],
  },
  {
    id: 'w3era',
    role: 'Senior SEO Executive',
    company: 'W3Era Web Technology Pvt Ltd',
    companyContext: 'Digital Growth & Technology Agency',
    location: 'Jaipur, Rajasthan · On-site',
    period: '12/2023 – 04/2024',
    type: 'Full-time · On-site',
    highlights: [
      'Spearheaded SEO campaigns across 6+ B2B/B2C websites, boosting average keyword rankings by 20+ positions.',
      'Fixed 500+ crawl errors using GSC and Screaming Frog, significantly improving site health and indexation rates.',
      'Secured 100+ high-authority backlinks through targeted outreach campaigns, enhancing domain authority and brand equity.',
      'Optimized GMB listings for local clients, resulting in a 35% increase in local search impressions.',
      'Delivered SEO performance reports and keyword insights directly to stakeholders across multiple accounts.',
    ],
    metrics: [
      { label: 'Crawl Errors Fixed', value: '500+' },
      { label: 'Backlinks Secured', value: '100+' },
      { label: 'Local Impressions', value: '+35%' },
    ],
  },
  {
    id: 'activbuzz',
    role: 'SEO Executive',
    company: 'ActivBuzz Pvt. Ltd.',
    companyContext: 'Digital Marketing & Content Consultancy',
    location: 'Pune, Maharashtra · Remote',
    period: '05/2021 – 12/2023',
    type: 'Full-time · Remote',
    highlights: [
      'Revamped 50+ landing pages using keyword clustering and UX insights — doubled non-branded organic traffic.',
      'Improved internal linking structure and crawl depth — reduced bounce rate by 18% and increased indexation coverage.',
      'Identified and resolved 200+ broken links; restructured site URLs to boost overall crawlability.',
      'Supported content audit and topic mapping initiatives for long-tail keyword expansion across key verticals.',
      'Standardized SEO protocols across all content and development workflows for consistent execution.',
    ],
    metrics: [
      { label: 'Non-Branded Traffic', value: '2x (Doubled)' },
      { label: 'Bounce Rate', value: '-18%' },
      { label: 'Broken Links', value: '200+ Fixed' },
    ],
  },
];

export const EARLY_CAREER_ROLES: EarlyCareerRole[] = [
  {
    role: 'Executive – New Product Quality',
    company: 'Ashok Leyland Ltd. (3rd Party)',
    location: 'Alwar, Rajasthan · On-site',
    period: '05/2019 – 04/2020',
    summary: 'Applied root-cause analysis and defect categorization on automotive component lines.',
    highlights: [
      'Collaborated with cross-functional teams to review and sign off on new products, highlighting issues in design, manufacturing, and component quality.',
      'Identified and communicated process and product improvement opportunities, ensuring timely resolution based on priority.',
      'Categorized and classified product issues to streamline troubleshooting and continuous improvement.',
    ],
  },
  {
    role: 'Assistant Quality Manager',
    company: 'A.L. Paper House',
    location: 'Jaipur, Rajasthan · On-site',
    period: '10/2018 – 03/2019',
    summary: 'Led comprehensive internal audits and procedural standards enforcement.',
    highlights: [
      'Defined, documented, and implemented robust quality processes, procedures, and control measures to uphold production standards.',
      'Led comprehensive internal and external audits — evaluating manufacturing processes, customer compliance, and supplier performance.',
    ],
  },
  {
    role: 'Executive – Manufacturing Quality',
    company: 'Ashok Leyland Ltd. (3rd Party)',
    location: 'Alwar, Rajasthan · On-site',
    period: '06/2017 – 07/2018',
    summary: 'Mapped quality verification protocols and monitored systemic tolerances.',
    highlights: [
      'Defined, mapped, and enforced robust quality procedures, ensuring consistency and efficiency across production lines.',
      'Led internal and external audits, overseeing inspections of manufacturing operations and supplier performance.',
    ],
  },
  {
    role: 'Summer Intern – Engine Assembly & Manufacturing',
    company: 'Honda Cars India Ltd.',
    location: 'Tapukara, Rajasthan',
    period: '06/2015 – 07/2015',
    summary: 'Time-study optimizations and lean manufacturing frameworks (5S & Kaizen).',
    highlights: [
      'Optimized process flow in petrol engine assembly, improving efficiency and station-wise task distribution.',
      'Conducted time studies, documented cycle times, and reallocated tasks to prevent overload.',
      'Gained hands-on experience in lean manufacturing: 5S, Kaizen, risk assessment, and systemic decision-making frameworks.',
    ],
  },
];

export const APPROACH_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Business & Search Landscape Mapping',
    description:
      'Understand business goals, monetization channels, audience personas, target markets, and competitive search landscape before setting tactical roadmaps.',
  },
  {
    number: '02',
    title: 'DIAGNOSE',
    tagline: 'Multi-Vector Technical & Content Auditing',
    description:
      'Audit technical SEO (render barriers, Core Web Vitals, indexation hygiene), existing content decay, competitor gaps, and search intent alignment.',
  },
  {
    number: '03',
    title: 'STRATEGIZE',
    tagline: 'Topical Maps & Architecture Blueprinting',
    description:
      'Build keyword clusters, authoritative topic maps, content priorities, structured data schemas, and prioritized technical engineering tickets.',
  },
  {
    number: '04',
    title: 'ACCELERATE',
    tagline: 'AI & Workflow Automation Execution',
    description:
      'Use AI and custom automation to speed up research, outline drafting, repetitive metadata templating, and competitive intelligence extraction.',
  },
  {
    number: '05',
    title: 'MEASURE',
    tagline: 'Closed-Loop Impact & Revenue Attribution',
    description:
      'Track keyword rankings, indexation rates, organic pipeline growth, CTR performance in Search Console, and actual business ROI.',
  },
];

export const TOOLS_LIST = [
  {
    name: 'Google Search Console',
    category: 'Search Performance & Indexing',
    role: 'Crawl error discovery, query log mining, CTR tracking, and indexation status validation.',
    iconType: 'gsc',
  },
  {
    name: 'Google Analytics 4',
    category: 'Traffic & Conversion Analytics',
    role: 'User journey tracking, engagement rates, organic pipeline attribution, and event telemetry.',
    iconType: 'ga4',
  },
  {
    name: 'Ahrefs',
    category: 'Backlink & Keyword Intelligence',
    role: 'Domain authority analysis, competitor backlink gap discovery, and SERP keyword movements.',
    iconType: 'ahrefs',
  },
  {
    name: 'SEMrush',
    category: 'Market & Competitive Research',
    role: 'Competitive position mapping, keyword clustering validation, and organic search volume tracking.',
    iconType: 'semrush',
  },
  {
    name: 'Screaming Frog',
    category: 'Deep Technical Crawling',
    role: 'Enterprise site audits, canonical verification, redirect loops, and schema markup validation.',
    iconType: 'screamingfrog',
  },
  {
    name: 'Google Business Profile',
    category: 'Local Search Optimization',
    role: 'GMB optimization, local intent visibility, and map pack impression amplification (+35% lift).',
    iconType: 'gmb',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Technical SEO',
    issuer: 'LinkedIn Learning',
    credentialType: 'Professional Course Completion',
    verifiedTopics: [
      'Site Architecture & Crawlability',
      'Structured Data / Schema Markup',
      'Indexation & Canonicalization',
      'Core Web Vitals Optimization',
    ],
  },
  {
    name: 'Using AI as Your SEO Assistant',
    issuer: 'LinkedIn Learning',
    credentialType: 'Professional Course Completion',
    verifiedTopics: [
      'AI-Powered Keyword Clustering',
      'Content Gap Analysis with LLMs',
      'Workflow Automation',
      'SERP Intent Synthesis',
    ],
  },
  {
    name: 'Digital Marketing Internship Training',
    issuer: 'Digital Deepak Internship Program',
    period: '08/2020 – 01/2021',
    credentialType: 'Intensive Practical Program',
    verifiedTopics: [
      'Search Engine Marketing Foundations',
      'Content Funnel Design',
      'Conversion Architecture',
      'Analytics & Reporting',
    ],
  },
  {
    name: 'Content Marketing Internship',
    issuer: 'Viral Fission',
    period: '04/2020 – 06/2020',
    credentialType: 'Practicum Internship',
    verifiedTopics: [
      'Content Strategy & Distribution',
      'Audience Engagement',
      'Brand Narrative Building',
    ],
  },
];

export const EDUCATION_INFO = {
  degree: 'Bachelor of Technology (B.Tech.)',
  discipline: 'Mechanical Engineering',
  institution: 'Rajasthan Technical University, Kota',
  period: '08/2012 – 06/2016',
  engineeringNote:
    'Background in Mechanical Engineering and Manufacturing Quality (Lean, 5S, Kaizen, root-cause analysis) translates into a rigorous, systematic, and data-driven approach to technical SEO audits and algorithmic diagnostics.',
};

export const PERSONAL_BRAND_TOPICS = [
  {
    topic: 'AI + SEO',
    desc: 'Harnessing generative AI models as productivity multipliers while preserving human strategic nuance.',
  },
  {
    topic: 'Technical SEO',
    desc: 'Building friction-free crawl topologies, optimal render paths, and pristine structured data markup.',
  },
  {
    topic: 'Search Generative Experience (SGE)',
    desc: 'Monitoring and adapting content architectures for AI Overviews and conversational answer engines.',
  },
  {
    topic: 'AI-Powered Workflows',
    desc: 'Automating high-volume keyword clustering, competitive gap audits, and schema generation.',
  },
  {
    topic: 'Content Systems & Decay Audits',
    desc: 'Systematic refreshing of decaying assets and structuring scalable topical cluster hubs.',
  },
  {
    topic: 'Topical Authority',
    desc: 'Dominating entire industry verticals through comprehensive semantic entity coverage.',
  },
  {
    topic: 'SEO Automation',
    desc: 'Eliminating manual spreadsheets with scripted audit pipelines and programmatic reporting.',
  },
  {
    topic: 'Data-Driven Growth',
    desc: 'Rooting every SEO recommendation in quantifiable search signals and business pipeline metrics.',
  },
];
