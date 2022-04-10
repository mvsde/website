const shortcodeImage = require('./shortcode-image.js')

/**
 * Custom markdown image processing
 * @type {import('markdown-it/lib/renderer').RenderRule}
 */
module.exports = function (tokens, idx) {
  const token = tokens[idx]
  const url = new URL(token.attrs[0][1], process.env.URL)

  const options = {
    src: url.pathname.slice(1),
    alt: token.content,
    width: parseInt(url.searchParams.get('width'))
  }

  for (const [name, value] of url.searchParams) {
    if (options[name]) {
      continue
    }

    options[name] = value
  }

  return shortcodeImage(options)
}
