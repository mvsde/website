---
layout: LTag.vue
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - blog
    - feed
    - sunset
    - talk
permalink: 'tag/{{ tag|slugify }}/index.html'
eleventyComputed:
  title: '{{ tag }}'
  collection:
    name: '{{ tag }}'
---
