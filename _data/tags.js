const fs = require('fs');
const site = require('./site.json');
const EleventyFetch = require("@11ty/eleventy-fetch");

const url = `${site.src_prefix}tags?per_page=100`;

module.exports = async function() {
  const data = await EleventyFetch(url, {
    type: "json",
    duration: "1d" // save for 1 day
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
    const frontmatter = `---
layout: layouts/taxonomy.njk
title: ${tag.name}
description: Posts from tag ${tag.name}
pagination:
  data: readyPosts.tag.${tag.slug}
  size: 10
permalink: "tag/${tag.slug}{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Tag
---`

    if (!fs.existsSync(`tags/${tag.slug}.md`)) {
      fs.writeFileSync(`tags/${tag.slug}.md`, frontmatter);
    } else {
      fs.readFile(`tags/${tag.slug}.md`, 'utf8', (err, data) => {

        if(data !== frontmatter) {
          fs.writeFileSync(`tags/${tag.slug}.md`, frontmatter);
        }
      });
    }
  })

  return data;
};