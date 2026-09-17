import { SkillItem, InterestItem, TagItem } from '../types';

// Devicon CDN base — works without installing anything.
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const SKILLS: SkillItem[] = [
  // Frontend & UI/UX
  {
    name: 'React.js',
    category: 'Frontend',
    color: '#FDE047',
    highlight: true,
    level: 'Primary Focus',
    logo: `${DEVICON}/react/react-original.svg`,
    brandColor: '#61DAFB',
    proficiency: 95
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    color: '#C7F0D8',
    highlight: false,
    level: 'Progressive Framework',
    logo: `${DEVICON}/vuejs/vuejs-original.svg`,
    brandColor: '#4FC08D',
    proficiency: 78
  },
  {
    name: 'UI/UX Design (Figma)',
    category: 'Frontend',
    color: '#F472B6',
    highlight: true,
    level: 'Wireframes & Prototyping',
    logo: `${DEVICON}/figma/figma-original.svg`,
    brandColor: '#F24E1E',
    proficiency: 92
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    color: '#BFDBFE',
    highlight: true,
    level: 'Type Safety',
    logo: `${DEVICON}/typescript/typescript-original.svg`,
    brandColor: '#3178C6',
    proficiency: 93
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    color: '#FEF08A',
    highlight: true,
    level: 'Core ES6+',
    logo: `${DEVICON}/javascript/javascript-original.svg`,
    brandColor: '#F7DF1E',
    proficiency: 96
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    color: '#BBF7D0',
    highlight: false,
    level: 'Modern Design Systems',
    logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
    brandColor: '#38BDF8',
    proficiency: 85
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    color: '#FBCFE8',
    highlight: false,
    level: 'SSR & Jamstack',
    logo: `${DEVICON}/nextjs/nextjs-original.svg`,
    brandColor: '#000000',
    invertOnDark: true,
    proficiency: 80
  },

  // Backend & Architecture
  {
    name: 'Strapi.js',
    category: 'Backend',
    color: '#E9D5FF',
    highlight: true,
    level: 'Headless CMS & APIs',
    logo: `${DEVICON}/strapi/strapi-original.svg`,
    brandColor: '#4945FF',
    proficiency: 88
  },
  {
    name: 'System Design & Architecture',
    category: 'Backend',
    color: '#FECACA',
    highlight: true,
    level: 'Scalable Systems',
    iconName: 'Network',
    brandColor: '#EF4444',
    proficiency: 90
  },
  {
    name: 'Laravel',
    category: 'Backend',
    color: '#FECACA',
    highlight: false,
    level: 'Full-Stack MVC',
    logo: `${DEVICON}/laravel/laravel-original.svg`,
    brandColor: '#FF2D20',
    proficiency: 78
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    color: '#BBF7D0',
    highlight: false,
    level: 'Enterprise Java',
    logo: `${DEVICON}/spring/spring-original.svg`,
    brandColor: '#6DB33F',
    proficiency: 75
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#E9D5FF',
    highlight: false,
    level: 'Server-Side Programming',
    logo: `${DEVICON}/nodejs/nodejs-original.svg`,
    brandColor: '#5FA04E',
    proficiency: 82
  },

  // Mobile
  {
    name: 'Mobile App Development',
    category: 'Mobile',
    color: '#60A5FA',
    highlight: true,
    level: 'Production Apps',
    iconName: 'Smartphone',
    brandColor: '#2563EB',
    proficiency: 90
  },
  {
    name: 'React Native',
    category: 'Mobile',
    color: '#FDE047',
    highlight: true,
    level: 'Cross-Platform & Native',
    logo: `${DEVICON}/react/react-original.svg`,
    brandColor: '#61DAFB',
    proficiency: 87
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    color: '#BFDBFE',
    highlight: false,
    level: 'Dart & Mobile UI',
    logo: `${DEVICON}/flutter/flutter-original.svg`,
    brandColor: '#02569B',
    proficiency: 76
  },

  // Relational Databases & Storage
  {
    name: 'PostgreSQL',
    category: 'Database',
    color: '#BFDBFE',
    highlight: true,
    level: 'Relational Design & Indexing',
    logo: `${DEVICON}/postgresql/postgresql-original.svg`,
    brandColor: '#4169E1',
    proficiency: 92
  },
  {
    name: 'Relational Databases',
    category: 'Database',
    color: '#FED7AA',
    highlight: true,
    level: 'Schema & Architecture',
    iconName: 'Database',
    brandColor: '#EA580C',
    proficiency: 91
  },
  {
    name: 'MySQL',
    category: 'Database',
    color: '#FED7AA',
    highlight: false,
    level: 'RDBMS Queries',
    logo: `${DEVICON}/mysql/mysql-original.svg`,
    brandColor: '#00758F',
    proficiency: 80
  },
  {
    name: 'MongoDB',
    category: 'Database',
    color: '#D1FAE5',
    highlight: false,
    level: 'NoSQL & Document DB',
    logo: `${DEVICON}/mongodb/mongodb-original.svg`,
    brandColor: '#13AA52',
    proficiency: 82
  },
  {
    name: 'SQL',
    category: 'Database',
    color: '#BBF7D0',
    highlight: false,
    level: 'Complex Joins & Opt.',
    iconName: 'TableProperties',
    brandColor: '#16A34A',
    proficiency: 94
  }
];

export const INTERESTS: InterestItem[] = [
  { text: 'Full-Stack Web Development', iconName: 'Layers' },
  { text: 'Mobile Application Development', iconName: 'Smartphone' },
  { text: 'System Design & Architecture', iconName: 'Network' },
  { text: 'UI/UX Design with Figma', iconName: 'PenTool' },
  { text: 'Relational Databases & APIs', iconName: 'Database' },
  { text: 'Building Practical Software Solutions', iconName: 'Wrench' }
];

export const PERSONAL_TAGS: TagItem[] = [
  { text: 'Full-Stack Developer', color: 'bg-[#FDE047] text-neutral-900', iconName: 'Code2' },
  { text: 'Mobile Developer', color: 'bg-[#60A5FA] text-white', iconName: 'Smartphone' },
  { text: 'React & TypeScript', color: 'bg-[#F472B6] text-white', iconName: 'Atom' },
  { text: 'UI/UX (Figma)', color: 'bg-[#BBF7D0] text-neutral-900', iconName: 'PenTool' },
  { text: 'System Architecture', color: 'bg-[#FED7AA] text-neutral-900', iconName: 'Network' },
  { text: 'Problem Solver', color: 'bg-[#E9D5FF] text-neutral-900', iconName: 'Lightbulb' }
];