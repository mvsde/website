<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import { isActivePage, isCurrentPage } from '../utilities/page.js'
import CIcon from './CIcon.vue'

const { page } = useData()

const links = [
	{
		text: 'About',
		url: '/',
	},
	{
		text: 'Blog',
		url: '/blog/',
	},
	{
		text: 'Talks',
		url: '/talks/',
	},
	{
		url: 'https://mastodon.social/@mvsde',
		icon: 'mastodon',
		attributes: {
			'aria-label': 'Mastodon',
			rel: 'me',
		},
	},
	{
		url: 'https://twitter.com/mvsde',
		icon: 'twitter',
		attributes: {
			'aria-label': 'Twitter',
			rel: 'me',
		},
	},
	{
		url: 'https://github.com/mvsde',
		icon: 'github',
		attributes: {
			'aria-label': 'GitHub',
			rel: 'me',
		},
	},
]
</script>

<template>
	<header class="Header u-container">
		<nav class="Header-nav">
			<a
				v-for="link in links"
				:key="link.url"
				:href="link.url"
				class="Header-link"
				:class="{
					'is-active': isActivePage({ current: page.url, url: link.url }),
				}"
				:aria-current="isCurrentPage({ current: page.url, url: link.url }) ? 'page' : undefined"
				v-bind="link.attributes"
			>
				<CIcon v-if="link.icon" :name="link.icon" class="Header-icon" />
				<template v-else>
					{{ link.text }}
				</template>
			</a>
		</nav>
	</header>
</template>
