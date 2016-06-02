/*
 * Brief instructions:
	* $ npm install gulp gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
	* Then simply run gulp
	* $ gulp
	* Gulp should now regenerate your files everytime you make a change
	*
  */

// Load Our Dependancies
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
	del = require('del');

// Process our Sass Files
gulp.task('sass', function() {
	return sass('assets/sass/style.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(minifycss())
		.pipe(gulp.dest(''))
		.pipe(notify({ message: 'Sass completed' }));
});

// Scripts
gulp.task('scripts', function() {
	return gulp.src([
	  'assets/js/functions.js',
	  'assets/js/onReady.js',
	])
		.pipe(concat('scripts.js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(jshint())
		.pipe(gulp.dest('dist/js'))
		.pipe(notify({ message: 'Scripts completed' }));
});

// Compress Images
gulp.task('images', function() {
	return gulp.src('assets/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/images'))
		.pipe(notify({ message: 'Image compression completed' }));
});

// Set default task order
gulp.task('default', function() {
	gulp.start( 'sass', 'scripts', 'images', 'watch' );
});

// Watch for changing files
gulp.task('watch', function() {

	// Watch Sass files
	gulp.watch('assets/sass/*.scss', ['sass']);

	// Watch Sass partials files
	gulp.watch('assets/sass/partials/*.scss', ['sass']);

	// Watch image files
	gulp.watch('assets/images/*', ['images']);

	// Create LiveReload server
	livereload.listen();

	// Watch any files in dist/, reload on change
	gulp.watch(['dist/**']).on('change', livereload.changed);

});