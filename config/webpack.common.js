// common webpack configuration file
// the exports object is share between dev and prod builds.
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	node: {
		fs: 'empty'
  },
  // entry point of our app
  entry: {
    app: path.join(__dirname, '../js/app.js')
  },
	output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist/assets')
	},
	plugins: [],
	module: {
    rules: [
      {
        // allows us to use imports and all the es6 stuff
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, '../js'),
        use: {
          loader: 'babel-loader',
        }
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      },

      {
        // return a DataURL if the file is smaller than a byte limit.
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        exclude: /node_modules/,
        use: [
          { loader: 'url-loader', options: { limit: 8192 } 
        }]
      }
    ]
  }
};
