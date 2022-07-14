const fs = require('fs');
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://www.abdullahyahya.com/wp-json/wp/v2/posts?per_page=100";
  const maxPages = 100;
  let page = 1;

  let responses = [];

  while (page <= maxPages) {
    const urlWithPage = `${url}&page=${page}`
    try {
      data = await EleventyFetch(urlWithPage, {
        duration: "1d",
        type: "json"
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