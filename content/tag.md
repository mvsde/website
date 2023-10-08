---
layout: LTag.vue
pagination:
  data: collections
  size: 1
  addAllPagesToCollections: true
  alias: tag
  filter:
    - all
    - blog
    - feed
    - sunset
    - talk
permalink: 'tags/{{ tag|slugify }}/index.html'
eleventyComputed:
  title: '{{ tag }}'
  collection:
    name: '{{ tag }}'
---
