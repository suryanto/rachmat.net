var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
  .pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}));
});

// Watch scss folder for changes
gulp.task('watch', function() {
  // Watches the scss folder for all .scss and .sass files
  // If any file changes, run the sass task
  browserSync.init({
    proxy: "rachmat.dev"
  });
  gulp.watch('./scss/**/*.{scss,sass}', gulp.series('sass'));
});

// Creating a default task
gulp.task('default', gulp.series('sass', 'watch'));
