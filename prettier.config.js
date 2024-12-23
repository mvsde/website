/** @import { Config } from "prettier" */

/** @type {Config} */
export default {
	overrides: [
		{
			files: ["*.webc"],
			options: {
				parser: "html",
			},
		},
	],
};
