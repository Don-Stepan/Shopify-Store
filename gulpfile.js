const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function() {
  return gulp.src('src/scss/**/*.scss') // шлях до твоїх SCSS файлів
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets')); // результат зберігається у Shopify /assets
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
});
