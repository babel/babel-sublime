// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

import TheirClass from "./mypath";
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.import.js
// ^ keyword.control.import-export
//                  ^ keyword.control.import-export

import {identifier, otherIdentifier} from "somewhere";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.import
// ^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.block
//     ^ punctuation.section.block.begin
//                                 ^ punctuation.section.block.end
//       ^ meta.import meta.block variable.other.readwrite

import thing, {identifier as otherIdentifier}, * as otherName from "otherplace";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.import
// ^ keyword.control.import-export
//      ^ variable.other.readwrite
//            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.block
//                ^ variable.other.readwrite
//                        ^ keyword.control.import-export
//                                     ^ variable.other.readwrite
//                                             ^ constant.other.js
//                                                             ^ keyword.control.import-export

import 'module';
// ^^^^^^^^^^^^^ meta.import

import foo from 'bar' assert { type: "json" };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.import.js
//^^^^ keyword.control.import-export.js
//     ^^^ variable.other.readwrite.js
//         ^^^^ keyword.control.import-export.js
//              ^^^^^ meta.string.js string.quoted.single.js
//              ^ punctuation.definition.string.begin.js
//                  ^ punctuation.definition.string.end.js
//                    ^^^^^^ keyword.control.import-export.js
//                           ^^^^^^^^^^^^^^^^ meta.mapping.js
//                           ^ punctuation.section.mapping.begin.js
//                             ^^^^ meta.mapping.key.js
//                                 ^ punctuation.separator.key-value.js
//                                   ^^^^^^ meta.string.js string.quoted.double.js
//                                   ^ punctuation.definition.string.begin.js
//                                        ^ punctuation.definition.string.end.js
//                                          ^ punctuation.section.mapping.end.js
//                                           ^ punctuation.terminator.statement.js

// Better highlighting while typing.
import
import;
// <- keyword.control.import-export

import;/**/
//     ^ - meta.import

export { name1, name2 as name3, name4 as '+', name5 as "+" };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.block
//            ^ punctuation.separator.comma
//                    ^^ keyword.control.import-export
//                                    ^^ keyword.control.import-export
//                                       ^^^ meta.string string.quoted.single
//                                                  ^^ keyword.control.import-export
//                                                     ^^^ meta.string string.quoted.double

export let name1, name2;
//^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^ keyword.declaration
//              ^ punctuation.separator.comma

export var name3;
//^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^ keyword.declaration

export const name1 = 5;
//^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^ keyword.declaration
//                 ^ keyword.operator.assignment

export let foo = 123 // No semicolon
export function bar() {}
// <- keyword.control.import-export

export function foo() {};
//^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^ meta.function
//                      ^ punctuation.terminator.statement.empty

export function* foo() {};
//^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^  meta.function
//                       ^ punctuation.terminator.statement.empty

export async function foo() {};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//                            ^ punctuation.terminator.statement.empty

export class Foo {};
//^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^^^^^^ meta.class
//                 ^ punctuation.terminator.statement.empty

export default expression;
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^ keyword.control.import-export

export default function (a) { };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^ keyword.control.import-export
//             ^^^^^^^^^^^^^^^^ meta.function
//                             ^ punctuation.terminator.statement.empty - meta.export

export default function* (a) { };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^ keyword.control.import-export
//             ^^^^^^^^^^^^^^^^^ meta.function
//                              ^ punctuation.terminator.statement.empty - meta.export

export default function name1(b) { }
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^ keyword.control.import-export
//             ^^^^^^^^ keyword.declaration.function
//                      ^ entity.name.function

export default class Foo {};
//^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^ keyword.control.import-export
//             ^^^^^^^^^^^^ meta.class
//                         ^ punctuation.terminator.statement.empty

export default +function (a) { };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^ keyword.control.import-export
//              ^^^^^^^^^^^^^^^^ meta.function

export { name1 as default };
//^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^ meta.block
//             ^ keyword.control.import-export
//                ^ keyword.control.import-export

export * from "./othermod";
//^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^ constant.other
//       ^ keyword.control.import-export

export { name1, name2 } from "./othermod";
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^ meta.block
//     ^ punctuation.section.block.begin
//                    ^ punctuation.section.block.end
//                      ^ keyword.control.import-export

export { import1 as name1, import2 as name2, nameN } from "./othermod";
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.block
//               ^ keyword.control.import-export
//                                 ^ keyword.control.import-export
//                                                   ^ keyword.control.import-export

// Better highlighting while typing.
export
export;
// <- keyword.control.import-export

export;/**/
//     ^ - meta.export

import * as
    alias from "module";
// ^^^^^^^^^^^^^^^^^^^^^ meta.import.js

import { member as
    alias } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.import.js

import { * as
    alias } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.import.js

export { member as
    alias } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.export.js

export { member as
    default } from "module";
// ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export.js

let from;
//  ^^^^ variable.other.readwrite.js

import from from "./othermod";
//     ^^^^ variable.other.readwrite.js

import { from } from "./othermod";
//       ^^^^ variable.other.readwrite.js

export from from "./othermod";
//     ^^^^ variable.other.readwrite.js

export { from } from "./othermod";
//       ^^^^ variable.other.readwrite.js

export default$
//     ^^^^^^^^ - keyword
;

let x = import.meta;
//      ^^^^^^^^^^^ - meta.import
//      ^^^^^^ keyword.import
//            ^ punctuation.accessor
//             ^^^^ variable.language.import

    import.meta;
//  ^^^^^^^^^^^ - meta.import
//  ^^^^^^ keyword.import
//        ^ punctuation.accessor
//         ^^^^ variable.language.import

    import
//  ^^^^^^ - meta.import
    .meta;
//  ^^^^^ - meta.import
//  ^ punctuation.accessor
//   ^^^^ variable.language.import

    import('foo');
//  ^^^^^^ keyword.import
//        ^^^^^^^ meta.group

    import
//  ^^^^^^ - meta.import
    ('foo');
//  ^^^^^^^ meta.group
