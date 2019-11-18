const tweets = require('./tweets')

class Tweet {
  async data () {
    return {
      layout: 'twitter/tweet.njk',
      tweets: await tweets,
      pagination: {
        data: 'tweets',
        size: 1,
        alias: 'tweet'
      },
      permalink: data => `/status/${data.tweet.id}/`
    }
  }
}

module.exports = Tweet
