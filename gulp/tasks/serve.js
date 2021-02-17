module.exports = function() {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./build",
            },
            port: 8080
        });
    });
}