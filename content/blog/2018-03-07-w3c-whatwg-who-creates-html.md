---
title: W3C and WHATWG – Who’s the authority on HTML?
description: Once upon a time the W3C created the HTML standard. But that responsibility moved to the WHATWG after the XHTML fiasco.
tags:
  - Development
---

Way back in 2004 the _World Wide Web Consortium_ (W3C) decided to abandon HTML and shift its focus to XHTML. Concerned with this move, individuals from Apple, Mozilla, and Opera formed the _Web Hypertext Application Technology Working Group_ (WHATWG) to continue the development of HTML. Notable specifications by WHATWG are HTML (formerly HTML5), the DOM and Fetch standards, and Storage Standards (localStorage).

One might ask: 2004? That’s a long time ago. Why is this story relevant 14 years later at the beginning of 2018?

## A new player enters the game

On December 11th, 2017 the WHATWG published the blog post “[Further working mode changes](https://blog.whatwg.org/working-mode-changes)” detailing a new _Intellectual Property Rights_ (IPR) policy and the establishment of a _Steering Group_. Furthermore, Microsoft joined, hence completing the organization. Now, all four big players are part of WHATWG: Apple, Google, Microsoft, and Mozilla. Each company holding a chair of the [Steering Group](https://github.com/whatwg/sg).

## Two specs for one language

While WHATWG advanced HTML, the W3C hasn’t been sitting idle. According to Wikipedia (“[WHATWG History](https://en.wikipedia.org/wiki/WHATWG#History)”) and a thread on Reddit from earlier this year (“[What is the difference between the W3C and the WHATWG?](https://www.reddit.com/r/javascript/comments/5swe9b/what_is_the_difference_between_the_w3c_and_the/)”), the W3C forked the [WHATWG HTML Living Standard](https://html.spec.whatwg.org/) creating a [second HTML specification](https://www.w3.org/TR/html5/). This resulted in two separate, but strongly interwoven standards — one specifically by the browser vendors, the other one by the original standards organization.

## The past, the present, and the future

[W3C endorsed the latest changes to WHATWG](https://www.w3.org/blog/2017/12/whatwg-working-mode-changes/) in an official blog post, hoping for a greater collaboration between both organizations. _Michael Champion_, part of the WHATWG Steering Group, states on Twitter:

> […] Living Standards are what "evergreen" browsers require, those of us who resisted have seen the light. But those who didn't think the Living Standards needed a patent policy have also seen the light I suppose. This reset is cold water on lots of old flame wars.
>
> — [Tweet by @mc2hampion](https://twitter.com/mc2hampion/status/940476343447203845), written on 2017-12-12 at 08:00 AM.

But many members of the web community still have strong opinions about the different approaches. One of the authors of the W3C HTML Specification, Steve Faulkner, sparked an interesting [discussion regarding semantics](https://twitter.com/stevefaulkner/status/940271868329824256) with a [follow up about accessibility](https://twitter.com/aardrian/status/940275362570924032) by Adrian Roselli. The _W3C Technical Architecture Group_ (TAG) seems to be worried about [WHATWG rendering W3C HTML obsolete](https://cryptpad.fr/pad/#/1/view/GpGiv+gMMGEMUdb6lQ2akg/gCtzEJ3B8wHxZ2lPsbTKg2ffmacIq3g5Ljd3ZSi80-0/), since all major browser developers are now part of WHATWG. But the [comments on W3C’s blog post](https://www.w3.org/blog/2017/12/whatwg-working-mode-changes/#comments) and the aforementioned [Reddit thread](https://www.reddit.com/r/javascript/comments/5swe9b/what_is_the_difference_between_the_w3c_and_the/) are especially heated.

At the moment, it seems to be good advice to follow the extensive [MDN Web Docs](https://developer.mozilla.org/) which references both WHATWG and W3C.
