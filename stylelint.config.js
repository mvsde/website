module.exports = {
	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-order'],
	rules: {
		'custom-property-empty-line-before': null,
		'custom-property-pattern': null,
		'declaration-block-no-redundant-longhand-properties': null,
		'order/properties-alphabetical-order': true,
		'selector-class-pattern': null,
	},
	overrides: [
		{
			files: ['*.vue', '**/*.vue'],
			customSyntax: 'postcss-html',
		},
	],
}
