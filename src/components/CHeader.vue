<script setup>
import CIcon from './CIcon.vue'
import { isCurrentPage, isActivePage } from '../utilities/page.js'
import { useData } from '@mvsde/eleventy-plugin-vue'

const { page } = useData()

const links = [
  {
    text: 'About',
    url: '/'
  },
  {
    text: 'Blog',
    url: '/blog/'
  },
  {
    text: 'Talks',
    url: '/talks/'
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/mvsde',
    icon: 'twitter'
  },
  {
    text: 'GitHub',
    url: 'https://github.com/mvsde',
    icon: 'github'
  }
]
</script>

<template>
  <header class="header container">
    <nav class="header__nav">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        class="header__link"
        :class="{
          'is-icon': link.icon,
          'is-active': isActivePage({ current: page.url, url: link.url })
        }"
        :aria-label="link.text"
        :aria-current="isCurrentPage({ current: page.url, url: link.url }) ? 'page' : null"
      >
        <CIcon
          v-if="link.icon"
          :name="link.icon"
        />
        <template v-else>
          {{ link.text }}
        </template>
      </a>
    </nav>
  </header>
</template>
