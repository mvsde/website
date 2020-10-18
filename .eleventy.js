const COPY_FILES = {
  'content/img': 'img',
  'src/fonts': '/fonts',
  'src/icon': '/'
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
  eleventyConfig.addPairedShortcode("lang", langShortcode)

  return {
    dir: {
      layouts: '../src/layouts',
      includes: '../src/includes',
      data: '../data'
    },
    templateFormats: ['md', '11ty.js'],
    markdownTemplateEngine: 'njk'
  }
}
