module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'standard',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'max-len': [
			'error',
			{
				code: 100,
				tabWidth: 4,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreTrailingComments: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		quotes: ['error', 'single', { avoidEscape: true }],
	}
}
