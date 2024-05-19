---
id: 8dc35fdf-fd74-4701-baeb-fbb251e0eee2
title: Owning your pronouns page
description: Using Netlify redirect conditions with a short domain to automatically serve a pronouns page in the correct language.
tags:
  - Development
  - Language
  - Queer
---

It’s usually a good idea to own your content, especially when it comes to personal things like your website or blog. There used to be a quite popular [website for linking your pronouns to a short explainer](https://pronoun.is). But that’s gone now, probably because Heroku discontinued the free tier. There are great [alternatives for setting up your pronouns page](https://pronouns.page/), but again, at least think about owning your stuff.

In September of 2022 I bought the domain _fynn.lgbt_. On the same day I created my [own pronouns page](/pronouns/) and pointed the domain to that page. A very basic redirect until I discovered [Netlify’s language redirect conditions](https://docs.netlify.com/routing/redirects/redirect-options/#redirect-by-country-or-language).

I live in Germany and have a German pronouns page in addition to the English default. With redirects based on browser language, I can automatically point visitors to the correct page in their preferred language.

Let’s look at an excerpt from my [netlify.toml configuration](https://github.com/mvsde/website/blob/main/netlify.toml):

```toml
[[redirects]]
  from = "https://fynn.lgbt/*"
  to = "https://fynn.be/pronouns/en/"
  status = 302
  force = true
  conditions = {Language = ["en"]}

[[redirects]]
  from = "https://fynn.lgbt/*"
  to = "https://fynn.be/pronouns/de/"
  status = 302
  force = true
  conditions = {Language = ["de"]}

[[redirects]]
  from = "https://fynn.lgbt/*"
  to = "https://fynn.be/pronouns/"
  status = 302
  force = true
```

The interesting part is the `conditions = {Language = ["…"]}` which conditionally applies the redirect based on language. The third redirect is a fallback in case a client doesn’t send a language preference.

1. If you visit [fynn.lgbt](https://fynn.lgbt/) with your preferred website language set to _English_, you are redirected to [fynn.be/pronouns/en](/pronouns/en/).
2. With _German_ language preference, the redirect points to [fynn.be/pronouns/de](/pronouns/de/).
3. Otherwise, you see the overview page [fynn.be/pronouns](/pronouns/) and can decide for yourself which language works best.

Now I can share a single short domain _fynn.lgbt_ to automatically direct people to a suitable pronouns explainer that _I_ own.
