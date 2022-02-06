<script setup>
import LBase from './LBase.vue'
</script>

<template>
  <LBase>
    <template #title>
      {{ title }}
    </template>

    <div v-html="content" />
  </LBase>
</template>
