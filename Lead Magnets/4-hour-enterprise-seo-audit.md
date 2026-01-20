---
domain:: b2bvic.com
type:: Lead Magnet
format:: Notion Template + PDF
created:: 2026.01.19
frameworks:: LISEC, Observer Protocol
upsell:: Discovery Call → $12,500 Audit + Roadmap OR $8K/mo Retainer
---

# The 4-Hour Enterprise SEO Audit Template

**Production-Ready Framework for Sites 500-50,000 Pages**

---

## Cover Page

**STOP BUYING $20K AUDITS THAT SIT IN YOUR DOWNLOADS FOLDER**

You've been sold comprehensive analysis when you needed action clarity. The 400-page PDF with 247 recommendations isn't helping your team ship fixes—it's paralyzing them.

This template contains the exact 4-hour audit protocol I've used on 300+ enterprise sites, including a global eDiscovery firm ($1.2B revenue) and a real estate brokerage with 2,400 active listings. It isolates the 20% of SEO issues that drive 80% of traffic impact.

**What you get:**
- 4-layer diagnostic framework with 60-minute time boxes
- Pre-configured checklists for each layer (technical, IA, content, competitive)
- Priority matrix template for executive presentation
- 1-page roadmap format with quick wins + 90-day projects
- Tool stack setup guide (Screaming Frog, GSC API, Ahrefs)

**What you won't get:**
- 400 pages of recommendations nobody implements
- Alphabetically sorted task lists with no business impact weighting
- Technical jargon designed to justify consulting retainers
- Analysis paralysis disguised as thoroughness

Run your first audit this week. If you get stuck on prioritization or want a second set of eyes on your findings, book a 30-minute strategy call at **b2bvic.com/calendar**. No pitch, just audit feedback.

Victor Valentine Romo
Fractional SEO Consultant
b2bvic.com

---

## Introduction: The Audit Delivery Problem

You've experienced this:

Paid for an audit. Nodded through the presentation. Filed it in Google Drive. Checked in 6 months later and realized nothing changed.

The problem wasn't the audit quality. It was the handoff.

Agencies deliver recommendations, then disappear. Your internal team gets a document with no prioritization, no timeline, no accountability. Everything feels equally urgent, so nothing gets done.

I've reviewed 50+ failed agency audits over the last 3 years. The pattern is always the same:

- 200+ recommendations, no priority matrix
- Technical fixes require developer resources the team doesn't have
- Content recommendations assume unlimited writing capacity
- No monthly check-ins to track implementation progress
- No adjustment when the first round of fixes doesn't move metrics

**Here's what works instead:**

The audit isn't the deliverable. The implementation roadmap is.

This template restructures the audit process around three constraints:

1. **Time constraint:** 4 hours total (60 minutes per layer)
2. **Prioritization constraint:** Maximum 15 recommendations (forces ruthless impact analysis)
3. **Implementation constraint:** Every recommendation includes effort estimate + resource requirement

The goal isn't to document every issue. It's to identify the 20% of fixes that unlock 80% of the traffic opportunity.

---

## The Four-Layer Audit Protocol

### Overview

Each layer has a 60-minute time box and produces three outputs:

1. **Go/No-Go Decision:** Fix now, schedule for Q2-Q3, or ignore
2. **Impact Score:** High/Medium/Low (based on traffic concentration, competitive gaps, technical severity)
3. **Effort Score:** Low/Medium/High (based on dev resources, content requirements, cross-functional coordination)

**Layer 1:** Technical Foundation
**Layer 2:** Information Architecture
**Layer 3:** Content Performance
**Layer 4:** Competitive Moat Analysis

**Total Time:** 4 hours (240 minutes)
**Output:** 1-page roadmap with 15 prioritized recommendations

---

## Layer 1: Technical Foundation (60 Minutes)

### Objective
Identify crawl efficiency bottlenecks, indexation issues, and Core Web Vitals problems that prevent Google from accessing or ranking your content.

### Tools Required
- **Screaming Frog SEO Spider** (desktop app, free for up to 500 URLs, paid for larger sites)
- **Google Search Console** (API access recommended for sites >5,000 pages)
- **PageSpeed Insights** or **Chrome DevTools** (for Core Web Vitals sampling)

### Time Allocation
- **20 min:** Screaming Frog crawl + analysis
- **15 min:** Google Search Console review (Coverage, Core Web Vitals)
- **15 min:** Core Web Vitals sampling (5-10 high-traffic pages)
- **10 min:** Prioritization + scoring

---

### Checklist: Technical Foundation

#### 1. Crawl Efficiency (Screaming Frog)

