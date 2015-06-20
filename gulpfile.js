var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var project = plugins.typescript.createProject({
  typescript: require('typescript'),
  target: 'es6',
  module: 'system'
});

gulp.task('typescript', function() {
  return gulp.src('src/**/*.ts')
    .pipe(plugins.typescript(project))
    .js.pipe(plugins.babel({optional: 'runtime'}))
    .pipe(gulp.dest('app'));
});

gulp.task('jade', function() {
  return gulp.src('src/**/*.jade')
    .pipe(plugins.jade())
    .pipe(gulp.dest('app'));
});

gulp.task('watch', ['typescript', 'jade'], function() {
  gulp.watch('src/**/*.ts', ['typescript']);
  gulp.watch('src/**/*.jade', ['jade']);
});

gulp.task('default', ['watch']);
gulp.task('build', ['typescript', 'jade']);
