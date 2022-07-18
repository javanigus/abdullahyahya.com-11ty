---
layout: layouts/taxonomy.njk
title: Web Development
description: Posts from category Web Development
pagination:
  data: readyPosts.category.web-development
  size: 10
permalink: "category/web-development{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---