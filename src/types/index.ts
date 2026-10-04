export interface CourseCurriculumModule {
  moduleNumber: number;
  title: string;
  duration: string;
  lessons: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Digital Marketing' | 'AI Tools' | 'Social Media' | 'Canva & Design' | 'Freelancing' | 'Content Creation';
  level: 'Beginner' | 'Beginner to Intermediate';
  modulesCount: number;
  lessonsCount: number;
  estimatedHours: string;
  topics: string[];
  whatYoullLearn: string[];
  curriculum: CourseCurriculumModule[];
  finalProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  badge?: string;
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'Digital Marketing' | 'AI' | 'Social Media' | 'Design' | 'Career';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  content: string; // rich markdown or formatted HTML structure
  tableOfContents: {
    id: string;
    text: string;
  }[];
  tags: string[];
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'Guides' | 'Checklists' | 'Templates' | 'AI Tools' | 'Marketing Tools' | 'Career Resources';
  type: 'Guide' | 'Checklist' | 'Template' | 'Cheatsheet' | 'Roadmap';
  format: 'PDF Guide' | 'Spreadsheet' | 'Interactive Checklist' | 'Tool Directory';
  freeBadge: boolean;
  includedItems: string[];
  downloadFileName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Courses' | 'Career & Freelancing';
}

export interface AnalyticsEvent {
  id: string;
  timestamp: string;
  eventName: string;
  params?: Record<string, string | number | boolean>;
}
