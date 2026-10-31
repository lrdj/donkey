---
title: "What Claude Code can access on your Mac"
date: 2026-10-06 08:36:15 +0000
image: "images/linkedin/what-claude-code-can-access-on-your-mac.webp"
alt: "Black and white film still of old television screens stacked on metal shelving, each glowing with a grid pattern"
description: "Dug explains that Claude Code runs with your user's permissions, and considers running it as a separate user."
categories:
  - "Techno-bollocks"
author: dug
tags:
  - "linkedin"
  - "ai"
  - "claude"
  - "security"
linkedin_url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7513155149150736384"
source: linkedin
---

So just wanted to clarify a thing.

When you use #Claude code on a unix system (like MacOS), when you run Claude in the terminal it inherits the permissions of your user. This doesn't mean you're giving it root access to your machine, but its Bash tool spawns shell commands under your account. So, for example, $whoami would return your username, and it inherits your file access, environment, and credentials (SSH keys, git config, etc.).

I've started thinking I'm not super happy about that and am experimenting with running cc as a separate standard user so the wholesome goodness of Unix security can keep my stuff a bit safer...
