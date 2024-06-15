import Image from "@11ty/eleventy-img";

/**
 * @typedef {import("@11ty/eleventy-img").ImageOptions} ImageOptions
 */

/**
 * Generate feed image
 * @param {Object} options
 * @param {string} options.base
 * @param {string} options.src
 * @returns {Promise<string|undefined>}
 */
export async function getSocialImage({ base, src }) {
	/** @type {ImageOptions} */
	const options = {
		widths: [1000],
		formats: ["jpeg"],
		outputDir: "build/img",
	};

	const metadata = await Image(src, options);
	const image = metadata.jpeg?.[0].url;

	if (!image) {
		return;
	}

	const url = new URL(image, base);
	return url.href;
}
