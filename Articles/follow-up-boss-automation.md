---
title:: Follow Up Boss Automation: Smart Lists, Action Plans, and Speed-to-Lead Systems
description:: How to configure Follow Up Boss for maximum automation — smart lists, action plans, lead routing, and speed-to-lead workflows that convert 3x more leads.
focus_keyword:: Follow Up Boss automation
category:: sales
author:: Victor Valentine Romo
date:: 2026.02.07
---

# Follow Up Boss Automation: Smart Lists, Action Plans, and Speed-to-Lead Systems

**Follow Up Boss** becomes a revenue engine or an expensive Rolodex depending entirely on how you configure it. Most real estate teams use maybe 15% of what FUB offers — contact storage, basic call logging, the occasional drip campaign. Meanwhile, the automation layer sits untouched, and leads die in the database because nobody built the system to surface them at the right moment.

I manage a 15,000-contact FUB database for a top-producing real estate team in Raleigh. Over 14 months, we've built an automation architecture that reduced average speed-to-lead from 47 minutes to under 3, cut agent follow-up gaps from 11 days to 2, and increased lead-to-appointment conversion by 3.2x. The system runs on three pillars: smart lists that surface the right contacts at the right time, action plans that automate sequencing, and lead routing rules that match prospects to agents based on data, not guesswork.

## Smart Lists: The Heartbeat of a Working Database

Smart lists in **Follow Up Boss** are dynamic filters. They repopulate in real time based on conditions you define. A static list is a snapshot — it captures contacts once and fossilizes. A smart list breathes, pulling in new contacts as they meet criteria and releasing them when conditions change.

The difference between a team that uses smart lists and one that doesn't is the difference between proactive selling and reactive scrambling.

### The "Get to Zero" System

Every agent on the team has two mandatory smart lists they must clear daily:

**Hot Prospect 30-Day List:**
- Criteria: Stage = "Hot Prospect" AND last communication > 2 days AND created within last 30 days
- Purpose: Surfaces hot leads who haven't heard from their assigned agent in 48+ hours
- Daily requirement: Agent calls or texts every contact on this list before end of shift

**Nurture 90-Day List:**
- Criteria: Stage = "Nurture" AND last communication > 7 days AND last activity within 90 days
- Purpose: Prevents nurture contacts from going cold beyond the 7-day window
- Daily requirement: Agent works through the list, making attempts or updating disposition

The "Get to Zero" directive means the list count must hit zero by end of day. Not "work through most of them." Zero. The system creates accountability because the numbers are visible — team leaders can check any agent's smart list count at any time and immediately see who's falling behind.

### Building Smart Lists That Actually Drive Action

The mistake most FUB users make: building smart lists that are too broad. A list of "all contacts who haven't been contacted in 30 days" might contain 3,000 records. No agent is working through 3,000 contacts. The list becomes background noise, ignored like every other notification competing for attention.

Effective smart lists are narrow and actionable. My rule: if a smart list contains more than 30 contacts, the criteria aren't specific enough.

**Smart List Architecture by Purpose:**

| List Name | Criteria | Target Count | Frequency |
|-----------|----------|-------------|-----------|
| Speed-to-Lead Alerts | New lead, uncontacted, < 5 min old | 0-3 | Real-time |
| Hot Prospect Follow-Up | Hot stage, no contact 48+ hours | 5-15 | Daily |
| Nurture Re-engagement | Nurture stage, no contact 7+ days | 10-25 | Daily |
| Stale Pipeline | Active deal, no contact 14+ days | 5-10 | Weekly |
| Birthday/Anniversary | Key date within 7 days | 3-8 | Weekly |
| Past Client Check-In | Closed 11-13 months ago | 5-15 | Monthly |

Each list has a clear action associated with it. The agent doesn't open the list and wonder "what do I do with these?" The list name implies the action. The criteria define the urgency. The target count ensures manageability.

### Tag Taxonomy: The Foundation Smart Lists Depend On

