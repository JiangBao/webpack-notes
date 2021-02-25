const path = require('path');
const FileListPlugin = require('./plugins/file-list-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: './dist/bundle.js',
  },
  plugins: [
    new FileListPlugin({filename: '_filelist.md'}),
  ],
  mode: 'none',
};