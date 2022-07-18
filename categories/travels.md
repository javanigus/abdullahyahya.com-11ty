---
layout: layouts/taxonomy.njk
title: Travel
description: Posts from category Travel
pagination:
  data: readyPosts.category.travels
  size: 10
permalink: "category/travels{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---