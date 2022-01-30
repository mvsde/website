const pluginRSS = require('@11ty/eleventy-plugin-rss')

const imageShortcode = require('./eleventy/imageShortcode.js')
const imageSocialShortcode = require('./eleventy/imageSocialShortcode.js')
const langShortcode = require('./eleventy/langShortcode.js')
const listEmojiShortcode = require('./eleventy/listEmojiShortcode.js')

const COPY_FILES = {
  'node_modules/@fontsource/*/files/*latin-{400,700}*.woff2': 'fonts',
  'src/assets': '/'
}

const DIRECTORIES = {
  layouts: '../src/layouts',
  includes: '../src/includes',
  data: '../data'
}

/**
 * Eleventy configuration
 * @param {Object} eleventyConfig Eleventy configuration
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(COPY_FILES)
  eleventyConfig.addShortcode('image', imageShortcode)
  eleventyConfig.addShortcode('imageSocial', imageSocialShortcode)
  eleventyConfig.addPairedShortcode('lang', langShortcode)
  eleventyConfig.addPairedShortcode('listemoji', listEmojiShortcode)

  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addPlugin(pluginRSS)
  } else {
    eleventyConfig.ignores.add('content/feed.njk');
  }

  return {
    dir: DIRECTORIES,
    markdownTemplateEngine: 'njk'
  }
}
