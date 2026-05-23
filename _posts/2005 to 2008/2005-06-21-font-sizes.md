---
layout: post
title: "Font sizes"
date: 2005-06-21 07:45:13
description: "Recently lost my rag with a very nice person on one of the HCI lists I subscribe to. My juvenile, agressive and totally uncalled-for behaviour was triggered by the fact that the person works at Verisign (regular readers may remember&#8230;"


image: images/defaultThumbnail.png
alt: ""


author: dug
---

Recently lost my rag with a very nice person on one of the <span class="caps">HCI </span>lists I subscribe to. My juvenile, agressive and totally uncalled-for behaviour was triggered by the fact that the person works at Verisign (regular readers may remember <a href="/say-goodbye-to-netsol-verisign/">this</a>, <a href="/649411011/">this</a>, <a href="/the-scum-that-just-wont-die/">this</a>, <a href="/more-verisign/">this</a>, or even <a href="/lets-put-netsol-to-death/">this</a> or may even have displayed <a href="/leaving-verisign/">this banner</a>). She was enquiring about font-sizes, not as it turns out whether scalable fonts in web services are a good idea (she already knows they are) but whether they were in use in real-world applications (as opposed to public-facing websites). 

As part of the general flow of font-size-related helpfulness, one of the respondents posted an interesting page from <a href="http://www.humanfactors.com/downloads/feb02.asp">Human Factors</a>

<blockquote>...What can we conclude from these studies?

<ul>
<li>No Web page fonts should be less than 10-points,</li>
<li>Optimal reading speed for most adults will be elicited with 12-point fonts (size=3)</li>
<li>There is probably no reliable difference in reading speed for most adults when viewing common font styles (Arial, Verdana, Georgia, Times New Roman),</li>
<li>Most users tend to prefer sans serif fonts (Arial, Verdana), and</li>
<li>Older users will benefit from type sizes that are at least 14-points.</li>
</ul></blockquote>

All the tests mentioned in the article were performed with black text on a white background, but the three different tests used different monitor sizes and resolutions which makes useful comparison difficult.

The findings were helpful, but only up to a point. Strangely, all the research is conducted in point units rather than pixels (font-size:9px) or keywords (font-size:x-small) which would have been more useful, as point measures have no real consistency in the world web browsers, OSs, video cards and monitors.

Other factors would have increased the usefulness of this research. 

The relationship between point-size and line-length is not factored in and would definitely account for some of the results. Not including a number of characters per line in a readability test isn't such a great idea (strangely, the guy who taught me this stuff specified number of words, not characters--I've never worked out if the brain handles words and characters differently and whether I should be counting characters or words in my layouts). 

Anyways, getting back on topic, I was able to report that a large financial services institution that I was contracting for a couple of weeks back has implemented scalable fonts <strong>even</strong> in it's 'private' applications (it offers password-protected tools for UK financial advisers) which is really very encouraging.

Finally, has anyone used the <a href="http://www.humanfactors.com/about/swmethod.asp">Schaffer-Weinschenk Method</a> of user-centred design and is it any good?
