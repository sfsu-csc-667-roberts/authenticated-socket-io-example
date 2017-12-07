const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './frontend/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
