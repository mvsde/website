<script setup>
import { useData } from '@mvsde/eleventy-plugin-vue'

import LBase from './LBase.vue'

const { content } = useData()
</script>

<template>
	<LBase>
		<div v-if="content" class="u-containerContent" v-html="content" />
	</LBase>
</template>
