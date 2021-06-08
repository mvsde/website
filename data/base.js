module.exports = process.env.CONTEXT === 'production'
  ? process.env.URL
  : process.env.DEPLOY_URL
