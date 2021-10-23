const Image = require('@11ty/eleventy-img')

/**
 * Create image with auto-generated files
 * @param {Object} options
 * @param {string} options.src Path to image
 * @param {number} options.width Image width
 */
module.exports = function ({ src, width, ...attributes }) {
  const options = {
    widths: [width],
    formats: ['avif', 'webp', 'jpeg'],
    outputDir: 'dist/img',
    svgShortCircuit: true
  }

  Image(src, options)

  const metadata = Image.statsSync(src, options)

  return Image.generateHTML(metadata, attributes, { whitespaceMode: 'block' })
}
