const got = require('got')

async function getTweetsByDate () {
  const response = await got('https://cdn.jsdelivr.net/gh/mvsde/twitter-data@main/converted/tweets/meta/by-date.json').json()

  const tweetsByDate = {}

  // Ugly but it works…
  for (const tweetDate in response) {
    const [year, month, day] = tweetDate.split('-')

    if (tweetsByDate[year]) {
      if (tweetsByDate[year][month]) {
        tweetsByDate[year][month][day] = response[tweetDate]
      } else {
        tweetsByDate[year][month] = {
          [day]: response[tweetDate]
        }
      }
    } else {
      tweetsByDate[year] = {
        [month]: {
          [day]: response[tweetDate]
        }
      }
    }
  }

  return tweetsByDate
}

module.exports = class TwitterByDate {
  async data () {
    return {
      layout: 'twitter-by-date.njk',
      title: 'Tweets by Date',
      tweets: await getTweetsByDate()
    }
  }
}
