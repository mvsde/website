const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  map: { inline: false },
  plugins: [
    require('postcss-import')(),
    IS_PRODUCTION && require('cssnano')()
  ]
}
