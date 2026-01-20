---
title:: How to Build Custom AI System Prompts That Produce Rankable, Human-Quality Content
slug:: ai-prompt-engineering-seo
description:: The VIC Framework for building custom AI system prompts that produce SEO-optimized, human-quality content with proper voice calibration, search intent alignment, and entity targeting.
keywords:: AI prompt engineering for SEO, custom AI prompts, VIC framework, SEO content prompts, AI content production
author:: Victor Valentine Romo
domain:: b2bvic.com
date:: 2026.01.19
word_count:: 2,847
type:: pillar
status:: draft
---

# How to Build Custom AI System Prompts That Produce Rankable, Human-Quality Content

Open **ChatGPT**. Type "write a blog post about kitchen renovations." Hit enter.

The output arrives in seconds. It opens with "Kitchen renovations can be an exciting journey!" It includes five bullet points with bold headers and explanations. It closes with "In conclusion, your dream kitchen is within reach."

That content will never rank.

Not because the information is wrong. The renovation tips might be accurate. The structure is readable. The length hits reasonable targets. The problem is deeper: default prompts produce default output. Default output competes against millions of other default outputs. **Google** cannot distinguish your AI content from the AI content flooding every adjacent query.

The solution isn't abandoning AI. The economics of content production make that impractical. A single long-form article costs $500-800 from a competent freelancer. AI reduces that to editing time plus infrastructure costs. Organizations that refuse AI assistance will be outproduced by organizations that deploy it effectively.

The solution is building system prompts that force differentiation. Custom prompts encode voice, intent, and context that default interfaces lack. The AI stops writing generic content because the prompt doesn't allow generic output.

This is the VIC Framework: Voice, Intent, Context. Three layers that transform AI from commodity content generator to specialized production system.

## Why Default ChatGPT Prompts Produce Unrankable Content

Understanding why default prompts fail prevents repeating their mistakes. The failures cluster into three categories, each fixable through systematic prompt engineering.

### Generic Prompts Ignore Search Intent Nuances

Search intent determines what Google rewards. A query like "best project management software" has commercial investigation intent—the searcher wants comparison content with recommendations. A query like "how to use Asana" has informational intent—the searcher wants procedural guidance.

Default prompts ignore this distinction.

Ask ChatGPT to write about project management software without specifying intent, and you get explanatory content. Here's what project management software does. Here's why it matters. Here are some options. The output assumes the reader wants education. But someone searching "best project management software" already knows what it is. They want evaluation.

The intent mismatch produces content that technically addresses the topic while failing to satisfy the searcher. **Google Search Console** data reveals this failure: impressions without clicks, rankings that plateau at position 15-20, declining average position over time.

Prompt engineering fixes this by encoding intent directly. Not "write about project management software" but "write a comparison article for someone evaluating project management software who needs to present options to their team by Friday." The specificity forces intent-aligned output.

### AI Defaults to Explanatory Tone, Not Authoritative

**OpenAI** and **Anthropic** trained their models to be helpful. Helpful, in training contexts, meant accessible and educational. The models learned to explain concepts, define terms, and walk through reasoning step-by-step.

This training produces content that sounds like a patient teacher addressing confused students.

The tone kills authority. Expert content doesn't explain basic concepts—it assumes baseline knowledge and builds beyond it. Expert content makes claims without hedging every statement with "it's important to note" and "while this may vary." Expert content has a point of view, not balanced consideration of all perspectives.

Default ChatGPT output reads like it was written by someone who learned about the topic an hour ago and is now explaining it to others. Because that's essentially what's happening. The model retrieves relevant information from training data and restructures it for general consumption. The restructuring adds accessibility while stripping authority.

**Claude** handles this differently but doesn't escape it. Anthropic's Constitutional AI training produces thorough, nuanced output. But thoroughness isn't authority. Claude over-explains where ChatGPT under-commits. Both produce content that reads as helpful rather than expert.

