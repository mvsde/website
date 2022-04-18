<script setup>
import LBase from './LBase.vue'
import { useData } from '../utilities/use-global.js'

const { title, content } = useData()
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
  </LBase>
</template>
