---
title:: Database Cleanup Case Study: Turning 80K Contacts Into Actionable Pipeline
description:: Real-world CRM cleanup project for a 40-agent real estate team. Methodology, timeline, and results from 6 weeks of database rehabilitation.
focus_keyword:: database cleanup case study
category:: b2b-strategy
author:: Victor Valentine Romo
date:: 2026.02.08
---

# Database Cleanup Case Study: Turning 80K Contacts Into Actionable Pipeline

Dirty data kills pipeline. Duplicates, outdated tags, incomplete records, contacts that haven't been touched in 3 years—every CRM accumulates sludge. Left unchecked, it degrades reporting, breaks automations, and trains salespeople to distrust the system.

Most database cleanups fail because they're treated as one-time projects. Someone spends 40 hours scrubbing data, declares victory, and 6 months later the chaos returns. The problem isn't data quality—it's system design. Without ongoing maintenance built into workflow, entropy wins.

This is a case study of a 6-week CRM rehabilitation project I led for a real estate brokerage with 40 agents and 80,000+ contacts in **Follow Up Boss**. The goal wasn't pristine data—it was operational data that agents would trust and use.

## Starting State: What Was Broken

When I took over CRM operations, the system was functional but degraded. Agents could log contacts, create tasks, send emails—but the data underneath was chaos.

**Symptoms:**

**Tag entropy**

- 200+ tags in the system
- 60% single-use (applied to < 5 contacts)
- No naming convention ("Hot Lead," "hot," "HOT LEAD" all existed)
- Temporal tags never removed ("Q3 2024 Follow-Up" still visible in Feb 2026)

**Duplicate contacts**

- ~8,000 suspected duplicates (10% of database)
- Same person, multiple entries because:
  - Lead came in from different sources (Zillow + Realtor.com)
  - Agent manually created instead of searching first
  - Email vs. phone number as primary identifier
- No automated deduplication workflow

**Incomplete records**

- 40% of contacts missing required fields (phone, email, or lead source)
- 25% of contacts had never been contacted (imported from old system, no follow-up)
- Lead source field inconsistent ("Web" vs. "Website" vs. "Online" vs. "Internet")

**Broken Smart Lists**

- Agents relied on Smart Lists to surface hot prospects
- Lists threw errors weekly (referenced deleted tags, deprecated fields)
- Agents stopped trusting them, reverted to manual contact searches

**Automation failures**

- Welcome emails not sending (triggered on deleted tag)
- Task creation workflows firing 3x per contact (circular dependency bug)
- Follow-up reminders not triggering (date field formatting issue)

**Agent complaints:**

- "I can't find my leads"
- "The CRM is showing me people I contacted 2 years ago"
- "Why do I have 5 entries for the same person?"
- "Nothing I tag does anything"

**Business impact:**

