/**
 * Format date as ISO format YYYY-MM-DD.
 *
 * @param {Date} date
 * @returns {string}
 */
export function formatISODate (date) {
	return date.toISOString().slice(0, 10)
}
