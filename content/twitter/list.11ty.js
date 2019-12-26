const { tweets } = require('./data')

class TwitterList {
  async data () {
    return {
      layout: 'twitter/list.njk',
      title: 'Twitter Archive',
      tweets: await tweets,
      pagination: {
        data: 'tweets',
        size: 1000,
        alias: 'tweets'
      }
    }
  }
}

module.exports = TwitterList
