const path = require('path')
var webpack = require('webpack')
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common')
const ZipPlugin = require('zip-webpack-plugin')
module.exports = Merge(CommonConfig,{
  // output: {
  //   path: path.join(__dirname, '../dist/assets'),
  //   filename: '[name].bundle.js',
  //   publicPath: publicPath,
  //   sourceMapFilename: '[name].map'
  // },

  plugins: [
    new ZipPlugin({
      path:path.join(__dirname,'dist'),
      filename: 'dist.zip'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
})