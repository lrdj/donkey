---
title: "A first cut of the semantic site"
date: 2023-10-29 23:08:13 +0000
image: "images/linkedin/a-first-cut-of-the-semantic-site.webp"
alt: "Abstract painting in the manner of Paul Klee, generated from the words of this post"
description: "Dug pushes out a buggy first version of his site with no JavaScript, no imported fonts and no div tags."
categories:
  - "Techno-bollocks"
author: dug
tags:
  - "linkedin"
  - "web"
  - "html"
  - "semantic"
linkedin_url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7124532407382241280"
source: linkedin
---

OK Frank Sedivy Rey Dhuny James Nash I've pushed a first cut out. V buggy and untested, but it's an interesting first stab at semantic. The idea is the site has:  
- No javascript  
- No imported fonts  
- No Div tags (pretty sure I got rid of most of the &lt;spans> as well)

When I first decided to put my portfolio online, I went to to buy a theme (because that seemed like the sensible, grown-up thing to do). More I looked, more I strugled to find something simple enough to maintain, and above all, 99% of the "portfolio" themes out there have mystery meat navigation. You see a beautiful masonry grid of sexy pictures but you have no idea what anything is until you hover over it:-(

In the end I bought a theme called Haud (https://themeforest.net/item/haud-a-creative-portfolio-theme/23100689) by the very talented honryou. It was beautiful and had some fantastic sexy animation effects on the index pages. Best of all, the design wasn't mystery meat. At a glance you could see what was on offer:-)

So apologies to Honryou, I decided it was too heavy, and the code was too complicated and I wanted to stay flexible. So I rewrote my old blog template using his sepia toned mouse over effects (I figured, I paid for the theme I may as well use some of the CSS).

This got me in trouble as of course the Haud CSS was based on a DOM with hundreds of nested DIVs, so I pretty much had to recode the CSS as well...

So one of the bugs I haven't been able to fix yet is the height of the &lt;article> on mouseover. The effect relies on 'multiply' (like photoshop layers) so you need minimum two block objects to create the effect. This is easy if you can just add DIVs but a little trickier in this case.

Anyhow, it almost works and I guess it's pretty good for a first go:-)

New blog site: <https://goodlookslikethis.com>

Link: <https://goodlookslikethis.com/cases/leadership/>
