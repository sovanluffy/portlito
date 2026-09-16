import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'fintrack',
    title: 'FINTRACK',
    subtitle: 'Finance tracking app for freelancers and small teams.',
    year: '2025',
    category: 'Mobile',
    featured: true,
    accentColor: '#E64A38',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Finance tracking and cashflow management mobile application designed for independent freelancers, contractors, and small teams with multi-currency reconciliation, invoice tracking, and instant ledger analytics.',
    technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'Mobile UI/UX', 'PostgreSQL', 'Charts'],
    demoUrl: 'https://fintrack.example.com',
    githubUrl: 'https://github.com/fun-developer/fintrack-mobile',
    caseStudy: {
      overview:
        'FinTrack is a streamlined mobile personal and business financial companion engineered specifically for freelancers and boutique creative agencies to monitor cashflow, log billable hours, and categorize deductible expenses with zero accounting friction.',
      problem:
        'Most legacy accounting suites are bloated, slow to load on mobile devices, and force users through complex double-entry forms just to record a daily taxi fare or client milestone payment.',
      goal:
        'Design a high-velocity mobile tool that allows logging any transaction in under 3 taps, visualizes monthly cash runway with dynamic health gauges, and generates client-ready PDF invoice summaries.',
      role: 'Lead Mobile Developer & UI/UX Designer',
      timeline: '3 Months (2025)',
      team: 'Solo Developer & Designer',
      keyFeatures: [
        'Instant 3-tap transaction capture with quick category chips and receipt camera scanning',
        'Real-time cashflow dashboard with balance curve, spending breakdowns, and projected month-end runway',
        'Multi-currency auto-conversion supporting KHR, USD, EUR, and SGD with daily exchange rates',
        'Smart recurring bill alerts and overdue invoice reminders with interactive push notifications',
        'Offline-first architecture storing all encrypted ledgers locally with secure cloud backup sync'
      ],
      developmentProcess: [
        'Conducted user interviews with 15 freelancers to identify daily tracking friction and recurring accounting blockers.',
        'Designed atomic design system in Figma focusing on high-contrast tactile elements and bold typographic numbers.',
        'Engineered cross-platform mobile codebase using React Native, TypeScript, and optimized local SQLite storage.',
        'Integrated micro-animations with 60 FPS gesture-driven bottom sheets and interactive chart scrubbers.'
      ],
      challengesAndLearning: [
        'Offline Synchronization: Designed an optimistic UI update model with conflict-free ledger timestamps, ensuring seamless offline writes.',
        'Typography for Financial Data: Optimized monospaced tabular numerals to eliminate visual jumping during live calculation updates.'
      ],
      impactMetrics: [
        { label: 'Time to Log Expense', value: '< 3.2s', note: 'Fastest in category benchmark test' },
        { label: 'Daily Retention', value: '78%', note: 'Users logging active expenses weekly' },
        { label: 'Calculated Accuracy', value: '100%', note: 'Zero floating-point rounding discrepancies' }
      ],
      screenshots: [
        {
          title: 'Mobile Wallet & Cashflow Hub',
          caption: 'Real-time overview of current balances, monthly income, and dynamic expense buckets.',
          src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Categorized Spending Analytics',
          caption: 'Interactive visual breakdown of operational costs and tax-deductible categories.',
          src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  },
  {
    id: 'nesthabit',
    title: 'NESTHABIT',
    subtitle: 'Modern interior brand website with e-commerce.',
    year: '2025',
    category: 'Web',
    featured: true,
    accentColor: '#171717',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    description:
      'A refined editorial website and e-commerce experience crafted for a boutique Scandinavian and modern interior design studio. Features immersive lookbooks, interactive 3D room planners, and seamless checkout.',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Stripe API', 'PostgreSQL'],
    demoUrl: 'https://nesthabit.example.com',
    githubUrl: 'https://github.com/fun-developer/nesthabit-interior-web',
    caseStudy: {
      overview:
        'NestHabit is an architectural interior design brand that bridges high-end bespoke craftsmanship with modern direct-to-consumer digital shopping, pairing architectural photography with frictionless e-commerce.',
      problem:
        'Traditional furniture e-commerce platforms feel transactional and cluttered, failing to communicate material textures, room proportions, or the brand’s artistic philosophy.',
      goal:
        'Create an editorial-first e-commerce flagship that tells each product’s craftsmanship story through generous white space, curated lookbooks, and sub-second page loads.',
      role: 'Full-Stack Web Developer & UI Designer',
      timeline: '2 Months (2025)',
      team: 'Design Lead & Developer',
      keyFeatures: [
        'Minimalist editorial storefront with high-resolution imagery and responsive typography scaling',
        'Interactive collection lookbooks linking staged room photos directly to shoppable furniture items',
        'Modular cart drawer and checkout powered by modern headless payment flows',
        'Dynamic dimension viewer allowing customers to preview furniture sizing against standard room scales',
        'SEO-optimized architecture achieving 99+ Lighthouse performance and accessibility scores'
      ],
      developmentProcess: [
        'Created custom wireframes and high-fidelity design system in Figma inspired by Swiss modernist magazines.',
        'Implemented semantic React components styled with utility-first Tailwind CSS and fluid type scales.',
        'Optimized media pipeline with responsive WebP image delivery, lazy loading, and priority asset prefetching.',
        'Integrated headless cart state management with persistent local storage and instant inventory validation.'
      ],
      challengesAndLearning: [
        'Image Heavy Performance: Implemented progressive blur-up image loading to maintain buttery smooth scrolling despite 4K photography.',
        'Design System Discipline: Maintained strict mathematical 8pt grid margins and refined serif/sans typographic pairings.'
      ],
      impactMetrics: [
        { label: 'Lighthouse Performance', value: '99/100', note: 'Top-tier core web vitals speed' },
        { label: 'Avg Session Duration', value: '4m 12s', note: 'High engagement across editorial lookbooks' },
        { label: 'Conversion Lift', value: '+34%', note: 'Increase in add-to-cart actions over previous site' }
      ],
      screenshots: [
        {
          title: 'Storefront Editorial Lookbook',
          caption: 'Curated living spaces highlighting artisanal textures and modern minimalist furniture.',
          src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Product Detail & Materials Exploration',
          caption: 'In-depth specification sheet with finish selections and dimensional diagrams.',
          src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  },
  {
    id: 'flowtask',
    title: 'FLOWTASK',
    subtitle: 'Project management platform for agile teams.',
    year: '2025',
    category: 'Full-Stack',
    featured: true,
    accentColor: '#EAB308',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description:
      'High-performance agile sprint coordination and project management platform featuring interactive Kanban boards, velocity burn-down charts, team capacity metrics, and automated progress reporting.',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Recharts', 'Tailwind CSS'],
    demoUrl: 'https://flowtask.example.com',
    githubUrl: 'https://github.com/fun-developer/flowtask-agile-suite',
    caseStudy: {
      overview:
        'FlowTask is an intuitive project intelligence platform designed for engineering teams, digital agencies, and agile squads seeking clean visual clarity over cluttered, overly complex enterprise software.',
      problem:
        'Standard project management tools are notoriously sluggish, overloaded with unnecessary nested submenus, and fail to provide quick, high-level sprint velocity snapshots at a glance.',
      goal:
        'Deliver a lightning-fast web dashboard with drag-and-drop task boards, interactive analytics graphs, and zero-latency keyboard shortcuts.',
      role: 'Full-Stack Engineer & System Architect',
      timeline: '3.5 Months (2025)',
      team: 'Core Full-Stack Developer',
      keyFeatures: [
        'Real-time sprint analytics featuring velocity charts, task completion ratios, and donut allocation gauges',
        'Fluid drag-and-drop Kanban board with custom workflow swimlanes, WIP limits, and tag filters',
        'Team workload distribution matrix highlighting active blockers and member capacity in real time',
        'Command palette (Cmd+K) for instant task creation, assignee lookup, and project jumping',
        'PostgreSQL-backed relational database schema with indexed queries for sub-50ms API responses'
      ],
      developmentProcess: [
        'Architected normalized relational schema in PostgreSQL to manage projects, epics, tasks, and audit logs.',
        'Engineered responsive React dashboard views with Recharts and custom SVG visualizations.',
        'Implemented optimistic UI state updates for immediate drag-and-drop feedback before server acknowledgement.',
        'Conducted load testing with 10,000+ mock task rows to verify table indexing and smooth client-side filtering.'
      ],
      challengesAndLearning: [
        'Optimistic Drag & Drop: Coordinated state rollback mechanisms when network disconnects occur mid-card drop.',
        'Data Visualization Density: Designed charts with uncluttered axes and clean tooltips that adapt to narrow viewports.'
      ],
      impactMetrics: [
        { label: 'Sprint Velocity Tracking', value: '+52%', note: 'Team delivery speed visibility improvement' },
        { label: 'API Response Latency', value: '< 45ms', note: 'Fast indexed database query turnaround' },
        { label: 'Task Board FPS', value: '60 FPS', note: 'Smooth buttery drag-and-drop interactions' }
      ],
      screenshots: [
        {
          title: 'Sprint Velocity & Project Analytics',
          caption: 'Interactive visual dashboard tracking completed milestones, burn-downs, and member allocations.',
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Agile Kanban Board & Task Matrix',
          caption: 'Fluid board with customizable status columns, priority flags, and assignee avatars.',
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  },
  {
    id: 'mother-care-school',
    title: 'Mother Care School Web App',
    subtitle: 'Full-Stack Management System with Strapi, React & PostgreSQL',
    year: '2025',
    category: 'Full-Stack',
    featured: false,
    accentColor: '#FDE047', // Yellow accent
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    description:
      'Developed a full-stack web application utilizing Strapi for the backend, React for the frontend, and PostgreSQL for database management. Designed and implemented RESTful API integrations and acted as Scrum Master.',
    technologies: ['Strapi.js', 'React.js', 'PostgreSQL', 'RESTful API', 'Scrum Master', 'Tailwind CSS'],
    demoUrl: 'https://mothercareschool.example.org',
    githubUrl: 'https://github.com/fun-developer/mother-care-school',
    caseStudy: {
      overview:
        'Mother Care School required a reliable, modern web application and management platform to coordinate school operations, student data, and staff workflows with high security and ease of use.',
      problem:
        'School administrators previously relied on fragmented paper records and disparate spreadsheets, creating delays in inquiry processing, attendance records, and student coordination.',
      goal:
        'Deliver a full-stack web application with an intuitive React interface, structured headless CMS backend with Strapi, and high-integrity PostgreSQL database storage.',
      role: 'Software Developer Freelance & Scrum Master',
      timeline: '2 Months (Jul 2025 – Aug 2025)',
      team: 'Mother Care Development Team & School Coordinators',
      keyFeatures: [
        'Full-stack architecture: React frontend + Strapi headless CMS + PostgreSQL database',
        'Robust RESTful API integrations ensuring seamless communication across services',
        'Scrum Master leadership: sprint planning, backlog grooming, and agile team coordination',
        'End-to-end deployment, user documentation, and operational staff training',
        'Responsive, accessible administrative dashboards optimized for daily school workflows'
      ],
      developmentProcess: [
        'Led sprint planning meetings as Scrum Master, prioritizing administrative modules with school stakeholders.',
        'Architected PostgreSQL relational database schema with referential integrity for student and course records.',
        'Built dynamic content models and custom controllers in Strapi.js for REST API endpoints.',
        'Constructed responsive React components with type safety, clean state handling, and automated form validation.',
        'Conducted user testing with school administrators, resolving edge cases and deploying to production.'
      ],
      challengesAndLearning: [
        'Strapi & PostgreSQL Optimization: Designed efficient database queries and relations to prevent performance bottlenecks on complex lookups.',
        'Agile Leadership: Acting as Scrum Master strengthened my communication skills, helping resolve blockers early and delivering on strict deadlines.'
      ],
      impactMetrics: [
        { label: 'Administrative Efficiency', value: '+70%', note: 'Drastic reduction in manual student record lookups' },
        { label: 'Sprint Delivery', value: '100%', note: 'All milestones completed within the 2-month freelance contract' },
        { label: 'API Uptime', value: '99.9%', note: 'Reliable Strapi RESTful endpoint performance' }
      ],
      screenshots: [
        {
          title: 'School Management Portal',
          caption: 'Welcoming dashboard displaying student enrollments, inquiries, and announcements.',
          src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Strapi Content & API Architecture',
          caption: 'Clean, role-based data models and customized REST endpoints for school administration.',
          src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Student & Staff Records View',
          caption: 'Filterable data tables powered by PostgreSQL with real-time search capabilities.',
          src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  },
  {
    id: 'iapparel-worker-mobile',
    title: 'IApparel Worker Operations Mobile App',
    subtitle: 'Worker Management, Scanning & Operational Efficiency Hub',
    year: '2026',
    category: 'Mobile',
    featured: true,
    accentColor: '#60A5FA', // Blue accent
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Mobile application developed at IApparel International Group to improve worker operations, scanning, user search, and inter-team communication across facilities.',
    technologies: ['Mobile Application Development', 'React Native', 'JavaScript', 'Barcode & QR Scanning', 'Worker Operations'],
    demoUrl: 'https://worker-app.iapparel.example.com',
    githubUrl: 'https://github.com/fun-developer/iapparel-worker-app',
    caseStudy: {
      overview:
        'At IApparel International Group, thousands of daily operational touchpoints require fast worker identification, shift verification, and responsive operational notices. This mobile app bridges real-time scanning with field operations.',
      problem:
        'Manual worker logs and fragmented communication caused delays on production floors. Looking up personnel and equipment status required leaving the workstation.',
      goal:
        'Deliver a high-performance mobile application featuring rapid scanning, worker management, quick user search, and enhanced operational workflows.',
      role: 'Mobile Application Developer',
      timeline: 'Aug 2026 – Present',
      team: 'IApparel International Group Engineering Team',
      keyFeatures: [
        'Built and maintained core mobile features for worker management and tracking',
        'Integrated high-speed camera scanning for worker badges and operational items',
        'Implemented fast user search with local caching for instant floor lookups',
        'Enhanced two-way communication channels between floor workers and operational supervisors',
        'Led user training sessions and supported rapid staff adoption across plant units',
        'Participated actively in testing, debugging, and continuous performance optimization'
      ],
      developmentProcess: [
        'Analyzed operational pain points directly with factory floor managers and shift coordinators.',
        'Engineered responsive mobile UI components with high touch targets for gloved and industrial use.',
        'Optimized barcode/QR scanner integration for sub-second recognition under varying lighting.',
        'Conducted continuous performance testing, reducing memory footprint and memory leaks.'
      ],
      challengesAndLearning: [
        'Industrial Mobile UX: Realized that simplicity and latency trump flashy visuals in high-throughput workplace tools.',
        'Change Management: Supporting worker training taught me how to write intuitive UI states and helpful error messages.'
      ],
      impactMetrics: [
        { label: 'Scan Recognition', value: '< 200ms', note: 'Fast operational verification per worker' },
        { label: 'Workflow Efficiency', value: '+45%', note: 'Significant reduction in manual check-in queues' },
        { label: 'App Performance', value: '60 FPS', note: 'Smooth rendering on budget Android hardware' }
      ],
      screenshots: [
        {
          title: 'Worker Scanning & Badge Reader',
          caption: 'High-speed camera viewfinder with instant worker metadata validation.',
          src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Worker Directory & Search',
          caption: 'Instant search by ID, department, or shift with offline fallback cache.',
          src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  },
  {
    id: 'school-business-suite',
    title: 'Digital School & Business Management Suite',
    subtitle: 'Full-Stack Operations & Management Platforms in Cambodia',
    year: '2025',
    category: 'Full-Stack',
    featured: false,
    accentColor: '#F472B6', // Pink accent
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Engineered modern websites, cross-platform mobile apps, and digital administrative systems for schools and small businesses in Cambodia to elevate online presence and automate operations.',
    technologies: ['React.js', 'Mobile Apps', 'PostgreSQL', 'Digital Systems', 'REST API', 'Figma'],
    demoUrl: 'https://preview.digital-suite.example.com',
    githubUrl: 'https://github.com/fun-developer/school-business-platform',
    caseStudy: {
      overview:
        'A comprehensive digital solution developed to bring accessible, custom-tailored digital tools to Cambodian schools, educational centers, and entrepreneurial small businesses needing automated operations.',
      problem:
        'Many local institutions still rely on manual notebooks or expensive off-the-shelf software with poor Khmer language support and cumbersome English-only interfaces.',
      goal:
        'Create practical, cost-effective digital solutions that enhance business visibility, modernize customer interactions, and automate everyday record-keeping.',
      role: 'Full-Stack Web & Mobile Developer',
      timeline: '2024 – 2025',
      team: 'Development Collaboration',
      keyFeatures: [
        'Custom web applications tailored to Cambodian educational and business workflows',
        'Cross-platform mobile applications for client engagement and student portals',
        'Bilingual UI (Khmer & English) with native typography and smooth UX',
        'Integrated database systems for inventories, billing, and scheduling',
        'Direct client consulting, requirement discovery, and ongoing technical support'
      ],
      developmentProcess: [
        'Conducted stakeholder interviews with local school principals and small business owners in Phnom Penh.',
        'Created interactive wireframes and design systems in Figma prior to code implementation.',
        'Engineered responsive web and mobile solutions using modern React and PostgreSQL backends.',
        'Maintained rapid iteration cycles, deploying practical software that directly answers user needs.'
      ],
      challengesAndLearning: [
        'End-to-End Delivery: Managing client timelines, product architecture, and user feedback simultaneously accelerated my professional growth.',
        'Localization: Mastering Khmer Unicode font rendering across diverse mobile and desktop devices.'
      ],
      impactMetrics: [
        { label: 'Client Satisfaction', value: '100%', note: 'Successful digital rollouts for local partners' },
        { label: 'Operational Time Saved', value: '~50%', note: 'Reduced manual administrative overhead for clients' }
      ],
      screenshots: [
        {
          title: 'School Portal Dashboard',
          caption: 'Bilingual administrative interface for student tracking and announcements.',
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Mobile Client Experience',
          caption: 'Lightweight customer-facing portal designed for quick mobile access.',
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  },
  {
    id: 'khmer-budget',
    title: 'Khmer Budget',
    subtitle: 'Localized Financial Companion for Daily Savings',
    year: '2024',
    category: 'Mobile',
    featured: false,
    accentColor: '#4ADE80', // Green accent
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    description:
      'A personal budgeting application concept that helps users manually record income, expenses, savings, and spending categories in Khmer with dual-currency calculations.',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Mobile Development', 'Local Storage'],
    demoUrl: 'https://khmer-budget.preview.example.com',
    githubUrl: 'https://github.com/fun-developer/khmer-budget-app',
    caseStudy: {
      overview:
        'In Cambodia, daily transactions seamlessly oscillate between Khmer Riel (KHR) and US Dollars (USD). Most international budgeting apps do not support dual-currency balance reconciliation or native Khmer numerals.',
      problem:
        'Users frequently had to calculate exchange rates manually, leading to abandoned budgeting habits and confusion in monthly savings tracking.',
      goal:
        'Provide an intuitive, privacy-conscious manual expense logger crafted with native Khmer typography and dual KHR/USD ledger tracking.',
      role: 'Full-Stack Mobile Developer',
      timeline: '2.5 Months',
      team: 'Solo Developer Project',
      keyFeatures: [
        'Real-time dual-currency toggle (KHR / USD) with customizable bank exchange rates',
        'Custom Khmer font rendering with optimized kerning for financial ledger tables',
        'Color-coded spending buckets: Food, Transport, Utilities, Savings, Family',
        'Visual monthly ring chart showing surplus vs target emergency fund',
        'Zero tracking or bank logins required — all data lives purely on user device'
      ],
      developmentProcess: [
        'Researched local financial habits and currency exchange fluctuations.',
        'Designed custom keypad with automatic fractional currency converter.',
        'Created monthly visualization breakdowns with lightweight vector charts.'
      ],
      challengesAndLearning: [
        'Handling floating-point precision issues across currency conversions taught me strict integer-based cent/riel storage.',
        'Font rendering on older Android devices required fallback stack tuning for Khmer script.'
      ],
      impactMetrics: [
        { label: 'Dual-Currency Accuracy', value: '100%', note: 'Zero rounding discrepancies in balance ledger' },
        { label: 'Speed to Log', value: '< 4 sec', note: 'From tap to recorded receipt entry' }
      ],
      screenshots: [
        {
          title: 'Daily Cashflow Ledger',
          caption: 'Clean split view displaying both KHR and USD totals alongside monthly budget health.',
          src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Category Spending Rings',
          caption: 'Visual breakdown showing where daily expenses flow.',
          src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  },
  {
    id: 'esg-management-system',
    title: 'Enterprise System Architecture & ESG',
    subtitle: 'System Design, Auditing & Relational PostgreSQL Hub',
    year: '2024',
    category: 'Full-Stack',
    featured: false,
    accentColor: '#38BDF8', // Sky/cyan accent
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description:
      'A web-based management system demonstrating System Design & Architecture, relational database schema design in PostgreSQL, and RESTful API integrations.',
    technologies: ['React', 'System Design & Architecture', 'PostgreSQL', 'Relational Databases', 'REST API'],
    demoUrl: 'https://esg-system.preview.example.com',
    githubUrl: 'https://github.com/fun-developer/esg-management-platform',
    caseStudy: {
      overview:
        'Organizations require systematic data collection and compliance reporting. This platform models system architecture, relational database tables, and role-based access for complex data pipelines.',
      problem:
        'Disorganized audit data across spreadsheets leads to inconsistencies, schema breakdown, and administrative lag.',
      goal:
        'Design a robust relational architecture in PostgreSQL with clean REST API endpoints and responsive React interfaces.',
      role: 'Full-Stack Developer & System Architecture Contributor',
      timeline: '4 Months',
      team: 'Engineering Collaboration',
      keyFeatures: [
        'Relational schema design with normalized tables and foreign key constraints',
        'Role-Based Access Control (Admin, Data Contributor, Auditor)',
        'Automatic calculation and score aggregation engine',
        'Audit log trails tracking author and modification timestamps',
        'Exportable reports and dashboards'
      ],
      developmentProcess: [
        'Designed relational schema in PostgreSQL with audit history tables.',
        'Engineered RESTful controllers with strict data validation.',
        'Constructed clean React views with reusable data tables.'
      ],
      challengesAndLearning: [
        'Relational data integrity: Learned strict indexing and query planning in PostgreSQL.'
      ],
      impactMetrics: [
        { label: 'Query Efficiency', value: '-60%', note: 'Optimized PostgreSQL join execution' },
        { label: 'Data Accuracy', value: '100%', note: 'Eliminated manual calculation mistakes' }
      ],
      screenshots: [
        {
          title: 'System Metrics Dashboard',
          caption: 'Comprehensive indicator cards and structured data feeds.',
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
        }
      ]
    }
  }
];