Smart lists filter on fields. If your fields are dirty, your lists are useless. Tag taxonomy — the standardized vocabulary for categorizing contacts — is the unglamorous foundation that makes everything else work.

We spent three months cleaning our tag system. Before cleanup:

- 847 unique tags across 15,000 contacts
- 23 variations of "seller lead" (Seller Lead, seller_lead, Seller-Lead, SELLER, Seller lead, SellerLead...)
- Tags created by individual agents with no naming convention
- Duplicate contacts with conflicting tags

After cleanup:

- 156 standardized tags with enforced naming convention
- Source tags: `source:zillow`, `source:realtor.com`, `source:sphere`, `source:sign-call`
- Stage tags mapped to pipeline: `stage:new`, `stage:hot-prospect`, `stage:nurture`, `stage:active-deal`
- Property tags: `type:buyer`, `type:seller`, `type:investor`, `type:renter`
- Geographic tags: `area:north-raleigh`, `area:cary`, `area:downtown`

The naming convention uses lowercase with colons separating category from value. No spaces, no mixed case, no abbreviations. When a new tag is needed, it goes through a request process — no agent creates tags autonomously.

This discipline sounds bureaucratic until you try to build a smart list filtering on "all seller leads from Zillow in North Raleigh" and discover you need to account for 14 tag variations to capture the same population.

## Action Plans: Automated Sequencing That Doesn't Feel Robotic

**Follow Up Boss** action plans automate communication sequences — emails, texts, and task reminders that trigger based on events or timelines. The automation frees agents from remembering follow-up schedules while maintaining the appearance of personal attention.

### The New Lead Action Plan (First 72 Hours)

The first 72 hours after a lead enters the system determine conversion probability more than anything an agent does in month three. Our new lead action plan fires immediately on lead creation:

**Minute 0:** Automated text — "Hi {first_name}, this is {agent_name} with The Jim Allen Group. I see you were looking at properties in {area}. What's your timeline for making a move?"

**Minute 2:** Task assigned to agent — "CALL NOW: New lead {first_name} {last_name} from {source}. Phone: {phone}."

**Minute 5:** If no agent call logged — escalation task to team lead.

**Minute 15:** If still no contact — automated email with value content (neighborhood guide, market report) relevant to their search area.

**Hour 1:** If no agent contact — second text from agent profile: "I don't want to miss you — would tomorrow morning work better for a quick call?"

**Hour 4:** Task reminder — "Attempt #2 call to {first_name}."

**Day 2 (9 AM):** Task reminder — "Day 2 follow-up: {first_name} from {source}."

**Day 3 (2 PM):** Automated email — market insights for their target area.

**Day 7:** If no live contact achieved — lead automatically moves to nurture stage, enters long-term nurture action plan.

The first five minutes are the most automated and the most critical. The initial text goes out whether the agent is available or not. The call task creates urgency. The escalation at five minutes ensures no lead sits unattended during business hours.

### Long-Term Nurture: 90-Day Drip Architecture

Not every lead is ready to transact. The nurture action plan maintains presence without being annoying. The cadence:

- **Week 1-2:** Two touchpoints per week (text + email, alternating)
- **Week 3-4:** One touchpoint per week
- **Month 2-3:** Bi-weekly touchpoints
- **Month 3+:** Monthly market update + quarterly personal check-in

Content rotates between four categories:
1. Market data (new listings, price trends, days on market)
2. Educational content (homebuying process, financing options, neighborhood guides)
3. Social proof (recent closings, client testimonials)
4. Personal touch (holiday messages, local event recommendations)

The automation handles scheduling and delivery. The agent's job: when a nurture contact replies or shows activity (opens email, visits website, clicks listing link), the smart list surfaces them for immediate personal follow-up. The system handles the boring consistency. The agent handles the moments that matter.

## Lead Routing: Matching Prospects to the Right Agent

