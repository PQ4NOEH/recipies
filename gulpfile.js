var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function(){
  return gulp.src('./app/js/app.js', {read: false})
    .pipe(browserify())
    .pipe(gulp.dest('./app/js/tmp'))
});