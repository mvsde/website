const Image = require('@11ty/eleventy-img')

module.exports = function ({ width }) {
  const src = 'eleventy/app-icon.png'
  const options = {
    widths: [width],
    formats: ['png'],
    outputDir: 'dist',
    filenameFormat (id, src, width, format, options) {
      return `app-icon-${width}.${format}`
    }
  }

  Image(src, options)

  const metadata = Image.statsSync(src, options)

  return '/' + metadata.png[0].filename
}
