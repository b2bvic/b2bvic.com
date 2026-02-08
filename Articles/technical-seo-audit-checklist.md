---
title:: 47-Point Technical SEO Audit Checklist With Fix Priorities
description:: A comprehensive 47-point technical SEO audit checklist organized by priority. Includes crawlability, indexation, speed, schema, and security checks with fix guidance.
focus_keyword:: technical SEO audit checklist
category:: seo
author:: Victor Valentine Romo
date:: 2026.02.07
---

# 47-Point Technical SEO Audit Checklist With Fix Priorities

A technical SEO audit reveals the infrastructure problems preventing your content from ranking. Content quality and backlink authority mean nothing if search engines can't crawl, index, and render your pages efficiently. I've audited 40+ sites ranging from 50-page service businesses to 10,000-page enterprise platforms. The same 47 issues appear repeatedly — some catastrophic, some cosmetic, all measurable.

This checklist is organized by priority tier. Critical issues (Tier 1) block indexation or cause ranking penalties. Important issues (Tier 2) suppress performance measurably. Optimization issues (Tier 3) provide incremental improvements. Fix Tier 1 first, always.

## Tier 1: Critical (Fix Immediately — These Block Indexation or Rankings)

### Crawlability

**1. Robots.txt blocking important content**
Check: Open `yourdomain.com/robots.txt`. Verify that no `Disallow` directives block pages you want indexed.
Tool: **Screaming Frog** → Configuration → Robots.txt → Check for disallowed URLs
Common mistake: Staging environments block all crawling via robots.txt, then someone pushes to production without removing the block.

**2. XML sitemap exists and is submitted**
Check: Verify sitemap at `yourdomain.com/sitemap.xml`. Confirm submission in **Google Search Console** → Sitemaps.
Fix priority: If no sitemap exists, generate one immediately. For sites under 500 pages, a static XML sitemap works. For larger sites, use dynamic generation.

**3. Noindex tags on important pages**
Check: Crawl the site with **Screaming Frog** → filter for pages with `noindex` meta tags or `X-Robots-Tag: noindex` headers.
Common mistake: CMS plugins that add noindex to pages during development and never remove them. WordPress SEO plugins are frequent offenders.

**4. Canonical tags are self-referencing and correct**
Check: Every indexable page should have a `<link rel="canonical" href="...">` pointing to itself. Pages shouldn't canonicalize to other pages unless intentional.
Tool: **Screaming Frog** → Directives → Canonical
Critical issue: Multiple pages canonicalizing to the wrong URL consolidates ranking signals away from the pages that should rank.

**5. HTTPS implementation complete**
Check: All pages load via HTTPS. All HTTP URLs redirect to HTTPS with 301 redirects. No mixed content warnings.
Tool: Browser dev tools → Console for mixed content warnings. **Screaming Frog** → Protocol filter.
Fix: Implement site-wide HTTPS redirect at server level. Update all internal links to HTTPS. Replace HTTP resources (images, scripts) with HTTPS equivalents.

**6. No redirect chains or loops**
Check: **Screaming Frog** → Response Codes → Redirect Chains. Any chain longer than 2 hops degrades crawl efficiency and passes less link equity.
Fix: Update redirects to point directly to final destination URL. Common cause: legacy redirects stacking over years of URL changes.

**7. Server response codes are correct**
Check: 200 for live pages, 301 for permanent redirects, 404 for deleted pages. No 500 errors.
Tool: **Screaming Frog** → Response Codes overview.
Critical: 500 errors signal server instability. Google reduces crawl rate for sites with persistent 5xx responses.

### Indexation

