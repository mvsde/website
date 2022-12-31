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
		<ul class="LinkCard-list">
			<li
				v-for="link in links"
				:key="link.url"
				class="LinkCard-item"
			>
				<a
					class="LinkCard-link"
					:href="link.url"
					v-bind="link.attributes"
				>
					{{ link.title }}
				</a>
			</li>
		</ul>
	</CCard>
</template>
