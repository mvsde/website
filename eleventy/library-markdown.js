const attrs = require('markdown-it-attrs')
const container = require('markdown-it-container')
const deflist = require('markdown-it-deflist')
const footnote = require('markdown-it-footnote')
const markdown = require('markdown-it')
const spans = require('markdown-it-bracketed-spans')

const MARKDOWN_OPTIONS = {
	html: true,
}

const md = markdown(MARKDOWN_OPTIONS)

// Plugins
md.use(attrs)
md.use(container, 'Note')
md.use(deflist)
md.use(footnote)
md.use(spans)

// Tables
md.renderer.rules.table_open = () => '<div class="Table-scroll"><table>\n'
md.renderer.rules.table_close = () => '</table></div>\n'

// Footnotes
md.renderer.rules.footnote_block_open = () => '<hr><ol class="Footnotes">'
md.renderer.rules.footnote_block_close = () => '</ol>'

module.exports = md
