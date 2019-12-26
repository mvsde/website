const { getYears } = require('./data')

class TwitterDate {
  async data () {
    return {
      layout: 'twitter/date.njk',
      title: 'Twitter Archive',
      current: {
        name: 'Years',
        children: await getYears()
      },
      permalink: '/date/'
    }
  }
}

module.exports = TwitterDate
