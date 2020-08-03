
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addFilter("date", require("./filters/dates.js") );

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    },
    feed: process.env.MEDIUM_FEED ||'https://medium.com/feed/netlify'
  };
};
