<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import { isCurrentPage } from '../utilities/page.js'
import CTheme from './CTheme.vue'

const { page } = useData()

const links = [
	{
		text: 'Imprint',
		url: '/imprint/',
	},
	{
		text: 'Feed',
		url: '/feed.xml',
	},
]
</script>

<template>
	<footer class="Footer">
		<div class="Footer-content u-container">
			<nav aria-label="Service" class="Footer-nav">
				<ul class="Footer-navList u-unstyledList">
					<li v-for="link in links" :key="link.url" class="Footer-navItem">
						<a
							class="Footer-navLink"
							:href="link.url"
							:aria-current="isCurrentPage({ current: page.url, url: link.url }) ? 'page' : undefined"
						>
							{{ link.text }}
						</a>
					</li>
				</ul>
			</nav>

			<CTheme />
		</div>
	</footer>
</template>
