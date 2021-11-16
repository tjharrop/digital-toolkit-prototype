const path = require('path');
module.exports = {
  entry: {
    app: './src/_includes/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js',
  }
};
