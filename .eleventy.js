const yaml = require('js-yaml')

// Libraries
const libraryMarkdown = require('./.eleventy/library-markdown.js')

// Transforms
const transformDoctype = require('./.eleventy/transform-doctype.js')

// Plugins
const pluginRSS = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginVue = require('@11ty/eleventy-plugin-vue')

// Shortcodes
const shortcodeEmojiList = require('./.eleventy/shortcode-emoji-list.js')
const shortcodeImage = require('./.eleventy/shortcode-image.js')
const shortcodeImagePath = require('./.eleventy/shortcode-image-path.js')
const shortcodeLang = require('./.eleventy/shortcode-lang.js')

const DIRECTORIES = {
  // Relative to current directory.
  input: 'content',
  output: 'dist',

  // Relative to `content` directory.
  layouts: '../src/layouts',
  includes: '../src/includes'
}

// Relative to current directory.
const COPY_FILES = {
  'node_modules/@fontsource/*/files/*latin-{400,700}*.woff2': 'fonts',
  public: '/'
}

// Relative to current directory.
const VUE_SFCS = [
  'src/layouts/LDefault.vue',
  'src/layouts/LGallery.vue',
  'src/layouts/LPost.vue',
  'src/layouts/LTag.vue'
]

/**
 * Eleventy configuration
 * @param {Object} eleventyConfig Eleventy configuration
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(COPY_FILES)

  // Data
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
  eleventyConfig.addGlobalData('base', process.env.URL)
  eleventyConfig.addGlobalData('layout', 'LDefault.vue')

  // Transforms
  eleventyConfig.addTransform('doctype', transformDoctype)

  // Libraries
  eleventyConfig.setLibrary('md', libraryMarkdown)

  // Plugins
  eleventyConfig.addPlugin(pluginRSS)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginVue, { input: VUE_SFCS })

  // Shortcodes
  eleventyConfig.addJavaScriptFunction('image', shortcodeImage)
  eleventyConfig.addJavaScriptFunction('imagePath', shortcodeImagePath)
  eleventyConfig.addNunjucksAsyncShortcode('image', shortcodeImage)
  eleventyConfig.addPairedShortcode('emojiList', shortcodeEmojiList)
  eleventyConfig.addShortcode('lang', shortcodeLang)

  return {
    dir: DIRECTORIES,
    markdownTemplateEngine: 'njk'
  }
}
