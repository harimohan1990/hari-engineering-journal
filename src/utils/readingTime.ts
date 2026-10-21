export function calculateReadingTime(content: string): number {
  if (!content) return 1;
  // Strip code blocks and markdown symbols roughly for word count
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`.*?`/g, ' ')
    .replace(/#+\s/g, ' ')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .trim();

  const words = cleanContent.split(/\s+/).filter(Boolean).length;
  // Average reading speed 200 wpm, minimum 1 minute
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}
