---
title:: Site Migration SEO Checklist: How to Preserve Rankings During Website Redesigns
description:: Site migrations destroy 40-60% of organic traffic when executed poorly. Here's the exact checklist for preserving SEO value through redesigns and platform changes.
focus_keyword:: site migration seo checklist
category:: Technical SEO
author:: Victor Valentine Romo
date:: 2026.02.08
---

# Site Migration SEO Checklist: How to Preserve Rankings During Website Redesigns

**Forty-seven percent of website redesigns result in significant organic traffic loss.** Companies spend $50,000-$200,000 rebuilding sites only to watch rankings collapse within 30 days of launch. The culprit isn't new design or technology—it's SEO negligence during migration planning. URL changes without redirects, content deletions, broken internal links, and technical architecture shifts torpedo years of accumulated search authority.

The pattern repeats: marketing team collaborates with design agency, developers rebuild on new CMS, site launches, organic traffic drops 40-60%, everyone panics. Six months of recovery work follows—reimplementing redirects, restoring deleted content, fixing crawl errors. This chaos is entirely preventable with proper pre-launch SEO protocol.

## Pre-Migration: Baseline Documentation

**Crawl existing site completely before any changes.** Use Screaming Frog, Sitebulb, or Ahrefs Site Audit to document current state:
- **Full URL inventory** (every page, image, PDF, asset—not just main navigation pages)
- **Indexed page count** (query `site:yourdomain.com` in Google, record number of results)
- **Ranking keyword mapping** (which pages rank for which keywords—use GSC or rank tracking tools)
- **Backlink profile** (which pages have inbound links from external sites)
- **Internal link structure** (which pages are most internally linked, authority distribution)

Without baseline documentation, you can't measure what broke. "Traffic dropped" is useless feedback. "Rankings for 'enterprise CRM software' fell from position 3 to 18 because we deleted the comparison guide" enables targeted fixing.

**Export Google Search Console data for trailing 12 months.** Download:
- **Performance report** (queries, pages, impressions, clicks, positions)
- **Index coverage report** (which pages are indexed, errors, warnings)
- **Sitemaps report** (which sitemaps exist, page counts, error rates)
- **Core Web Vitals report** (current LCP, FID, CLS performance by page group)

GSC data retention is 16 months. After that, historical data disappears. Export before starting migration work.

**Document existing technical infrastructure.** Record current state:
- **CMS platform** (WordPress, Drupal, custom build, static site generator)
- **Hosting environment** (shared, VPS, dedicated, cloud platform)
- **CDN configuration** (Cloudflare, Fastly, AWS CloudFront, none)
- **SSL certificate setup** (provider, implementation method, redirect configuration)
- **Robots.txt rules** (which sections are blocked from crawling)
- **Sitemap locations** (XML sitemaps, image sitemaps, video sitemaps)

Technical environment changes impact crawlability and indexing. If you migrate from Apache to Nginx and forget to configure URL rewrites, all existing rankings vanish.

**Create page-level priority matrix.** Not all pages matter equally. Classify every page:
- **Tier 1 (critical):** Product pages, high-traffic blog posts, ranking top 10 for money keywords
- **Tier 2 (important):** Supporting content, moderate traffic pages, ranking top 30 for target keywords
- **Tier 3 (keep):** Low-traffic but complete archives, old blog posts, resource libraries
- **Tier 4 (eliminate):** Outdated content, thin pages, duplicate information

This matrix informs URL preservation decisions. Tier 1 pages require perfect migration. Tier 4 pages can be deleted with 410 status codes.

## URL Structure Planning

**Maintain existing URLs wherever possible.** Every URL change requires a redirect. Every redirect risks ranking loss. The safest migration preserves URLs:
- Old URL: `/blog/project-management-tips`
- New URL: `/blog/project-management-tips` (unchanged)

If new CMS or site architecture forces URL changes, map old → new meticulously:
- Old URL: `/blog/project-management-tips`
- New URL: `/resources/guides/project-management-tips`
- Redirect: 301 from old to new

