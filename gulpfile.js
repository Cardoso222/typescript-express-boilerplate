const gulp = require('gulp');
const ts = require('gulp-typescript');
const PATHS = ['src/*.json', 'src/**/*.json'];
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
  return gulp.src(PATHS)
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets'])
