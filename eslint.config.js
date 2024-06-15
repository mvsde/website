import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	// Global ignored files
	{
		ignores: ["build"],
	},

	// Global settings
	{
		files: ["**/*.js"],
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			...js.configs.recommended.rules,
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
];
