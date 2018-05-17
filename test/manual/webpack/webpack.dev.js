var webpack = require('webpack');
var path = require('path');
var failPlugin = require('webpack-fail-plugin');

var APP_DIR = path.join(__dirname, '..', 'src');

module.exports = {
  debug: true,
  devtool: 'eval-source-map',
  devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint'
    }],
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts']
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build', 'js'),
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    failPlugin
  ],
  resolve: {
    root: [path.resolve('../src'), path.join(APP_DIR, '..', 'node_modules')],
    alias: {
      '@grammarly/focal': path.join(APP_DIR, '..', '..', '..', 'dist', 'src')
    },
    extensions: ['', '.tsx', '.ts', '.jsx', '.js']
  }
};