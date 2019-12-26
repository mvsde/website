const { tweets } = require('./data')

class TwitterTweet {
  async data () {
    return {
      layout: 'twitter/tweet.njk',
      title: 'Twitter Archive',
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

module.exports = TwitterTweet
