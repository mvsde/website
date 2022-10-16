<script setup>
import LBase from './LBase.vue'
import CCard from '../components/CCard.vue'
import { useData } from '@mvsde/eleventy-plugin-vue'

const { title, content, lists } = useData()
</script>

<template>
  <LBase>
    <template #title>
      {{ title }}
    </template>

    <div class="layout-home__cards">
      <CCard
        v-for="list in lists"
        :key="list.title"
        :title="list.title"
      >
        <ul class="layout-home__list">
          <li
            v-for="link in list.links"
            :key="link.url"
            class="layout-home__item"
          >
            <a
              class="layout-home__link"
              :href="link.url"
            >
              {{ link.title }}
            </a>
          </li>
        </ul>
      </CCard>
    </div>

    <div
      v-if="content"
      v-html="content"
    />
  </LBase>
</template>
