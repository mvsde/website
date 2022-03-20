const DOCTYPE = '<!DOCTYPE html>'

/**
 * Add doctype to HTML files.
 *
 * @param {string} content
 * @param {string} outputPath
 * @returns {string}
 */
module.exports = function (content, outputPath) {
  const isHTMLFile = outputPath.endsWith('.html')
  const hasDoctype = content.trim().toLowerCase().startsWith(DOCTYPE)

  if (isHTMLFile && !hasDoctype) {
    return `${DOCTYPE}${content}`
  }

  return content
}
