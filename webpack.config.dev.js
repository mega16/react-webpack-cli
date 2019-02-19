const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        port: 3000,
        compress: true,
        inline: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [{
            /**
             * eslint代码规范校验
             */
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'eslint-loader',
                options: {
                    fix: true,
                    configFile: '.eslintrc.js'
                }
            }]
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEV__: true,
            __MOCK__: process.env.NODE_ENV === 'mock'
        })
    ]

});