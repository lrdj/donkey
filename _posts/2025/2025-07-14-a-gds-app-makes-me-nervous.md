---
title: "A GDS app makes me nervous"
date: 2025-07-14 20:47:40 +0000
description: "Building on Ben's post, Dug worries a GDS app could pull focus from universal access on the open web."
categories:
  - "Things Dug cares about"
author: dug
tags:
  - "linkedin"
  - "gds"
  - "apps"
  - "accessibility"
linkedin_url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7350627063558463491"
source: linkedin
---

Building on Ben's post (wouldn't fit in the comments).

First reaction - a GDS app makes me nervous as it has the potential to create a siloed team that loses accountability for universal support, as their problem to solve (and backlog) becomes increasingly centred on device features like biometrics and the secure services they enable...

Not thrilled should the app begin to become primary channel:

17 % of UK adult internet users are smartphone‑only, and the share rises to 31 % in DE socio‑economic groups. One in three of those users say the form‑factor already disadvantages them and we're trying to overcome exclusion.

Distribution is subject to the platform gatekeepers review, their fees and any policy shifts (such as DEI under MAGA etc). The open web remains the only almost sovereign channel.

govuk’s design system and Frontend framework with their WCAG AAA targets already reach assistive technology users via the web. Duplicating that in a device-native UI increases QA burden and risk of divergence.

Every extra native screen needs security review, localisation, regression testing and post‑release patching. If the app ever grows beyond a thin security or localisation skin, then the cost will challenge the benefits.

Will GDS give the people any guarantees? How do y'all feel about these suggestions:

No service task will be app‑only; the website (and its installable PWA) must and will remain complete.

The service ecosystem will be Open-APIs-first. It will expose notifications and wallet content through standards so third‑party assistive apps (e.g. screen‑reader overlays) are not locked out.

Every screen, API call and database table will be designed so you collect only the personal data that is strictly necessary for the stated purpose.

Digital ID cards, driving‑licence QR codes or veteran‑status proofs will live in the handset’s trusted execution environment, not in a central gov database.

Create a reusable, human‑readable privacy notice pattern—similar to the govuk cookie banner or form‑error patterns—that sets out what data we collect; why we need it; how long we keep it; who (if anyone) sees it; how users can opt out or delete it. The language of the notice must be clear enough that an average 12‑year‑old can understand it.

The app will be released as an ongoing public beta, with source‑available UI code and fortnightly changelog blogs, mirroring govuk’s historic agile transparency.

Every campaign will sign‑post both the app store links and the web route to avoid compulsion or even perceived compulsion.

Or are they already doing this and this comment is a total waste of time;-)
