<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import LBase from './LBase.vue'

const { title, content } = useData()
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
	</LBase>
</template>
