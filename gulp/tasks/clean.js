module.exports = function() {
    $.gulp.task('clean', function() {
        $.gp.cache.clearAll()
        return $.gulp.src('build/*', {read: false})
        .pipe($.gp.clean())
    })
}