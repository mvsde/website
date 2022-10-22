---
id: 8e9d3abb-293c-449a-9979-b9b541959c48
title: Eleventy + Vue 3
description: Tips and tricks for using Vue 3 Single File Components as templates for Eleventy.
date: 2022-03-20T14:53:00Z
updates:
  - /blog/eleventy-plugin-vue/
---

[Eleventy](https://www.11ty.dev/) supports numerous [template languages](https://www.11ty.dev/docs/languages/) out of the box. Unfortunately, a lot of these languages lack a key feature: good tooling aka developer experience (DX). Visual Studio Code integration is spotty, and linters or formatters are rare. Enter [eleventy-plugin-vue](https://github.com/11ty/eleventy-plugin-vue) – fully static pre-rendered Vue templates for Eleventy. And with Vue we can use all sorts of nice tools: Vetur or Volar for VSCode, ESLint, and Prettier.

::: note
A quick warning before we continue: The Vue 3 integration for Eleventy is in _early alpha_. It works really well, but some things are a bit rough and need workarounds. This blog post documents and explains these workarounds.
:::

Head over to the [official plugin documentation](https://github.com/11ty/eleventy-plugin-vue#readme) for installation instructions. A few more tricks can also be found on the [Netlify blog](https://www.netlify.com/blog/2020/09/18/eleventy-and-vue-a-match-made-to-power-netlify.com/). The following tips are collected in the demo repository [mvsde/eleventy-vue](https://github.com/mvsde/eleventy-vue).

## Vue SFC as base template

Vue SFCs don’t have a `doctype` by default, they are supposed to be rendered as part of an already existing HTML document. To use an SFC as our base template for Eleventy, we need to add a transform.

### layout.vue

```html
<template>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>{% raw %}{{ title }}{% endraw %}</title>
    </head>
    <body>
      <main v-html="content" />
    </body>
  </html>
</template>
```

### transform-doctype.js

```js
const DOCTYPE = '<!DOCTYPE html>'

module.exports = function (content, outputPath) {
  const isHTMLFile = outputPath.endsWith('.html')
  const hasDoctype = content.trim().toLowerCase().startsWith(DOCTYPE.toLowerCase())

  if (isHTMLFile && !hasDoctype) {
    return `${DOCTYPE}${content}`
  }

  return content
}
```

### .eleventy.js

```js
const transformDoctype = require('./transform-doctype.js')

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform('doctype', transformDoctype)
}
```

## \<script setup>

Vue 3 SFCs support a really handy “boilerplate shortcut”: `<script setup>`. It allows skipping the whole `export`ing and lets you [directly declare data and methods](https://vuejs.org/api/sfc-script-setup.html#script-setup). To make Eleventy’s data and methods available, we need a workaround leveraging Vue’s Composition API.

### use-global.js

```js
import { getCurrentInstance } from 'vue'

/** Returns global methods including universal filters and shortcodes. */
export function useMethods () {
  const app = getCurrentInstance()
  return app.appContext.mixins[0].methods
}

/** Returns global data and page data. */
export function useData () {
  const app = getCurrentInstance()
  return app.appContext.mixins[1].data()
}
```

### Vue SFC

```html
<script setup>
import { useMethods, useData } from './use-global.js'

const { getVueComponentCssForPage } = useMethods()
const { title, description, page, content } = useData()

const css = getVueComponentCssForPage(page.url)
</script>

<template>
  <!-- CSS from Vue SFCs. -->
  {% raw %}{{ css }}{% endraw %}

  <!-- Eleventy page data object. -->
  {% raw %}{{ page }}{% endraw %}

  <!-- Page content, usually the rendered Markdown. -->
  {% raw %}{{ content }}{% endraw %}

  <!-- Other metadata declared in Markdown frontmatter. -->
  {% raw %}{{ title }} {{ description }} …{% endraw %}
</template>
```
