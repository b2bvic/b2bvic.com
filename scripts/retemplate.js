#!/usr/bin/env node

/**
 * Retemplate existing HTML files to match The Operator design system.
 * Re-wraps article bodies in the current nav/footer/head includes.
 *
 * Usage: node scripts/retemplate.js
 */

const fs = require('fs');
const path = require('path');
const { megaNavHtml, megaNavStyles, megaNavScript, footerHtml, headIncludes, SAME_AS_ARRAY } = require('./shared');

const DIST_ARTICLES = path.join(__dirname, '..', 'dist', 'articles');

function escapeAttr(str) {
  let decoded = str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  return decoded
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function extractFromHtml(html) {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  const rawTitle = titleMatch ? titleMatch[1].trim() : 'B2B Vic';
  const title = rawTitle.replace(/\s*\|\s*B2B Vic$/, '');

  const descMatch = html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"/);
  const description = descMatch ? descMatch[1].trim() : '';

  // Extract schema blocks
  const schemaBlocks = [];
  const schemaRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = schemaRegex.exec(html)) !== null) {
    schemaBlocks.push(m[1].trim());
  }

  // Extract article body
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  const body = articleMatch ? articleMatch[1].trim() : '';

  return { title, description, schemaBlocks, body };
}

function retemplateFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const slug = path.basename(filePath, '.html');
  const { title, description, schemaBlocks, body } = extractFromHtml(html);

  if (!body) {
    console.log(`  Skipped (no <article>): ${slug}`);
    return false;
  }

  const schemaHtml = schemaBlocks.map(s => `    <script type="application/ld+json">\n${s}\n    </script>`).join('\n');

  const output = `<!DOCTYPE html>
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
    <link rel="canonical" href="https://b2bvic.com/articles/${slug}.html" />
${headIncludes}
    <style>
${megaNavStyles}
    </style>
${schemaHtml}
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
            ${body}
        </article>

        <div class="mt-16 pt-8 border-t border-zinc-800/60">
            <a href="/articles.html" class="text-amber-500 hover:text-amber-400 font-medium transition-colors">&larr; All articles</a>
        </div>

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

  fs.writeFileSync(filePath, output);
  console.log(`  Retemplated: ${slug}`);
  return true;
}

function main() {
  if (!fs.existsSync(DIST_ARTICLES)) {
    console.log('No dist/articles/ found. Run build first.');
    process.exit(1);
  }

  const files = fs.readdirSync(DIST_ARTICLES).filter(f => f.endsWith('.html'));
  console.log(`Retemplating ${files.length} articles...`);

  let count = 0;
  for (const file of files) {
    if (retemplateFile(path.join(DIST_ARTICLES, file))) count++;
  }

  console.log(`\nDone. ${count} articles retemplated.`);
}

main();
