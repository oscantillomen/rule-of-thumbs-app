const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  output: {
    filename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
