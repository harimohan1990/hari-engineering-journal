export type ProjectStatus = 'Production' | 'Open Source' | 'Active Research' | 'Beta';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architectureSummary: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  category: 'Distributed Systems' | 'AI Infrastructure' | 'Cloud & Kubernetes' | 'Database & Storage';
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}
