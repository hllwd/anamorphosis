'use strict';

var webpack = require('webpack');
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    output: {comments: false},
    compress: { warnings: false }
});

var _ = require('lodash');

var config = require('./config-common.js');

module.exports = _.extend({}, config, {
    output: _.extend({}, config.output, {
        sourceMapFilename: '[file].map'
    }),
    plugins: _.union(config.plugins, [
        UglifyJsPlugin
    ]),
    devtool: '#source-map'
});