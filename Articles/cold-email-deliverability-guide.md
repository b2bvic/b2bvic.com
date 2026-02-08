---
title:: Cold Email Deliverability Guide: Infrastructure, Warming, and Inbox Placement for B2B Outreach
description:: Technical deliverability setup for cold email campaigns. SPF/DKIM/DMARC configuration, domain warming protocols, and inbox placement optimization.
focus_keyword:: cold email deliverability guide
category:: b2b-strategy
author:: Victor Valentine Romo
date:: 2026.02.08
---

# Cold Email Deliverability Guide: Infrastructure, Warming, and Inbox Placement for B2B Outreach

Deliverability infrastructure determines whether your cold email reaches the inbox or vanishes into spam filters before a prospect ever sees it. **Google Workspace** and **Microsoft 365** process authentication records, monitor sending patterns, and score sender reputation before routing messages—and a single misconfigured DNS record or aggressive send pattern can tank your domain's reputation for months.

This guide covers the technical foundation: authentication setup, domain warming protocols, inbox placement monitoring, and reputation recovery tactics that B2B operators use to maintain consistent delivery rates above 85%.

## Authentication Stack: SPF, DKIM, DMARC

Email authentication proves to receiving servers that you control the sending domain and haven't spoofed the sender address. Without proper records, **Gmail** and **Outlook** route messages directly to spam or reject them entirely.

### SPF Configuration

**Sender Policy Framework** (SPF) lists which IP addresses can send email on behalf of your domain. Create a TXT record at your root domain:

```
v=spf1 include:_spf.google.com ~all
```

If you send through multiple services (**Mailgun**, **SendGrid**, **Amazon SES**), chain includes:

```
v=spf1 include:_spf.google.com include:sendgrid.net include:amazonses.com ~all
```

Use `~all` (soft fail) during testing, then switch to `-all` (hard fail) once you've verified legitimate sends pass. Too many lookups (more than 10 DNS queries) break SPF—flatten your record or consolidate services.

### DKIM Setup

**DomainKeys Identified Mail** (DKIM) adds a cryptographic signature to outgoing messages. The receiving server verifies the signature against a public key published in your DNS.

In **Google Workspace**, navigate to Apps → Google Workspace → Gmail → Authenticate email, then generate a 2048-bit key. Add the provided TXT record:

```
google._domainkey IN TXT "v=DKIM1; k=rsa; p=[public_key]"
```

For cold email platforms like **Instantly** or **Smartlead**, generate a separate DKIM selector (e.g., `instantly._domainkey`) to isolate cold sending from transactional mail.

### DMARC Policy

**Domain-based Message Authentication, Reporting and Conformance** (DMARC) tells receiving servers what to do when SPF or DKIM checks fail. Start with monitoring mode:

```
_dmarc IN TXT "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com; pct=100"
```

This sends aggregate reports to your inbox without affecting delivery. After two weeks of clean reports, escalate to quarantine:

```
_dmarc IN TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com; pct=100"
```

And eventually reject:

```
_dmarc IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com; pct=100"
```

A reject policy signals to **Microsoft** and **Google** that you take sender authentication seriously, which improves domain reputation.

## Domain Warming Protocol

A new domain or email address has zero sending history. Blast 500 cold emails on day one and **Gmail** flags your domain as a spam source, throttling delivery for months.

### Warming Timeline

Warm domains gradually over 4-6 weeks:

- **Week 1**: 10-20 emails per day per inbox (personal replies, transactional sends)
- **Week 2**: 30-50 emails per day (mix cold + warm traffic)
- **Week 3**: 75-100 emails per day (introduce sequences)
- **Week 4**: 150-200 emails per day (scale to target volume)
- **Week 5-6**: 250-300 emails per day (full cold outreach)

Distribute sends across multiple inboxes (3-5 addresses per domain). If one inbox gets flagged, others remain unaffected.

### Warming Tactics

**Gmail self-sends**: Create a secondary Gmail account and exchange emails with your new address. Open, reply, move to primary tab. This trains **Gmail's** algorithm that your domain produces wanted mail.

**Mailbox warmers**: Services like **Lemwarm**, **Mailreach**, or **Warmbox** automate reciprocal sending with other users' inboxes. Your inbox sends/receives 20-50 emails daily, all marked as non-spam, which builds positive sender reputation.

**Manual engagement**: Email colleagues, clients, vendors from the new address. Request replies. High reply rates (>5%) signal engagement, which boosts inbox placement.

### Avoid Warming Mistakes

Don't send identical content during warmup. Vary subject lines, body copy, and recipient domains. **Gmail** detects templated sends and penalizes accordingly.

