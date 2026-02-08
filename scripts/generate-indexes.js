#!/usr/bin/env node

/**
 * Generate articles hub page (articles.html) for b2bvic.com.
 *
 * Usage: node scripts/generate-indexes.js
 */

const fs = require('fs');
const path = require('path');
const { megaNavHtml, megaNavStyles, megaNavScript, footerHtml, headIncludes, SAME_AS_ARRAY } = require('./shared');

const DIST = path.join(__dirname, '..', 'dist');

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildArticlesHub(articles) {
  const cards = articles.map(a => `
              <a href="/articles/${a.slug}.html" class="group block bg-[#171717] border-l-2 border-amber-600 rounded-r-lg p-6 hover:bg-[#1c1c1c] hover:border-amber-400 transition-all duration-200">
                  <h3 class="text-base font-display font-600 text-[#fafafa] group-hover:text-amber-400 transition-colors leading-snug">${escapeAttr(a.title)}</h3>
                  <p class="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-2">${escapeAttr(a.description)}</p>
                  <div class="flex items-center justify-between mt-4">
                    <time class="text-xs text-zinc-600" datetime="${a.date}">${a.date}</time>
                    <span class="text-xs font-medium text-amber-600 group-hover:text-amber-400 transition-colors">Read &rarr;</span>
                  </div>
              </a>`).join('\n');

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Writing | B2B Vic",
        "url": "https://b2bvic.com/articles.html",
        "description": "Articles on SEO strategy, AI systems, and B2B growth from Victor Valentine Romo.",
        "publisher": { "@type": "Organization", "name": "B2B Vic", "url": "https://b2bvic.com" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://b2bvic.com/" },
          { "@type": "ListItem", "position": 2, "name": "Writing" }
        ]
      }
    ]
  }, null, 2);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Writing | B2B Vic</title>
    <meta name="description" content="Articles on SEO strategy, AI systems, and B2B growth from Victor Valentine Romo." />
    <meta name="author" content="Victor Valentine Romo" />
    <meta property="og:title" content="Writing | B2B Vic" />
    <meta property="og:description" content="Articles on SEO strategy, AI systems, and B2B growth." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://b2bvic.com/articles.html" />
    <meta property="og:site_name" content="B2B Vic" />
    <link rel="canonical" href="https://b2bvic.com/articles.html" />
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

    <!-- Spacer -->
    <div class="h-16"></div>

    <!-- Header -->
    <section class="border-b border-zinc-800/60">
        <div class="max-w-6xl mx-auto px-6 py-16">
            <nav class="text-xs text-zinc-600 mb-6">
              <a href="/" class="hover:text-zinc-400 transition-colors">Home</a>
              <span class="mx-2">/</span>
              <span class="text-zinc-500">Writing</span>
            </nav>
            <h1 class="text-3xl md:text-4xl font-display font-700 text-[#fafafa]">Writing</h1>
            <p class="mt-4 text-zinc-400 text-lg max-w-2xl">Tactical frameworks, real cost models, case-study data. Each piece distills what I deploy inside client engagements.</p>
        </div>
    </section>

    <!-- Articles Grid -->
    <section class="max-w-6xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-2 gap-4">
${cards}
        </div>
    </section>

    <!-- CTA -->
    <section class="max-w-6xl mx-auto px-6 pb-20">
      <div class="bg-[#171717] border border-zinc-800 rounded-xl p-8 text-center">
        <h2 class="text-2xl font-display font-600 text-[#fafafa] mb-3">Want these systems running inside your company?</h2>
        <p class="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">I take on a limited number of fractional SEO engagements. If your team needs senior search leadership without the full-time overhead, let's talk.</p>
        <a href="/services.html#contact" class="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors">Work With Me</a>
      </div>
    </section>

${footerHtml}

${megaNavScript}

</body>
</html>`;

  fs.writeFileSync(path.join(DIST, 'articles.html'), html);
  console.log('Built: articles.html');
}

module.exports = { buildArticlesHub };

if (require.main === module) {
  // Standalone: read article metadata from dist
  const articlesDir = path.join(DIST, 'articles');
  if (!fs.existsSync(articlesDir)) {
    console.log('No dist/articles/ found. Run build.js first.');
    process.exit(1);
  }
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));
  const articles = files.map(f => {
    const slug = f.replace('.html', '');
    return { slug, title: slug.replace(/-/g, ' '), description: '', date: '2026-01-19' };
  });
  buildArticlesHub(articles);
}
