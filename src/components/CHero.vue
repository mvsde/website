<script setup>
import { useData, useMethods } from '@mvsde/eleventy-plugin-vue'

import CLinkCard from './CLinkCard.vue'

const { hero, cards } = useData()
const { image } = useMethods()

function getHeroImage () {
	if (!hero.image) {
		return
	}

	const width = cards
		? 864
		: 1120

	const sizes = cards
		? '(min-width: 1120px) 800px, (min-width: 864px) 66vw, 100vw'
		: '(min-width: 1120px) 1120px, 100vw'

	return image({
		src: hero.image,
		alt: hero.alt,
		width,
		sizes,
		class: 'hero__media',
	})
}

const heroImage = await getHeroImage()
</script>

<template>
	<div class="hero">
		<figure>
			<div
				v-if="hero.image"
				v-html="heroImage"
			/>
			<iframe
				v-else-if="hero.iframe"
				class="hero__media"
				:title="hero.title"
				:src="hero.iframe"
				width="1120"
				:style="{ 'aspect-ratio': hero.aspect_ratio }"
			/>
			<iframe
				v-else-if="hero.youtube"
				class="hero__media aspect-ratio-video"
				:title="hero.title"
				:src="`https://www.youtube-nocookie.com/embed/${hero.youtube}`"
				width="1120"
				height="630"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>

			<figcaption
				v-if="hero.caption"
				class="hero__caption"
				v-html="hero.caption"
			/>
		</figure>

		<div
			v-if="cards"
			class="hero__cards"
		>
			<CLinkCard
				v-for="card in cards"
				:key="card.title"
				:title="card.title"
				:links="card.links"
			/>
		</div>
	</div>
</template>
