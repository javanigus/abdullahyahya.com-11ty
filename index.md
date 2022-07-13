---
layout: layouts/index.njk
title: Index
description: Starter pack for site.
pagination:
  data: posts
  size: 10
permalink: "{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
---