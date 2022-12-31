<script setup>
import CTheme from './CTheme.vue'

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
	<footer class="Footer u-container">
		<div class="Footer-links">
			<a
				v-for="link in links"
				:key="link.url"
				class="Footer-link"
				:href="link.url"
			>{{ link.text }}</a>
		</div>

		<CTheme />
	</footer>
</template>
