---
title: "Vibe-coding safely: the SDinGov workshop"
date: 2026-10-02 21:29:12 +0000
image: "images/linkedin/vibe-coding-safely-the-sdingov-workshop.webp"
alt: "Abstract painting in the manner of Paul Klee, generated from the words of this post"
description: "Dug shares the step-by-step guide and assets from his SDinGov workshop on vibe-coding safely in the prototype kit."
categories:
  - "Things Dug cares about"
author: dug
tags:
  - "linkedin"
  - "vibe coding"
  - "sdingov"
  - "prototyping"
linkedin_url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7511900112789536768"
source: linkedin
---

So last week was pretty intense with three days at SDinGov

I was lucky enough to be able to run a workshop on the first day. It was about learning to vibe-code safely: <https://sdingov.net/programme/architecture-skills-non-technical-people-who-want-vibe-code>

As part of the training I produced a step-by-step guide, and some folk at the event asked if I would share the assets. I figured why not?

The training activity list is here: <https://sdingov-architecture-skills.onrender.com/>  
It's an hour of hands-on tasks in one long scrolling page (that seemed like a good idea at the time). If I've messed up and there are any mistakes please let me know and I'll update the content.

The training is based around understanding where the code lives and where the data lives. So for example, I make a comparison table of vibe-coding on Lovable versus vibe-coding in the govuk protokit: <https://sdingov-architecture-skills.onrender.com/#lovable-or-kit>

Why suggest civil servants who want to vibe code use the protokit?

Well, the main idea is that all the files, including any data stores, are in your home folder so you can change them, hand them to a colleague etc. If you ask for an express app (as opposed to the SaaS classic Tailwind/React combo) you end up with raw materials you can see and where it's possible there's someone in the office who understands the code. Or, failing that, you can access the extensive community support on cross-gov slack. It's just a natural fit for civil servants:-)

Then the next question is what is the code you can generate like?

As an example, I asked my AI to create a demo of an app that allows a community pharmacist to monitor a number of patients taking blood pressure readings at home. The app needed to allow patients to add readings and pharmacists to view them. The UI was to change if readings were dangerous and the app needed to include a way for the pharmacists to message the patients. (explanation here: <https://sdingov-architecture-skills.onrender.com/#example-app>)

I asked Claude and it built the demo in 15 minutes (looks really snazzy on my phone).

Here's the pharmacist view: <https://sdingov-architecture-skills.onrender.com/healthtech-gov-skin/pharmacist>  
Note the reassuring govuk-esque UI, accessible, mobile first etc. right out of the box.

But then what if someone doesn't want that boxy look and feel? So I asked Claude to copy the app to a new folder and create a healthtech 'startupy' skin:  
Here's a patient view: <https://sdingov-architecture-skills.onrender.com/healthtech-startup-skin/patient/derek>

Basically, if the kit supports you generating all that in a few minutes, I'm guessing you could probably code anything you needed:-)

I guess I should add, if this sort of training seems like it might help your team, I'm at dug@goodlookslikethis.com
