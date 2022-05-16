const Image = require('@11ty/eleventy-img')

/**
 * Generate HTML attributes from object
 * @param {Object<string, string>} attributes Attributes list
 * @returns {string[]}
 */
function generateHTMLAttributes (attributes) {
  return Object.entries(attributes)
    .filter(([name, value]) => value !== null)
    .map(([name, value]) => `${name}="${value}"`)
}

/**
 * Create image with auto-generated files
 * @param {Object} options
 * @param {string} options.src Path to image
 * @param {number} options.width Image width
 * @param {string} options.sizes Image sizes
 * @returns {Promise<string>} Image HTML
 */
module.exports = async function ({ src, width, sizes, ...attributes }) {
  const widths = [width]

  if (sizes) {
    widths.push(width * 2)
  }

  const options = {
    widths,
    formats: ['avif', 'webp', 'jpeg'],
    outputDir: 'dist/img',
    svgShortCircuit: true,
    sharpAvifOptions: {
      quality: 70
    }
  }

  const metadata = await Image(src, options)

  const defaultSource = metadata.jpeg[0]
  const defaultAttributes = {
    ...attributes,
    src: defaultSource.url,
    width: defaultSource.width,
    height: defaultSource.height
  }

  const sources = Object.values(metadata)
    .map(source => {
      const sourceAttributes = {
        type: source[0].sourceType,
        srcset: source.map(entry => entry.srcset).join(', '),
        sizes: sizes ?? null
      }

      return `<source ${generateHTMLAttributes(sourceAttributes).join('\n')}>`
    })

  const picture = `
    <picture>
      ${sources.join('\n')}
      <img ${generateHTMLAttributes(defaultAttributes).join('\n')}>
    </picture>
  `

  return picture.trim()
}
