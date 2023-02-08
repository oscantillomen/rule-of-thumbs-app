/* eslint-disable @typescript-eslint/no-var-requires */
const { ProgressPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const presetConfig = require('./build-utils/presets/loadPresets')
const { resolve } = require('path');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return merge({
    mode,
    entry: { index: './src/index.tsx' },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'UI Test',
        template: './src/index.html',
      }),
      new ProgressPlugin(),
    ],
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|woff2?|svg|eot|[to]tf)$/,
          type: 'asset/resource',
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
  modeConfig(mode),
  presetConfig({ mode, presets }),
  )}
