const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = () => ({
	devtool: 'inline-source-map',
	plugins: [new ESLintPlugin()]
})
