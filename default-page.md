---
layout: layouts/default-page.njk
pagination:
  data: pages.default
  size: 1
  alias: single_page
permalink: "/{{ single_page.slug }}/"
---
{{ pages.default | log }}