<script setup>
import { useData, useMethods } from '@mvsde/eleventy-plugin-vue'

import CFooter from '../components/CFooter.vue'
import CHeader from '../components/CHeader.vue'
import CHero from '../components/CHero.vue'
import { isHomePage } from '../utilities/page.js'
import truncate from '../utilities/truncate.js'

const { page, language, title, description, social, hero, base, eleventy } = useData()
const { imagePath } = useMethods()

const socialDescription = social?.description || description

function getSocialImage () {
	if (!social?.image) {
		return
	}

	return imagePath({
		src: social.image.src,
		width: 1000,
		format: 'jpeg',
	})
}

const lang = language ?? 'en'
const socialImage = await getSocialImage()
</script>

<template>
	<html :lang="lang">
		<head>
			<!-- eslint-disable vue/html-self-closing vue/max-attributes-per-line -->
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">

			<title>{{ isHomePage(page.url) ? '' : `${title} | ` }}Fynn Becker</title>
			<meta v-if="description" name="description" :content="description">
			<meta name="generator" :content="eleventy.generator">

			<link href="/feed.xml" type="application/atom+xml" rel="alternate">

			<link rel="icon" href="/favicon.ico" sizes="any">
			<link rel="icon" href="/favicon.svg" type="image/svg+xml">
			<meta name="theme-color" content="#3730a3" media="(prefers-color-scheme: light)">
			<meta name="theme-color" content="#a5b4fc" media="(prefers-color-scheme: dark)">

			<meta name="twitter:card" :content="social?.twitter_card || 'summary'">
			<meta name="twitter:site" content="@mvsde">
			<meta name="twitter:title" :content="truncate(social?.title || title, 70)">

			<meta property="og:type" :content="social?.og_type || 'website'">
			<meta property="og:url" :content="base + page.url">
			<meta property="og:title" :content="social?.title || title">
			<meta property="og:locale" :content="lang">

			<template v-if="socialDescription">
				<meta name="twitter:description" :content="truncate(socialDescription, 200)">
				<meta property="og:description" :content="socialDescription">
			</template>

			<template v-if="socialImage">
				<meta name="twitter:image" :content="base + socialImage">
				<meta name="twitter:image:alt" :content="truncate(social.image.alt, 420)">
				<meta property="og:image" :content="base + socialImage">
			</template>

			<component :is="'script'" type="module" src="/main.js"></component>
			<link id="theme-css" rel="stylesheet" href="/theme/system.css">
			<link rel="stylesheet" href="/main.css">
			<!-- eslint-enable vue/html-self-closing vue/max-attributes-per-line -->
		</head>
		<body>
			<CHeader />

			<main>
				<h1 class="LayoutContent-title u-container">
					<slot name="title" />
				</h1>

				<div
					class="LayoutContent-wrapper"
					:class="{
						'LayoutContent-wrapper--hero': hero
					}"
				>
					<CHero v-if="hero" />

					<div class="u-container">
						<div class="LayoutContent-inner">
							<slot />
						</div>
					</div>
				</div>
			</main>

			<CFooter />
		</body>
	</html>
</template>
