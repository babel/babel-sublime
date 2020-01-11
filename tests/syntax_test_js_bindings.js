// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"


// Variable declarations

const x = value;
//    ^ meta.binding.name variable.other.readwrite


const [ x, y, ...z, ] = value;
//    ^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//      ^ meta.binding.name variable.other.readwrite
//       ^ punctuation.separator.comma
//         ^ meta.binding.name variable.other.readwrite
//          ^ punctuation.separator.comma
//            ^^^ keyword.operator.spread
//               ^ meta.binding.name variable.other.readwrite
//                ^ punctuation.separator.comma

const [ x, [a, b], z] = value;
//    ^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//         ^^^^^^ meta.binding.destructuring.sequence meta.binding.destructuring.sequence
//          ^ meta.binding.name variable.other.readwrite
//             ^ meta.binding.name variable.other.readwrite

const [ x = 42, y = [a, b, c] ] = value;
//    ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//        ^ keyword.operator.assignment
//          ^^ meta.binding.destructuring.sequence.js constant.numeric.integer.decimal.js
//                ^ keyword.operator.assignment
//                  ^^^^^^^^^ meta.sequence
//                   ^ variable.other.readwrite - meta.binding.name

const { a, b: c, ...d } = value;
//    ^^^^^^^^^^^^^^^^^ meta.binding.destructuring.mapping
//      ^ meta.mapping.key meta.binding.name variable.other.readwrite
//       ^ punctuation.separator.comma
//         ^ meta.mapping.key - variable
//          ^ punctuation.separator.key-value
//               ^^^ keyword.operator.spread
//                  ^ meta.binding.name variable.other.readwrite

const { 'a': x, "b": y, [c]: z } = value;
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.binding.destructuring.mapping
//      ^^^ meta.mapping.key string.quoted.single
//         ^ punctuation.separator.key-value
//           ^ meta.binding.name variable.other.readwrite
//              ^^^ meta.mapping.key string.quoted.double
//                 ^ punctuation.separator.key-value
//                   ^ meta.binding.name variable.other.readwrite
//                      ^^^ meta.mapping.key
//                       ^ variable.other.readwrite
//                         ^ punctuation.separator.key-value
//                           ^ meta.binding.name variable.other.readwrite

const x;
//    ^ meta.binding.name variable.other.readwrite

let
// <- storage.type
w
//  <- meta.binding.name variable.other.readwrite
,
// <- punctuation.separator.comma
x
// <- meta.binding.name variable.other.readwrite
y
// <- variable.other.readwrite - meta.binding.name
,
// <- keyword.operator.comma
z
// <- variable.other.readwrite - meta.binding.name

// `let` is only reserved in strict mode, and we can't distinguish that yet.

let let;
//  ^^^ meta.binding.name variable.other.readwrite

let
let;
// <- meta.binding.name variable.other.readwrite

const
const x = 0;
// <- storage.type

// Function parameters

function f ([ x, y, ...z, ]) {}
//          ^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//            ^ meta.binding.name variable.parameter.function
//             ^ punctuation.separator.parameter
//               ^ meta.binding.name variable.parameter.function
//                ^ punctuation.separator.parameter
//                  ^^^ keyword.operator.spread
//                     ^ meta.binding.name variable.parameter.function
//                      ^ punctuation.separator.parameter

function f ([ x, [a, b], z]) {}
//          ^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//               ^^^^^^ meta.binding.destructuring.sequence meta.binding.destructuring.sequence
//                ^ meta.binding.name variable.parameter.function
//                   ^ meta.binding.name variable.parameter.function

function f ([ x = 42, y = [a, b, c] ]) {}
//          ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//              ^ keyword.operator.assignment
//                ^^ meta.binding.destructuring.sequence.js constant.numeric.integer.decimal.js
//                      ^ keyword.operator.assignment
//                        ^^^^^^^^^ meta.sequence
//                         ^ variable.other.readwrite - meta.binding.name

