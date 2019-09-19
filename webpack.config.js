const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  // Clean the distribution folder
  new CleanWebpackPlugin(),
  // straight file copies from the src directories
  new CopyWebpackPlugin(
    [
      {
        from: 'src/manifest.json',
        to: './'
      },
      {
        from: 'src/popup.html',
        to: './'
      },
      {
        from: 'src/assets/',
        to: './assets/'
      }
    ]
  ),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "popup.html"),
    filename: "/options/options.html",
    inject: false
  })
]

const options = [
  {
    mode: 'production',
    entry: {
      'popup': './src/popup.js',
      'background': './src/background.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: plugins 
  }
]

module.exports = options;