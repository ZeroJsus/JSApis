const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app: path.resolve(__dirname, 'app.js'),
        apptwo: path.resolve(__dirname, 'main.js')
        // path.resolve(__dirname, 'index.html'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.html$/, loader:'raw-loader'
            },{
                test:/\.js$/, exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            chunk: ['app','apptwo']
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