const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://www.abdullahyahya.com/wp-json/wp/v2/pages/?per_page=100";
  const maxPages = 100;
  let page = 1;

  let responses = [];

  while (page <= maxPages) {
    const urlWithPage = `${url}&page=${page}`
    try {
      data = await EleventyFetch(urlWithPage, {
        type: "json"
      })
    } catch(e) {
      break
    }

    responses.push(data);

    page++
  }

  responses = responses.flat(2);

  const defaultPages = [];
  const slugs = ['about', 'travels', 'books-2'];

  slugs.forEach(slug => {
    defaultPages.push(responses.find(page => page.slug === slug));
  })

  const landlordTipsPages = responses.filter(page => page.link.includes('lord-of-the-land'));

  function updatePages(arr) {

    arr.forEach(page => {
      if(page) {
        page.slug = page.link.replace('http://www.abdullahyahya.com', '');

        if(page.slug === '/books-2/') {
          page.slug = '/books/';
        }

        if(page.content.rendered.includes('http://maps.google.com/')) {
          console.log(page.content.rendered);
          page.content.rendered = page.content.rendered.replace('http://maps.google.com/', 'https://maps.google.com/');
          page.content.rendered = page.content.rendered.replace('AIzaSyBgt54I4XhM2YR3uOJC-HZMv2VBbE6fq9M', 'AIzaSyCVQNxyCzIcxiMbgXX4n02gzow9oYd5aV4');
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