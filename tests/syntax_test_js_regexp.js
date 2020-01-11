// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

/* LITERAL */

    //
//  ^^ comment - string.regexp

    /abc/;
//  ^^^^^ string.regexp
//  ^ punctuation.definition.string.begin
//      ^ punctuation.definition.string.end

    /ab\/c/;
//  ^^^^^^^ string.regexp
//     ^^ constant.character.escape.backslash

    /ab\//;
//  ^^^^^^ string.regexp - comment
//     ^^ constant.character.escape.backslash

    /ab\/*/;
//  ^^^^^^^ string.regexp - comment
//     ^^ constant.character.escape.backslash
//       ^ keyword.operator.quantifier

    /abc/gimuys;
//  ^^^^^^^^^^^ string.regexp
//       ^^^^^^ keyword.other.js

    /abc/
    gimuys;
//  ^^^^^^ variable.other.readwrite - string.regexp;

    /abc//*
    */gimuys;
//    ^^^^^^ variable.other.readwrite - string.regexp;

    /abc//i;
//  ^^^^^ string.regexp
//       ^^ - string.regexp
//       ^ keyword.operator.arithmetic
//        ^ variable.other.readwrite

    /abc/*i;
//  ^^^^^ string.regexp
//       ^^ - string.regexp
//       ^ keyword.operator.arithmetic - string.regexp
//        ^ variable.other.readwrite

    /abc/**i;
//  ^^^^^ string.regexp
//       ^^^ - string.regexp
//       ^^ keyword.operator.arithmetic - string.regexp
//         ^ variable.other.readwrite


    /a|b/;
//    ^ keyword.operator.or

/* ESCAPES */

    /a.c/;
//    ^ constant.other.character-class.escape

    /\d\D\w\W\s\S/;
//   ^^^^^^^^^^^^ constant.other.character-class.escape.backslash

    /\t\r\n\v\f\0/;
//   ^^^^^^^^^^^^ constant.character.escape.backslash

    /\cAB/;
//   ^^^ constant.character.escape.backslash
//      ^ - constant.character.escape

    /\x0ff/;
//   ^^^^ constant.character.escape.backslash
//       ^ - constant.character.escape

    /\x0/;
//   ^^ constant.character.escape.backslash
//     ^ - constant.character.escape

    /\u12abc/;
//   ^^^^^^ constant.character.escape.backslash
//         ^ - constant.character.escape

    /\u12a/;
//   ^^ constant.character.escape.backslash
//     ^^^ - constant.character.escape

    /\b\B^$/;
//   ^^^^^^ keyword.control.anchor

    /\p{General_Category=Letter} \P{Letter}/;
//   ^^ constant.other.character-class.escape.unicode-property
//     ^ punctuation.definition.unicode-property.begin
//      ^^^^^^^^^^^^^^^^ support.constant.unicode-property
//                      ^ punctuation.separator.key-value.unicode-property
//                       ^^^^^^ support.constant.unicode-property
//                             ^ punctuation.definition.unicode-property.end
//                               ^^ constant.other.character-class.escape.unicode-property
//                                 ^ punctuation.definition.unicode-property.begin
//                                  ^^^^^^ support.constant.unicode-property
//                                        ^ punctuation.definition.unicode-property.end

/* QUANTIFIERS */

    /a*b+c?/;
//    ^ keyword.operator.quantifier.regexp
//      ^ keyword.operator.quantifier.regexp
//        ^ keyword.operator.quantifier.regexp

    /a*?b+?c??/;
//    ^^ keyword.operator.quantifier.regexp
//       ^^ keyword.operator.quantifier.regexp
//          ^^ keyword.operator.quantifier.regexp

    /a{10}b{1,2}c{1,}d{,2}/;
//    ^^^^ keyword.operator.quantifier
//         ^^^^^ keyword.operator.quantifier
//               ^^^^ keyword.operator.quantifier
//                    ^^^^ keyword.operator.quantifier


    /a{10}?b{1,2}?c{1,}?d{,2}?/;
