import { attrs } from "@mdit/plugin-attrs";
import { container } from "@mdit/plugin-container";
import { dl } from "@mdit/plugin-dl";
import { footnote } from "@mdit/plugin-footnote";
import markdown from "markdown-it";
import spans from "markdown-it-bracketed-spans";

/** @import {MarkdownItContainerOptions} from '@mdit/plugin-container' */

const markdownOptions = {
	html: true,
};

const md = markdown(markdownOptions);

/** @type {MarkdownItContainerOptions} */
const containerNoteOptions = { name: "Note" };

// Plugins
md.use(attrs);
md.use(container, containerNoteOptions);
md.use(dl);
md.use(footnote);
md.use(spans);

// Tables
md.renderer.rules.table_open = () => `<div class="Table"><table>\n`;
md.renderer.rules.table_close = () => `</table></div>\n`;

// Footnotes
md.renderer.rules.footnote_block_open = () => `<h2>Footnotes</h2><ol>`;
md.renderer.rules.footnote_block_close = () => `</ol>`;

export default md;
