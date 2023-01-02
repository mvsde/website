const Image = require('@11ty/eleventy-img')

module.exports = function ({ src, ...attributes }) {
	const options = {
		widths: [1120],
		formats: ['jpeg'],
		outputDir: 'dist/img',
	}

	Image(src, options)

	const metadata = Image.statsSync(src, options)
	return Image.generateHTML(metadata, attributes)
}
