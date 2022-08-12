const fs = require('fs');
const site = require('./site.json');
const EleventyFetch = require("@11ty/eleventy-fetch");

const url = `${site.src_prefix}users?per_page=100`;

module.exports = async function() {
  const data = await EleventyFetch(url, {
    type: "json",
    duration: "1d" // save for 1 day
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
    const frontmatter = `---
layout: layouts/taxonomy.njk
title: ${author.name}
description: Posts from author ${author.name}
pagination:
  data: readyPosts.author.${author.slug}
  size: 10
permalink: "author/${author.slug}{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Author
---`

    if (!fs.existsSync(`authors/${author.slug}.md`)) {
      fs.writeFileSync(`authors/${author.slug}.md`, frontmatter);
    } else {
      fs.readFile(`authors/${author.slug}.md`, 'utf8', (err, data) => {

        if(data !== frontmatter) {
          fs.writeFileSync(`authors/${author.slug}.md`, frontmatter);
        }
      });
    }
  })

  return data;
};