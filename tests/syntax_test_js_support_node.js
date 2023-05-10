// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

    global;
//  ^^^^^^ support.type.object.node

    __dirname;
//  ^^^^^^^^^ support.constant.node
    __filename;
//  ^^^^^^^^^ support.constant.node
    exports;
//  ^^^^^^^ support.constant.node
    module;
//  ^^^^^^ support.constant.node
    require;
//  ^^^^^^^ support.function.node
    Buffer;
//  ^^^^^^ support.class.node

nodeClass = new Buffer();
//              ^^^^^^ support.class.node

module.children;
//     ^^^^^^^^ support.constant.node
module.exports;
//     ^^^^^^^ support.constant.node
module.filename;
//     ^^^^^^^^ support.constant.node
module.id;
//     ^^ support.constant.node
module.loaded;
//     ^^^^^^ support.constant.node
module.parent;
//     ^^^^^^ support.constant.node
module.paths;
//     ^^^^^ support.constant.node
module.require;
//     ^^^^^^^ support.function.node

process.arch;
//      ^^^^ support.constant.node.js
process.argv;
//      ^^^^ support.constant.node.js
process.argv0;
//      ^^^^^ support.constant.node.js
process.channel;
//      ^^^^^^^ support.constant.node.js
process.config;
//      ^^^^^^ support.constant.node.js
process.connected;
//      ^^^^^^^^^ support.constant.node.js
process.debugPort;
//      ^^^^^^^^^ support.constant.node.js
process.env;
//      ^^^ support.constant.node.js
process.execArgv;
//      ^^^^^^^^ support.constant.node.js
process.execPath;
//      ^^^^^^^^ support.constant.node.js
process.exitCode;
//      ^^^^^^^^ support.constant.node.js
process.mainModule;
//      ^^^^^^^^^^ support.constant.node.js
process.noDeprecation;
//      ^^^^^^^^^^^^^ support.constant.node.js
process.pid;
//      ^^^ support.constant.node.js
process.platform;
//      ^^^^^^^^ support.constant.node.js
process.ppid;
//      ^^^^ support.constant.node.js
process.release;
//      ^^^^^^^ support.constant.node.js
process.stderr;
//      ^^^^^^ support.constant.node.js
process.stdin;
//      ^^^^^ support.constant.node.js
process.stdout;
//      ^^^^^^ support.constant.node.js
process.throwDeprecation;
//      ^^^^^^^^^^^^^^^^ support.constant.node.js
process.title;
//      ^^^^^ support.constant.node.js
process.traceDeprecation;
//      ^^^^^^^^^^^^^^^^ support.constant.node.js
process.version;
//      ^^^^^^^ support.constant.node.js
process.versions;
//      ^^^^^^^^ support.constant.node.js
process.abort;
//      ^^^^^ support.function.node.js
process.chdir;
//      ^^^^^ support.function.node.js
process.cpuUsage;
//      ^^^^^^^^ support.function.node.js
process.cwd;
//      ^^^ support.function.node.js
process.disconnect;
//      ^^^^^^^^^^ support.function.node.js
process.dlopen;
//      ^^^^^^ support.function.node.js
process.emitWarning;
//      ^^^^^^^^^^^ support.function.node.js
process.exit;
//      ^^^^ support.function.node.js
process.getegid;
//      ^^^^^^^ support.function.node.js
process.geteuid;
//      ^^^^^^^ support.function.node.js
process.getgit;
//      ^^^^^^ support.function.node.js
process.getgroups;
//      ^^^^^^^^^ support.function.node.js
process.getuid;
//      ^^^^^^ support.function.node.js
process.hasUncaughtExceptionCaptureCallback;
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ support.function.node.js
process.hrtime;
//      ^^^^^^ support.function.node.js
process.initGroups;
//      ^^^^^^^^^^ support.function.node.js
process.kill;
//      ^^^^ support.function.node.js
process.memoryUsage;
//      ^^^^^^^^^^^ support.function.node.js
process.nextTick;
//      ^^^^^^^^ support.function.node.js
process.send;
//      ^^^^ support.function.node.js
process.setegid;
//      ^^^^^^^ support.function.node.js
process.seteuid;
//      ^^^^^^^ support.function.node.js
process.setgid;
//      ^^^^^^ support.function.node.js
process.setgroups;
//      ^^^^^^^^^ support.function.node.js
process.setuid;
//      ^^^^^^ support.function.node.js
process.hasUncaughtExceptionCaptureCallback;
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ support.function.node.js
process.umask;
//      ^^^^^ support.function.node.js
process.uptime;
//      ^^^^^^ support.function.node.js
