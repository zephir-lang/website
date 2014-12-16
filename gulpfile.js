var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css')

gulp.task('sass', function () {
    gulp.src('./public/src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

var cssPath = [
    './public/src/vendor/foundation/css/normalize.css',
    './public/css/my-foundation.css',
    './public/css/template.css'
];

gulp.task('css', function () {
    gulp.src(cssPath)
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/dist/'))
});

var jsPath = [
    './public/src/vendor/angular/angular.min.js',
    './public/src/vendor/angular-route/angular-route.js',
    './public/src/app.js'
];

gulp.task('js', function() {
    gulp.src(jsPath)
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/dist/'))
});

gulp.task('default', ['sass', 'css', 'js']);