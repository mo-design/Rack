'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');


//gulp.task('sass', function () {
 // return gulp.src('./src/scss/**/*.scss')
    //.pipe(sass().on('error', sass.logError))
    //.pipe(gulp.dest('./build/css'));
//});
 

gulp.task('sass', wrapPipe(function(success, error) {
  return gulp.src('./src/scss/**/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./build/css'));
}));




gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});






gulp.task('default', ['sass:watch', 'sass']);




function wrapPipe(taskFn) {
  return function(done) {
    var onSuccess = function() {
      done();
    };
    var onError = function(err) {
      done(err);
    }
    var outStream = taskFn(onSuccess, onError);
    if(outStream && typeof outStream.on === 'function') {
      outStream.on('end', onSuccess);
    }
  }
}