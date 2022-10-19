<script setup>
import LBase from './LBase.vue'
import { orderCollection } from '../utilities/collection.js'
import { useData, useMethods } from '@mvsde/eleventy-plugin-vue'

const { title, content, collections, collection } = useData()
const { image } = useMethods()

const items = orderCollection({
  collection: collections[collection.name],
  order: collection.order
})

function getGalleryImages () {
  const mapImage = item => image({
    src: item.data.hero.image,
    alt: item.data.title,
    width: 335,
    sizes: '(min-width: 544px) 192px, 100vw',
    class: 'layout-gallery__image'
  })

  const images = items.map(mapImage)
  return Promise.all(images)
}

const galleryImages = await getGalleryImages()
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
      class="layout-gallery__list"
      :reversed="collection.order !== 'ascending'"
    >
      <li
        v-for="(item, index) in items"
        :key="item.data.id"
        class="layout-gallery__item"
      >
        <a
          :href="item.url"
          class="layout-gallery__link"
          v-html="galleryImages[index]"
        />
      </li>
    </ol>
  </LBase>
</template>
