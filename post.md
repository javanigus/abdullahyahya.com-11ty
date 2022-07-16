---
layout: layouts/post.njk
pagination:
  data: readyPosts.all
  size: 1
  alias: post
permalink: "/{{ post.slug | slug }}/"
---