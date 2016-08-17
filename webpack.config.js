var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: false,
    progress: true,
    contentBase: './dist'
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'docs/main.js')
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  node:{
      fs:"empty"
  },
  module: {
    loaders:[
      { test: /\.css$/, include: path.resolve(__dirname, 'docs'), loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'docs'), exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.less$/,loader: 'style-loader!css-loader!less-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'src'), loader: 'babel-loader' },
      { test: /\.tsx$/, include: path.resolve(__dirname, 'src'), loader: 'babel-loader' },
      { test: /\.json$/,  loader: 'json-loader' },
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx','.less','.css'],
      alias: {
			zfUI: __dirname + '/src',
        }
  },
  plugins: [
     new HtmlWebpackPlugin({
  		favicon: './favicon.ico',
  		cache: true,
  		filename: 'index.html',
  		template: './docs/index.html',
  		inject: false,
  		hash: false,
  	}),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
