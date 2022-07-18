---
layout: layouts/taxonomy.njk
title: Technology
description: Posts from category Technology
pagination:
  data: readyPosts.category.technology
  size: 10
permalink: "category/technology{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---