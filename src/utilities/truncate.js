/**
 * Truncate text to length.
 *
 * @param {string} text
 * @param {number} length
 * @returns {string}
 */
export default function (text = '', length) {
	return text.slice(0, length)
}
