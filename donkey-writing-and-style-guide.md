# Donkey writing and style guide

A reference for anyone (human or model) drafting or editing a post in Dug's
voice. Dug enjoys writing and normally does it himself. This file exists for
the occasional moment he wants to capture but has no time for, so that a draft
comes back close enough to the real thing that he only has to tweak it.

Excluded from the Jekyll build via `_config.yml`. Last revised 6 November 2026.

## What the blog is

donkeyontheedge.com has run since January 2002. Chris Raettig suggested it.
Blogger threw a JavaScript error on the first attempt so Dug wrote his own
CMS, then moved through Movable Type to Jekyll on GitHub Pages. Roughly two
thousand posts.

Early on Dug liked that Google promoted the blog. Then he realised nobody
reads it, and the purpose shifted. Most of what matters here is written so
CU-1 and CU-2 can hear his voice after he's gone. He wishes his Mum had
blogged. Keep that in mind: a post is a note left for two specific people, not
content for an audience.

## Five registers

They overlap and a single post can carry two. Identify which one a draft is in
before writing a word.

**1. Wonder at internet things.** The early excitement and belonging of working
in digital. Open servers, view source, "we all give a little and get a lot
back". Curiosity about a new thing, often with a question rather than a
verdict.

> So OK, what's with the Numa thing? Could someone explain why hundreds of
> youtubers were lipsyncing to Numa numa and what is it about this gang that
> the comments are particularly bitchy? (2006)

**2. Family stories.** Things that happened, recorded plainly. CU-1's birth
was live-blogged from the Royal Free on 30 May 2002 ("4cm dilated - off to
labour ward soon"). Kids, skateboards, fishing, choir, trampolines.

> So CU-2 caught a fish today (and yesterday) he's really getting into the
> swing of this fishing thing:-) (2014)

**3. Activism.** Fighting BT, anger at AdSense, large tech empires rolling
over the ordinary citizen, unaccountable algorithmic justice. Irritated, not
ranting. The complaint is specific and usually technical.

> BT ADSL service does not include an SMTP server -- This is just amazing, you
> can connect to the BT network via a BT phone line, using a BT broadband
> userid and password, but they still refuse to authenticate you if your email
> address isn't a BT address. I can't see how this is even legal. (2005)

**4. Withdrawal.** Since the identity theft in 2018: not quite Luddite, but a
rejection of mobile phones and social media. Shows up obliquely (a GDS app
makes him nervous, a LinkedIn thread turned nasty) rather than as a declared
position.

**5. Recording a moment for CU-1 and CU-2.** The most important one. Written
in the second person to the children, often starting "So CU-2, you won't
remember this but...". No audience in mind. Handle with care.

> So CU-1 and CU-2 this is just to remind you of the day, your mother held a
> ceremony in the garden with a little cross made out of candles and you all
> shared some memories of your time with her. (2017)

## How the sentences work

- **Short.** Most posts are one to three paragraphs. A long post is a sign
  something has gone wrong, unless it is an argument (register 3).
- **Dropped subjects.** "Spent Sat eve and Sunday on the Suffolk coast."
  "Managed to finish work on time on Wednesday." Postcard, not essay.
- **Starts mid-thought.** "So", "Well", "Just came across", "Boy I've just
  worked myself into a lather". No introduction, no throat-clearing.
- **Dry understatement, not jokes.** "Caveat card-holder. #fail". Raise an
  eyebrow and move on. Never explain the joke.
- **The smiley has a nose.** ":-)" and ";-)" and ":-(" , usually glued to the
  end of a sentence with no space. Used in 2009, 2013 and 2026. Not emoji.
- **Vocabulary.** kinda, darn, folk, til, wee, chap, punter, kerfuffle,
  bollocking, a lather, no dice, man people have a lot of free time. UK
  spelling with a Scottish and Parisian undertow.
- **Double hyphen as a dash** "--" with no spaces, from the Movable Type
  days. Not an em-dash.
- **Technical detail only when it serves a point about people.** MPEG-2 and
  1996 appear in the DVD post to land "what do they mean by DVD quality".
  The reader is assumed to keep up; nothing is explained twice.
- **Place is named.** Suffolk, the Forth, Callander, Finchley, Cardiff "a town
  v distant from your home in London", growing up in Paris.
- **Institutions get a nickname.** Big Nicola, Zuckstuff, the Viagra-peddling
  scum, Technorati Totty. Affectionate contempt.
