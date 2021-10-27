// REGISTER COMPONENTS ================================================================================================

'use strict';

var config = require('../_config.json'),
    gulp = require('gulp'),
    rimraf = require("rimraf"),
    gulpLoadPlugins = require('gulp-load-plugins'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlPartial = require('gulp-html-partial'),
    merge = require('merge-stream'),
    livereload = require('gulp-livereload'),
    server = require('gulp-server-livereload');

//Loading of plugins

var plugins = gulpLoadPlugins();

// Define Project Paths

var paths = {
    wwwRoot: ""
};

paths.JsAll = paths.wwwRoot + "dist/js/app.*";
paths.JsFolder = paths.wwwRoot + "dist/js/";
paths.JsDest = paths.wwwRoot + "dist/js/app.js";
paths.CssAll = paths.wwwRoot + "dist/css/style.*";
paths.CssFolder = paths.wwwRoot + "dist/css/";
paths.CssDest = paths.wwwRoot + "dist/css/style.css";
paths.HtmlDest = paths.wwwRoot + "static-html";
paths.HtmlFolder = paths.wwwRoot + "build/html/**/*";

// END ================================================================================================================

// GULP TASK [SERVER + LIVERELOAD] ====================================================================================

// A. VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// var EXPRESS_PORT = 4200;
// var ROOT = config.root;
// var LIVERELOAD_PORT = 35729;

// gulp.task('webserver', ['default'], function () {
//     gulp.src(ROOT)
//         .pipe(server({
//             open: true,
//             livereload: {
//                 enable: true,
//             },
//             directoryListing: {
//                 enable: true,
//                 path: ROOT
//             },
//         }));
// });

// GULP TASK [DEVELOPMENT] ============================================================================================

// A. CSS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('compile-sass', function () {
    return gulp.src('build/scss/*.scss')
        .pipe(plugins.plumber({
            errorHandler: function (err) {
                plugins.notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message: err.toString()
                })(err);
                // play a sound once
                plugins.util.beep();
                this.emit('end');
            }
        }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.CssFolder));
});

gulp.task('autoprefix', function () {
    return gulp.src(paths.CssDest)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.CssFolder));
});

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// B. JAVASCRIPT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('compile-js', function () {
    var polyfill = gulp.src(['node_modules/@babel/polyfill/dist/polyfill.min.js']);
    var application = gulp.src(
        [
            'build/js/scripts/*.js',
            'build/js/scripts/*.*.js'
        ])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail'))
        .pipe(plugins.replace('X.X.X', process.env.APPVEYOR_BUILD_VERSION || 'V.V.V'));

    return merge(polyfill, application)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.babel({ presets: ['@babel/env'] }))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.JsFolder));
});

// B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// C. HTML ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('html-compile', function () {
    gulp.src(paths.HtmlFolder)
        .pipe(htmlPartial({
            basePath: 'build/html/'
        }))
        .pipe(gulp.dest(paths.HtmlDest));
});

// C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END ================================================================================================================

// GULP TASK [DEFAULT] ================================================================================================

gulp.task('default', function () {
    gulp.watch('build/scss/**/*.scss', gulp.series('compile-sass'));
    gulp.watch(paths.CssDest, gulp.series('minify-css'));
    gulp.watch('build/js/scripts/*', gulp.series('compile-js'));
    gulp.watch('build/html/**/*', gulp.series('html-compile'));
});

// END ================================================================================================================

// GULP TASK [PRODUCTION] =============================================================================================

// A. MINIFY CSS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('minify-css', function () {
    return gulp.src(paths.CssDest)
        .pipe(plugins.cleanCss())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.CssFolder));
});

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// C. DEPLOY ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('deploy-all', gulp.series(['compile-sass', 'autoprefix', 'minify-css', 'compile-js']), () => { });
gulp.task("clean:js", done => rimraf(paths.JsAll, done));
gulp.task("clean:css", done => rimraf(paths.CssAll, done));
gulp.task("clean", gulp.series(["clean:js", "clean:css"]));

// C. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================