const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[
        path.resolve(__dirname, 'app.js'),
        path.resolve(__dirname, 'index.html'),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[{
            test:/\.html$/, loader:'raw-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        hot: true,
        compress: true,
        open: true,
        openPage: '',
        publicPath:'/',
        historyApiFallback:true,
    }
}