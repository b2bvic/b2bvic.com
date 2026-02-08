---
title:: Jim Allen Group SEO Case Study: Database Cleanup to Organic Growth
description:: How systematic CRM hygiene, tag standardization, and follow-up automation transformed lead velocity and agent productivity for a Raleigh real estate team.
focus_keyword:: real estate CRM case study
category:: b2b-strategy
author:: Victor Valentine Romo
date:: 2026.02.08
---

# Jim Allen Group SEO Case Study: Database Cleanup to Organic Growth

Real estate teams drown in CRM entropy. **The Jim Allen Group** — a Coldwell Banker Howard Perry & Walston affiliate in Raleigh, NC — operated with 15,000+ contacts across 14 agents, but their **Follow Up Boss** instance had degraded into statistical noise. Duplicate tags, incomplete contact data, and inconsistent lead source attribution made pipeline forecasting impossible.

The engagement started as database cleanup. It evolved into a complete operational overhaul that touched lead routing, agent accountability, and follow-up cadence. Within 90 days, the team eliminated 11 duplicate tag variations, standardized lead source tracking across three inbound channels, and implemented a "Get to Zero" smart list system that surfaced actionable leads within 48 hours of intake.

This case study dissects the diagnostic, remediation, and system-building phases. The methods transfer to any B2B operation wrestling with CRM decay, incomplete contact data, or lead velocity bottlenecks.

## The Problem: CRM Entropy at Scale

JAG's Follow Up Boss database accumulated six years of contact data without governance. Agents created tags ad-hoc. Lead sources got entered inconsistently (sometimes "Zillow," sometimes "zillow.com," sometimes "Zillow Premier Agent"). Contact ownership transferred between agents without updating records, leaving hundreds of leads orphaned.

The symptoms:

**Tag proliferation** — 47 active tags, many duplicates. "Hot Prospect" vs. "Hot-Prospect" vs. "HotProspect." "Nurture" vs. "Long-Term Nurture" vs. "90-Day Nurture." Each variation fragmented the database, making smart list creation unreliable.

**Incomplete contact data** — 40% of contacts missing email addresses. 25% missing phone numbers. Without complete contact info, agents couldn't execute multi-touch sequences via email + SMS + phone.

**Lead source attribution gaps** — 30% of leads marked as "Unknown" or "Other" for lead source. Without accurate attribution, the team couldn't calculate cost-per-lead by channel or optimize ad spend.

**Speed-to-lead failures** — New leads from **Mojo** (dialing platform) and **ProfitPower** (website inquiry system) languished uncontacted for 3-5 days. Industry benchmarks show contact attempts within 5 minutes increase conversion 400%.

**Agent workload invisibility** — No centralized view of which agents had bandwidth for new leads vs. which ones were buried in active deals. Lead assignment happened manually based on guesswork, not data.

The CRM had become a junk drawer. Valuable leads lived alongside expired prospects, past clients, and vendor contacts. Agents spent more time searching for relevant contacts than actually contacting them.

## Diagnostic Phase: Mapping the Chaos

Before touching any data, I pulled a complete contact export and ran it through analysis scripts. The goal: quantify the problem, identify patterns, and prioritize remediation.

**Tag audit** — Exported all tags and their usage frequency. Identified 11 tag pairs that were functional duplicates (e.g., "Buyer-Active" used 47 times vs. "ActiveBuyer" used 12 times for the same purpose). Mapped which agents used which tag variations to understand behavioral patterns.

**Lead source distribution** — Grouped contacts by lead source. Discovered that "Unknown" was the third-largest source after Zillow and ProfitPower. Reverse-engineered likely sources by cross-referencing contact notes and agent attribution.

**Contact completeness scoring** — Ran a script to score each contact based on data completeness: +1 for email, +1 for phone, +1 for address, +1 for lead source, +1 for assigned agent. Scored 0-5. Only 35% of contacts scored 4+.

**Speed-to-lead analysis** — Pulled lead creation timestamps and first contact timestamps. Calculated median time-to-first-contact by lead source. Mojo leads: 3.2 days median. ProfitPower leads: 1.8 days. Zillow leads: 0.4 days (fastest because they trigger agent mobile notifications).

**Agent activity distribution** — Calculated contact volume per agent and activity rate (calls + emails + texts per contact). Found significant variance: top agent averaged 8 touches per contact over 90 days, bottom agent averaged 1.2 touches.

Presented findings to **Erin** (managing broker). Confirmed that tag duplication and incomplete contact data were operational bottlenecks, not just data hygiene issues. Agents couldn't trust smart lists because tag inconsistency meant relevant leads got excluded from filtered views.

## Remediation Phase: Tag Consolidation and Data Cleanup

With executive buy-in, I moved into remediation. The FUB API is read-only for safety (a 2026.01.14 incident locked write access after a bulk edit error), so all changes required manual execution or CSV imports.