**Create comprehensive redirect mapping spreadsheet.** Three columns minimum:
1. **Old URL** (complete path: `/blog/project-management-tips/`)
2. **New URL** (complete path: `/resources/guides/project-management-tips/`)
3. **Redirect type** (301 permanent, 302 temporary, 410 gone)

Advanced mapping includes:
- **Priority tier** (1-4 classification from earlier)
- **Current rankings** (which keywords rank, positions)
- **Backlink count** (how many external links point to this URL)
- **Traffic volume** (trailing 90-day organic sessions)

This spreadsheet becomes the migration blueprint. Developers implement every redirect before launch.

**Avoid redirect chains at all costs.** Redirect chains occur when:
- Page A redirects to Page B
- Page B redirects to Page C
- Page C is the final destination

Google follows redirect chains, but each hop dilutes authority transfer. Maximum two redirects tolerable; three or more cause ranking suppression. Audit for chains:
- Check if new URLs match URLs that already redirect elsewhere
- Verify no temporary redirects (302) in existing infrastructure
- Test redirect paths before launch (use redirect checker tools)

**Plan for trailing slash consistency.** URLs with and without trailing slashes are technically different:
- `yourdomain.com/page` (no trailing slash)
- `yourdomain.com/page/` (trailing slash)

Pick one convention and enforce it everywhere:
- Set canonical tags to preferred version
- Configure server to redirect non-preferred to preferred
- Update all internal links to use consistent format

Inconsistency creates duplicate content issues and splits link equity between URL variations.

## Content Preservation Strategy

**Never delete content ranking in top 20 positions.** Even if content seems outdated, rankings represent accumulated authority. Better options than deletion:
- **Update and refresh** (new statistics, expanded sections, improved formatting)
- **Consolidate into larger guides** (merge three thin articles into comprehensive resource)
- **Archive with 410 status** (only if content is factually wrong, legally problematic, or completely irrelevant)

If you must delete, implement 301 redirects to most relevant replacement content—don't return 404 errors for pages with backlinks or rankings.

**Preserve on-page optimization elements.** During redesign, content often gets reformatted. Ensure migration maintains:
- **Title tags** (should match or improve existing optimized titles)
- **Meta descriptions** (preserve messaging unless deliberately improving)
- **Header hierarchy** (H1, H2, H3 structure matching existing on-page SEO)
- **Image alt text** (transfer all alt attributes to new implementation)
- **Internal links** (maintain contextual links within body content)

Redesigns often strip these elements accidentally. Developers rebuild templates without preserving SEO metadata, resulting in ranking drops despite content remaining "the same."

**Maintain or improve content depth.** If existing article is 2,400 words, new version shouldn't be 800 words. Google interprets content reduction as quality decrease. Better approaches:
- **Match or exceed existing word count** (maintain comprehensiveness)
- **Expand thin content** (opportunity to strengthen weak pages during migration)
- **Add multimedia** (images, videos, infographics enhance without reducing text)

**Transfer structured data (schema markup).** Existing site might have:
- **Article schema** (publishing date, author, headline)
- **Product schema** (pricing, availability, ratings)
- **FAQPage schema** (structured Q&A triggering featured snippets)
- **HowTo schema** (step-by-step instructional content)

Redesigned templates must reimple these. Losing structured data removes you from rich snippet opportunities—featured snippets disappear, star ratings vanish from SERPs, product information no longer displays.

## Technical Migration Execution

**Implement redirects at server level, not via JavaScript.** Proper redirect hierarchy:
1. **Server configuration (best):** Apache .htaccess, Nginx conf, hosting control panel redirects
2. **CMS-level plugins (acceptable):** WordPress redirect plugins, Drupal path redirects
3. **JavaScript redirects (problematic):** `window.location` or `meta refresh` — Google may not follow these reliably

Server-level redirects execute before page loads. JavaScript redirects require page rendering, delaying transfer and risking crawl budget waste.

