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
permalink: /blog/tag/{{ tag }}
---

{{ tag }}
