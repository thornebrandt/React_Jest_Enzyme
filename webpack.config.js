var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: {
		javascript: "./src/app.js",
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			}
		]
	},
	watch: true,
	output: {
		filename: "app.js",
		path: path.join(__dirname, 'public'),

	},
	devServer: {
		contentBase: './public/',
		historyApiFallback: true
	}
}