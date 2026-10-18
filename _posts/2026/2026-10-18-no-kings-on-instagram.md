---
title: "No Kings on Instagram."

image: "images/no-kings-instagram.jpg"
alt: >
   What's Next After 10/17? Election Defense Mass Call.

categories:
 - "Things Dug cares about"

author: dug

tags: 
  - federation
  - sovereingty
  - soveriegnsocial
  - meta
  - facebook
  - instagram
  - social
  - politics
  - democracy
  - usa
---

<!-- easier to read GH Kmarkdown tables? -->

<style>
  table { border-collapse: collapse; }

  td, th {
    border: 1px solid #ccc;
    vertical-align: top;
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  /* remove outer edges */
  thead th                { border-top: none; }
  tbody tr:last-child td  { border-bottom: none; }
  tr > *:first-child      { border-left: none; padding-left: 0; }
  tr > *:last-child       { border-right: none; }
</style>


I just read the news that Meta shut down the No Kings Instagram account. 

Clearly an automated fail-safe could have triggered the throttling because of a surge on that one account - absolutely fair enough. But realistically, given Meta's creepiness combined with their know-everything-all-the-time technology environment, the 'false alarm' could have been corrected in five minutes, not the five hours it took to get the community back online.

So I wondered how we could bypass the our platform lords.

A group whose members are already online does not need a hostile platform to coordinate. It can hand each member an installable web app, carry signed messages over several interchangeable open relays, and keep a fallback for every chokepoint.

The messaging itself is easy. The hard parts are reach, notifications, resilience and trust, and the riskiest assumption is behavioural: will people leave the app they already open 30 times a day?

This is a speculative note. It sets out the problem, an architecture worth exploring, and a cheap way to test it.

## Problem space

Many organisations use Instagram, and to a lesser extent WhatsApp and Facebook, to rally supporters and coordinate in real time. Examples include pledge drives, football matches and political party rallies.

**Why these platforms work for them**

- The audience is already there, so nobody has to be recruited onto something new.
- Joining costs almost nothing: the call to action (CTA) sits in an app people already have open.
- Notifications, media, identity and moderation all come for free.

**The scenario**

Suppose the platform owner turns hostile to a particular group. It might throttle reach, remove posts, suspend accounts, or [quietly degrade delivery](https://www.commoncause.org/press/common-cause-response-to-meta-removal-of-no-kings-coalition-instagram/). The group then realises that every member is already connected to the internet, so it does not actually need the platform in the middle.

The question is what a members-only coordination layer would look like. A member joins, is given something (a USB stick, as the FSF used to hand out, a printed card with a QR code, or simply a link to a web page), and installs software that lets them message everyone else in the group.

## What’s actually hard

Sending a message to a group is a solved problem. Four things make it hard in practice.

- **Reach:** people open Instagram out of habit, so a new tool needs a reason to be opened or a reliable way to interrupt them.
- **Notifications:** phones aggressively stop background apps, and iOS is the strictest.
- **Resilience:** a hostile party has several places to apply pressure, not just one.
- **Trust:** members must be able to tell a real organiser alert from a spoofed one.

**Where a hostile party could apply pressure, and the fallback for each**

| Chokepoint | How it can be used against the group | Fallback |
| --- | --- | --- |
| App stores | App removed or never approved | Installable web app (PWA), no store needed |
| Domain and DNS | Domain seized or blocked | Several domains; client mirrored on [IPFS](https://ipfs.tech) |
| Hosting | Server taken down | Several hosts in different jurisdictions |
| Messaging servers | Relay blocks the group | Clients use 3–5 interchangeable relays at once |
| Push services (Apple, Google) | Notifications dropped | ntfy app on Android (no Google dependency); SMS or email for critical alerts |
| Mobile network at events | Congestion in stadiums and rallies | Pre-cached plans; optional Bluetooth mesh (native app only) |

## Design principles

1. **Don’t invent a protocol.** Ride an open one where no single party can switch you off.
2. **Assume phones, not desktops.** A USB stick is a nice symbolic object, but in practice it’s a printed card with a QR code that opens a web app.
3. **Broadcast first, chat second.** Most of the value is in organisers sending signed alerts to everyone. Group chatter is harder to moderate and matters less.
4. **No single chokepoint.** Every dependency in the table above needs a fallback.
5. **Keep the CTA one tap away.** Messages carry actions (RSVP, pledge, map pin), not just text, so the convenience of the platform isn’t lost.
6. **Work when the network doesn’t.** Assume connectivity fails at the moment it matters most.

## Speculative architecture

Each member runs a web app that holds its own keys, reads signed messages from several relays at once, and is woken by push when something new arrives.

![Diagram: the organiser app publishes signed broadcasts and actions to three to five interchangeable relays; the member web app subscribes to them and is woken by push services (Web Push, with ntfy, SMS or email as fallbacks); an invite QR card carries the group ID, organiser keys and relay list.](/images/architecture-2.svg)

*Figure 1: Signed messages flow through interchangeable relays*

Losing any one relay, domain or push route degrades the service rather than stopping it.

**Components**

1. **Client: an installable web app (PWA).** No app store needed. It generates a keypair in the browser on first launch and stores it locally. Copies are hosted on several domains, with IPFS as a last resort.
2. **Onboarding: a signed invite.** The QR code or link carries the group ID, the organisers’ public keys and a relay list. The client trusts broadcasts only when signed by those keys, so a spoofed “rally cancelled” message fails.
3. **Transport: open relays.** Clients publish to and read from 3–5 relays at once, mixing public relays with the group’s own, run on different hosts and in different jurisdictions. Group content is encrypted with a shared group key.
4. **Notifications: Web Push,** which works on Android and, from iOS 16.4, on iOS once the app is added to the home screen. It still routes through Apple’s and Google’s push services, so keep fallbacks: the ntfy app on Android, which keeps its own connection open with no Google dependency, and SMS or email for critical alerts. (UnifiedPush is only available to native Android apps, not to web apps.)
5. **Actions: structured messages.** An RSVP, a pledge with an amount, a map pin or a vote renders as a button. This keeps the one-tap call to action.
6. **Event mode: offline-first.** Pre-cache plans, maps and contingencies before the event. Bluetooth mesh is an option for when the network is down, but a web app cannot do it; it needs a native Android app such as Briar.

**Transport options**

Nostr is the suggested starting point for a prototype because it is light, browser-friendly and has no single server.

| Option | How it works | Strengths | Weaknesses |
| --- | --- | --- | --- |
| [Nostr](https://nostr.com) | Signed events carried by any relay | No single server; easy to build in a browser | Relays see metadata; group encryption less mature |
| [Matrix](https://matrix.org/homeserver/about/) | Federated homeservers | Mature encrypted group chat; existing clients | Heavier to run; the homeserver is a target |
| [Delta Chat](https://reclaimthenet.org/recommended-tool/delta-chat) | Messaging over ordinary email | Very hard to block wholesale; webxdc mini-apps suit CTAs | Separate app install; less web-native |
| [Briar](https://briarproject.org) | Peer-to-peer, including Bluetooth and Wi-Fi mesh | Works with no internet at all | Android only; suited to small groups |

## Risks and open questions

- **Adoption:** will members install and keep opening a second app? This is the riskiest assumption and the first thing to test.
- **Metadata:** relays can’t read encrypted content, but they can see who posts and when, and anyone, including a hostile party, can run a relay.
- **Infiltration:** any open group will be joined by people who oppose it. Keep the public broadcast separate from a smaller trusted organiser tier.
- **Key loss and rotation:** what happens when an organiser’s phone is lost or seized, or a member leaves on bad terms? Rotating organiser keys and the shared group key needs to be designed in from the start.
- **iOS limits:** Web Push only works on iOS 16.4 or later and once the app is added to the home screen, so the onboarding has to teach that step.
- **Moderation and liability:** who is responsible for what’s said in group chat, and under which jurisdiction?
- **Legitimacy:** the same design serves a supporters’ club and a group with harmful aims. Governance and a code of conduct need to be part of the service, not an afterthought.

## Prototyping path

Test the behaviour before the technology, and only build what Step 0 shows people will use.

![Prototyping path: Step 0 behaviour test, Step 1 weekend PWA, Step 2 hostility drills, Step 3 group chat only if needed](/images/prototyping-path.svg)

*Figure 2: Test the behaviour before the technology*

| Step | What | Built with | What we learn |
| --- | --- | --- | --- |
| 0 | Move one real group onto an off-the-shelf tool for a single event | A Delta Chat group or an ntfy broadcast topic | Opt-in rate; how many people see an alert in time |
| 1 | Weekend PWA: signed broadcasts plus one action type (RSVP) | nostr-tools, a strfry relay on a cheap VPS, a small Web Push sender | Whether the install and notification flow works on real phones |
| 2 | Hostility drills | The Step 1 prototype | Behaviour when a relay dies, the main domain is blocked, or phones go offline |
| 3 | Group chat and moderation tooling | Matrix or encrypted Nostr groups | Only worth doing if Step 0 shows demand |

**Next steps**

- [ ] Pick a friendly group and an event for Step 0
- [ ] Define what counts as success (for example, share of members who saw the alert within 5 minutes)
- [ ] Build the Step 1 prototype

