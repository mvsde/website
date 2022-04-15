const Image = require('@11ty/eleventy-img')

/**
 * Generate HTML attributes from object
 * @param {Object<string, string>} attributes Attributes list
 * @returns {string[]}
 */
function generateHTMLAttributes (attributes) {
  return Object.entries(attributes)
    .map(([name, value]) => `${name}="${value}"`)
}

/**
 * Create image with auto-generated files
 * @param {Object} options
 * @param {string} options.src Path to image
 * @param {number} options.width Image width
 */
module.exports = function ({ src, width, ...attributes }) {
  const options = {
    widths: [width, width * 1.5, width * 2],
    formats: ['avif', 'webp', 'jpeg'],
    outputDir: 'dist/img',
    svgShortCircuit: true
  }

  Image(src, options)

  const metadata = Image.statsSync(src, options)

  const defaultSource = metadata.jpeg[0]
  attributes.src = defaultSource.url
  attributes.width = defaultSource.width
  attributes.height = defaultSource.height

  const sources = Object.values(metadata)
    .map(source => {
      const sourceAttributes = {
        type: source[0].sourceType,
        srcset: source.map(entry => entry.srcset).join(', '),
        sizes: attributes.sizes
      }

      return `<source ${generateHTMLAttributes(sourceAttributes).join('\n')}>`
    })

  delete attributes.sizes

  const picture = `
    <picture>
      ${sources.join('\n')}
      <img ${generateHTMLAttributes(attributes).join('\n')}>
    </picture>
  `

  return picture.trim()
}
