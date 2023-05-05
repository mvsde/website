module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:n/recommended',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
	rules: {
		'no-unused-vars': [
			'error',
			{
				args: 'none',
				caughtErrors: 'none',
				ignoreRestSiblings: true,
				vars: 'all',
			},
		],
		'n/no-extraneous-require': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/no-v-html': ['off'],
		'vue/component-tags-order': [
			'error',
			{
				order: ['script', 'template', 'style'],
			},
		],
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
	},
}
