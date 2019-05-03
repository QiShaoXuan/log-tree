const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

gulp.task('default', async function () {
  const bundle = await rollup.rollup({
      input: './src/index.js',
      plugins: [
        babel()
      ]
    })
  ;

  await bundle.write({
    file: './dist/index.js',
    format: 'umd',
    name: 'library',
    sourcemap: true
  });
});

gulp.task('watch', () => {
  gulp.watch('./src/*.js', gulp.series('default'));
})