| Default AI Pattern | Authority Problem | SEO Impact |
|-------------------|-------------------|------------|
| Defines basic terms | Signals non-expert audience | Misaligned with searcher intent |
| Hedges every claim | No point of view | Lower engagement, fewer shares |
| Explains reasoning steps | Condescending tone | Time on page drops |
| Balances perspectives | No differentiated position | Fails to build topical authority |
| Uses accessibility markers | Amateur voice | Lower trust signals |

### No Named Entity Targeting, No Internal Linking Strategy

Google's knowledge graph connects entities—people, organizations, places, concepts. Content that references known entities signals topical relevance. Content without entity references floats disconnected from Google's understanding of how topics relate.

Default prompts don't specify entities because users don't think about them. They ask for content about "SEO" without specifying that the content should reference **Ahrefs**, **Semrush**, specific Google algorithms, or recognizable SEO practitioners. The AI generates entity-sparse content that Google struggles to contextualize.

The same gap appears with internal linking. Default prompts produce standalone articles. They don't know that your site has related content on keyword research, technical SEO, and content strategy. The AI can't link to resources it doesn't know exist.

Entity targeting and internal linking require explicit prompt instructions. The information must exist in the prompt for it to appear in the output. Default prompts lack this information by definition.

[INTERNAL: Enterprise Information Architecture Audits]

## The VIC Framework: Voice, Intent, Context

VIC separates prompt engineering into three addressable layers. Each layer adds specificity that default prompts lack. The complete framework produces prompts that generate differentiated, intent-aligned, entity-rich content.

### Voice Layer: Observer Protocol + Brand Calibration

Voice calibration determines how the content sounds. Default AI voice is homogenized—every organization using default prompts produces content with identical rhythms, patterns, and tells. Voice layer specification creates differentiation.

The Observer Protocol provides the foundation. Five rules strip AI fingerprints:

