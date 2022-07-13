const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://www.abdullahyahya.com/wp-json/wp/v2/posts";

  const data = await EleventyFetch(url, {
    duration: "1d",
    type: "json"
  });

  return data;
};