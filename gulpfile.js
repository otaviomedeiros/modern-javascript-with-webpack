var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('dev:js', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
    .pipe($.livereload());
});

gulp.task('prod:js', gulp.series(
  () => {
    return gulp.src('./src/js/**/*.js')
      .pipe($.babel())
      .pipe(gulp.dest('./public/js'));
  },
  () => {
    return gulp.src('./public/js/app.js')
      .pipe($.requirejsOptimize({ mainConfigFile: './public/config.js' }))
      .pipe(gulp.dest('./dist/js'))
  }
));

gulp.task('dev:css', () => {
  return gulp.src('./src/css/site.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
    .pipe($.livereload());
});

gulp.task('prod:css', () => {
  return gulp.src('./src/css/site.less')
    .pipe($.less())
    .pipe($.minifyCss())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('prod:copy-files', gulp.parallel(
  () => {
    return gulp.src(['./public/index.html', './public/config.js'])
      .pipe(gulp.dest('./dist'));
  },
  () => {
    return gulp.src(['./public/lib/requirejs/require.js'])
      .pipe(gulp.dest('./dist/lib/requirejs'))
  },
  () => {
    return gulp.src(['./public/lib/bootstrap/dist/css/bootstrap.min.css'])
      .pipe(gulp.dest('./dist/lib/bootstrap/dist/css'))
  }
));

gulp.task('dev', gulp.parallel('dev:css', 'dev:js'));

gulp.task('prod', gulp.parallel('prod:css', 'prod:js', 'prod:copy-files'));

gulp.task('watch', gulp.series(
  'dev',
  () => {
    gulp.watch('./src/js', gulp.series('dev:js'));
    gulp.watch('./src/css', gulp.series('dev:css'));

    $.livereload.listen();
  }
));
