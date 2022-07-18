const fs = require('fs');
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://abdullahyahya.com/wp-json/wp/v2/categories?per_page=100";

  const data = await EleventyFetch(url, {
    duration: "1d",
    type: "json"
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
    fs.writeFileSync(`categories/${category.slug}.md`, `---
layout: layouts/taxonomy.njk
title: ${category.name}
description: Posts from category ${category.name}
pagination:
  data: readyPosts.category.${category.slug}
  size: 10
permalink: "category/${category.slug}{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
taxonomy: Category
---`);
  })

  return data;
};