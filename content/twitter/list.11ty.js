const tweets = require('./tweets')

class List {
  async data () {
    return {
      layout: 'twitter/list.njk',
      title: 'Twitter Archive',
      tweets: await tweets,
      pagination: {
        data: 'tweets',
        size: 1000,
        alias: 'tweetChunk'
      }
    }
  }
}

module.exports = List
