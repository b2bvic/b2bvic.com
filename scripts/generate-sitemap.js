#!/usr/bin/env node

/**
 * Sitemap generator for b2bvic.com.
 * Scans dist/ for HTML files, generates sitemap.xml.
 *
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  baseUrl: 'https://b2bvic.com',
  distDir: path.resolve(__dirname, '..', 'dist'),
  outputFile: path.resolve(__dirname, '..', 'dist', 'sitemap.xml'),

  excludeFiles: ['404.html'],

  priorities: {
    'index.html': { priority: 1.0, changefreq: 'weekly' },
    'services.html': { priority: 0.9, changefreq: 'monthly' },
    'about.html': { priority: 0.8, changefreq: 'monthly' },
    'articles.html': { priority: 0.9, changefreq: 'weekly' },
    'case-studies.html': { priority: 0.8, changefreq: 'monthly' },
    'articles/': { priority: 0.7, changefreq: 'monthly' },
    'default': { priority: 0.5, changefreq: 'monthly' }
  }
};

function getHtmlFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getHtmlFiles(fullPath, fileList);
    } else if (entry.name.endsWith('.html') && !CONFIG.excludeFiles.includes(entry.name)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function getPriority(relativePath) {
  const filename = path.basename(relativePath);
  if (CONFIG.priorities[filename]) return CONFIG.priorities[filename];
  for (const [pattern, config] of Object.entries(CONFIG.priorities)) {
    if (relativePath.startsWith(pattern)) return config;
  }
  return CONFIG.priorities['default'];
}

function generateSitemap() {
  const files = getHtmlFiles(CONFIG.distDir);
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const file of files) {
    const relative = path.relative(CONFIG.distDir, file);
    const urlPath = relative === 'index.html' ? '/' : `/${relative}`;
    const { priority, changefreq } = getPriority(relative);
    const stat = fs.statSync(file);
    const lastmod = stat.mtime.toISOString().split('T')[0];

    xml += `
  <url>
    <loc>${CONFIG.baseUrl}${urlPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  xml += '\n</urlset>\n';

  fs.writeFileSync(CONFIG.outputFile, xml);
  console.log(`Sitemap: ${files.length} URLs written to sitemap.xml`);
}

generateSitemap();
