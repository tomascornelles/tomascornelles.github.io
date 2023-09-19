---
eleventyComputed:
    title: "Etiqueta: {{ tag }}"
layout: tag.webc
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - blog
    - all
permalink: /blog/tag/{{ tag }}/
---

{{ tag }}
