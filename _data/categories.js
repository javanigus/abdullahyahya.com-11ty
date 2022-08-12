const fs = require('fs');
const site = require('./site.json');
const EleventyFetch = require("@11ty/eleventy-fetch");

const url = `${site.src_prefix}categories?per_page=100`;

module.exports = async function() {
  const data = await EleventyFetch(url, {
    type: "json",
    duration: "1d" // save for 1 day
  });

  const categories = [];

  data.forEach(category => {
    const obj = {
      slug: category.slug,
      name: category.name
    };
    categories.push(obj)
  });

  const dir = './categories';

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  categories.forEach(category => {
    const frontmatter = `---
layout: layouts/taxonomy.njk
title: ${category.name}
description: Posts from category ${category.name}
pagination:
  data: readyPosts.category.${category.slug}
  size: 10
permalink: "category/${category.slug}{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---`

    if (!fs.existsSync(`categories/${category.slug}.md`)) {
      fs.writeFileSync(`categories/${category.slug}.md`, frontmatter);
    } else {
      fs.readFile(`categories/${category.slug}.md`, 'utf8', (err, data) => {

        if(data !== frontmatter) {
          fs.writeFileSync(`categories/${category.slug}.md`, frontmatter);
        }
      });
    }
  })

  return data;
};