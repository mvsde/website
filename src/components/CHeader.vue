<script setup>
import CIcon from './CIcon.vue'
import { useData } from '../utils/data.js'

const { page } = useData()

const links = [
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
    <a
      class="header__title"
      aria-label="Homepage"
      href="/"
      :aria-current="page.url === '/' ? 'page' : null"
    >Fynn Becker</a>

    <nav class="header__nav">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        class="header__link"
        :class="{
          'is-icon': link.icon,
          'is-active': page.url === link.url
        }"
        :aria-label="link.text"
        :aria-current="page.url === link.url ? 'page' : null"
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
