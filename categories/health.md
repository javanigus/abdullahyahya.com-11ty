---
layout: layouts/taxonomy.njk
title: Health
description: Posts from category Health
pagination:
  data: readyPosts.category.health
  size: 10
permalink: "category/health{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---