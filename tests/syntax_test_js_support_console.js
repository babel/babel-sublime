// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

    console;
//  ^^^^^^^ support.type.object.console

    console.log();
//  ^^^^^^^^^^^^^ meta.function-call.method
//  ^^^^^^^ support.type.object.console
//         ^ punctuation.accessor
//          ^^^ support.function.console
//             ^^ meta.group

    console.log;
//  ^^^^^^^^^^^ - meta.function-call
//  ^^^^^^^ support.type.object.console
//         ^ punctuation.accessor
//          ^^^ support.function.console

    console.log.toString();
//  ^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.method - meta.function-call meta.function-call
//  ^^^^^^^ support.type.object.console
//         ^ punctuation.accessor
//          ^^^ support.function.console

console.warn;
//      ^^^^ support.function.console
console.info;
//      ^^^^ support.function.console
console.log;
//      ^^^ support.function.console
console.error;
//      ^^^^^ support.function.console
console.time;
//      ^^^^ support.function.console
console.timeEnd;
//      ^^^^^^^ support.function.console
console.assert;
//      ^^^^^^ support.function.console
console.count;
//      ^^^^^ support.function.console
console.dir;
//      ^^^ support.function.console
console.group;
//      ^^^^^ support.function.console
console.groupCollapsed;
//      ^^^^^^^^^^^^^^ support.function.console
console.groupEnd;
//      ^^^^^^^^ support.function.console
console.profile;
//      ^^^^^^^ support.function.console
console.profileEnd;
//      ^^^^^^^^^^ support.function.console
console.table;
//      ^^^^^ support.function.console
console.trace;
//      ^^^^^ support.function.console
console.timeStamp;
//      ^^^^^^^^^ support.function.console
