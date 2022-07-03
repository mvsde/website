<script setup>
import LBase from './LBase.vue'
import { orderCollection } from '../utilities/collection.js'
import { ref, onServerPrefetch } from 'vue'
import { useData, useMethods } from '../utilities/use-global.js'

const { title, content, collections, collection } = useData()
const { image } = useMethods()

const items = orderCollection({
  collection: collections[collection.name],
  order: collection.order
})

function getGalleryImage ({ src, alt }) {
  return image({
    src,
    alt,
    width: 335,
    sizes: '(min-width: 544px) 192px, 100vw',
    class: 'gallery__image'
  })
}

const galleryImages = ref([])

onServerPrefetch(async () => {
  const images = []

  for (const item of items) {
    const src = item.data.hero.image
    const alt = item.data.title

    images.push(getGalleryImage({ src, alt }))
  }

  galleryImages.value = await Promise.all(images)
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
      class="gallery__list"
      :reversed="collection.order !== 'ascending'"
    >
      <li
        v-for="(item, index) in items"
        :key="item.data.id"
        class="gallery__item"
      >
        <a
          :href="item.url"
          class="gallery__link"
          v-html="galleryImages[index]"
        />
      </li>
    </ol>
  </LBase>
</template>