**Set up 301 redirects, not 302.** Redirect types signal different intentions:
- **301 (permanent):** "This page moved forever, transfer all authority to new URL"
- **302 (temporary):** "This page moved temporarily, keep authority on old URL"
- **307 (temporary):** HTTP/1.1 equivalent of 302

For site migrations, use 301 exclusively unless you genuinely plan to reverse the change (rare). 302 redirects don't pass full link equity—they're for temporary situations like A/B testing.

**Test redirects in staging environment before launch.** Deploy redirects on staging site first:
- Verify every redirect resolves to correct destination
- Check redirect type (301 versus 302)
- Confirm no redirect chains exist
- Test sample of high-priority pages manually

Use Screaming Frog's "List" mode to test specific URLs. Input old URLs, verify they return 301 status and resolve to expected new URLs.

**Maintain robots.txt access during migration.** Common mistake: developer blocks entire staging site from crawling (`Disallow: /`), then accidentally deploys that robots.txt to production. Result: Google stops crawling your entire site.

Verify production robots.txt:
- Allows access to critical sections (`Allow: /`)
- Blocks only intended sections (admin areas, search results, development folders)
- Doesn't accidentally block CSS/JavaScript (prevents rendering, hurts rankings)

**Update and resubmit XML sitemaps.** After migration:
- Generate new sitemap reflecting new URL structure
- Remove deleted pages from sitemap
- Submit updated sitemap via Google Search Console
- Monitor Index Coverage report for errors

Sitemaps guide Google to new URLs faster. Without updated sitemap, Google discovers changes slowly via link crawling—delaying ranking recovery.

**Implement canonical tags consistently.** Canonical tags declare preferred URL version:
```html
<link rel="canonical" href="https://yourdomain.com/preferred-url" />
```

Set canonical tags on every page pointing to itself (self-referential canonicals) or to preferred version if duplicates exist. Inconsistent or missing canonicals cause indexation confusion.

## Post-Migration Monitoring

**Track indexation status daily for first 30 days.** Monitor Google Search Console Index Coverage report:
- **Indexed page count** (should match or exceed pre-migration count within 7-14 days)
- **Excluded page count** (investigate spikes—likely redirect or crawl errors)
- **Error count** (4xx errors indicate broken links, 5xx errors show server problems)

Set up GSC email alerts for validation errors. Address issues immediately—waiting weeks to fix problems extends recovery time.

**Monitor ranking positions for Tier 1 keywords.** Use rank tracking tools (Ahrefs, SEMrush, AccuRanker) to track daily positions:
- Focus on top 20 keywords generating most traffic
- Expect minor fluctuations (±3 positions) during migration—normal
- Investigate drops of 10+ positions immediately—signals problems

Small ranking fluctuations (position 4 to 6, or 12 to 9) happen constantly. Large drops (position 3 to 23) indicate migration errors requiring immediate attention.

**Check Core Web Vitals for performance regression.** New designs often add bloat:
- **Largest Contentful Paint (LCP):** Should stay under 2.5 seconds
- **First Input Delay (FID):** Should stay under 100ms
- **Cumulative Layout Shift (CLS):** Should stay under 0.1

Performance regression hurts rankings. If new design loads slower than old site, optimize before suffering prolonged traffic loss.

**Audit backlinks for redirect issues.** External sites link to your old URLs. If redirects break:
- Valuable backlinks point to 404 errors (link equity wasted)
- Referral traffic drops (visitors hit errors instead of content)

Use Ahrefs or Majestic to identify:
- Which external sites link to your domain
- Which specific URLs receive backlinks
- Whether those URLs resolve correctly (follow redirects to new URLs)

Contact high-authority sites if redirects break valuable backlinks—ask them to update links to new URLs.

**Monitor organic traffic by landing page.** Google Analytics 4 or similar:
- **Compare landing page traffic:** New URL versus old URL pre-migration traffic
- **Identify pages losing traffic:** Indicates redirect issues or content quality problems
- **Check traffic sources:** Organic search versus direct versus referral

Landing page view comparisons reveal which redirects failed or which content lost relevance during migration.

## Recovery Protocol for Traffic Loss

