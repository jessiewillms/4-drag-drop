'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function() {
    return gulp.src('styles/**/*.scss')
        .pipe(sass({
            'sourcemap=none': true,
            errLogToConsole: true
        }))
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'],
            cascade: false
        }))
        .pipe(gulp.dest('.'))
        .pipe(notify('Sass done'));
});



gulp.task('default', function() {
    gulp.watch('styles/**/*.scss', ['styles'])
});
