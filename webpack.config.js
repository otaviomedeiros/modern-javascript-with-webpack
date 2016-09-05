var path = require("path"),
    webpack = require("webpack");

function config(){
  return {
    entry: {
      application: "./src/js/app.js",
      vendor: ["jquery", "lodash"]
    },
    output: {
      path: path.resolve("./public/assets"),
      filename: "[name].bundle.js",
      publicPath: "/assets/"
    },
    module: {
      loaders: [
        { test: /\.js/, loader: "babel", exclude: /node_modules/ },
        { test: /\.less/, loader: "style!css!less" },
        { test: /\.css/, loader: "style!css" },
        { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg)/, loader: "url-loader" }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
  };
};

module.exports = config();
module.exports.clone = config;
