const path = require('path');
const webpack = require('webpack');

const deploy = process.env.NODE_ENV === 'production' || false;
let config = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
    'whatwg-fetch'
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
      {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  }
};

if (deploy) {
  const prodEnv = new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  });
  config.entry = ['./src/index', 'whatwg-fetch'];
  config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
  };
  config.plugins = [
    ...config.plugins,
    prodEnv,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ];
}

module.exports = config;
