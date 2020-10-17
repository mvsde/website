module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'content/img': 'img',
    'src/icon': '/'
  })

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
