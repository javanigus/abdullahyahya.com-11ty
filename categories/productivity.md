---
layout: layouts/taxonomy.njk
title: Productivity
description: Posts from category Productivity
pagination:
  data: readyPosts.category.productivity
  size: 10
permalink: "category/productivity{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---