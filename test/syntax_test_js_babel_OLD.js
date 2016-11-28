// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).tmLanguage"

class MyClass {
//^^^ meta.class storage.type.class
//    ^^^^^^^ meta.class entity.name.class
//            ^ meta.class meta.brace.curly.begin

  type: string;
//^^^^ meta.class meta.class.property variable.other.property
//    ^^^^^^^^ meta.class meta.class.property meta.flowtype.annotation
//    ^ meta.class meta.class.property meta.flowtype.annotation keyword.operator.flowtype.annotation
//      ^^^^^^ meta.class meta.class.property meta.flowtype.annotation constant.other.primitve.flowtype

  type: () => void;
//^^^^ meta.class meta.class.property variable.other.property
//    ^^^^^^^^^^^^ meta.class meta.class.property meta.flowtype.annotation
//    ^ meta.class meta.class.property meta.flowtype.annotation keyword.operator.flowtype.annotation
//      ^ meta.class meta.class.property meta.flowtype.annotation punctuation.section.flowtype.begin
//       ^ meta.class meta.class.property meta.flowtype.annotation punctuation.section.flowtype.end
//         ^^^^^^^ meta.class meta.class.property meta.flowtype.annotation meta.flowtype.function
//         ^^ meta.class meta.class.property meta.flowtype.annotation meta.flowtype.function keyword.operator.flowtype
//            ^^^^ meta.class meta.class.property meta.flowtype.annotation meta.flowtype.function constant.other.primitve.flowtype

  @@iterator(): Iterator<[K, V]>;
//^^^^^^^^^^ meta.class meta.short-method.flowtype keyword.operator.flowtype
//          ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.begin
//           ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.end
//            ^^^^^^^^^^^^^^^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation
//            ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.annotation
//              ^^^^^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                      ^^ meta.class meta.short-method.flowtype meta.flowtype.annotation punctuation.section.flowtype.begin
//                        ^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                           ^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                            ^^ meta.class meta.short-method.flowtype meta.flowtype.annotation punctuation.section.flowtype.end

  static (o: ?void): {[key: any]: any};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class meta.short-method.flowtype
//^^^^^^ meta.class meta.short-method.flowtype keyword.operator.flowtype
//       ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.begin
//        ^ meta.class meta.short-method.flowtype variable.parameter.function
//         ^^^^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation
//         ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.annotation
//           ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.other
//            ^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation constant.other.primitve.flowtype
//                ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.end
//                 ^^^^^^^^^^^^^^^^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation
//                 ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.annotation
//                   ^^ meta.class meta.short-method.flowtype meta.flowtype.annotation punctuation.section.flowtype.begin
//                     ^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                        ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.other
//                          ^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation constant.other.primitve.flowtype
//                             ^ meta.class meta.short-method.flowtype meta.flowtype.annotation punctuation.section.flowtype.end
//                              ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.other
//                                ^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation constant.other.primitve.flowtype
//                                   ^ meta.class meta.short-method.flowtype meta.flowtype.annotation punctuation.section.flowtype.end

  return<R>(value: R): { done: true, value: R };
//^^^^^^ meta.class meta.short-method.flowtype keyword.operator.flowtype
//      ^ meta.class meta.short-method.flowtype meta.flowtype.polymorph punctuation.section.flowtype.begin
//       ^ meta.class meta.short-method.flowtype meta.flowtype.polymorph variable.other.flowtype
//        ^ meta.class meta.short-method.flowtype meta.flowtype.polymorph punctuation.section.flowtype.end
//         ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.begin
//          ^^^^^ meta.class meta.short-method.flowtype variable.parameter.function
//               ^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation
//               ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.annotation
//                 ^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                  ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.end
//                   ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation
//                   ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.annotation
//                     ^ meta.class meta.short-method.flowtype meta.flowtype.annotation punctuation.section.flowtype.begin
//                       ^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                           ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.other
//                             ^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                                   ^^^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                                        ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.other
//                                          ^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                                            ^ meta.class meta.short-method.flowtype meta.flowtype.annotation punctuation.section.flowtype.end

  <T: Object>(o: T): T;
//^^^^^^^^^^^^^^^^^^^^ meta.class meta.short-method.flowtype
//^^^^^^^^^^^ meta.class meta.short-method.flowtype meta.flowtype.polymorph
//^ meta.class meta.short-method.flowtype meta.flowtype.polymorph punctuation.section.flowtype.begin
// ^ meta.class meta.short-method.flowtype meta.flowtype.polymorph variable.other.flowtype
//  ^ meta.class meta.short-method.flowtype meta.flowtype.polymorph keyword.operator.flowtype.other
//    ^^^^^^ meta.class meta.short-method.flowtype meta.flowtype.polymorph support.class.builtin
//          ^ meta.class meta.short-method.flowtype meta.flowtype.polymorph punctuation.section.flowtype.end
//           ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.begin
//            ^ meta.class meta.short-method.flowtype variable.parameter.function
//             ^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation
//             ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.annotation
//               ^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype
//                ^ meta.class meta.short-method.flowtype punctuation.definition.parameters.end
//                 ^^^ meta.class meta.short-method.flowtype meta.flowtype.annotation
//                 ^ meta.class meta.short-method.flowtype meta.flowtype.annotation keyword.operator.flowtype.annotation
//                   ^ meta.class meta.short-method.flowtype meta.flowtype.annotation variable.other.flowtype

  regularMethod() {}
//^^^^^^^^^^^^^ meta.class meta.class-method string.unquoted entity.name.function
//             ^ meta.class meta.class-method punctuation.definition.parameters.begin
//              ^ meta.class meta.class-method punctuation.definition.parameters.end
//                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.end

  *generatorMethod() {}
//^ meta.class keyword.generator.asterisk
// ^^^^^^^^^^^^^^^ meta.class meta.class-method string.unquoted entity.name.function
//                ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                 ^ meta.class meta.class-method punctuation.definition.parameters.end
//                   ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.end

  static staticRegularMethod() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^^^^^^^^^^^^^^^ meta.class meta.class-method string.unquoted entity.name.function
//                          ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                           ^ meta.class meta.class-method punctuation.definition.parameters.end
//                             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                              ^ meta.class meta.group.braces.curly meta.brace.curly.end

  static get staticGetterMethod() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-accessor storage.type
//           ^^^^^^^^^^^^^^^^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//                             ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//                              ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//                                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                                 ^ meta.class meta.group.braces.curly meta.brace.curly.end