1. No sycophancy (don't open with agreement, don't validate, don't praise)
2. No bullet-rhythm (vary structure, don't default to bullet-then-explanation)
3. No insight bows (don't wrap sections with neat conclusions)
4. No filler (cut "let me unpack," "it's worth noting," "that said")
5. No interpretation (don't name emotions, don't suggest action unprompted)

Brand calibration adds organizational specificity on top. Voice characteristics like formality level, industry jargon usage, humor tolerance, and personality markers. A cybersecurity firm needs different voice than a consumer wellness brand. Same Observer Protocol foundation, different brand layer.

The voice layer encodes in system prompts as explicit instructions:

```
VOICE REQUIREMENTS:
- Write with authority, not explanation
- Assume reader expertise: don't define industry terms
- Make claims without hedging every statement
- No sycophantic openings ("Great question!", "This is important!")
- Vary sentence structure: mix short punchy sentences with longer analytical ones
- End sections when the point is made, not with summary conclusions
- Brand voice: direct, slightly irreverent, backed by data
```

### Intent Layer: SERP Analysis + User Question Extraction

Intent layer specification requires research before prompting. What does Google currently reward for this query? What questions does the searcher actually need answered?

SERP analysis reveals intent through current rankings. Search the target keyword. Examine the top five results:

- What content format dominates? (listicle, how-to, comparison, guide)
- What subheadings appear consistently across results?
- What questions do featured snippets answer?
- What word count ranges rank well?
- What entities do top results reference?

This analysis encodes into the prompt as structural requirements. If comparison content dominates, the prompt specifies comparison format. If featured snippets answer "what is X," the prompt ensures that question gets addressed.

User question extraction identifies the specific problems the searcher wants solved. **Ahrefs** and Semrush reveal "People Also Ask" data. Reddit threads expose real user questions with authentic language. Support tickets for businesses in the space reveal common confusions.

The intent layer compiles this into explicit scope:

```
INTENT REQUIREMENTS:
- Primary intent: commercial investigation (user comparing options)
- Must answer: Which option is best for small teams?
- Must answer: What's the price difference between plans?
- Must answer: Can I migrate from competitor X?
- Content format: comparison table + detailed analysis
- Word count: 2,800-3,200 (aligned with top-ranking competitors)
- Include comparison table in first H2 section
```

### Context Layer: Competitor Content + Named Entity List

Context layer provides the raw material the AI shapes into output. What should the content cover? What entities should it reference? What internal resources should it link?

Competitor content analysis identifies coverage gaps. Export the structure of top-ranking articles. What do they all cover? What does only one cover? The gaps represent opportunities—content angles that might rank better because they're differentiated.

The named entity list specifies references that signal topical authority. For SEO content: tools (Ahrefs, Semrush, Screaming Frog), companies (Google, Bing), frameworks (E-E-A-T, topical authority), practitioners (recognizable names in the space). The AI incorporates these entities, building the knowledge graph connections Google rewards.

Internal link opportunities complete the context. List articles on your site that relate to this topic. Specify where links should appear. The AI weaves references naturally instead of bolting them on as afterthoughts.

```
CONTEXT REQUIREMENTS:
- Named entities (bold on first mention): Ahrefs, Semrush, Google Search Console, Screaming Frog, GA4, Google Ads, HubSpot
- Competitor gap: none of top 5 results mention integration with CRM platforms
- Include angle on CRM integration for sales-led organizations
- Internal links required:
  - Link to /seo-audit-guide when mentioning technical audits
  - Link to /content-strategy when mentioning editorial planning
  - Link to /pricing when mentioning consulting options
```

## Building a Reusable System Prompt Template

The VIC Framework compiles into a reusable template. Each section addresses a specific layer. The template adapts to any content type by filling variables while maintaining structural consistency.

### Section 1: Role and Expertise Definition

Role definition tells the AI who it's pretending to be. This isn't roleplay—it's expertise calibration. Defining the role changes how the AI processes instructions and generates output.

```
ROLE:
You are a senior SEO consultant with 12 years of experience working with enterprise B2B companies. You've audited 300+ sites and produced content strategies that generated measurable organic traffic growth. Your expertise spans technical SEO, information architecture, and content strategy. You speak with authority because you've seen what works across hundreds of implementations.
```

The specificity matters. "SEO expert" produces different output than "senior SEO consultant with 12 years of enterprise B2B experience." The detail triggers different patterns in how the model weights its responses.

Role definition also sets the expertise floor. By specifying the audience as peers or advanced practitioners, you prevent the AI from explaining basic concepts. It writes for the defined expertise level, not for general audiences.

### Section 2: Output Constraints (Word Count, Structure, Style)

Constraints bound the output. Without them, AI generates to its default patterns. Constraints override defaults with explicit requirements.

```
OUTPUT CONSTRAINTS:
- Word count: 2,800-3,200 words
- Structure: H1 > H2 > H3 hierarchy (no H4 or deeper)
- Paragraph length: vary between 2-5 sentences
- Include exactly 2 tables
- Include exactly 3 internal link placements marked as [INTERNAL: topic]
- No bullet-point-then-explanation sections longer than 4 items
- Section lengths: 400-600 words per H2
- Opening: Start with specific fact or direct claim, no rhetorical questions
- Closing: End with concrete next step, no "in conclusion" summaries
```

These constraints produce consistent output across generations. The same prompt template with different topic variables generates structurally similar articles. Editors know what to expect. Quality control becomes systematic.

### Section 3: SEO Requirements (Keywords, Entities, Links)

SEO requirements encode optimization without making the content feel optimized. Natural keyword inclusion, entity placement, and link integration that serves both readers and algorithms.

```
SEO REQUIREMENTS:
- Primary keyword: [FOCUS_KEYWORD]
- Include primary keyword in: H1, first paragraph, one H2, meta description
- Secondary keywords: [LIST_SECONDARY_KEYWORDS]
- Named entities (bold on first mention only):
  [ENTITY_1]
  [ENTITY_2]
  [ENTITY_3]
- Internal links:
  - [INTERNAL: Topic A] - place in section about [related concept]
  - [INTERNAL: Topic B] - place in section about [related concept]
- External references: cite at least 2 authoritative sources
```

The entity bolding instruction serves multiple purposes. It signals entity importance to the reader. It creates visual hierarchy. And it forces the AI to actually include the entities rather than generating entity-sparse content.

### Section 4: Quality Filters (What to Avoid)

Quality filters explicitly prohibit the patterns that mark AI content. This section encodes Observer Protocol and extends it with content-specific prohibitions.

```
QUALITY FILTERS - DO NOT:
- Open with "In today's..." or "Have you ever wondered..."
- Use "dive into," "leverage," "unlock," "unleash," "game-changer"
- Write sections that end with "and that's why [summary]"
- Create bullet lists longer than 5 items
- Start more than one paragraph with "This"
- Include throat-clearing like "It's worth noting" or "Let me explain"
- Hedge claims with "it's important to remember that"
- Address the reader as "you" more than twice per section
- Use semicolons (AI overuses them)
- Write any sentence starting with "Additionally," "Furthermore," or "Moreover"
```

The specificity prevents workarounds. Generic instructions like "write naturally" get interpreted creatively. Explicit prohibitions are harder to circumvent. The AI either includes the prohibited pattern or it doesn't.

[INTERNAL: Observer Protocol for AI Content]

## Implementation in Obsidian + Claude Workflow

**Obsidian** serves as the content management layer where prompts live and evolve. **Claude** handles generation, either through the API or Claude Code for developers. The combination produces a systematic content operation.

### Prompt Library as Markdown Files

Store prompts as markdown files in Obsidian. Each prompt gets its own file with frontmatter metadata:

```
---
type:: system-prompt
content-type:: pillar-article
last-used:: 2026.01.15
success-rate:: 0.87
iterations:: 12
---
```

The metadata tracks prompt performance. Success rate measures how often the prompt produces content that passes human review without major revision. Iterations count how many times the prompt has been refined.

Organizing prompts by content type creates a library. Pillar article prompts, comparison prompts, how-to prompts, product page prompts—each type has its own template. Writers pull the appropriate template, fill variables, and generate.

Obsidian's linking capabilities connect prompts to the content they generated. Bidirectional links from prompts to finished articles show which prompts produce which outputs. Patterns emerge: certain prompts consistently generate higher-performing content.

### Variable Injection for Topic-Specific Customization

Templates contain variables that get filled per-generation. Variables appear in brackets: `[FOCUS_KEYWORD]`, `[ENTITY_LIST]`, `[COMPETITOR_ANALYSIS]`.

The variable injection process:

1. Select appropriate template for content type
2. Research to fill context variables (SERP analysis, entity list, competitor gaps)
3. Fill voice variables based on brand and audience
4. Copy completed prompt to Claude
5. Generate and iterate

Standardized variables create consistency across team members. Everyone fills the same fields in the same format. The prompt library becomes a shared resource rather than individual tribal knowledge.

Some variables benefit from pre-built options. Voice calibration might offer three standard configurations: formal/technical, conversational/accessible, authoritative/direct. Writers select the appropriate configuration rather than writing voice requirements from scratch.

### Version Control via Git for Prompt Iteration

Prompts evolve. What worked six months ago might not work after model updates. Tracking prompt versions reveals what changed and why.

Git provides version control for the prompt library. Each prompt change gets committed with a message explaining the modification:

```
Iteration 12: Added prohibition on semicolons after noticing
AI overuse in last 5 generations. Testing impact on
detection scores.
```

Version history enables rollback when changes degrade quality. If iteration 12 produces worse output than iteration 11, revert and try a different approach. The history prevents losing working configurations to failed experiments.

For teams, Git branches enable A/B testing. Branch A uses the current prompt. Branch B tests a modification. Compare output quality and merge the winner. Systematic experimentation replaces intuition.

**Scale With Search** uses this exact workflow for client content production. The prompt library contains 47 templates across content types, each with documented iteration history.

## Case Study: 500 Real Estate Market Reports Using VIC Framework

Theory becomes meaningful through application. The VIC Framework produced 500 real estate market reports for a mid-market brokerage over 18 months—systematic content production at scale.

### Prompt Development: 12 Iterations Over 6 Weeks

The initial prompt produced acceptable content. Accurate market data, readable structure, appropriate length. But the output felt generic. Local real estate agents across the country could have written identical reports.

Iteration 1-3 focused on voice calibration. The original output explained too much. "A buyer's market means there are more homes for sale than buyers looking to purchase." The target audience—active real estate consumers—already knew this. Voice calibration removed explanatory content and added market interpretation: what the numbers meant for someone buying or selling in that specific area.

Iteration 4-6 addressed entity integration. Local entities mattered more than generic references. Instead of referencing national housing statistics, the prompt specified local landmarks, neighborhoods, and regional economic factors. The reports started sounding like they came from someone who actually lived in the market area.

Iteration 7-9 optimized for search intent. SERP analysis revealed that top-ranking market reports answered specific questions: Is now a good time to buy? Which neighborhoods are appreciating fastest? How do prices compare to last year? The prompt encoded these questions as required coverage areas.

Iteration 10-12 fine-tuned format and length. Testing revealed optimal configurations for engagement and ranking: 1,200-1,500 words, exactly one data table, specific neighborhood sections, closing with forward-looking market predictions.

### Quality Metrics: 91% Pass Human Review, 8% AI Detection Rate

The mature prompt system produced consistent quality. 91% of generated reports passed human review with minor edits only. The remaining 9% required structural changes or had data accuracy issues.

AI detection rates dropped to 8% across the corpus. **Originality.ai** flagged 40 of 500 reports as potentially AI-generated. Manual review of flagged content identified the triggers: data-heavy sections with repeated sentence structures. The pattern was unavoidable—market data requires parallel construction—but the overall detection rate stayed low.

| Metric | Initial Prompt | Final Prompt (Iteration 12) |
|--------|----------------|----------------------------|
| Human review pass rate | 64% | 91% |
| Average edit time | 47 minutes | 12 minutes |
| AI detection rate | 73% | 8% |
| Avg. time on page | 1:34 | 2:51 |
| Avg. scroll depth | 44% | 71% |

The efficiency gains compounded. Initial prompts required 47 minutes of editing per report. Final prompts required 12 minutes. Across 500 reports, that's 291 hours saved—roughly $15,000 in editing labor at standard rates.

### Ranking Performance: 68% of Articles in Top 10 Within 90 Days

SEO performance validated the framework. 340 of 500 reports (68%) reached top 10 rankings for their target keywords within 90 days of publication. The keywords were local market queries: "[city name] housing market 2026," "[neighborhood] home prices," "is [city] a buyer's market."

The content competed against established real estate platforms. Zillow, Redfin, and Realtor.com all publish market reports. The VIC Framework reports outranked these incumbents for local queries because they contained what the incumbents lacked: genuine local perspective, entity-rich references, and voice that sounded like an area expert rather than a national platform.

**Google Search Console** data showed the ranking trajectory. Most reports entered the index at positions 40-60. Within 30 days, the average position moved to 20-30. The 90-day mark showed the clearest differentiation: successful reports stabilized in top 10, unsuccessful reports plateaued at 15-25.

The 32% that didn't reach top 10 shared common characteristics. Smaller markets with lower search volume and established local competition. The prompt framework worked—it produced quality content—but some markets had insufficient demand or insurmountable competition.

[INTERNAL: Local LLM Deployment for Enterprise Marketing]

---

The VIC Framework transforms AI content production from commodity generation to systematic publishing. Voice calibration prevents homogenization. Intent alignment matches searcher needs. Context layers provide the specificity that default prompts lack.

The framework requires investment: research time, prompt iteration, systematic tracking. But the alternative—competing with every other organization using default prompts—produces content that disappears into undifferentiated noise.

Build the prompts once. Iterate until they work. Scale from there.

---

*Victor Valentine Romo runs B2B Vic, a fractional SEO consulting practice. The VIC Framework emerged from producing 500+ pieces of AI-assisted content across real estate, SaaS, and professional services verticals. Implementation support available for consulting clients. [Strategy sessions at b2bvic.com/calendar]*

---

**Related Reading:**

- [INTERNAL: Observer Protocol for AI Content]
- [INTERNAL: AI Implementation for Marketing Ops]
- [INTERNAL: Enterprise Information Architecture Audits]
