async function stats () {
  const tweets = await require('./tweets')

  return {
    count: tweets.length,
    retweets: tweets.filter(tweet => tweet.text.startsWith('RT ')).length,
    first: tweets[tweets.length - 1],
    last: tweets[0]
  }
}

class Index {
  async data () {
    return {
      layout: 'twitter/home.njk',
      title: 'Twitter Archive',
      stats: await stats()
    }
  }
}

module.exports = Index
