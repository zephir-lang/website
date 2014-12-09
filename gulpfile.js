var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css')

gulp.task('sass', function () {
    gulp.src('./public/src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

var cssPath = [
    './public/vendor/foundation/css/normalize.css',
    './public/css/my-foundation.css',
    './public/css/template.css'
];

gulp.task('css', function () {
    gulp.src(cssPath)
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/dist/'))
});

gulp.task('default', ['sass', 'css']);