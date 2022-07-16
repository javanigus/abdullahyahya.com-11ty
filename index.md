---
layout: layouts/index.njk
title: Index
description: Abdullah Yahya blog
pagination:
  data: readyPosts.all
  size: 10
permalink: "{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
---