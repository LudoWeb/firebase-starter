const path = require('path');

module.exports = {
  entry: ['./javascript/authentication.js', './javascript/dashboard.js'],
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js',
  },
  watch: true,
};