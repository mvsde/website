import process from "node:process";

import { InputPathToUrlTransformPlugin as pluginInputPathToURL } from "@11ty/eleventy";
import { eleventyImageTransformPlugin as pluginImage } from "@11ty/eleventy-img";
import pluginRSS from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import yaml from "js-yaml";

import * as filters from "./eleventy/filters/index.js";
import * as functions from "./eleventy/functions/index.js";
import { syntaxLanguages } from "./eleventy/languages.js";
import libraryMarkdown from "./eleventy/libraries/markdown.js";
import parserDate from "./eleventy/parsers/date.js";
import shortcodeImageFeed from "./eleventy/shortcodes/image-feed.js";

/** @import UserConfig from "@11ty/eleventy/UserConfig" */

export const config = {
	dir: {
		// Relative to current directory.
		input: "content",
		output: "build",

		// Relative to `content` directory.
		layouts: "../layouts",
		includes: "../components",
		data: "../data",
	},

	markdownTemplateEngine: "njk",
};

// Relative to current directory.
const passthroughCopyList = {
	public: "/",
};

const pluginSyntaxHighlightOptions = {
	preAttributes: {
		"data-language": ({ language }) => syntaxLanguages[language] ?? language,
	},
};

const pluginWebcOptions = {
	components: "components/**/*.webc",
	bundlePluginOptions: {
		toFileDirectory: "bundle",
	},
};

/**
 * Eleventy configuration
 * @param {UserConfig} eleventyConfig Eleventy configuration
 */
export default function (eleventyConfig) {
	// Passthrough copy
	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig.addPassthroughCopy(passthroughCopyList);

	// Data
	eleventyConfig.addDateParsing(parserDate);
	eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
	eleventyConfig.addGlobalData("base", process.env.URL);

	// Libraries
	eleventyConfig.setLibrary("md", libraryMarkdown);

	// Plugins
	eleventyConfig.addPlugin(pluginImage);
	eleventyConfig.addPlugin(pluginInputPathToURL);
	eleventyConfig.addPlugin(pluginRSS);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, pluginSyntaxHighlightOptions);
	eleventyConfig.addPlugin(pluginWebc, pluginWebcOptions);

	// Shortcodes
	eleventyConfig.addNunjucksShortcode("imageFeed", shortcodeImageFeed);

	// Filters
	for (const [name, method] of Object.entries(filters)) {
		eleventyConfig.addFilter(name, method);
	}

	// Functions
	for (const [name, method] of Object.entries(functions)) {
		eleventyConfig.addJavaScriptFunction(name, method);
	}
}
