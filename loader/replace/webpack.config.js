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
        test: /\.txt$/,
        use: [
          {
            loader: path.resolve('./src/replace-keyword-loader.js'),
            options: {
              keyword: 'JiangBao'
            }
          }
        ]
      }
    ]
  },
  mode: 'none',
};