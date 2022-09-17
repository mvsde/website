module.exports = {
  extends: [
    '@pangolinjs/stylelint-config'
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ]
}
