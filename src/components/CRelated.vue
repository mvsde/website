<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import { getPageData } from '../utilities/page.js'

const { collections, related } = useData()
const relatedPages = related.map((url) => getPageData({ collections, url }))
</script>

<template>
	<div class="Related">
		<hr />
		<h2>Related</h2>
		<ul>
			<li v-for="page in relatedPages" :key="page.url">
				<a :href="page.url">
					{{ page.data.title }}
				</a>
			</li>
		</ul>
	</div>
</template>
