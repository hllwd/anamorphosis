'use strict';

// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('build-vendors', function () {

    var dependencies = [
        'other_modules/three/three.min.js',
        'other_modules/detector/Detector.js',
        'other_modules/orbit/OrbitControls.js'
    ];

    gulp.src(dependencies)
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));

});

// default task
gulp.task('default', ['build-vendors']);