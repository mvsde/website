/**
 * Get filtered tag list for page
 * @param {string[]} [tags]
 * @returns {string[]|null}
 */
export function filterTags(tags) {
	if (!tags) {
		return null;
	}

	const excludedTags = ["feed", "blog", "talk", "sunset"];
	const filteredTags = tags.filter((tag) => !excludedTags.includes(tag));

	if (!filteredTags.length) {
		return null;
	}

	return filteredTags;
}
