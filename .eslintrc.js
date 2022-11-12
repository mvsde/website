module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-recommended',
		'@pangolinjs/eslint-config',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/no-v-html': ['off'],
		'vue/component-tags-order': ['error', {
			order: ['script', 'template', 'style'],
		}],
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
	},
}
