
 - Install nodejs Ubuntu
   other variant instalation via package manager
   https://nodejs.org/en/download/package-manager/

> curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
> sudo apt-get install -y nodejs

 - make project folder
> mkdir webpack_project
> cd webpack_project

 - init nodejs package manager in project
> npm init -y

 - install webpack
> npm install --save-dev webpack webpack-dev-server

 - create webpack config file - webpack.config.js
> touch webpack.config.js

 - add next configs to config file:
 /*
     ./webpack.config.js
 */
 const path = require('path');
 module.exports = {
   entry: './client/index.js',
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
 }

 - set up babel for ES6 and for React
> npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

 - create babel config file .babelrc
> touch .babelrc

 - type next into .babelrc
 /*
     ./.babelrc
 */
 {
     "presets":[
         "es2015", "react"
     ]
 }

 - simple building packages:
> ./node_modules/webpack/bin/webpack.js --progress --colors --watch
OR
> ./node_modules/.bin/webpack

 - set up for building package.json:
 {
 ...
     "scripts": {
         "build": "webpack"
     },
 ...
 }

 - to build scripts run:
> npm run build

 - run webpack dev server for developing purposes:
> ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors --watch
OR
> ./node_modules/.bin/webpack-dev-server

 - change config to run dev server from npm
 {
 ...
     "scripts": {
         "start": "webpack-dev-server"
     },
 ...
 }


 - install react and react-dom packages

> npm install --save react react-dom


 - install flux packages

> npm install flux


 - install axios for requests

> npm install axios