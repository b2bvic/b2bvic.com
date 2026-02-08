---
title:: CRM Migration from HubSpot to Follow Up Boss: Real Estate-Specific Data Transfer and Workflow Rebuild
description:: CRM migration guide for real estate teams moving HubSpot to Follow Up Boss. Contact export, custom field mapping, workflow recreation, and data integrity verification.
focus_keyword:: crm migration hubspot fub
category:: b2b-strategy
author:: Victor Valentine Romo
date:: 2026.02.08
---

# CRM Migration from HubSpot to Follow Up Boss: Real Estate-Specific Data Transfer and Workflow Rebuild

Real estate teams outgrow **HubSpot** when agent-specific workflows, MLS integration, and commission tracking become critical. **Follow Up Boss (FUB)** dominates real estate CRM because it's purpose-built for agent teams, buyer/seller tracking, and lead distribution logic that HubSpot handles poorly. Migrating from HubSpot to FUB requires careful contact export, custom field mapping, workflow recreation, and validation—poor execution loses leads, breaks attribution, and disrupts operations for weeks.

This guide covers the complete migration process: data audit, export preparation, FUB configuration, import execution, workflow rebuild, and post-migration validation that ensures zero data loss and minimal downtime.

## Why Real Estate Teams Migrate to Follow Up Boss

### HubSpot Limitations for Real Estate

**Weak MLS integration**: HubSpot doesn't natively sync MLS data (property listings, showings, offers)

**Poor lead routing**: Territory assignment in HubSpot requires complex workflows; FUB handles it natively

**No commission tracking**: HubSpot opportunities don't track buyer/seller agent splits, referral fees, or commission schedules

**Generic lifecycle stages**: HubSpot stages (Subscriber, Lead, MQL) don't map to real estate (New Lead, Contacted, Appointment Set, Under Contract, Closed)

**Limited agent scorecards**: HubSpot dashboards aren't optimized for agent KPIs (speed to lead, contact rate, conversion by source)

### Follow Up Boss Advantages

**Real estate-native**: Built for buyer/seller workflows, agent teams, and transaction management

**MLS sync**: Direct MLS integration for property data

**Smart lead routing**: Distributes leads by price range, location, agent capacity

**Commission tracking**: Tracks splits, referral fees, closing dates

**Agent performance**: Dashboards showing speed to lead, contact attempts, conversion rates

**Text messaging**: Native SMS (HubSpot requires third-party integrations)

## Pre-Migration Data Audit

Before exporting, audit HubSpot data to identify what transfers and what doesn't.

### Contact Count and Segmentation

**Total contacts**: How many records exist?

**Active contacts**: Contacts engaged in last 90 days (email opens, website visits, form submissions)

**Inactive contacts**: No engagement in 180+ days

**Leads vs. Clients**: Separate prospects from closed clients

**Decision**: Migrate active contacts + clients. Archive or delete inactive contacts (no need to clutter new CRM).

### Custom Fields Audit

List all custom fields in HubSpot and determine FUB equivalents.

**Example mapping**:

| HubSpot Field | FUB Equivalent | Migration Strategy |
|---------------|----------------|---------------------|
| Lead Source | Source | Direct map |
| Agent Owner | Agent | Direct map |
| Property Interest (custom) | Tags or Custom Field | Map to FUB tags |
| Lifecycle Stage | Stage | Map to FUB stages (adjust names) |
| Last Contacted Date | Last Activity | Direct map |
| Price Range (custom) | Custom Field | Create FUB custom field |

**Non-transferable fields**: HubSpot-specific data (workflow enrollment status, email campaign metrics, page views) doesn't map to FUB. Capture critical metrics in notes or spreadsheets before migration.

### Deal/Opportunity Audit

**Open deals**: Active transactions (under contract, pending close)

**Closed-won deals**: Past transactions (need for historical reporting)

**Closed-lost deals**: Lost opportunities (migrate if tracking loss reasons matters)

FUB calls these "deals" or "transactions." Map HubSpot deal stages to FUB stages.

**Example stage mapping**:

- HubSpot "Qualification" → FUB "New Lead"
- HubSpot "Appointment Scheduled" → FUB "Appointment Set"
- HubSpot "Contract Sent" → FUB "Under Contract"
- HubSpot "Closed Won" → FUB "Closed"

