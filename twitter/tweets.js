const got = require('got')

const config = require('../config')

/**
 * Tweet
 * @typedef {Object} Tweet
 * @property {string} id_str ID
 * @property {string} in_reply_to_status_id_str Reply ID
 * @property {string} in_reply_to_user_id_str Reply user ID
 * @property {string} in_reply_to_screen_name Reply user name
 * @property {string} full_text Text
 * @property {string} retweets Retweet count
 * @property {string} favorite_count Like count
 * @property {string} date Date
 * @property {Object} entities Stuff and things
 * @property {TweetMedia} entities.media Media objects
 */

/**
 * TweetMedia
 * @typedef {Object} TweetMedia
 * @property {string} id_str ID
 * @property {'photo'} type Type
 * @property {string} media_url_https URL
 * @property {Object} sizes Media sizes
 * @property {Object} sizes.medium Medium size
 * @property {string} sizes.medium.w Width
 * @property {string} sizes.medium.h Height
 */

/**
 * Convert twitter tweet
 * @param {Tweet} tweet Twitter tweet object
 */
function convertTweet (tweet) {
  return {
    id: tweet.id_str,
    reply: {
      id: tweet.in_reply_to_status_id_str,
      user: tweet.in_reply_to_screen_name,
      isThread: tweet.in_reply_to_user_id_str === config.twitter.userID
    },
    text: tweet.full_text,
    retweets: tweet.retweet_count,
    likes: tweet.favorite_count,
    date: new Date(tweet.created_at),
    media: tweet.entities.media && tweet.entities.media.map(convertMedia)
  }
}

/**
 * Convert twitter media
 * @param {TweetMedia} media Twitter media object
 */
function convertMedia (media) {
  return {
    id: media.id_str,
    type: media.type,
    url: media.media_url_https,
    size: {
      width: media.sizes.medium.w,
      height: media.sizes.medium.h
    }
  }
}

async function getTweets () {
  const tweets = await got(config.twitter.tweets).json()

  return tweets
    .map(convertTweet)
    .sort((a, b) => b.date - a.date)
}

module.exports = getTweets()
