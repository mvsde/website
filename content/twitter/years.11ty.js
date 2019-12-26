const { getYears } = require('./data')

class TwitterYears {
  async data () {
    return {
      layout: 'twitter/date.njk',
      title: 'Twitter Archive',
      dates: await getYears(),
      pagination: {
        data: 'dates',
        size: 1,
        alias: 'current'
      },
      permalink: data => `/date/${data.current.path}/`
    }
  }
}

module.exports = TwitterYears
