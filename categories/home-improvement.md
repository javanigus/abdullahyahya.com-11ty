---
layout: layouts/taxonomy.njk
title: Home Improvement
description: Posts from category Home Improvement
pagination:
  data: readyPosts.category.home-improvement
  size: 10
permalink: "category/home-improvement{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---