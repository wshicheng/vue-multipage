var path = require('path')
var webpack = require('webpack')
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common')
module.exports = Merge(CommonConfig,{
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/',
        sourceMapFilename: '[name].map'
    },
    devServer:{
        port:7777,
        host:'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: '/',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
})