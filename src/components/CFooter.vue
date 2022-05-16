<script setup>
import CTheme from './CTheme.vue'

const links = [
  {
    text: 'Imprint',
    url: '/imprint/'
  },
  {
    text: 'Feed',
    url: '/feed.xml'
  }
]
</script>

<template>
  <footer class="footer container">
    <div class="footer__links">
      <a
        v-for="link in links"
        :key="link.url"
        class="footer__link"
        :href="link.url"
      >{{ link.text }}</a>
    </div>

    <CTheme />
  </footer>
</template>
