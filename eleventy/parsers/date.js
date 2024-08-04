/**
 * @typedef {object} Context
 * @property {object} page
 * @property {string} page.inputPath
 */

/**
 * @param {Date|undefined} date
 * @this {Context}
 * @returns {Date|undefined}
 */
export default function parserDate(date) {
	const dateFromPath = this.page.inputPath.match(/\/(\d{4}-\d{2}-\d{2})/);

	if (dateFromPath) {
		date = new Date(dateFromPath[1]);
	}

	if (!date) return;

	const normalizedDate = new Date(date);

	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const seconds = date.getUTCSeconds();

	// Normalize time to 12:00:00 in case the time is missing from the page date.
	if (hours === 0 && minutes === 0 && seconds === 0) {
		normalizedDate.setUTCHours(12);
	}

	return normalizedDate;
}
