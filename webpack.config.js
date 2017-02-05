var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  niject: 'body'
});

module.exports = {
  entry: './src/scripts/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        exclude: /node_modues/
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
};
