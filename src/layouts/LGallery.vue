<script setup>
import { useData, useMethods } from '@mvsde/eleventy-plugin-vue'

import { orderCollection } from '../utilities/collection.js'
import LBase from './LBase.vue'

const { content, collections, collection } = useData()
const { image } = useMethods()

const items = orderCollection({
	collection: collections[collection.name],
	order: collection.order,
})

function getGalleryImages() {
	const mapImage = (item) =>
		image({
			src: item.data.hero.image,
			alt: item.data.title,
			width: 335,
			sizes: '(min-width: 544px) 192px, 100vw',
			class: 'LayoutGallery-image',
		})

	const images = items.map(mapImage)
	return Promise.all(images)
}

const galleryImages = await getGalleryImages()
</script>

<template>
	<LBase>
		<div v-if="content" class="u-containerContent" v-html="content" />

		<ol class="LayoutGallery-list" :reversed="collection.order !== 'ascending'">
			<li v-for="(item, index) in items" :key="item.data.id" class="LayoutGallery-item">
				<a :href="item.url" class="LayoutGallery-link" v-html="galleryImages[index]" />
			</li>
		</ol>
	</LBase>
</template>
