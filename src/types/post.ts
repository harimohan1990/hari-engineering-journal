export type Category =
  | 'Python Engineering'
  | 'FastAPI and API Design'
  | 'Database Engineering'
  | 'System Design'
  | 'Distributed Systems'
  | 'Microservices'
  | 'Docker and Kubernetes'
  | 'AWS and Cloud Infrastructure'
  | 'CI/CD and DevOps'
  | 'Observability and Performance'
  | 'Generative AI Engineering'
  | 'LLM Infrastructure and Inference'
  | 'RAG and AI Agents'
  | 'Engineering Best Practices';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
}

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: Category;
  tags: string[];
  author: Author;
  coverImage?: string;
  featured?: boolean;
  draft?: boolean;
  readingTime?: number;
}

export interface Post extends PostFrontmatter {
  content: string;
}

export interface TableOfContentItem {
  id: string;
  text: string;
  level: number;
}