Default lead routing in most CRMs is round-robin — leads distribute evenly regardless of agent expertise, availability, or capacity. Round-robin is fair. Fair is different from effective.

### Weighted Routing Based on Performance Data

Our routing rules consider three factors:

**Speed-to-Lead Score:** Agents who consistently contact leads within 5 minutes get priority routing. The system tracks average response time over 30 days. Agents averaging under 5 minutes get 40% more leads than agents averaging 15+ minutes.

**Conversion Rate by Source:** Some agents convert Zillow leads at 2x the team average. Others excel with sign calls or sphere referrals. Routing matches lead source to agent strength. **Follow Up Boss** doesn't natively support this level of routing sophistication, so we layer in **Zapier** triggers that evaluate source and assign accordingly.

**Geographic Expertise:** Buyer leads searching North Raleigh neighborhoods route to agents who live in and know North Raleigh. The agent's familiarity produces better conversations, faster rapport, and higher conversion. Geographic routing overrides round-robin when the lead's search area matches an agent's designated territory.

### Overflow and Escalation Rules

What happens when the designated agent doesn't respond? The system has cascading fallbacks:

- **3 minutes:** Alert sent to backup agent
- **7 minutes:** Lead reassigned to team leader for immediate contact
- **15 minutes:** Automated "warm handoff" text sent from team leader's profile
- **30 minutes:** Lead flagged in the daily accountability report

These escalation rules exist because speed-to-lead data is unambiguous: a lead contacted within 5 minutes is 21x more likely to convert than one contacted at 30 minutes. Every minute of delay costs money. The escalation system treats uncontacted leads as emergencies, not tasks to get around to.

## Integrations That Extend FUB's Native Capabilities

**Follow Up Boss** is deliberately simple in its core feature set. The power comes from integrations that extend its capabilities without adding complexity to the base system.

### Zapier Bridges

**Zapier** connects FUB to tools it doesn't natively integrate with:

- **New lead in FUB → Slack notification** — Team leaders see every new lead in real-time without living inside FUB
- **Lead stage change → Google Sheets logging** — Historical stage transition data for pipeline velocity analysis
- **Missed call in FUB → SMS via Twilio** — Automated "sorry I missed you" text when an agent doesn't answer
- **Form submission on website → FUB lead creation** — Custom website forms bypass the need for third-party lead capture tools

Each Zap costs nothing beyond the Zapier subscription. The implementation takes 15-30 minutes per integration. The cumulative effect: FUB becomes the hub of a connected system rather than an isolated contact database.

### Website Visitor Tracking

FUB's pixel tracking identifies when known contacts visit your website. When Jennifer Martinez — who submitted an inquiry three months ago and went quiet — suddenly visits your listing page, the system can trigger an automatic alert to her assigned agent: "Jennifer is browsing properties again. Call now."

Configuring the pixel takes 5 minutes. The behavioral data it produces — who's browsing, what they're looking at, how recently — transforms the nurture process from guesswork into data-driven re-engagement.

### API Workflows for Advanced Operations

The **Follow Up Boss API** enables custom operations that neither the native interface nor Zapier can handle. I built API scripts for:

- **Bulk tag operations:** Updating hundreds of tags simultaneously during taxonomy migration
- **Custom reporting:** Extracting data that FUB's built-in reports don't surface (e.g., time between stage transitions per lead source)
- **Automated stage management:** Moving contacts between stages based on activity rules more complex than FUB's native automation supports

The API is read-only for our current implementation after a 2026 incident where a write operation caused unintended data changes. Read-only API access still enables powerful reporting and analysis workflows without the risk of bulk data modification.

## Reporting: The Numbers That Expose Problems Before They Metastasize

**Follow Up Boss** reporting reveals operational health if you build the right dashboards. Default reports show vanity metrics — total calls made, total emails sent. Operational reports show efficiency metrics that predict revenue.

### The Weekly Accountability Dashboard

Five metrics per agent, reviewed every Monday:

