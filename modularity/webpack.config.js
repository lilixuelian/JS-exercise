const path = require('path');

module.exports = {
  entry: './js/module3.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};