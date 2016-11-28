// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).tmLanguage"

var a = b<cat()
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//       ^ keyword.operator.relational
//        ^^^ meta.function-call.without-arguments variable.function
//           ^^ meta.function-call.without-arguments meta.group.braces.round.function.arguments
var a = b < cat()
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//          ^^^ meta.function-call.without-arguments variable.function
//             ^^ meta.function-call.without-arguments meta.group.braces.round.function.arguments
var a = b <cat[1]
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.object variable.other.object
//            ^ meta.group.braces.square meta.brace.square.begin
//             ^ meta.group.braces.square constant.numeric
//              ^ meta.group.braces.square meta.brace.square.end
var a = b < cat[1]
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//          ^^^ variable.other.object variable.other.object
//             ^ meta.group.braces.square meta.brace.square.begin
//              ^ meta.group.braces.square constant.numeric
//               ^ meta.group.braces.square meta.brace.square.end
var a = b <cat?
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^ keyword.operator.ternary
var a = b <cat ?
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//             ^ keyword.operator.ternary
var a = b < cat?
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//          ^^^ variable.other.readwrite
//             ^ keyword.operator.ternary
var a = b <cat===
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^^^ keyword.operator.comparison
var a = b < cat===
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//          ^^^ variable.other.readwrite
//             ^^^ keyword.operator.comparison
var a = b <cat&
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^ keyword.operator.bitwise
var a = b < cat&&
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//          ^^^ variable.other.readwrite
//             ^^ keyword.operator.logical
var a = b <cat++
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^^ keyword.operator.arithmetic
var a = b < cat++
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//          ^^^ variable.other.readwrite
//             ^^ keyword.operator.arithmetic
var a = b <cat--
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^^ keyword.operator.arithmetic
var a = b < cat--
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//          ^^^ variable.other.readwrite
//             ^^ keyword.operator.arithmetic

var a = b <cat /*comment*/ />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//             ^^^^^^^^^^^ comment.block
//             ^^ comment.block punctuation.definition.comment.begin
//                      ^^ comment.block punctuation.definition.comment.end
//                        ^^^^^ string.regexp
//                         ^ string.regexp punctuation.definition.string.begin

/
//<- string.regexp punctuation.definition.string.end

var a = b <cat />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//             ^ keyword.operator.arithmetic
//              ^ keyword.operator.relational

var a = b <cat/>
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^ keyword.operator.arithmetic
//             ^ keyword.operator.relational

var a = b <cat-dog />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^ keyword.operator.arithmetic
//             ^^^ variable.other.readwrite
//                 ^ keyword.operator.arithmetic
//                  ^ keyword.operator.relational

var a = b <cat-dog/>
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^ keyword.operator.arithmetic
//             ^^^ variable.other.readwrite
//                ^ keyword.operator.arithmetic
//                 ^ keyword.operator.relational

var a = b <cat_dog />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^^^^^ variable.other.readwrite
//                 ^ keyword.operator.arithmetic
//                  ^ keyword.operator.relational

var a = b <cat-dog />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^ keyword.operator.arithmetic
//             ^^^ variable.other.readwrite
//                 ^ keyword.operator.arithmetic
//                  ^ keyword.operator.relational

var a = b <cat.dog />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.object variable.other.object
//            ^ keyword.operator.accessor
//             ^^^ meta.property.object variable.other.property
//                 ^ keyword.operator.arithmetic
//                  ^ keyword.operator.relational

var a = b <cat.dog/*comment*/ />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.object variable.other.object
//            ^ keyword.operator.accessor
//             ^^^ meta.property.object variable.other.property
//                ^^^^^^^^^^^ comment.block
//                ^^ comment.block punctuation.definition.comment.begin
//                         ^^ comment.block punctuation.definition.comment.end
//                           ^^^^^ string.regexp
//                            ^ string.regexp punctuation.definition.string.begin

/
//<- string.regexp punctuation.definition.string.end

var a = b <cat- />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.readwrite
//            ^ keyword.operator.arithmetic
//             ^^^^^ string.regexp
//              ^ string.regexp punctuation.definition.string.begin

/
//<- string.regexp punctuation.definition.string.end

var a = b <cat. />
//^ storage.type
//<- source.js
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^ variable.other.readwrite
//        ^ keyword.operator.relational
//         ^^^ variable.other.object variable.other.object
//            ^ keyword.operator.accessor
//             ^^^^ string.regexp
//              ^ string.regexp punctuation.definition.string.begin
