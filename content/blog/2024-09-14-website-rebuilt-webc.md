---
title: I rebuilt my website from scratch with WebC
description: The background and design decisions that went into my new website.
tags:
  - Development
related:
  - Site engineering
---

## Background

“Huh?” you might ask, “didn’t you develop a custom [Vue plugin for Eleventy](2022-10-22-eleventy-plugin-vue.md) just for your website?”

Yes, in 2022 I spent a lot of time setting up my website with statically rendered Vue templates. Back then, the officially supported list of template languages for Eleventy was already long. But to be honest, the “old-school” JavaScript-based templating languages were (and still are) lacking when it comes to developer experience.

The popularity of Vue meant there was plenty of support in developer tools, from [Stylelint](https://stylelint.io/user-guide/get-started/#linting-css-like-languages-and-css-within-containers) to [ESLint](https://eslint.vuejs.org/) to [VS Code](https://marketplace.visualstudio.com/items?itemName=Vue.volar). And most crucially, an [official plugin for Eleventy](https://github.com/11ty/eleventy-plugin-vue) which was the inspiration for [my own plugin](https://github.com/mvsde/eleventy-plugin-vue).

When discussing developer experience for markup template languages, I first and foremost want:

1. Autocomplete
2. Formatting

The Vue template language provided both, so I journeyed down the road of statically rendered Vue templates. It mostly worked, with some weirdness here and there I had to work around.

Maintaining a template language plugin for Eleventy wasn’t on my bucket list though, so I finally decided to ditch the whole thing and start from scratch.

## WebC

[WebC](https://www.11ty.dev/docs/languages/webc/) is the “Eleventy template language”. It borrows a lot of design decisions from Vue, perfect for someone like me who really digs Vue’s template language design. Furthermore, WebC is a 100% parser-compatible superset of HTML which means code editors and developer tooling like linters and formatters support it out-of-the-box.

To further improve the developer experience in VS Code, I created a [WebC extension](https://marketplace.visualstudio.com/items?itemName=fynn.vscode-webc). It adds basic autocomplete support for HTML element attributes, links to the documentation, semantic highlighting for WebC components and attributes, and definitions so <kbd>Ctrl</kbd> + Clicking and the respective keyboard shortcuts take you to the component file.

(Whoops, I got nerd-sniped again, literally _while writing this blog post_. Which is the reason it’s delayed by a few months.)

## Design

I was unhappy with the [old design of my website](https://web.archive.org/web/20240327204256/https://fynn.be/) for quite some time. And while I have a design background that initially got me into web development more than 10 years ago, I haven’t “practiced” that skill and focused solely on frontend development and digital accessibility.

Instead of struggling through a redesign, I stripped every style and started with a “naked” HTML document enhanced with very little CSS. Colors are left monochrome, the layout is basic, one might even whisper the word _brutalist_.

The one striking feature is typography. I spent hours browsing Google Fonts and trying different fonts until I found a combination I am happy with. [Teko](https://fonts.google.com/specimen/Teko) by Indian Type Foundry for headings – a blocky, bold, condensed font contrasting starkly with the body text. Which is set in [Work Sans](https://fonts.google.com/specimen/Work+Sans) by Wei Huang, optimized for legibility on various screen resolutions, but retaining some character and airiness. For monospace I turned to my trusty [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) which I’ve used as my editor font since its release in 2020.
