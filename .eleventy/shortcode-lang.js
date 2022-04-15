/**
 * Create HTML with specific language code
 * @param {string} content Content between tags
 * @param {string} lang Language code
 * @returns {string} Content wrapped with language
 */
module.exports = function (content, lang) {
  return `<span lang="${lang}" translate="no">${content}</span>`
}
