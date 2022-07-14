var fs = require('fs');
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const url = "http://abdullahyahya.com/wp-json/wp/v2/categories?per_page=100";

  const data = await EleventyFetch(url, {
    duration: "1d",
    type: "json"
  });

//   console.log(data.length);

//   fs.writeFile ("data.json", JSON.stringify(data, null, 2), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );

  return data;
};