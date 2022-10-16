<script setup>
import LBase from './LBase.vue'
import formatDate from '../utilities/format-date.js'
import { getPageData } from '../utilities/page.js'
import { useData } from '@mvsde/eleventy-plugin-vue'

const { collections, title, content, date, updates } = useData()
const updatePages = updates?.map(update => getPageData({ collections, url: update }))
</script>

<template>
  <LBase>
    <template #title>
      <time class="layout-post__date">
        {{ formatDate(date) }}
      </time>
      {{ title }}
    </template>

    <div
      v-if="content"
      v-html="content"
    />

    <template v-if="updatePages">
      <hr>
      <h2>Updates</h2>
      <ul>
        <li
          v-for="update in updatePages"
          :key="update.url"
        >
          <a :href="update.url">
            {{ update.data.title }}
          </a>
        </li>
      </ul>
    </template>
  </LBase>
</template>
