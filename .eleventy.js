const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
  // Add support for WebC
  eleventyConfig.addPlugin(pluginWebc, {
    components: "../_includes/layouts/**/*.webc"
  });

  eleventyConfig.setServerOptions({
    watch: ['dist/**/*.*'],
  });

  // Return your Object options:
  return {
    dir: {
      includes: "../_includes",
      layouts: "../_includes/layouts",
      input: "views",
      output: "docs" // hack for github pages
    }
  }
};