Don't spike volume. A sudden jump from 50 to 300 emails triggers spam filters even if authentication passes. Gradual ramps prevent detection.

Don't ignore bounces. Hard bounces (invalid addresses) damage sender reputation. Clean your list before warming starts—use **ZeroBounce** or **NeverBounce** to verify deliverability.

## Inbox Placement Monitoring

Authentication and warming mean nothing if you can't measure where your emails land. Inbox placement testing reveals whether messages reach the primary inbox, promotions tab, or spam folder across major providers.

### Seed Lists

A seed list contains email addresses across **Gmail**, **Outlook**, **Yahoo**, and corporate domains. Send your cold email to the seed list, then check each inbox manually or use a monitoring tool.

**GlockApps** and **MailGenius** offer seed list testing. They provide inbox/spam percentages by provider and flag authentication failures, blacklist appearances, and content triggers.

### Content Analysis

Certain words and patterns tank deliverability:

- **Spam trigger words**: "free," "guarantee," "limited time," "act now," "click here"
- **All caps subject lines**: "EXCLUSIVE OFFER FOR YOU"
- **Excessive punctuation**: "Check this out!!!"
- **URL shorteners**: bit.ly, tinyurl (used in phishing, flagged aggressively)
- **Large images with little text**: Triggers image-spam filters

Run your email through **Mail-Tester** before sending. It scores your message and highlights deliverability issues.

### Engagement Metrics

**Gmail** and **Outlook** track recipient behavior. High open rates (>25%), reply rates (>5%), and low unsubscribe/spam complaint rates improve sender reputation.

Low engagement signals unwanted mail. If recipients never open your emails, algorithms route future sends to spam even if authentication passes.

Track metrics in your cold email platform:

- **Open rate**: >20% is healthy; <10% indicates deliverability or list quality issues
- **Reply rate**: >5% means strong targeting and copy; <2% suggests poor fit or weak messaging
- **Bounce rate**: <2% is acceptable; >5% damages reputation
- **Spam complaint rate**: <0.1% is safe; >0.3% triggers provider penalties

## Sender Reputation Recovery

If your domain lands in spam, reputation recovery takes weeks. You can't simply authenticate and resume sending—providers throttle flagged domains until they observe sustained positive behavior.

### Identify the Problem

Check blacklist status at **MXToolbox** or **MultiRBL**. If listed on **Spamhaus**, **Barracuda**, or **SpamCop**, request delisting and address the root cause (compromised account, purchased list, aggressive send patterns).

Review DMARC aggregate reports for authentication failures. If SPF or DKIM breaks, fix DNS records immediately.

Query **Google Postmaster Tools** for domain reputation and spam rate. A "bad" or "low" reputation requires throttling sends and increasing engagement before volume returns.

### Throttle and Re-Warm

Cut send volume by 70-80%. If you were sending 300 emails daily, drop to 50-75 and focus on high-engagement recipients (past clients, warm leads, opted-in contacts).

Remove inactive addresses. If someone hasn't opened an email in 90 days, suppress them. Sending to unengaged contacts reinforces poor reputation.

Re-warm over 4-6 weeks following the protocol above. Gradual volume increase with high engagement signals to providers that you've cleaned up practices.

### Content Adjustments

Strip spam triggers from subject lines and body copy. Use plain text or lightly formatted HTML (no flashy templates). Personalize aggressively—mention specific details about the recipient's company, role, or recent activity.

Segment lists by engagement level. Send to your most engaged segment first, then expand to colder contacts as reputation improves.

### Dedicated IP Considerations

Most B2B cold email runs on shared IPs (multiple senders use the same IP address). Reputation is shared, which means your deliverability depends partly on other senders' behavior.

