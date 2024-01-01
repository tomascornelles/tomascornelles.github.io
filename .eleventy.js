// Eleventy config
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Add support for WebC
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_includes/components/**/*.webc"
  });

  // i18n
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "es", // Required, this site uses "en"
  });

  // Server options
  eleventyConfig.addWatchTarget("_includes/components/**/*.webc");

  eleventyConfig.addPassthroughCopy({ "_includes/assets": "assets" });
  eleventyConfig.addPassthroughCopy("_views/**/*.(jpeg|jpg|png|gif|webp)");

  eleventyConfig.setServerOptions({
    watch: ['docs/**/*.*', '_includes/components/**/*.webc'],
  });

  // Global Data
  eleventyConfig.addGlobalData("layout", "base.webc");

  eleventyConfig.addGlobalData("description", "Web personal y blog de Tomas Cornelles, frontend developer.");

  // Filters
  eleventyConfig.addFilter("abstract", (content, length = 200) => {
    const ellipsis = content.length > length ? '...' : '';
    return `${content.substring(0, length)}${ellipsis}`;
  });

  eleventyConfig.addFilter("dateFormat", (date, lang) => {
    const months = {
      "es": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      "en": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
    };
    return `${date.getDate()}-${months[lang][date.getMonth()]}-${date.getFullYear()}`;
  });

  eleventyConfig.addFilter("tagUrl", (tag, lang) => {
    const urlLang = lang === 'es' ? '' : `/${lang}`;
    return `${urlLang}/blog/tag/${tag}`;
  });

  eleventyConfig.addFilter("pageUrl", (page) => `https://tomascornelles.com${page}`);

  eleventyConfig.addFilter("imageUrl", (page, image) => `https://tomascornelles.com${page}${image}`);

  eleventyConfig.addFilter("langUrl", (lang, id) => id === 'home' ? `${lang}` : `${lang}blog`);

  eleventyConfig.addFilter("readingTime", (content) => {
    const wpm = 225;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
  });

  eleventyConfig.addFilter("filteredTag", (tags, tag) => {
    return tags.includes(tag)
  })

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