### Activity History

**Calls, emails, meetings**: HubSpot logs activities on contact timeline. FUB imports notes but not full activity history.

**Strategy**: Export key activities as notes attached to contacts (e.g., "Called 2025-01-15: Interested in 3BR in downtown").

**Email sequences**: HubSpot sequences don't transfer. Rebuild in FUB action plans.

## Data Export from HubSpot

### Contact Export

**Path**: Contacts → Export → Select properties to export

**Export all contacts** or filter by segment (e.g., "Active Leads" list).

**Required fields**:
- First Name
- Last Name
- Email
- Phone
- Lead Source
- Owner (agent assigned)
- Lifecycle Stage
- Last Contacted Date

**Custom fields**: Include all custom properties relevant to FUB (price range, property interest, tags).

**Format**: CSV

**Tip**: HubSpot limits exports to 500K rows. If you have more, segment exports by list or date range.

### Deal Export

**Path**: Deals → Export → Select properties

**Required fields**:
- Deal Name
- Deal Stage
- Close Date
- Deal Amount (commission)
- Associated Contact (link deal to contact)
- Deal Owner (agent)

**Custom fields**: Include commission split, referral source, property address (if tracked).

### Notes and Activity Export

**Path**: Contacts → Export → Include "Recent Note" or use workflow to append recent activity to contact description.

Alternatively, use **HubSpot API** or third-party tools (**Import2**, **Trujay**) to bulk-export activity history.

**Format**: Append activities to a "Migration Notes" field in contact export CSV.

## Follow Up Boss Setup

Configure FUB before importing data.

### Custom Field Creation

Create custom fields in FUB to match HubSpot custom properties.

**FUB path**: Settings → Custom Fields → Add Field

**Example**:
- **Field Name**: "Price Range"
- **Type**: Dropdown
- **Options**: "$0-$200K," "$200K-$400K," "$400K-$600K," "$600K+"

Repeat for all HubSpot custom fields that don't have native FUB equivalents.

### Stage Configuration

**FUB path**: Settings → Stages → Customize

Default FUB stages:
- New Lead
- Contacted
- Appointment Set
- Under Contract
- Closed
- Dead

Adjust to match your team's workflow. Add intermediate stages if needed (e.g., "Second Showing," "Offer Submitted").

### Lead Source Mapping

**FUB path**: Settings → Lead Sources

Import lead sources from HubSpot (Zillow, Realtor.com, Facebook Ads, Website, Referral).

Match HubSpot source names exactly to avoid import errors.

### Agent Setup

**FUB path**: Settings → Users → Add Agents

Create agent accounts matching HubSpot owners. Use identical names/emails for seamless assignment during import.

### Action Plans (Workflow Equivalent)

FUB "Action Plans" = HubSpot workflows. Build core action plans before import:

**Action Plan 1: New Lead Follow-Up**

- Day 0: Assign agent, send intro email
- Day 1: Task for agent to call
- Day 3: Send follow-up email if no response
- Day 7: Task for second call attempt

**Action Plan 2: Appointment Follow-Up**

- Day 0: Confirmation email
- Day -1: Reminder text (day before appointment)
- Day +1: Post-appointment survey

Rebuild critical HubSpot workflows as FUB action plans before migration.

## Data Import to Follow Up Boss

### Contact Import

**FUB path**: Settings → Import → Upload CSV

**Pre-import checklist**:

- [ ] CSV has required fields (First Name, Last Name, Email or Phone)
- [ ] Owner/Agent field matches FUB agent names exactly
- [ ] Lead Source values match FUB source list
- [ ] Custom fields exist in FUB (create before import)

**Import settings**:

**Duplicate handling**: "Update existing, create new" (merges by email)

**Stage assignment**: Map HubSpot lifecycle stage to FUB stage

**Action plan enrollment**: Optionally enroll imported leads in "New Lead Follow-Up" action plan

**Execute import**: Upload CSV, map columns, review preview, confirm import.

**FUB processes imports in batches** (1,000-5,000 records per batch). Large imports (50K+ records) take hours.

### Deal Import

**Path**: Settings → Import → Upload CSV (select "Deals" import type)

