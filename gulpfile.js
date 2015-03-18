'use strict';

// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

gulp.task('build', function () {

    var dependencies = [
        'other_modules/three/three.min.js',
        'other_modules/detector/Detector.js',
        'web_modules/main.js'
    ];

    watch('web_modules/*.js', function(){
        gulp.src(dependencies)
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/js'));
    });

});

// default task
gulp.task('default', ['build']);