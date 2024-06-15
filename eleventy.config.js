import { eleventyImageTransformPlugin as pluginImage } from "@11ty/eleventy-img";
import pluginRSS from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import yaml from "js-yaml";

import * as filters from "./eleventy/filters/index.js";
import * as functions from "./eleventy/functions/index.js";
import libraryMarkdown from "./eleventy/libraries/markdown.js";
import imageFeed from "./eleventy/shortcodes/image-feed.js";

const directories = {
	// Relative to current directory.
	input: "content",
	output: "build",

	// Relative to `content` directory.
	layouts: "../layouts",
	includes: "../components",
	data: "../data",
};

// Relative to current directory.
const passthroughCopyList = {
	public: "/",
};

/**
 * Add CSS Cascade Layer to bundle
 * @param {string} content Bundle content
 * @returns {string}
 */
function bundleAddLayer(content) {
	const bucket = this.buckets[0];

	if (!bucket) {
		return content;
	}

	const layeredContent = `@layer ${bucket} {
		${content}
	}`;

	return layeredContent;
}

const pluginWebcOptions = {
	components: "components/**/*.webc",
	bundlePluginOptions: {
		toFileDirectory: "css/bundle",
		transforms: [bundleAddLayer],
	},
};

/**
 * Eleventy configuration
 * @param {import("@11ty/eleventy/src/UserConfig").default} eleventyConfig Eleventy configuration
 */
export default function (eleventyConfig) {
	// Passthrough copy
	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig.addPassthroughCopy(passthroughCopyList);

	// Data
	eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
	eleventyConfig.addGlobalData("base", process.env.URL);

	// Libraries
	eleventyConfig.setLibrary("md", libraryMarkdown);

	// Plugins
	eleventyConfig.addPlugin(pluginImage);
	eleventyConfig.addPlugin(pluginRSS);
	eleventyConfig.addPlugin(pluginSyntaxHighlight);
	eleventyConfig.addPlugin(pluginWebc, pluginWebcOptions);

	// Shortcodes
	eleventyConfig.addNunjucksShortcode("imageFeed", imageFeed);

	// Filters
	for (const [name, method] of Object.entries(filters)) {
		eleventyConfig.addFilter(name, method);
	}

	// Functions
	for (const [name, method] of Object.entries(functions)) {
		eleventyConfig.addJavaScriptFunction(name, method);
	}

	return {
		dir: directories,
		markdownTemplateEngine: "njk",
	};
}
