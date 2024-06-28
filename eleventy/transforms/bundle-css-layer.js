/**
 * Add CSS Cascade Layer to bundle
 * @param {string} content Bundle content
 * @returns {string}
 */
export default function bundleCSSLayer(content) {
	if (this.type !== "css") {
		return content;
	}

	if (!content.includes("@layer")) {
		return content;
	}

	const layeredContent = content
		.split("@layer")
		.slice(1)
		.map((part) => "@layer" + part.replace(";", " {") + "\n}")
		.join("\n\n");

	return layeredContent;
}
