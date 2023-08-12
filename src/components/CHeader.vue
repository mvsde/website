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
		url: 'https://github.com/mvsde',
		icon: 'github',
		attributes: {
			'aria-label': 'GitHub',
			rel: 'me',
		},
	},
	{
		url: 'https://www.linkedin.com/in/fynn/',
		icon: 'linkedin',
		attributes: {
			'aria-label': 'LinkedIn',
			rel: 'me',
		},
	},
]
</script>

<template>
	<header class="Header u-container">
		<nav class="Header-nav" aria-label="Main">
			<ul class="Header-navList u-unstyledList">
				<li v-for="link in links" :key="link.url" class="Header-navItem">
					<a
						:href="link.url"
						class="Header-navLink"
						:class="{
							'is-active': isActivePage({ current: page.url, url: link.url }),
						}"
						:aria-current="isCurrentPage({ current: page.url, url: link.url }) ? 'page' : undefined"
						v-bind="link.attributes"
					>
						<CIcon v-if="link.icon" :name="link.icon" class="Header-navIcon" />
						<template v-else>
							{{ link.text }}
						</template>
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>
