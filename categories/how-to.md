---
layout: layouts/taxonomy.njk
title: Category How-To
description: Posts from category How-To
pagination:
  data: readyPosts.category.how-to
  size: 10
permalink: "category/how-to{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
---