const { getMonths } = require('./data')

class TwitterMonths {
  async data () {
    return {
      layout: 'twitter/date.njk',
      title: 'Twitter Archive',
      dates: await getMonths(),
      pagination: {
        data: 'dates',
        size: 1,
        alias: 'current'
      },
      permalink: data => `/date/${data.current.path}/`
    }
  }
}

module.exports = TwitterMonths
