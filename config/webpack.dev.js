// dev webpack configuration file
// share webpack.common.js configuration and adds:
// - css and js source-maps
// - webpack-dashboard (https://github.com/FormidableLabs/electron-webpack-dashboard)
// - Liverealod with BrowserSync
//   * if you are not using lando just update the [proxy] to match your server

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ETP = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/assets/', // Tell the server where to serve content from
    compress: true,
    open: true,
    watchContentBase: true, // Tell the server to watch the files served by the 
    port: 9000
  },
  module: {
    rules: [{
      // creates style nodes from JS strings
      // translates CSS into CommonJS
      // compiles Sass to CSS
      test: /\.(css|scss|sass)$/,
      loader: ETP.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', 
            options: { 
              sourceMap: true,
              includePaths: [
                path.join(__dirname, '../' ,'node_modules')
              ]
            } 
          }
        ]
      }),
      include: path.join(__dirname, '../scss')
    }]
  },
  plugins: [
    new WebpackNotifierPlugin(
      { excludeWarnings: true, skipFirstNotification: true }
    ),
    new ETP({
      filename: 'site.css',
      disable: false,
      allChunks: true
    })
  ]
});
