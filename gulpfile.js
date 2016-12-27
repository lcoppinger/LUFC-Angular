var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 8',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.3',
  'bb >= 10'
];

// browser-sync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("**/*.html").on('change', browserSync.reload);
  gulp.watch("js/**/*.js").on('change', browserSync.reload);
});

// build sass
gulp.task('sass', function() {
  return gulp.src("scss/style.scss")
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest("css"));
});

gulp.task('sass:dev', function() {
  return gulp.src("scss/**/*.scss")
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

//watch
gulp.task('watch', function() {
  gulp.watch("scss/**/*.scss", gulpsync.sync(['sass:dev']));
});

// gulp dev
gulp.task('default', ['watch']);
gulp.task('dev', gulpsync.sync(['watch', 'browser-sync']));
