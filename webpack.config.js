const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './app.js',
        index: './index.js'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    /**
     * add to import modules
     * */

    resolve: {
        extensions: [".jsx", ".json", ".js"]
    },

    plugins: [
        /**
         * Move common to one file
         * */

        /*new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",

        }),*/
        /**
         * Source Map
         * */
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
        }),

        /**
         * Uglify JS
         * */
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: false
        }),*/


    ],
};


/**
 * Basic config
 * */
/*
 ./webpack.config.js
 */

/*module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};*/

