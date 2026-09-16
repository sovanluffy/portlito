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
  iconName?: string;
  highlight?: boolean;
  color: string;
  level?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  type: 'Education' | 'Experience' | 'Learning';
  description: string;
  tags: string[];
  color: string;
}
