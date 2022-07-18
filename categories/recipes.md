---
layout: layouts/taxonomy.njk
title: Recipes
description: Posts from category Recipes
pagination:
  data: readyPosts.category.recipes
  size: 10
permalink: "category/recipes{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---