const markdownIt = require('markdown-it')
const container = require('markdown-it-container')
const deflist = require('markdown-it-deflist')

const MARKDOWN_OPTIONS = {
  html: true
}

const md = markdownIt(MARKDOWN_OPTIONS)

// Plugins
md.use(container, 'note')
md.use(deflist)

// Custom rules
md.renderer.rules.table_open = () => '<div class="table-scroll"><table>\n'
md.renderer.rules.table_close = () => '</table></div>\n'

module.exports = md
