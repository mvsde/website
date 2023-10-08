const anchor = require('markdown-it-anchor').default
const attrs = require('markdown-it-attrs')
const container = require('markdown-it-container')
const deflist = require('markdown-it-deflist')
const footnote = require('markdown-it-footnote')
const markdown = require('markdown-it')
const spans = require('markdown-it-bracketed-spans')
const toc = require('markdown-it-toc-done-right')

const MARKDOWN_OPTIONS = {
	html: true,
}

const md = markdown(MARKDOWN_OPTIONS)

/** @type {anchor.AnchorOptions} */
const anchorOptions = {
	permalink: anchor.permalink.headerLink({ class: 'u-linkHeading' }),
}

/** @type {[string, container.ContainerOpts?]} */
const containerNoteOptions = ['Note']

/** @type {Partial<toc.TocOptions>} */
const tocOptions = {
	containerClass: 'TOC-nav',
	listClass: 'TOC-list',
	itemClass: 'TOC-item',
	linkClass: 'TOC-link',
}

// Plugins
md.use(anchor, anchorOptions)
md.use(attrs)
md.use(container, ...containerNoteOptions)
md.use(deflist)
md.use(footnote)
md.use(spans)
md.use(toc, tocOptions)

// Tables
md.renderer.rules.table_open = () => '<div class="Table-scroll" tabindex="0"><table>\n'
md.renderer.rules.table_close = () => '</table></div>\n'

// Footnotes
md.renderer.rules.footnote_block_open = () => '<hr><ol class="Footnotes">'
md.renderer.rules.footnote_block_close = () => '</ol>'

// Table of contents
md.renderer.rules.tocOpen = () =>
	`<details class="TOC Note"><summary class="TOC-heading">Table of contents</summary><nav class="${tocOptions.containerClass}" aria-label="Table of contents">`
md.renderer.rules.tocClose = () => `</nav></details>`

module.exports = md
