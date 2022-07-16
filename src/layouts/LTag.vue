<script setup>
import LBase from './LBase.vue'
import formatDate from '../utilities/format-date.js'
import { orderCollection } from '../utilities/collection.js'
import { useData } from '../utilities/use-global.js'

const { title, content, collections, collection } = useData()

const items = orderCollection({
  collection: collections[collection.name],
  order: collection.order
})

const languageName = new Intl.DisplayNames('en', { type: 'language' })
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

    <ol
      class="tag__list"
      :reversed="collection.order !== 'ascending'"
    >
      <li
        v-for="item in items"
        :key="item.data.id"
        class="tag__item"
      >
        <span class="tag__meta">
          <time>
            {{ formatDate(item.date) }}
          </time>
          <span v-if="item.data.language">
            · {{ languageName.of(item.data.language) }}
          </span>
        </span>
        <a
          class="tag__link"
          :href="item.url"
          :hreflang="item.data.language"
        >
          {{ item.data.title }}
        </a>
      </li>
    </ol>
  </LBase>
</template>
