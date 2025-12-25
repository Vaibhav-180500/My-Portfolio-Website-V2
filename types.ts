export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