**What to check:**
- [ ] **Total crawlable URLs** – Does the crawl count match expected page count? (If site should have 5,000 pages but crawl finds 12,000, you have duplication or URL parameter issues)
- [ ] **Redirect chains** – Filter by Response Code → 301/302. Are there multi-hop redirects? (Page A → Page B → Page C wastes crawl budget)
- [ ] **Broken internal links** – Filter by Response Code → 404. How many internal links point to dead pages?
- [ ] **Orphaned pages** – Pages with zero internal links. Export "Orphan Pages" report. High-traffic orphans are priority fixes.
- [ ] **Duplicate content** – Review "Duplicate Title Tags" and "Duplicate Meta Descriptions." Not critical for rankings, but signals larger IA problems.
- [ ] **JavaScript rendering issues** – Compare Screaming Frog crawl (rendered vs. non-rendered). Are key links/content missing in non-rendered view? (Indicates Googlebot may miss content)

**Scoring criteria:**
- **High Impact:** Redirect chains on high-traffic pages, 100+ orphaned pages, JavaScript hiding primary navigation
- **Medium Impact:** 50-100 broken internal links, moderate duplication (10-20% of pages)
- **Low Impact:** <50 broken links, minor meta tag duplication

---

#### 2. Indexation Health (Google Search Console)

**What to check:**
- [ ] **Coverage report** – Navigate to Index → Coverage. How many pages are Excluded vs. Valid?
- [ ] **"Crawled – currently not indexed"** – Pages Google crawled but chose not to index. If this is >20% of total crawl, you have quality or duplication issues.
- [ ] **"Discovered – currently not indexed"** – Pages Google found but hasn't crawled. If this is >30% of sitemap URLs, you have crawl budget problems.
- [ ] **Sitemap vs. indexed count** – Compare sitemap submission count to actual indexed pages (site:yourdomain.com in Google). Large gap indicates Google is devaluing submitted URLs.
- [ ] **Manual actions** – Check Security & Manual Actions tab. Any penalties or warnings?

**Scoring criteria:**
- **High Impact:** Manual action penalty, >30% of sitemap URLs not indexed, "Crawled – currently not indexed" affecting product/service pages
- **Medium Impact:** 10-30% indexation gap, large number of soft 404s
- **Low Impact:** <10% indexation variance, minor excluded URLs (admin pages, thank-you pages)

---

#### 3. Core Web Vitals (PageSpeed Insights / Chrome DevTools)

**What to check:**
- [ ] **Sample 5-10 high-traffic pages** – Use Google Search Console → Experience → Core Web Vitals to identify problem URLs. Test in PageSpeed Insights.
- [ ] **Largest Contentful Paint (LCP)** – Should be <2.5 seconds. Measures loading speed of main content.
- [ ] **First Input Delay (FID) / Interaction to Next Paint (INP)** – Should be <200ms (FID) or <200ms (INP). Measures interactivity.
- [ ] **Cumulative Layout Shift (CLS)** – Should be <0.1. Measures visual stability (elements shifting during load).
- [ ] **Mobile vs. Desktop performance** – Test both. Mobile performance matters more for most B2B sites now.

**Common issues:**
- Large unoptimized images (LCP failure)
- Render-blocking JavaScript/CSS (LCP/FID failure)
- Missing width/height attributes on images (CLS failure)
- Third-party scripts loading synchronously (FID failure)

**Scoring criteria:**
- **High Impact:** LCP >4 seconds on high-traffic pages, CLS >0.25, mobile "Poor" rating in GSC
- **Medium Impact:** LCP 2.5-4 seconds, isolated performance issues on secondary pages
- **Low Impact:** Minor CLS issues, desktop-only performance problems

---

### Layer 1 Output: Technical Foundation Recommendations

**Template:**

| Issue | Impact | Effort | Priority | Owner | Timeline |
|-------|--------|--------|----------|-------|----------|
| [Description] | H/M/L | H/M/L | Fix Now / Q2 / Ignore | Dev/Marketing | Week 1-4 |

**Example:**

| Issue | Impact | Effort | Priority | Owner | Timeline |
|-------|--------|--------|----------|-------|----------|
| 347 redirect chains on blog posts (3-hop redirects wasting crawl budget) | High | Low | Fix Now | Dev | Week 1 |
| 89% of product pages have "Crawled – not indexed" status (thin content) | High | High | Q2 Project | Marketing | Month 2-3 |
| LCP 4.2 seconds on homepage (unoptimized hero image 2.8MB) | High | Low | Fix Now | Dev | Week 1 |
| 23 broken internal links on high-traffic category pages | Medium | Low | Fix Now | Marketing | Week 2 |
| Duplicate meta descriptions on 40% of blog posts | Low | Medium | Ignore | - | - |

