const pluginRSS = require('@11ty/eleventy-plugin-rss')

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
  eleventyConfig.addPairedShortcode('lang', langShortcode)
  eleventyConfig.addPlugin(pluginRSS)

  eleventyConfig.addCollection('rss', collectionApi => {
    return collectionApi.getAllSorted().filter(item => {
      const tags = item.data.tags

      if (tags?.includes('blog')) {
        return true
      }

      if (tags?.includes('talk')) {
        return true
      }

      if (tags?.includes('sunset')) {
        return true
      }

      return false
    })
  })

  return {
    dir: {
      layouts: '../src/layouts',
      includes: '../src/includes',
      data: '../data'
    },
    markdownTemplateEngine: 'njk'
  }
}
