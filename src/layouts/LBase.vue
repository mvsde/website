<script setup>
import { useData, useMethods } from '@mvsde/eleventy-plugin-vue'

import CFooter from '../components/CFooter.vue'
import CHeader from '../components/CHeader.vue'
import CHero from '../components/CHero.vue'
import CRelated from '../components/CRelated.vue'
import { isHomePage } from '../utilities/page.js'

const { id, page, language, title, description, social, hero, related, base, eleventy } = useData()
const { imagePath } = useMethods()

function getSocialImage() {
	if (!social?.image) {
		return
	}

	return imagePath({
		src: social.image.src,
		width: 500,
		format: 'jpeg',
	})
}

const lang = language ?? 'en'
const socialImage = await getSocialImage()
</script>

<template>
	<html :lang="lang">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="view-transition" content="same-origin" />

			<title>{{ isHomePage(page.url) ? '' : `${title} | ` }}Fynn Becker</title>

			<!-- prettier-ignore -->
			<component :is="'script'">
				const theme = localStorage.getItem(`fynn-theme`) ?? `auto`;
				document.documentElement.setAttribute(`data-theme`, theme);
			</component>
			<link rel="stylesheet" href="/main.css" />

			<meta v-if="description" name="description" :content="description" />
			<meta name="generator" :content="eleventy.generator" />

			<link href="/feed.xml" type="application/atom+xml" rel="alternate" />

			<link rel="icon" href="/favicon.ico" sizes="any" />
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			<meta name="theme-color" content="#3730a3" media="(prefers-color-scheme: light)" />
			<meta name="theme-color" content="#a5b4fc" media="(prefers-color-scheme: dark)" />

			<meta property="og:site_name" content="fynn.be" />
			<meta property="og:type" :content="social?.type || 'website'" />
			<meta property="og:url" :content="base + page.url" />
			<meta property="og:title" :content="title" />
			<meta property="og:description" :content="description" />
			<meta property="og:locale" :content="lang" />

			<meta name="twitter:card" content="summary" />

			<template v-if="socialImage">
				<meta property="og:image" :content="base + socialImage" />
				<meta property="og:image:alt" :content="social.image.alt" />
				<meta property="og:image:width" content="500" />
				<meta property="og:image:height" content="500" />
			</template>
		</head>
		<body>
			<CHeader />

			<main>
				<div class="LayoutBase-head u-container">
					<slot name="before-title" />
					<h1
						class="LayoutBase-title"
						:style="{
							'--view-transition-name': id && `title-${id}`,
						}"
					>
						{{ title }}
					</h1>
				</div>

				<div
					class="LayoutBase-wrapper"
					:class="{
						'LayoutBase-wrapper--hero': hero,
					}"
				>
					<CHero v-if="hero" />

					<div class="u-container">
						<slot />
						<CRelated v-if="related" />
					</div>
				</div>
			</main>

			<CFooter />
		</body>
	</html>
</template>
