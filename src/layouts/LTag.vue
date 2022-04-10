<script setup>
import LBase from './LBase.vue'
import formatDate from '../utilities/format-date.js'
import { useData } from '../utilities/use-global.js'

const { title, content, collections, collection } = useData()

const items = collection.order === 'ascending'
  ? collections[collection.name]
  : collections[collection.name].slice().reverse()
</script>

<template>
  <LBase>
    <template #title>
      {{ title }}
    </template>

    <div v-html="content" />

    <ol
      class="tag__list"
      reversed
    >
      <li
        v-for="item in items"
        :key="item.data.id"
        class="tag__item"
      >
        <time class="tag__date">
          {{ formatDate(item.date) }}
        </time>
        <a
          :href="item.url"
          :hreflang="item.data.language"
        >
          <span
            v-if="item.data.language"
            class="tag__language"
            aria-hidden="true"
          >{{ item.data.language.toUpperCase() }}</span>{{ item.data.title }}
        </a>
      </li>
    </ol>
  </LBase>
</template>
