---
layout: layouts/taxonomy.njk
title: Uncategorized
description: Posts from category Uncategorized
pagination:
  data: readyPosts.category.uncategorized
  size: 10
permalink: "category/uncategorized{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---