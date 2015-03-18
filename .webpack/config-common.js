'use strict';

var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');
var DefinePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
});

module.exports = {
    entry: './web_modules/main.js',
    output: {
        filename: 'main.min.js',
        path: './public/js'
    },
    externals: {
        'detector': 'Detector',
        'three': 'THREE'
    },
    resolve: {
        root: [
            // node vendors
            path.resolve('node_modules'),
            // our modules
            path.resolve('web_modules'),
            // other modules
            path.resolve('other_modules'),
            // css
            path.resolve('sass')
        ],
        extensions: ['', '.js']
    },
    plugins: [
        DefinePlugin
    ],
    module: {
        loaders: [
            // sass
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!'}
        ]
    }
};