const tweets = require('./tweets')

class List {
  async data () {
    return {
      layout: 'twitter/list.njk',
      tweets: await tweets,
      permalink: '/'
    }
  }
}

module.exports = List
