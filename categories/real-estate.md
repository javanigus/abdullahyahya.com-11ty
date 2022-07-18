---
layout: layouts/taxonomy.njk
title: Real Estate
description: Posts from category Real Estate
pagination:
  data: readyPosts.category.real-estate
  size: 10
permalink: "category/real-estate{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---