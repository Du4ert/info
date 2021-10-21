module.exports = function() {
    $.gulp.task('html', function() {
    return $.gulp.src('src/html/index.html')
        .pipe($.gp.fileInclude({    // include в html
            prefix: '@@',
            basepath: 'src/html'
          }))
        //.pipe($.gp.html())        // валидатор html
        .pipe($.gulp.dest('build'))
        .on('end', $.bs.reload);
    });
}