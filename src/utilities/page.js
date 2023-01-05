/**
 * Check if current page is homepage
 * @param {string} page Current page URL
 * @returns {boolean}
 */
export function isHomePage (page) {
	return page === '/'
}

/**
 * Check if URL is current page
 * @param {Object} options
 * @param {string} options.current Current page URL
 * @param {string} options.url Comparison URL
 * @returns {boolean}
 */
export function isCurrentPage ({ current, url }) {
	return current === url
}

/**
 * Check if URL is active page
 * @param {Object} options
 * @param {string} options.current Current page URL
 * @param {string} options.url Comparison URL
 * @returns {boolean}
 */
export function isActivePage ({ current, url }) {
	if (isHomePage(url)) {
		return isCurrentPage({ current, url })
	}

	return current.startsWith(url)
}

/**
 * Get page data for URL
 * @param {Object} options
 * @param {Object} options.collections Eleventy collections
 * @param {string} options.url URL for page
 * @returns {Array}
 */
export function getPageData ({ collections, url }) {
	return collections.all.find(page => page.url === url)
}

/**
 * Get filtered tag list for page
 * @param {string[]} tags
 * @returns {string[]|null}
 */
export function filterTags (tags) {
	const EXCLUDED_TAGS = ['feed', 'blog', 'talk', 'sunset']
	const filteredTags = tags.filter(tag => !EXCLUDED_TAGS.includes(tag))

	if (!filteredTags.length) {
		return null
	}

	return filteredTags
}
