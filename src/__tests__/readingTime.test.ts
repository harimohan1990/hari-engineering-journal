import { describe, it, expect } from 'vitest';
import { calculateReadingTime } from '../utils/readingTime';

describe('calculateReadingTime', () => {
  it('returns at least 1 minute for short content', () => {
    expect(calculateReadingTime('Hello world')).toBe(1);
    expect(calculateReadingTime('')).toBe(1);
  });

  it('calculates approximately 200 words per minute', () => {
    const text = new Array(600).fill('word').join(' ');
    expect(calculateReadingTime(text)).toBe(3);
  });

  it('strips code blocks from the word count estimation', () => {
    const textWithCode = `
    Introduction to architecture.
    \`\`\`python
    ${new Array(400).fill('a = 1').join('\n')}
    \`\`\`
    Conclusion.
    `;
    // Should exclude the dense repeated code
    expect(calculateReadingTime(textWithCode)).toBeLessThan(3);
  });
});
