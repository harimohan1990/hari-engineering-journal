import { describe, it, expect } from 'vitest';
import {
  getAllPosts,
  getPostBySlug,
  getFeaturedPosts,
  getAllCategories,
  getAllTags,
} from '../utils/posts';

describe('Posts Utilities and Content Verification', () => {
  it('loads all published articles (at least 8)', () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThanOrEqual(8);
  });

  it('ensures every article has mandatory frontmatter fields', () => {
    const posts = getAllPosts();
    for (const post of posts) {
      expect(post.title).toBeTruthy();
      expect(post.slug).toBeTruthy();
      expect(post.description).toBeTruthy();
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.category).toBeTruthy();
      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.tags.length).toBeGreaterThan(0);
      expect(post.readingTime).toBeGreaterThan(0);
      expect(post.author.name).toBeTruthy();
      expect(post.content.length).toBeGreaterThan(100);
    }
  });

  it('finds an article by exact slug', () => {
    const post = getPostBySlug('harness-engineering-reliable-ai-agents');
    expect(post).toBeDefined();
    expect(post?.title).toContain('Harness Engineering');
  });

  it('returns featured articles', () => {
    const featured = getFeaturedPosts();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured[0].featured).toBe(true);
  });

  it('aggregates unique categories with counts', () => {
    const categories = getAllCategories();
    expect(categories.length).toBeGreaterThan(0);
    expect(categories.some((c) => c.name === 'FastAPI and API Design' || c.name === 'Docker and Kubernetes')).toBe(true);
  });

  it('aggregates unique tags', () => {
    const tags = getAllTags();
    expect(tags.length).toBeGreaterThan(0);
    expect(tags.some((t) => t.tag === 'python')).toBe(true);
  });
});
