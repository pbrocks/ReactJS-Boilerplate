var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    jsx = require('gulp-jsx'),
    shell = require('gulp-shell');

var jsFileList = [
    'node_modules/react/dist/react-with-addons.js',
    'node_modules/react-dom/dist/react-dom.js'
];

gulp.task( 'sass', function() {
    gulp.src('./assets/scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'));
});

gulp.task( 'js', function(){
    gulp.src(jsFileList)
        .pipe(concat('admin-app-scripts.js'))
        .pipe(gulp.dest('build/js/'))
});

gulp.task( 'jsx-concat', function(){
    return gulp.src('./build/js/components/*.js')
        .pipe(concat('all-components.js'))
        .pipe(gulp.dest('./build/js'))
});

gulp.task( 'jsx-shell', shell.task(['jsx ./assets/js/ ./build/js/']));

gulp.task( 'jsx', ['jsx-shell', 'jsx-concat'] );


gulp.task( 'watch', function(){
    gulp.watch('./assets/scss/styles.scss', ['sass'] );
    gulp.watch(jsFileList, ['js'] );
    gulp.watch('./assets/js/components/*.js', ['jsx-shell', 'jsx-concat'] );
});

gulp.task( 'default', ['sass', 'js', 'watch'] );