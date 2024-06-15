/**
 * Check if current page is homepage
 * @param {string} page Current page URL
 * @returns {boolean}
 */
export function isHomePage(page) {
	return page === "/";
}

/**
 * Check if URL is current page
 * @param {Object} options
 * @param {string} options.current Current page URL
 * @param {string} options.url Comparison URL
 * @returns {boolean}
 */
export function isCurrentPage({ current, url }) {
	return current === url;
}

/**
 * Check if URL is active page
 * @param {Object} options
 * @param {string} options.current Current page URL
 * @param {string} options.url Comparison URL
 * @returns {boolean}
 */
export function isActivePage({ current, url }) {
	if (isHomePage(url)) {
		return isCurrentPage({ current, url });
	}

	return current.startsWith(url);
}
