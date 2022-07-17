const container = require('markdown-it-container')
const deflist = require('markdown-it-deflist')
const footnote = require('markdown-it-footnote')
const markdown = require('markdown-it')

const MARKDOWN_OPTIONS = {
  html: true
}

const md = markdown(MARKDOWN_OPTIONS)

// Plugins
md.use(container, 'note')
md.use(deflist)
md.use(footnote)

// Custom rules
md.renderer.rules.table_open = () => '<div class="table-scroll"><table>\n'
md.renderer.rules.table_close = () => '</table></div>\n'

module.exports = md
