const fs = require('fs');
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://abdullahyahya.com/wp-json/wp/v2/tags?per_page=100";

  const data = await EleventyFetch(url, {
    type: "json"
  });

  const tags = [];

  data.forEach(tag => {
    const obj = {
      slug: tag.slug,
      name: tag.name
    };
    tags.push(obj)
  });

  const dir = './tags';

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  tags.forEach(tag => {
    fs.writeFileSync(`tags/${tag.slug}.md`, `---
layout: layouts/taxonomy.njk
title: ${tag.name}
description: Posts from tag ${tag.name}
pagination:
  data: readyPosts.tag.${tag.slug}
  size: 10
permalink: "tag/${tag.slug}{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Tag
---`);
  })

  return data;
};