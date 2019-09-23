var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    lost = require('lost');
    sass = require('gulp-sass');
    multiDest = require('gulp-multi-dest');
    browserSync = require('browser-sync').create();
    cssnano = require('gulp-cssnano'),
    browserify = require('browserify'),
    babel = require('gulp-babel'),
    babelify = require("babelify"),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reload = browserSync.reload;

    
gulp.task('sass', function() {
    return gulp.src('./package/scss/*.scss')
		.pipe(sass({
			style: 'compressed',
			errLogToConsole: true,
			onError: function(err) {
				return notify().write(err);
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(postcss([
            lost()
            //autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')
	    ]))
        //.pipe(sourcemaps.write('./'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(cssnano())
        .pipe(gulp.dest('../css/'))
        .pipe(reload({stream:true}))
});  

gulp.task('js', function() {
    return browserify('./package/js/script.js')
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest('../js'));
});


gulp.task('default', ['sass','js'],function(){
    gulp.watch('./package/scss/**/*', ['sass']);
    gulp.watch('./package/js/**/*', ['js']);
});