**Required fields**:
- Contact Email (links deal to contact)
- Deal Amount
- Deal Stage
- Close Date (if closed)
- Agent (owner)

**Custom fields**: Commission split, referral fee, property address

**Tip**: Import contacts first, then deals (deals require contacts to exist).

### Notes and Activity Import

FUB doesn't support structured activity import (calls, emails). Use note imports:

**Process**:

1. In HubSpot, append recent activity to contact "Description" or "Notes" field
2. Export contacts with populated notes field
3. Import to FUB—notes transfer as contact notes

**Limitation**: No timestamp preservation. Notes show import date, not original activity date. Include dates in note text ("Called 2025-01-15: Discussed 3BR options").

## Post-Migration Validation

After import, verify data integrity.

### Contact Verification

**Sample check**: Select 50-100 random contacts, verify:

- [ ] Name, email, phone correct
- [ ] Agent assignment matches HubSpot owner
- [ ] Lead source matches
- [ ] Custom fields (price range, property interest) populated
- [ ] Stage matches HubSpot lifecycle stage

**Error rate**: <2% is acceptable. >5% signals mapping issues—review and re-import.

### Deal Verification

Check 20-30 deals:

- [ ] Deal linked to correct contact
- [ ] Deal amount correct
- [ ] Stage accurate
- [ ] Close date preserved (for closed deals)

### Missing Data Identification

Run reports in FUB:

**Report 1**: Contacts missing email or phone (should be <1%)

**Report 2**: Contacts missing agent assignment (should be 0%)

**Report 3**: Contacts missing lead source (target <5%)

Fix missing data manually or re-import corrected CSV.

### Count Reconciliation

**HubSpot total contacts exported**: 12,450

**FUB total contacts imported**: 12,448

**Discrepancy**: 2 contacts (investigate—likely duplicates merged or invalid emails)

Acceptable variance: <0.5%. Higher variance requires investigation.

## Workflow and Automation Rebuild

HubSpot workflows don't migrate. Rebuild as FUB action plans and automation.

### Email Sequences

**HubSpot sequence**: 5-email drip for new leads

**FUB equivalent**: Action plan with email steps

**Rebuild process**:

1. Copy email content from HubSpot
2. Create FUB action plan
3. Add email steps (Day 0, Day 2, Day 5, Day 7, Day 14)
4. Test with 5-10 contacts before full rollout

### Lead Routing

**HubSpot**: Workflow assigns contacts to owners based on territory (zip code, city)

**FUB equivalent**: Smart routing rules

**FUB path**: Settings → Lead Routing → Add Rule

**Example rule**: "If lead source = Zillow AND property location = 'San Francisco,' assign to Agent A"

FUB routing is more granular than HubSpot (supports price range, lead score, agent capacity).

### Task Automation

**HubSpot**: Task created when deal enters "Appointment Scheduled" stage

**FUB equivalent**: Action plan triggered by stage change

**FUB setup**:

1. Create action plan "Appointment Follow-Up"
2. Trigger: Stage = "Appointment Set"
3. Actions: Create task "Call to confirm appointment" (assigned to agent)

### Notifications

**HubSpot**: Slack/email notifications when leads enter certain stages

**FUB equivalent**: Native email/SMS alerts

**FUB path**: Settings → Notifications → Configure alerts

Options:
- New lead assigned
- Lead not contacted in 24 hours
- Appointment set
- Deal closed

## Training and Rollout

Agents need training on FUB before go-live.

### Training Checklist

**Week 1** (pre-migration):

- [ ] Demo FUB interface (contact view, timeline, tasks)
- [ ] Explain stage progression
- [ ] Show how to log calls, emails, texts
- [ ] Practice action plan enrollment

**Week 2** (post-migration):

- [ ] Review imported contacts (sample searches)
- [ ] Verify agent-assigned contacts
- [ ] Test action plans (enroll 5 test leads)
- [ ] Q&A session

### Rollout Strategy

**Soft launch** (Week 1): Migrate 10% of contacts, test with 2-3 agents

**Full launch** (Week 2): Migrate all contacts, all agents switch to FUB

**Parallel run** (optional): Run HubSpot + FUB simultaneously for 1 week (log activity in both), then cut over

