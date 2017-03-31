'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css');



    gulp.task('script', function() {
    return gulp.src('./src/js/components/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./src/js/'));
    });

   
   gulp.task('script:build', function() {
    return gulp.src('./src/js/main.js')
    .pipe(uglify()) 
    .pipe(gulp.dest('./build/js'));
    });




gulp.task('style:build', function (success, error) {
    return gulp.src('./src/scss/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('build', [
    'script',
    'script:build',
    'style:build'
]);


gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['style:build']);
});



gulp.task('script:watch', function () {
  gulp.watch('./src/js/*.js', ['script', 'script:build']);
});


gulp.task('watch', [
    'sass:watch',
    'script:watch'
]);



gulp.task('default', ['build']);


