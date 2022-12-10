<script setup>
import CCard from './CCard.vue'

defineProps({
	title: {
		type: String,
		required: true,
	},
	links: {
		type: Array,
		required: true,
	},
})
</script>

<template>
	<CCard :title="title">
		<ul class="link-card__list">
			<li
				v-for="link in links"
				:key="link.url"
				class="link-card__item"
			>
				<a
					class="link-card__link"
					:href="link.url"
					v-bind="link.attributes"
				>
					{{ link.title }}
				</a>
			</li>
		</ul>
	</CCard>
</template>
