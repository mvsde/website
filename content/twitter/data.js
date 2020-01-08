const fs = require('fs').promises

const config = require('../../config')

/**
 * Data massaging
 * @param {Object} tweet Tweet data
 * @param {number} index Tweet index
 */
function formatTweet (tweet, index) {
  const date = new Date(tweet.date)

  return {
    ...tweet,
    index,
    date,
    dateFormatted: date.toISOString().replace('T', ' ').slice(0, -5)
  }
}

async function getTweets () {
  const raw = await fs.readFile(`${config.twitter.converted}/tweets.json`)

  /** @type {Array} */
  const tweets = JSON.parse(raw.toString())

  return tweets.map(formatTweet)
}

const tweets = getTweets()

exports.tweets = tweets
