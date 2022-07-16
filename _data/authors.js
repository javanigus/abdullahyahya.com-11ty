const fs = require('fs');
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://abdullahyahya.com/wp-json/wp/v2/users?per_page=100";

  const data = await EleventyFetch(url, {
    duration: "1d",
    type: "json"
  });

  const authors = [];

  data.forEach(author => {
    const obj = {
      slug: author.slug,
      name: author.name
    };
    authors.push(obj)
  });

  const dir = './authors';

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  authors.forEach(author => {
    fs.writeFileSync(`authors/${author.slug}.md`, `---
layout: layouts/taxonomy.njk
title: Author ${author.name}
description: Posts from author ${author.name}
pagination:
  data: readyPosts.author.${author.slug}
  size: 10
permalink: "author/${author.slug}{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
---`);
  })

  return data;
};