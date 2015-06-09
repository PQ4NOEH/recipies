var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
 
 /**************************************************SASS*********************************************************/
gulp.task('sass', function () {
  gulp.src('./app/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});



/***************************************************Browserify***************************************************/
gulp.task('browserify', function(){
  return gulp.src('./app/js/app.js', {read: false})
    .pipe(browserify())
    .pipe(gulp.dest('./app/js/tmp'))
});


/****************************************************Watch*******************************************************/
 
gulp.task('watch', function () {
  gulp.watch('./app/css/*.scss', ['sass']);
  gulp.watch('./app/js/**/*.js', ['browserify']);
});