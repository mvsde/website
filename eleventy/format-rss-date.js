/**
 * Format date according to RFC 3389 for Atom feeds
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc3339#section-5.8}
 *
 * @param {Date} date
 * @returns {string}
 */
module.exports = function (date) {
	const normalizedDate = new Date(date)

	const hours = date.getUTCHours()
	const minutes = date.getUTCMinutes()
	const seconds = date.getUTCSeconds()

	// Normalize time to 12:00:00 in case the time is missing from the page date.
	if (hours === 0 && minutes === 0 && seconds === 0) {
		normalizedDate.setUTCHours(12)
	}

	return normalizedDate.toISOString().slice(0, -5) + 'Z'
}
