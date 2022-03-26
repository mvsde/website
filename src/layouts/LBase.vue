<script setup>
import CFooter from '../components/CFooter.vue'
import CHeader from '../components/CHeader.vue'
import CHero from '../components/CHero.vue'
import truncate from '../utilities/truncate.js'
import { useData, useMethods } from '../utilities/use-global.js'

const { page, language, title, description, social, hero, base, eleventyVersion } = useData()
const { socialImage } = useMethods()

const lang = language || 'en'
const isHome = page.url === '/'
</script>

<template>
  <html :lang="lang">
    <head>
      <!-- eslint-disable vue/max-attributes-per-line -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>{{ isHome ? '' : `${title} | ` }}Fynn Becker</title>
      <meta name="description" :content="description">
      <meta name="generator" :content="`Eleventy ${eleventyVersion}`">

      <link href="/feed.xml" type="application/atom+xml" rel="alternate">

      <link rel="icon" href="/favicon.ico" sizes="any">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml">
      <meta name="theme-color" content="#3730a3" media="(prefers-color-scheme: light)">
      <meta name="theme-color" content="#a5b4fc" media="(prefers-color-scheme: dark)">

      <meta name="twitter:card" :content="social?.twitter_card || 'summary'">
      <meta name="twitter:site" content="@mvsde">
      <meta name="twitter:title" :content="truncate(social?.title || title, 70)">
      <meta name="twitter:description" :content="truncate(social?.description || description, 200)">

      <meta property="og:type" :content="social?.og_type || 'website'">
      <meta property="og:url" :content="base + page.url">
      <meta property="og:title" :content="social?.title || title">
      <meta property="og:description" :content="social?.description || description">
      <meta property="og:locale" :content="lang">

      <template v-if="social?.image">
        <meta name="twitter:image" :content="base + socialImage({ src: social.image.src })">
        <meta name="twitter:image:alt" :content="truncate(social.image.alt, 420)">

        <meta property="og:image" :content="base + socialImage({ src: social.image.src })">
      </template>

      <link rel="preload" href="/fonts/merriweather-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin="anonymous">
      <link rel="preload" href="/fonts/ibm-plex-sans-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin="anonymous">

      <script src="/main.js" defer />
      <link rel="stylesheet" href="/theme/system.css" class="js-theme-css">
      <link rel="stylesheet" href="/main.css">
      <!-- eslint-enable vue/max-attributes-per-line -->
    </head>
    <body>
      <CHeader />

      <main class="content">
        <h1 class="content__title">
          <slot name="title" />
        </h1>

        <div
          class="content__wrapper"
          :class="{
            'content__wrapper--hero': hero
          }"
        >
          <CHero v-if="hero" />

          <div class="content__inner container">
            <slot />
          </div>
        </div>
      </main>

      <CFooter />
    </body>
  </html>
</template>