---

## Layer 2: Information Architecture (60 Minutes)

### Objective
Evaluate URL structure, internal linking strategy, and topical clustering. Identify whether the site is organized for search engines or just for humans.

### Tools Required
- **Screaming Frog** (Internal Link analysis)
- **Google Search Console** (Internal Links report)
- **Ahrefs** or **Semrush** (Site Structure visualization, internal link graph)
- **Excel/Google Sheets** (for URL taxonomy analysis)

### Time Allocation
- **20 min:** URL structure analysis
- **20 min:** Internal linking audit
- **15 min:** Topical clustering review
- **5 min:** Prioritization + scoring

---

### Checklist: Information Architecture

#### 1. URL Structure Analysis

**What to check:**
- [ ] **URL depth** – Export all URLs from Screaming Frog. Count slashes. Are most pages 2-3 levels deep (good) or 4-6+ levels (bad)?
- [ ] **URL taxonomy clarity** – Do URL patterns reflect topical structure? (e.g., `/blog/category/topic/` or flat `/blog/post-title/`?)
- [ ] **Parameter pollution** – Filter Screaming Frog for URLs with `?` or `&`. Are these being indexed? (Check GSC Coverage for parameter URLs)
- [ ] **Subdomain vs. subdirectory usage** – Is the blog on `blog.site.com` (subdomain, bad for SEO) or `site.com/blog` (subdirectory, good)?
- [ ] **URL consistency** – Are there both `/page/` and `/page` versions indexed? (Trailing slash canonicalization issue)

**Scoring criteria:**
- **High Impact:** Blog on subdomain instead of subdirectory, 30%+ of indexed URLs have parameters, average URL depth >5 levels
- **Medium Impact:** Inconsistent trailing slashes, some parameter URLs indexed, unclear taxonomy
- **Low Impact:** Minor URL length issues, occasional inconsistency

---

#### 2. Internal Linking Audit

**What to check:**
- [ ] **Link distribution** – Use Ahrefs Site Explorer → Internal Links. Sort pages by "# of internal links." Do high-traffic pages have the most internal links, or is it inverted?
- [ ] **Orphaned pages** – Pages with ZERO internal links (from Screaming Frog). Are any of these high-traffic pages? (Major issue if yes)
- [ ] **Link equity flow** – Are homepage links distributed to category pages or scattered across individual posts?
- [ ] **Anchor text diversity** – Review top 20 pages in Ahrefs → Internal Links → Anchor Text. Is anchor text varied or repetitive?
- [ ] **Footer/navigation bloat** – Are 100+ links in global navigation/footer diluting link equity?

**High-impact pattern to look for:**
If 89% of your organic traffic comes from 6% of your pages (common pattern), those high-traffic pages should have 3-5x more internal links than average. If they have fewer, you're misallocating link equity.

**Scoring criteria:**
- **High Impact:** High-traffic pages have <5 internal links, 50+ orphaned pages, no clear linking strategy
- **Medium Impact:** Moderate link distribution issues, some high-traffic pages under-linked
- **Low Impact:** Minor anchor text repetition, footer link bloat

---

#### 3. Topical Clustering Review

**What to check:**
- [ ] **Content organization** – Is the blog organized by date (bad) or by topic/category (good)?
- [ ] **Pillar page strategy** – Are there comprehensive "hub" pages linking to related subtopics?
- [ ] **Keyword cannibalization** – Use GSC → Performance. Filter for top 10 keywords. Do multiple pages rank for the same keyword? (Sign of poor topical clustering)
- [ ] **Siloing** – Are related topics linked together, or is content randomly interlinked?

**Scoring criteria:**
- **High Impact:** No topical clustering, blog organized by date, severe keyword cannibalization (3+ pages competing for same keyword)
- **Medium Impact:** Weak pillar pages, some cannibalization (2 pages per keyword)
- **Low Impact:** Minor organizational issues, mostly clustered correctly

---

### Layer 2 Output: Information Architecture Recommendations

**Example:**

| Issue | Impact | Effort | Priority | Owner | Timeline |
|-------|--------|--------|----------|-------|----------|
| High-traffic pages average 3 internal links; low-traffic pages average 12 (inverted link equity) | High | Medium | Fix Now | Marketing | Week 2-4 |
| Blog is on blog.site.com subdomain instead of site.com/blog (diluting domain authority) | High | High | Q2 Project | Dev + Marketing | Month 3-4 |
| 47 orphaned pages, including 8 high-traffic product pages | High | Low | Fix Now | Marketing | Week 1 |
| No pillar page strategy; blog posts randomly interlinked | Medium | Medium | Q2 Project | Marketing | Month 2-3 |
| URL depth averages 5 levels (e.g., /category/subcategory/sub-sub/page/) | Low | High | Ignore | - | - |

