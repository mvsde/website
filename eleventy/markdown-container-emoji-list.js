const Token = require('markdown-it/lib/token.js')

/**
 * @typedef {import('markdown-it/lib/renderer').RenderRule} RenderRule
 */

/**
 * Exctract tokens between opening and closing type
 * @param {Object} options
 * @param {Token[]} options.tokens
 * @param {number} options.idx
 * @param {string} options.closeType
 * @returns
 */
function extractTokens ({ tokens, idx, closeType }) {
  const extractedTokens = []

  for (let index = idx + 1; index < tokens.length; index++) {
    const token = tokens[index]

    if (token.type === closeType) {
      break
    }

    extractedTokens.push(token)
  }

  return extractedTokens
}

/**
 * Transform unordered list
 * @param {Token} token Unordered list token
 */
function transformUList (token) {
  if (token.type !== 'bullet_list_open') {
    return
  }

  token.attrSet('class', 'list-emoji')
}

/**
 * Transform inline text
 * @param {Token} token Unordered list token
 */
function transformText (token) {
  if (token.type !== 'inline') {
    return
  }

  const firstChild = token.children[0]

  const [emoji, text] = firstChild.content.split(/\s(.+)/)
  firstChild.content = text

  const emojiWrapperOpen = new Token('html_inline', '', 0)
  emojiWrapperOpen.content = '<span aria-hidden="true">'

  const emojiText = new Token('text', '', 0)
  emojiText.content = emoji

  const emojiWrapperClose = new Token('html_inline', '', 0)
  emojiWrapperClose.content = '</span>'

  const textWrapperOpen = new Token('html_inline', '', 0)
  textWrapperOpen.content = '<span>'

  const textWrapperClose = new Token('html_inline', '', 0)
  textWrapperClose.content = '</span>'

  token.children.unshift(emojiWrapperOpen, emojiText, emojiWrapperClose, textWrapperOpen)
  token.children.push(textWrapperClose)
}

/**
 * Create list out of lines prefixed with emojis
 * @type {RenderRule}
 */
module.exports = function (tokens, idx) {
  const token = tokens[idx]
  const name = token.info.trim()
  const openType = `container_${name}_open`
  const closeType = `container_${name}_close`

  if (token.type === openType) {
    transformUList(tokens[idx + 1])

    const inbetweenTokens = extractTokens({ tokens, idx, closeType })
    inbetweenTokens.forEach(transformText)
  }

  return ''
}
