/**
 * Format language code to full language name
 * @param {string} code Language code
 * @returns Formatted language name
 */
export function formatLanguage(code) {
	const formatter = new Intl.DisplayNames("en", { type: "language" });
	return formatter.of(code);
}
