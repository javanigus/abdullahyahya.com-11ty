---
layout: layouts/taxonomy.njk
title: Category Food
description: Posts from category Food
pagination:
  data: readyPosts.category.food
  size: 10
permalink: "category/food{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
---