'use strict';

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    clean = require('gulp-clean'),
    size = require('gulp-size');

gulp.task('transform', function() {
    return gulp.src('./static/scripts/jsx/main.js')
        .pipe(browserify({transform: ['reactify']}))
        .pipe(gulp.dest('./static/scripts/js'))
        .pipe(size());
});

gulp.task('clean', function() {
    return gulp.src(['./static/scripts/js'], {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('transform');
});