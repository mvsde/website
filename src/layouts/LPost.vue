<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import CTags from '../components/CTags.vue'
import { formatISODate } from '../utilities/format-date.js'
import { filterTags } from '../utilities/page.js'
import LBase from './LBase.vue'

const { content, date, tags } = useData()
</script>

<template>
	<LBase>
		<template #before-title>
			<div class="LayoutPost-meta">
				<time>
					{{ formatISODate(date) }}
				</time>
				<span v-if="filterTags(tags)"> · <CTags :items="filterTags(tags)" /></span>
			</div>
		</template>

		<div v-if="content" class="u-containerContent" v-html="content" />
	</LBase>
</template>
