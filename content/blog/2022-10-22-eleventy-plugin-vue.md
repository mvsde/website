---
title: Why I built my own Vue plugin for Eleventy
description: Why and how I built my own Vue plugin for Eleventy.
tags:
  - Development
---

In [Eleventy + Vue 3](../eleventy-vue/) I explained how to use the [@11ty/eleventy-plugin-vue](https://github.com/11ty/eleventy-plugin-vue) and [Vue Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html) (SFCs) for Eleventy layouts. I then went on and built my own Vue plugin for Eleventy. _But why?_ one might ask.

First, the most obvious reason: The official @11ty/eleventy-plugin-vue is kinda unmaintained. Which is not that bad, since all the actual templating magic is handled by Vue and its template compiler. But there are a few quirks and workarounds needed, especially in combination with `<script setup>`.

Second, Zach Leatherman “soft-announced” the likely deprecation and archiving of the official @11ty/eleventy-plugin-vue:

> Accordingly, the `rollup-plugin-vue` repo is now _archived and not maintained_ and folks are recommended to use Vite instead of the rollup plugin for Vue compilation.
>
> Unfortunately, due to Vue’s upstream moves here, we’ll likely end up archiving `eleventy-plugin-vue` too.
>
> — [Adding Components to Eleventy with WebC](https://www.zachleat.com/web/webc-in-eleventy/#maintenance-woes) by Zach Leatherman

And third: Most importantly, side projects and open source are fun (they should be) and I wanted to play around with Vue Server-Side Rendering (SSR).

## About the plugin

[@mvsde/eleventy-plugin-vue](https://github.com/mvsde/eleventy-plugin-vue) is intended as an alternative for the official Vue plugin. It’s mostly a drop-in replacement but has some API differences. The plugin adds support for Vue SFCs as Eleventy layouts and includes a bunch of convenience methods.

::: Note
_Note:_ The plugin is currently in alpha. It works well with standard Eleventy setups but may not cover every edge case or more involved setups.
:::

### Installation

```sh
npm install --save-dev @mvsde/eleventy-plugin-vue
```

### Eleventy configuration

```js
const { pluginVue } = require("@mvsde/eleventy-plugin-vue");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginVue);
};
```

### Doctype transform

Vue SFCs can’t have `<!doctype html`> at the beginning of the template, so an Eleventy transform is included automatically which adds the doctype to all HTML files.

### \<script setup> and Composition API

The plugin exports Vue Composition API methods for accessing the [current page’s data](https://www.11ty.dev/docs/data/) and [JavaScript shortodes](https://www.11ty.dev/docs/shortcodes/) in `<script setup>`.

```html
<script setup>
	import { useData, useMethods } from '@mvsde/eleventy-plugin-vue'

	// Data supplied by Eleventy and the data cascade
	const { page, title, content, ... } = useData()

	// JavaScript shortcodes defined in Eleventy configuration
	const { image, ... } = useMethods()
</script>

<template>
	<h1>{% raw %}{{ title }}{% endraw %}</h1>
	<div v-html="content" />
</template>
```

## Inside the code

@mvsde/eleventy-plugin-vue is inspired by the official plugin but has some key differences in how it works internally.

The official plugin pre-compiles Vue SFCs and caches them on disk. This is generally a good idea to speed up builds but requires a watcher to re-compile on source file change. For certain use cases this also needs additional configuration. @mvsde/eleventy-plugin-vue compiles Vue SFCs on-demand every time a page changes.

Interestingly, the build time doesn’t change all that much. This might be due to this plugin having no filesystem read/write operations and the compiled Vue templates are stored in-memory only.

That’s also a huge opportunity for performance improvements in a future version. Instead of re-compiling the Vue SFCs on every page change, they could be cached in-memory and only be re-compiled when source files change. This needs some exploration into possible solutions, though. Maybe something with Rollup hashes?
