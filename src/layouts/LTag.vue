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
        <time class="tag__date">
          {{ formatDate(item.date) }}
        </time>
        <a
          class="tag__link"
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
