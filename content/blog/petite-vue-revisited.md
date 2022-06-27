---
id: 75badf7c-b219-424b-8787-1f5c1801e422
title: petite-vue revisited
description: petite-vue is a nice project for enhancing static HTML with some interactivity.
date: 2022-05-12T11:04:23Z
---

One key Vue feature is the browser-only build. It doesn’t require any build step, so it allows [experimenting with Vue](https://vuejs.org/guide/quick-start.html#without-build-tools) without having to set up any special environment. [petite-vue](https://github.com/vuejs/petite-vue) takes this approach and provides a library for “sprinkling” interactivity on otherwise server-rendered or static HTML.

petite-vue uses the same familiar template syntax as Vue, but with a reduced feature set getting it down to about 7 KB gzipped compared to Vue’s 33 KB.

The project is still in early development and should be considered experimental, it works really well though. If you are looking for something similar that is already out of alpha, you can take a look at [Alpine.js](https://alpinejs.dev/).

## How does petite-vue work?

petite-vue enables us to add [interactivity without ever touching a JavaScript file](https://github.com/vuejs/petite-vue#usage). Adding the script with the `init` keyword automatically initializes petite-vue:

```html
<script src="https://unpkg.com/petite-vue" defer init></script>
```

We then create “regions” with the `v-scope` keyword. This is also the place to define local state for this specific region:

```html
<div v-scope="{ count: 0 }">
  {% raw %}{{ count }}{% endraw %}
  <button @click="count++">Increment</button>
</div>
```

Check out this [basic menu button example](https://codepen.io/mvsde/pen/mdMmGer).

## Ready for complex apps

You can also use petite-vue for more “conventional” Vue apps. In this case the HTML acts as a template which we then use in JavaScript as our [mounting point](https://github.com/vuejs/petite-vue#explicit-mount-target):

```html
<form id="search">
  …
</form>
```

In our JavaScript file we can define complex methods and also use imported code defined elsewhere in our application:

```js
import { createApp } from 'https://unpkg.com/petite-vue?module'

createApp({
  results: [],

  async getResults (search) {
    …
  }
}).mount('#search')
```

This [Wikipedia search example](https://codepen.io/mvsde/pen/ExvmJNz) demonstrates what’s possible with petite-vue.

## Progressive enhancement

Take a look at the following HTML:

```html
<ul>
  <li v-for="item in items">
    {% raw %}{{ item }}{% endraw %}
  </li>
</ul>
```

Until JavaScript has loaded, it will look like this:

* {% raw %}{{ item }}{% endraw %}

Let’s call it _a flash of un-compiled content_. Since petite-vue is really small, the flash shouldn’t take too long. But for slow network speeds or when JavaScript fails to load altogether, the UX isn’t that great.

The solution to this problem is the `v-cloak` attribute:

```html
<ul v-cloak>
  <li v-for="item in items">
    {% raw %}{{ item }}{% endraw %}
  </li>
</ul>
```

The `v-cloak` attribute will be removed when petite-vue is ready. Pairing this with a bit of CSS hides the flash:

```css
[v-cloak] {
  display: none !important;
}
```
