---
layout: layouts/index.njk
title: Abdullah Yahya Blog
description: Abdullah Yahya Blog
pagination:
  data: readyPosts.all
  size: 10
permalink: "{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
---