const markdownIt = require('markdown-it')
const container = require('markdown-it-container')
const deflist = require('markdown-it-deflist')
const containerBlockImage = require('./markdown-container-block-image.js')
const containerEmojiList = require('./markdown-container-emoji-list.js')
const rendererImage = require('./markdown-renderer-image.js')

const MARKDOWN_OPTIONS = {
  html: true
}

const md = markdownIt(MARKDOWN_OPTIONS)

// Plugins
md.use(container, 'note')
md.use(container, 'block-image', { render: containerBlockImage })
md.use(container, 'emoji-list', { render: containerEmojiList })
md.use(deflist)

// Custom rules
md.renderer.rules.table_open = () => '<div class="table-scroll"><table>\n'
md.renderer.rules.table_close = () => '</table></div>\n'
md.renderer.rules.image = rendererImage

module.exports = md
