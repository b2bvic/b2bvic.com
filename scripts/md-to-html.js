/**
 * Markdown-to-HTML processor for b2bvic.com articles.
 * Reads Articles/*.md, parses frontmatter, renders to dist/articles/*.html.
 *
 * Usage: node scripts/md-to-html.js (standalone) or require('./md-to-html').processArticles()
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { megaNavHtml, megaNavStyles, megaNavScript, footerHtml, headIncludes, SAME_AS_ARRAY } = require('./shared');

const SKIP_FILES = ['README.md', '_brief.md', '_content-stack.md'];
const ARTICLES_DIR = path.join(__dirname, '..', 'Articles');
const DIST_DIR = path.join(__dirname, '..', 'dist', 'articles');

function parseFrontmatter(content) {
  const meta = {};
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { meta, body: content };

  const fmBlock = fmMatch[1];
  for (const line of fmBlock.split('\n')) {
    const match = line.match(/^(\w[\w_-]*)::?\s*(.+)$/);
    if (match) {
      meta[match[1].trim()] = match[2].trim();
    }
  }

  const body = content.slice(fmMatch[0].length).trim();
  return { meta, body };
}

function slugify(filename) {
  return filename.replace(/\.md$/, '');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildArticleHTML(title, description, body, slug, date, keywords) {
  const htmlBody = marked(body);

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Person",
          "name": "Victor Valentine Romo",
          "url": "https://victorvalentineromo.com",
          "jobTitle": "Fractional SEO Consultant",
          "sameAs": SAME_AS_ARRAY
        },
        "publisher": {
          "@type": "Organization",
          "name": "B2B Vic",
          "url": "https://b2bvic.com"
        },
        "datePublished": date || "2026-01-19",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://b2bvic.com/articles/${slug}.html`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://b2bvic.com/" },
          { "@type": "ListItem", "position": 2, "name": "Writing", "item": "https://b2bvic.com/articles.html" },
          { "@type": "ListItem", "position": 3, "name": title }
        ]
      }
    ]
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeAttr(title)} | B2B Vic</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <meta name="author" content="Victor Valentine Romo" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://b2bvic.com/articles/${slug}.html" />
    <meta property="og:site_name" content="B2B Vic" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <link rel="canonical" href="https://b2bvic.com/articles/${slug}.html" />
${headIncludes}
    <style>
${megaNavStyles}
    </style>
    <script type="application/ld+json">
${jsonLd}
    </script>
</head>
<body class="bg-[#0a0a0a] text-zinc-400 antialiased font-body">

${megaNavHtml}

    <!-- Spacer for fixed nav -->
    <div class="h-16"></div>

    <!-- Breadcrumbs -->
    <div class="max-w-3xl mx-auto px-6 pt-8 pb-4">
      <nav class="text-xs text-zinc-600">
        <a href="/" class="hover:text-zinc-400 transition-colors">Home</a>
        <span class="mx-2">/</span>
        <a href="/articles.html" class="hover:text-zinc-400 transition-colors">Writing</a>
        <span class="mx-2">/</span>
        <span class="text-zinc-500">${escapeAttr(title)}</span>
      </nav>
    </div>

    <!-- Article -->
    <main class="max-w-3xl mx-auto px-6 pb-20">
        <article class="prose-dark">
            <h1 class="text-3xl md:text-4xl font-display font-700 text-[#fafafa] leading-tight mb-8">${escapeAttr(title)}</h1>
            <div class="flex items-center gap-4 mb-12 text-sm text-zinc-600">
              <span>Victor Valentine Romo</span>
              <span class="text-zinc-800">&middot;</span>
              <time datetime="${date}">${date}</time>
            </div>
            <div class="space-y-6 leading-relaxed text-base">
            ${htmlBody}
            </div>
        </article>

        <!-- Back link -->
        <div class="mt-16 pt-8 border-t border-zinc-800/60">
            <a href="/articles.html" class="text-amber-500 hover:text-amber-400 font-medium transition-colors">&larr; All articles</a>
        </div>

        <!-- CTA -->
        <div class="mt-12 bg-[#171717] border border-zinc-800 rounded-xl p-8">
          <h3 class="text-xl font-display font-600 text-[#fafafa] mb-3">Need this implemented?</h3>
          <p class="text-zinc-400 text-sm mb-6 max-w-lg">I build the search infrastructure behind mid-market B2B growth. If you want these systems running inside your company, not just on your reading list.</p>
          <a href="/services.html#contact" class="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors text-sm">Work With Me</a>
        </div>
    </main>

${footerHtml}

${megaNavScript}

</body>
</html>`;
}

function processArticles() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.log('No Articles directory found.');
    return [];
  }

  fs.mkdirSync(DIST_DIR, { recursive: true });

  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md') && !SKIP_FILES.includes(f));
  const metadata = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
    const { meta, body } = parseFrontmatter(raw);

    const slug = meta.slug || slugify(file);
    const title = meta.title || slug.replace(/-/g, ' ');
    const description = meta.description || meta.focus_keyword || '';
    const date = (meta.date || meta.created || '2026.01.19').replace(/\./g, '-');
    const keywords = meta.keywords || meta.focus_keyword || '';

    const html = buildArticleHTML(title, description, body, slug, date, keywords);
    fs.writeFileSync(path.join(DIST_DIR, `${slug}.html`), html);
    console.log(`  Built: articles/${slug}.html`);

    metadata.push({ slug, title, description, date, keywords });
  }

  return metadata;
}

module.exports = { processArticles };

if (require.main === module) {
  const articles = processArticles();
  console.log(`\nProcessed ${articles.length} articles.`);
}