**8. Index coverage in Google Search Console**
Check: GSC → Pages report. Review "Not indexed" category for reasons and affected URLs.
Priority issues: "Discovered – currently not indexed" (Google found the URL but chose not to index it — usually a quality signal) and "Crawled – currently not indexed" (Google crawled and decided the page wasn't worth indexing).

**9. Duplicate content identified and resolved**
Check: **Screaming Frog** → Content → Near Duplicates. **Siteliner** for site-wide duplicate percentage.
Fix: Consolidate duplicate pages via canonical tags, 301 redirects, or content differentiation. Target: under 15% duplicate content site-wide.

**10. Orphan pages identified**
Check: Compare sitemap URLs against crawl-discovered URLs. Pages in the sitemap but not linked from any other page are orphans.
Fix: Add internal links from relevant pages. Orphan pages receive minimal crawl attention and almost never rank.

**11. Hreflang implementation (multilingual/multi-regional sites)**
Check: If your site serves multiple languages or regions, verify hreflang tags are present, reciprocal, and use correct language-region codes.
Tool: **Ahrefs** Site Audit → Localization or **Screaming Frog** → Hreflang.

## Tier 2: Important (Fix Within 30 Days — These Suppress Performance)

### Page Speed and Core Web Vitals

**12. Largest Contentful Paint (LCP) under 2.5 seconds**
Check: **Google PageSpeed Insights** or **Chrome User Experience Report** (CrUX data in GSC).
Common fixes: Optimize hero images, implement lazy loading for below-fold content, upgrade server response time.

**13. Interaction to Next Paint (INP) under 200ms**
Check: **PageSpeed Insights** → Core Web Vitals section.
Common fixes: Reduce JavaScript execution time, break up long tasks, optimize event handlers.

**14. Cumulative Layout Shift (CLS) under 0.1**
Check: **PageSpeed Insights** or **Web Vitals Chrome extension**.
Common fixes: Set explicit dimensions on images and ads, avoid dynamically injected content above the fold.

**15. Server response time (TTFB) under 600ms**
Check: **WebPageTest** → First Byte Time.
Fix: Upgrade hosting, implement server-side caching, use a CDN (**Cloudflare**, **Fastly**). Static sites on **Cloudflare Pages** or **Netlify** achieve sub-200ms TTFB consistently.

**16. Image optimization**
Check: **Screaming Frog** → Images → Over 100KB. Modern formats (WebP, AVIF) should replace PNG/JPEG where supported.
Fix: Compress all images. Implement `<picture>` elements with WebP/AVIF sources and JPEG fallbacks. Add `width` and `height` attributes to prevent CLS.

**17. JavaScript rendering requirements**
Check: View page source (not inspect element) — if critical content isn't in the HTML source, it requires JavaScript rendering. Google renders JavaScript but deprioritizes pages that depend on it.
Fix: Implement server-side rendering or static generation for content-critical pages.

### Mobile Optimization

**18. Mobile-first indexing compliance**
Check: **Google Search Console** → Settings → Crawling → verify "Googlebot Smartphone" is the primary crawler.
Verify: Mobile version of the site contains the same content as desktop. No content hidden behind "read more" toggles that are closed by default on mobile.

**19. Tap targets adequately spaced**
Check: **PageSpeed Insights** → Mobile → Tap targets.
Fix: Minimum 48px tap target size with 8px spacing between targets. Common offender: footer link lists with links too close together.

**20. Viewport configured correctly**
Check: `<meta name="viewport" content="width=device-width, initial-scale=1">` present in head.
Absence causes mobile rendering issues and fails mobile-first indexing requirements.

### URL Structure

**21. URL structure is clean and descriptive**
Check: URLs should be lowercase, hyphen-separated, descriptive, and short. No parameters unless necessary.
Bad: `/page?id=847&cat=12`
Good: `/articles/technical-seo-audit-checklist`

**22. URL depth is shallow**
Check: No essential page should be more than 3 subdirectory levels deep. `/blog/category/subcategory/article-name/` is borderline.
Fix: Flatten URL structure. `/articles/article-name/` outperforms `/blog/2026/02/seo/technical/article-name/`.

**23. Trailing slash consistency**
Check: Pick a convention (trailing slash or no trailing slash) and enforce it site-wide via redirects.
Tool: **Screaming Frog** → URL filter for trailing slash inconsistencies.

### Structured Data

**24. Organization/LocalBusiness schema on homepage**
Check: **Google Rich Results Test** → Enter homepage URL.
Required fields: name, url, logo, contactPoint, sameAs (social profiles).

**25. Article schema on blog/article pages**
Check: Rich Results Test on article pages.
Required fields: headline, datePublished, dateModified, author (linked to Person schema), image.

**26. Breadcrumb schema implemented**
Check: Rich Results Test → BreadcrumbList.
Benefit: Enhances SERP display with breadcrumb navigation, improving click-through rate.

**27. FAQ schema on pages with FAQ sections**
Check: Rich Results Test → FAQPage.
Benefit: FAQ rich results occupy more SERP real estate and directly answer searcher questions.

**28. Product/Service schema where applicable**
Check: E-commerce or service pages should implement Product or Service schema with pricing, availability, and review data.

## Tier 3: Optimization (Fix Within 90 Days — Incremental Improvements)

### On-Page Technical

**29. Title tags under 60 characters and unique**
Check: **Screaming Frog** → Page Titles → Over 60 Characters and Duplicate.
Fix: Rewrite titles that truncate in SERPs. Ensure every page has a unique title.

**30. Meta descriptions under 160 characters and compelling**
Check: **Screaming Frog** → Meta Descriptions → Missing, Over 160 Characters, Duplicate.
Note: Google rewrites meta descriptions 70% of the time, but well-written descriptions still improve CTR when displayed.

**31. H1 tags present and unique per page**
Check: **Screaming Frog** → H1 → Missing, Multiple, Duplicate.
Fix: Every indexable page gets exactly one H1 that includes or closely matches the target keyword.

**32. Image alt text present and descriptive**
Check: **Screaming Frog** → Images → Missing Alt Text.
Fix: Describe what the image shows. Include target keyword naturally where relevant, not stuffed.

**33. Internal link anchor text is descriptive**
Check: Review internal link anchors — avoid "click here" and "read more." Anchor text should describe the target page's content.

**34. Pagination implemented correctly**
Check: Paginated series (blog archives, product listings) should use `rel="next"` and `rel="prev"` where applicable. Individual pages in the series should be indexable.

### Security and Trust

**35. Security headers implemented**
Check: **SecurityHeaders.com** → scan your domain.
Required: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

**36. SSL certificate valid and not expiring soon**
Check: Browser padlock → Certificate details. Certificates expiring within 30 days need immediate renewal.

**37. No malware or security warnings**
Check: **Google Search Console** → Security Issues. **Sucuri SiteCheck** for external scan.

### Performance

**38. Browser caching configured**
Check: **GTmetrix** → Leverage browser caching.
Fix: Set cache-control headers for static assets (images, CSS, JS) with long expiration times (1 year for versioned assets).

**39. GZIP or Brotli compression enabled**
Check: **GTmetrix** → Enable compression.
Fix: Enable Brotli (preferred) or GZIP compression at server or CDN level. Reduces page transfer size by 60-80%.

**40. Critical CSS inlined**
Check: **PageSpeed Insights** → "Eliminate render-blocking resources."
Fix: Extract and inline above-the-fold CSS. Defer non-critical CSS.

**41. Third-party scripts audited**
Check: **Chrome DevTools** → Network tab → filter by third-party domains.
Fix: Remove unnecessary scripts. Defer remaining third-party scripts. Each external script adds latency and potential points of failure.

### Advanced

**42. Log file analysis performed**
Check: Server access logs reveal how Googlebot actually crawls your site — which pages it visits, how often, which pages it ignores.
Tool: **Screaming Frog** Log File Analyzer or **JetOctopus**.

**43. International targeting configured (if applicable)**
Check: **Google Search Console** → International Targeting. Verify country and language targeting settings.

**44. Site migration tracking (if recent migration)**
Check: If a site migration occurred in the last 6 months, verify all old URLs redirect correctly, traffic hasn't dropped unexpectedly, and GSC coverage remains stable.

**45. JavaScript framework SEO compliance**
Check: Sites built with **React**, **Angular**, or **Vue** need server-side rendering or prerendering to ensure search engines can index content. Test with `cache:yourdomain.com/page` to see what Google has indexed.

**46. Pagination and infinite scroll handled**
Check: Infinite scroll pages must implement paginated URLs accessible to crawlers. Content loaded only via scroll events is invisible to search engines.

**47. Web accessibility standards (WCAG)**
Check: **WAVE** accessibility checker. Accessibility correlates with SEO because many accessibility improvements (alt text, heading hierarchy, semantic HTML) are also ranking factors.

## Prioritization: When You Can't Fix Everything

Most audits surface 30-50 issues. Most companies can address 5-10 per month. Prioritization determines whether the limited fix capacity goes to high-impact items or gets wasted on cosmetic improvements.

### The Impact-Effort Matrix

Plot each issue on a 2x2 matrix:

- **High Impact, Low Effort (Do First):** Fix broken canonical tags, add missing XML sitemap, remove erroneous noindex tags. These take minutes to fix and unlock major ranking improvements.
- **High Impact, High Effort (Plan Next):** Restructure URL hierarchy, implement server-side rendering, redesign internal linking architecture. These require development time but produce substantial results.
- **Low Impact, Low Effort (Batch Later):** Fix missing image alt text, add breadcrumb schema, correct trailing slash inconsistencies. Quick wins that accumulate incrementally.
- **Low Impact, High Effort (Skip or Defer):** Migrate to a new CMS for marginal speed improvement, implement edge-case hreflang for minimal international traffic. The effort exceeds the return.

### The "Stop the Bleeding" Principle

Critical issues that are actively damaging your rankings take priority over optimizations that could improve them. A noindex tag on your highest-traffic page is hemorrhaging existing rankings. A missing FAQ schema on a blog post is a missed optimization opportunity. Fix the hemorrhage first.

I sequence audit fixes in three waves:

**Wave 1 (Week 1-2):** Fix every Tier 1 Critical issue. No exceptions, no delays. These items actively block indexation or degrade rankings.

**Wave 2 (Week 3-6):** Address Tier 2 Important items ordered by impact-effort ratio. Page speed improvements, mobile optimization, and schema implementation typically top this wave.

**Wave 3 (Month 2-3):** Tackle Tier 3 Optimization items during gaps between other work. These items compound over time but don't warrant displacing higher-priority activities.

### Communicating Priorities to Developers

Developers need specificity that most audit reports lack. "Fix page speed" is not actionable. "Compress hero image on /services from 2.4MB to under 200KB using WebP format, add width=1200 height=800 attributes, and implement lazy loading for below-fold images" is actionable.

Each audit item in my reports includes:
- What the problem is (plain language)
- Where to find it (specific URL, specific file)
- What the fix looks like (technical specification)
- Why it matters (ranking impact in business terms)
- How to verify the fix (testing procedure)

This level of specification eliminates the back-and-forth that delays implementation. The developer opens the report, reads the fix specification, and implements without needing to research the solution.

## Running the Audit: Time and Tool Requirements

### The 4-Hour Express Audit

For a site under 500 pages:
- **Hour 1:** **Screaming Frog** full crawl + GSC review (covers items 1-11, 21-23, 29-34)
- **Hour 2:** **PageSpeed Insights** + Core Web Vitals analysis (covers items 12-17, 38-41)
- **Hour 3:** Schema validation + mobile testing + security (covers items 18-20, 24-28, 35-37)
- **Hour 4:** Report compilation and priority assignment (covers items 42-47 at surface level)

### The 2-Day Comprehensive Audit

For sites over 500 pages, the express audit misses patterns that only emerge at scale. The 2-day audit adds:
- Log file analysis (4 hours)
- Page-level content quality assessment (4 hours)
- Competitor technical comparison (2 hours)
- Detailed fix prioritization with implementation timelines (2 hours)

## FAQ

### How often should I run a technical SEO audit?

Quarterly for the full 47-point checklist. Monthly for the Tier 1 critical items — these can change without warning due to site updates, CMS plugin changes, or server configuration shifts. Continuous monitoring via **Google Search Console** catches indexation issues between formal audits.

### Can I do a technical audit without Screaming Frog?

**Screaming Frog** is the industry standard for a reason — it crawls sites faster, more configurably, and with more data granularity than alternatives. Free alternatives include **Screaming Frog** itself (free up to 500 URLs), **Sitebulb** (limited free plan), and **Google Search Console** (basic crawl stats). For comprehensive audits above 500 pages, Screaming Frog's paid license ($259/year) is essential.

### What's the most commonly missed technical SEO issue?

Orphan pages — pages that exist but receive no internal links. In my audit data, 25-40% of indexed pages on the average site are orphans. These pages receive minimal crawl attention, accumulate no internal authority, and rarely rank. Identifying and linking orphan pages is the highest-ROI fix on most sites.

### Should I fix everything on this checklist before doing content work?

No. Fix Tier 1 immediately — these block your content from performing. Then pursue content production and Tier 2 fixes in parallel. Tier 3 items are optimizations that compound over time but shouldn't delay content production. A technically perfect site with no content ranks for nothing. An imperfect site with strong content and no Tier 1 blockers ranks for plenty.

---

*Victor Valentine Romo conducts technical SEO audits as part of fractional SEO consulting engagements. The 47-point checklist above was refined across 40+ audits spanning SMB to enterprise-scale sites. [Schedule a technical audit at b2bvic.com/calendar]*

---

**Related Reading:**

- [How Topical Maps Build Authority Faster Than Link Building](/articles/topical-authority-strategy.html)
- [Building 200+ Page Sites With Template-Driven Programmatic SEO](/articles/programmatic-seo-guide.html)
- [Local SEO Playbook: GBP, Citations, and Review Velocity](/articles/local-seo-for-service-businesses.html)
