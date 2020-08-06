const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function(eleventyConfig) {
  // Copy the entire folder instated of using ext 👉 https://www.11ty.dev/docs/copy/#manual-passthrough-file-copy-(faster 
  eleventyConfig.addPassthroughCopy("src/img");

  // higlited 
  eleventyConfig.addPlugin(syntaxHighlight);

  
  /**
   * Filters or pipe in angular
   */
  // Minify inline style 👉 https://www.11ty.dev/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter("date", require("./src/_filters/dates.js") );

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    },
    feed: process.env.MEDIUM_FEED ||'https://medium.com/feed/netlify'
  };
};
