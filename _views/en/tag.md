---
eleventyComputed:
    title: "Tag: {{ tag }}"
layout: tag.webc
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - blog
    - all
permalink: /en/blog/tag/{{ tag }}/
---

{{ tag }}
