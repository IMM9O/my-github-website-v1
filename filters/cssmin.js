const CleanCSS = require("clean-css");

module.exports = code => new CleanCSS({}).minify(code).styles;