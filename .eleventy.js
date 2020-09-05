const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// Transformers
const minifyHTML = require("./transforms/htmlmin.js");
// filters
const minifyCSS = require("./filters/cssmin.js")
const dateFormate = require("./filters/dates.js");


module.exports = function(eleventyConfig) {

  /**
   * Plugins 👉 https://www.11ty.dev/docs/plugins/
   */
  eleventyConfig.addPlugin(syntaxHighlight);

  /**
   * Build process (Moving assets, Minify css,html and js files)
   * addPassthroughCopy: 👉 https://www.11ty.dev/docs/copy/#manual-passthrough-file-copy-(faster 
   * Transforms can modify a template’s(html, md ...etc) output. 👉 https://www.11ty.dev/docs/config/#transforms
   */
  eleventyConfig.addPassthroughCopy("assets");
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", minifyHTML);
  }
  /************************************************************/
  /**
   * Various template engines can be extended with custom filters to modify content. 
   * https://www.11ty.dev/docs/filters/
   */
  eleventyConfig.addFilter("cssmin", minifyCSS);
  eleventyConfig.addFilter("date", dateFormate);

  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;

        tags = tags.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
            case "tagList":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  // combine the data cascading 👉 https://www.11ty.dev/docs/data-deep-merge/
  
  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src", // By default input will be the root directory.
      includes: "_includes",  // ⚠️ This value is relative to your input directory.
      data: "_data", // ⚠️ This value is relative to your input directory.
    },
    templateFormats: ["md", "njk", "html"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
