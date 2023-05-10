// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

    if ( true ) { } ;
//  ^^^^^^^^^^^^^^^ meta.conditional
//  ^^ keyword.control.conditional.if
//     ^^^^^^^^ meta.group
//     ^ punctuation.section.group.begin
//       ^^^^ constant.language.boolean.true
//            ^ punctuation.section.group.end
//              ^^^ meta.block
//              ^ punctuation.section.block.begin
//                ^ punctuation.section.block.end
//                 ^ - meta.conditional
//                  ^ punctuation.terminator.statement.empty

    if ( true ) null ;
//  ^^^^^^^^^^^^^^^^^^ meta.conditional
//  ^^ keyword.control.conditional.if
//     ^^^^^^^^ meta.group
//     ^ punctuation.section.group.begin
//       ^^^^ constant.language.boolean.true
//            ^ punctuation.section.group.end
//              ^^^^ constant.language.null
//                   ^ punctuation.terminator.statement - punctuation.terminator.statement.empty
//                    ^ - meta.conditional

    if (true) {}/**/
//              ^^^^ - meta.conditional

    if (true) ;
//  ^^^^^^^^^^ meta.conditional
//            ^ punctuation.terminator.statement.empty

    if (true) ;
    else { } ;
//  ^^^^^^^^ meta.conditional
//  ^^^^ keyword.control.conditional.else
//       ^^^ meta.block
//       ^ punctuation.section.block.begin
//         ^ punctuation.section.block.end
//          ^ - meta.conditional
//           ^ punctuation.terminator.statement.empty

    else if (true) { } ;
//  ^^^^^^^^^^^^^^^^^^ meta.conditional
//  ^^^^^^^ keyword.control.conditional.elseif
//          ^^^^^^ meta.group
//          ^ punctuation.section.group.begin
//           ^^^^ constant.language.boolean.true
//               ^ punctuation.section.group.end
//                 ^^^ meta.block
//                 ^ punctuation.section.block.begin
//                   ^ punctuation.section.block.end
//                    ^^^ - meta.conditional
//                     ^ punctuation.terminator.statement.empty

    do { } while ( true ) ;
//  ^^^^^^^^^^^^^^^^^^^^^ meta.do-while
//  ^^ keyword.control.loop.do-while
//     ^^^ meta.block
//     ^ punctuation.section.block.begin
//       ^ punctuation.section.block.end
//         ^^^^^ keyword.control.loop.while
//               ^^^^^^^^ meta.group
//               ^ punctuation.section.group.begin
//                 ^^^^ constant.language.boolean.true
//                      ^ punctuation.section.group.end
//                       ^ - meta.do-while
//                        ^ punctuation.terminator.statement.empty

    do 42 ; while ( true ) ;
//  ^^^^^^^^^^^^^^^^^^^^^^ meta.do-while
//  ^^ keyword.control.loop.do-while
//     ^^ meta.number.integer.decimal constant.numeric.value
//        ^ punctuation.terminator.statement
//          ^^^^^ keyword.control.loop.while
//                ^^^^^^^^ meta.group
//                ^ punctuation.section.group.begin
//                  ^^^^ constant.language.boolean.true
//                       ^ punctuation.section.group.end
//                         ^ punctuation.terminator.statement.empty

    do {} while (false)/**/
//                     ^ - meta.do-while

    for (var i = 0; i < 10; i++) { } ;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^^^^^^^^^^^^^^ meta.group
//      ^ punctuation.section.group
//       ^^^ keyword.declaration
//           ^ meta.binding.name variable.other.readwrite
//             ^ keyword.operator.assignment
//               ^ meta.number.integer.decimal constant.numeric.value
//                ^ punctuation.separator.expression
//                  ^ variable.other.readwrite
//                    ^ keyword.operator.comparison
//                      ^^ meta.number.integer.decimal constant.numeric.value
//                        ^ punctuation.separator.expression
//                          ^ variable.other.readwrite
//                           ^^ keyword.operator.arithmetic
//                             ^ punctuation.section.group
//                               ^^^ meta.block
//                               ^ punctuation.section.block.begin
//                                 ^ punctuation.section.block.end
//                                  ^ - meta.for
//                                   ^ punctuation.terminator.statement.empty

    for (;;) 42;
//  ^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^ meta.group
//      ^ punctuation.section.group
//       ^^ punctuation.separator.expression
//         ^ punctuation.section.group
//           ^^ meta.number.integer.decimal constant.numeric.value
//             ^ punctuation.terminator.statement - punctuation.terminator.statement.empty
//              ^ - meta.for

    for (; x in list;) {}
//  ^^^^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^^^^ meta.group
//       ^ punctuation.separator.expression
//           ^^ keyword.operator
//                  ^ punctuation.separator.expression

    for (a[x in list];;) {}
//  ^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^^^^^^ meta.group
//        ^^^^^^^^^^^ meta.brackets
//           ^^ keyword.operator
//                   ^ punctuation.separator.expression
//                    ^ punctuation.separator.expression

    for (;function () {}/a/g;) {}
//                      ^ keyword.operator

    for (const x in list) {}
//  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^^^^^^^ meta.group
//       ^^^^^ keyword.declaration
//               ^^ keyword.operator.word

    for (const x of list) {}
//  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^^^^^^^ meta.group
//       ^^^^^ keyword.declaration
//               ^^ keyword.operator.word

    for (x in list) {}
