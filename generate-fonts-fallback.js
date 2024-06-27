import fs from "node:fs/promises";

import { createFontStack } from "@capsizecss/core";
import Arial from "@capsizecss/metrics/arial";
import NotoSans from "@capsizecss/metrics/notoSans";
import Roboto from "@capsizecss/metrics/roboto";
import Teko from "@capsizecss/metrics/teko";
import WorkSans from "@capsizecss/metrics/workSans";
import prettier from "prettier";
import stylelint from "stylelint";

const filepath = "./public/css/global/fonts-fallback.css";

const heading = createFontStack([Teko, NotoSans, Roboto, Arial]);
const text = createFontStack([WorkSans, NotoSans, Roboto, Arial]);

let code = `
${heading.fontFaces}
${text.fontFaces}
`;

// Run Stylelint autofixer
const linterResult = await stylelint.lint({ code, fix: true });
code = linterResult.code ?? "";

// Run Prettier formatter
const prettierOptions = await prettier.resolveConfig(filepath, {
	editorconfig: true,
});
code = await prettier.format(code, { filepath, ...prettierOptions });

await fs.writeFile(filepath, code);
