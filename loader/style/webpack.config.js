const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          path.resolve('./src/my-style-loader.js'),
          'css-loader'
        ]
      }
    ]
  },
  mode: 'none',
};