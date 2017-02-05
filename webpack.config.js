var path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  niject: 'body'
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/scripts/index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        exclude: /node_modues/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    alias: {
      scripts: path.resolve(__dirname, 'src/scripts'),
      styles: path.resolve(__dirname, 'src/styles'),
      data: path.resolve(__dirname, 'src/data')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig
  ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true
  }
};
