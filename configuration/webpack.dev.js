var path = require('path')
var webpack = require('webpack')
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common')
module.exports = Merge(CommonConfig,{
    devtool: 'cheap-module-source-map',
    // output:{
    //     path:path.join(__dirname,'../dist/assets'),
    //     filename:'[name].bundle.js',
    //     publicPath:publicPath,
    //     sourceMapFilename:'[name].amp'
    // },
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
        new webpack.HotModuleReplacementPlugin()
    ]
})