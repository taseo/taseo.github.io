const gulp = require('gulp');
const purify = require('gulp-purifycss');
const minifyInline = require('gulp-minify-inline');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('watch', () => {
  gulp.watch(['src/*html'], ['minify']);
});

// removes unnecesary CSS from included bootstrap frame-work

gulp.task('purify-css', function() {
  return gulp
    .src('./src/views/css/*.css')
    .pipe(purify(['./src/views/**/*.html', './src/views/**/*.js']))
    .pipe(gulp.dest('./views/css'));
});

// minifies html

gulp.task('minify-html', () => {
  return gulp
    .src('./src/**/*.html')
    .pipe(minifyInline())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});

// minifies js

gulp.task('minify-js', () => {
  return gulp
    .src('./src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

// minifies css

gulp.task('minify-css', () => {
  return gulp
    .src('./src/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['purify-css', 'minify-html', 'minify-js', 'minify-css', 'watch']);
