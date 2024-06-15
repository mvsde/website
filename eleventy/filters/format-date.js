/**
 * Format date as ISO format YYYY-MM-DD
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
	return date.toISOString().slice(0, 10);
}
