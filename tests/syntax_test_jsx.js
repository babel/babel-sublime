// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"
    <foo />;
//  ^^^^^^^ meta.jsx meta.tag
//  ^ punctuation.definition.tag.begin
//   ^^^ meta.tag.name entity.name.tag
//       ^^ punctuation.definition.tag.end

    <foo>Hello!</foo>;
//  ^^^^^^^^^^^^^^^^^ meta.jsx
//  ^^^^^ meta.tag
//  ^ punctuation.definition.tag.begin
//   ^^^ meta.tag.name entity.name.tag
//      ^ punctuation.definition.tag.end
//       ^^^^^^ - meta.tag
//             ^^^^^^ meta.tag
//             ^^ punctuation.definition.tag.begin
//               ^^^ meta.tag.name entity.name.tag
//                  ^ punctuation.definition.tag.end

    <foo.bar.baz>Hello!</foo.bar.baz>;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//  ^^^^^^^^^^^^^ meta.tag
//   ^^^^^^^^^^^ meta.tag.name
//      ^ punctuation.accessor
//          ^ punctuation.accessor
//           ^^^ entity.name.tag
//               ^^^^^^ - meta.tag
//                     ^^^^^^^^^^^^^^ meta.tag
//                       ^^^^^^^^^^^ meta.tag.name
//                          ^ punctuation.accessor
//                              ^ punctuation.accessor
//                               ^^^ entity.name.tag

    <foo>Hello!<bar/>World!</foo>;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//  ^^^^^ meta.tag
//       ^^^^^^ - meta.tag
//             ^^^^^^ meta.tag
//                   ^^^^^^ - meta.tag
//                         ^^^^^^ meta.tag

    <foo></foo><bar>
//  ^^^^^^^^^^^ meta.jsx
//             ^^^^^ - meta.jsx
//             ^ keyword.operator.relational
//              ^^^ variable
//                 ^ keyword.operator.relational
0;

    <>Hello!</>;
//  ^^^^^^^^^^^ meta.jsx
//  ^^ meta.tag
//  ^ punctuation.definition.tag.begin
//   ^ punctuation.definition.tag.end
//    ^^^^^^ - meta.tag
//          ^^^ meta.tag
//          ^^ punctuation.definition.tag.begin
//            ^ punctuation.definition.tag.end

    <foo></foo>
    <bar>
//  ^^^^^ - meta.jsx
//  ^ keyword.operator.relational
//   ^^^ variable
//      ^ keyword.operator.relational
0;

    </foo>;
//   ^^^^ invalid.illegal.unmatched-tag

<foo
    bar
//  ^^^ meta.jsx meta.tag entity.other.attribute-name

    =
//  ^ punctuation.separator.key-value

    'test'
//  ^^^^^^ string.quoted.single

    baz='test'
//  ^^^^^^^^^^ meta.jsx meta.tag
//  ^^^ entity.other.attribute-name
//     ^ punctuation.separator.key-value
//      ^^^^^^ string.quoted.single
//      ^ punctuation.definition.string.begin
//           ^ punctuation.definition.string.end

    baz="test"
//  ^^^^^^^^^^ meta.jsx meta.tag
//  ^^^ entity.other.attribute-name
//     ^ punctuation.separator.key-value
//      ^^^^^^ string.quoted.double
//      ^ punctuation.definition.string.begin
//           ^ punctuation.definition.string.end

    baz="\n"
//      ^^^^ string.quoted.double - constant.character.escape

    baz="&nbsp;&nbsp"
//       ^^^^^^ constant.character.escape
//       ^ punctuation.definition.entity
//            ^ punctuation.definition.entity
//             ^^^^^ - constant.character.escape

    baz={xyzzy}
//      ^^^^^^^ meta.interpolation
//      ^ punctuation.definition.interpolation.begin
//       ^^^^^ source.js.embedded.jsx variable.other.readwrite
//            ^ punctuation.definition.interpolation.end

    baz={{ xyzzy:42 }}
//      ^^^^^^^^^^^^^^ meta.interpolation
//      ^ punctuation.definition.interpolation.begin
//       ^^^^^^^^^^^^ source.js.embedded.jsx meta.mapping
//         ^^^^^ meta.mapping.key
//              ^ punctuation.separator.key-value
//               ^^ constant.numeric.integer.decimal
//                   ^ punctuation.definition.interpolation.end


    {...attrs}
//  ^^^^^^^^^^ meta.interpolation
//   ^^^^^^^^ source.js.embedded.jsx
//   ^^^ keyword.operator.spread
//      ^^^^^ variable.other.readwrite

    {...{ xyzzy:42 }}
//  ^^^^^^^^^^^^^^^^^ meta.interpolation
//   ^^^^^^^^^^^^^^^ source.js.embedded.jsx
//   ^^^ keyword.operator.spread
//      ^^^^^^^^^^^^ meta.mapping
//        ^^^^^ meta.mapping.key
//             ^ punctuation.separator.key-value
//              ^^ constant.numeric.integer.decimal
//                  ^ punctuation.definition.interpolation.end

    // baz
//  ^^^^^^ comment.line.double-slash
//  ^^ punctuation.definition.comment

    /* baz */
//  ^^^^^^^^^ comment.block
//  ^^ punctuation.definition.comment
//         ^^ punctuation.definition.comment

/>;
// <- meta.jsx meta.tag punctuation.definition.tag.end

<foo>
    // test
//  ^^^^^^^^ - comment

    /* test */
//  ^^^^^^^^^^ - comment

    &nbsp; &nbsp ;
//  ^^^^^^ constant.character.escape
//  ^ punctuation.definition.entity
//       ^ punctuation.definition.entity
//         ^^^^^^^ - constant.character.escape

    {xyzzy}
//  ^^^^^^^ meta.interpolation
//   ^^^^^ source.js.embedded.jsx variable.other.readwrite

    {{ xyzzy:42 }}
//  ^^^^^^^^^^^^^^ meta.interpolation
//   ^^^^^^^^^^^^ source.js.embedded.jsx
//   ^^^^^^^^^^^^ meta.mapping
//     ^^^^^ meta.mapping.key
//          ^ punctuation.separator.key-value
//           ^^ constant.numeric.integer.decimal
//               ^ punctuation.definition.interpolation.end

    {//}
//  ^ punctuation.definition.interpolation.begin
//   ^^^ comment.line.double-slash
//   ^^ punctuation.definition.comment
//     ^ - punctuation
    }
//  ^ punctuation.definition.interpolation.end
</foo>
