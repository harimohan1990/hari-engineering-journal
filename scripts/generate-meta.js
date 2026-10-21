import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://harimohan1990.github.io/hari-engineering-journal';
const POSTS_DIR = path.resolve(__dirname, '../src/content/posts');
const DIST_DIR = path.resolve(__dirname, '../dist');

function parseMarkdownFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf-8');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;

  try {
    const data = yaml.load(match[1]);
    const filename = path.basename(filepath, '.md');
    if (filename.startsWith('_')) return null;

    return {
      title: data.title || filename,
      slug: data.slug || filename,
      description: data.description || '',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      category: data.category || 'General',
      draft: Boolean(data.draft),
    };
  } catch (e) {
    console.error(`Error parsing ${filepath}:`, e);
    return null;
  }
}

function generateMetadata() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Dist directory ${DIST_DIR} not found. Run vite build first.`);
    return;
  }

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
  const posts = files
    .map((f) => parseMarkdownFile(path.join(POSTS_DIR, f)))
    .filter((p) => p && !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log(`Found ${posts.length} published articles for metadata generation.`);

  // 1. Generate sitemap.xml
  const staticPages = ['', '/posts', '/about', '/projects'];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
${posts
  .map(
    (post) => `  <url>
    <loc>${BASE_URL}/posts/${post.slug}</loc>
    <lastmod>${post.date.split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml);
  console.log('✓ Generated dist/sitemap.xml');

  // 2. Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt);
  console.log('✓ Generated dist/robots.txt');

  // 3. Generate rss.xml (RSS 2.0 feed)
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Backend Engineering Journal</title>
  <link>${BASE_URL}</link>
  <description>Engineering scalable backends. Exploring distributed systems. Building intelligent infrastructure.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${posts
  .map(
    (p) => `  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${BASE_URL}/posts/${p.slug}</link>
    <guid>${BASE_URL}/posts/${p.slug}</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <category>${p.category}</category>
    <description><![CDATA[${p.description}]]></description>
  </item>`
  )
  .join('\n')}
</channel>
</rss>`;

  fs.writeFileSync(path.join(DIST_DIR, 'rss.xml'), rssXml);
  console.log('✓ Generated dist/rss.xml');

  // 4. Ensure 404.html and .nojekyll exist in dist
  const public404 = path.resolve(__dirname, '../public/404.html');
  if (fs.existsSync(public404)) {
    fs.copyFileSync(public404, path.join(DIST_DIR, '404.html'));
    console.log('✓ Verified dist/404.html');
  }

  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');
  console.log('✓ Generated dist/.nojekyll');
}

generateMetadata();
