const Image = require('@11ty/eleventy-img')

/**
 * Create image with auto-generated files
 * @param {Object} options
 * @param {string} options.src Path to image
 * @param {number} options.width Image width
 */
module.exports = function ({ src }) {
  const options = {
    widths: [1000],
    formats: ['webp'],
    outputDir: 'dist/img'
  }

  Image(src, options)

  const metadata = Image.statsSync(src, options)

  return metadata.webp[0].url
}