1. **Speed-to-Lead Average:** Target under 5 minutes. Anything above 10 triggers coaching.
2. **Contact Rate:** Percentage of assigned leads with live conversation within 48 hours. Target: 65%+.
3. **Smart List Compliance:** Percentage of days the agent cleared "Get to Zero" lists. Target: 90%+.
4. **Pipeline Velocity:** Average days from lead creation to appointment set. Target: under 14 days.
5. **Nurture Re-engagement:** Percentage of nurture contacts with touchpoint in last 14 days. Target: 80%+.

These five metrics surface problems early. An agent whose speed-to-lead average creeps from 4 minutes to 9 minutes isn't in crisis yet — but the trend line predicts one. A nurture re-engagement rate dropping from 85% to 60% means the agent is abandoning long-term pipeline to chase new leads. The dashboard makes the invisible visible.

### Data Hygiene Audits: Monthly Maintenance

Once monthly, I run a database health audit:

- **Duplicate scan:** Identify contacts sharing phone number or email across multiple records
- **Stage accuracy:** Contacts in "Hot Prospect" stage with no activity in 60+ days get re-evaluated
- **Tag consistency:** New tags created in the month get reviewed against naming convention
- **Source attribution:** Leads with missing or incorrect source tags get corrected
- **Dead contact removal:** Contacts with hard bounces, disconnected numbers, and explicit opt-outs get archived

The monthly audit takes 2-3 hours. Skipping it creates compounding data debt. After three months without cleanup, smart list accuracy degrades noticeably. After six months, the lists are producing enough false positives that agents stop trusting them — and once trust breaks, the entire system collapses.

## FAQ

### How long does it take to set up Follow Up Boss automation properly?

Full implementation takes 4-6 weeks. Week one: tag taxonomy cleanup and standardization. Week two: smart list architecture design and testing. Week three: action plan creation and trigger configuration. Week four onward: agent training, monitoring, and iteration. The setup is front-loaded — once built, maintenance requires 3-5 hours weekly.

### Can Follow Up Boss handle teams with 20+ agents?

Yes, but complexity scales with headcount. Teams above 15 agents need a dedicated database manager or operations person — someone whose job is system maintenance, not sales. The smart lists, action plans, and routing rules that work for 8 agents need reconfiguration for 25. Without a system owner, larger teams inevitably drift back to using FUB as a basic contact manager.

### What's the ROI of Follow Up Boss automation versus manual follow-up?

Our team's data over 14 months: automated workflows produced 3.2x more appointments per lead than manual follow-up alone. The primary driver isn't the automation itself — it's the consistency. Manual follow-up has gaps. Agents forget, get busy, prioritize hot leads over nurture contacts. Automation fills those gaps. The 3.2x multiplier represents recovered revenue from leads that would have died in a manual-only system.

### How does Follow Up Boss compare to other real estate CRMs?

**Follow Up Boss** excels at speed-to-lead workflows and team accountability features. **kvCORE** offers stronger marketing automation and website integration. **Sierra Interactive** provides better IDX integration. **LionDesk** costs less but lacks FUB's smart list sophistication. For teams where speed-to-lead and agent accountability are primary concerns, FUB remains the strongest option in the real estate CRM space.

---

*Victor Valentine Romo manages a 15,000-contact Follow Up Boss database for The Jim Allen Group in Raleigh, NC. The automation systems described here generated a 3.2x increase in lead-to-appointment conversion over 14 months. [Schedule a CRM audit at b2bvic.com/calendar]*

---

**Related Reading:**

- [CRM Database Cleanup: Deduplication, Tag Taxonomy, and Contact Scoring](/articles/crm-data-hygiene.html)
- [Why 5-Minute Response Time 10x Your Conversion Rate](/articles/speed-to-lead-data.html)
- [The Cold Email Framework That Books 12+ Meetings Per Month](/articles/cold-email-that-books-meetings.html)
