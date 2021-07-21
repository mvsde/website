const pluginRSS = require('@11ty/eleventy-plugin-rss')

const COPY_FILES = {
  'node_modules/@fontsource/*/files/*latin-{400,700}*.woff2': 'fonts',
  'content/img': 'img',
  'src/icon': '/'
}

const DIRECTORIES = {
  layouts: '../src/layouts',
  includes: '../src/includes',
  data: '../data'
}

/**
 * Create HTML with specific language code
 * @param {string} content Content between tags
 * @param {string} lang Language code
 * @returns {string} Content wrapped with language
 */
function langShortcode (content, lang) {
  return `<span lang="${lang}" translate="no">${content}</span>`
}

/**
 * Eleventy configuration
 * @param {Object} eleventyConfig Eleventy configuration
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(COPY_FILES)
  eleventyConfig.addPairedShortcode('lang', langShortcode)
  eleventyConfig.addPlugin(pluginRSS)

  return {
    dir: DIRECTORIES,
    markdownTemplateEngine: 'njk'
  }
}
