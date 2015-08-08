'use strict';

var path = require('path');
var resolve = require('resolve');
var stdin = require('get-stdin');

var opts = JSON.parse(process.argv[2]);

if (!opts.options) opts.options = {};
if (opts.filename) opts.options.filename = opts.filename;

(function(done) {

  if (opts.use_local_babel && opts.filename) {
    findBabel(path.dirname(opts.filename), resolveGlobal);
  } else {
    resolveGlobal();
  }

  function findBabel(basedir, next) {
    var ropts = {basedir: basedir};
    resolve('babel', ropts, function(err, file, pkg) {
      if (!err) return done(require(file), {file: file, pkg: pkg});
      resolve('babel-core', ropts, function(err2, file2, pkg2) {
        if (!err2) return done(require(file2), {file: file2, pkg: pkg2});
        next();
      });
    });
  }

  function resolveGlobal() {
    findBabel(opts.node_modules, function() {
      throw new Error('Couldn\'t find babel or babel-core');
    });
  }

}(function(babel, row) {

  var debugLog = '';
  if (opts.debug) {
    debugLog = '\n\n';
    debugLog += '// babel@' + row.pkg.version + ' (' + row.file + ')\n';
    debugLog += '// filename: ' + opts.filename + '\n';
    // debugLog += '// ' + JSON.stringify(opts) + '\n';
  }

  stdin(function (data)  {
    try {
      var code = babel.transform(data, opts.options).code;
      if (opts.debug) {
        code += debugLog;
      }
      if (opts.newline_at_eof && code[code.length - 1] !== '\n') {
        code += '\n';
      }
      process.stdout.write(code);
    } catch (err) {
      var message = err.name;
      if (err.codeFrame) { // babel@5.x
        message += [err.message, err.codeFrame].filter(Boolean).join('\n\n');
      } else { // babel@4.x
        message += err.annotated || err.message;
      }
      if (opts.debug) {
        message += debugLog;
      }
      process.stderr.write(message);
    }
  });

}));
