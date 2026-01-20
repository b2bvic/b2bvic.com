---
domain:: b2bvic.com
status:: concept
category:: Professional Services
monetization:: Fractional consulting + implementation retainers
priority:: 3
---

# B2B Vic

## Concept
Personal brand domain serving as the direct-to-Victor consulting funnel for enterprise SEO and AI implementation services. While Scale With Search handles education/courses/content, b2bvic.com becomes the high-touch professional services landing page for decision-makers who need Victor's expertise embedded in their operations. This addresses the gap between "I learned something from SWS" and "I need Victor on retainer."

## Positioning
Scale With Search teaches the system. B2B Vic implements it in your business.

SWS is content-forward, education-first, course-driven. B2B Vic is consultation-forward, implementation-first, retainer-driven. SWS answers "how does this work?" B2B Vic answers "can you make this work for us?"

**Differentiation from competitors:** Most fractional SEO consultants either operate at agency scale (diluted attention) or sell audits-as-products (no implementation). B2B Vic positions as embedded fractional expertise—10 hours/month, capped clients, systems-first, AI-native workflow. Not "hire an agency," not "buy an audit," but "rent Victor's brain and execution capacity."

## Target Audience
**Primary:** Mid-market B2B companies ($5M-$50M revenue) with in-house marketing teams that lack senior SEO/AI leadership. Industries: SaaS, professional services, manufacturing, real estate technology.

**Secondary:** Enterprise organizations ($50M+) needing fractional AI implementation guidance for marketing ops, particularly local LLM deployment and content production systems.

**Pain points:**
- Marketing team produces content but SEO underperforms (no information architecture)
- Spent $15K+ on agency audits that collect dust (no implementation partner)
- Aware AI should transform operations but don't know where to start (analysis paralysis)
- Burned by SEO agencies that over-promise and under-document (trust gap)
- Need senior-level strategic guidance without $200K+ salary commitment (budget constraints)

## Monetization Model
**Primary:** Fractional consulting retainers
- $8,000/mo for 10 hours (effective $800/hr, positioned as $200/hr × 4 weeks)
- Max 5 clients at once (50 hours/month total capacity)
- 6-month minimum commitment
- Includes: monthly strategic session, async Slack/email access, implementation oversight, quarterly deep-dive audit

**Secondary:** One-time implementation projects
- Enterprise SEO audit + roadmap: $12,500 (20-25 hours)
- AI content system buildout: $15,000 (custom local LLM deployment + training)
- Information architecture overhaul: $10,000 (site restructure + internal linking)

**Tertiary:** Workshops/speaking
- Half-day AI implementation workshop: $7,500
- Full-day SEO strategy intensive: $12,000
- Conference speaking (paid): $5,000-$10,000

Revenue target: 3-4 retainer clients ($24K-$32K/mo) + 1-2 project clients per quarter ($20K-$30K/quarter) = $312K-$504K annual potential at 30-40 hours/month consulting load.

## Content Strategy
### Pillar Topics
1. **Fractional SEO Leadership** — Why the retainer model beats agencies for mid-market
2. **AI Implementation for Marketing Ops** — Local LLM deployment, content production automation
3. **Enterprise Information Architecture** — Case studies from 300+ audits
4. **Real Estate SEO Systems** — Niche authority from JAG experience
5. **Anti-Agency Positioning** — Transparency, documentation, no black boxes

### Content Types
- **Case studies (3-5 deep):** Anonymized results from JAG, Limitless, past enterprise audits. Focus on before/after metrics, process documentation, strategic decisions. These are trust-builders.
- **Implementation guides (short-form):** "How I audit a 5,000-page site in 4 hours" — demonstrate competence, not gatekeep methodology.
- **Anti-patterns library:** "Why your $20K agency audit failed" — position against common industry failures.
- **Tool stack breakdowns:** Obsidian workflows, Claude integration, local LLM setup. Show the behind-the-scenes.
- **Monthly retainer transparency report (public sample):** What 10 hours bought a client last month. Builds trust in the model.

Homepage: Single long-form sales page. No blog index, no nav maze. Just the pitch, case studies, calendar link.

## Technical Stack
**Hosting:** Cloudflare Pages (free tier, fast, simple deploy)
**CMS:** Markdown + static site generator (Hugo or 11ty) — matches existing Obsidian workflow, version control via Git
**Design:** Custom Tailwind build, brutalist aesthetic (aligns with SWS brand), mobile-first
**Booking:** Calendly embed (free tier) for discovery calls
**Email:** Forwarder to primary Gmail, reply from victorvalentineromo@gmail.com until volume justifies GSuite
**Analytics:** Plausible (privacy-respecting, lightweight) or Cloudflare Web Analytics (free)
**Key integrations:**
- Stripe (payment links for project invoices)
- Slack (async client communication)
- Loom (async video updates for retainer clients)

No WordPress. No complex CMS. Content lives in `/03 - SWS/Personal Builds/b2bvic.com/content/` as Markdown, deployed via Git push.

