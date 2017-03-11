// const webpack = require('webpack');
//First we need to pull webpack
var path = require("path");
//Also pull the path library ,basically this will be attached by default when we install node.js
var DIST_DIR = path.resolve(__dirname, "dist");

//This is the directory which we push transpiled and bundled file
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
  //In the above code we are just specifying the path of input and output file path (bundle).
  module: {
      loaders: [
          {
              test: /\.js?/,
              //the above means have a look at all the .js files
              include: SRC_DIR,
              loader: "babel-loader",
              query: {
                  presets: ["react", "es2015", "stage-2"]
              }
          }
      ]
  }
};

module.exports = config;
