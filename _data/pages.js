const EleventyFetch = require("@11ty/eleventy-fetch");
const site = require('./site.json');

const url = `${site.src_prefix}pages?per_page=100`;

module.exports = async function() {
  const maxPages = 100;
  let page = 1;

  let responses = [];

  while (page <= maxPages) {
    const urlWithPage = `${url}&page=${page}`
    try {
      data = await EleventyFetch(urlWithPage, {
        type: "json",
        duration: "1d" // save for 1 day
      })
    } catch(e) {
      break
    }

    responses.push(data);

    page++
  }

  responses = responses.flat(2);

  // this is a comment 2

  const defaultPages = responses.filter(page => !page.link.includes('lord-of-the-land'));
  const landlordTipsPages = responses.filter(page => page.link.includes('lord-of-the-land'));

  function updatePages(arr) {

    arr.forEach(page => {
      if(page) {
        page.slug = page.link.replace('http://www.abdullahyahya.com', '');

        if(page.slug === '/books-2/') {
          page.slug = '/books/';
        }

        if(page.content.rendered.includes('http://maps.google.com/')) {
          page.content.rendered = page.content.rendered.replace('http://maps.google.com/', 'https://maps.google.com/');
        }
    
        let description = page.excerpt.rendered;
        description = description.slice(description.indexOf('<p>') + 3, description.indexOf('<a href='));
        description = description.slice(0, description.lastIndexOf('.') + 1);
        page.description = description;
      }
    })
  }

  updatePages(defaultPages);
  updatePages(landlordTipsPages);

  const pages = {
    default: defaultPages,
    landlordTips: landlordTipsPages
  }

  return pages ;
};