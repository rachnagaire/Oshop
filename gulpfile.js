var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    styles: {

        src: './assets/scss/**',
        dest: './assets/css'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        // pass in options to the stream
        .pipe(gulp.dest(paths.styles.dest));
}
function watch() {
    gulp.watch(paths.styles.src, styles);
}
var build = gulp.series(gulp.parallel(styles));

exports.styles = styles;
exports.watch = watch;
exports.build = build;

exports.default = build;