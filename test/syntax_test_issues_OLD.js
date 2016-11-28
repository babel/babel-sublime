// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).tmLanguage"

/**
 * https://github.com/babel/babel-sublime/issues/243
 */

class Foo extends create('Bar') {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class
//^^^ meta.class storage.type.class
//    ^^^ meta.class entity.name.class
//        ^^^^^^^^^^^^^^^^^^^^^^ meta.class meta.class.extends
//        ^^^^^^^ meta.class meta.class.extends storage.type.extends
//                ^^^^^^^^^^^^^ meta.class meta.class.extends meta.method
//                ^^^^^^ meta.class meta.class.extends meta.method string.unquoted entity.name.function
//                      ^ meta.class meta.class.extends meta.method punctuation.definition.parameters.begin
//                        ^^^ meta.class meta.class.extends meta.method variable.parameter.function
//                            ^ meta.class meta.class.extends meta.method punctuation.definition.parameters.end
//                              ^ meta.class meta.brace.curly.begin
//                               ^ meta.class meta.brace.curly.end


/**
 * https://github.com/babel/babel-sublime/issues/244
 */

var foo = bar ? "+" + baz : qux;
//^ storage.type
//<- source.js
//  ^^^ variable.other.readwrite
//      ^ keyword.operator.assignment
//        ^^^ variable.other.readwrite
//            ^ keyword.operator.ternary
//              ^^^ string.quoted
//              ^ string.quoted punctuation.definition.string.begin
//                ^ string.quoted punctuation.definition.string.end
//                  ^ keyword.operator.arithmetic
//                    ^^^^^ constant.other.object.key
//                    ^^^ constant.other.object.key string.unquoted.label
//                        ^ constant.other.object.key punctuation.separator.key-value
//                          ^^^ variable.other.readwrite
//                             ^ punctuation.terminator.statement

var foo = bar ? "+" + baz + baz2 : qux;
//^ storage.type
//<- source.js
//  ^^^ variable.other.readwrite
//      ^ keyword.operator.assignment
//        ^^^ variable.other.readwrite
//            ^ keyword.operator.ternary
//              ^^^ string.quoted
//              ^ string.quoted punctuation.definition.string.begin
//                ^ string.quoted punctuation.definition.string.end
//                  ^ keyword.operator.arithmetic
//                    ^^^ variable.other.readwrite
//                        ^ keyword.operator.arithmetic
//                          ^^^^^^ constant.other.object.key
//                          ^^^^ constant.other.object.key string.unquoted.label
//                               ^ constant.other.object.key punctuation.separator.key-value
//                                 ^^^ variable.other.readwrite
//                                    ^ punctuation.terminator.statement

var foo = bar ? "+" + (baz) : qux;
//^ storage.type
//<- source.js
//  ^^^ variable.other.readwrite
//      ^ keyword.operator.assignment
//        ^^^ variable.other.readwrite
//            ^ keyword.operator.ternary
//              ^^^ string.quoted
//              ^ string.quoted punctuation.definition.string.begin
//                ^ string.quoted punctuation.definition.string.end
//                  ^ keyword.operator.arithmetic
//                    ^ meta.group.braces.round meta.brace.round.begin
//                     ^^^ meta.group.braces.round variable.other.readwrite
//                        ^ meta.group.braces.round meta.brace.round.end
//                          ^ punctuation.separator.key-value
//                            ^^^ variable.other.readwrite
//                               ^ punctuation.terminator.statement


/**
 * https://github.com/babel/babel-sublime/issues/249
 */

{{{{{{{{{{{{{{
//^^^^^^^^^^^^ meta.tag.mustache
  console.log
//^^^^^^^^^^^^ meta.tag.mustache
}}}}}}}}}}}}}}
//^^^^^^^^^^^^ source.js - meta.tag.mustache


/**
 * https://github.com/babel/babel-sublime/issues/253
 */

for(let a of list)
//^^^^^^^^^^^^^^^^ meta.for
//^ keyword.control.loop
// ^ meta.brace.round.begin
//  ^^^ storage.type
//      ^ variable.other.readwrite
//        ^^ keyword.operator
//           ^^^^ variable.other.readwrite
//               ^ meta.for meta.brace.round.end

for(let a of [])
//^^^^^^^^^^^^^^ meta.for
//^ keyword.control.loop
// ^ meta.brace.round.begin
//  ^^^ storage.type
//      ^ variable.other.readwrite
//        ^^ keyword.operator
//           ^ meta.group.braces.square meta.brace.square.begin
//            ^ meta.group.braces.square meta.brace.square.end
//             ^ meta.brace.round.end

for(let a of (list || []))
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//^ keyword.control.loop
//<- source.js
// ^ meta.brace.round.begin
//  ^^^ storage.type
//      ^ variable.other.readwrite
//        ^^^ meta.function-call.with-arguments
//        ^^ meta.function-call.with-arguments variable.function
//           ^^^^^^^^^^^^ meta.group.braces.round
//           ^ meta.group.braces.round meta.brace.round.begin
//            ^^^^ meta.group.braces.round variable.other.readwrite
//                 ^^ meta.group.braces.round keyword.operator.logical
//                    ^ meta.group.braces.round meta.group.braces.square meta.brace.square.begin
//                     ^ meta.group.braces.round meta.group.braces.square meta.brace.square.end
//                      ^^ meta.brace.round.end
//                      ^ meta.group.braces.round meta.brace.round.end


/**
 * https://github.com/babel/babel-sublime/issues/256
 */

return a ? a*a : 0;
//^^^^ keyword.control.flow
//<- source.js
//     ^ variable.other.readwrite
//       ^ keyword.operator.ternary
//         ^ variable.other.readwrite
//          ^ keyword.operator.arithmetic
//           ^^^ constant.other.object.key
//           ^ constant.other.object.key string.unquoted.label
//             ^ constant.other.object.key punctuation.separator.key-value
//               ^ constant.numeric
//                ^ punctuation.terminator.statement
