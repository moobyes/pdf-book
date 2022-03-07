/*
 * @Description: gulpfile.js
 * @Author: Moobye
 * @Date: 2022-03-04 00:14:57
 * @LastEditTime: 2022-03-06 22:16:16
 * @LastEditors: Moobye
 */
const gulp = require("gulp"),
  sass = require("gulp-sass"),
  watch = require("gulp-watch"),
  browser = require("browser-sync"),
  fileinclude = require("gulp-file-include"),
  imagemin = require('gulp-imagemin'), // 图片压缩
  pngquant = require('imagemin-pngquant'), // 深度压缩
  replace = require("gulp-replace"),
  htmlmin = require("gulp-htmlmin"),
  cssmiin = require("gulp-clean-css"),
  babel = require('gulp-babel');

// 不同环境相关配置
const public_path =
  process.env.NODE_ENV == "development" ? "./" : "./";
const devArr =
  process.env.NODE_ENV == "development"
    ? ["watch", "serve", "sass", "js", "html", "image", "pages"]
    : ["sass", "js", "html", "image", "pages"];

const path = {
  sass: "src/sass/*.scss",
  js: "src/js/*.js",
  html: "src/*.html",
  image: "src/image/*.{png,jpg,gif,ico}",
  pages: "src/pages/*.html",
};

// 编译sass
gulp.task("sass", function () {
  gulp.src(path.sass).pipe(sass()).pipe(gulp.dest("./build/css/"));
});

// 编译js
gulp.task("js", function () {
  gulp.src(path.js).pipe(babel({
    // 可以判断当前代码运行的环境  将代码转换为当前运行环境所支持的代码
    presets: ['@babel/env'],
    "plugins": [
      ["@babel/plugin-transform-modules-commonjs", {"strictMode": false}]
    ]
  })).pipe(gulp.dest("./build/js/"));
});

// 编译html
gulp.task("html", function () {
  const options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: false, //省略布尔属性的值 <input checked=”true”/> ==> <input />
    removeEmptyAttributes: false, //删除所有空格作属性值 <input id=”” /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type=”text/javascript”
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type=”text/css”
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  gulp
    .src(path.html)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        context: {
          layout: "layout",
          cover: "cover",
          content: "content",
        },
      }),
    )
    .pipe(replace("./", public_path))
    .pipe(htmlmin(options))
    .pipe(gulp.dest("./build/"));
});

gulp.task("pages",['html'], function () {
  gulp.src(path.pages).pipe(gulp.dest("./build/pages/"));
});

// 压缩图片
gulp.task("image", function(){
  return gulp.src(path.image)
    .pipe(gulp.dest('./build/image/')); // 输出路径
});

// 自动刷新 检测src || build
const DEV = "build";
gulp.task("serve", function () {
  browser.init({
    server: DEV + "/",
  });
  gulp.watch(DEV + "/*.html").on("change", browser.reload);
  gulp.watch(DEV + "/js/*.js").on("change", browser.reload);
  gulp.watch(DEV + "/image/*.{png,jpg,gif,ico}").on("change", browser.reload);
  gulp.watch(DEV + "/pages/*.html").on("change", browser.reload);
});

gulp.task("watch", function () {
  gulp.watch(path.sass, ["sass"]);
  gulp.watch(path.js, ["js"]);
  gulp.watch(path.html, ["html"]);
  gulp.watch(path.image, ["image"]);
  gulp.watch(path.pages, ["pages"]);
});

// default是gulp执行任务的入口必须存在
gulp.task("default", devArr);
