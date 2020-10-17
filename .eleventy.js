module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'content/img': 'img',
    'src/fonts': '/fonts',
    'src/icon': '/'
  })

  eleventyConfig.addPairedShortcode("lang", function (content, lang) {
    return `<span lang="${lang}">${content}</span>`
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
