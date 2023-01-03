<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import formatDate from '../utilities/format-date.js'
import LBase from './LBase.vue'

const { title, content, date } = useData()
</script>

<template>
	<LBase>
		<template #title>
			<time class="LayoutPost-date">
				{{ formatDate(date) }}
			</time>
			{{ title }}
		</template>

		<div
			v-if="content"
			v-html="content"
		/>
	</LBase>
</template>
