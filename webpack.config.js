const CompressionPlugin = require('compression-webpack-plugin');


const path = require('path');
const webpack = require('webpack');
/**
 * Basic config
 * */
/*
 ./webpack.config.js
 */

/*const simpleConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
    ]

};

module.exports = simpleConfig;*/

/**
 * Multi Page Config
 *
 * */
const multiPage = {

    context: path.resolve(__dirname, 'src/entry'),

    entry: {
        startApp: './startApp.js',
        app: './app.js',
        index: './index.js',
        simpleFlux: './simple_flux_app.js'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    mode: process.env.NODE_ENV || 'development',

    module: {
        rules: [
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

        // new CompressionPlugin(),

        /*new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",

        }),*/
        /**
         * Source Map
         * */
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].bundle.js.map',
            exclude: ['commons.js']
        }),


    ],
};
module.exports = multiPage;


// module.exports = [ simpleConfig, multiPage ];
