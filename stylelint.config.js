module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		'selector-class-pattern': null,
		'custom-property-pattern': null,
		'custom-property-empty-line-before': null,
	},
	overrides: [
		{
			files: ['*.vue', '**/*.vue'],
			customSyntax: 'postcss-html',
		},
	],
}
