---
title: "SONOS wants my NPS rating?"
image: images/sonos-clobber.jpg
author: dug
tags:
  - tech
  - audio
  - opensource
  - "business model innovation"
  - "business models"
---

SONOS keeps asking me to participate in NPS surveys. Today I thought I'd share my feedback.

> Thank you again for your recent purchase of Sonos!  We hope your onboarding experience 
> to all the features and capabilities your Sonos offers has been helpful.  To help us better 
> serve you and other Sonos owners in the future, we would appreciate your feedback regarding 
> the onboarding experience.  

1. Would I recommend SONOS to friends and family?
2. Why is that?

No I wouldn't. Why is that? For two main reasons, but in a nutshell, your hardware is brilliant and sounds great but your software is a disaster:

## You are asking your customers to freeze their home networks in early 2000s-era technology. 

I'm really not sure how this is a good idea and it may eventually result in your product's obsolescence. My Sonos CONTROLLER is connected to my network via wifi and is happily exchanging packets with the network router. My Sonos SYSTEM is connected to the same network and is happily exchanging packets with the same router. But my controller cannot see the Sonos system if it is connected to a different SSID. REALLY?!? WTF?!? 

You need to start being a lot more clever about how you use UDP/TCP over 802.x-controlled networks. Try mixing and matching discovery and transfer protocols, consider adding a little routing over bluetooth just to help devices know where they are? 

I'm not a technology person but in this day and age customers don't only have one single wifi base station anymore, we've figured out that the protocol is basically shit and we're beefing up our networks with range extenders and multiple base stations (and no doubt new tricks coming soon). If you don't start recognising that and adapting your software fast your whole thing is going to collapse.

## You are going it alone. 

You are never going to be able to make and support sufficient versions of your controller software on sufficiently varied platforms to keep everybody engaged and happy. My Dad just spent £2,000 on your kit and for that kind of money he expects it to work. Turns out his son (me) had to visit and tweak all the channel settings of his wifi devices--not a good onboarding experience. Add to that challenge the fact that he isn't going to be buying new phones or tablets anywhere near as frequently as I will. This means his expensive kit has to keep working even though the controller is on an unsupported device.

Meanwhile, as you're struggling to keep my Dad supported, you'll need to keep the hungry early adopters with large social media followings happy. 

Are you going to double the size of your software-engineering team? Open-sourcing is the only way you square this circle. Differentiate on the hardware and partner with the community on the software. Additionally, you can't own all the innovation. For example, my home network is crying out for "virtual SONOS players" -- all the fancy devices with great audio already on the wifi network could be incorporated into the controller space ("Play:virtual"?). If you did QA and platform management (APIs etc) then the open-source community could create the many apps to bring these devices into Sonos world.

Fingers crossed you're already doing this:-)

