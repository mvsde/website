const markdown = require('./library-markdown.js')

/**
 * Create pseudo-list out of lines prefixed with emojis
 * @param {string} content Content between tags
 * @returns {string} Emoji list markup
 */
module.exports = function (content) {
  const listItems = content
    .trim()
    .split('\n')
    .map(line => line.slice(2).split(/\s(.+)/))
    .map(([emoji, text]) => `<span aria-hidden="true">${emoji}</span> <span>${markdown.renderInline(text)}</span>`)
    .map(line => `<li>${line}</li>`)

  return `<ul class="list-emoji">${listItems.join('')}</ul>`
}