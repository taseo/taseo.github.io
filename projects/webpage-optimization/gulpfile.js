const gulp = require('gulp');
const minifyInline = require('gulp-minify-inline');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('watch', () => {
  gulp.watch(['src/*html'], ['minify']);
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
    .pipe(uglify().on('error', function(e) {
      console.log(e);
    }))
    .pipe(gulp.dest('./'));
});

// minifies css

gulp.task('minify-css', () => {
  return gulp
    .src('./src/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['minify-html', 'minify-js', 'minify-css', 'watch']);
