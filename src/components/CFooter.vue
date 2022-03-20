<script setup>
import CTheme from './CTheme.vue'
import { useData } from '../utilities/use-global.js'

const { page } = useData()

const links = [
  {
    text: 'Imprint',
    url: '/imprint/'
  },
  {
    text: 'Feed',
    url: '/feed.xml'
  },
  {
    text: 'Edit on GitHub',
    url: `https://github.com/mvsde/website/edit/main/content${page.filePathStem}.md`
  }
]
</script>

<template>
  <footer class="footer container">
    <div class="footer__links">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
      >{{ link.text }}</a>
    </div>

    <CTheme />
  </footer>
</template>