## Competitive Landscape
| Competitor | Strength | Weakness | Our Angle |
|-----------|----------|----------|-----------|
| Traditional SEO agencies (Victorious, SEO Inc) | Brand recognition, case studies at scale | Opaque pricing, junior execution, slow communication | Transparent retainer, senior-only execution, async-first |
| Fractional CMO networks (Chief, Focalize) | Established matching model | Generalist positioning, variable quality, high markup | Specialist depth (SEO+AI), proven methodology, direct access |
| AI consultancies (IBM, Accenture AI) | Enterprise credibility, implementation muscle | Bloated pricing ($500K+ projects), slow, disconnected from marketing ops | Lean implementation, marketing-native AI use cases, $15K not $500K |
| Audit-only shops (Detailed.com, Siege Media) | Structured deliverables, productized | No implementation follow-through, static PDFs | Audit + retainer option, living documentation, ongoing oversight |
| Freelance SEO consultants (Upwork, indie) | Low cost, flexible | Inconsistent quality, no systems, over-committed | Documented systems (SWS proof), capped clients, premium positioning |

**Positioning statement:** The only fractional SEO+AI consultant who documents his entire methodology publicly (via Scale With Search) and limits clients to guarantee execution quality.

## MVP Scope
**Version 1.0 (launch-ready):**
- Single-page site: Hero → Problem/Solution → Case Studies (3) → Services (retainer + projects) → About/Credentials → Calendar embed
- 3 case studies (JAG database optimization, Limitless Chiro ATX, enterprise eDiscovery audit)
- Services page with clear pricing
- Calendly integration for discovery calls
- Contact form (Formspree or Cloudflare Workers)
- Professional headshot + short bio
- Mobile-responsive, sub-2s load time

**Not in MVP:**
- Blog (content lives on SWS, link over)
- Resources/downloads (SWS handles lead magnets)
- Client portal (Slack suffices until 5+ retainer clients)
- Video testimonials (launch with text quotes)
- Advanced analytics/tracking (Cloudflare free tier enough)

**Launch checklist:**
- [ ] Register domain (if not already owned)
- [ ] Write case studies (anonymize sensitive data)
- [ ] Design single-page layout
- [ ] Set up Calendly
- [ ] Configure email forwarding
- [ ] Deploy to Cloudflare Pages
- [ ] LinkedIn announcement post
- [ ] Update SWS site to link to b2bvic.com for consulting inquiries

## Growth Levers
1. **LinkedIn organic content** — Cross-post SWS insights, tag b2bvic.com for consulting CTA. LinkedIn is where B2B decision-makers live.
2. **Referral program for SWS audience** — "Took the course, need implementation help?" → 10% referral fee to SWS affiliates who send consulting clients.
3. **Guest podcast appearances** — SEO/AI podcasts, mention b2bvic.com for consulting. Scalable awareness.
4. **Case study SEO** — Each case study targets "[industry] + fractional SEO consultant" longtail. E.g., "real estate SEO consultant" from JAG work.
5. **Partnerships with fractional CMO networks** — Position as the SEO+AI specialist they bring in for client engagements. Revenue share model.
6. **SWS course upsell** — Every SWS course mentions "need help implementing? See b2bvic.com" in final module.

**Anti-growth:** No paid ads initially. No cold outbound. Let inbound + referrals fill first 3 retainer slots, then evaluate paid channels.

## Risk Factors
- **Time allocation:** Consulting competes with JAG (8am-5pm) and SWS course business. Retainers must be async-heavy to fit 7pm-10pm availability windows.
- **Client concentration:** If 3-4 retainer clients = $30K/mo, losing one client = 25-30% revenue drop. Mitigate with 6-month minimums and pipeline development.
- **Reputation bleed:** If SWS is seen as "just a consulting funnel," education brand dilutes. Keep boundaries clear: SWS = learn, B2B Vic = hire.
- **Scope creep:** Retainer model risks "10 hours becomes 15 hours." Strict time tracking, monthly reports, boundaries in contract.
- **Delivery quality at scale:** If retainer clients hit 5, that's 50 hours/month. At current JAG + SWS load, unsustainable. Cap at 3 clients until JAG role changes or SWS revenue replaces salary need.

**Mitigations:**
- Contract templates with clear scope boundaries
- Time-tracking from day one (Toggl)
- Monthly retainer reports (transparency = accountability)
- Waitlist once 3 clients active (scarcity positioning)

## Next Actions
- [ ] Audit existing Victor-focused content (LinkedIn, SWS About page) for case study raw material
- [ ] Draft 3 case studies (JAG, Limitless, enterprise audit) with metrics + anonymization
- [ ] Write single-page site copy (2,500-3,500 words, SSO framework)
- [ ] Design wireframe/mockup (Figma or paper sketch)
- [ ] Choose static site generator (Hugo vs 11ty)
- [ ] Register domain if not owned (confirm availability)
- [ ] Set up Git repo (`/03 - SWS/Personal Builds/b2bvic.com/`)
- [ ] Create `/content/`, `/assets/`, `/layouts/` folder structure
- [ ] Build MVP site locally
- [ ] Deploy to Cloudflare Pages
- [ ] Configure Calendly + email forwarding
- [ ] Soft launch: LinkedIn post + SWS site footer link
- [ ] Track inbound inquiries (simple spreadsheet: source, date, outcome)
- [ ] After 5 discovery calls, iterate messaging based on objections/questions

**Timeline estimate:** 2-3 weeks to MVP if prioritized. 4-6 hours for case studies, 6-8 hours for site build/deploy, 2 hours for integrations.

**Success metric (90 days post-launch):** 1 signed retainer client ($8K/mo) or 2 project clients ($20K+ combined). If hit, double down. If miss, revisit positioning or pause to focus on SWS course launch.
