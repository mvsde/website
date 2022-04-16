<script setup>
import { ref, onServerPrefetch } from 'vue'
import { useData, useMethods } from '../utilities/use-global.js'

const { hero } = useData()
const { image } = useMethods()

function getHeroImage () {
  if (!hero.image) {
    return
  }

  return image({
    src: hero.image,
    alt: hero.alt,
    width: 1120,
    sizes: '(min-width: 1120px) 1120px, 100vw',
    class: 'hero__media'
  })
}

const heroImage = ref(null)

onServerPrefetch(async () => {
  heroImage.value = await getHeroImage()
})
</script>

<template>
  <figure class="hero">
    <div
      v-if="heroImage"
      v-html="heroImage"
    />
    <iframe
      v-else-if="hero.youtube"
      class="hero__media hero__media--video aspect-ratio-video"
      :title="hero.title"
      :src="`https://www.youtube-nocookie.com/embed/${hero.youtube}`"
      width="1120"
      height="630"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <figcaption
      v-if="hero.caption"
      class="hero__caption"
      v-html="hero.caption"
    />
  </figure>
</template>
