---
id: f1dc57d8-66ad-44cb-a87f-edba00a4328e
title: Bookmarklets for accessibility audits
description: Collection of useful bookmarklets for WCAG/BITV accessibility audits.
date: 2023-08-10T08:57:00Z
tags:
  - Accessibility
  - Development
---

[[toc]]

## HTML/DOM validation

For accessibility audits not only the HTML source needs to be validated, but the DOM after JavaScript may have changed it. The [check serialized DOM of the current page](https://validator.w3.org/nu/about.html#extras) bookmarklet automates the manual copy-and-paste task.

### WCAG parsing compliance filter

The [WCAG parsing compliance filter](https://validator.w3.org/nu/about.html#extras) bookmarklet changes the W3C HTML validator output for errors relevant to accessibility audits.

## CSS adaptability

### Foreground and background color defined

The [foreground and background color defined](https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste/bookmarklets.html#:~:text=Bookmarklet-,%22Vorder%2Dund%20Hintergrundfarbe%20definiert%22){hreflang=de} _([Vorder-und Hintergrundfarbe definiert]{lang=de})_ bookmarklet changes the background and text color on the `<html>` element. Every element that has a background color defined, should also have a foreground color and vice versa.

### Text spacing

People may force additional spacing for text. The [text spacing](https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste/bookmarklets.html#:~:text=Bookmarklet-,%22Textabst%C3%A4nde%22){hreflang=de} _([Textabstände]{lang=de})_ bookmarklet increases the `line-height`, `letter-spacing`, and `word-spacing` for all elements and sets `margin-bottom` on `<p>` elements.

### Force show focus

Some websites don’t have a visible focus state. The [force show focus](https://pauljadam.com/bookmarklets/focus.html) bookmarklet forcible adds a focus outline, so keyboard accessibility audits can be performed.

## a11y-outline

[a11y-outline](https://github.com/xi/a11y-outline) shows a rotor-like menu for landmarks, headings, and links. Landmarks and headings are visualized as a tree, so correct nesting and heading structure can be checked.

The bookmarklet is also available as an extension for [Firefox](https://addons.mozilla.org/firefox/addon/a11y-outline/) and [Chrome](https://addons.mozilla.org/de/firefox/addon/a11y-outline/).

## Highlighters

### Structured content

The [structured content](https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste/bookmarklets.html#:~:text=Inhalte%20gegliedert){hreflang=de} _([Inhalte gegliedert]{lang=de})_ bookmarklet highlights headings (`<h1>` … `<h6>`), paragraphs (`<p>`), text formatting (`<b>`, `<i>`, `<strong>`, `<em>`), tables (`<table>`), and fieldsets (`<fieldset>`, `<legend>`).

### ARIA

The [ARIA](https://pauljadam.com/bookmarklets/aria.html) bookmarklet displays `aria-*` and `role` attributes and if necessary corresponding `id` attributes.

### Forms

The [forms](https://pauljadam.com/bookmarklets/forms.html) bookmarklet highlights form elements including relevant attributes and their corresponding `<label>` or `<legend>` or alternative methods of labelling.

### Headings

The [headings](https://pauljadam.com/bookmarklets/headings.html) bookmarklet highlights `<h1>` to `<h6>` elements and elements manually marked as `role="heading"`.

### Iframes

The [iframes](https://pauljadam.com/bookmarklets/iframes.html) bookmarklet highlights `<iframe>` elements and informs about the `title` and `src` attributes.

### Images

The [images](https://pauljadam.com/bookmarklets/images.html) bookmarklet highlights images and their `alt`, `role`, `title`, and applicable `aria-*` attributes.

### Landmarks

The [landmarks](https://pauljadam.com/bookmarklets/landmarks.html) bookmarklet highlights elements with implicit roles and elements manually marked up as a specific role.

### Lang

The [lang](https://www.pauljadam.com/bookmarklets/#:~:text=Lang) bookmarklet shows the document language (`<html lang="…">`) and highlights elements with a `lang` attribute.

### Links

The [links](https://gist.github.com/mvsde/d339346e2c6b38ac37eaccd377cf7b20#file-highlight-links-js) bookmarklet highlights all `<a>` elements (regardless if they have an `href` attribute or not).

### Lists

The [lists](https://pauljadam.com/bookmarklets/lists.html) bookmarklet highlights `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, and `<dd>` elements.

### Tabindex

The [tabindex](https://pauljadam.com/bookmarklets/tabindex.html) bookmarklet highlights elements with a `tabindex` attribute and warns about values that are _not_ `-1` or `0`.

### Tables

The [tables](https://pauljadam.com/bookmarklets/tables.html) bookmarklet highlights `<table>` elements, all of their children (`<caption>`, `<tr>`, `<th>`, `<td>`), and relevant attributes.

### Target size

The [target size](https://github.com/stevefaulkner/targetsize) bookmarklet highlights overlapping elements.

### Title

The [title](https://pauljadam.com/bookmarklets/title.html) bookmarklet highlights elements with a `title` attribute.

## Utilities

### Disable CSS

For some audit steps it may be useful to view the page without any CSS. The [disable CSS](https://gist.github.com/mvsde/d339346e2c6b38ac37eaccd377cf7b20#file-disable-css-js) bookmarklet removes all external stylesheets, `<style>` elements, and `style` attributes.

### Open `<details>`

Sites like FAQs may have _a lot_ of `<details>` elements. Instead of opening them manually, the [open details](https://gist.github.com/mvsde/d339346e2c6b38ac37eaccd377cf7b20#file-open-details-js) bookmarklet automatically opens _all_ `<details>` elements on the page.

### Show document title

The [show document title](https://gist.github.com/mvsde/d339346e2c6b38ac37eaccd377cf7b20#file-show-document-title-js) bookmarklet adds the document title as the first element to the `<body>`. This allows comparing the document title and its structure across pages without having to wait for the browser tab tooltip to appear and show the whole title.

### Trigger debugger

Some dynamic elements like custom comboboxes may be hard to inspect with the browser dev tools because they close on loosing focus. The [trigger debugger](https://gist.github.com/mvsde/d339346e2c6b38ac37eaccd377cf7b20#file-trigger-debugger-js) bookmarklet calls `debugger` after a specified amount of time.

::: Note
`debugger` is only available with opened dev tools.
:::
