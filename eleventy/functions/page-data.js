/**
 * Get page data for URL
 * @param {Object} options
 * @param {Object} options.collections Eleventy collections
 * @param {string} options.url URL for page
 * @returns {Array}
 */
export function getPageData({ collections, url }) {
	return collections.all.find((page) => page.url === url);
}
