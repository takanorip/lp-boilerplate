var fs = require('fs');
var browserify = require('browserify');
browserify('/src/js/app.js')
  .transform('babelify', {presets: ['env']})
  .bundle()
  .pipe(fs.createWriteStream('bundle.js'));
