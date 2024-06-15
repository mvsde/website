import Image from "@11ty/eleventy-img";

/**
 * @typedef {import("@11ty/eleventy-img").ImageOptions} ImageOptions
 */

/**
 * Generate feed image
 * @param {Object} options
 * @param {string} options.src
 * @param {any} options.attributes
 * @returns {string}
 */
export default function imageFeed({ src, ...attributes }) {
	/** @type {ImageOptions} */
	const options = {
		widths: [1000],
		formats: ["jpeg"],
		outputDir: "build/img",
	};

	Image(src, options);

	const metadata = Image.statsSync(src, options);
	return Image.generateHTML(metadata, attributes);
}
