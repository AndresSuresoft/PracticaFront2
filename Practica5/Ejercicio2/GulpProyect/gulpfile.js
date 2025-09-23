const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer").default;
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const inject = require("gulp-inject");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const { deleteAsync } = require("del");


const paths = {
  styles: "css/**/*.scss",   
  scripts: "js/**/*.js",     
  images: "img/**/*",
  html: "index.html",
  dist: "dist/"
};


function clean() {
    return deleteAsync([paths.dist]);
  }

function styles() {
  return gulp.src(paths.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat("style.min.css"))   
    .pipe(gulp.dest(paths.dist + "css"));
}


function scripts() {
  return gulp.src(paths.scripts)
    .pipe(concat("script.min.js"))  
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + "js"));
}

function images() {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist + "img"));
}


function html() {
  const sources = gulp.src([paths.dist + "css/*.css", paths.dist + "js/*.js"], { read: false });

  return gulp.src(paths.html)
    .pipe(inject(sources, {
      transform: function (filepath) {
        filepath = filepath.replace('/dist/', '');
        if (filepath.endsWith('.css')) {
          return `<link rel="stylesheet" href="${filepath}">`;
        }
        if (filepath.endsWith('.js')) {
          return `<script src="${filepath}"></script>`;
        }
        return inject.transform.apply(inject.transform, arguments);
      }
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dist));
}

const build = gulp.series(clean, gulp.parallel(styles, scripts, images), html);


function reload(done) {
  browserSync.reload();
  done();
}


function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dist
    }
  });

  gulp.watch([paths.styles, paths.scripts, paths.html], gulp.series(build, reload));
}

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html;
exports.build = build;
exports.serve = gulp.series(build, serve);
