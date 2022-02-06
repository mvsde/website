/**
 * Add doctype to HTML files.
 *
 * @param {string} content
 * @param {string} outputPath
 * @returns {string}
 */
module.exports = function (content, outputPath) {
  const doctype = '<!DOCTYPE html>'

  // If we’re writing to an HTML file and a Doctype does not already exist.
  if (outputPath.endsWith('.html') && !content.trim().toLowerCase().startsWith(doctype)) {
    return `${doctype}${content}`
  }

  return content
}
