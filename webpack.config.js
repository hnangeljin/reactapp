var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: 'public/build',
    filename: "bundle.mini.js"
  },
  devtool: "#source-map",
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringfy('production')
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true
      }
    })
  ] : [],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};
