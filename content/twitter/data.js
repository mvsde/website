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

async function getDates (type) {
  return (await tweets).reduce((accumulator, current) => {
    const dateString = current.date.toISOString()

    let date

    if (type === 'years') {
      date = dateString.slice(0, 4).split('-')
    }

    if (type === 'months') {
      date = dateString.slice(0, 7).split('-')
    }

    if (type === 'days') {
      date = dateString.slice(0, 10).split('-')
    }

    const previous = accumulator[accumulator.length - 1]

    const data = {
      name: date.join('-'),
      path: date.join('/'),
      children: []
    }

    if (!previous || previous.path !== data.path) {
      accumulator.push(data)
    }

    return accumulator
  }, [])
}

exports.tweets = tweets

exports.getYears = () => getDates('years')
exports.getMonths = () => getDates('months')
exports.getDays = () => getDates('days')
