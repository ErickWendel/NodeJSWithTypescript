var gulp = require('gulp');
var tsc  = require('gulp-typescript-compiler');
gulp.task('default', ['compile', 'watch']);


gulp.task('watch', function () {
   return gulp.watch('src/**/*.*', ['compile']);
});

gulp.task('compile', function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(tsc({
        module: 'commonjs',
        target: 'ES5',
        sourcemap: false,
        logErrors: true
    }))
    .pipe(gulp.dest('lib'));
});