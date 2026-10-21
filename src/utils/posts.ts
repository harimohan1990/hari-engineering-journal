import yaml from 'js-yaml';
import { Post, Category, Author } from '@/types/post';
import { calculateReadingTime } from './readingTime';
import profileImg from '@/assets/profile.png';

export const DEFAULT_AUTHOR: Author = {
  name: 'Hari Mohan',
  role: 'Senior Backend & AI Infrastructure Engineer',
  avatar: profileImg,
  bio: 'Specializing in distributed systems, high-throughput Python/FastAPI architectures, cloud orchestration with Kubernetes, and production LLM inference infrastructure.',
  github: 'https://github.com/harimohan1990',
  linkedin: 'https://www.linkedin.com/in/hari-m-47299b54',
  twitter: 'https://twitter.com/harimohan1990',
};

export function parseMarkdown(rawContent: string, filepath: string): Post | null {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = rawContent.match(frontmatterRegex);

  let data: Record<string, any> = {};
  let content = rawContent;

  if (match) {
    try {
      data = (yaml.load(match[1]) as Record<string, any>) || {};
      content = match[2];
    } catch (e) {
      console.error(`Failed to parse YAML frontmatter in ${filepath}:`, e);
      return null;
    }
  }

  // Derive slug from filename if not in frontmatter
  const filename = filepath.split('/').pop()?.replace(/\.md$/, '') || '';
  if (filename.startsWith('_')) {
    // Template or internal file
    return null;
  }

  const slug = data.slug || filename;
  const isDraft = Boolean(data.draft);

  // In production, ignore drafts
  if (import.meta.env.PROD && isDraft) {
    return null;
  }

  const readingTime = data.readingTime || calculateReadingTime(content);

  const author: Author = data.author
    ? {
        ...DEFAULT_AUTHOR,
        ...data.author,
      }
    : DEFAULT_AUTHOR;

  return {
    title: data.title || filename.replace(/-/g, ' '),
    slug,
    description: data.description || '',
    date: data.date ? new Date(data.date).toISOString().split('T')[0] : '2026-01-01',
    category: (data.category as Category) || 'Engineering Best Practices',
    tags: Array.isArray(data.tags) ? data.tags : [],
    author,
    coverImage: data.coverImage,
    featured: Boolean(data.featured),
    draft: isDraft,
    readingTime,
    content,
  };
}

// Eagerly load all markdown files from /src/content/posts/*.md
const markdownFiles = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

let cachedPosts: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cachedPosts) return cachedPosts;

  const posts: Post[] = [];
  for (const [path, content] of Object.entries(markdownFiles)) {
    const post = parseMarkdown(content, path);
    if (post) {
      posts.push(post);
    }
  }

  // Sort descending by date
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  cachedPosts = posts;
  return cachedPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedPosts(): Post[] {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  return featured.length > 0 ? featured : posts.slice(0, 3);
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  return posts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): { name: Category; count: number }[] {
  const posts = getAllPosts();
  const counts: Partial<Record<Category, number>> = {};

  for (const post of posts) {
    counts[post.category] = (counts[post.category] || 0) + 1;
  }

  return Object.entries(counts).map(([name, count]) => ({
    name: name as Category,
    count: count as number,
  }));
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const counts: Record<string, number> = {};

  for (const post of posts) {
    for (const tag of post.tags) {
      counts[tag] = (counts[tag] || 0) + 1;
    }
  }

  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getRelatedPosts(currentPost: Post, limit = 3): Post[] {
  const posts = getAllPosts().filter((p) => p.slug !== currentPost.slug);

  const scored = posts.map((post) => {
    let score = 0;
    if (post.category === currentPost.category) score += 3;
    const commonTags = post.tags.filter((t) => currentPost.tags.includes(t));
    score += commonTags.length * 2;
    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export function getAdjacentPosts(currentSlug: string): {
  previous?: Post;
  next?: Post;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return {};

  return {
    previous: index < posts.length - 1 ? posts[index + 1] : undefined,
    next: index > 0 ? posts[index - 1] : undefined,
  };
}
