module.exports = function() {
    $.gulp.task('sass', function() {
    return $.gulp.src('src/scss/main.scss')
        .pipe($.gp.if($.env === 'development', $.gp.sourcemaps.init()))
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer())
        .on("error", $.gp.notify.onError({
            title: 'style'
        }))
        .pipe($.gp.if($.env === 'production', $.gp.csso()))
        .pipe($.gp.if($.env === 'development',$.gp.sourcemaps.write()))
        .pipe($.gulp.dest('build/css'))
        .pipe($.bs.reload({
            stream: true
        }));
    })
}