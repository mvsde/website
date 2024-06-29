import markdown from "markdown-it";
import attrs from "markdown-it-attrs";
import spans from "markdown-it-bracketed-spans";
import container from "markdown-it-container";
import deflist from "markdown-it-deflist";
import footnote from "markdown-it-footnote";

const markdownOptions = {
	html: true,
};

const md = markdown(markdownOptions);

/** @type {[string, container.ContainerOpts?]} */
const containerNoteOptions = ["Note"];

// Plugins
md.use(attrs);
md.use(container, ...containerNoteOptions);
md.use(deflist);
md.use(footnote);
md.use(spans);

// Tables
md.renderer.rules.table_open = () =>
	`<div class="Table" tabindex="0"><table>\n`;
md.renderer.rules.table_close = () => `</table></div>\n`;

// Footnotes
md.renderer.rules.footnote_block_open = () => `<h2>Footnotes</h2><ol>`;
md.renderer.rules.footnote_block_close = () => `</ol>`;

export default md;