---

## Layer 3: Content Performance (60 Minutes)

### Objective
Identify which content drives traffic, which converts, and where gaps exist. Focus on traffic concentration, conversion paths, and SERP feature capture.

### Tools Required
- **Google Search Console** (Performance data)
- **Google Analytics 4** (Traffic + conversion data)
- **Ahrefs** or **Semrush** (Keyword rankings, SERP features)

### Time Allocation
- **20 min:** Traffic distribution analysis (GSC + GA4)
- **20 min:** Conversion path review (GA4 Explorations)
- **15 min:** SERP feature capture analysis (Ahrefs/Semrush)
- **5 min:** Prioritization + scoring

---

### Checklist: Content Performance

#### 1. Traffic Distribution Analysis

**What to check:**
- [ ] **80/20 rule verification** – Export GSC Performance data (last 12 months, by page). Sort by clicks descending. What % of total clicks come from top 10% of pages?
- [ ] **Traffic concentration risk** – If >60% of traffic comes from <5 pages, you have concentration risk. Diversification should be priority.
- [ ] **Declining pages** – Filter GSC for pages with -30% YoY click decline. Are these high-traffic pages? (Major issue if yes)
- [ ] **Underperforming content** – Pages ranking position 11-20 (page 2 of Google) with high impressions but low clicks. These are low-hanging fruit.

**Scoring criteria:**
- **High Impact:** >70% traffic from <5 pages, top traffic driver declining -40% YoY, 20+ pages ranking #11-20 with >1,000 impressions/month
- **Medium Impact:** Moderate concentration (50-70% from top 10%), some declining pages
- **Low Impact:** Healthy distribution, stable traffic

---

#### 2. Conversion Path Analysis

