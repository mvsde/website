---
title: CSS Custom Property toggles for themes
description: Use CSS Custom Property toggles to avoid repeating property definitions for light and dark themes.
tags:
  - Development
---

The [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) CSS media feature provides a convenient method to change a website’s design based on the light or dark theme preference people set in their browser or operating system settings.

This setting is global though, so people can’t indicate a per-website preference. Because some people might want a dark system UI but light websites or the other way around, it is advisable to provide a theme selector on websites, too.

## The repetition problem

Consider the following basic light theme:

```css
:root {
	--color-text: black;
	--color-background: white;

	color-scheme: light dark;
}
```

Now let’s add a dark theme by switching the properties:

```css
@media (prefers-color-scheme: dark) {
	:root {
		--color-text: white;
		--color-background: black;
	}
}
```

For the site-specific theme switch (powerd by JS) we need even more CSS to override the media query:

```css
:root.is-light {
	--color-text: black;
	--color-background: white;

	color-scheme: light;
}

:root.is-dark {
	--color-text: white;
	--color-background: black;

	color-scheme: dark;
}
```

You see why this gets repetitious really fast.

## Extract property definitions

To avoid repeating definitions, we can set up “intermediate” variables that hold the properties for our two themes:

```css
:root {
	--color-text--light: black;
	--color-text--dark: white;
	--color-background--light: white;
	--color-background--dark: black;

	--color-text: var(--color-text--light);
	--color-background: var(--color-background--light);

	color-scheme: light dark;
}

@media (prefers-color-scheme: dark) {
	:root {
		--color-text: var(--color-text--dark);
		--color-background: var(--color-background--dark);
	}
}

:root.is-light {
	--color-text: var(--color-text--light);
	--color-background: var(--color-background--dark);

	color-scheme: light;
}

:root.is-dark {
	--color-text: var(--color-text--dark);
	--color-background: var(--color-background--dark);

	color-scheme: dark;
}
```

But even this gets really long the more properties our themes have.

## Custom Property toggles

Custom Property toggles “make” properties valid or invalid by prefixing them either with nothing or with the `initial` keyword.

The code will be more readable later on if we first create “boolean type” variables:

```css
:root {
	--true: ;
	--false: initial;
}
```

Now we can create our toggle variable `--is-light-theme`:

```css
:root {
	--is-light-theme: var(--true);
}

@media (prefers-color-scheme: dark) {
	:root {
		--is-light-theme: var(--false);
	}
}

:root.is-light {
	--is-light-theme: var(--true);
}

:root.is-dark {
	--is-light-theme: var(--false);
}
```

Then we set up our base variables, but this time we prefix all light ones with our `--is-light-theme` toggle:

```css
:root {
	--color-text--light: var(--is-light-theme) black;
	--color-text--dark: white;
	--color-background--light: var(--is-light-theme) white;
	--color-background--dark: black;
}
```

And finally we use the Custom Property fallback feature to toggle between light and dark theme properties.

This works because in light theme, all light properties are prefixed with nothing (see `--true` variable) so they’re valid. In dark theme, all light properties are prefixed with `initial` (see `--false` variable) making them invalid.

The following `var(…)`s take the light variable as the first parameter and the dark variable as the second parameter (fallback). If the light variable is valid it will be used, if it is invalid the second parameter (the dark variable) is used:

```css
:root {
	--color-text: var(--color-text--light, var(--color-text--dark));
	--color-background: var(--color-background--light, var(--color-background--dark));
}
```

## Final code

Finally we put all the code together and add the `color-scheme` property so the browser automatically styles certain UI components:

```css
:root {
	--true: ;
	--false: initial;

	--is-light-theme: var(--true);

	--color-text--light: var(--is-light-theme) black;
	--color-text--dark: white;
	--color-background--light: var(--is-light-theme) white;
	--color-background--dark: black;

	--color-text: var(--color-text--light, var(--color-text--dark));
	--color-background: var(--color-background--light, var(--color-background--dark));

	color-scheme: light dark;
}

@media (prefers-color-scheme: dark) {
	:root {
		--is-light-theme: var(--false);
	}
}

:root.is-light {
	--is-light-theme: var(--true);
	color-scheme: light;
}

:root.is-dark {
	--is-light-theme: var(--false);
	color-scheme: dark;
}
```

## Demo

<iframe src="https://codepen.io/mvsde/embed/gOjMaWz?default-tab=result" loading="lazy" style="aspect-ratio: 16 / 10" title="Demo for CSS Custom Property toggles for themes"></iframe>
