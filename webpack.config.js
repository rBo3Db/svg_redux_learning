const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	devtool: 'source-map',
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: ['css-loader']
					}
				)
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
    			},
  			],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			filename: "index.html",  //target html
			template: "./src/index.html" //source html
		}),
		new ExtractTextPlugin({ filename: 'css/style.css' }),	
	]
}