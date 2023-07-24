<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
	},
})
</script>

<template>
	<ul class="Tags">
		<li v-for="item in items" :key="item" class="Tags-item">
			<a :href="`/tags/${item.toLowerCase()}/`" class="Tags-link">#{{ item }}</a>
		</li>
	</ul>
</template>
