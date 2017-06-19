var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  context: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 9000
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      minimize: false,
      sourceMap: true
    }), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()  //Merge chunks
  ]
};
