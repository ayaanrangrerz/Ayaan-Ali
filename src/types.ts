export type ProjectCategory = 'all' | 'client' | 'marketing' | 'ai' | 'systems';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'client' | 'tech';
  subCategory: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isClientProject: boolean;
  businessDetails?: {
    clientName: string;
    industry: string;
    location?: string;
    keyDeliverables: string[];
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  idealFor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  highlighted?: boolean;
  badge?: string;
  summary: string;
  features: string[];
  timeline: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}
