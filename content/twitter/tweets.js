const fs = require('fs').promises

const config = require('../../config')

const CONVERTED_TWEETS = `${config.twitter.converted}/tweets`

async function getTweets () {
  const tweetDir = await fs.readdir(CONVERTED_TWEETS)
  const tweetFiles = await Promise.all(tweetDir.map(file => fs.readFile(`${CONVERTED_TWEETS}/${file}`)))

  const tweets = tweetFiles
    .flatMap(file => JSON.parse(file.toString()))
    .map(tweet => {
      tweet.date = new Date(tweet.date)
      tweet.dateFormatted = tweet.date.toISOString().replace('T', ' ').slice(0, -5)
      return tweet
    })

  return tweets
}

module.exports = getTweets()
