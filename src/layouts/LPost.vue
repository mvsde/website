<script setup>
import LBase from './LBase.vue'
import formatDate from '../utils/formatDate.js'
import { useData } from '../utils/data.js'

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
