module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'content/site/img': 'img'
  })

  return {
    dir: {
      layouts: '../../src/layouts',
      includes: '../../src/includes'
    },
    templateFormats: ['md', '11ty.js'],
    markdownTemplateEngine: 'njk'
  }
}
