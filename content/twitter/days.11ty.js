const { getDays } = require('./data')

class TwitterDays {
  async data () {
    return {
      layout: 'twitter/date.njk',
      title: 'Twitter Archive',
      dates: await getDays(),
      pagination: {
        data: 'dates',
        size: 1,
        alias: 'current'
      },
      permalink: data => `/date/${data.current.path}/`
    }
  }
}

module.exports = TwitterDays
