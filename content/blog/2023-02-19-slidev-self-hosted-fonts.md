---
id: 30eee145-5939-4a8a-a4d6-a0831f4e6d8a
title: Self-hosted fonts in Slidev
description: How to self-host custom fonts in Slidev for GDPR compliance.
tags:
  - Development
---

[Slidev](https://sli.dev/) is a fantastic tool for code-focused presentations. [Slides are written in Markdown](https://sli.dev/guide/syntax.html), giving us all the nice features from code documentation like syntax highlighting.

Slidev is built with Vue and Vite and provides a [Single Page Application (SPA) export](https://sli.dev/guide/hosting.html) for static hosting. This is a nice way to “hand out” interactive slides to presentation attendees afterwards.

::: Note
One drawback is the use of Google Fonts by default. There are major privacy concerns and [using Google Fonts without prior consent violates GDPR](https://en.wikipedia.org/wiki/Google_Fonts#Privacy_issues).
:::

Thankfully, Slidev allows lots of customizations without the need to develop a completely new theme.

## Disable Google Fonts

In the base `slides.md` file, [disable the Google Fonts provider](https://sli.dev/custom/fonts.html#providers) in the YAML frontmatter:

```yaml
---
fonts:
  provider: none
---
```

Disabling the fonts provider leaves us with system fallback fonts. We can stop here, but the presentation experience may become inconsistent depending on the device it’s viewed on.

## Install custom fonts

It is possible to download the necessary custom fonts from Google Fonts and drop them into your presentation folder. Though, [Fontsource](https://fontsource.org/) is a much nicer way to include open-source fonts in projects already using npm.

The [default Slidev theme](https://github.com/slidevjs/themes/tree/main/packages/theme-default) needs the fonts _Nunito Sans_ and _Fira Code_:

```sh
npm install @fontsource/nunito-sans @fontsource/fira-code
```

## Include font files

As of yet, Slidev doesn’t know about the custom font files. We can add the `@font-face` declarations to the [`style.css` file](https://sli.dev/custom/directory-structure.html#style), which is automatically picked up by Slidev.

::: Note
_Fira Code_ has the benefit of being a variable font, so we need only one `@font-face` declaration to get all weights. For _Nunito Sans_ we need to manually import different weights and styles.
:::

For the default theme, the following declarations are necessary:

```css
/* Nunito Sans */

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 300;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-300-normal.woff2")
		format("woff2");
}

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 300;
	font-style: italic;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-300-italic.woff2")
		format("woff2");
}

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 400;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-400-normal.woff2")
		format("woff2");
}

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 400;
	font-style: italic;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-400-italic.woff2")
		format("woff2");
}

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 600;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-600-normal.woff2")
		format("woff2");
}

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 600;
	font-style: italic;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-600-italic.woff2")
		format("woff2");
}

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 700;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-700-normal.woff2")
		format("woff2");
}

@font-face {
	font-family: "Nunito Sans";
	font-display: swap;
	font-weight: 700;
	font-style: italic;
	src: url("@fontsource/nunito-sans/files/nunito-sans-latin-700-italic.woff2")
		format("woff2");
}

/* Fira Code */

@font-face {
	font-family: "Fira Code";
	font-display: swap;
	src: url("@fontsource/fira-code/files/fira-code-latin-variable-wghtOnly-normal.woff2")
		format("woff2");
}
```
