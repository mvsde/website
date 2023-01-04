<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import CTags from '../components/CTags.vue'
import formatDate from '../utilities/format-date.js'
import { getTags } from '../utilities/page.js'
import LBase from './LBase.vue'

const { content, date, tags } = useData()
</script>

<template>
	<LBase>
		<template #before-title>
			<div class="LayoutPost-meta">
				<time class="LayoutPost-date">
					{{ formatDate(date) }}
				</time>
				<CTags
					class="LayoutPost-tags"
					:items="getTags(tags)"
				/>
			</div>
		</template>

		<div
			v-if="content"
			class="u-containerContent"
			v-html="content"
		/>
	</LBase>
</template>