**What to check:**
- [ ] **Landing page conversion rates** – In GA4, create Exploration → Path Exploration. Start with Landing Page dimension. Which organic landing pages have highest conversion rates?
- [ ] **Multi-touch attribution** – Do users convert on first visit or after multiple sessions? (Indicates content nurtures vs. converts)
- [ ] **Exit pages** – Which high-traffic pages have highest exit rates? (Content isn't moving users deeper into funnel)
- [ ] **Assisted conversions** – Which pages assist conversions without being last-click? (These are undervalued)

**Scoring criteria:**
- **High Impact:** Top traffic pages have <0.5% conversion rate, high exit rates on product/service pages, no clear conversion path
- **Medium Impact:** Some high-traffic pages convert poorly, moderate exit rate issues
- **Low Impact:** Conversion rates align with traffic distribution

---

#### 3. SERP Feature Capture

**What to check:**
- [ ] **Featured snippets** – In Ahrefs/Semrush, filter rankings for "Featured Snippet" ownership. Are you capturing snippets for high-volume keywords?
- [ ] **People Also Ask** – Are your pages appearing in PAA boxes? (Check Ahrefs SERP Features report)
- [ ] **Image pack** – For visual industries (real estate, e-commerce), are your images appearing in Google Images results?
- [ ] **Local pack** – For multi-location businesses, are Google Business Profiles appearing for geo-targeted keywords?

**Scoring criteria:**
- **High Impact:** Zero featured snippets for top 20 keywords, competitors own 80%+ of SERP features
- **Medium Impact:** Some snippet capture, but underperforming vs. competitors
- **Low Impact:** Competitive SERP feature ownership

---

### Layer 3 Output: Content Performance Recommendations

**Example:**

| Issue | Impact | Effort | Priority | Owner | Timeline |
|-------|--------|--------|----------|-------|----------|
| 73% of traffic from 4 pages (concentration risk) | High | Medium | Q2 Project | Marketing | Month 2-4 |
| 18 pages ranking #11-20 with >2,000 impressions/month (quick wins available) | High | Low | Fix Now | Marketing | Week 2-3 |
| Top traffic page has 0.3% conversion rate (high exit, weak CTA) | High | Low | Fix Now | Marketing | Week 1 |
| Zero featured snippets owned for top 10 target keywords | Medium | Medium | Q2 Project | Marketing | Month 2-3 |
| Declining traffic on top performer (-38% YoY) due to keyword cannibalization | High | Medium | Fix Now | Marketing | Week 3-4 |

---

## Layer 4: Competitive Moat Analysis (60 Minutes)

### Objective
Identify gaps in entity coverage, topical authority, and link profile compared to top 3 competitors. Determine whether SEO strategy should focus on content expansion, link acquisition, or both.

### Tools Required
- **Ahrefs** or **Semrush** (Competitor analysis, keyword gap, backlink profile)
- **Google Search Console** (Entity extraction from top pages)
- **AlsoAsked** or **AnswerThePublic** (Topic cluster expansion ideas)

### Time Allocation
- **20 min:** Entity coverage gap analysis
- **20 min:** Topical authority assessment
- **15 min:** Backlink profile comparison
- **5 min:** Prioritization + scoring

---

### Checklist: Competitive Moat Analysis

#### 1. Entity Coverage Gap

**What to check:**
- [ ] **Competitor content audit** – Identify top 3 organic competitors (Ahrefs → Competing Domains). Export their top 50 pages by traffic.
- [ ] **Named entity extraction** – What topics/entities do competitors cover that you don't? (Use Ahrefs Content Gap tool or manual review)
- [ ] **Content depth** – Are competitors publishing 3,000-word guides while you publish 800-word posts?
- [ ] **Content freshness** – Are competitors updating content quarterly while yours is static?

**Scoring criteria:**
- **High Impact:** Competitors have 2x content volume, covering 50+ topics you don't, significant depth gap
- **Medium Impact:** Moderate content gap (20-30 missing topics), some depth issues
- **Low Impact:** Competitive parity on content volume/depth

---

#### 2. Topical Authority Assessment

**What to check:**
- [ ] **Keyword gap analysis** – Use Ahrefs Keyword Gap tool. Enter your domain + top 3 competitors. Filter for keywords where all 3 competitors rank but you don't.
- [ ] **Topic cluster completeness** – For your target topic (e.g., "enterprise SEO"), do you have content covering all subtopics (audits, link building, technical SEO, content strategy)?
- [ ] **Semantic relevance** – Are you using related entities/terms in content? (E.g., if targeting "fractional SEO," are you mentioning "retainer," "consulting," "agency alternative"?)

**Scoring criteria:**
- **High Impact:** 100+ keyword gaps, incomplete topic clusters, weak semantic coverage
- **Medium Impact:** 30-50 keyword gaps, some cluster gaps
- **Low Impact:** <20 keyword gaps, strong topical authority

---

#### 3. Backlink Profile Comparison

**What to check:**
- [ ] **Domain Rating / Domain Authority** – Compare your DR/DA to top 3 competitors (Ahrefs or Moz). Are you within 10 points?
- [ ] **Referring domains** – How many unique referring domains do you have vs. competitors?
- [ ] **Link quality** – Use Ahrefs → Backlinks → Best by Links. Are competitors getting links from DR 70+ sites while you're getting DR 30 links?
- [ ] **Link velocity** – Are competitors acquiring 50 new links/month while you acquire 5?

**Scoring criteria:**
- **High Impact:** DR/DA gap >20 points, competitors have 5x referring domains, severe quality gap
- **Medium Impact:** DR/DA gap 10-20 points, moderate referring domain gap
- **Low Impact:** Competitive parity on link profile

---

### Layer 4 Output: Competitive Moat Recommendations

**Example:**

| Issue | Impact | Effort | Priority | Owner | Timeline |
|-------|--------|--------|----------|-------|----------|
| Competitors rank for 127 keywords where we have zero content (keyword gap) | High | High | Q3 Project | Marketing | Month 4-6 |
| Domain Rating: 42 (Ours) vs. 68 (Top Competitor) – need link acquisition strategy | High | High | Q2-Q3 Project | Marketing/PR | Month 2-6 |
| Competitor A publishes 3,000-word guides; we publish 800-word posts (depth gap) | Medium | High | Q2 Project | Marketing | Month 2-4 |
| Top 3 competitors update content quarterly; we haven't refreshed content in 18 months | Medium | Medium | Q2 Project | Marketing | Month 2-3 |

---

## Priority Matrix: Executive Presentation Template

### Overview

All recommendations from Layers 1-4 are plotted on a 2x2 matrix:

**X-Axis:** Effort (Low → High)
**Y-Axis:** Impact (Low → High)

**Quadrants:**

1. **Quick Wins (High Impact, Low Effort)** – Ship in Month 1
2. **Strategic Projects (High Impact, High Effort)** – Plan for Month 2-4
3. **Fill-Ins (Low Impact, Low Effort)** – Do if you have spare capacity
4. **Money Pits (Low Impact, High Effort)** – Ignore

---

### Scoring Methodology

**Impact Score (1-10):**
- How much traffic does this issue affect? (10 = affects >50% of traffic; 1 = affects <5%)
- What's the revenue potential? (10 = directly impacts conversion; 1 = no conversion impact)
- How severe is the issue? (10 = critical technical failure; 1 = cosmetic)

**Effort Score (1-10):**
- How many developer hours required? (10 = full rebuild; 1 = 1-hour fix)
- How many cross-functional teams involved? (10 = dev + design + marketing + legal; 1 = marketing only)
- What's the risk of breaking existing functionality? (10 = high risk; 1 = zero risk)

**Formula:**
- **Impact = Average of 3 impact scores**
- **Effort = Average of 3 effort scores**
- **Priority = Impact / Effort** (higher ratio = higher priority)

---

### Example Priority Matrix

| Recommendation | Impact | Effort | Priority Ratio | Quadrant |
|----------------|--------|--------|----------------|----------|
| Fix 347 redirect chains on blog posts | 9 | 2 | 4.5 | Quick Win |
| Migrate blog from subdomain to subdirectory | 10 | 8 | 1.25 | Strategic Project |
| Optimize top landing page (weak CTA, high exit rate) | 8 | 2 | 4.0 | Quick Win |
| Build 127 missing topic cluster pages | 8 | 10 | 0.8 | Strategic Project |
| Fix 23 broken internal links | 6 | 1 | 6.0 | Quick Win |
| Acquire backlinks to close DR gap (42 → 68) | 9 | 9 | 1.0 | Strategic Project |
| Update duplicate meta descriptions | 2 | 4 | 0.5 | Money Pit (Ignore) |

---

## 1-Page Implementation Roadmap

### Month 1: Quick Wins (High Impact, Low Effort)

**Goal:** Build momentum, prove SEO drives results.

**Fixes:**
1. Fix redirect chains on blog posts (Week 1)
2. Fix broken internal links on high-traffic pages (Week 1)
3. Optimize hero image on homepage (LCP fix) (Week 1)
4. Update top landing page CTA + reduce exit rate (Week 2)
5. Add internal links to high-traffic pages (Week 2-3)
6. Target 18 pages ranking #11-20 with on-page optimization (Week 3-4)

**Expected Impact:** +15-25% organic traffic by end of Month 2 (from quick wins compounding).

**Owner:** Marketing team (can execute without dev resources).

---

### Month 2-4: Strategic Projects (High Impact, High Effort)

**Goal:** Address structural issues that require cross-functional coordination.

**Projects:**
1. **Internal linking overhaul** (Month 2) – Redistribute link equity to high-traffic pages
2. **Content refresh strategy** (Month 2-3) – Update top 20 pages with fresh data, expand word count
3. **Topical cluster buildout** (Month 3-4) – Fill keyword gaps identified in Layer 4
4. **URL migration planning** (Month 4) – Prepare to move blog from subdomain to subdirectory (if applicable)

**Expected Impact:** +30-50% organic traffic by end of Month 6 (from structural improvements + content expansion).

**Owner:** Marketing lead (strategy) + Dev team (implementation) + Content team (writing).

---

### Month 5-6: Long-Term Bets (Transformational Impact)

**Goal:** Build competitive moats that competitors can't easily replicate.

**Projects:**
1. **Link acquisition campaign** (Month 5-6) – Close domain authority gap via PR, partnerships, digital PR
2. **Content hub creation** (Month 5-6) – Build comprehensive resource center on underserved topic
3. **Conversion optimization** (Month 6) – A/B test CTAs, page layouts, funnel paths on high-traffic pages

**Expected Impact:** +60-100% organic traffic by end of Month 12 (from compounding authority + content scale).

**Owner:** Marketing lead + External partners (PR agency, link building specialist, conversion consultant).

---

## Action Prioritization Matrix (Visual Template)

```
HIGH IMPACT
│
│   QUICK WINS                    STRATEGIC PROJECTS
│   ─────────────────────────────────────────────────
│   • Fix redirect chains          • Blog subdomain → subdirectory
│   • Broken internal links        • Topical cluster buildout
│   • Homepage LCP fix             • Link acquisition campaign
│   • Landing page CTA update      • Content refresh (top 20 pages)
│   • Internal linking strategy
│   • Optimize #11-20 pages
│
├───────────────────────────────────────────────────────► EFFORT
│
│   FILL-INS                       MONEY PITS
│   ─────────────────────────────────────────────────
│   • Minor anchor text cleanup    • Duplicate meta descriptions
│   • Footer link reduction        • URL length optimization
│   • Image alt text updates       • Minor URL structure changes
│
LOW IMPACT
```

---

## CTA Section: Next Steps

### You've Run the Audit. Now What?

**Option 1: DIY Implementation**
Use this roadmap to execute fixes with your internal team. Focus on Quick Wins first (Month 1). Build momentum before tackling Strategic Projects.

**Option 2: Get a Second Opinion**
Book a 30-minute strategy call at **b2bvic.com/calendar**. Bring your audit findings. I'll review your priority matrix and tell you what I'd do differently. No pitch, just feedback.

**Option 3: Hire for Implementation Oversight**
If your team needs accountability + strategic guidance, here's how we'd work together:

**One-Time Project: Audit + Roadmap ($12,500)**
- 4-layer audit (I run the audit, not your team)
- Executive presentation with priority matrix
- 1-page roadmap with 90-day milestones
- 3-week turnaround

**Ongoing Retainer: Implementation Oversight ($8K/month)**
- Month 1: Full audit + roadmap (same as one-time project)
- Month 2-6: Monthly 60-minute strategy sessions + async Slack access
- Quarterly progress audits (track what's working, adjust what's not)
- Living documentation in Notion (you own all deliverables)

**When to choose one-time vs. retainer:**
- Choose **one-time** if you have execution capacity but need strategic direction
- Choose **retainer** if you need ongoing accountability + course correction as you implement

**Discovery Call:**
30 minutes, free, no pitch. Book at **b2bvic.com/calendar**.

---

## Tool Stack Setup Guide

### Required Tools

**Free:**
- **Google Search Console** (essential)
- **Google Analytics 4** (essential)
- **Screaming Frog SEO Spider** (free up to 500 URLs; $259/year for unlimited)
- **PageSpeed Insights** (free)

**Paid (but worth it):**
- **Ahrefs** ($129/month Lite plan or $249/month Standard) – Best for backlink analysis + competitor research
- **Semrush** ($139/month Pro plan) – Alternative to Ahrefs, stronger keyword research tools
- **Screaming Frog Paid License** ($259/year) – Required for sites >500 pages

**Budget Alternative:**
If you can only afford one paid tool, choose **Ahrefs Lite ($129/month)**. It covers 80% of what you need for Layer 2-4.

---

### Setup Checklist

**Google Search Console:**
- [ ] Verify domain property (not just URL prefix)
- [ ] Submit XML sitemap
- [ ] Enable email alerts for critical issues
- [ ] Grant access to your team (Owner or Full permission)

**Google Analytics 4:**
- [ ] Set up GA4 property (if still on Universal Analytics, migrate now)
- [ ] Create custom Exploration for Landing Page → Conversion path analysis
- [ ] Set up conversion goals (form fills, demo requests, purchases)
- [ ] Link GSC to GA4 (for integrated reporting)

**Screaming Frog:**
- [ ] Download and install desktop app
- [ ] Configure for JavaScript rendering (Configuration → Spider → Rendering → JavaScript)
- [ ] Set custom extraction for specific data (e.g., Schema markup)
- [ ] Export templates for repeat audits (File → Export)

**Ahrefs:**
- [ ] Add your domain to Site Explorer
- [ ] Set up rank tracking for top 20 keywords
- [ ] Run Content Gap analysis vs. top 3 competitors
- [ ] Schedule weekly backlink alerts

---

## Audit Execution Checklist (4-Hour Timeline)

**Hour 1: Layer 1 – Technical Foundation**
- [ ] 0:00-0:20 – Screaming Frog crawl + analysis
- [ ] 0:20-0:35 – Google Search Console review (Coverage, Core Web Vitals)
- [ ] 0:35-0:50 – Core Web Vitals sampling (5-10 pages)
- [ ] 0:50-1:00 – Prioritization + scoring

**Hour 2: Layer 2 – Information Architecture**
- [ ] 1:00-1:20 – URL structure analysis
- [ ] 1:20-1:40 – Internal linking audit
- [ ] 1:40-1:55 – Topical clustering review
- [ ] 1:55-2:00 – Prioritization + scoring

**Hour 3: Layer 3 – Content Performance**
- [ ] 2:00-2:20 – Traffic distribution analysis (GSC + GA4)
- [ ] 2:20-2:40 – Conversion path review (GA4 Explorations)
- [ ] 2:40-2:55 – SERP feature capture analysis (Ahrefs/Semrush)
- [ ] 2:55-3:00 – Prioritization + scoring

**Hour 4: Layer 4 – Competitive Moat Analysis**
- [ ] 3:00-3:20 – Entity coverage gap analysis
- [ ] 3:20-3:40 – Topical authority assessment
- [ ] 3:40-3:55 – Backlink profile comparison
- [ ] 3:55-4:00 – Prioritization + scoring

**Post-Audit (30 minutes):**
- [ ] Consolidate all Layer 1-4 outputs into Priority Matrix
- [ ] Create 1-page roadmap (Month 1 Quick Wins, Month 2-4 Strategic Projects)
- [ ] Schedule executive presentation (if needed)

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: Going Too Deep on Layer 1 (Technical)

**What happens:**
You spend 90 minutes in Screaming Frog, documenting every broken link and duplicate title tag. You run out of time for Layers 2-4.

**How to avoid:**
Set a timer for each layer. If you're not done at 60 minutes, stop and move on. Capture the big issues (redirect chains, indexation gaps, Core Web Vitals failures) and ignore the noise (minor meta tag duplication, small broken links).

**Rule:** If fixing it wouldn't move traffic by >5%, it's noise.

---

### Pitfall 2: Skipping Layer 4 (Competitive Moat) for Small Sites

**What happens:**
You're auditing a 500-page site. You think, "We don't need competitive analysis yet." You skip Layer 4. Six months later, you realize competitors have 2x your content volume and you're playing catch-up.

**How to avoid:**
Even small sites need competitive context. Spend 30 minutes (not 60) on Layer 4 for sub-1,000 page sites. Identify the top 3 keyword gaps and the domain authority gap. That's enough to inform content strategy.

**Rule:** Layer 4 time scales with site size. 500-page site = 30 min. 5,000-page site = 60 min. 50,000-page site = 90 min.

---

### Pitfall 3: Treating All Recommendations Equally

**What happens:**
You finish the audit with 40 recommendations. You present all 40 to your team. They're paralyzed. Nothing ships.

**How to avoid:**
Cap recommendations at 15 total. Force yourself to ruthlessly prioritize. If you have 40 issues, rank them by Priority Ratio (Impact / Effort). Present only the top 15. Archive the rest.

**Rule:** Maximum 15 recommendations. If you can't choose, your prioritization is broken.

---

### Pitfall 4: Ignoring Implementation Constraints

**What happens:**
You recommend migrating the blog from subdomain to subdirectory. Your dev team says it requires 6 weeks of engineering work and breaks the CMS. The recommendation dies in backlog hell.

**How to avoid:**
Before finalizing recommendations, ask: "Who has to execute this?" and "What resources do they need?" If the answer is "6 weeks of dev time we don't have," move it to Q3 or find a lower-effort alternative.

**Rule:** Every recommendation must include Owner + Resource Requirement. If you can't name both, don't recommend it.

---

## Frequently Asked Questions

**Q: Can I use this framework for sites under 500 pages?**
A: Yes, but shorten the time boxes. For a 200-page site, you can complete all 4 layers in 2 hours instead of 4. Skip the competitive moat analysis (Layer 4) if you're early-stage and focus on technical + IA.

**Q: What if I don't have access to Ahrefs or Semrush?**
A: You can run Layers 1-3 with free tools (Screaming Frog free version, GSC, GA4). For Layer 4 (competitive moat), use free alternatives like Ubersuggest (limited data) or manually review competitor sites. You'll miss backlink data, but you can still identify content gaps.

**Q: How often should I run this audit?**
A: Quarterly for active SEO programs. Annually for maintenance-mode sites. If you're making major changes (site migration, URL restructure, large content pushes), run it before and after to measure impact.

**Q: What if my audit reveals 50+ high-impact issues?**
A: You're not prioritizing ruthlessly enough. Re-score using the Priority Ratio formula (Impact / Effort). Only present the top 15. The other 35+ issues can be addressed in future quarters, but don't overwhelm your team now.

**Q: Should I hire an agency to run this audit instead?**
A: If you have the budget ($12K-$20K) and want comprehensive analysis, yes. But agencies optimize for deliverable weight (400-page PDFs) because it justifies the fee. If you want action clarity instead of analysis depth, run this framework yourself or hire a fractional consultant for oversight ($8K/month retainer or $12.5K one-time project).

---

## About the Author

**Victor Valentine Romo**
Fractional SEO Consultant | B2B Vic

I've run this 4-hour audit framework on 300+ enterprise sites, including:
- Global eDiscovery firm ($1.2B revenue, 50,000+ indexed pages)
- Mid-market real estate brokerage (2,400 listings, 147 monthly leads from organic)
- B2B SaaS platforms (5,000-15,000 pages, information architecture overhauls)

The pattern is always the same: Agencies deliver comprehensive audits that never get implemented. Teams need ruthless prioritization, not exhaustive analysis.

This template is what I actually use in paid engagements. No gatekeeping, no placeholders. If you get stuck, book a strategy call at **b2bvic.com/calendar**.

Victor
b2bvic.com

---

**End of Template**