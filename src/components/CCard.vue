<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<section class="card">
		<h2 class="card__title">
			{{ title }}
		</h2>
		<slot />
	</section>
</template>
