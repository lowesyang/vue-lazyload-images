var webpack = require("webpack");
var pack = require("../package.json");
var webpackDevConfig = require("./webpack.dev.config");
var merge = require("webpack-merge");

module.exports = merge.smart({}, webpackDevConfig, {
  entry: {
    VueLazyImages: './src/index'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
      comments: false,
      minimize: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/*!\n' + ' * ' + pack.name + ' v' + pack.version + '\n'
      + ' * (c) ' + new Date().getFullYear() + ' ' + pack.author + '\n'
      + ' * Released under the ' + pack.license + ' License.\n'
      + ' */'
    })
  ]
});