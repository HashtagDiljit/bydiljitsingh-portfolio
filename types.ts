
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  summary?: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  date: string;
  
  // Metadata Badges
  teamSize?: string;
  role?: string;
  duration?: string;
  tools?: string[];

  // Detailed Sections
  context?: string;
  objectives?: {
    icon: string;
    label: string;
    value: string;
  }[];
  leadership?: {
    summary: string;
    quote: string;
    stats: string[];
  };
  technicalContributions?: {
    title: string;
    description: string;
    imageUrl: string;
    subtext?: string;
  }[];
  achievementsSummary?: string;
  achievementMetrics?: {
    label: string;
    value: string;
    subvalue: string;
  }[];
  
  reportUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface WikiEntry {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export type Section = 'about' | 'projects' | 'cv' | 'wiki';
