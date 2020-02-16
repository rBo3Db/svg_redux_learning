const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	devtool: 'source-map',
	entry: "./src/app.js",
	resolve: {
		extensions: [ '.jsx', '.js' ],
	  },
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
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
		new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: ".[name].css",
            chunkFilename: "[id].css"
        }),
		new ExtractTextPlugin({ filename: 'css/style.css' }),	
	]
}