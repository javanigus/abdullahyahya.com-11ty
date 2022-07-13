const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://abdullahyahya.com/wp-json/wp/v2/categories";

  const data = await EleventyFetch(url, {
    duration: "1d",
    type: "json"
  });
  console.log(data);

  return data;
};