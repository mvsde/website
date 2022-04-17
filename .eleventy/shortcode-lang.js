/**
 * Create HTML with specific language code
 * @param {string} language Language code
 * @param {string} text Text to wrapp
 * @returns {string} Content wrapped with language
 */
module.exports = function (language, text) {
  return `<span lang="${language}" translate="no">${text}</span>`
}
