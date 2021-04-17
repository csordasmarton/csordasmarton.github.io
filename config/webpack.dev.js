const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    publicPath: "/"
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8085,
    hot: true,
    historyApiFallback: true
  }
});
