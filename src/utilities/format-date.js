/**
 * Format date object.
 *
 * @param {Date} date
 * @returns {string}
 */
export default function (date) {
	return date.toISOString().slice(0, 10)
}