**If organic traffic drops 20%+ post-launch, immediately:**

1. **Verify redirects implemented correctly:** Test sample of old URLs, confirm they 301 redirect to new URLs
2. **Check robots.txt hasn't blocked crawling:** Ensure no accidental `Disallow: /` rules
3. **Confirm sitemap submitted and error-free:** Look for 4xx/5xx errors preventing indexation
4. **Review GSC Index Coverage report:** Identify which pages dropped from index, why
5. **Audit title tags and meta descriptions:** Confirm SEO metadata transferred correctly
6. **Check for canonical tag errors:** Self-referential canonicals on all pages, no conflicts
7. **Verify internal links functional:** Run crawl checking for broken internal links (404s)
8. **Test page speed:** Confirm Core Web Vitals didn't regress significantly

Most traffic drops stem from redirect failures, robots.txt errors, or missing metadata. Systematic audit surfaces root cause.

**If rankings dropped for specific high-value keywords:**

1. **Compare old versus new page content:** Did content get shortened, simplified, or removed?
2. **Check on-page SEO elements:** Title tag, H1, header structure, keyword usage
3. **Review internal link context:** Did other pages stop linking to this page?
4. **Verify schema markup:** Was structured data lost in migration?
5. **Analyze backlink anchor text:** Do redirects cause anchor text mismatches?

Keyword-specific ranking drops usually indicate content or on-page optimization degradation during migration.

## Frequently Asked Questions

### How long does it take for rankings to recover after site migration?

**Expect 4-8 weeks for rankings to stabilize after flawless migration.** Google must recrawl old URLs, discover redirects, transfer authority to new URLs, and recalculate rankings. Even perfectly executed migrations experience 10-15% temporary traffic dips for 2-3 weeks as Google processes changes. If traffic hasn't recovered by week 8, migration errors likely occurred requiring investigation and correction.

### Should you migrate during slow season or busy season?

**Migrate during slow traffic periods if possible.** If your business has seasonal peaks (e-commerce during holidays, tax software in spring), avoid migrating during high-traffic months. Migration-related traffic drops hurt less when baseline traffic is lower. However, don't delay migrations indefinitely waiting for "perfect timing"—there's always some risk, and delaying costs opportunity.

### Do you need to keep old URLs redirecting forever?

**Maintain redirects minimum 12 months, ideally indefinitely.** After 12 months, most link equity transfers and external sites update links. However, older backlinks and bookmarks persist years later. Redirect infrastructure costs are minimal—server storage for redirect rules is negligible. Unless you have tens of thousands of redirects causing performance issues, keep them permanently.

### How do you handle migrating from HTTP to HTTPS during redesign?

**HTTPS migration follows same redirect principles—301 redirect all HTTP URLs to HTTPS equivalents.** Add SSL certificate installation and redirect configuration:
1. Install SSL certificate on hosting/CDN
2. Configure server to redirect all `http://` requests to `https://` (site-wide redirect)
3. Update internal links to use HTTPS (prevents redirect chains)
4. Update canonical tags to HTTPS versions
5. Update sitemap to list HTTPS URLs
6. Submit HTTPS sitemap to GSC

HTTPS migration is lower risk than URL structure changes—redirects are straightforward and authority transfer is reliable.

### What if you need to migrate domain (not just redesign)?

**Domain migrations are highest-risk SEO changes requiring extreme caution.** In addition to all checklist items above:
1. **Set up 301 redirects at DNS level:** Forward old domain to new domain
2. **Maintain old domain ownership:** Don't let it expire for minimum 12 months post-migration
3. **Implement page-level redirects:** Old domain's specific pages redirect to corresponding new domain pages
4. **Submit Change of Address in GSC:** Tells Google you're moving domains permanently
5. **Update all branded mentions:** Update listings on G2, Capterra, review sites, directories
6. **Contact high-value backlink sources:** Request they update links to new domain

Domain migrations lose 30-40% traffic even when executed perfectly. Avoid unless absolutely necessary (rebranding, acquisition, legal requirement).