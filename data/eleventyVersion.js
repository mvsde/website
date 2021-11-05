const pkg = require('../package.json')

module.exports = pkg.devDependencies['@11ty/eleventy'].slice(1)
