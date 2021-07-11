const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  map: IS_PRODUCTION ? { inline: false } : true,
  plugins: [
    require('postcss-import')(),
    IS_PRODUCTION && require('cssnano')()
  ]
}
