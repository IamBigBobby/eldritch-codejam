const path = require('path');

module.exports = {
  mode: 'none',
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};