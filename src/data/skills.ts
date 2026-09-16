import { SkillItem } from '../types';

export const SKILLS: SkillItem[] = [
  // Frontend & UI/UX
  { name: 'React.js', category: 'Frontend', color: '#FDE047', highlight: true, level: 'Primary Focus' },
  { name: 'UI/UX Design (Figma)', category: 'Frontend', color: '#F472B6', highlight: true, level: 'Wireframes & Prototyping' },
  { name: 'TypeScript', category: 'Frontend', color: '#BFDBFE', highlight: true, level: 'Type Safety' },
  { name: 'JavaScript', category: 'Frontend', color: '#FEF08A', highlight: true, level: 'Core ES6+' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#BBF7D0', highlight: false, level: 'Modern Design Systems' },
  { name: 'Next.js', category: 'Frontend', color: '#FBCFE8', highlight: false, level: 'SSR & Jamstack' },

  // Backend & Architecture
  { name: 'Strapi.js', category: 'Backend', color: '#E9D5FF', highlight: true, level: 'Headless CMS & APIs' },
  { name: 'System Design & Architecture', category: 'Backend', color: '#FECACA', highlight: true, level: 'Scalable Systems' },
  { name: 'Laravel', category: 'Backend', color: '#FECACA', highlight: false, level: 'Full-Stack MVC' },
  { name: 'Spring Boot', category: 'Backend', color: '#BBF7D0', highlight: false, level: 'Enterprise Java' },
  { name: 'Node.js', category: 'Backend', color: '#E9D5FF', highlight: false, level: 'Server-Side Programming' },

  // Mobile
  { name: 'Mobile App Development', category: 'Mobile', color: '#60A5FA', highlight: true, level: 'Production Apps' },
  { name: 'React Native', category: 'Mobile', color: '#FDE047', highlight: true, level: 'Cross-Platform & Native' },
  { name: 'Flutter', category: 'Mobile', color: '#BFDBFE', highlight: false, level: 'Dart & Mobile UI' },

  // Relational Databases & Storage
  { name: 'PostgreSQL', category: 'Database', color: '#BFDBFE', highlight: true, level: 'Relational Design & Indexing' },
  { name: 'Relational Databases', category: 'Database', color: '#FED7AA', highlight: true, level: 'Schema & Architecture' },
  { name: 'MySQL', category: 'Database', color: '#FED7AA', highlight: false, level: 'RDBMS Queries' },
  { name: 'SQL', category: 'Database', color: '#BBF7D0', highlight: false, level: 'Complex Joins & Opt.' }
];

export const INTERESTS = [
  'Full-Stack Web Development',
  'Mobile Application Development',
  'System Design & Architecture',
  'UI/UX Design with Figma',
  'Relational Databases & APIs',
  'Building Practical Software Solutions'
];

export const PERSONAL_TAGS = [
  { text: 'Full-Stack Developer', color: 'bg-[#FDE047] text-neutral-900' },
  { text: 'Mobile Developer', color: 'bg-[#60A5FA] text-white' },
  { text: 'React & TypeScript', color: 'bg-[#F472B6] text-white' },
  { text: 'UI/UX (Figma)', color: 'bg-[#BBF7D0] text-neutral-900' },
  { text: 'System Architecture', color: 'bg-[#FED7AA] text-neutral-900' },
  { text: 'Problem Solver', color: 'bg-[#E9D5FF] text-neutral-900' }
];
