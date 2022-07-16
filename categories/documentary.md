---
layout: layouts/taxonomy.njk
title: Category Documentary
description: Posts from category Documentary
pagination:
  data: readyPosts.category.documentary
  size: 10
permalink: "category/documentary{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
---