A dedicated IP gives you full control but requires 50,000+ emails monthly to maintain consistent volume (low-volume dedicated IPs hurt deliverability because providers can't assess reputation).

For most B2B operators sending 5,000-20,000 cold emails monthly, shared IPs via **Google Workspace** or **Microsoft 365** work fine—just follow authentication and warming protocols.

## Technical Troubleshooting

### Emails Land in Promotions (Gmail)

**Gmail** categorizes emails into Primary, Promotions, and Social tabs using machine learning. Promotional language, unsubscribe links, and commercial intent trigger Promotions placement.

To reach Primary:

- Remove "unsubscribe" links (they signal commercial email)
- Strip tracking pixels (Gmail detects them)
- Use plain text instead of HTML
- Write conversational copy without salesy language
- Request replies (Gmail prioritizes emails that generate conversations)

### Outlook Sends to Junk

**Microsoft 365** uses SmartScreen filter, which weighs sender reputation, authentication, and content. If Outlook consistently junks your emails:

- Verify SPF, DKIM, DMARC alignment
- Check **Microsoft SNDS** (Smart Network Data Services) for IP reputation
- Throttle send volume and focus on engagement
- Ask recipients to move your email from Junk to Inbox (signals to SmartScreen that your mail is wanted)

### High Bounce Rate

Hard bounces (permanent delivery failures) indicate invalid addresses. Causes include:

- **Typos**: john@gmial.com instead of john@gmail.com
- **Expired addresses**: Employee left company, email deactivated
- **Fake signups**: Prospects enter fake emails to avoid follow-up
- **Catch-all domains**: Domain accepts all emails at SMTP level but never delivers

Validate emails before sending using **ZeroBounce**, **NeverBounce**, or **Clearout**. These services ping mail servers to verify deliverability without sending an actual email.

### Domain Flagged by Postmaster Tools

**Google Postmaster Tools** shows domain reputation, spam rate, and authentication status for **Gmail** users. If reputation drops to "low" or "bad":

- Stop sending immediately (continued sending worsens reputation)
- Review recent campaigns for spam triggers or poor targeting
- Focus on re-engagement campaigns (send only to past openers/repliers)
- Request removals: If recipients mark you as spam, email them personally asking to unmark or unsubscribe

Reputation recovery takes 2-4 weeks of clean sending. Patience matters—rushing back to full volume resets progress.

## Advanced Deliverability Tactics

### Rotate Sending Domains

Some operators use separate domains for cold outreach (e.g., reachout-yourcompany.com) to protect the primary domain (yourcompany.com) from reputation damage. If the cold domain gets flagged, your main domain remains clean.

Forward the cold domain to your main site and set up DMARC/SPF/DKIM identically. Prospects won't notice the difference, and you isolate risk.

### Custom Tracking Domains

Cold email platforms embed tracking pixels to monitor opens. **Gmail** and **Outlook** detect default tracking domains (e.g., instantly.click, smartlead.ai) and filter accordingly.

Set up a custom tracking domain (track.yourcompany.com) via your platform's DNS settings. This reduces filter detection and improves deliverability.

### Reply Rate Optimization

High reply rates signal engagement, which improves sender reputation. Tactics:

- **Ask questions**: End emails with "Does this resonate?" or "Worth a 15-minute call?"
- **Personalize aggressively**: Mention recent company news, funding rounds, or job postings
- **Short emails**: 50-100 words outperform 200+ word blocks
- **Plain text**: No images, no HTML, just conversational text
- **Follow-up sequences**: 4-7 touchpoints convert better than single sends

Aim for >5% reply rate. Anything below 2% indicates poor targeting or weak messaging, which eventually harms deliverability.

### Suppression Lists

Maintain a global suppression list of unsubscribes, bounces, and spam complaints. Re-sending to suppressed contacts guarantees spam complaints and damages reputation.

Sync suppressions across campaigns. If someone unsubscribes from one sequence, exclude them from all future cold outreach.

## Frequently Asked Questions

**How long does domain warming take before I can send at full volume?**

4-6 weeks for a new domain or inbox. Start at 10-20 emails daily, increase by 20-30% weekly, and reach 250-300 emails per day by week 5-6. Rushing this process triggers spam filters and delays recovery by months.

**Can I use my primary business domain for cold email, or should I create a separate domain?**

If your primary domain sends transactional emails (order confirmations, password resets, client communications), isolate cold outreach on a separate domain. A single spam complaint or blacklist appearance on your cold domain won't affect critical transactional delivery. Forward the cold domain to your main site for legitimacy.

**What's the difference between SPF alignment and DKIM alignment in DMARC?**

SPF alignment requires the "From" domain to match the "Return-Path" domain. DKIM alignment requires the "From" domain to match the "d=" value in the DKIM signature. DMARC passes if either SPF or DKIM aligns, but passing both strengthens authentication. Use "relaxed" alignment for subdomains (e.g., marketing.yourdomain.com) or "strict" alignment for exact matches.

**How do I recover a domain that's already flagged as spam by Gmail?**

Stop all cold sending immediately. Submit a request via **Google Postmaster Tools** explaining the issue and steps taken to resolve it. Throttle to 20-30 emails daily, focusing on high-engagement contacts (past clients, warm leads). Gradually increase volume over 4-6 weeks while monitoring inbox placement. Reputation recovery requires sustained positive behavior—there's no shortcut.

**Do email verification services guarantee deliverability?**

No. Verification tools (**ZeroBounce**, **NeverBounce**) identify invalid, disposable, and catch-all addresses, which reduces bounce rates. They don't predict whether valid addresses will engage with your content or mark you as spam. Deliverability depends on authentication, sender reputation, content quality, and recipient engagement—verification is one piece of the system, not a solution by itself.
