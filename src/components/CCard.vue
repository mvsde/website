<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<section class="Card">
		<h2 class="Card-title">
			{{ title }}
		</h2>
		<slot />
	</section>
</template>