- **When it's serious, plainer not grander.** The Delville Wood post is short
  declaratives, names and dates, one letter, then hashtags. Do not reach for
  eloquence. "There was no question whatsoever in his mind about what he had
  to do."
- **Typos stay.** The posts are unedited in a good way. Don't polish a draft
  beyond what Dug would. Don't fix his spelling in old posts.
- **Ends when it ends.** Often on a trailing "..." or a smiley. No summary,
  no sign-off, no call to action.

## Things that are not Dug

- Lists of three with parallel structure.
- Rhetorical questions that answer themselves.
- "In today's world", "it's worth noting", "at the end of the day".
- Any sentence that sounds like LinkedIn. (The imported LinkedIn posts are a
  little more composed, with a setup line and a turn, but that is the
  platform, not the house style.)
- Explaining a reference. If he says Adnams, the reader knows or looks it up.
- Emotional language stated outright. Feeling is shown by what he chose to
  record, not by adjectives.
- Headers inside a post.

## Front matter

Copy a recent post. Minimum:

```yaml
---
title: "A DVD in 2026"
date: 2026-01-01 01:46:04 +0000
image: "images/linkedin/a-dvd-in-2026.webp"
alt: "Abstract painting in the manner of Paul Klee, generated from the words of this post"
description: "Writing a history of the DVD, Dug finds HMV still selling Mission: Impossible on DVD for £10."
categories:
  - "Things Dug cares about"
author: dug
tags:
  - "dvd"
  - "copyright"
---
```

Categories in use, by weight: Linkage, Techno-bollocks, Family, Pictures,
Things Dug cares about, Our story, Business transformation. Family-register
posts go in Family. Imported LinkedIn posts carry `source: linkedin` and a
`linkedin_url`. The `description` is written in the third person ("Dug finds
...") because it feeds the search index and previews.

Images: 1600px wide webp under `images/`, originals kept out of the repo.

## Picture grids

A post can carry a grid of images via `bodygallery` (up to 8 images get a
designed mosaic; the rest flow underneath as a contact sheet),
`bodygallerysmaller`, or `headergallery` (beside the header image). Each
entry is `path-under-images: target`, and the target decides what the grid is
for:

- **No target** (`- ixus/161.jpg:`). The picture is the point. Thumbnail
  opens the full image. Family albums, rolls of film, memorials. Most grids.
- **A post slug** (`- mum.jpg: Happy-Birthday-Ruth`). The picture is a
  doorway into the archive. Used to curate the blog's own past for CU-1 and
  CU-2 (see "More old pics", April 2020).
- **A URL** (`- coldwarsteve.jpg: https://...`). Something found and shared
  because it is interesting in itself, with credit. The Week in Pictures
  series, 2020.

A grid post has almost no text: one or two lines, then the pictures. No
captions; the EXIF date stamp is the only label. The order of the first eight
is the only editorial decision. Five of the grids have exactly 24 images,
which is a roll of film. Images go in `images/<post-folder>/` as 1600px
webp. The `/pictures/` wall is generated from the same data.

## Hard rules

- The children are CU-1 and CU-2 in all content. Their real names and
  initials must not appear anywhere in the repo. See the forbidden-name rule
  in `CLAUDE.md` for the full list and the word-boundary matching rule.
- Never post for him. A draft goes into `_posts/` as a file for him to read,
  edit and commit via GitHub Desktop. No pushes.
- After adding a post, run `./.refactor-baseline/maintain.sh` so the search
  index and the pictures wall pick it up.

## Worked example

Dug's brief: "Went canoeing on the Forth after work, sun still up at nine,
lockdown radius is five miles, missing the lochs near Callander."

What he actually wrote (17 June 2020):

> Managed to finish work on time on Wednesday. Nice thing about living in
> Scotland is it stays light later in summer. Looking out the window as I
> write this at almost 9pm the sun is still in the sky.
>
> So lockdown is begining to be lifted but big Nicola is saying I need to stay
> 5 miles for my home.
>
> The other nice thing about Scotland is you can usually find a body of water
> fairly close by. The Forth is a bit of a dirty old river, runs through major
> argicultural land and it's on the murky side. Counting the minutes til I can
> head back to the lochs out west near Callander. Hopefully soon...

Note what a model would be tempted to add and he didn't: no opening line about
lockdown, no reflection on what the river means, no tidy ending. Two typos
left in. The feeling is entirely in "Counting the minutes".
