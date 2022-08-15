const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
/* const CopyPlugin = require('copy-webpack-plugin') */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
		assetModuleFilename: 'assets/images/[hash][ext][query]',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
			'@images': path.resolve(__dirname, 'src/assets/images/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(sass|scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset',
			},
			{
				test: /\.(woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'application/font-woff',
						name: '[name].[contenthash].[ext]',
						outputPath: './assets/fonts/',
						publicPath: '../assets/fonts/',
						esModule: false,
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css',
		}),
		new Dotenv(),
		/* new CopyPlugin({
			patterns: [
				{ from: 'public/manifest.json', to: '' },
				{ from: 'public/service-worker.js', to: '' },
				{ from: 'public/icon.png', to: 'assets' },
			],
		}), */
	],
	devServer: {
		historyApiFallback: true,
		allowedHosts: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
}
