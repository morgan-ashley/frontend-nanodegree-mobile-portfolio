var gulp =  require('gulp');
//var imagemin =  require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
//var webp = require('gulp-webp');
var inlineCss = require('gulp-inline-css');

/* gulp.task('jpgs', function(){
	return gulp.src('views/images/pizzeria.jpg')
	.pipe(imagemin({progressive: true}))
	.pipe(gulp.dest('gulp-images'))
});
 */
gulp.task('jpgs', function() {
    return gulp.src('.build/views/images/pizzeri.jpg')
    //.pipe(imagemin({ progressive: true }))
    .pipe(imageminJpegRecompress({loops: 3})())
    .pipe(gulp.dest('./build/webp/views/images'));
});

gulp.task('inline-css', function(){
	return gulp.src('./index.html')
	.pipe(inlineCss())
	.pipe(gulp.dest('build/'));
});