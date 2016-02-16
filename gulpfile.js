const del = require('del'),
      gulp = require('gulp'),
      babel = require('gulp-babel'),
      notice = require('gulp-notice');

gulp.task('clean', () => {
  del(['dist/**/*', '!dist/', '!dist/.gitkeep']);
});

gulp.task('transpile', ['clean'], () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(notice())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['transpile']);
