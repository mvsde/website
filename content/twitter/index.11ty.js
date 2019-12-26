async function stats () {
  const tweets = await require('./data').tweets

  return {
    count: tweets.length,
    retweets: tweets.filter(tweet => tweet.text.startsWith('RT ')).length,
    first: tweets[0],
    last: tweets[tweets.length - 1]
  }
}

class TwitterIndex {
  async data () {
    return {
      layout: 'twitter/home.njk',
      title: 'Twitter Archive',
      stats: await stats()
    }
  }
}

module.exports = TwitterIndex
