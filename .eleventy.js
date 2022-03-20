// Libraries
const libraryMarkdown = require('./eleventy/library-markdown.js')

// Transforms
const transformDoctype = require('./eleventy/transform-doctype.js')

// Plugins
const pluginRSS = require('@11ty/eleventy-plugin-rss')
const pluginVue = require('@11ty/eleventy-plugin-vue')

// Shortcodes
const shortcodeEmojiList = require('./eleventy/shortcode-emoji-list.js')
const shortcodeImage = require('./eleventy/shortcode-image.js')
const shortcodeLang = require('./eleventy/shortcode-lang.js')
const shortcodeSocialImage = require('./eleventy/shortcode-social-image.js')

const DIRECTORIES = {
  // Relative to current directory.
  input: 'content',
  output: 'dist',

  // Relative to `content` directory.
  layouts: '../src/layouts',
  includes: '../src/includes',
  data: '../data'
}

// Relative to current directory.
const COPY_FILES = {
  'node_modules/@fontsource/*/files/*latin-{400,700}*.woff2': 'fonts',
  'src/assets': '/'
}

// Relative to current directory.
const VUE_SFCS = [
  'src/layouts/LDefault.vue',
  'src/layouts/LPost.vue',
  'src/layouts/LTag.vue'
]

/**
 * Eleventy configuration
 * @param {Object} eleventyConfig Eleventy configuration
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(COPY_FILES)

  // Transforms
  eleventyConfig.addTransform('doctype', transformDoctype)

  // Libraries
  eleventyConfig.setLibrary('md', libraryMarkdown);

  // Plugins
  eleventyConfig.addPlugin(pluginRSS)
  eleventyConfig.addPlugin(pluginVue, { input: VUE_SFCS })

  // Shortcodes
  eleventyConfig.addShortcode('image', shortcodeImage)
  eleventyConfig.addShortcode('socialImage', shortcodeSocialImage)
  eleventyConfig.addPairedShortcode('lang', shortcodeLang)
  eleventyConfig.addPairedShortcode('emojiList', shortcodeEmojiList)

  return {
    dir: DIRECTORIES,
    markdownTemplateEngine: 'njk'
  }
}