function f ({ a, b: c, ...d }) {}
//          ^^^^^^^^^^^^^^^^^ meta.binding.destructuring.mapping
//            ^ meta.mapping.key meta.binding.name variable.parameter.function
//             ^ punctuation.separator.parameter
//               ^ meta.mapping.key - variable
//                ^ punctuation.separator.key-value
//                     ^^^ keyword.operator.spread
//                        ^ meta.binding.name variable.parameter.function

function f ({ 'a': x, "b": y, [c]: z }) = value;
//          ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.binding.destructuring.mapping
//            ^^^ meta.mapping.key string.quoted.single
//               ^ punctuation.separator.key-value
//                 ^ meta.binding.name variable.parameter.function
//                    ^^^ meta.mapping.key string.quoted.double
//                       ^ punctuation.separator.key-value
//                         ^ meta.binding.name variable.parameter.function
//                            ^^^ meta.mapping.key
//                             ^ variable.other.readwrite
//                               ^ punctuation.separator.key-value
//                                 ^ meta.binding.name variable.parameter.function

function f (a, ...rest) {}
//          ^ meta.binding.name variable.parameter.function
//             ^^^ keyword.operator.spread
//                ^^^^ variable.parameter.function

function f (new) {}
// ^^^^^^^^^^^^^^^^ meta.function
//          ^^^ invalid.illegal.identifier meta.binding.name variable.parameter.function

let f = ([ x, y, ...z, ]) => {};
//  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//       ^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//         ^ meta.binding.name variable.parameter.function
//          ^ punctuation.separator.parameter
//            ^ meta.binding.name variable.parameter.function
//             ^ punctuation.separator.parameter
//               ^^^ keyword.operator.spread
//                  ^ meta.binding.name variable.parameter.function
//                   ^ punctuation.separator.parameter

let f = ([ x, [a, b], z]) => {};
//  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^ entity.name.function variable.other.readwrite
//       ^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//            ^^^^^^ meta.binding.destructuring.sequence meta.binding.destructuring.sequence
//             ^ meta.binding.name variable.parameter.function
//                ^ meta.binding.name variable.parameter.function

let f = ([ x = 42, y = [a, b, c] ]) => {};
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^ entity.name.function variable.other.readwrite
//       ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.binding.destructuring.sequence
//           ^ keyword.operator.assignment
//             ^^ meta.binding.destructuring.sequence.js constant.numeric.integer.decimal.js
//                   ^ keyword.operator.assignment
//                     ^^^^^^^^^ meta.sequence
//                      ^ variable.other.readwrite - meta.binding.name

let f = ({ a, b: c, ...d }) => {};
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^ entity.name.function variable.other.readwrite
//       ^^^^^^^^^^^^^^^^^ meta.binding.destructuring.mapping
//         ^ meta.mapping.key meta.binding.name variable.parameter.function
//          ^ punctuation.separator.parameter
//            ^ meta.mapping.key - variable
//             ^ punctuation.separator.key-value
//                  ^^^ keyword.operator.spread
//                     ^ meta.binding.name variable.parameter.function

let f = ({ 'a': x, "b": y, [c]: z }) => {};
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.binding.destructuring.mapping
//         ^^^ meta.mapping.key string.quoted.single
//            ^ punctuation.separator.key-value
//              ^ meta.binding.name variable.parameter.function
//                 ^^^ meta.mapping.key string.quoted.double
//                    ^ punctuation.separator.key-value
//                      ^ meta.binding.name variable.parameter.function
//                         ^^^ meta.mapping.key
//                          ^ variable.other.readwrite
//                            ^ punctuation.separator.key-value
//                              ^ meta.binding.name variable.parameter.function

let f = (a, ...rest) => {};
//  ^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^ entity.name.function variable.other.readwrite
//       ^ meta.binding.name variable.parameter.function
//          ^^^ keyword.operator.spread
//             ^^^^ meta.binding.name variable.parameter.function

let f = (new) => {};
//  ^^^^^^^^^^^^^^^ meta.function
//       ^^^ invalid.illegal.identifier meta.binding.name variable.parameter.function
