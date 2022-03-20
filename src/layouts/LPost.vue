<script setup>
import LBase from './LBase.vue'
import formatDate from '../utilities/format-date.js'
import { useData } from '../utilities/use-global.js'

const { title, content, date } = useData()
</script>

<template>
  <LBase>
    <template #title>
      <time class="post__date">
        {{ formatDate(date) }}
      </time>
      {{ title }}
    </template>

    <div v-html="content" />
  </LBase>
</template>
