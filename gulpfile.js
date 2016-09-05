var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config'),
  WebpackDevServer = require('webpack-dev-server'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackCompilation = (config, callback) => {
  const compiler = webpack(config());
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stats.toString({ colors: true }));
    callback();
  });
};

gulp.task('dev', (callback) => webpackCompilation(devConfig, callback));

gulp.task('prod', (callback) => webpackCompilation(prodConfig, callback));

gulp.task('watch', (callback) => {
  const compiler = webpack(devConfig());
  const devServer = new WebpackDevServer(compiler, {
    inline: true,
    stats: { colors: true, exclude: ["node_modules"] }
  });

  devServer.listen(8081, "localhost", () => {
    console.log("Dev server started");
  });
});


function devConfig(){
  var c = webpackConfig.clone();
  c.output.publicPath = 'http://localhost:8081';
  c.devtool = "eval-source-map";
  return c;
}

function prodConfig(){
  var c = webpackConfig.clone();
  c.plugins.push(new webpack.optimize.UglifyJsPlugin());
  c.plugins.push(new ExtractTextPlugin("[name].css"));
  c.module.loaders[1].loader = ExtractTextPlugin.extract("css!less");
  c.module.loaders[2].loader = ExtractTextPlugin.extract("css");
  return c;
}
