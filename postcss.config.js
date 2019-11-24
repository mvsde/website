const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  map: isProduction ? { inline: false } : true,
  plugins: [
    require('postcss-import')(),
    isProduction && require('cssnano')()
  ]
}
