// ==============================================================================
//                                  DEPENDENCIES
// ==============================================================================
const gulp = require("gulp");
const jshint = require("gulp-jshint");

// Our task
gulp.task("jshint", () => {
  // run the gulp task on our script
  return (
    gulp
      .src("js/*.js")
      // telling gulp that we're using es6
      // pipe is like a .then, it runs something after something
      .pipe(jshint({ esversion: 6 }))
      //plug in the styles we downloaded from NPM (stylish reporter)
      .pipe(jshint.reporter("jshint-stylish"))
  );
});

// ==============================================================================
//                                 SASS LINT
// ==============================================================================
const sassLint = require("gulp-sass-lint");

gulp.task("sass-lint", () => {
  return (
    gulp
      //plugin the css folder and then leave two trailing asterixs two asterixs are known as wildcards
      .src("css/**/*.scss")
      // run sass lint
      .pipe(sassLint())
      // tell sass lint to format your sass
      .pipe(sassLint.format())
      // Tells sass lint to stop if theres an error
      .pipe(sassLint.failOnError())
  );
});

// ==============================================================================
//                          WATCHING FILES ON SAVE
// ==============================================================================

const { watch } = require("gulp");

gulp.task("watch", () => {
  gulp.watch("js/*.js", gulp.series("jshint")),
    gulp.watch("css/**/*.scss", gulp.series("sass-lint"));
});
