var gulp = require("gulp");
var markdown = require('gulp-markdown');
var marked = require('marked');
var renderer = new marked.Renderer();

var ts = require('gulp-typescript');
var nodemon = require("gulp-nodemon");
/** gulp-bootstrap  */


var tsProject = ts.createProject('./tsconfig.json');

gulp.task("default", ["compile", 'nodemon', "watch", "doc:watch"]);


gulp.task("watch", function() {
    return gulp.watch(["./src/**/*.ts"], ["compile"]);
});


gulp.task("compile", function() {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));

});

gulp.task("nodemon", function() {
    nodemon({
        script: "dist/www.js",
        // exec: ' ', // set DEBUG=*,-not_this &node --debug
        env: {
            'NODE_ENV': 'production'
        }

    });
});




gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});



gulp.task('doc:watch', function() {
    gulp.watch("doc/**/*.md", ["doc"])
});

renderer.html = (content) => `<!doctype html>` + content + `</html>`;

gulp.task("doc", () => {
    return gulp.src('doc/**/*.md')
        .pipe(markdown({ renderer }))
        .pipe(gulp.dest('public/doc'));

})