  static set staticSetterMethod(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-accessor storage.type
//           ^^^^^^^^^^^^^^^^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//                             ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//                              ^^^ meta.class meta.class-accessor variable.parameter.function
//                                 ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//                                   ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                                    ^ meta.class meta.group.braces.curly meta.brace.curly.end

  static *staticGeneratorMethod() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^^^^^^^^^^^^^^^^^^^^^ meta.class meta.class-method string.unquoted entity.name.function
//                             ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                              ^ meta.class meta.class-method punctuation.definition.parameters.end
//                                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                                 ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async staticAsyncMethod() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^^^^^^^^^^^^^^^^^ meta.class meta.class-method string.unquoted entity.name.function
//                              ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                               ^ meta.class meta.class-method punctuation.definition.parameters.end
//                                 ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                                  ^ meta.class meta.group.braces.curly meta.brace.curly.end

  async asyncMethod() {}
//^^^^^ meta.class storage.type
//      ^^^^^^^^^^^ meta.class meta.class-method string.unquoted entity.name.function
//                 ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                  ^ meta.class meta.class-method punctuation.definition.parameters.end
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.end
  [computedMethod()]() {}
//^ meta.class meta.group.braces.square meta.brace.square.begin
// ^^^^^^^^^^^^^^ meta.class meta.group.braces.square meta.function-call.without-arguments variable.function
//               ^^ meta.class meta.group.braces.square meta.function-call.without-arguments meta.group.braces.round.function.arguments
//                 ^ meta.class meta.group.braces.square meta.brace.square.end
//                  ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                   ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.class meta.group.braces.curly meta.brace.curly.end
  ["computedString"]() {}
//^ meta.class meta.group.braces.square meta.brace.square.begin
// ^^^^^^^^^^^^^^^^ meta.class meta.group.braces.square string.quoted
// ^ meta.class meta.group.braces.square string.quoted punctuation.definition.string.begin
//                ^ meta.class meta.group.braces.square string.quoted punctuation.definition.string.end
//                 ^ meta.class meta.group.braces.square meta.brace.square.end
//                  ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                   ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.class meta.group.braces.curly meta.brace.curly.end

  ["computed" + "String"]() {}
//^^^^^^^^^^^^^^^^^^^^^^^ meta.class meta.group.braces.square
//^ meta.class meta.group.braces.square meta.brace.square.begin
// ^^^^^^^^^^ meta.class meta.group.braces.square string.quoted
// ^ meta.class meta.group.braces.square string.quoted punctuation.definition.string.begin
//          ^ meta.class meta.group.braces.square string.quoted punctuation.definition.string.end
//            ^ meta.class meta.group.braces.square keyword.operator.arithmetic
//              ^^^^^^^^ meta.class meta.group.braces.square string.quoted
//              ^ meta.class meta.group.braces.square string.quoted punctuation.definition.string.begin
//                     ^ meta.class meta.group.braces.square string.quoted punctuation.definition.string.end
//                      ^ meta.class meta.group.braces.square meta.brace.square.end
//                       ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                        ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                          ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.class meta.group.braces.curly meta.brace.curly.end

  *[Symbol.iterator]() {}
//^ meta.class keyword.generator.asterisk
// ^ meta.class meta.group.braces.square meta.brace.square.begin
//  ^^^^^^ meta.class meta.group.braces.square support.class.builtin
//        ^ meta.class meta.group.braces.square keyword.operator.accessor
//         ^^^^^^^^ meta.class meta.group.braces.square meta.property.object variable.other.property
//                 ^ meta.class meta.group.braces.square meta.brace.square.end
//                  ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                   ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.class meta.group.braces.curly meta.brace.curly.end
}



let Sound = {
//^ storage.type
//<- source.js
//  ^^^^^ variable.other.readwrite
//        ^ keyword.operator.assignment
//          ^ meta.group.braces.curly meta.brace.curly.begin

  get() {},
//^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//   ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//    ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//        ^ meta.group.braces.curly meta.delimiter.comma

  get(arg) {},
//^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//   ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//    ^^^ meta.group.braces.curly meta.method variable.parameter.function
//       ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//           ^ meta.group.braces.curly meta.delimiter.comma
  set() {},
//^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//   ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//    ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//        ^ meta.group.braces.curly meta.delimiter.comma

  set(arg) {},
//^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//   ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//    ^^^ meta.group.braces.curly meta.method variable.parameter.function
//       ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//           ^ meta.group.braces.curly meta.delimiter.comma

  play() {},
//^^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//     ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//         ^ meta.group.braces.curly meta.delimiter.comma

  play(arg) {},
//^^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//     ^^^ meta.group.braces.curly meta.method variable.parameter.function
//        ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//            ^ meta.group.braces.curly meta.delimiter.comma

  'play'() {},
//^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//       ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//           ^ meta.group.braces.curly meta.delimiter.comma

  'play'(arg) {},
//^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//       ^^^ meta.group.braces.curly meta.method variable.parameter.function
//          ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//              ^ meta.group.braces.curly meta.delimiter.comma

  *play() {},
//^ meta.group.braces.curly meta.method keyword.generator.asterisk
// ^^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//     ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//      ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//          ^ meta.group.braces.curly meta.delimiter.comma

  *play(arg) {},
//^ meta.group.braces.curly meta.method keyword.generator.asterisk
// ^^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//     ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//      ^^^ meta.group.braces.curly meta.method variable.parameter.function
//         ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//             ^ meta.group.braces.curly meta.delimiter.comma

  async play() {},
//^^^^^^^^^^^^ meta.group.braces.curly meta.method
//^^^^^ meta.group.braces.curly meta.method storage.type
//      ^^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//          ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//           ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//               ^ meta.group.braces.curly meta.delimiter.comma

  async play(arg) {},
//^^^^^^^^^^^^^^^ meta.group.braces.curly meta.method
//^^^^^ meta.group.braces.curly meta.method storage.type
//      ^^^^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//          ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//           ^^^ meta.group.braces.curly meta.method variable.parameter.function
//              ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//                ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                  ^ meta.group.braces.curly meta.delimiter.comma

  get play() {},
//^^^^^^^^^^ meta.group.braces.curly meta.accessor
//^^^ meta.group.braces.curly meta.accessor storage.type.accessor
//    ^^^^ meta.group.braces.curly meta.accessor entity.name.accessor
//        ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.begin
//         ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.end
//           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//             ^ meta.group.braces.curly meta.delimiter.comma

  set play(arg) {},
//^^^^^^^^^^^^^ meta.group.braces.curly meta.accessor
//^^^ meta.group.braces.curly meta.accessor storage.type.accessor
//    ^^^^ meta.group.braces.curly meta.accessor entity.name.accessor
//        ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.begin
//         ^^^ meta.group.braces.curly meta.accessor variable.parameter.function
//            ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.end
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                ^ meta.group.braces.curly meta.delimiter.comma

  *'play'() {},
//^ meta.group.braces.curly meta.method keyword.generator.asterisk
// ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
//  ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//      ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//       ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//        ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//            ^ meta.group.braces.curly meta.delimiter.comma

  *'play'(arg) {},
//^ meta.group.braces.curly meta.method keyword.generator.asterisk
// ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
//  ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//      ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//       ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//        ^^^ meta.group.braces.curly meta.method variable.parameter.function
//           ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//               ^ meta.group.braces.curly meta.delimiter.comma

  async 'play'() {},
//^^^^^^^^^^^^^^ meta.group.braces.curly meta.method
//^^^^^ meta.group.braces.curly meta.method storage.type
//      ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
//       ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//           ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//            ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//             ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//               ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                 ^ meta.group.braces.curly meta.delimiter.comma

  async 'play'(arg) {},
//^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.method
//^^^^^ meta.group.braces.curly meta.method storage.type
//      ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
//       ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//           ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//            ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//             ^^^ meta.group.braces.curly meta.method variable.parameter.function
//                ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//                  ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                    ^ meta.group.braces.curly meta.delimiter.comma

  get 'play'() {},
//^^^ meta.group.braces.curly variable.other.readwrite
//    ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
//     ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//         ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//          ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//           ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//               ^ meta.group.braces.curly meta.delimiter.comma

  set 'play'(arg) {},
//^^^ meta.group.braces.curly variable.other.readwrite
//    ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.begin
//     ^^^^ meta.group.braces.curly meta.method string.quoted entity.name.function
//         ^ meta.group.braces.curly meta.method string.quoted punctuation.definition.string.end
//          ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//           ^^^ meta.group.braces.curly meta.method variable.parameter.function
//              ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//                ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                  ^ meta.group.braces.curly meta.delimiter.comma

  [Play.name()]() {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//     ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//      ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//          ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//            ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//             ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//              ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                  ^ meta.group.braces.curly meta.delimiter.comma

  [Play.name()[]](arg) {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//     ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//      ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//          ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//            ^ meta.group.braces.curly meta.group.braces.square meta.group.braces.square meta.brace.square.begin
//             ^^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//             ^ meta.group.braces.curly meta.group.braces.square meta.group.braces.square meta.brace.square.end
//               ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                ^^^ meta.group.braces.curly meta.group.braces.round variable.other.readwrite
//                   ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                       ^ meta.group.braces.curly meta.delimiter.comma

  *[Play.name()]() {},
//^ meta.group.braces.curly keyword.operator.arithmetic
// ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
//  ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//      ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//       ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//           ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//             ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//              ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//               ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                 ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                   ^ meta.group.braces.curly meta.delimiter.comma

  *[Play.name()](arg) {},
//^ meta.group.braces.curly keyword.operator.arithmetic
// ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
//  ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//      ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//       ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//           ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//             ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//              ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//               ^^^ meta.group.braces.curly meta.group.braces.round variable.other.readwrite
//                  ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                      ^ meta.group.braces.curly meta.delimiter.comma

  async [Play.name()]() {},
//^^^^^^ meta.group.braces.curly variable.other.object
//^^^^^ meta.group.braces.curly variable.other.object variable.other.object
//      ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
//       ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//           ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//            ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//                ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//                  ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//                   ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                    ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                        ^ meta.group.braces.curly meta.delimiter.comma

  async [Play.name()](arg) {},
//^^^^^^ meta.group.braces.curly variable.other.object
//^^^^^ meta.group.braces.curly variable.other.object variable.other.object
//      ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
//       ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//           ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//            ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//                ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//                  ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//                   ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                    ^^^ meta.group.braces.curly meta.group.braces.round variable.other.readwrite
//                       ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                           ^ meta.group.braces.curly meta.delimiter.comma

  get [Play.name()]() {},
//^^^^ meta.group.braces.curly variable.other.object
//^^^ meta.group.braces.curly variable.other.object variable.other.object
//    ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
//     ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//         ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//          ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//              ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//                ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//                 ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                  ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                      ^ meta.group.braces.curly meta.delimiter.comma

  set [Play.name()](arg) {},
//^^^^ meta.group.braces.curly variable.other.object
//^^^ meta.group.braces.curly variable.other.object variable.other.object
//    ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
//     ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.other.class
//         ^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments keyword.operator.accessor
//          ^^^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments variable.function
//              ^^ meta.group.braces.curly meta.group.braces.square meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
//                ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//                 ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                  ^^^ meta.group.braces.curly meta.group.braces.round variable.other.readwrite
//                     ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                         ^ meta.group.braces.curly meta.delimiter.comma

  0() {},
//^ meta.group.braces.curly meta.method string.unquoted entity.name.function
// ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//  ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//      ^ meta.group.braces.curly meta.delimiter.comma

  0(arg) {},
//^ meta.group.braces.curly meta.method string.unquoted entity.name.function
// ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//  ^^^ meta.group.braces.curly meta.method variable.parameter.function
//     ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//         ^ meta.group.braces.curly meta.delimiter.comma

  *0() {},
//^ meta.group.braces.curly meta.method keyword.generator.asterisk
// ^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//  ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//   ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//       ^ meta.group.braces.curly meta.delimiter.comma

  *0(arg) {},
//^ meta.group.braces.curly meta.method keyword.generator.asterisk
// ^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//  ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//   ^^^ meta.group.braces.curly meta.method variable.parameter.function
//      ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//          ^ meta.group.braces.curly meta.delimiter.comma

  async 0() {},
//^^^^^^^^^ meta.group.braces.curly meta.method
//^^^^^ meta.group.braces.curly meta.method storage.type
//      ^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//       ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//        ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//            ^ meta.group.braces.curly meta.delimiter.comma

  async 0(arg) {},
//^^^^^^^^^^^^ meta.group.braces.curly meta.method
//^^^^^ meta.group.braces.curly meta.method storage.type
//      ^ meta.group.braces.curly meta.method string.unquoted entity.name.function
//       ^ meta.group.braces.curly meta.method punctuation.definition.parameters.begin
//        ^^^ meta.group.braces.curly meta.method variable.parameter.function
//           ^ meta.group.braces.curly meta.method punctuation.definition.parameters.end
//             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//               ^ meta.group.braces.curly meta.delimiter.comma

  get 0() {},
//^^^^^^^ meta.group.braces.curly meta.accessor
//^^^ meta.group.braces.curly meta.accessor storage.type.accessor
//    ^ meta.group.braces.curly meta.accessor entity.name.accessor
//     ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.begin
//      ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.end
//        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//          ^ meta.group.braces.curly meta.delimiter.comma

  set 0(arg) {},
//^^^^^^^^^^ meta.group.braces.curly meta.accessor
//^^^ meta.group.braces.curly meta.accessor storage.type.accessor
//    ^ meta.group.braces.curly meta.accessor entity.name.accessor
//     ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.begin
//      ^^^ meta.group.braces.curly meta.accessor variable.parameter.function
//         ^ meta.group.braces.curly meta.accessor punctuation.definition.parameters.end
//           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//             ^ meta.group.braces.curly meta.delimiter.comma

  play: function() {},
//^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//              ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//               ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                 ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                   ^ meta.group.braces.curly meta.delimiter.comma

  play: function(arg) {},
//^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//              ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//               ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                  ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                      ^ meta.group.braces.curly meta.delimiter.comma

  play: function*() {},
//^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//              ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//               ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                  ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                    ^ meta.group.braces.curly meta.delimiter.comma

  play: function*(arg) {},
//^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//              ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//               ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                   ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                       ^ meta.group.braces.curly meta.delimiter.comma

  play: async function() {},
//^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^ meta.group.braces.curly meta.function.json storage.type
//            ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                    ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                     ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                         ^ meta.group.braces.curly meta.delimiter.comma

  play: async function(arg) {},
//^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^ meta.group.braces.curly meta.function.json storage.type
//            ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                    ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                     ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                        ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                            ^ meta.group.braces.curly meta.delimiter.comma

  play: async function*() {},
//^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^ meta.group.braces.curly meta.function.json storage.type
//            ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                    ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//                     ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                      ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                          ^ meta.group.braces.curly meta.delimiter.comma

  play: async function*(arg) {},
//^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^^^^ meta.group.braces.curly meta.function.json string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//      ^^^^^ meta.group.braces.curly meta.function.json storage.type
//            ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                    ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//                     ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                      ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                         ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                             ^ meta.group.braces.curly meta.delimiter.comma

  play: async () => {},
//^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^^^^ meta.group.braces.curly meta.function.json.arrow string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//      ^^^^^ meta.group.braces.curly meta.function.json.arrow storage.type
//            ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//             ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//               ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//                  ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                    ^ meta.group.braces.curly meta.delimiter.comma

  play: async (arg) => {},
//^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^^^^ meta.group.braces.curly meta.function.json.arrow string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//      ^^^^^ meta.group.braces.curly meta.function.json.arrow storage.type
//            ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//             ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//                ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//                  ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                       ^ meta.group.braces.curly meta.delimiter.comma

  play: async arg => {},
//^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^^^^ meta.group.braces.curly meta.function.json.arrow string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//      ^^^^^ meta.group.braces.curly meta.function.json.arrow storage.type
//            ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//                ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//                   ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                     ^ meta.group.braces.curly meta.delimiter.comma

  play: () => {},
//^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^^^^ meta.group.braces.curly meta.function.json.arrow string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//       ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//         ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//              ^ meta.group.braces.curly meta.delimiter.comma

  play: (arg) => {},
//^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^^^^ meta.group.braces.curly meta.function.json.arrow string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//       ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//          ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//            ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//               ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                 ^ meta.group.braces.curly meta.delimiter.comma

  play: arg => {},
//^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^^^^ meta.group.braces.curly meta.function.json.arrow string.unquoted entity.name.function
//    ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//      ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//          ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//               ^ meta.group.braces.curly meta.delimiter.comma

  "play": function() {},
//^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                 ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                   ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                     ^ meta.group.braces.curly meta.delimiter.comma

  "play": function(arg) {},
//^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                 ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                    ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                        ^ meta.group.braces.curly meta.delimiter.comma

  "play": function*() {},
//^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//                 ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                  ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                      ^ meta.group.braces.curly meta.delimiter.comma

  "play": function*(arg) {},
//^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//                 ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                  ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                     ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                         ^ meta.group.braces.curly meta.delimiter.comma

  "play": async function() {},
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.json storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                      ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                       ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                           ^ meta.group.braces.curly meta.delimiter.comma

  "play": async function(arg) {},
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.json storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                      ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                       ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                          ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                              ^ meta.group.braces.curly meta.delimiter.comma

  "play": async function*() {},
//^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.json storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                      ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//                       ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                        ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                            ^ meta.group.braces.curly meta.delimiter.comma

  "play": async function*(arg) {},
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json
//^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.json storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function.json storage.type.function
//                      ^ meta.group.braces.curly meta.function.json keyword.generator.asterisk
//                       ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.begin
//                        ^^^ meta.group.braces.curly meta.function.json variable.parameter.function
//                           ^ meta.group.braces.curly meta.function.json punctuation.definition.parameters.end
//                             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                               ^ meta.group.braces.curly meta.delimiter.comma

  "play": async () => {},
//^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json.arrow string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.json.arrow storage.type
//              ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//               ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//                 ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                      ^ meta.group.braces.curly meta.delimiter.comma

  "play": async (arg) => {},
//^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json.arrow string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.json.arrow storage.type
//              ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//               ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//                  ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//                    ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                         ^ meta.group.braces.curly meta.delimiter.comma

  "play": async arg => {},
//^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json.arrow string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.json.arrow storage.type
//              ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//                  ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                       ^ meta.group.braces.curly meta.delimiter.comma

  "play": () => {},
//^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json.arrow string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//        ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//         ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//           ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                ^ meta.group.braces.curly meta.delimiter.comma

  "play": (arg) => {},
//^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json.arrow string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//        ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.begin
//         ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//            ^ meta.group.braces.curly meta.function.json.arrow punctuation.definition.parameters.end
//              ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//                 ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                   ^ meta.group.braces.curly meta.delimiter.comma

  "play": arg => {},
//^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.json.arrow
//^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.begin
// ^^^^ meta.group.braces.curly meta.function.json.arrow string.quoted entity.name.function
//     ^ meta.group.braces.curly meta.function.json.arrow string.quoted punctuation.definition.string.end
//      ^ meta.group.braces.curly meta.function.json.arrow punctuation.separator.key-value
//        ^^^ meta.group.braces.curly meta.function.json.arrow variable.parameter.function
//            ^^ meta.group.braces.curly meta.function.json.arrow storage.type.function.arrow
//               ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                 ^ meta.group.braces.curly meta.delimiter.comma

  [play]: function() {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                 ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                   ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                     ^ meta.group.braces.curly meta.delimiter.comma

  [play]: function(arg) {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                 ^^^ meta.group.braces.curly meta.function variable.parameter.function
//                    ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                        ^ meta.group.braces.curly meta.delimiter.comma

  [play]: function*() {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                ^ meta.group.braces.curly meta.function keyword.generator.asterisk
//                 ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                  ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                      ^ meta.group.braces.curly meta.delimiter.comma

  [play]: function*(arg) {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                ^ meta.group.braces.curly meta.function keyword.generator.asterisk
//                 ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                  ^^^ meta.group.braces.curly meta.function variable.parameter.function
//                     ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                         ^ meta.group.braces.curly meta.delimiter.comma

  [play]: async function() {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function
//        ^^^^^ meta.group.braces.curly meta.function storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                      ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                       ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                         ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                           ^ meta.group.braces.curly meta.delimiter.comma

  [play]: async function(arg) {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function
//        ^^^^^ meta.group.braces.curly meta.function storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                      ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                       ^^^ meta.group.braces.curly meta.function variable.parameter.function
//                          ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                              ^ meta.group.braces.curly meta.delimiter.comma

  [play]: async function*() {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function
//        ^^^^^ meta.group.braces.curly meta.function storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                      ^ meta.group.braces.curly meta.function keyword.generator.asterisk
//                       ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                        ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                          ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                            ^ meta.group.braces.curly meta.delimiter.comma

  [play]: async function*(arg) {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.function
//        ^^^^^ meta.group.braces.curly meta.function storage.type
//              ^^^^^^^^ meta.group.braces.curly meta.function storage.type.function
//                      ^ meta.group.braces.curly meta.function keyword.generator.asterisk
//                       ^ meta.group.braces.curly meta.function punctuation.definition.parameters.begin
//                        ^^^ meta.group.braces.curly meta.function variable.parameter.function
//                           ^ meta.group.braces.curly meta.function punctuation.definition.parameters.end
//                             ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                               ^ meta.group.braces.curly meta.delimiter.comma

  [play]: async () => {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^^^^ meta.group.braces.curly meta.function.arrow
//        ^^^^^ meta.group.braces.curly meta.function.arrow storage.type
//              ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.begin
//               ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.end
//                 ^^ meta.group.braces.curly meta.function.arrow storage.type.function.arrow
//                    ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                      ^ meta.group.braces.curly meta.delimiter.comma

  [play]: async (arg) => {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^^^^^^^ meta.group.braces.curly meta.function.arrow
//        ^^^^^ meta.group.braces.curly meta.function.arrow storage.type
//              ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.begin
//               ^^^ meta.group.braces.curly meta.function.arrow variable.parameter.function
//                  ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.end
//                    ^^ meta.group.braces.curly meta.function.arrow storage.type.function.arrow
//                       ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                         ^ meta.group.braces.curly meta.delimiter.comma

  [play]: async arg => {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^^^^^ meta.group.braces.curly meta.function.arrow
//        ^^^^^ meta.group.braces.curly meta.function.arrow storage.type
//              ^^^ meta.group.braces.curly meta.function.arrow variable.parameter.function
//                  ^^ meta.group.braces.curly meta.function.arrow storage.type.function.arrow
//                     ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                       ^ meta.group.braces.curly meta.delimiter.comma

  [play]: () => {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^ meta.group.braces.curly meta.function.arrow
//        ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.begin
//         ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.end
//           ^^ meta.group.braces.curly meta.function.arrow storage.type.function.arrow
//              ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                ^ meta.group.braces.curly meta.delimiter.comma

  [play]: (arg) => {},
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^^^ meta.group.braces.curly meta.function.arrow
//        ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.begin
//         ^^^ meta.group.braces.curly meta.function.arrow variable.parameter.function
//            ^ meta.group.braces.curly meta.function.arrow punctuation.definition.parameters.end
//              ^^ meta.group.braces.curly meta.function.arrow storage.type.function.arrow
//                 ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//                   ^ meta.group.braces.curly meta.delimiter.comma

  [play]: arg => {}
//^ meta.group.braces.curly meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.group.braces.curly meta.group.braces.square variable.other.readwrite
//     ^ meta.group.braces.curly meta.group.braces.square meta.brace.square.end
//      ^ meta.group.braces.curly punctuation.separator.key-value
//        ^^^^^^ meta.group.braces.curly meta.function.arrow
//        ^^^ meta.group.braces.curly meta.function.arrow variable.parameter.function
//            ^^ meta.group.braces.curly meta.function.arrow storage.type.function.arrow
//               ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end

}

class Sound<T, T> extends Model<T, T> {
//^^^ meta.class storage.type.class
//    ^^^^^ meta.class entity.name.class
//         ^^^^^^ meta.class meta.flowtype.polymorph
//         ^ meta.class meta.flowtype.polymorph punctuation.section.flowtype.begin
//          ^ meta.class meta.flowtype.polymorph variable.other.flowtype
//             ^ meta.class meta.flowtype.polymorph variable.other.flowtype
//              ^ meta.class meta.flowtype.polymorph punctuation.section.flowtype.end
//                ^^^^^^^^^^^^^^^^^^^^ meta.class meta.class.extends
//                ^^^^^^^ meta.class meta.class.extends storage.type.extends
//                        ^^^^^ meta.class meta.class.extends variable.other.readwrite
//                             ^^^^^^ meta.class meta.class.extends meta.flowtype.polymorph
//                             ^ meta.class meta.class.extends meta.flowtype.polymorph punctuation.section.flowtype.begin
//                              ^ meta.class meta.class.extends meta.flowtype.polymorph variable.other.flowtype
//                                 ^ meta.class meta.class.extends meta.flowtype.polymorph variable.other.flowtype
//                                  ^ meta.class meta.class.extends meta.flowtype.polymorph punctuation.section.flowtype.end
//                                    ^ meta.class meta.brace.curly.begin
  get() {}
//^^^ meta.class meta.class-method string.unquoted entity.name.function
//   ^ meta.class meta.class-method punctuation.definition.parameters.begin
//    ^ meta.class meta.class-method punctuation.definition.parameters.end
//      ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//       ^ meta.class meta.group.braces.curly meta.brace.curly.end
  get(arg) {}
//^^^ meta.class meta.class-method string.unquoted entity.name.function
//   ^ meta.class meta.class-method punctuation.definition.parameters.begin
//    ^^^ meta.class meta.class-method variable.parameter.function
//       ^ meta.class meta.class-method punctuation.definition.parameters.end
//         ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.class meta.group.braces.curly meta.brace.curly.end
  set() {}
//^^^ meta.class meta.class-method string.unquoted entity.name.function
//   ^ meta.class meta.class-method punctuation.definition.parameters.begin
//    ^ meta.class meta.class-method punctuation.definition.parameters.end
//      ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//       ^ meta.class meta.group.braces.curly meta.brace.curly.end
  set(arg) {}
//^^^ meta.class meta.class-method string.unquoted entity.name.function
//   ^ meta.class meta.class-method punctuation.definition.parameters.begin
//    ^^^ meta.class meta.class-method variable.parameter.function
//       ^ meta.class meta.class-method punctuation.definition.parameters.end
//         ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *get() {}
//^ meta.class keyword.generator.asterisk
// ^^^ meta.class meta.class-method string.unquoted entity.name.function
//    ^ meta.class meta.class-method punctuation.definition.parameters.begin
//     ^ meta.class meta.class-method punctuation.definition.parameters.end
//       ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *get(arg) {}
//^ meta.class keyword.generator.asterisk
// ^^^ meta.class meta.class-method string.unquoted entity.name.function
//    ^ meta.class meta.class-method punctuation.definition.parameters.begin
//     ^^^ meta.class meta.class-method variable.parameter.function
//        ^ meta.class meta.class-method punctuation.definition.parameters.end
//          ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *set() {}
//^ meta.class keyword.generator.asterisk
// ^^^ meta.class meta.class-method string.unquoted entity.name.function
//    ^ meta.class meta.class-method punctuation.definition.parameters.begin
//     ^ meta.class meta.class-method punctuation.definition.parameters.end
//       ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *set(arg) {}
//^ meta.class keyword.generator.asterisk
// ^^^ meta.class meta.class-method string.unquoted entity.name.function
//    ^ meta.class meta.class-method punctuation.definition.parameters.begin
//     ^^^ meta.class meta.class-method variable.parameter.function
//        ^ meta.class meta.class-method punctuation.definition.parameters.end
//          ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async get() {}
//^^^^^ meta.class storage.type
//      ^^^ meta.class meta.class-method string.unquoted entity.name.function
//         ^ meta.class meta.class-method punctuation.definition.parameters.begin
//          ^ meta.class meta.class-method punctuation.definition.parameters.end
//            ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async get(arg) {}
//^^^^^ meta.class storage.type
//      ^^^ meta.class meta.class-method string.unquoted entity.name.function
//         ^ meta.class meta.class-method punctuation.definition.parameters.begin
//          ^^^ meta.class meta.class-method variable.parameter.function
//             ^ meta.class meta.class-method punctuation.definition.parameters.end
//               ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async set() {}
//^^^^^ meta.class storage.type
//      ^^^ meta.class meta.class-method string.unquoted entity.name.function
//         ^ meta.class meta.class-method punctuation.definition.parameters.begin
//          ^ meta.class meta.class-method punctuation.definition.parameters.end
//            ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async set(arg) {}
//^^^^^ meta.class storage.type
//      ^^^ meta.class meta.class-method string.unquoted entity.name.function
//         ^ meta.class meta.class-method punctuation.definition.parameters.begin
//          ^^^ meta.class meta.class-method variable.parameter.function
//             ^ meta.class meta.class-method punctuation.definition.parameters.end
//               ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static get() {}
//^^^^^^ meta.class storage.modifier
//       ^^^ meta.class meta.class-method string.unquoted entity.name.function
//          ^ meta.class meta.class-method punctuation.definition.parameters.begin
//           ^ meta.class meta.class-method punctuation.definition.parameters.end
//             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static get(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^ meta.class meta.class-method string.unquoted entity.name.function
//          ^ meta.class meta.class-method punctuation.definition.parameters.begin
//           ^^^ meta.class meta.class-method variable.parameter.function
//              ^ meta.class meta.class-method punctuation.definition.parameters.end
//                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static set() {}
//^^^^^^ meta.class storage.modifier
//       ^^^ meta.class meta.class-method string.unquoted entity.name.function
//          ^ meta.class meta.class-method punctuation.definition.parameters.begin
//           ^ meta.class meta.class-method punctuation.definition.parameters.end
//             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static set(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^ meta.class meta.class-method string.unquoted entity.name.function
//          ^ meta.class meta.class-method punctuation.definition.parameters.begin
//           ^^^ meta.class meta.class-method variable.parameter.function
//              ^ meta.class meta.class-method punctuation.definition.parameters.end
//                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *get() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^^^ meta.class meta.class-method string.unquoted entity.name.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.begin
//            ^ meta.class meta.class-method punctuation.definition.parameters.end
//              ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *get(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^^^ meta.class meta.class-method string.unquoted entity.name.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.begin
//            ^^^ meta.class meta.class-method variable.parameter.function
//               ^ meta.class meta.class-method punctuation.definition.parameters.end
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *set() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^^^ meta.class meta.class-method string.unquoted entity.name.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.begin
//            ^ meta.class meta.class-method punctuation.definition.parameters.end
//              ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *set(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^^^ meta.class meta.class-method string.unquoted entity.name.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.begin
//            ^^^ meta.class meta.class-method variable.parameter.function
//               ^ meta.class meta.class-method punctuation.definition.parameters.end
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async get() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^^^ meta.class meta.class-method string.unquoted entity.name.function
//                ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                 ^ meta.class meta.class-method punctuation.definition.parameters.end
//                   ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async get(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^^^ meta.class meta.class-method string.unquoted entity.name.function
//                ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                 ^^^ meta.class meta.class-method variable.parameter.function
//                    ^ meta.class meta.class-method punctuation.definition.parameters.end
//                      ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async set() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^^^ meta.class meta.class-method string.unquoted entity.name.function
//                ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                 ^ meta.class meta.class-method punctuation.definition.parameters.end
//                   ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async set(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^^^ meta.class meta.class-method string.unquoted entity.name.function
//                ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                 ^^^ meta.class meta.class-method variable.parameter.function
//                    ^ meta.class meta.class-method punctuation.definition.parameters.end
//                      ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static get get() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-accessor storage.type
//           ^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//              ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//               ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static set set(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-accessor storage.type
//           ^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//              ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//               ^^^ meta.class meta.class-accessor variable.parameter.function
//                  ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.end
  play() {}
//^^^^ meta.class meta.class-method string.unquoted entity.name.function
//    ^ meta.class meta.class-method punctuation.definition.parameters.begin
//     ^ meta.class meta.class-method punctuation.definition.parameters.end
//       ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.class meta.group.braces.curly meta.brace.curly.end
  play(arg) {}
//^^^^ meta.class meta.class-method string.unquoted entity.name.function
//    ^ meta.class meta.class-method punctuation.definition.parameters.begin
//     ^^^ meta.class meta.class-method variable.parameter.function
//        ^ meta.class meta.class-method punctuation.definition.parameters.end
//          ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.class meta.group.braces.curly meta.brace.curly.end
  'play'() {}
//^ meta.class meta.class-method string.quoted punctuation.definition.string.begin
// ^^^^ meta.class meta.class-method string.quoted entity.name.function
//     ^ meta.class meta.class-method string.quoted punctuation.definition.string.end
//      ^ meta.class meta.class-method punctuation.definition.parameters.begin
//       ^ meta.class meta.class-method punctuation.definition.parameters.end
//         ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.class meta.group.braces.curly meta.brace.curly.end
  'play'(arg) {}
//^ meta.class meta.class-method string.quoted punctuation.definition.string.begin
// ^^^^ meta.class meta.class-method string.quoted entity.name.function
//     ^ meta.class meta.class-method string.quoted punctuation.definition.string.end
//      ^ meta.class meta.class-method punctuation.definition.parameters.begin
//       ^^^ meta.class meta.class-method variable.parameter.function
//          ^ meta.class meta.class-method punctuation.definition.parameters.end
//            ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *play() {}
//^ meta.class keyword.generator.asterisk
// ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//     ^ meta.class meta.class-method punctuation.definition.parameters.begin
//      ^ meta.class meta.class-method punctuation.definition.parameters.end
//        ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *play(arg) {}
//^ meta.class keyword.generator.asterisk
// ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//     ^ meta.class meta.class-method punctuation.definition.parameters.begin
//      ^^^ meta.class meta.class-method variable.parameter.function
//         ^ meta.class meta.class-method punctuation.definition.parameters.end
//           ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *'play'() {}
//^ meta.class keyword.generator.asterisk
// ^ meta.class meta.class-method string.quoted punctuation.definition.string.begin
//  ^^^^ meta.class meta.class-method string.quoted entity.name.function
//      ^ meta.class meta.class-method string.quoted punctuation.definition.string.end
//       ^ meta.class meta.class-method punctuation.definition.parameters.begin
//        ^ meta.class meta.class-method punctuation.definition.parameters.end
//          ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *'play'(arg) {}
//^ meta.class keyword.generator.asterisk
// ^ meta.class meta.class-method string.quoted punctuation.definition.string.begin
//  ^^^^ meta.class meta.class-method string.quoted entity.name.function
//      ^ meta.class meta.class-method string.quoted punctuation.definition.string.end
//       ^ meta.class meta.class-method punctuation.definition.parameters.begin
//        ^^^ meta.class meta.class-method variable.parameter.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.end
//             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async play() {}
//^^^^^ meta.class storage.type
//      ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//          ^ meta.class meta.class-method punctuation.definition.parameters.begin
//           ^ meta.class meta.class-method punctuation.definition.parameters.end
//             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async play(arg) {}
//^^^^^ meta.class storage.type
//      ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//          ^ meta.class meta.class-method punctuation.definition.parameters.begin
//           ^^^ meta.class meta.class-method variable.parameter.function
//              ^ meta.class meta.class-method punctuation.definition.parameters.end
//                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.end
  get play() {}
//^^^^ meta.class meta.class-accessor storage.type
//    ^^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//        ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//         ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//           ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.class meta.group.braces.curly meta.brace.curly.end
  set play(arg) {}
//^^^^ meta.class meta.class-accessor storage.type
//    ^^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//        ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//         ^^^ meta.class meta.class-accessor variable.parameter.function
//            ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//              ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static play() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.begin
//            ^ meta.class meta.class-method punctuation.definition.parameters.end
//              ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static play(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.begin
//            ^^^ meta.class meta.class-method variable.parameter.function
//               ^ meta.class meta.class-method punctuation.definition.parameters.end
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *play() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//            ^ meta.class meta.class-method punctuation.definition.parameters.begin
//             ^ meta.class meta.class-method punctuation.definition.parameters.end
//               ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *play(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//            ^ meta.class meta.class-method punctuation.definition.parameters.begin
//             ^^^ meta.class meta.class-method variable.parameter.function
//                ^ meta.class meta.class-method punctuation.definition.parameters.end
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async play() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//                 ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                  ^ meta.class meta.class-method punctuation.definition.parameters.end
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async play(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^^^^ meta.class meta.class-method string.unquoted entity.name.function
//                 ^ meta.class meta.class-method punctuation.definition.parameters.begin
//                  ^^^ meta.class meta.class-method variable.parameter.function
//                     ^ meta.class meta.class-method punctuation.definition.parameters.end
//                       ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static get play() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-accessor storage.type
//           ^^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//               ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//                ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static set play(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^ meta.class meta.class-accessor storage.type
//           ^^^^ meta.class meta.class-accessor string.unquoted entity.name.function
//               ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//                ^^^ meta.class meta.class-accessor variable.parameter.function
//                   ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.class meta.group.braces.curly meta.brace.curly.end
  0() {}
//^ meta.class meta.class-method string.unquoted entity.name.function
// ^ meta.class meta.class-method punctuation.definition.parameters.begin
//  ^ meta.class meta.class-method punctuation.definition.parameters.end
//    ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//     ^ meta.class meta.group.braces.curly meta.brace.curly.end
  0(arg) {}
//^ meta.class meta.class-method string.unquoted entity.name.function
// ^ meta.class meta.class-method punctuation.definition.parameters.begin
//  ^^^ meta.class meta.class-method variable.parameter.function
//     ^ meta.class meta.class-method punctuation.definition.parameters.end
//       ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *0() {}
//^ meta.class keyword.generator.asterisk
// ^ meta.class meta.class-method string.unquoted entity.name.function
//  ^ meta.class meta.class-method punctuation.definition.parameters.begin
//   ^ meta.class meta.class-method punctuation.definition.parameters.end
//     ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//      ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *0(arg) {}
//^ meta.class keyword.generator.asterisk
// ^ meta.class meta.class-method string.unquoted entity.name.function
//  ^ meta.class meta.class-method punctuation.definition.parameters.begin
//   ^^^ meta.class meta.class-method variable.parameter.function
//      ^ meta.class meta.class-method punctuation.definition.parameters.end
//        ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async 0() {}
//^^^^^ meta.class storage.type
//      ^ meta.class meta.class-method string.unquoted entity.name.function
//       ^ meta.class meta.class-method punctuation.definition.parameters.begin
//        ^ meta.class meta.class-method punctuation.definition.parameters.end
//          ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async 0(arg) {}
//^^^^^ meta.class storage.type
//      ^ meta.class meta.class-method string.unquoted entity.name.function
//       ^ meta.class meta.class-method punctuation.definition.parameters.begin
//        ^^^ meta.class meta.class-method variable.parameter.function
//           ^ meta.class meta.class-method punctuation.definition.parameters.end
//             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.class meta.group.braces.curly meta.brace.curly.end
  get 0() {}
//^^^^ meta.class meta.class-accessor storage.type
//    ^ meta.class meta.class-accessor string.unquoted entity.name.function
//     ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//      ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//        ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.class meta.group.braces.curly meta.brace.curly.end
  set 0(arg) {}
//^^^^ meta.class meta.class-accessor storage.type
//    ^ meta.class meta.class-accessor string.unquoted entity.name.function
//     ^ meta.class meta.class-accessor punctuation.definition.parameters.begin
//      ^^^ meta.class meta.class-accessor variable.parameter.function
//         ^ meta.class meta.class-accessor punctuation.definition.parameters.end
//           ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static 0() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class meta.class-method string.unquoted entity.name.function
//        ^ meta.class meta.class-method punctuation.definition.parameters.begin
//         ^ meta.class meta.class-method punctuation.definition.parameters.end
//           ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static 0(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class meta.class-method string.unquoted entity.name.function
//        ^ meta.class meta.class-method punctuation.definition.parameters.begin
//         ^^^ meta.class meta.class-method variable.parameter.function
//            ^ meta.class meta.class-method punctuation.definition.parameters.end
//              ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *0() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^ meta.class meta.class-method string.unquoted entity.name.function
//         ^ meta.class meta.class-method punctuation.definition.parameters.begin
//          ^ meta.class meta.class-method punctuation.definition.parameters.end
//            ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *0(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^ meta.class meta.class-method string.unquoted entity.name.function
//         ^ meta.class meta.class-method punctuation.definition.parameters.begin
//          ^^^ meta.class meta.class-method variable.parameter.function
//             ^ meta.class meta.class-method punctuation.definition.parameters.end
//               ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async 0() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^ meta.class meta.class-method string.unquoted entity.name.function
//              ^ meta.class meta.class-method punctuation.definition.parameters.begin
//               ^ meta.class meta.class-method punctuation.definition.parameters.end
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async 0(arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^ meta.class meta.class-method string.unquoted entity.name.function
//              ^ meta.class meta.class-method punctuation.definition.parameters.begin
//               ^^^ meta.class meta.class-method variable.parameter.function
//                  ^ meta.class meta.class-method punctuation.definition.parameters.end
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.end
  [play]() {}
//^ meta.class meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//     ^ meta.class meta.group.braces.square meta.brace.square.end
//      ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//       ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//         ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.class meta.group.braces.curly meta.brace.curly.end
  [play](arg) {}
//^ meta.class meta.group.braces.square meta.brace.square.begin
// ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//     ^ meta.class meta.group.braces.square meta.brace.square.end
//      ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//       ^^^ meta.class meta.class-method.computed variable.parameter.function
//          ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//            ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *[play]() {}
//^ meta.class keyword.generator.asterisk
// ^ meta.class meta.group.braces.square meta.brace.square.begin
//  ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//      ^ meta.class meta.group.braces.square meta.brace.square.end
//       ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//        ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//          ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.class meta.group.braces.curly meta.brace.curly.end
  *[play](arg) {}
//^ meta.class keyword.generator.asterisk
// ^ meta.class meta.group.braces.square meta.brace.square.begin
//  ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//      ^ meta.class meta.group.braces.square meta.brace.square.end
//       ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//        ^^^ meta.class meta.class-method.computed variable.parameter.function
//           ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async [play]() {}
//^^^^^ meta.class storage.type
//      ^ meta.class meta.group.braces.square meta.brace.square.begin
//       ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//           ^ meta.class meta.group.braces.square meta.brace.square.end
//            ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//             ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//               ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.class meta.group.braces.curly meta.brace.curly.end
  async [play](arg) {}
//^^^^^ meta.class storage.type
//      ^ meta.class meta.group.braces.square meta.brace.square.begin
//       ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//           ^ meta.class meta.group.braces.square meta.brace.square.end
//            ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//             ^^^ meta.class meta.class-method.computed variable.parameter.function
//                ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.class meta.group.braces.curly meta.brace.curly.end
  get [play]() {}
//^^^ meta.class storage.type
//    ^ meta.class meta.group.braces.square meta.brace.square.begin
//     ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//         ^ meta.class meta.group.braces.square meta.brace.square.end
//          ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//           ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//             ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.class meta.group.braces.curly meta.brace.curly.end
  set [play](arg) {}
//^^^ meta.class storage.type
//    ^ meta.class meta.group.braces.square meta.brace.square.begin
//     ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//         ^ meta.class meta.group.braces.square meta.brace.square.end
//          ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//           ^^^ meta.class meta.class-method.computed variable.parameter.function
//              ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static [play]() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class meta.group.braces.square meta.brace.square.begin
//        ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//            ^ meta.class meta.group.braces.square meta.brace.square.end
//             ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//              ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static [play](arg) {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class meta.group.braces.square meta.brace.square.begin
//        ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//            ^ meta.class meta.group.braces.square meta.brace.square.end
//             ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//              ^^^ meta.class meta.class-method.computed variable.parameter.function
//                 ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                   ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *[play]() {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^ meta.class meta.group.braces.square meta.brace.square.begin
//         ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//             ^ meta.class meta.group.braces.square meta.brace.square.end
//              ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//               ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                 ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static *[play](arg) {}
//^^^^^^ meta.class storage.modifier
//       ^ meta.class keyword.generator.asterisk
//        ^ meta.class meta.group.braces.square meta.brace.square.begin
//         ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//             ^ meta.class meta.group.braces.square meta.brace.square.end
//              ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//               ^^^ meta.class meta.class-method.computed variable.parameter.function
//                  ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async [play]() {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^ meta.class meta.group.braces.square meta.brace.square.begin
//              ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//                  ^ meta.class meta.group.braces.square meta.brace.square.end
//                   ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                    ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                      ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static async [play](arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^^^ meta.class storage.type
//             ^ meta.class meta.group.braces.square meta.brace.square.begin
//              ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//                  ^ meta.class meta.group.braces.square meta.brace.square.end
//                   ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                    ^^^ meta.class meta.class-method.computed variable.parameter.function
//                       ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                         ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static get [play]() {}
//^^^^^^ meta.class storage.modifier
//       ^^^ meta.class storage.type
//           ^ meta.class meta.group.braces.square meta.brace.square.begin
//            ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//                ^ meta.class meta.group.braces.square meta.brace.square.end
//                 ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                  ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                    ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.class meta.group.braces.curly meta.brace.curly.end
  static set [play](arg) {}
//^^^^^^ meta.class storage.modifier
//       ^^^ meta.class storage.type
//           ^ meta.class meta.group.braces.square meta.brace.square.begin
//            ^^^^ meta.class meta.group.braces.square variable.other.readwrite
//                ^ meta.class meta.group.braces.square meta.brace.square.end
//                 ^ meta.class meta.class-method.computed punctuation.definition.parameters.begin
//                  ^^^ meta.class meta.class-method.computed variable.parameter.function
//                     ^ meta.class meta.class-method.computed punctuation.definition.parameters.end
//                       ^ meta.class meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.class meta.group.braces.curly meta.brace.curly.end
}
//<- meta.class meta.brace.curly.end


Sound
//^^^ variable.other.readwrite
Sound()
//^^^ meta.function-call.without-arguments variable.function
//   ^^ meta.function-call.without-arguments meta.group.braces.round.function.arguments
Sound = {}
//^^^ variable.other.readwrite
//<- source.js
//    ^ keyword.operator.assignment
//      ^ meta.group.braces.curly meta.brace.curly.begin
//       ^ meta.group.braces.curly meta.brace.curly.end
Sound.play
//^^^ meta.property.class variable.other.class
//   ^ meta.property.class keyword.operator.accessor
//    ^^^^ meta.property.class variable.other.property.static
Sound[play]
//^^^ variable.other.object variable.other.object
//   ^ meta.group.braces.square meta.brace.square.begin
//    ^^^^ meta.group.braces.square variable.other.readwrite
//        ^ meta.group.braces.square meta.brace.square.end
Sound.play()
//^^^ meta.function-call.static.without-arguments variable.other.class
//   ^ meta.function-call.static.without-arguments keyword.operator.accessor
//    ^^^^ meta.function-call.static.without-arguments variable.function
//        ^^ meta.function-call.static.without-arguments meta.group.braces.round.function.arguments
Sound[play]()
//^^^ variable.other.object variable.other.object
//   ^ meta.group.braces.square meta.brace.square.begin
//    ^^^^ meta.group.braces.square variable.other.readwrite
//        ^ meta.group.braces.square meta.brace.square.end
//         ^ meta.group.braces.round meta.brace.round.begin
//          ^ meta.group.braces.round meta.brace.round.end
Sound.play = {}
//^^^ meta.property.class variable.other.class
//<- source.js
//   ^ meta.property.class keyword.operator.accessor
//    ^^^^ meta.property.class variable.other.property.static
//         ^ keyword.operator.assignment
//           ^ meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.group.braces.curly meta.brace.curly.end
Sound[play] = {}
//^^^ variable.other.object variable.other.object
//<- source.js
//   ^ meta.group.braces.square meta.brace.square.begin
//    ^^^^ meta.group.braces.square variable.other.readwrite
//        ^ meta.group.braces.square meta.brace.square.end
//          ^ keyword.operator.assignment
//            ^ meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype
//^^^ meta.prototype.access entity.name.class
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
Sound.prototype()
//^^^ meta.prototype.access entity.name.class
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
//             ^ meta.group.braces.round meta.brace.round.begin
//              ^ meta.group.braces.round meta.brace.round.end
Sound.prototype = {}
//^^^^^^^^^^^^^^^^ meta.prototype.declaration
//^^^ meta.prototype.declaration entity.name.class
//   ^ meta.prototype.declaration keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.declaration variable.language.prototype
//              ^ meta.prototype.declaration keyword.operator.assignment
//                ^ meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play
//^^^ meta.prototype.access entity.name.class
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
//             ^ keyword.operator.accessor
//              ^^^^ meta.property.object variable.other.property
Sound.prototype.play()
//^^^ meta.prototype.access entity.name.class
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
//             ^ keyword.operator.accessor
//              ^^^^ meta.function-call.method.without-arguments variable.function
//                  ^^ meta.function-call.method.without-arguments meta.group.braces.round.function.arguments
Sound.prototype[play]()
//^^^ meta.prototype.access entity.name.class
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
//             ^ meta.group.braces.square meta.brace.square.begin
//              ^^^^ meta.group.braces.square variable.other.readwrite
//                  ^ meta.group.braces.square meta.brace.square.end
//                   ^ meta.group.braces.round meta.brace.round.begin
//                    ^ meta.group.braces.round meta.brace.round.end
Sound.prototype.play =
//^^^ meta.prototype.access entity.name.class
//<- source.js
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
//             ^ keyword.operator.accessor
//              ^^^^ meta.property.object variable.other.property
//                   ^ keyword.operator.assignment
Sound.prototype[play] =
//^^^ meta.prototype.access entity.name.class
//<- source.js
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
//             ^ meta.group.braces.square meta.brace.square.begin
//              ^^^^ meta.group.braces.square variable.other.readwrite
//                  ^ meta.group.braces.square meta.brace.square.end
//                    ^ keyword.operator.assignment
Sound.play.repeat
//^^^ meta.property.class variable.other.class
//   ^ meta.property.class keyword.operator.accessor
//    ^^^^ meta.property.class variable.other.property.static
//        ^ keyword.operator.accessor
//         ^^^^^^ meta.property.object variable.other.property
Sound[play].repeat
//^^^ variable.other.object variable.other.object
//   ^ meta.group.braces.square meta.brace.square.begin
//    ^^^^ meta.group.braces.square variable.other.readwrite
//        ^ meta.group.braces.square meta.brace.square.end
//         ^ keyword.operator.accessor
//          ^^^^^^ meta.property.object variable.other.property
Sound.play.repeat()
//^^^ meta.property.class variable.other.class
//   ^ meta.property.class keyword.operator.accessor
//    ^^^^ meta.property.class variable.other.property.static
//        ^ keyword.operator.accessor
//         ^^^^^^ meta.function-call.method.without-arguments variable.function
//               ^^ meta.function-call.method.without-arguments meta.group.braces.round.function.arguments
Sound[play].repeat()
//^^^ variable.other.object variable.other.object
//   ^ meta.group.braces.square meta.brace.square.begin
//    ^^^^ meta.group.braces.square variable.other.readwrite
//        ^ meta.group.braces.square meta.brace.square.end
//         ^ keyword.operator.accessor
//          ^^^^^^ meta.function-call.method.without-arguments variable.function
//                ^^ meta.function-call.method.without-arguments meta.group.braces.round.function.arguments
Sound.play.repeat = {}
//^^^ meta.property.class variable.other.class
//<- source.js
//   ^ meta.property.class keyword.operator.accessor
//    ^^^^ meta.property.class variable.other.property.static
//        ^ keyword.operator.accessor
//         ^^^^^^ meta.property.object variable.other.property
//                ^ keyword.operator.assignment
//                  ^ meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.group.braces.curly meta.brace.curly.end
Sound[play].repeat = {}
//^^^ variable.other.object variable.other.object
//<- source.js
//   ^ meta.group.braces.square meta.brace.square.begin
//    ^^^^ meta.group.braces.square variable.other.readwrite
//        ^ meta.group.braces.square meta.brace.square.end
//         ^ keyword.operator.accessor
//          ^^^^^^ meta.property.object variable.other.property
//                 ^ keyword.operator.assignment
//                   ^ meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.group.braces.curly meta.brace.curly.end


Sound.prototype.play = function() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^^^^ meta.function.prototype storage.type.function
//                             ^ meta.function.prototype punctuation.definition.parameters.begin
//                              ^ meta.function.prototype punctuation.definition.parameters.end
//                                ^ meta.group.braces.curly meta.brace.curly.begin
//                                 ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = function(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^^^^ meta.function.prototype storage.type.function
//                             ^ meta.function.prototype punctuation.definition.parameters.begin
//                              ^^^ meta.function.prototype variable.parameter.function
//                                 ^ meta.function.prototype punctuation.definition.parameters.end
//                                   ^ meta.group.braces.curly meta.brace.curly.begin
//                                    ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = function*() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^^^^ meta.function.prototype storage.type.function
//                             ^ meta.function.prototype keyword.generator.asterisk
//                              ^ meta.function.prototype punctuation.definition.parameters.begin
//                               ^ meta.function.prototype punctuation.definition.parameters.end
//                                 ^ meta.group.braces.curly meta.brace.curly.begin
//                                  ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = function*(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^^^^ meta.function.prototype storage.type.function
//                             ^ meta.function.prototype keyword.generator.asterisk
//                              ^ meta.function.prototype punctuation.definition.parameters.begin
//                               ^^^ meta.function.prototype variable.parameter.function
//                                  ^ meta.function.prototype punctuation.definition.parameters.end
//                                    ^ meta.group.braces.curly meta.brace.curly.begin
//                                     ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = async function() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^ meta.function.prototype storage.type
//                           ^^^^^^^^ meta.function.prototype storage.type.function
//                                   ^ meta.function.prototype punctuation.definition.parameters.begin
//                                    ^ meta.function.prototype punctuation.definition.parameters.end
//                                      ^ meta.group.braces.curly meta.brace.curly.begin
//                                       ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = async function(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^ meta.function.prototype storage.type
//                           ^^^^^^^^ meta.function.prototype storage.type.function
//                                   ^ meta.function.prototype punctuation.definition.parameters.begin
//                                    ^^^ meta.function.prototype variable.parameter.function
//                                       ^ meta.function.prototype punctuation.definition.parameters.end
//                                         ^ meta.group.braces.curly meta.brace.curly.begin
//                                          ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = async function*() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^ meta.function.prototype storage.type
//                           ^^^^^^^^ meta.function.prototype storage.type.function
//                                   ^ meta.function.prototype keyword.generator.asterisk
//                                    ^ meta.function.prototype punctuation.definition.parameters.begin
//                                     ^ meta.function.prototype punctuation.definition.parameters.end
//                                       ^ meta.group.braces.curly meta.brace.curly.begin
//                                        ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = async function*(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^^^ meta.function.prototype entity.name.class
//<- source.js
//   ^ meta.function.prototype keyword.operator.accessor
//    ^^^^^^^^^ meta.function.prototype variable.language.prototype
//             ^ meta.function.prototype keyword.operator.accessor
//              ^^^^ meta.function.prototype entity.name.function
//                   ^ meta.function.prototype keyword.operator.assignment
//                     ^^^^^ meta.function.prototype storage.type
//                           ^^^^^^^^ meta.function.prototype storage.type.function
//                                   ^ meta.function.prototype keyword.generator.asterisk
//                                    ^ meta.function.prototype punctuation.definition.parameters.begin
//                                     ^^^ meta.function.prototype variable.parameter.function
//                                        ^ meta.function.prototype punctuation.definition.parameters.end
//                                          ^ meta.group.braces.curly meta.brace.curly.begin
//                                           ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = async () => {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^^^ meta.prototype.function.arrow entity.name.class
//<- source.js
//   ^ meta.prototype.function.arrow keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//             ^ meta.prototype.function.arrow keyword.operator.accessor
//              ^^^^ meta.prototype.function.arrow entity.name.function
//                   ^ meta.prototype.function.arrow keyword.operator.assignment
//                     ^^^^^ meta.prototype.function.arrow storage.type
//                           ^ meta.prototype.function.arrow punctuation.definition.parameters.begin
//                            ^ meta.prototype.function.arrow punctuation.definition.parameters.end
//                              ^^ meta.prototype.function.arrow storage.type.function.arrow
//                                 ^ meta.group.braces.curly meta.brace.curly.begin
//                                  ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = async (arg) => {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^^^ meta.prototype.function.arrow entity.name.class
//<- source.js
//   ^ meta.prototype.function.arrow keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//             ^ meta.prototype.function.arrow keyword.operator.accessor
//              ^^^^ meta.prototype.function.arrow entity.name.function
//                   ^ meta.prototype.function.arrow keyword.operator.assignment
//                     ^^^^^ meta.prototype.function.arrow storage.type
//                           ^ meta.prototype.function.arrow punctuation.definition.parameters.begin
//                            ^^^ meta.prototype.function.arrow variable.parameter.function
//                               ^ meta.prototype.function.arrow punctuation.definition.parameters.end
//                                 ^^ meta.prototype.function.arrow storage.type.function.arrow
//                                    ^ meta.group.braces.curly meta.brace.curly.begin
//                                     ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = async arg => {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^^^ meta.prototype.function.arrow entity.name.class
//<- source.js
//   ^ meta.prototype.function.arrow keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//             ^ meta.prototype.function.arrow keyword.operator.accessor
//              ^^^^ meta.prototype.function.arrow entity.name.function
//                   ^ meta.prototype.function.arrow keyword.operator.assignment
//                     ^^^^^ meta.prototype.function.arrow storage.type
//                           ^^^ meta.prototype.function.arrow variable.parameter.function
//                               ^^ meta.prototype.function.arrow storage.type.function.arrow
//                                  ^ meta.group.braces.curly meta.brace.curly.begin
//                                   ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = () => {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^^^ meta.prototype.function.arrow entity.name.class
//<- source.js
//   ^ meta.prototype.function.arrow keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//             ^ meta.prototype.function.arrow keyword.operator.accessor
//              ^^^^ meta.prototype.function.arrow entity.name.function
//                   ^ meta.prototype.function.arrow keyword.operator.assignment
//                     ^ meta.prototype.function.arrow punctuation.definition.parameters.begin
//                      ^ meta.prototype.function.arrow punctuation.definition.parameters.end
//                        ^^ meta.prototype.function.arrow storage.type.function.arrow
//                           ^ meta.group.braces.curly meta.brace.curly.begin
//                            ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = (arg) => {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^^^ meta.prototype.function.arrow entity.name.class
//<- source.js
//   ^ meta.prototype.function.arrow keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//             ^ meta.prototype.function.arrow keyword.operator.accessor
//              ^^^^ meta.prototype.function.arrow entity.name.function
//                   ^ meta.prototype.function.arrow keyword.operator.assignment
//                     ^ meta.prototype.function.arrow punctuation.definition.parameters.begin
//                      ^^^ meta.prototype.function.arrow variable.parameter.function
//                         ^ meta.prototype.function.arrow punctuation.definition.parameters.end
//                           ^^ meta.prototype.function.arrow storage.type.function.arrow
//                              ^ meta.group.braces.curly meta.brace.curly.begin
//                               ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.play = arg => {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^^^ meta.prototype.function.arrow entity.name.class
//<- source.js
//   ^ meta.prototype.function.arrow keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//             ^ meta.prototype.function.arrow keyword.operator.accessor
//              ^^^^ meta.prototype.function.arrow entity.name.function
//                   ^ meta.prototype.function.arrow keyword.operator.assignment
//                     ^^^ meta.prototype.function.arrow variable.parameter.function
//                         ^^ meta.prototype.function.arrow storage.type.function.arrow
//                            ^ meta.group.braces.curly meta.brace.curly.begin
//                             ^ meta.group.braces.curly meta.brace.curly.end


Sound.play = function() {}
//^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^^^^ meta.function.static storage.type.function
//                   ^ meta.function.static punctuation.definition.parameters.begin
//                    ^ meta.function.static punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = function(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^^^^ meta.function.static storage.type.function
//                   ^ meta.function.static punctuation.definition.parameters.begin
//                    ^^^ meta.function.static variable.parameter.function
//                       ^ meta.function.static punctuation.definition.parameters.end
//                         ^ meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = function*() {}
//^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^^^^ meta.function.static storage.type.function
//                   ^ meta.function.static keyword.generator.asterisk
//                    ^ meta.function.static punctuation.definition.parameters.begin
//                     ^ meta.function.static punctuation.definition.parameters.end
//                       ^ meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = function*(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^^^^ meta.function.static storage.type.function
//                   ^ meta.function.static keyword.generator.asterisk
//                    ^ meta.function.static punctuation.definition.parameters.begin
//                     ^^^ meta.function.static variable.parameter.function
//                        ^ meta.function.static punctuation.definition.parameters.end
//                          ^ meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = async function() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^ meta.function.static storage.type
//                 ^^^^^^^^ meta.function.static storage.type.function
//                         ^ meta.function.static punctuation.definition.parameters.begin
//                          ^ meta.function.static punctuation.definition.parameters.end
//                            ^ meta.group.braces.curly meta.brace.curly.begin
//                             ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = async function(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^ meta.function.static storage.type
//                 ^^^^^^^^ meta.function.static storage.type.function
//                         ^ meta.function.static punctuation.definition.parameters.begin
//                          ^^^ meta.function.static variable.parameter.function
//                             ^ meta.function.static punctuation.definition.parameters.end
//                               ^ meta.group.braces.curly meta.brace.curly.begin
//                                ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = async function*() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^ meta.function.static storage.type
//                 ^^^^^^^^ meta.function.static storage.type.function
//                         ^ meta.function.static keyword.generator.asterisk
//                          ^ meta.function.static punctuation.definition.parameters.begin
//                           ^ meta.function.static punctuation.definition.parameters.end
//                             ^ meta.group.braces.curly meta.brace.curly.begin
//                              ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = async function*(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^^^ meta.function.static entity.name.class
//<- source.js
//   ^ meta.function.static keyword.operator.accessor
//    ^^^^ meta.function.static entity.name.function
//         ^ meta.function.static keyword.operator.assignment
//           ^^^^^ meta.function.static storage.type
//                 ^^^^^^^^ meta.function.static storage.type.function
//                         ^ meta.function.static keyword.generator.asterisk
//                          ^ meta.function.static punctuation.definition.parameters.begin
//                           ^^^ meta.function.static variable.parameter.function
//                              ^ meta.function.static punctuation.definition.parameters.end
//                                ^ meta.group.braces.curly meta.brace.curly.begin
//                                 ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = async () => {}
//^^^^^^^^^^^^^^^^^^^^^^ meta.function.static.arrow
//^^^ meta.function.static.arrow entity.name.class
//<- source.js
//   ^ meta.function.static.arrow keyword.operator.accessor
//    ^^^^ meta.function.static.arrow entity.name.function
//         ^ meta.function.static.arrow keyword.operator.assignment
//           ^^^^^ meta.function.static.arrow storage.type
//                 ^ meta.function.static.arrow punctuation.definition.parameters.begin
//                  ^ meta.function.static.arrow punctuation.definition.parameters.end
//                    ^^ meta.function.static.arrow storage.type.function.arrow
//                       ^ meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = async (arg) => {}
//^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static.arrow
//^^^ meta.function.static.arrow entity.name.class
//<- source.js
//   ^ meta.function.static.arrow keyword.operator.accessor
//    ^^^^ meta.function.static.arrow entity.name.function
//         ^ meta.function.static.arrow keyword.operator.assignment
//           ^^^^^ meta.function.static.arrow storage.type
//                 ^ meta.function.static.arrow punctuation.definition.parameters.begin
//                  ^^^ meta.function.static.arrow variable.parameter.function
//                     ^ meta.function.static.arrow punctuation.definition.parameters.end
//                       ^^ meta.function.static.arrow storage.type.function.arrow
//                          ^ meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = async arg => {}
//^^^^^^^^^^^^^^^^^^^^^^^ meta.function.static.arrow
//^^^ meta.function.static.arrow entity.name.class
//<- source.js
//   ^ meta.function.static.arrow keyword.operator.accessor
//    ^^^^ meta.function.static.arrow entity.name.function
//         ^ meta.function.static.arrow keyword.operator.assignment
//           ^^^^^ meta.function.static.arrow storage.type
//                 ^^^ meta.function.static.arrow variable.parameter.function
//                     ^^ meta.function.static.arrow storage.type.function.arrow
//                        ^ meta.group.braces.curly meta.brace.curly.begin
//                         ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = () => {}
//^^^^^^^^^^^^^^^^ meta.function.static.arrow
//^^^ meta.function.static.arrow entity.name.class
//<- source.js
//   ^ meta.function.static.arrow keyword.operator.accessor
//    ^^^^ meta.function.static.arrow entity.name.function
//         ^ meta.function.static.arrow keyword.operator.assignment
//           ^ meta.function.static.arrow punctuation.definition.parameters.begin
//            ^ meta.function.static.arrow punctuation.definition.parameters.end
//              ^^ meta.function.static.arrow storage.type.function.arrow
//                 ^ meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = (arg) => {}
//^^^^^^^^^^^^^^^^^^^ meta.function.static.arrow
//^^^ meta.function.static.arrow entity.name.class
//<- source.js
//   ^ meta.function.static.arrow keyword.operator.accessor
//    ^^^^ meta.function.static.arrow entity.name.function
//         ^ meta.function.static.arrow keyword.operator.assignment
//           ^ meta.function.static.arrow punctuation.definition.parameters.begin
//            ^^^ meta.function.static.arrow variable.parameter.function
//               ^ meta.function.static.arrow punctuation.definition.parameters.end
//                 ^^ meta.function.static.arrow storage.type.function.arrow
//                    ^ meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.brace.curly.end
Sound.play = arg => {}
//^^^^^^^^^^^^^^^^^ meta.function.static.arrow
//^^^ meta.function.static.arrow entity.name.class
//<- source.js
//   ^ meta.function.static.arrow keyword.operator.accessor
//    ^^^^ meta.function.static.arrow entity.name.function
//         ^ meta.function.static.arrow keyword.operator.assignment
//           ^^^ meta.function.static.arrow variable.parameter.function
//               ^^ meta.function.static.arrow storage.type.function.arrow
//                  ^ meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.group.braces.curly meta.brace.curly.end

play = function() {}
//^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function punctuation.definition.parameters.begin
//              ^ meta.function punctuation.definition.parameters.end
//                ^ meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.group.braces.curly meta.brace.curly.end
play = function(arg) {}
//^^^^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function punctuation.definition.parameters.begin
//              ^^^ meta.function variable.parameter.function
//                 ^ meta.function punctuation.definition.parameters.end
//                   ^ meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.group.braces.curly meta.brace.curly.end
play = function*() {}
//^^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function keyword.generator.asterisk
//              ^ meta.function punctuation.definition.parameters.begin
//               ^ meta.function punctuation.definition.parameters.end
//                 ^ meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.brace.curly.end
play = function*(arg) {}
//^^^^^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function keyword.generator.asterisk
//              ^ meta.function punctuation.definition.parameters.begin
//               ^^^ meta.function variable.parameter.function
//                  ^ meta.function punctuation.definition.parameters.end
//                    ^ meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.brace.curly.end
play = async function() {}
//^^^^^^^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function punctuation.definition.parameters.begin
//                    ^ meta.function punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.brace.curly.end
play = async function(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function punctuation.definition.parameters.begin
//                    ^^^ meta.function variable.parameter.function
//                       ^ meta.function punctuation.definition.parameters.end
//                         ^ meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.brace.curly.end
play = async function*() {}
//^^^^^^^^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function keyword.generator.asterisk
//                    ^ meta.function punctuation.definition.parameters.begin
//                     ^ meta.function punctuation.definition.parameters.end
//                       ^ meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.brace.curly.end
play = async function*(arg) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//^^ meta.function entity.name.function
//<- source.js
//   ^ meta.function keyword.operator.assignment
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function keyword.generator.asterisk
//                    ^ meta.function punctuation.definition.parameters.begin
//                     ^^^ meta.function variable.parameter.function
//                        ^ meta.function punctuation.definition.parameters.end
//                          ^ meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.group.braces.curly meta.brace.curly.end
play = async () => {}
//^^^^^^^^^^^^^^^^ meta.function.arrow
//^^ meta.function.arrow entity.name.function
//<- source.js
//   ^ meta.function.arrow keyword.operator.assignment
//     ^^^^^ meta.function.arrow storage.type
//           ^ meta.function.arrow punctuation.definition.parameters.begin
//            ^ meta.function.arrow punctuation.definition.parameters.end
//              ^^ meta.function.arrow storage.type.function.arrow
//                 ^ meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.brace.curly.end
play = async (arg) => {}
//^^^^^^^^^^^^^^^^^^^ meta.function.arrow
//^^ meta.function.arrow entity.name.function
//<- source.js
//   ^ meta.function.arrow keyword.operator.assignment
//     ^^^^^ meta.function.arrow storage.type
//           ^ meta.function.arrow punctuation.definition.parameters.begin
//            ^^^ meta.function.arrow variable.parameter.function
//               ^ meta.function.arrow punctuation.definition.parameters.end
//                 ^^ meta.function.arrow storage.type.function.arrow
//                    ^ meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.brace.curly.end
play = async arg => {}
//^^^^^^^^^^^^^^^^^ meta.function.arrow
//^^ meta.function.arrow entity.name.function
//<- source.js
//   ^ meta.function.arrow keyword.operator.assignment
//     ^^^^^ meta.function.arrow storage.type
//           ^^^ meta.function.arrow variable.parameter.function
//               ^^ meta.function.arrow storage.type.function.arrow
//                  ^ meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.group.braces.curly meta.brace.curly.end
play = () => {}
//^^^^^^^^^^ meta.function.arrow
//^^ meta.function.arrow entity.name.function
//<- source.js
//   ^ meta.function.arrow keyword.operator.assignment
//     ^ meta.function.arrow punctuation.definition.parameters.begin
//      ^ meta.function.arrow punctuation.definition.parameters.end
//        ^^ meta.function.arrow storage.type.function.arrow
//           ^ meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.group.braces.curly meta.brace.curly.end
play = (arg) => {}
//^^^^^^^^^^^^^ meta.function.arrow
//^^ meta.function.arrow entity.name.function
//<- source.js
//   ^ meta.function.arrow keyword.operator.assignment
//     ^ meta.function.arrow punctuation.definition.parameters.begin
//      ^^^ meta.function.arrow variable.parameter.function
//         ^ meta.function.arrow punctuation.definition.parameters.end
//           ^^ meta.function.arrow storage.type.function.arrow
//              ^ meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.group.braces.curly meta.brace.curly.end
play = arg => {}
//^^^^^^^^^^^ meta.function.arrow
//^^ meta.function.arrow entity.name.function
//<- source.js
//   ^ meta.function.arrow keyword.operator.assignment
//     ^^^ meta.function.arrow variable.parameter.function
//         ^^ meta.function.arrow storage.type.function.arrow
//            ^ meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.group.braces.curly meta.brace.curly.end


return function() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function punctuation.definition.parameters.begin
//              ^ meta.function punctuation.definition.parameters.end
//                ^ meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.group.braces.curly meta.brace.curly.end
return function(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function punctuation.definition.parameters.begin
//              ^^^ meta.function variable.parameter.function
//                 ^ meta.function punctuation.definition.parameters.end
//                   ^ meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.group.braces.curly meta.brace.curly.end
return function*() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function keyword.generator.asterisk
//              ^ meta.function punctuation.definition.parameters.begin
//               ^ meta.function punctuation.definition.parameters.end
//                 ^ meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.brace.curly.end
return function*(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function keyword.generator.asterisk
//              ^ meta.function punctuation.definition.parameters.begin
//               ^^^ meta.function variable.parameter.function
//                  ^ meta.function punctuation.definition.parameters.end
//                    ^ meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.brace.curly.end
return async function() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function punctuation.definition.parameters.begin
//                    ^ meta.function punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.brace.curly.end
return async function(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function punctuation.definition.parameters.begin
//                    ^^^ meta.function variable.parameter.function
//                       ^ meta.function punctuation.definition.parameters.end
//                         ^ meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.brace.curly.end
return async function*() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function keyword.generator.asterisk
//                    ^ meta.function punctuation.definition.parameters.begin
//                     ^ meta.function punctuation.definition.parameters.end
//                       ^ meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.brace.curly.end
return async function*(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function keyword.generator.asterisk
//                    ^ meta.function punctuation.definition.parameters.begin
//                     ^^^ meta.function variable.parameter.function
//                        ^ meta.function punctuation.definition.parameters.end
//                          ^ meta.group.braces.curly meta.brace.curly.begin
//                           ^ meta.group.braces.curly meta.brace.curly.end
return async () => {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^ meta.function.arrow
//     ^^^^^ meta.function.arrow storage.type
//           ^ meta.function.arrow punctuation.definition.parameters.begin
//            ^ meta.function.arrow punctuation.definition.parameters.end
//              ^^ meta.function.arrow storage.type.function.arrow
//                 ^ meta.group.braces.curly meta.brace.curly.begin
//                  ^ meta.group.braces.curly meta.brace.curly.end
return async (arg) => {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^ meta.function.arrow
//     ^^^^^ meta.function.arrow storage.type
//           ^ meta.function.arrow punctuation.definition.parameters.begin
//            ^^^ meta.function.arrow variable.parameter.function
//               ^ meta.function.arrow punctuation.definition.parameters.end
//                 ^^ meta.function.arrow storage.type.function.arrow
//                    ^ meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.brace.curly.end
return async arg => {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^ meta.function.arrow
//     ^^^^^ meta.function.arrow storage.type
//           ^^^ meta.function.arrow variable.parameter.function
//               ^^ meta.function.arrow storage.type.function.arrow
//                  ^ meta.group.braces.curly meta.brace.curly.begin
//                   ^ meta.group.braces.curly meta.brace.curly.end
return () => {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^ meta.function.arrow
//     ^ meta.function.arrow punctuation.definition.parameters.begin
//      ^ meta.function.arrow punctuation.definition.parameters.end
//        ^^ meta.function.arrow storage.type.function.arrow
//           ^ meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.group.braces.curly meta.brace.curly.end
return (arg) => {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^ meta.function.arrow
//     ^ meta.function.arrow punctuation.definition.parameters.begin
//      ^^^ meta.function.arrow variable.parameter.function
//         ^ meta.function.arrow punctuation.definition.parameters.end
//           ^^ meta.function.arrow storage.type.function.arrow
//              ^ meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.group.braces.curly meta.brace.curly.end
return arg => {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^ meta.function.arrow
//     ^^^ meta.function.arrow variable.parameter.function
//         ^^ meta.function.arrow storage.type.function.arrow
//            ^ meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.group.braces.curly meta.brace.curly.end

return function play() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^ meta.function
//     ^^^^^^^^ meta.function storage.type.function
//              ^^^^ meta.function entity.name.function
//                  ^ meta.function punctuation.definition.parameters.begin
//                   ^ meta.function punctuation.definition.parameters.end
//                     ^ meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.group.braces.curly meta.brace.curly.end
return function play(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^^^^ meta.function storage.type.function
//              ^^^^ meta.function entity.name.function
//                  ^ meta.function punctuation.definition.parameters.begin
//                   ^^^ meta.function variable.parameter.function
//                      ^ meta.function punctuation.definition.parameters.end
//                        ^ meta.group.braces.curly meta.brace.curly.begin
//                         ^ meta.group.braces.curly meta.brace.curly.end
return function* play() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function keyword.generator.asterisk
//               ^^^^ meta.function entity.name.function
//                   ^ meta.function punctuation.definition.parameters.begin
//                    ^ meta.function punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.brace.curly.end
return function* play(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^^^^ meta.function storage.type.function
//             ^ meta.function keyword.generator.asterisk
//               ^^^^ meta.function entity.name.function
//                   ^ meta.function punctuation.definition.parameters.begin
//                    ^^^ meta.function variable.parameter.function
//                       ^ meta.function punctuation.definition.parameters.end
//                         ^ meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.brace.curly.end
return async function play() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                    ^^^^ meta.function entity.name.function
//                        ^ meta.function punctuation.definition.parameters.begin
//                         ^ meta.function punctuation.definition.parameters.end
//                           ^ meta.group.braces.curly meta.brace.curly.begin
//                            ^ meta.group.braces.curly meta.brace.curly.end
return async function play(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                    ^^^^ meta.function entity.name.function
//                        ^ meta.function punctuation.definition.parameters.begin
//                         ^^^ meta.function variable.parameter.function
//                            ^ meta.function punctuation.definition.parameters.end
//                              ^ meta.group.braces.curly meta.brace.curly.begin
//                               ^ meta.group.braces.curly meta.brace.curly.end
return async function* play() {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function keyword.generator.asterisk
//                     ^^^^ meta.function entity.name.function
//                         ^ meta.function punctuation.definition.parameters.begin
//                          ^ meta.function punctuation.definition.parameters.end
//                            ^ meta.group.braces.curly meta.brace.curly.begin
//                             ^ meta.group.braces.curly meta.brace.curly.end
return async function* play(arg) {}
//^^^^ keyword.control.flow
//<- source.js
//     ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//     ^^^^^ meta.function storage.type
//           ^^^^^^^^ meta.function storage.type.function
//                   ^ meta.function keyword.generator.asterisk
//                     ^^^^ meta.function entity.name.function
//                         ^ meta.function punctuation.definition.parameters.begin
//                          ^^^ meta.function variable.parameter.function
//                             ^ meta.function punctuation.definition.parameters.end
//                               ^ meta.group.braces.curly meta.brace.curly.begin
//                                ^ meta.group.braces.curly meta.brace.curly.end

yield genfunc;
//^^^ keyword.control.flow
//<- source.js
//    ^^^^^^^ variable.other.readwrite
//           ^ punctuation.terminator.statement
yield* genfunc;
//^^^ keyword.control.flow
//<- source.js
//   ^ keyword.generator.asterisk
//     ^^^^^^^ variable.other.readwrite
//            ^ punctuation.terminator.statement


/**
 * Not matched as function definitions
 */

Sound[play] = function(){}
//^^^ variable.other.object variable.other.object
//<- source.js
//   ^ meta.group.braces.square meta.brace.square.begin
//    ^^^^ meta.group.braces.square variable.other.readwrite
//        ^ meta.group.braces.square meta.brace.square.end
//          ^ keyword.operator.assignment
//            ^^^^^^^^ meta.function storage.type.function
//                    ^ meta.function punctuation.definition.parameters.begin
//                     ^ meta.function punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.brace.curly.end
Sound.prototype.[play] = function(){}
//^^^ meta.prototype.access entity.name.class
//<- source.js
//   ^ meta.prototype.access keyword.operator.accessor
//    ^^^^^^^^^ meta.prototype.access variable.language.prototype
//             ^ keyword.operator.accessor
//              ^ meta.group.braces.square meta.brace.square.begin
//               ^^^^ meta.group.braces.square variable.other.readwrite
//                   ^ meta.group.braces.square meta.brace.square.end
//                     ^ keyword.operator.assignment
//                       ^^^^^^^^ meta.function storage.type.function
//                               ^ meta.function punctuation.definition.parameters.begin
//                                ^ meta.function punctuation.definition.parameters.end
//                                 ^ meta.group.braces.curly meta.brace.curly.begin
//                                  ^ meta.group.braces.curly meta.brace.curly.end


A = function() {}
//^^^^^^^^^^^^ meta.function
//^ meta.function keyword.operator.assignment
//<- source.js
//<- meta.function entity.name.function
//  ^^^^^^^^ meta.function storage.type.function
//          ^ meta.function punctuation.definition.parameters.begin
//           ^ meta.function punctuation.definition.parameters.end
//             ^ meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.group.braces.curly meta.brace.curly.end
B = function(z) {}
//^^^^^^^^^^^^^ meta.function
//^ meta.function keyword.operator.assignment
//<- source.js
//<- meta.function entity.name.function
//  ^^^^^^^^ meta.function storage.type.function
//          ^ meta.function punctuation.definition.parameters.begin
//           ^ meta.function variable.parameter.function
//            ^ meta.function punctuation.definition.parameters.end
//              ^ meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.group.braces.curly meta.brace.curly.end
C = function c() {}
//^^^^^^^^^^^^^^ meta.function
//^ meta.function keyword.operator.assignment
//<- source.js
//<- meta.function entity.name.function
//  ^^^^^^^^ meta.function storage.type.function
//           ^ meta.function entity.name.function
//            ^ meta.function punctuation.definition.parameters.begin
//             ^ meta.function punctuation.definition.parameters.end
//               ^ meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.group.braces.curly meta.brace.curly.end
D = function d(z) {}
//^^^^^^^^^^^^^^^ meta.function
//^ meta.function keyword.operator.assignment
//<- source.js
//<- meta.function entity.name.function
//  ^^^^^^^^ meta.function storage.type.function
//           ^ meta.function entity.name.function
//            ^ meta.function punctuation.definition.parameters.begin
//             ^ meta.function variable.parameter.function
//              ^ meta.function punctuation.definition.parameters.end
//                ^ meta.group.braces.curly meta.brace.curly.begin
//                 ^ meta.group.braces.curly meta.brace.curly.end
E = () => {}
//^^^^^^^ meta.function.arrow
//^ meta.function.arrow keyword.operator.assignment
//<- source.js
//<- meta.function.arrow entity.name.function
//  ^ meta.function.arrow punctuation.definition.parameters.begin
//   ^ meta.function.arrow punctuation.definition.parameters.end
//     ^^ meta.function.arrow storage.type.function.arrow
//        ^ meta.group.braces.curly meta.brace.curly.begin
//         ^ meta.group.braces.curly meta.brace.curly.end
F = (z) => {}
//^^^^^^^^ meta.function.arrow
//^ meta.function.arrow keyword.operator.assignment
//<- source.js
//<- meta.function.arrow entity.name.function
//  ^ meta.function.arrow punctuation.definition.parameters.begin
//   ^ meta.function.arrow variable.parameter.function
//    ^ meta.function.arrow punctuation.definition.parameters.end
//      ^^ meta.function.arrow storage.type.function.arrow
//         ^ meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.group.braces.curly meta.brace.curly.end
G = z => {}
//^^^^^^ meta.function.arrow
//^ meta.function.arrow keyword.operator.assignment
//<- source.js
//<- meta.function.arrow entity.name.function
//  ^ meta.function.arrow variable.parameter.function
//    ^^ meta.function.arrow storage.type.function.arrow
//       ^ meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.group.braces.curly meta.brace.curly.end
function() {}
//^^^^^^ meta.function storage.type.function
//<- source.js
//      ^ meta.function punctuation.definition.parameters.begin
//       ^ meta.function punctuation.definition.parameters.end
//         ^ meta.group.braces.curly meta.brace.curly.begin
//          ^ meta.group.braces.curly meta.brace.curly.end
function(z) {}
//^^^^^^ meta.function storage.type.function
//<- source.js
//      ^ meta.function punctuation.definition.parameters.begin
//       ^ meta.function variable.parameter.function
//        ^ meta.function punctuation.definition.parameters.end
//          ^ meta.group.braces.curly meta.brace.curly.begin
//           ^ meta.group.braces.curly meta.brace.curly.end
function H() {}
//^^^^^^^^^^ meta.function
//^^^^^^ meta.function storage.type.function
//<- source.js
//       ^ meta.function entity.name.function
//        ^ meta.function punctuation.definition.parameters.begin
//         ^ meta.function punctuation.definition.parameters.end
//           ^ meta.group.braces.curly meta.brace.curly.begin
//            ^ meta.group.braces.curly meta.brace.curly.end
function I(z) {}
//^^^^^^^^^^^ meta.function
//^^^^^^ meta.function storage.type.function
//<- source.js
//       ^ meta.function entity.name.function
//        ^ meta.function punctuation.definition.parameters.begin
//         ^ meta.function variable.parameter.function
//          ^ meta.function punctuation.definition.parameters.end
//            ^ meta.group.braces.curly meta.brace.curly.begin
//             ^ meta.group.braces.curly meta.brace.curly.end

() => {}
//^^^ meta.function.arrow
//<- source.js
// ^^ meta.function.arrow storage.type.function.arrow
//    ^ meta.group.braces.curly meta.brace.curly.begin
//     ^ meta.group.braces.curly meta.brace.curly.end

(zzz) => {}
//^^^^^^ meta.function.arrow
//^ meta.function.arrow variable.parameter.function
//<- source.js
//<- meta.function.arrow punctuation.definition.parameters.begin
//  ^ meta.function.arrow punctuation.definition.parameters.end
//    ^^ meta.function.arrow storage.type.function.arrow
//       ^ meta.group.braces.curly meta.brace.curly.begin
//        ^ meta.group.braces.curly meta.brace.curly.end

JJJ.prototype.jjj = () => {}
//^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^ meta.prototype.function.arrow entity.name.class
//<- source.js
// ^ meta.prototype.function.arrow keyword.operator.accessor
//  ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//           ^ meta.prototype.function.arrow keyword.operator.accessor
//            ^^^ meta.prototype.function.arrow entity.name.function
//                ^ meta.prototype.function.arrow keyword.operator.assignment
//                  ^ meta.prototype.function.arrow punctuation.definition.parameters.begin
//                   ^ meta.prototype.function.arrow punctuation.definition.parameters.end
//                     ^^ meta.prototype.function.arrow storage.type.function.arrow
//                        ^ meta.group.braces.curly meta.brace.curly.begin
//                         ^ meta.group.braces.curly meta.brace.curly.end

KKK.prototype.kkk = (z) => {}
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^ meta.prototype.function.arrow entity.name.class
//<- source.js
// ^ meta.prototype.function.arrow keyword.operator.accessor
//  ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//           ^ meta.prototype.function.arrow keyword.operator.accessor
//            ^^^ meta.prototype.function.arrow entity.name.function
//                ^ meta.prototype.function.arrow keyword.operator.assignment
//                  ^ meta.prototype.function.arrow punctuation.definition.parameters.begin
//                   ^ meta.prototype.function.arrow variable.parameter.function
//                    ^ meta.prototype.function.arrow punctuation.definition.parameters.end
//                      ^^ meta.prototype.function.arrow storage.type.function.arrow
//                         ^ meta.group.braces.curly meta.brace.curly.begin
//                          ^ meta.group.braces.curly meta.brace.curly.end

LLL.prototype.lll = z => {}
//^^^^^^^^^^^^^^^^^^^^^^ meta.prototype.function.arrow
//^ meta.prototype.function.arrow entity.name.class
//<- source.js
// ^ meta.prototype.function.arrow keyword.operator.accessor
//  ^^^^^^^^^ meta.prototype.function.arrow variable.language.prototype
//           ^ meta.prototype.function.arrow keyword.operator.accessor
//            ^^^ meta.prototype.function.arrow entity.name.function
//                ^ meta.prototype.function.arrow keyword.operator.assignment
//                  ^ meta.prototype.function.arrow variable.parameter.function
//                    ^^ meta.prototype.function.arrow storage.type.function.arrow
//                       ^ meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.brace.curly.end

MMM.prototype.mmm = function() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^ meta.function.prototype entity.name.class
//<- source.js
// ^ meta.function.prototype keyword.operator.accessor
//  ^^^^^^^^^ meta.function.prototype variable.language.prototype
//           ^ meta.function.prototype keyword.operator.accessor
//            ^^^ meta.function.prototype entity.name.function
//                ^ meta.function.prototype keyword.operator.assignment
//                  ^^^^^^^^ meta.function.prototype storage.type.function
//                          ^ meta.function.prototype punctuation.definition.parameters.begin
//                           ^ meta.function.prototype punctuation.definition.parameters.end
//                             ^ meta.group.braces.curly meta.brace.curly.begin
//                              ^ meta.group.braces.curly meta.brace.curly.end

NNN.prototype.nnn = function(z) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^ meta.function.prototype entity.name.class
//<- source.js
// ^ meta.function.prototype keyword.operator.accessor
//  ^^^^^^^^^ meta.function.prototype variable.language.prototype
//           ^ meta.function.prototype keyword.operator.accessor
//            ^^^ meta.function.prototype entity.name.function
//                ^ meta.function.prototype keyword.operator.assignment
//                  ^^^^^^^^ meta.function.prototype storage.type.function
//                          ^ meta.function.prototype punctuation.definition.parameters.begin
//                           ^ meta.function.prototype variable.parameter.function
//                            ^ meta.function.prototype punctuation.definition.parameters.end
//                              ^ meta.group.braces.curly meta.brace.curly.begin
//                               ^ meta.group.braces.curly meta.brace.curly.end

OOO.prototype.ooo = function oo() {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^ meta.function.prototype entity.name.class
//<- source.js
// ^ meta.function.prototype keyword.operator.accessor
//  ^^^^^^^^^ meta.function.prototype variable.language.prototype
//           ^ meta.function.prototype keyword.operator.accessor
//            ^^^ meta.function.prototype entity.name.function
//                ^ meta.function.prototype keyword.operator.assignment
//                  ^^^^^^^^ meta.function.prototype storage.type.function
//                           ^^ meta.function.prototype entity.name.function
//                             ^ meta.function.prototype punctuation.definition.parameters.begin
//                              ^ meta.function.prototype punctuation.definition.parameters.end
//                                ^ meta.group.braces.curly meta.brace.curly.begin
//                                 ^ meta.group.braces.curly meta.brace.curly.end

PPP.prototype.ppp = function pp(z) {}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.prototype
//^ meta.function.prototype entity.name.class
//<- source.js
// ^ meta.function.prototype keyword.operator.accessor
//  ^^^^^^^^^ meta.function.prototype variable.language.prototype
//           ^ meta.function.prototype keyword.operator.accessor
//            ^^^ meta.function.prototype entity.name.function
//                ^ meta.function.prototype keyword.operator.assignment
//                  ^^^^^^^^ meta.function.prototype storage.type.function
//                           ^^ meta.function.prototype entity.name.function
//                             ^ meta.function.prototype punctuation.definition.parameters.begin
//                              ^ meta.function.prototype variable.parameter.function
//                               ^ meta.function.prototype punctuation.definition.parameters.end
//                                 ^ meta.group.braces.curly meta.brace.curly.begin
//                                  ^ meta.group.braces.curly meta.brace.curly.end

QQQ.qqq = () => {}
//^^^^^^^^^^^^^ meta.function.static.arrow
//^ meta.function.static.arrow entity.name.class
//<- source.js
// ^ meta.function.static.arrow keyword.operator.accessor
//  ^^^ meta.function.static.arrow entity.name.function
//      ^ meta.function.static.arrow keyword.operator.assignment
//        ^ meta.function.static.arrow punctuation.definition.parameters.begin
//         ^ meta.function.static.arrow punctuation.definition.parameters.end
//           ^^ meta.function.static.arrow storage.type.function.arrow
//              ^ meta.group.braces.curly meta.brace.curly.begin
//               ^ meta.group.braces.curly meta.brace.curly.end

RRR.rrr = (z) => {}
//^^^^^^^^^^^^^^ meta.function.static.arrow
//^ meta.function.static.arrow entity.name.class
//<- source.js
// ^ meta.function.static.arrow keyword.operator.accessor
//  ^^^ meta.function.static.arrow entity.name.function
//      ^ meta.function.static.arrow keyword.operator.assignment
//        ^ meta.function.static.arrow punctuation.definition.parameters.begin
//         ^ meta.function.static.arrow variable.parameter.function
//          ^ meta.function.static.arrow punctuation.definition.parameters.end
//            ^^ meta.function.static.arrow storage.type.function.arrow
//               ^ meta.group.braces.curly meta.brace.curly.begin
//                ^ meta.group.braces.curly meta.brace.curly.end

SSS.sss = z => {}
//^^^^^^^^^^^^ meta.function.static.arrow
//^ meta.function.static.arrow entity.name.class
//<- source.js
// ^ meta.function.static.arrow keyword.operator.accessor
//  ^^^ meta.function.static.arrow entity.name.function
//      ^ meta.function.static.arrow keyword.operator.assignment
//        ^ meta.function.static.arrow variable.parameter.function
//          ^^ meta.function.static.arrow storage.type.function.arrow
//             ^ meta.group.braces.curly meta.brace.curly.begin
//              ^ meta.group.braces.curly meta.brace.curly.end

TTT.ttt = function() {}
//^^^^^^^^^^^^^^^^^^ meta.function.static
//^ meta.function.static entity.name.class
//<- source.js
// ^ meta.function.static keyword.operator.accessor
//  ^^^ meta.function.static entity.name.function
//      ^ meta.function.static keyword.operator.assignment
//        ^^^^^^^^ meta.function.static storage.type.function
//                ^ meta.function.static punctuation.definition.parameters.begin
//                 ^ meta.function.static punctuation.definition.parameters.end
//                   ^ meta.group.braces.curly meta.brace.curly.begin
//                    ^ meta.group.braces.curly meta.brace.curly.end

UUU.uuu = function(z) {}
//^^^^^^^^^^^^^^^^^^^ meta.function.static
//^ meta.function.static entity.name.class
//<- source.js
// ^ meta.function.static keyword.operator.accessor
//  ^^^ meta.function.static entity.name.function
//      ^ meta.function.static keyword.operator.assignment
//        ^^^^^^^^ meta.function.static storage.type.function
//                ^ meta.function.static punctuation.definition.parameters.begin
//                 ^ meta.function.static variable.parameter.function
//                  ^ meta.function.static punctuation.definition.parameters.end
//                    ^ meta.group.braces.curly meta.brace.curly.begin
//                     ^ meta.group.braces.curly meta.brace.curly.end

VVV.vvv = function vv() {}
//^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^ meta.function.static entity.name.class
//<- source.js
// ^ meta.function.static keyword.operator.accessor
//  ^^^ meta.function.static entity.name.function
//      ^ meta.function.static keyword.operator.assignment
//        ^^^^^^^^ meta.function.static storage.type.function
//                 ^^ meta.function.static entity.name.function
//                   ^ meta.function.static punctuation.definition.parameters.begin
//                    ^ meta.function.static punctuation.definition.parameters.end
//                      ^ meta.group.braces.curly meta.brace.curly.begin
//                       ^ meta.group.braces.curly meta.brace.curly.end

WWW.www = function ww(z) {}
//^^^^^^^^^^^^^^^^^^^^^^ meta.function.static
//^ meta.function.static entity.name.class
//<- source.js
// ^ meta.function.static keyword.operator.accessor
//  ^^^ meta.function.static entity.name.function
//      ^ meta.function.static keyword.operator.assignment
//        ^^^^^^^^ meta.function.static storage.type.function
//                 ^^ meta.function.static entity.name.function
//                   ^ meta.function.static punctuation.definition.parameters.begin
//                    ^ meta.function.static variable.parameter.function
//                     ^ meta.function.static punctuation.definition.parameters.end
//                       ^ meta.group.braces.curly meta.brace.curly.begin
//                        ^ meta.group.braces.curly meta.brace.curly.end


class X extends XX {}
//^^^^^^^^^^^^^^^^^^^ meta.class
//^^^ meta.class storage.type.class
//    ^ meta.class entity.name.class
//      ^^^^^^^^^^^ meta.class meta.class.extends
//      ^^^^^^^ meta.class meta.class.extends storage.type.extends
//              ^^ meta.class meta.class.extends variable.other.constant
//                 ^ meta.class meta.brace.curly.begin
//                  ^ meta.class meta.brace.curly.end
class Y {}
//^^^^^^^^ meta.class
//^^^ meta.class storage.type.class
//    ^ meta.class entity.name.class
//      ^ meta.class meta.brace.curly.begin
//       ^ meta.class meta.brace.curly.end


var node = Relay.QL`node(123) {${Relay.QL`User {address {${fragment}, }, } `} }`;
//^ storage.type
//<- source.js
//  ^^^^ variable.other.readwrite
//       ^ keyword.operator.assignment
//         ^^^^^ meta.property.class variable.other.class
//              ^ meta.property.class keyword.operator.accessor
//               ^^ meta.property.class variable.other.property.static
//                 ^^^^^^^^^^^^ string.interpolated
//                 ^ string.interpolated keyword.other.template.begin
//                             ^^ keyword.other.substitution.begin
//                               ^^^^^ meta.property.class variable.other.class
//                                    ^ meta.property.class keyword.operator.accessor
//                                     ^^ meta.property.class variable.other.property.static
//                                       ^^^^^^^^^^^^^^^^ string.interpolated
//                                       ^ string.interpolated keyword.other.template.begin
//                                                       ^^ keyword.other.substitution.begin
//                                                         ^^^^^^^^ variable.other.readwrite
//                                                                 ^ keyword.other.substitution.end
//                                                                  ^^^^^^^^ string.interpolated
//                                                                         ^ string.interpolated keyword.other.template.end
//                                                                          ^ keyword.other.substitution.end
//                                                                           ^^^ string.interpolated
//                                                                             ^ string.interpolated keyword.other.template.end
//                                                                              ^ punctuation.terminator.statement
