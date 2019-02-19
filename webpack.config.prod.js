const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyjsWebpackPlugin({
                extractComments: true,
                sourceMap: true
            })
        ]
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
                    configFile: '.eslintrc.prod.js'
                }
            }]
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false,
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]

});