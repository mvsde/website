<script setup>
import { useData, useMethods } from '../utilities/use-global.js'

const { hero } = useData()
const { image } = useMethods()
</script>

<template>
  <figure class="hero">
    <div
      v-if="hero.image"
      v-html="image({
        src: hero.image,
        alt: hero.alt,
        width: 1120,
        class: 'hero__media'
      })"
    />
    <div
      v-else-if="hero.youtube"
      class="hero__media aspect-ratio is-16-9"
    >
      <iframe
        :title="hero.title"
        :src="`https://www.youtube-nocookie.com/embed/${hero.youtube}`"
        width="1120"
        height="630"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <figcaption
      v-if="hero.caption"
      class="hero__caption"
      v-html="hero.caption"
    />
  </figure>
</template>