**Parallel run risks**: Double data entry, confusion. Only use if team is risk-averse.

## Post-Migration Support

### Common Issues

**Issue 1**: Agents can't find contacts

**Cause**: Incorrect agent assignment during import

**Fix**: Bulk reassign contacts using FUB filters + bulk actions

**Issue 2**: Email sequences not triggering

**Cause**: Action plan enrollment missing

**Fix**: Bulk enroll contacts in action plans (Settings → Action Plans → Enroll)

**Issue 3**: Duplicate contacts

**Cause**: Import merged some duplicates, missed others

**Fix**: Use FUB duplicate detection (Settings → Duplicates → Merge)

### Data Cleanup

**Week 1 post-migration**: Review for missing fields, incorrect assignments, duplicates

**Week 4 post-migration**: Audit action plan performance (are emails sending? tasks creating?)

**Month 3 post-migration**: Validate reporting accuracy (deal close rates, lead conversion)

## HubSpot Decommissioning

After validating FUB, wind down HubSpot.

**Month 1**: Maintain HubSpot read-only (reference historical data)

**Month 2**: Export reports for compliance/record-keeping

**Month 3**: Cancel HubSpot subscription

**Archive**: Download full data export (contacts, deals, reports) before cancellation. Store in secure location (Google Drive, Dropbox) for 7 years (IRS requirement for transaction records).

## Frequently Asked Questions

**How long does a HubSpot to Follow Up Boss migration take?**

2-4 weeks for full migration. Week 1: Data audit and FUB setup. Week 2: Export, import, and validation. Week 3: Workflow rebuild and agent training. Week 4: Rollout and issue resolution. Small teams (<5 agents, <5K contacts) can complete in 2 weeks. Large teams (10+ agents, 50K+ contacts) need 4-6 weeks. Critical success factor: dedicate ops/admin resource full-time during migration—part-time attention extends timeline by 2-3x.

**Can I migrate HubSpot email campaign history to Follow Up Boss?**

No. FUB doesn't import email campaign metrics (opens, clicks, campaign enrollment). Export key campaign performance data (open rates, click rates, conversions) to spreadsheet for historical reference. Going forward, track email performance in FUB (action plan emails log opens/clicks natively). If historical email attribution is critical for commission disputes or compliance, maintain HubSpot access read-only for 6-12 months post-migration.

**Should I clean HubSpot data before migration or after in Follow Up Boss?**

Before. Migrating dirty data (duplicates, incomplete records, inactive contacts) pollutes FUB and wastes import time. Pre-migration cleanup: (1) Dedupe HubSpot (merge duplicates), (2) Delete/archive test records and spam contacts, (3) Enrich incomplete records (append missing phone, email, lead source), (4) Segment active vs. inactive (only migrate active + closed deals). Rule: If a record hasn't been touched in 2+ years and isn't a past client, don't migrate it. Clean data = faster import, fewer post-migration issues.

**What if Follow Up Boss import fails or data corrupts?**

FUB doesn't overwrite data on failed imports—records either import successfully or skip. If import fails: (1) Review FUB error log (shows which rows failed, why), (2) Fix errors in CSV (common: missing required fields, invalid email format, agent name mismatch), (3) Re-import corrected CSV (set duplicate handling to "update existing" to avoid doubling records). If data corrupts (wrong fields mapped, incorrect stage assignments), FUB support can roll back imports within 48 hours. Always test import with 50-100 record sample before full import—catch mapping errors early.

**How do I handle HubSpot integrations (Zillow, Realtor.com, Facebook Ads) during migration?**

Disconnect HubSpot integrations, reconnect to FUB before go-live. Process: (1) Identify all HubSpot integrations pulling leads (Zillow, Realtor.com, BoomTown, Facebook Lead Ads), (2) Pause integrations 1 week before migration (prevents new leads entering HubSpot during migration chaos), (3) Set up FUB integrations (FUB has native Zillow, Realtor.com connectors—easier than HubSpot), (4) Test FUB integrations with 5-10 test leads, (5) Reactivate integrations pointing to FUB on go-live day. Downside: 1-week lead flow pause. Alternative: Use Zapier to bridge HubSpot → FUB during migration (leads enter both systems until cutover).
