const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: ['./src/index.tsx']
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)(\?.*)?$/,
            use: ['babel-loader', 'awesome-typescript-loader']
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
                'less-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loaders: 'url-loader',
            options: {
                limit: 1000,
                name: utils.assetsPath('images/[name].[hash:7].[ext]')
            }
        }]
    },
  	output: {
        filename: '[name].[hash:10].js',
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/'
  	},
    devtool: 'sourcemap',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.css']
    },
    mode: 'development'
};
