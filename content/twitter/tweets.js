const fs = require('fs').promises

const config = require('../../config')

function formatTweetDate (tweet) {
  const date = new Date(tweet.date)

  return {
    ...tweet,
    date,
    dateFormatted: date.toISOString().replace('T', ' ').slice(0, -5)
  }
}

async function getTweets () {
  const raw = await fs.readFile(`${config.twitter.converted}/tweets.json`)
  /** @type {Array} */
  const tweets = JSON.parse(raw.toString())

  return tweets.map(formatTweetDate)
}

module.exports = getTweets()
