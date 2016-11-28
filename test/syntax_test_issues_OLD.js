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


/**
 * https://github.com/babel/babel-sublime/issues/270
 */

class Foo {
//^^^ meta.class storage.type.class
//    ^^^ meta.class entity.name.class
//        ^ meta.class meta.brace.curly.begin
  bar = baz::map(
//^^^ meta.class.property variable.other.property
//    ^ meta.class.property keyword.operator.assignment
//      ^^^ meta.class.property variable.other.readwrite
//         ^ meta.class.property meta.flowtype.annotation keyword.operator.flowtype.annotation
//          ^ meta.class.property meta.flowtype.annotation keyword.operator.flowtype.other
//           ^^^ meta.class.property meta.flowtype.annotation variable.other.flowtype
//              ^ meta.class.property meta.flowtype.annotation punctuation.section.flowtype.begin
    thing => 1
//  ^^^^^ meta.class.property meta.flowtype.annotation variable.other.flowtype
//        ^^ meta.class.property meta.flowtype.annotation meta.flowtype.function keyword.operator.flowtype
  );
  constructor() {}
//^^^^^^^^^^^ meta.class.property meta.flowtype.annotation meta.flowtype.function variable.other.flowtype
//           ^ meta.class.property meta.flowtype.annotation punctuation.section.flowtype.begin
//            ^ meta.class.property meta.flowtype.annotation punctuation.section.flowtype.end
}
))} /* END ERROR */


/**
 * https://github.com/babel/babel-sublime/issues/274
 */

void <div>{[<span />]}</div>
//^^ keyword.operator
//<- source.js
//   ^ keyword.operator.relational
//    ^^^ variable.other.readwrite
//       ^ keyword.operator.relational
//        ^ meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
//          ^^^^^^^^ meta.group.braces.curly meta.group.braces.square meta.jsx
//          ^ meta.group.braces.curly meta.group.braces.square meta.jsx meta.tag punctuation.definition.tag.begin
//           ^^^^ meta.group.braces.curly meta.group.braces.square meta.jsx meta.tag entity.name.tag
//                ^^ meta.group.braces.curly meta.group.braces.square meta.jsx meta.tag punctuation.definition.tag.end
//                  ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//                   ^ meta.group.braces.curly meta.brace.curly.end
//                    ^ keyword.operator.relational
//                     ^^^^^^ string.regexp
//                     ^ string.regexp punctuation.definition.string.begin
/ /* END ERROR */


/**
 * https://github.com/babel/babel-sublime/issues/275
 */

if (_.startsWith(line, 'State(')) {}
//<- keyword.control.conditional
// ^ meta.group.braces.round meta.brace.round.begin
//  ^ meta.group.braces.round variable.other.object variable.other.object
//   ^ meta.group.braces.round keyword.operator.accessor
//    ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.round meta.method
//    ^^^^^^^^^^ meta.group.braces.round meta.method string.unquoted entity.name.function
//              ^ meta.group.braces.round meta.method punctuation.definition.parameters.begin
//               ^^^^ meta.group.braces.round meta.method variable.parameter.function
//                   ^ meta.group.braces.round meta.method punctuation.separator.parameter.function
//                      ^^^^^ meta.group.braces.round meta.method variable.parameter.function
//                             ^ meta.group.braces.round meta.method punctuation.definition.parameters.end
//                              ^ meta.group.braces.round meta.brace.round.end
//                                ^ meta.group.braces.curly meta.brace.curly.begin
//                                 ^ meta.group.braces.curly meta.brace.curly.end


/**
 * https://github.com/babel/babel-sublime/issues/284
 */

@web.controller('/hello')
//^ tag.decorator entity.name.tag
//<- tag.decorator punctuation.definition.tag
//  ^ keyword.operator.accessor
//   ^^^^^^^^^^ meta.function-call.method.with-arguments variable.function
//             ^ meta.group.braces.round meta.brace.round.begin
//              ^^^^^^^^ meta.group.braces.round string.quoted
//              ^ meta.group.braces.round string.quoted punctuation.definition.string.begin
//                     ^ meta.group.braces.round string.quoted punctuation.definition.string.end
//                      ^ meta.group.braces.round meta.brace.round.end
class Klass {
//^^^ storage.type.class
//    ^^^^^ entity.name.class
//          ^ meta.brace.curly.begin
  @web.get()
//^ tag.decorator punctuation.definition.tag
// ^^^ tag.decorator entity.name.tag
//     ^^^ meta.class-method string.unquoted entity.name.function
//        ^ meta.class-method punctuation.definition.parameters.begin
//         ^ meta.class-method punctuation.definition.parameters.end
  foo(a, b) {}
//   ^ meta.class-method punctuation.definition.parameters.begin
//    ^ meta.class-method variable.parameter.function
//     ^ meta.class-method punctuation.separator.parameter.function
//       ^ meta.class-method variable.parameter.function
//        ^ meta.class-method punctuation.definition.parameters.end
//          ^ meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.group.braces.curly meta.brace.curly.end

  @web.use
//^ tag.decorator punctuation.definition.tag
// ^^^ tag.decorator entity.name.tag
  bar(c, d) {}
//^^^^^^^^^ meta.class-method
//^^^ meta.class-method string.unquoted entity.name.function
//   ^ meta.class-method punctuation.definition.parameters.begin
//    ^ meta.class-method variable.parameter.function
//     ^ meta.class-method punctuation.separator.parameter.function
//       ^ meta.class-method variable.parameter.function
//        ^ meta.class-method punctuation.definition.parameters.end
//          ^ meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.group.braces.curly meta.brace.curly.end
}
//<- meta.class meta.brace.curly.end