**Tag standardization** — Created a master tag taxonomy with clear definitions. Eliminated duplicates by consolidating usage:
- "Hot Prospect" became canonical, "HotProspect" and "Hot-Prospect" deprecated
- "Nurture 90" became canonical, "Long-Term Nurture" and "90-Day Follow-Up" deprecated
- "ActiveBuyer" merged into "Buyer-Active"

Worked with agents to verify no functional distinctions existed between variations. Exported contact lists for each deprecated tag, reassigned contacts to canonical tags, then archived deprecated tags to prevent future use.

**Lead source cleanup** — Standardized lead source naming conventions:
- Zillow (not "zillow.com" or "Zillow Premier")
- Mojo (not "Mojo Dialer" or "Cold Call")
- ProfitPower (not "Website Inquiry" or "JAG Website")

For contacts marked "Unknown," cross-referenced intake dates with marketing campaign timelines and agent notes to infer likely sources. Re-tagged 800+ contacts with inferred sources.

**Contact data enrichment** — Agents manually updated high-priority contacts missing email or phone. For lower-priority contacts, flagged records as incomplete and excluded them from automated sequences to avoid deliverability issues.

**Ownership audit** — Identified 200+ contacts with no assigned agent. Reviewed notes to determine last agent interaction, then reassigned ownership. For contacts with no activity in 12+ months, assigned to a "Recycled Leads" pool for redistribution.

Executed changes in batches over three weeks. Validated each batch post-import to ensure no data corruption. Communicated changes to agents via Slack with screenshots showing before/after smart list results to demonstrate improved reliability.

## System Building: Smart Lists and "Get to Zero"

With the database stabilized, I built the **"Get to Zero" (GTZ) smart list system**. The concept: every agent maintains two smart lists that surface only actionable leads. At the start of each day, the agent works those lists to zero.

**Hot Prospect 30** — Contacts tagged "Hot Prospect" with activity in the last 30 days. These are leads actively house-hunting or listing. Goal: contact every lead in this list daily until they close, opt out, or downgrade to Nurture.

**Nurture 90** — Contacts tagged "Nurture" with activity in the last 90 days. These are leads in early stages (pre-approved, casually browsing, waiting for spring market). Goal: contact every lead in this list weekly.

Each agent got two custom smart lists configured in FUB. Lists filter by agent ownership, tag, and last activity date. Agents review lists every morning. If a contact no longer fits the criteria (e.g., closed deal, unsubscribed, went cold), they update the tag or status immediately. This keeps lists accurate and actionable.

Built a **GTZ tracking sheet** — Google Sheet where agents log daily list counts. Columns: Date, Agent Name, HP30 Start Count, HP30 End Count, N90 Start Count, N90 End Count. This creates accountability and surfaces bottlenecks (e.g., if an agent's HP30 count balloons to 40+, they're not closing or disqualifying leads fast enough).

Integrated GTZ into weekly agent meetings. Erin reviews tracking sheet and flags agents whose lists are growing instead of shrinking. Growing lists indicate either inbound lead volume exceeding agent capacity or ineffective follow-up.

## Automation Layer: Lead Routing and Follow-Up Sequences

Manual lead routing created speed-to-lead delays. A Mojo lead would come in, sit in a queue, and wait for Erin or the database manager to assign it to an agent with capacity. By the time the agent saw it, 24-72 hours had elapsed.

Implemented **automated lead routing rules** in FUB:

**Mojo leads** — Auto-assign to the agent on "phone duty" that day. Phone duty rotates weekly. Duty agent receives instant mobile notification and is expected to contact within 1 hour.

**ProfitPower leads** — Auto-assign based on lead's zip code. Each agent covers specific territories. Territory-based routing ensures local market knowledge and reduces response time.

**Zillow leads** — Continue existing routing (agents pay for Zillow leads individually, so they auto-assign to the paying agent).

Built **follow-up sequences** for common scenarios:

**New lead sequence** (Day 1-7):
- Day 1: Agent calls + sends introductory SMS
- Day 2: Agent sends email with market report
- Day 4: Agent calls again
- Day 7: Agent sends email with recent listings

**Nurture sequence** (30-day cycle):
- Day 1: Market update email
- Day 10: SMS with new listing alert
- Day 20: Email with community spotlight
- Day 30: Agent calls to check interest level

Sequences are semi-automated. FUB triggers email templates, but agents manually initiate calls and texts to keep communication personal. Sequence templates standardize messaging but agents customize for context.

## Results: Lead Velocity and Agent Productivity

Measured impact 90 days post-implementation:

**Speed-to-lead improved 80%** — Median time-to-first-contact dropped from 3.2 days to 0.6 days for Mojo leads, 1.8 days to 0.3 days for ProfitPower leads. Automated routing and phone duty accountability eliminated the assignment bottleneck.

**Smart list adoption 100%** — All 14 agents actively use GTZ lists. Average HP30 count per agent: 8 contacts. Average N90 count per agent: 22 contacts. Lists stay manageable because agents update statuses in real-time.