//  ^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^ meta.group
//         ^^ keyword.operator.word

    for (x of list) {}
//  ^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^ meta.group
//         ^^ keyword.operator.word

    for await (const x of list) {}
//  ^^^ keyword.control.loop.for
//      ^^^^^ keyword.control.flow.await

for
    42;
//  ^^ constant.numeric - meta.for

for(;;){}/**/
//       ^ - meta.for

{}/**/
//^ - meta.block

while (true)
// ^^^^^^^^^ meta.while
//     ^^^^ meta.group
{
// <- meta.block
    x = yield;
//      ^^^^^ keyword.control.flow.yield

    x = yield * 42;
//      ^^^^^ keyword.control.flow.yield
//            ^ keyword.generator.asterisk

    x = yield
    function f() {}
    [];
//  ^^ meta.sequence - meta.brackets


    x = yield*
    function f() {}
    [];
//  ^^ meta.brackets - meta.sequence

    y = await 42;
//      ^^^^^ keyword.control.flow.await

    y = yield await 42;
//      ^^^^^ keyword.control.flow.yield
//            ^^^^^ keyword.control.flow.await

    yield (parenthesized_expression);
//  ^^^^^ keyword.control.flow.yield

    yield `template`;
//  ^^^^^ keyword.control.flow.yield

    break;
//  ^^^^^ keyword.control.flow.break

    break foo;
//  ^^^^^ keyword.control.flow.break
//        ^^^ variable.label

    break
    foo;
//  ^^^ variable.other.readwrite - variable.label

    break/**/foo;
//           ^^^ variable.label - variable.other.readwrite

    break/*
    */foo;
//    ^^^ variable.other.readwrite - variable.label

    break function;
//        ^^^^^^^^ invalid.illegal.identifier variable.label

    continue;
//  ^^^^^^^^ keyword.control.flow.continue

    continue foo;
//  ^^^^^^^^ keyword.control.flow.continue
//           ^^^ variable.label

    continue
    foo;
//  ^^^ variable.other.readwrite - variable.label

    continue/**/foo;
//              ^^^ variable.label - variable.other.readwrite

    continue/*
    */ foo;
//     ^^^ variable.other.readwrite - variable.label

    goto;
//  ^^^^ variable.other.readwrite - keyword
}
// <- meta.block

    while (true) 42 ;
//  ^^^^^^^^^^^^^ meta.while
//  ^^^^^ keyword.control.loop.while
//        ^^^^^^ meta.group
//        ^ punctuation.section.group.begin
//         ^^^^ constant.language.boolean.true
//             ^ punctuation.section.group.end
//               ^^ meta.number.integer.decimal constant.numeric.value
//                  ^ punctuation.terminator.statement - punctuation.terminator.statement.empty

while // Incomplete statement
    42;
//  ^^ constant.numeric - meta.while

while(false){}/**/
//            ^ - meta.while

with (undefined) {
// <- keyword.control.import.with
//^^^^^^^^^^ meta.with
//    ^^^^^^^^^ constant.language.undefined
    return;
//  ^^^^^^ meta.with.js meta.block.js keyword.control.flow.return
}

with // Incomplete statement
    42;
//  ^^ constant.numeric - meta.while

with(false){}/**/
//           ^ - meta.with

switch ($foo) {
// <- meta.switch.js keyword.control.conditional.switch
// ^^^^^^^^^^^^ meta.switch
//^^^^ keyword.control.conditional.switch
//      ^^^^ meta.group
//            ^ meta.block punctuation.section.block.begin
    case foo:
    // ^ meta.switch meta.block keyword.control.conditional.case
    //      ^ - punctuation.separator.key-value
        qux = 1;
        break;
        // ^ keyword.control.flow.break
    case "baz":
    // ^ keyword.control.conditional.case
    //        ^ - punctuation.separator.key-value string
        qux = 2;
        break;
        // ^ keyword.control.flow.break
    default:
    // ^ meta.switch meta.block keyword.control.conditional.default
    //     ^ - punctuation.separator.key-value
        qux = 3;

    case$
//  ^^^^^ - keyword
    ;

    default$
//  ^^^^^^^^ - keyword
    ;

    case 0: {}
    case 1:
//  ^^^^ keyword.control.conditional.case
}
// <- meta.block punctuation.section.block.end

try {
// <- meta.try keyword.control.exception.try
// ^^ meta.try
//  ^ meta.block
    foobar = qux.bar();
//  ^^^^^^^^^^^^^^^^^^^ meta.try meta.block
} catch (e) {
// <- meta.block
//^^^^^^^^^^^^ meta.catch
//^^^^^ keyword.control.exception.catch
//      ^^^ meta.group
//       ^ meta.binding.name variable.other.readwrite
//          ^ meta.block
    foobar = 0
//  ^^^^^^^^^^ meta.catch meta.block
} finally {
// <- meta.block
//^^^^^^^^^^ meta.finally
//^^^^^^^ keyword.control.exception.finally
//        ^ meta.block
    foobar += 1
//  ^^^^^^^^^^^ meta.finally meta.block
}
// <- meta.block

switch // Incomplete statement
    42;
//  ^^ constant.numeric - meta.switch

switch(x){}/**/
//         ^^ - meta.switch

try{}/**/
//   ^ - meta.try
catch{}/**/
//     ^ - meta.catch
finally{}/**/
//       ^ - meta.finally
