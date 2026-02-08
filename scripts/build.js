/**
 * Master build script for b2bvic.com — The Operator.
 *
 * Pipeline:
 * 1. Clean dist/
 * 2. Process Articles/*.md -> dist/articles/*.html
 * 3. Build index.html (homepage)
 * 4. Build articles.html (hub)
 * 5. Copy static pages (about, services, case-studies)
 * 6. Build 404.html
 * 7. Generate sitemap.xml
 * 8. Generate robots.txt
 *
 * Usage: npm run build
 */

const fs = require('fs');
const path = require('path');
const { processArticles } = require('./md-to-html');
const { buildArticlesHub } = require('./generate-indexes');
const { megaNavHtml, megaNavStyles, megaNavScript, footerHtml, headIncludes, SAME_AS_ARRAY, ENTITY_DOMAINS } = require('./shared');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// ─── Clean ───────────────────────────────────────────────────────
function clean() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });
  console.log('Cleaned dist/');
}

// ─── Copy static HTML pages ──────────────────────────────────────
function copyStaticPages() {
  const pages = ['index.html', 'about.html', 'services.html'];
  for (const page of pages) {
    const src = path.join(ROOT, page);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, page));
      console.log(`Copied: ${page}`);
    } else {
      console.log(`  Warning: ${page} not found in root`);
    }
  }
}

// ─── Build 404 ───────────────────────────────────────────────────
function build404() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Not Found | B2B Vic</title>
    <meta name="robots" content="noindex" />
${headIncludes}
    <style>
${megaNavStyles}
    </style>
</head>
<body class="bg-[#0a0a0a] text-zinc-400 antialiased font-body">

${megaNavHtml}

    <div class="h-16"></div>

    <main class="max-w-4xl mx-auto px-6 py-32 text-center">
        <p class="text-8xl font-display font-700 text-amber-600">404</p>
        <p class="mt-6 text-xl text-zinc-400">This page doesn't exist.</p>
        <p class="mt-2 text-zinc-600">The URL may have changed, or you followed a dead link.</p>
        <div class="mt-10 flex justify-center gap-4">
          <a href="/" class="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors">Back to Home</a>
          <a href="/articles.html" class="inline-block px-8 py-3 border border-zinc-700 text-zinc-300 hover:border-zinc-500 font-semibold rounded-lg transition-colors">Read Articles</a>
        </div>
    </main>

${footerHtml}

${megaNavScript}

</body>
</html>`;

  fs.writeFileSync(path.join(DIST, '404.html'), html);
  console.log('Built: 404.html');
}

// ─── Sitemap ─────────────────────────────────────────────────────
function buildSitemap(articles) {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/articles.html', priority: '0.9', changefreq: 'weekly' },
    { loc: '/services.html', priority: '0.9', changefreq: 'monthly' },
    { loc: '/about.html', priority: '0.8', changefreq: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const page of staticPages) {
    xml += `
  <url>
    <loc>https://b2bvic.com${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }

  for (const a of articles) {
    xml += `
  <url>
    <loc>https://b2bvic.com/articles/${a.slug}.html</loc>
    <lastmod>${a.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  xml += '\n</urlset>\n';
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
  console.log('Built: sitemap.xml');
}

// ─── Robots.txt ──────────────────────────────────────────────────
function buildRobots() {
  const content = `User-agent: *
Allow: /

Sitemap: https://b2bvic.com/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, 'robots.txt'), content);
  console.log('Built: robots.txt');
}

// ─── Main ────────────────────────────────────────────────────────
function main() {
  console.log('Building b2bvic.com — The Operator\n');

  clean();

  console.log('\nProcessing articles...');
  const articles = processArticles();
  console.log(`${articles.length} articles processed.\n`);

  // Build articles hub
  buildArticlesHub(articles);

  // Copy static HTML pages from root
  copyStaticPages();

  // Build utility pages
  build404();
  buildSitemap(articles);
  buildRobots();

  // Count files
  const countFiles = (dir) => {
    let count = 0;
    if (!fs.existsSync(dir)) return 0;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) count += countFiles(path.join(dir, entry.name));
      else count++;
    }
    return count;
  };

  console.log(`\nBuild complete. ${countFiles(DIST)} files in dist/`);
}

main();