**Contact completeness increased 35%** — Percentage of contacts with email + phone + lead source rose from 60% to 81%. Agents prioritize updating high-priority contacts because GTZ lists exclude incomplete records.

**Tag usage standardized** — Zero new duplicate tags created. Agents reference tag taxonomy doc before creating new tags. Only 3 new tags added in 90 days, all approved by Erin.

**Lead source attribution improved** — "Unknown" source dropped from 30% of contacts to 8%. Accurate attribution enabled cost-per-lead analysis by channel, informing budget reallocation.

**Agent workload visibility** — GTZ tracking sheet provides daily snapshot of each agent's pipeline density. Erin uses this to redistribute leads when one agent gets overloaded.

No formal revenue attribution yet (real estate close cycles run 60-180 days), but leading indicators (contact rate, speed-to-lead, list hygiene) all improved significantly.

## Transferable Lessons for B2B Operations

This engagement wasn't about SEO in the traditional sense — no keyword research, no content strategy, no backlink building. But the principles transfer directly to B2B growth operations:

**CRM hygiene is pipeline velocity** — If your contact data is fragmented, incomplete, or inconsistent, your outreach will be inefficient. Clean data enables automation, segmentation, and attribution.

**Tag standardization enables smart lists** — Ad-hoc tagging destroys filterability. Establish a taxonomy, enforce it, and deprecate duplicates immediately.

**Speed-to-lead compounds** — Leads decay exponentially. A contact attempted within 5 minutes converts at 400% higher rates than one attempted in 24 hours. Automate routing and enforce accountability.

**"Get to Zero" creates clarity** — Agents (or sales reps) can't work a database of 2,000 contacts. They can work a list of 20. Build systems that surface only actionable leads, then hold teams accountable to clearing those lists daily.

**Ownership accountability reduces lead leakage** — Unassigned contacts never get contacted. Every lead must have a clear owner and a defined follow-up cadence.

**Automation amplifies, doesn't replace** — Sequences and routing rules reduce friction, but human judgment and personalization still drive conversions. Automate logistics, not relationships.

## Technical Implementation Notes

**Tools used:**
- Follow Up Boss (CRM) — Read-only API, CSV imports for bulk edits
- Google Sheets — GTZ tracking, tag taxonomy, agent territory mapping
- Mojo — Dialing platform, integrated with FUB via webhook
- ProfitPower — Website inquiry system, integrated with FUB via API

**Scripts and automation:**
- Tag consolidation — Python script to deduplicate and map deprecated tags to canonical versions
- Lead source inference — Script cross-referencing intake dates with campaign data to infer "Unknown" sources
- Contact completeness scoring — Script calculating data completeness percentage per contact

**System documentation:**
- Tag taxonomy — Shared Google Doc defining all canonical tags and usage criteria
- GTZ system guide — Agent-facing doc explaining smart list setup, daily workflow, and tracking
- Lead routing rules — Flowchart showing decision tree for auto-assignment by source and territory

All documentation stored in JAG's shared Google Drive for agent reference.

## Next Steps and Ongoing Maintenance

CRM systems require continuous maintenance. Entropy returns without governance. Ongoing initiatives:

**Monthly tag audits** — Review newly created tags, consolidate duplicates, update taxonomy doc.

**Quarterly contact data enrichment** — Agents dedicate one day per quarter to updating incomplete records in their pipelines.

**GTZ tracking analysis** — Monthly review of tracking sheet to identify agents struggling to clear lists, then diagnose root cause (too many leads, poor follow-up, disqualification avoidance).

**Follow-up sequence optimization** — A/B test email templates, SMS copy, and call scripts. Measure contact-to-appointment conversion rates by sequence variation.

**Lead source attribution validation** — Periodic spot-checks to verify sources are being tagged correctly at intake.

The system is self-reinforcing. As agents see results from GTZ lists (more appointments, faster closings), they maintain data hygiene to keep the lists accurate. The tracking sheet creates peer accountability — no one wants to be the agent with 50 unworked leads.

## FAQ

**How long did the database cleanup take?**

Three weeks for tag consolidation, lead source cleanup, and contact data enrichment. Another two weeks to build and deploy the GTZ smart list system. Total: 5 weeks from diagnostic to full deployment.

**Did agents resist the new system?**

Initial skepticism, especially around daily tracking. Resistance disappeared once agents saw that GTZ lists reduced their cognitive load — they no longer had to decide who to call, the list decided for them.

**What was the biggest bottleneck?**

FUB's read-only API restriction. All bulk edits required CSV exports, manual edits in Google Sheets, then re-imports. A write-enabled API would have cut implementation time in half.

**How do you prevent tag proliferation from returning?**

Tag creation permissions restricted to admins only. Agents request new tags via Slack. Admin reviews against taxonomy, approves or consolidates with existing tags.

**Can this system scale beyond 14 agents?**

Yes. The GTZ model works for any team size. Larger teams benefit from additional segmentation (e.g., separate lists for buyers vs. sellers, or by price range). The key is keeping individual lists under 30 contacts so agents can clear them daily.