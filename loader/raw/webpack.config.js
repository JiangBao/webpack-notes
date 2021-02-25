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
        test: /\.png$/,
        use: [
          {
            loader: path.resolve('./src/raw-loader.js'),
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  mode: 'none',
};