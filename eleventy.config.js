const yaml = require('js-yaml')

// Libraries
const libraryMarkdown = require('./eleventy/library-markdown.js')

// Plugins
const pluginRSS = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const { pluginVue } = require('@mvsde/eleventy-plugin-vue')

// Shortcodes
const shortcodeImage = require('./eleventy/shortcode-image.js')
const shortcodeImageFeed = require('./eleventy/shortcode-image-feed.js')
const shortcodeImagePath = require('./eleventy/shortcode-image-path.js')

// Filters
const filterFormatRSSDate = require('./eleventy/format-rss-date.js')

const DIRECTORIES = {
	// Relative to current directory.
	input: 'content',
	output: 'dist',

	// Relative to `content` directory.
	layouts: '../src/layouts',
	includes: '../src/components',
}

// Relative to current directory.
const COPY_FILES = {
	public: '/',
}

/**
 * Eleventy configuration
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig Eleventy configuration
 */
module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy(COPY_FILES)

	// Data
	eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents))
	eleventyConfig.addGlobalData('base', process.env.URL)
	eleventyConfig.addGlobalData('layout', 'LDefault.vue')

	// Libraries
	eleventyConfig.setLibrary('md', libraryMarkdown)

	// Plugins
	eleventyConfig.addPlugin(pluginRSS)
	eleventyConfig.addPlugin(pluginSyntaxHighlight)
	eleventyConfig.addPlugin(pluginVue)

	// Shortcodes
	eleventyConfig.addJavaScriptFunction('image', shortcodeImage)
	eleventyConfig.addJavaScriptFunction('imagePath', shortcodeImagePath)
	eleventyConfig.addNunjucksShortcode('imageFeed', shortcodeImageFeed)

	// Filters
	eleventyConfig.addNunjucksFilter('formatRSSDate', filterFormatRSSDate)

	return {
		dir: DIRECTORIES,
		markdownTemplateEngine: 'njk',
	}
}
