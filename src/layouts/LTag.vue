<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import { orderCollection } from '../utilities/collection.js'
import formatDate from '../utilities/format-date.js'
import LBase from './LBase.vue'

const { title, content, collections, collection } = useData()

const items = orderCollection({
	collection: collections[collection.name],
	order: collection.order,
})

const languageName = new Intl.DisplayNames('en', { type: 'language' })
</script>

<template>
	<LBase>
		<template #title>
			{{ title }}
		</template>

		<div
			v-if="content"
			v-html="content"
		/>

		<ol
			class="layout-tag__list"
			:reversed="collection.order !== 'ascending'"
		>
			<li
				v-for="item in items"
				:key="item.data.id"
				class="layout-tag__item"
			>
				<span class="layout-tag__meta">
					<time>
						{{ formatDate(item.date) }}
					</time>
					<span v-if="item.data.language">
						· {{ languageName.of(item.data.language) }}
					</span>
				</span>
				<a
					class="layout-tag__link"
					:href="item.url"
					:lang="item.data.language"
					:hreflang="item.data.language"
				>
					{{ item.data.title }}
				</a>
			</li>
		</ol>
	</LBase>
</template>
