const EleventyFetch = require("@11ty/eleventy-fetch");
const site = require('./site.json');

const url = `${site.src_prefix}posts?per_page=100`;

module.exports = async function() {
  const maxPages = 100;
  let page = 1;

  let responses = [];

  while (page <= maxPages) {
    const urlWithPage = `${url}&page=${page}`
    try {
      data = await EleventyFetch(urlWithPage, {
        type: "json",
        duration: "1s" // save for 1 day
      })
    } catch(e) {
      break
    }

    responses.push(data);

    page++
  }

  responses = responses.flat(2);

  return responses;
};
