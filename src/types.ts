export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  category: 'Web' | 'Mobile' | 'Full-Stack' | 'UI/UX';
  description: string;
  technologies: string[];
  featured?: boolean;
  accentColor: string; // e.g. '#FDE047', '#F472B6', '#60A5FA', '#4ADE80'
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  /** Small brand/logo mark shown on the project card, e.g. the app icon. */
  logo?: string;
  /** Logo marks that are black and need inverting on dark backgrounds. */
  invertOnDark?: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    goal: string;
    role: string;
    timeline: string;
    team: string;
    keyFeatures: string[];
    developmentProcess: string[];
    challengesAndLearning: string[];
    screenshots: {
      title: string;
      caption: string;
      src: string;
    }[];
    impactMetrics?: {
      label: string;
      value: string;
      note: string;
    }[];
  };
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database';
  /** lucide-react icon name, used when no brand logo exists. */
  iconName?: string;
  highlight?: boolean;
  color: string;
  level?: string;
  /** Remote SVG brand logo (Devicon CDN). Present for real products. */
  logo?: string;
  /** Official brand colour — for glows, borders, icon tint. */
  brandColor?: string;
  /** Logos that are black and need inverting on dark backgrounds. */
  invertOnDark?: boolean;
  /** Proficiency level 0-100 */
  proficiency?: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  type: 'Education' | 'Experience' | 'Learning';
  description: string;
  tags: string[];
  color: string;
  /** lucide-react icon name for the timeline node. */
  iconName?: string;
  /** Optional logo for the school or company. */
  logo?: string;
}

export interface InterestItem {
  text: string;
  iconName?: string;
}

export interface TagItem {
  text: string;
  color: string;
  iconName?: string;
}