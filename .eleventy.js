const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
  // Add support for WebC
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_includes/components/**/*.webc"
  });

  eleventyConfig.addWatchTarget("_includes/components/**/*.webc");

  eleventyConfig.addPassthroughCopy({ "_includes/assets": "assets" });
  
  eleventyConfig.setServerOptions({
    watch: ['docs/**/*.*', '_includes/components/**/*.webc'],
  });

  eleventyConfig.addGlobalData("layout", "base.webc");
  eleventyConfig.addGlobalData("description", "Web personal y blog de Tomas Cornelles, frontend developer.");

  // Filters
  eleventyConfig.addFilter("abstract", (content, length = 200) => {
    const ellipsis = content.length > length ? '...' : '';
    return `${content.substring(0, length)}${ellipsis}`;
  });

  eleventyConfig.addFilter("dateFormat", (date) => {
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
  });

  eleventyConfig.addFilter("tagUrl", (tag) => `/blog/tag/${tag}`);

  // Return your Object options:
  return {
    dir: {
      includes: "../_includes",
      layouts: "../_includes/layouts",
      input: "_views",
      output: "docs" // hack for github pages
    }
  }
};
