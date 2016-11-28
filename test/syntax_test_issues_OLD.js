// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).tmLanguage"

/* https://github.com/babel/babel-sublime/issues/243 */

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
