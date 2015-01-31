var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyCSS = require('gulp-minify-css'),
    translate = require('gulp-translator'),
    sourcemaps = require('gulp-sourcemaps');

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
        .pipe(sourcemaps.init())
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./public/dist/'))
});

var jsPath = [
    './public/src/vendor/angular/angular.min.js',
    './public/src/vendor/angular-route/angular-route.min.js',
    './public/src/ZepWeb.js',
    './public/src/app.js'
];

gulp.task('js', function() {
    gulp.src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./public/dist/'))
});


gulp.task('translate', function() {
    var translations = ['en','fr'];

    translations.forEach(function(translation){
        gulp.src('./src/views/**/*.html')
            .pipe(
            translate('./src/locales/'+ translation +'.yml')
                .on('error', function(){
                    console.log("lang : " + translation);
                    console.dir(arguments);
                })
            )
            .pipe(gulp.dest('./public/langs/' + translation));
    });


    gulp.src('./public/langs/en/index.html')
        .pipe(gulp.dest('./public'));

});


gulp.task('default', ['sass', 'css', 'js','translate']);
