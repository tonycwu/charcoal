'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    util = require('gulp-util'),
    cleanCSS = require('gulp-clean-css'),
    browserify = require('browserify'),
    vueify = require('vueify'),
    source = require('vinyl-source-stream'),
    hologram = require('gulp-hologram'),
    bs = require('browser-sync').create(),
    reload = bs.reload;

var paths = {
  sass: {
    src: './public/src/sass',
    dst: './public/dst/css'
  },
  css: {
    src: './public/dst/css',
    dst: './public/dst/css/min'
  },
  js: {
    src: './public/src/js',
    dst: './public/dst/js'
  },
  vue: {
    src: './public/src/js'
  },
  slick: {
    src:   './node_modules/slick-carousel/slick/slick.scss',
    theme: './node_modules/slick-carousel/slick/slick-theme.scss'
  }
};

// DEFAULT ========================
gulp.task('default', ['serve']);

// SASS ===========================
gulp.task('sass', function() {
  return gulp.src([paths.sass.src + '/*.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.dst));
});

// BROWSERSYNC ========================
gulp.task('serve', ['sass'], function() {

  bs.init({
    server: './',
    port: 3456
  });

  gulp.watch('index.html').on('change', reload);
  gulp.watch(paths.vue.src + '/**/*.vue', ['vueify']);
  gulp.watch(paths.sass.src + '/**/*.sass', ['minify-css', 'holo']);
});

// VUEIFY ========================
gulp.task('vueify', function(){
  return browserify('./public/src/js/main.js')
        .transform(vueify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/dst/js/'))
        .pipe(bs.stream());
});

// MINIFY CSS =====================
gulp.task('minify-css', ['sass'], function() {
  return gulp.src(paths.css.src + '/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.css.dst))
        .pipe(bs.stream());
});

// HOLOGRAM =========================
gulp.task('holo', function(){
  return gulp.src('./style-guide/style-guide-config.yml')
        .pipe(hologram());
});