//    ^^^^^ keyword.operator.quantifier
//          ^^^^^^ keyword.operator.quantifier
//                 ^^^^^ keyword.operator.quantifier
//                       ^^^^^ keyword.operator.quantifier

    /a{b{}c{,}d{1, 2}/;
//   ^^^^^^^^^^^^^^^^ - keyword.operator.quantifier

/* GROUPING */

    /a(bc)d/;
//    ^^^^ meta.group
//    ^ punctuation.definition.group
//       ^ punctuation.definition.group

    /a(?:bc)d/;
//    ^^^^^^ meta.group
//    ^^^ punctuation.definition.group
//     ^^ punctuation.definition.group.no-capture
//         ^ punctuation.definition.group

    /a(b(c)d)e/;
//    ^^^^^^^ meta.group
//      ^^^ meta.group meta.group
//    ^ punctuation.definition.group
//      ^ punctuation.definition.group
//        ^ punctuation.definition.group
//          ^ punctuation.definition.group

    /a(b)c\1/;
//        ^^ keyword.other.back-reference

    /a(?<foo>bc)d\k<foo>/;
//    ^^^^^^^^^^ meta.group
//    ^^ punctuation.definition.group
//      ^ punctuation.definition.group.named.begin
//       ^^^ entity.name.other.group
//          ^ punctuation.definition.group.named.end
//             ^ punctuation.definition.group
//               ^^ keyword.other.back-reference
//                 ^ punctuation.definition.group.named.begin
//                  ^^^ variable.other.group
//                     ^ punctuation.definition.group.named.end

/* ASSERTIONS */

    /(?=foo)/;
//   ^^^^^^^ meta.group.assertion
//   ^ punctuation.definition.group
//    ^^ punctuation.definition.group.assertion meta.assertion.look-ahead
//         ^ punctuation.definition.group

    /(?!foo)/;
//   ^^^^^^^ meta.group.assertion
//   ^ punctuation.definition.group
//    ^^ punctuation.definition.group.assertion meta.assertion.negative-look-ahead
//         ^ punctuation.definition.group

    /(?<=foo)/;
//   ^^^^^^^^ meta.group.assertion
//   ^ punctuation.definition.group
//    ^^^ punctuation.definition.group.assertion meta.assertion.look-behind
//          ^ punctuation.definition.group

    /(?<!foo)/;
//   ^^^^^^^^ meta.group.assertion
//   ^ punctuation.definition.group
//    ^^^ punctuation.definition.group.assertion meta.assertion.negative-look-behind
//          ^ punctuation.definition.group

/* CHARACTER CLASSES */

    /[abc]/;
//   ^^^^^ constant.other.character-class.set
//   ^ punctuation.definition.character-class
//       ^ punctuation.definition.character-class

    /[^abc]/;
//   ^^^^^^ constant.other.character-class.set
//   ^ punctuation.definition.character-class
//    ^ keyword.operator.negation
//        ^ punctuation.definition.character-class

    /[\b]/;
//    ^^ constant.character.escape.backslash - keyword.control.anchor

    /[/]/;
//  ^^^^^ string.regexp
//   ^^^ constant.other.character-class.set

    /][[]]/;
//   ^ - punctuation
//    ^^^ constant.other.character-class.set.regexp
//    ^ punctuation.definition.character-class
//      ^ punctuation.definition.character-class
//       ^ - punctuation

    /[a-z]/;
//   ^^^^^ constant.other.character-class.set
//    ^^^ constant.other.character-class.range
//     ^ punctuation.definition.range
//   ^ punctuation.definition.character-class
//       ^ punctuation.definition.character-class

    /[a-]/;
//    ^^ - constant.other.character-class.range
//     ^ - punctuation.definition.range


    /[-z]/;
//    ^^ - constant.other.character-class.range
//    ^ - punctuation.definition.range

    /[^-z]/;
//    ^^^ - constant.other.character-class.range
//     ^ - punctuation.definition.range
