const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        another: './src/another-module.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '',
        sourceMapFilename:'[name].map'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:100000
                    }
                }
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            {test: /\.jsx$/, use: "jsx-loader"}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist'],{
            verbose:true
        }),
        new HtmlWebpackPlugin({
            title: 'Code Splitting',
            template:'./src/temp/index.html'
        }),
        new ManifestPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
         })
    ]
};