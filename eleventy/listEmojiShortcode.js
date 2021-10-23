/**
 * Create pseudo-list out of lines prefixed with emojis
 * @param {string} content Content between tags
 * @returns {string} Emoji list markup
 */
module.exports = function (content) {
  const listItems = content
    .trim()
    .split('\n')
    .map(line => line.split(/\s(.+)/))
    .map(([emoji, text]) => `<span>${emoji}</span> <span>${text}</span>`)

  return `<span class="list-emoji">${listItems.join('\n')}</span>`
}
