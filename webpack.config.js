const path = require('path');
const webpack = require('webpack');

const deploy = process.env.NODE_ENV === 'production' || false;
let config = {};

if (deploy) {
  config = {
    devtool: 'source-map',
    entry: [
      './src/index'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.min.js',
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ],
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
        {test: /\.less$/, loader: 'style!css!less'}
      ]
    }
  };
} else {
  config = {
    devtool: 'source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
        {test: /\.less$/, loader: 'style!css!less'}
      ]
    }
  };
}

module.exports = config;
