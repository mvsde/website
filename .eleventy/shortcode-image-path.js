const Image = require('@11ty/eleventy-img')

/**
 * Create image with auto-generated files
 * @param {Object} options
 * @param {string} options.src Path to image
 * @param {number} options.width Image width
 * @param {string} options.format Image format
 * @returns {Promise<string>} Image URL
 */
module.exports = async function ({ src, width, format }) {
  const options = {
    widths: [width],
    formats: [format],
    outputDir: 'dist/img'
  }

  const metadata = await Image(src, options)

  return metadata[format][0].url
}
