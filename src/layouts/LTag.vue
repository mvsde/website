<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import CTags from '../components/CTags.vue'
import { orderCollection } from '../utilities/collection.js'
import { formatISODate } from '../utilities/format-date.js'
import { filterTags } from '../utilities/page.js'
import LBase from './LBase.vue'

const { content, collections, collection } = useData()

const items = orderCollection({
	collection: collections[collection.name],
	order: collection.order,
})

const languageName = new Intl.DisplayNames('en', { type: 'language' })
</script>

<template>
	<LBase>
		<div v-if="content" class="u-containerContent" v-html="content" />

		<ol class="LayoutTag-list" :reversed="collection.order !== 'ascending'">
			<li v-for="item in items" :key="item.data.id" class="LayoutTag-item">
				<div class="LayoutTag-meta">
					<time>
						{{ formatISODate(item.page.date) }}
					</time>
					<span v-if="item.data.language"> · {{ languageName.of(item.data.language) }}</span>
					<span v-if="filterTags(item.data.tags)"> · <CTags :items="filterTags(item.data.tags)" /></span>
				</div>
				<a class="LayoutTag-link" :href="item.url" :lang="item.data.language" :hreflang="item.data.language">
					{{ item.data.title }}
				</a>
			</li>
		</ol>
	</LBase>
</template>