- Speed to lead: 45 min average (goal: < 15 min)
- Contact-to-contract ratio: 2.1% (market avg: 3-4%)
- Agent CRM adoption: ~40% (most agents kept external spreadsheets)
- Pipeline visibility: low (managers couldn't trust reports)

The system was a liability. It needed surgery, not Band-Aids.

## Phase 1: Audit and Taxonomy Design (Week 1-2)

You can't fix what you don't measure. The first step was diagnosing the extent of the damage.

**Data export and analysis:**

- Exported all 80,000 contacts to CSV
- Exported all tags + usage counts
- Exported all custom fields + fill rates
- Ran duplicate detection algorithm (fuzzy match on name + phone)

**Findings:**

- **Tag analysis:** 200 tags, 121 used < 5 times, 63 used 0 times in last 90 days
- **Duplicate analysis:** 7,847 suspected duplicates (clustered into 3,214 groups)
- **Field completeness:**
  - Phone: 68% filled
  - Email: 72% filled
  - Lead source: 55% filled (and inconsistent)
  - Last contact date: 41% filled (system bug, not agent negligence)

**Taxonomy redesign:**

Built a new tag structure based on dimensions vs. attributes (see [CRM Tag Management System](#) article).

**Old system:** 200 unstructured tags

**New system:** 63 structured tags across 8 dimensions

**Core dimensions:**

- **SOURCE**: Zillow / Realtor.com / Website / Referral / Open House / Event / Cold Call
- **STAGE**: Prospect / Qualified / Active Buyer / Under Contract / Closed / Nurture / Dead
- **TYPE**: Buyer / Seller / Landlord / Tenant / Investor
- **TIMELINE**: 0-30 Days / 30-90 Days / 90+ Days / Undetermined
- **PRIORITY**: Hot / Warm / Cold

**Standard attributes:**

- **PAIN**: Budget / Financing / Timeline / Indecision / Competition
- **ENGAGEMENT**: Email Opened / Link Clicked / Replied / Attended Event
- **INTERNAL**: Data Cleanup Required / Duplicate Suspected / Manual Review Needed

**Naming convention:** `[DIMENSION] - [VALUE]` (e.g., `SOURCE - Zillow`, `STAGE - Qualified`)

**Smart List redesign:**

Rebuilt core Smart Lists to use new tag structure:

- **Hot Prospects - 30 Day**: `STAGE - Qualified` + Last Contact < 30 days
- **Nurture - 90 Day**: `STAGE - Prospect` + Last Contact < 90 days
- **Uncontacted Leads**: Lead created > 48 hours ago + no contact logged
- **Zillow Pipeline**: `SOURCE - Zillow` + `STAGE - Active Buyer`
- **Stale Deals**: `STAGE - Under Contract` + no activity > 14 days

**Approval checkpoint:**

Presented taxonomy to management + 3 senior agents. Got buy-in. This was critical—agents needed to see themselves in the new system, not have it imposed on them.

## Phase 2: Data Migration (Week 3-4)

With the new taxonomy locked, next step was migrating 80,000 contacts from old structure to new.

**Tag migration strategy:**

**Don't delete old tags immediately.** Too risky. Instead:

1. Create new structured tags
2. Bulk apply new tags alongside old tags (parallel system)
3. Update Smart Lists to use new tags
4. Monitor for 30 days
5. Archive old tags (make invisible but don't delete)
6. After 90 days, delete old tags

**Tag mapping:**

Built a mapping spreadsheet: Old Tag → New Tag(s)

Examples:

- `Hot Lead` → `PRIORITY - Hot` + `STAGE - Qualified`
- `Zillow` → `SOURCE - Zillow`
- `Buyer - Active` → `TYPE - Buyer` + `STAGE - Active Buyer`
- `Q3 2024 Follow-Up` → (no replacement, delete)

**Bulk update process:**

Used **Follow Up Boss** bulk edit feature to apply new tags:

- Filter contacts by old tag
- Select all (or batch of 500 at a time, API rate limits)
- Apply new tag(s)
- Repeat for all 200 old tags

**Time required:** 12 hours over 4 days (3 hours/day in 30-min sessions)

**Duplicate remediation:**

7,847 duplicates was too many to manually merge. Prioritized high-impact clusters:

**Tier 1: Active deals (immediate fix)**

- Duplicates where one contact had active deal (Under Contract, Closed)
- Manual review + merge
- 214 duplicates resolved

**Tier 2: Recent activity (next priority)**

- Duplicates where one contact had activity in last 30 days
- Automated merge (kept most recent, merged history)
- 1,832 duplicates resolved

**Tier 3: Cold contacts (low priority)**

- Duplicates where no activity in 90+ days
- Tagged with `INTERNAL: Duplicate Suspected`, left for agents to handle as they encountered them
- 5,801 duplicates flagged

**Why not merge all at once?** Risk. Automated merges can delete valuable notes, mis-assign deals, break agent workflows. Better to clean the active data surgically, then chip away at the rest over time.

**Field standardization:**

Inconsistent lead sources broke reporting. Built a cleanup script:

- `Web` / `Website` / `Online` / `Internet` → `Website`
- `Realtor` / `Realtor.com` / `R.com` → `Realtor.com`
- `Zillow` / `Z` / `Zillow.com` → `Zillow`
- `Referral` / `Referred` / `Ref` → `Referral`
- (blank) → `Unknown`

Applied via bulk update. Result: Lead source field went from 47 unique values to 12.

**Missing field remediation:**

For contacts missing phone/email, two approaches:

**High-priority contacts** (activity in last 90 days):

- Assigned to original agent with task: "Complete contact info"
- Deadline: 7 days
- If not completed, contact moved to `INTERNAL: Data Cleanup Required` Smart List for admin review

**Low-priority contacts** (no activity > 90 days):

- Left as-is
- Suppressed from email campaigns (avoid bounces)
- Flagged for eventual archive

## Phase 3: Automation Rebuild (Week 5)

Clean data enables reliable automation. Rebuilt core workflows to use new tag structure.

**Lead assignment workflow:**

**Old system:** Manual assignment by office manager

**New system:** Automated round-robin

**Trigger:** New lead enters system

**Logic:**

1. If `SOURCE - Zillow` → assign to Zillow team (round-robin among 3 specialists)
2. Else if `SOURCE - Realtor.com` → assign to Realtor.com team (4 agents)
3. Else if `SOURCE - Referral` → assign to referring agent
4. Else → assign to general inbound team (all agents, round-robin)

**Actions:**

- Assign owner
- Apply `STAGE - Prospect`
- Send SMS: "Hi [Name], got your info from [Source]. I'll call you shortly. - [Agent]"
- Create task: "Call within 15 minutes"
- Post to agent's Slack DM

**Welcome email sequence:**

**Trigger:** Contact assigned to agent

**Delay:** 2 minutes (gives agent time to make first call)

**Email 1:** "Thanks for reaching out" (plain text, personal)

**If no response after 3 days:**

**Email 2:** "Here's what to expect" (process overview, links to listings)

**If no response after 7 days:**

**Email 3:** "Still looking?" (re-engagement, softer CTA)

**If no response after 14 days:**

- Move to `STAGE - Nurture`
- Add to long-term drip campaign

**Stale lead alert:**

**Trigger:** Contact created > 1 hour ago + no activity logged

**Action:**

- Reassign to team lead
- Post to `#sales-alerts` Slack: "Lead not contacted: [Name] assigned to [Agent]"

**Smart List population:**

All Smart Lists now update automatically based on tag state. Agent applies `STAGE - Qualified`, contact appears in "Hot Prospects - 30 Day" instantly.

## Phase 4: Team Training and Rollout (Week 6)

Clean data and automation mean nothing if agents don't adopt the new system.

**Training approach:**

**Day 1: Manager training (2 hours)**

- Walked through new taxonomy
- Demonstrated Smart Lists
- Showed automation workflows
- Got managers to champion the system with their teams

**Day 2-3: Agent training (4 sessions, 30 min each)**

- Small groups (10 agents per session)
- Focused on "what's in it for you":
  - "Your leads will be automatically routed and followed up"
  - "Hot prospects surface in Smart Lists without manual sorting"
  - "Tag a contact, automation handles the rest"
- Hands-on: each agent tagged 3 contacts, watched Smart Lists update

**Day 4: Office hours (drop-in Q&A)**

- 2-hour window where agents could ask questions, troubleshoot issues
- 18 agents showed up (45% of team—good adoption signal)

**Day 5-7: Monitoring and support**

- Watched usage logs: which agents adopted, which didn't
- Proactively reached out to non-adopters: "I noticed you haven't used the new system, what's blocking you?"
- Fixed 3 edge-case bugs that emerged during real-world use

**Adoption incentives:**

- Agents who used the system consistently for 30 days entered into raffle for $500 gift card
- Top 3 agents by lead conversion rate got featured in company newsletter
- Management referenced Smart List data in weekly meetings (social proof)

## Results: 90 Days Post-Cleanup

**Quantitative improvements:**

**Data quality:**

- Tag count: 200 → 63
- Single-use tags: 121 → 0
- Duplicate contacts: 7,847 → 2,103 (73% reduction)
- Field completeness (phone/email): 70% → 89%
- Smart List errors: ~15/week → 0

**Operational metrics:**

- Speed to lead: 45 min → 8 min (82% improvement)
- Lead assignment errors: 12/week → 0
- Agent CRM adoption: 40% → 95%
- "I can't find my leads" support tickets: 12/week → 1/week

**Business outcomes:**

- Contact-to-contract ratio: 2.1% → 2.9% (38% improvement)
- Pipeline visibility: managers could now run accurate reports without manual verification
- Agent satisfaction: anonymous survey showed 85% "satisfied" or "very satisfied" with CRM (up from 41%)

**Qualitative feedback:**

- "I actually trust the Hot Prospects list now"
- "Leads don't slip through anymore"
- "I spend 30 minutes a day on CRM instead of 90 minutes"

**The kicker:** 3 months after cleanup, agents stopped complaining about the CRM. That's the real success metric.

## Lessons Learned: What Worked, What Didn't

**What worked:**

**Parallel tag system during migration**

- Running old + new tags simultaneously for 30 days prevented panic
- Agents had time to adjust, automations could be tested without breaking production
- Rollback was trivial (just revert Smart Lists to old tags)

**Agent involvement in taxonomy design**

- Getting buy-in from senior agents before rollout eliminated "not invented here" resistance
- They became champions who sold peers on the new system

**Automation as proof of value**

- The moment agents saw leads auto-assigned + welcomed, they trusted the system
- Automation converts skeptics faster than training

**Small group training**

- 30-min sessions with 10 agents beat 2-hour sessions with 40 agents
- More questions, more hands-on time, more retention

**What didn't work:**

**Trying to clean all duplicates at once**

- Automated merging introduced edge-case errors (notes lost, wrong contact kept)
- Better to fix high-priority clusters surgically, then chip away over time

**Expecting agents to read documentation**

- Built a 10-page CRM guide, < 5 agents read it
- Agents learn by doing, not reading

**Over-explaining the "why"**

- Early training sessions spent too much time on "why tags matter" and not enough on "how to use them"
- Agents care about results, not methodology

**Underestimating ongoing maintenance**

- Even with the new system, tags drift without governance
- Had to implement monthly audits + tag request workflow to prevent re-accumulation of entropy

## Ongoing Maintenance: Preventing Re-Decay

Database cleanup isn't a project—it's a system. Built maintenance into workflow:

**Monthly tag audit:**

- Review tag usage (any tags < 5 uses in last 30 days?)
- Merge redundant tags
- Archive expired temporal tags

**Quarterly duplicate scan:**

- Run duplicate detection script
- Prioritize high-impact merges (active deals, recent activity)
- Tag low-priority duplicates for eventual cleanup

**Weekly Smart List health check:**

- Test all core Smart Lists (do they load without errors?)
- Check population counts (sudden drop/spike = investigate)
- Agent feedback loop (Slack poll: "Which Smart Lists are broken?")

**Locked tag creation:**

- Only admins can create new tags
- Agents request tags via form → admin reviews + approves/denies
- Prevents "I'll just make a new tag" entropy

**New agent onboarding:**

- CRM training included in onboarding (not optional)
- New agents shadow experienced agent for 1 day to see system in action
- Quarterly refresher trainings for all agents

**The maintenance question:** If I disappeared for 3 months, would the system still be clean? Not yet, but closer than before.

## FAQ

**Q: How much did this project cost?**

**Time:** ~120 hours over 6 weeks (me + 1 part-time assistant)

**Tools:** No additional software (used native **Follow Up Boss** features)

**Opportunity cost:** ~$24K in billable hours (if priced at consulting rate)

**ROI:** Contact-to-contract improvement (2.1% → 2.9%) on 80K contacts = ~640 additional contracts over 12 months. At $8K avg commission, that's $5.1M in gross commissions. Even 10% attribution to cleanup = $510K ROI.

**Q: Can I do this for my CRM without breaking everything?**

Yes, but use a parallel system during migration. Don't delete old tags/fields until new ones are proven. Test automations in sandbox environment before deploying to production. Backup your data before bulk operations.

**Q: How long does a database cleanup take?**

Depends on size + complexity. For 10K contacts, 2-3 weeks. For 100K+ contacts, 6-8 weeks. For 1M+ contacts, 3-6 months. Don't rush—bad migrations create more problems than they solve.

**Q: What if my team resists the new system?**

Involve them early. Get champions first (top performers who will sell peers). Show results, not theory. Automation adoption converts skeptics—once agents see their leads auto-routed + followed up, resistance drops.

**Q: Should I hire a consultant or do this in-house?**

If you have 10K+ contacts, hire a consultant (or internal ops person). Database cleanup requires sustained focus—it's not something a sales manager can do between meetings. If you have < 10K contacts, you can DIY with 4-6 weeks of dedicated time.

**Q: What's the biggest risk in a database cleanup project?**

Data loss. Automated merges, bulk deletes, field migrations—all carry risk. Mitigate by: backing up data daily, running test operations on 100 contacts before scaling to 10K, keeping old tags/fields archived (not deleted) for 90 days, having a rollback plan.