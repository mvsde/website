/**
 * @typedef {import('markdown-it/lib/renderer').RenderRule} RenderRule
 */

/**
 * Remove `<p>…</p>` surrounding an image
 * @type {RenderRule}
 */
module.exports = function (tokens, idx) {
  const token = tokens[idx]
  const name = token.info.trim()
  const openType = `container_${name}_open`

  if (token.type === openType) {
    const paragraphOpen = tokens[idx + 1]
    const paragraphClose = tokens[idx + 3]

    paragraphOpen.hidden = true
    paragraphClose.hidden = true
  }

  return ''
}
