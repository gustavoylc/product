const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
		assetModuleFilename: "assets/images/[name][ext][query]",
	},
	mode: "development",
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@styles": path.resolve(__dirname, "src/styles/"),
			"@fonts": path.resolve(__dirname, "src/assets/fonts/"),
			"@images": path.resolve(__dirname, "src/assets/images/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@hooks": path.resolve(__dirname, "src/hooks/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.(sass|scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 10000,
						mimetype: "application/font-woff",
						name: "[name].[ext]",
						outputPath: "./assets/fonts/",
						publicPath: "../assets/fonts/",
						esModule: false,
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
			favicon: "./src/assets/images/favicon/favicon-16x16.png",
		}),
		new MiniCssExtractPlugin({
			filename: "assets/[name].css",
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets/images"),
					to: "assets/images",
				},
			],
		}),
	],
	devServer: {
		historyApiFallback: true,
		allowedHosts: path.join(__dirname, "dist"),
		compress: true,
		port: 5500,
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
