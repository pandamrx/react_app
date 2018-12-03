

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
        new webpack.optimize.UglifyJsPlugin(),
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

        /**
         * Uglify JS
         * */
        // new webpack.optimize.UglifyJsPlugin()
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: true
        }),*/


    ],
};
module.exports = multiPage;


// module.exports = [ simpleConfig, multiPage ];