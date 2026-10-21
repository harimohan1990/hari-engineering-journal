# Backend Engineering Journal

> Engineering scalable backends. Exploring distributed systems. Building intelligent infrastructure.

A production-grade, zero-backend engineering journal and technical publication engineered with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed specifically for high-concurrency systems engineers, backend architects, and AI infrastructure specialists.

Live Site: **[https://harimohan1990.github.io/hari-engineering-journal/](https://harimohan1990.github.io/hari-engineering-journal/)**

---

## Architecture & Technology Stack

- **Frontend Core**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS with custom obsidian/slate dark theme and optional light mode toggle
- **Content Engine**: Markdown (`.md`) with YAML frontmatter parsed at compile time via `import.meta.glob`
- **Typography & Prose**: Custom responsive typography, GFM tables, and callouts
- **Code Highlighting**: PrismJS with copy-to-clipboard buttons and language badges
- **Routing**: React Router with GitHub Pages SPA redirector (deep-link support via `404.html`)
- **Icons**: Lucide Icons
- **SEO & Feeds**: Automated post-build generation of `sitemap.xml`, `rss.xml`, and `robots.txt`
- **CI/CD Deployment**: Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) to GitHub Pages

---

## Key Features

1. **Pure Markdown Publishing Workflow**: Add or edit technical deep dives inside `src/content/posts/*.md` without writing React code.
2. **Interactive Table of Contents**: Generated dynamically from H2/H3 headings with real-time scrollspy.
3. **Full-Text Command Palette Search**: Interactive modal (`Cmd+K` or `/`) searching titles, descriptions, categories, tags, and body content.
4. **Rich Systems Engineering Project Portfolio**: Dedicated showcase for distributed engines, GPU autoscalers, connection poolers, and AI benchmarks.
5. **SEO & Social Metadata**: Per-article Open Graph tags, canonical links, and RSS 2.0 feed.
6. **Zero Paid Backend / 100% Free Hosting**: Hosted entirely on GitHub Pages.

---

## Local Development Quickstart

### Prerequisites
- Node.js >= 18 (recommended: Node 20 or 22)
- npm >= 9

### Installation
```bash
# Clone the repository
git clone https://github.com/harimohan1990/hari-engineering-journal.git
cd hari-engineering-journal

# Install dependencies
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Automated Tests
```bash
npm run test
```

### Build for Production Locally
```bash
npm run build
```
This runs `tsc`, builds the static bundle into `dist/`, and generates `sitemap.xml`, `rss.xml`, and `robots.txt`.

### Preview Production Build
```bash
npm run preview
```

---

## GitHub Pages Deployment Setup

This repository is pre-configured to deploy automatically via GitHub Actions whenever code is pushed to the `main` branch.

### 1. One-Time GitHub Repository Settings Configuration
To allow GitHub Actions to deploy to GitHub Pages:
1. Navigate to your repository on GitHub:
   [https://github.com/harimohan1990/hari-engineering-journal/settings/pages](https://github.com/harimohan1990/hari-engineering-journal/settings/pages)
2. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
3. Under **Settings -> Actions -> General**:
   - Workflow permissions: Select **Read and write permissions** (or ensure Pages permissions are enabled).

### 2. Automated Deployment
Once enabled, every `git push origin main` triggers `.github/workflows/deploy.yml`, which:
- Runs `npm ci` and automated unit tests.
- Compiles the bundle with the correct repository subpath (`/hari-engineering-journal/`).
- Deploys the `dist` directory to GitHub Pages.

---

## Writing New Articles

To write and publish an article:
1. Copy `src/content/posts/_template.md` to `src/content/posts/my-article.md`.
2. Fill in the frontmatter (`title`, `slug`, `category`, `tags`, `readingTime`, `description`).
3. Set `draft: false`.
4. Commit and push:
```bash
git add src/content/posts/my-article.md
git commit -m "docs: add new article"
git push origin main
```
See [CONTRIBUTING.md](file:///Users/harimohan/Desktop/haris-engineering-journal/CONTRIBUTING.md) for the full authoring guide.

---

## License

MIT © [Hari Mohan](https://github.com/harimohan1990)
