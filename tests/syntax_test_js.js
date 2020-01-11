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

// Better highlighting while typing.
import
import;
// <- keyword.control.import-export

import;/**/
//     ^ - meta.import

export { name1, name2 as name3 };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.block
//            ^ punctuation.separator.comma
//                    ^^ keyword.control.import-export

export let name1, name2;
//^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^ storage.type
//              ^ punctuation.separator.comma

export var name3;
//^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^ storage.type

export const name1 = 5;
//^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^^^^^ storage.type
//                 ^ keyword.operator.assignment

export let foo = 123 // No semicolon
export function bar() {}
// <- keyword.control.import-export

export function foo() {};
//^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^^^^^^^^  meta.function.declaration
//                      ^ punctuation.terminator.statement.empty

export function* foo() {};
//^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^  meta.function.declaration
//                       ^ punctuation.terminator.statement.empty

export async function foo() {};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
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
//             ^^^^^^^^^^^^ meta.function.declaration.js
//                             ^ punctuation.terminator.statement.empty - meta.export

export default function* (a) { };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^^^^ keyword.control.import-export
//     ^^^^^^^ keyword.control.import-export
//             ^^^^^^^^^^^^^ meta.function.declaration.js
//                              ^ punctuation.terminator.statement.empty - meta.export

export default function name1(b) { }
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.export
//^ keyword.control.import-export
//     ^ keyword.control.import-export
//             ^ storage.type
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
//              ^^^^^^^^^^^^ meta.function.declaration.js

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
    .meta;
//  ^^^^^ - meta.import
//  ^ punctuation.accessor
//   ^^^^ variable.language.import

    import('foo');
//  ^^^^^^ keyword.import
//        ^^^^^^^ meta.group

    import
    ('foo');
//  ^^^^^^^ meta.group

// This object literal is technically broken since foo() does not have a
// method body, but we include it here to ensure that highlighting is not
// broken as the user is typing
let a = { otherIdentifier, foo(), baz: 1 }
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.mapping
//        ^^^^^^^^^^^^^^^ variable.other.readwrite
//                         ^^^ entity.name.function
//                                ^^^ meta.mapping.key

someFunction({
    prop1, prop2, prop3
//  ^ variable.other.readwrite
//         ^ variable.other.readwrite
//                ^ variable.other.readwrite
});

    function foo() {
//  ^^^^^^^^^^^^^^^^ meta.function - meta.function meta.function
//  ^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^ storage.type.function
//           ^^^ entity.name.function
//                ^^ - meta.function.declaration
    }
//  ^ meta.function meta.block

    var bar = function() {
//  ^^^ storage.type
//      ^^^^^^^^^^^^^^^^^^ meta.function - meta.function meta.function
//      ^^^^^^^^^^^^^^^^ meta.function.declaration
//      ^^^ entity.name.function variable.other.readwrite
//            ^^^^^^^^ storage.type.function
    }

    baz = function*()
//  ^^^^^^^^^^^^^^^^^ meta.function.declaration - meta.function meta.function
//  ^^^ entity.name.function variable.other.readwrite
//        ^^^^^^^^ storage.type.function
//                ^ keyword.generator.asterisk
    {

    }

    async /**//**//**/ function foo() {}
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function

// Better highlighting when typing
function
function() {}
// <- storage.type.function - entity.name.function

function foo(){}/**/
//              ^ - meta.function

if (true)
// <- keyword.control.conditional.if
{
    bar()
}

// This is a comment function() { }
// <- punctuation.definition.comment
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ comment.line.double-slash

/**
// <- comment.block.documentation punctuation.definition.comment.begin
*/
// <- comment.block.documentation punctuation.definition.comment.end

/**
    *
//  ^ comment.block.documentation.js punctuation.definition.comment.js
*/

/*
// <- comment.block punctuation.definition.comment
*/

x --> y;
//^^ keyword.operator.arithmetic.js
//  ^ keyword.operator.relational.js

#! /usr/bin/env node
// <- comment.line.shebang punctuation.definition.comment

 #! /usr/bin/env node
//^^^^^^^^^^^^^^^^^^^ - comment.line.shebang

/*@if /*/
//     ^^ punctuation.definition.comment.end

// /*
not_a_comment;
// <- -comment

/* // */
not_a_comment;
// <- -comment

/* /* */
not_a_comment;
// <- -comment

'// /* not a comment';
// ^^^^^^^^^^^^^^^^^^^ -comment

"// /* not a comment";
// ^^^^^^^^^^^^^^^^^^^ -comment

`// /* not a comment`;
// ^^^^^^^^^^^^^^^^^^^ -comment

({
    '// /* not a comment': x => x,
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -comment

    "// /* not a comment": x => x,
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -comment

    '// /* not a comment'() {},
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ -comment() {}

    "// /* not a comment"() {},
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ -comment() {}
//                       ^ - meta.function.declaration meta.function.declaration
});

{
    let _$Foobar1Ù𝓩ʷªאξ‿ᛮↂ〩;
//      ^^^^^^^^^^^^^^^^^^^ variable.other.readwrite

    let ಠ_ಠ;
//      ^^^ variable.other.readwrite

    function \u004axyz () {}; // Letter J
//           ^^^^^^^^^ entity.name.function

    function xyz\u004axyz () {};
//           ^^^^^^^^^^^^ entity.name.function

    function xyz\u{0ca0}xyz () {}; // Letter ಠ
//           ^^^^^^^^^^^^^^ entity.name.function

    import$;export$;class$;throw$;break$;continue$;goto$;return$;debugger$;let$;const$;var$;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ - keyword

    switch$;do$;while$;for$;if$;with$:try$;catch$;finally$;new$;delete$;typeof$;void$;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ - keyword

    true$;false$;null$;undefined$;NaN$;Infinity$;this$;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ - constant.language

    x
    instanceof$;
//  ^^^^^^^^^^^ - keyword

    x
    in$;
//  ^^^ - keyword

    await$ [];
//  ^^^^^^ variable.other
//         ^^ meta.brackets - meta.sequence

    yield$ [];
//  ^^^^^^ variable.other
//         ^^ meta.brackets - meta.sequence

};

var str = '\':';
var str2 = NaN;
// <- storage.type
//   ^ variable.other.readwrite
//       ^ keyword.operator.assignment
//         ^^^ constant.language.nan

tag`Hello ${ a + b } world\nanother ${expression}.`;
// <- variable.function.tagged-template
// ^ punctuation.definition.string.begin
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.string
// ^^^^^^^ string.quoted.other
//        ^^^^^^^^^^ meta.interpolation - string
//        ^ punctuation.section.interpolation.begin
//           ^ variable.other.readwrite
//             ^ keyword.operator.arithmetic
//               ^ source.js.embedded
//                 ^ punctuation.section.interpolation.end
//                  ^^^^^^^^^^^^^^^^ string.quoted.other
//                        ^ constant.character.escape
//                                  ^^^^^^^^^^^^^ meta.interpolation - string
//                                  ^^ punctuation.section.interpolation.begin
//                                              ^ punctuation.section.interpolation.end
//                                               ^^ string.quoted.other
//                                                ^ punctuation.definition.string.end

tag `template`;
// <- variable.function.tagged-template
//  ^^^^^^^^^^ meta.string string.quoted.other

x ? y // y is a template tag!
`template` : z;
//         ^ keyword.operator.ternary

    1``
    /a/;
//  ^^^ - string
//  ^ keyword.operator.arithmetic
//    ^ keyword.operator.arithmetic

mylabel:
// ^ entity.name.label
//     ^ punctuation.separator

// Ensure a ternary identifier isn't recognized as a label
true ? str : str2
//      ^ - entity.name.label

a = test ? a + b : c;
//         ^ variable.other.readwrite
//             ^ variable.other.readwrite

{{foo}}
// ^ meta.block meta.block variable.other.readwrite

var obj = {
//        ^ meta.mapping punctuation.section.block.begin - meta.block
    key: bar,
    // <- meta.mapping.key
    $key2: "string value",
    // ^ meta.mapping.key
    //   ^ - constant.other
    //     ^^^^^^^^^^^^^^ meta.string string.quoted.double

    $keyFunc: function() {
//  ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
    // <- meta.mapping.key.dollar entity.name.function punctuation.dollar
     // <- meta.mapping.key.dollar entity.name.function - punctuation.dollar
    },

    [true==false ? 'one' : 'two']: false,
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.mapping.key
//  ^ punctuation.section.brackets.begin
//   ^^^^ constant.language
//         ^^^^ constant.language
//               ^ keyword.operator
//                       ^ keyword.operator
//                              ^ punctuation.section.brackets.end
//                               ^ punctuation.separator.key-value

    "": true,
    // <- meta.mapping.key

    "key4": true,
//  ^^^^^^ meta.mapping.key meta.string string.quoted.double
//        ^ punctuation.separator.key-value - string
    'key5': false,
//  ^^^^^^meta.mapping.key meta.string string.quoted.single
//        ^ punctuation.separator.key-value - string
//          ^^^^^ constant.language.boolean.false

    objKey: new function() {
//              ^^^^^^^^ storage.type.function
        this.foo = baz;
//      ^^^^ variable.language.this
//          ^ punctuation.accessor
//           ^^^ meta.property
    }(),

    objKey: new class Foo {
//              ^^^^^ storage.type.class
        get baz() {}
//      ^^^ storage.type.accessor
//          ^^^ entity.name.function
    }(),

    funcKey: function() {
//  ^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^ meta.mapping.key entity.name.function
    },

    func2Key: function func2Key() {
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^ meta.mapping.key entity.name.function
    },

    funcKeyArrow: () => {
//  ^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^^^^^ meta.mapping.key entity.name.function
    },

    "funcStringKey": function funcStringKey()
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^^^^^^^^ meta.mapping.key meta.string string.quoted.double
//   ^^^^^^^^^^^^^ entity.name.function
    { },

    'funcStringKey': function() {
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^^^^^^^^ meta.mapping.key meta.string string.quoted.single
//   ^^^^^^^^^^^^^ entity.name.function
    },

    'funcStringKeyArrow': () => {
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^^^^^^^^^^^^^ meta.mapping.key meta.string string.quoted.single
//   ^^^^^^^^^^^^^^^^^^ entity.name.function
    },

    "func\\String2KeyArrow": (foo) => {
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^^^^^^^^^^^^^^^^ meta.mapping.key meta.string string.quoted.double
//   ^^^^^^^^^^^^^^^^^^^^^ entity.name.function
//       ^^ constant.character.escape
    },

    key: 'str' + (true ? 'true' : 'false'),
//                ^^^^ constant.language.boolean.true

    qux()
//  ^^^^^ meta.function.declaration
//  ^^^ entity.name.function
    {},

    'funcStringMethod'() {
//  ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//   ^^^^^^^^^^^^^^^^ entity.name.function
    },

    'funcStringMethodWithSameLineColon'() { var foo = { name: 'jeff' }; },
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ entity.name.function

    "key (": true,
//  ^^^^^^^ meta.mapping.key

    "key \"(": true,
//  ^^^^^^^^^ meta.mapping.key

    "key '(": true,
//  ^^^^^^^^ meta.mapping.key

    static,
//  ^^^^^^ variable.other.readwrite

    *baz(){
//  ^^^^^^ meta.function.declaration
//  ^ keyword.generator.asterisk
//   ^^^ entity.name.function
    }

    ...foo,
//  ^^^ keyword.operator.spread
//     ^^^ variable.other.readwrite
//        ^ punctuation.separator.comma

    ...bar(baz),
//  ^^^ keyword.operator.spread
//     ^^^^^^^^ meta.function-call
//     ^^^ variable.function
//             ^ punctuation.separator.comma

    get foo() {},
//  ^^^^^^^^^^^^ meta.function
//  ^^^ storage.type.accessor
//      ^^^ entity.name.function

    get() {},
//  ^^^^^^^^ meta.function
//  ^^^ entity.name.function

    get: 42,
//  ^^^ meta.mapping.key
}
// <- meta.mapping - meta.block

+{
// <- keyword.operator
  '': +{1:} / undefined
//^^ meta.string string.quoted
//  ^ punctuation.separator.key-value
//    ^ keyword.operator
//      ^ constant.numeric
//          ^ keyword.operator
//            ^ constant.language
};
// <- meta.mapping punctuation.section.block.end

({
 // <- meta.mapping
  0.: {0.e+0: 0}
//^^ meta.mapping.key constant.numeric
//  ^ punctuation.separator.key-value
//     ^^^^^ meta.mapping.key constant.numeric
//            ^ constant.numeric
});

[ a, b, c ];
// <- meta.sequence punctuation.section.brackets.begin
// ^ meta.sequence punctuation.separator.comma
// ^^^^^^^^ meta.sequence
//        ^ meta.sequence punctuation.section.brackets.end

function x() {}
[ a, b, c ];
// <- meta.sequence.js

+
function x() {}
[ a, b, c ];
// <- meta.brackets.js

var $ = function(baz) {
//  ^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^ entity.name.function variable.other.dollar.only punctuation.dollar
}

$()
// <- variable.other.dollar.only punctuation.dollar

$foo = null;
// <- variable.other.dollar punctuation.dollar
// ^ variable.other.dollar - punctuation.dollar
//     ^^^^ constant.language.null

baz = "";
// <- variable.other.readwrite
//    ^^ meta.string string.quoted.double

var qux = 100;
// <- storage.type
//   ^ variable.other.readwrite
//         ^ constant.numeric

{}/**/
//^ - meta.block

if (Infinity > qux) {
// <- meta.conditional.js keyword.control.conditional.if
// ^^^^^^^^^^^^^^^ meta.conditional
//  ^^^^^^^^ constant.language.infinity
    a;
//  ^ meta.conditional meta.block
}
// <- meta.conditional meta.block

if (foo bar)
    baz = "test"

if(false){}/**/
//         ^ - meta.conditional

do {
// <- meta.do-while keyword.control.loop.do-while
// ^ meta.block
    qux += 1
//  ^^^^^^^^ meta.do-while meta.block
} while(qux < 20);
// <- meta.block
// ^^^^^^^^^^^^^^ meta.do-while - meta.block
// ^^^^ keyword.control.loop.while
//      ^^^^^^^^ meta.group

do // Incomplete statement
    42;
//  ^^ constant.numeric - meta.do-while

do {} while (false)/**/
// <- meta.do-while keyword.control.loop.do-while
//^^^^^^^^^^^^^^^^^ meta.do-while.js
//                 ^^ - meta.do-while
//    ^^^^^ keyword.control.loop.while.js

for (var i = 0; i < 10; i++) {
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//   ^^^^^^^^^^^^^^^^^^^^^^ meta.group
//   ^^^ storage.type.js
//                           ^ meta.block
    i += 1;
//  ^^^^^^^ meta.for meta.block
}
// <- meta.block

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
//       ^^^^^ storage.type
//               ^^ keyword.operator.word

    for (const x of list) {}
//  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//  ^^^ keyword.control.loop.for
//      ^^^^^^^^^^^^^^^^^ meta.group
//       ^^^^^ storage.type
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
//       ^ meta.group
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

class MyClass extends TheirClass {
// <- storage.type.class
//    ^^^^^^^ entity.name.class
//            ^^^^^^^ storage.modifier.extends
//                    ^^^^^^^^^^ entity.other.inherited-class
//                               ^ meta.block punctuation.section.block.begin

    x = 42;
//  ^ variable.other.readwrite
//    ^ keyword.operator.assignment
//      ^^ constant.numeric

    'y' = 42;
//  ^^^ meta.string string.quoted.single
//   ^ variable.other.readwrite
//      ^ keyword.operator.assignment
//        ^^ constant.numeric

    "z" = 42;
//  ^^^ meta.string string.quoted.double
//   ^ variable.other.readwrite
//      ^ keyword.operator.assignment
//        ^^ constant.numeric

    [w] = 42;
//  ^ punctuation.section.brackets.begin
//   ^ variable.other.readwrite
//    ^ punctuation.section.brackets.end
//      ^ keyword.operator.assignment
//        ^^ constant.numeric

    #v = 42;
//  ^ punctuation.definition.variable
//   ^ variable.other.readwrite
//     ^ keyword.operator.assignment
//       ^^ constant.numeric

    f = a => b;
//  ^^^^^^^^ meta.function.declaration
//  ^ entity.name.function variable.other.readwrite
//      ^ variable.parameter.function

    g = function() {};
//  ^^^^^^^^^^^^^^^^^ meta.function
//  ^ entity.name.function variable.other.readwrite

    #h = function() {};
//  ^^^^^^^^^^^^^^^^^^ meta.function
//  ^ punctuation.definition.variable
//   ^ entity.name.function variable.other.readwrite

    static x = 42;
//  ^^^^^^ storage.modifier.js
//         ^ variable.other.readwrite
//           ^ keyword.operator.assignment
//             ^^ constant.numeric

    static 'y' = 42;
//  ^^^^^^ storage.modifier.js
//         ^^^ meta.string string.quoted.single
//          ^ variable.other.readwrite
//             ^ keyword.operator.assignment
//               ^^ constant.numeric

    static "z" = 42;
//  ^^^^^^ storage.modifier.js
//         ^^^ meta.string string.quoted.double
//          ^ variable.other.readwrite
//             ^ keyword.operator.assignment
//               ^^ constant.numeric

    static [w] = 42;
//  ^^^^^^ storage.modifier.js
//         ^ punctuation.section.brackets.begin
//          ^ variable.other.readwrite
//           ^ punctuation.section.brackets.end
//             ^ keyword.operator.assignment
//               ^^ constant.numeric

    static #v = 42;
//         ^ punctuation.definition.variable
//          ^ variable.other.readwrite
//            ^ keyword.operator.assignment
//              ^^ constant.numeric

    static f = a => b;
//         ^^^^^^^^ meta.function.declaration
//         ^ entity.name.function variable.other.readwrite
//             ^ variable.parameter.function

    static g = function() {};
//         ^^^^^^^^^^^^^^^^^ meta.function
//         ^ entity.name.function variable.other.readwrite

    a, 'b' = 50, "c", [d] = 100, #e;
//  ^ variable.other.readwrite
//      ^ variable.other.readwrite
//                ^ variable.other.readwrite
//                     ^ variable.other.readwrite
//                                ^ variable.other.readwrite

    static a, 'b' = 50, "c", [d] = 100, #e;
//  ^^^^^^ storage.modifier.js
//         ^ variable.other.readwrite
//             ^ variable.other.readwrite
//                       ^ variable.other.readwrite
//                            ^ variable.other.readwrite
//                                       ^ variable.other.readwrite

    foo // You thought I was a field...
    () { return '...but was a method all along!'; }
//  ^^ meta.class.js meta.block.js meta.function.declaration.js

    someMethod() {
        return #e * 2;
//             ^ punctuation.definition.variable
//              ^ variable.other.readwrite
//                ^ keyword.operator.arithmetic

        for (const param of this.#data.get('value')) {}
//                               ^ punctuation.definition.variable
//                                ^^^^ meta.property.object
    }

    constructor(el)
//  ^^^^^^^^^^^^^^^ meta.function.declaration
    // ^ entity.name.function.constructor
    {
//  ^ meta.class meta.block meta.function meta.block punctuation.section.block
        $.foo = "";
        super(el);
    }
//  ^ meta.class meta.block meta.function meta.block punctuation.section.block

    get foo()
//  ^^^^^^^^^ meta.function.declaration
    // <- storage.type.accessor
    //   ^ entity.name.function
    {
        return this._foo;
    }

    static foo(baz) {
//  ^^^^^^ storage.modifier
//         ^^^^^^^^ meta.function.declaration
    //     ^^^ entity.name.function

    }

    qux()
//  ^^^^^ meta.function.declaration
    { }
//  ^ meta.class meta.block meta.block punctuation.section.block.begin

    get bar () {
//  ^^^^^^^^^^ meta.function.declaration
//             ^ meta.class meta.block meta.block punctuation.section.block.begin
    // <- storage.type.accessor
    //   ^ entity.name.function
        return false;
    }

    baz() { return null }
//  ^^^^^ meta.function.declaration
    // <- entity.name.function

    get() { return "foobar"; }
//  ^^^^^ meta.function.declaration.js
//  ^^^ entity.name.function.js - storage.type.accessor

    set (value) { return value; }
//  ^^^^^^^^^^^ meta.function.declaration.js
//       ^^^^^ variable.parameter.function.js
//  ^^^ entity.name.function.js - storage.type.accessor

    set  abc(value1, value2) { return value1 + value2; }
//  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration.js
//  ^^^ storage.type.accessor - entity.name.function.js
//       ^^^ entity.name.function.js
//           ^^^^^^ variable.parameter.function.js
//                 ^ punctuation.separator.parameter.function.js
//                   ^^^^^^ variable.parameter.function.js

    static$
//  ^^^^^^^ - storage
    () {};

    constructor$() {}
//  ^^^^^^^^^^^^ entity.name.function - entity.name.function.constructor

    @foo bar() {}
//  ^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^ variable.annotation
//       ^^^ entity.name.function

    @foo.bar bar() {}
//  ^^^^^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^ variable.other.readwrite - variable.annotation
//       ^^^ variable.annotation
//           ^^^ entity.name.function

    @(whatever) bar() {}
//  ^^^^^^^^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^^^^^^^^ meta.group
//              ^^^ entity.name.function

    ['foo']() {}
//  ^^^^^^^^^ meta.function.declaration

    static ['foo']() {}
//         ^^^^^^^^^ meta.function.declaration

    async foo() {}
//  ^^^^^ storage.type

    *foo() {}
//  ^ keyword.generator.asterisk

    static async foo() {}
//         ^^^^^ storage.type
}
// <- meta.block punctuation.section.block.end

class Foo extends React.Component {
//                ^^^^^ - entity.other.inherited-class
//                      ^^^^^^^^^ entity.other.inherited-class
    constructor()
    {}

    [foo.bar](arg) {
//   ^^^ variable.other
//       ^^^ meta.property
//            ^^^ variable.parameter
        return this.a;
    }
}

class Foo extends (Foo).Bar {}
//                      ^^^ entity.other.inherited-class

class Foo extends Bar
//                ^^^ entity.other.inherited-class
    .baz {}
//  ^^^^^^^ meta.class
//  ^ punctuation.accessor
//   ^^^ entity.other.inherited-class

class Foo extends
//        ^^^^^^^ storage.modifier.extends
Bar {}

class Foo extends getSomeClass() {}
//                ^^^^^^^^^^^^ meta.function-call variable.function - entity.other.inherited-class

    (class extends Bar {});
//         ^^^^^^^ storage.modifier.extends - entity.name.class

    (class extends class {} {});
//   ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class
//         ^^^^^^^ storage.modifier.extends
//                 ^^^^^^^^ meta.class meta.class
//                 ^^^^^ storage.type.class

// Better highlighting while typing.
class
class
// <- storage.type.class - entity.name.class

class{}/**/
//     ^ - meta.class

    () => {}
//  ^^^^^^^^ meta.function - meta.function meta.function
//  ^^^^^ meta.function.declaration
//  ^ punctuation.section.group.begin
//   ^ punctuation.section.group.end
//     ^^ storage.type.function.arrow
//        ^^ meta.block
//        ^ punctuation.section.block
//         ^ punctuation.section.block

    @foo class Foo {}
//  ^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^ variable.annotation
//       ^^^^^ storage.type.class

    @foo.bar class Foo {}
//  ^^^^^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^ variable.other.readwrite - variable.annotation
//       ^^^ variable.annotation
//           ^^^^^ storage.type.class

    @(whatever) class Foo {}
//  ^^^^^^^^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^^^^^^^^ meta.group
//              ^^^^^ storage.type.class

() => {}
// <- meta.function.declaration punctuation.section.group.begin
 // <- meta.function.declaration punctuation.section.group.end
//^^^ meta.function.declaration
//    ^ meta.block punctuation.section.block.begin
//     ^ meta.block punctuation.section.block.end

const test = ({a, b, c=()=>({active:false}) }) => {};
//    ^ entity.name.function
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.binding.destructuring
//            ^ punctuation.section.block.begin
//             ^ variable.parameter
//                ^ variable.parameter
//                   ^ variable.parameter
//                     ^^^^ meta.function.declaration meta.function.declaration
//                     ^ punctuation.section.group.begin
//                      ^ punctuation.section.group.end
//                         ^^^^^^^^^^^^^^^^ meta.group
//                                   ^ constant.language
//                                          ^ punctuation.section.block.end

// We can't currently detect this properly, but we need to consume => properly
([a,
  b]) => { return x; }
//    ^^^^^^^^^^^^^^^^ meta.function
//    ^^ storage.type.function.arrow
//         ^^^^^^ meta.block keyword.control.flow

(
    ()
    => { return; }
//  ^^ storage.type.function.arrow
//     ^^^^^^^^^^^ meta.block - meta.mapping
//       ^^^^^^ keyword.control.flow
);

({
    a = {},
//    ^ keyword.operator.assignment
//      ^^ punctuation.section.block
//        ^ punctuation.separator.comma - keyword.operator.comma
    b,
//   ^ punctuation.separator.comma - keyword.operator.comma
}) => null;
// ^^ storage.type.function.arrow

MyClass.foo = function() {}
// ^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
// ^ support.class
//       ^ entity.name.function

MyClass.foo = () => {}
// ^^^^^^^^^^^^^^^^ meta.function.declaration
// ^ support.class
//       ^ entity.name.function

xhr.onload = function() {}
// ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
// <- support.class.js
//  ^ entity.name.function

xhr.onload = () => {}
// ^^^^^^^^^^^^^^^ meta.function.declaration
// <- support.class.js
//  ^ entity.name.function

var simpleArrow = foo => bar;
//  ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//   ^ entity.name.function
//                 ^ variable.parameter.function
//                    ^ storage.type.function.arrow

var Proto = () => {
//  ^^^^^^^^^^^^^ meta.function.declaration
//   ^ entity.name.function
//             ^ storage.type.function.arrow
    this._var = 1;
}

var notAFunc = function$;
//  ^^^^^^^^ - entity.name.function

Proto.prototype.getVar = () => this._var;
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
// ^ support.class
//     ^ support.constant.prototype
//                ^ entity.name.function
//                           ^ storage.type.function.arrow

Class3.prototype = function() {
// ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
// ^ support.class
//       ^ support.constant.prototype
}

Proto.prototype.attr
// ^ support.class
//     ^ support.constant.prototype
//               ^ meta.property.object

Proto.prototype = {
    funcName: function() {
//  ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//  ^^^^^^^^ entity.name.function
//          ^ punctuation.separator.key-value
    }
}

sources.DOM.status()
sources.DOM
// <- variable.other.readwrite
    .status()
    // ^ meta.function-call.method variable.function

return new Promise(resolve => preferenceObject.set({value}, resolve));
//                                                                  ^ meta.function-call.constructor punctuation.section.group.end

var anotherSingle = function(){a = param => param; return param2 => param2 * a}
//                                 ^ meta.function.declaration variable.parameter.function
//                                          ^ meta.block meta.block variable.other.readwrite
//                                               ^ meta.block punctuation.terminator.statement
//                                                        ^ meta.function.declaration variable.parameter.function
//                                                                           ^ meta.block meta.block variable.other.readwrite
//                                                                            ^ meta.block punctuation.section.block.end

var foo = ~{a:function(){}.a()}
//  ^^^ meta.binding.name
//  ^^^ variable.other.readwrite
//      ^ keyword.operator.assignment
//        ^ keyword.operator.bitwise
//         ^ punctuation.section.block.begin
//         ^^^^^^^^^^^^^^^^^^^^ meta.mapping
//          ^^^^^^^^^^^^ meta.function.declaration
//          ^ entity.name.function
//           ^ punctuation.separator.key-value
//            ^^^^^^^^ storage.type.function
//                    ^ punctuation.section.group.begin
//                     ^ punctuation.section.group.end
//                      ^ meta.block punctuation.section.block.begin
//                       ^ meta.block punctuation.section.block.end
//                        ^ meta.mapping
//                         ^^^ meta.function.declaration
//                         ^ entity.name.function
//                          ^ punctuation.section.group.begin
//                           ^ punctuation.section.group.end
//                            ^ punctuation.section.block.end
//                             ^ - meta

baz(foo(x => x('bar')));
//                   ^ meta.function-call meta.function-call punctuation.section.group.end
//                    ^ meta.function-call punctuation.section.group.end

func(a, b);
//^^^^^^^^ meta.function-call
// ^ variable.function
//  ^^^^^^ meta.group
//  ^ punctuation.section.group.begin
//   ^ variable.other.readwrite
//    ^ punctuation.separator.comma
//      ^ variable.other.readwrite
//       ^ punctuation.section.group.end

var instance = new Constructor(param1, param2)
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.constructor
//                 ^^^^^^^^^^^ variable.type
//                            ^^^^^^^^^^^^^^^^ meta.group
//                            ^ punctuation.section.group.begin
//                             ^ variable.other.readwrite
//                                           ^ punctuation.section.group.end

var obj = new function() {}();
//            ^^^^^^^^ storage.type

var obj2 = new class Foo{}();
//             ^^^^^ storage.type.class

this.func()
// <- variable.language.this
arguments;
// <- variable.language.arguments
super.func();
// <- variable.language.super
globalThis;
// <- variable.language.global

foo[bar];
// ^^^^^ meta.brackets
// ^ punctuation.section.brackets.begin
//     ^ punctuation.section.brackets.end

var Constructor = function() {
    this._var = 1;
    // ^ variable.language.this
    this._method = function() {}
    // ^ variable.language.this
    //    ^ entity.name.function
}

// Tests to ensure the new keyword is highlighted properly even when the
// following element is not an identifier
var abc = new ABC(
//        ^^^ keyword.operator.word.new
//            ^^^^ meta.function-call.constructor
//        ^^^^^^^^ - meta.instance.constructor
    'my-name-is-abc',
    new (function () {
//  ^^^ keyword.operator.word.new
//  ^^^^^^^^^^^^^^^^^^ - meta.instance.constructor
//      ^^^^^^^^^^^^^^ meta.function-call.constructor meta.function-call.constructor meta.group
        var foo = 1;
//      ^^^^^^^^^^^^ meta.function-call.constructor meta.function-call.constructor meta.group meta.block
    })
);

new foo()/**/;
//       ^ - meta.function-call.constructor

function f() {
    new.target;
//  ^^^ keyword.operator.word.new
//     ^ punctuation.accessor.dot.js
//      ^^^^^^ variable.language.target

    new
//  ^^^ keyword.operator.word.new
    .target;
//  ^ punctuation.accessor.dot.js
//   ^^^^^^ variable.language.target
}

new Date().getTime()
//  ^^^^^^ meta.function-call.constructor
//  ^^^^ support.class
//^^^^^^^^^^^^^^^^^^ - meta.instance.constructor

new $();
//  ^ variable.type.dollar.only punctuation.dollar

new $Dollar();
//  ^ variable.type.dollar punctuation.dollar

void {
    'test1': [],
    'test2': new SomeObjectHash["default"],
//               ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.constructor
//                             ^ meta.brackets
    'test3': "asdf"
}
// <- meta.mapping punctuation.section.block.end

// This tests parsing semi-broken object literals, which should help while a
// user is in the middle of typing code
void {
    key1: true
//  ^^^^ meta.mapping.key.js
    key2: 0
//  ^^^^ meta.mapping.key.js
    key3: function()
//  ^^^^ meta.mapping.key.js entity.name.function
    {

    }
}

a = b.c
d = e.f
// <- variable.other.readwrite

foo.bar().baz
// ^ punctuation.accessor
//       ^ punctuation.accessor

width/2 + lineStart * Math.sin(i * 30 * π/180)
//   ^ keyword.operator.arithmetic
//                  ^ keyword.operator.arithmetic
//                         ^^^^^^^^^^^^^^^^^^^ meta.function-call.method

var reg = /a+/gimy.exec('aabb')
//        ^^^^^^^^ meta.string string.regexp
//            ^^^^ keyword.other
//                ^ punctuation.accessor

'aabbcc'.replace(/b+/, 'd');
//               ^^^^ meta.string string.regexp
//                 ^ keyword.operator.quantifier.regexp

/a+(?:bc)/;
// <- meta.string string.regexp
//  ^^ punctuation.definition.group.no-capture.regexp

'str'.match(/[" ]+/g);
//          ^^^^^^^^ meta.string string.regexp.js

myvar = myvar.replace(/RTP\/SAVPF .*/, 'RTP/SAVPF ' + suffix);
//                    ^^^^^^^^^^^^^^^ meta.string string.regexp.js

'foo'.bar() / baz
//            ^ variable.other.readwrite

var g = 50

g / 20 + 30 /g
//^ keyword.operator.arithmetic
//          ^ keyword.operator.arithmetic

var h = foo() / 20 + 30 /g
//            ^ keyword.operator.arithmetic
//                      ^ keyword.operator.arithmetic

foo['bar']/ 20 + 30 /g
//        ^ keyword.operator.arithmetic
//                  ^ keyword.operator.arithmetic

foo.bar/ 20 + 30 /g
//     ^ keyword.operator.arithmetic
//               ^ keyword.operator.arithmetic

var result = 200 / 400 + 500 /
//               ^ keyword.operator.arithmetic
//                           ^ keyword.operator.arithmetic
100;

var re = /
[a-z]
/g
// <- meta.string string.regexp.js punctuation.definition.string.end
 // <- keyword.other

const a = 1 / /This is regex./ / 'This should be a string, not a regex.';
//          ^ keyword.operator
//            ^^^^^^^^^^^^^^^^ meta.string string.regexp
//                             ^ keyword.operator
//                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.string string.quoted

a = /\//u + 0;
//  ^^^^ meta.string string.regexp
//      ^ keyword.other
//        ^ keyword.operator
//          ^ constant.numeric

1 /**/ / 2 / /**/ 3;
//     ^ keyword.operator
//       ^ constant.numeric
//         ^ keyword.operator

    x
    in y;
//  ^^ keyword.operator

    x
    instanceof y;
//  ^^^^^^^^^^ keyword.operator

var π = 3.141592653
//  ^ variable.other.readwrite

var angle = 2*π / count // angle between circles
//              ^ keyword.operator.arithmetic

var angle = 2*π / count /* angle between circles */
//              ^ keyword.operator.arithmetic

undefined / (8 * 5) / "1"
//        ^ keyword.operator.arithmetic
//                  ^ keyword.operator.arithmetic

'5' / 8 / '1'
//  ^ keyword.operator.arithmetic
//      ^ keyword.operator.arithmetic

"5" / 8 / "1"
//  ^ keyword.operator.arithmetic
//      ^ keyword.operator.arithmetic

`5` / 8 / `1`
//  ^ keyword.operator.arithmetic
//      ^ keyword.operator.arithmetic

a = /foo\/bar/g // Ensure handling of escape / in regex detection
//  ^^^^^^^^^^^ meta.string string.regexp
//       ^ constant.character.escape

var re = /^\/[^/]+/;
//             ^ constant.other.character-class.set.regexp
//               ^ keyword.operator.quantifier

(y - 1) / ((x - 1) / -2);
//      ^ keyword.operator.arithmetic
//        ^ punctuation.section.group.begin
(y - 1) / ((x - 1) /  2);
//    ^ punctuation.section.group.end
//      ^ keyword.operator.arithmetic
 y      / ((x - 1) / -2);

    1, 2;
//   ^ keyword.operator.comma - punctuation

    a;
    [1, 2];
//    ^ meta.sequence punctuation.separator.comma - meta.brackets - keyword

    a
    [1, 2];
//    ^ meta.brackets keyword.operator.comma - meta.sequence - punctuation

define(['common'], function(common) {
//                 ^ meta.function.declaration
    var namedFunc = function() {
//        ^ meta.function.declaration
    }
});

new FooBar(function(){
//          ^ meta.function.declaration
    var namedFunc2 = function() {
//        ^ meta.function.declaration
    }
})

['foo'].bar = function() {
//      ^^^ entity.name.function meta.property.object
}

['foo'].$ = function() {
//      ^ entity.name.function meta.property.object.dollar.only punctuation.dollar
}

['foo'].$bar = function() {
//      ^^^^ entity.name.function meta.property.object.dollar
//      ^ punctuation.dollar
}

{
// <- meta.block punctuation.section.block.begin
    let foo = 1;
//  ^^^ meta.block storage.type
//      ^^^ variable.other.readwrite
}
// <- meta.block punctuation.section.block.end

var test =
{a: 1}
// <- meta.mapping punctuation.section.block.begin

var arrowFuncBraceNextLine = () => /* comments! */
//  ^ entity.name.function
//                              ^^ storage.type.function
//                                 ^^^^^^^^^^^^^^^ comment
{
    foo.bar();
//  ^ - entity.name.function
}

// Handle multi-line "concise" arrow function bodies
var conciseFunc = () =>
  foo
//^^^ meta.block variable.other.readwrite
  .bar();
//^^^^^^ meta.block

// Handle an arrow function in a parenthetical group
(myFunc = (a) => a*2)
// <- meta.group punctuation.section.group.begin
// ^^^^ entity.name.function
//                  ^ meta.group punctuation.section.group.end - meta.block

var o = { a: i => i * 2, b: i => i * 3 }
//        ^ entity.name.function
//                     ^ - meta.block
//                       ^ entity.name.function

function test() {
    return {a: 1};
//         ^^^^^^ meta.mapping
//          ^ meta.mapping.key
//             ^ constant.numeric
}

$.each({})
// <- variable.other.dollar.only punctuation.dollar
//     ^ meta.mapping

$varname.method()
// <- variable.other.dollar punctuation.dollar - variable.object.dollar.only
// ^ variable.other.dollar

$.fn.new_plugin = function() {}
// <- support.class.dollar.only punctuation.dollar

$var.fn.name = () => {}
// <- support.class.dollar punctuation.dollar - support.class.dollar.only
// ^ support.class.dollar - punctuation.dollar

someFunction(() => [() => 'X']);
//                           ^ punctuation.section.brackets.end

string = 'invalid
//               ^ invalid.illegal.newline

string = 'invalid\ 
//                 ^ invalid.illegal.newline

hex = 0xFA.5;
//         ^ invalid.illegal - constant.numeric

hex = 0xFA.toString;

octal = 079.0;
//          ^ invalid.illegal - constant.numeric

strayBracket = ());
//               ^ invalid.illegal.stray-bracket-end

strayBracket = []];
//               ^ invalid.illegal.stray-bracket-end

strayBracket = {}};
//               ^ invalid.illegal.stray-bracket-end

(a +) + c;
//   ^^^^ - meta.group

(a =>) + c;
//    ^^^^ - meta.group

function optionalParam(b=0) {};
//                    ^ punctuation.section.group.begin
//                      ^ keyword.operator.assignment
//                        ^ punctuation.section.group.end


var CONST;
//  ^^^^^ variable.other.constant

return;
{a: 1};
// ^ meta.block - meta.mapping

return/**/{a: 1}
//        ^^^^^^ meta.mapping - meta.block

return
{a: 1};
// ^ meta.block - meta.mapping

return/*
*/{a: 1}
//^^^^^^ meta.block - meta.mapping

const abc = new Set
if (true) {};
// <- keyword.control.conditional

var o = {
    a,
    b,
    c // comment
//  ^ variable.other.readwrite - entity.name.function
//    ^^ comment
}

var query = {
    type: type==undefined ? null : {$in: type.split(',')}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.mapping
//              ^^^^^^^^^ constant.language.undefined
//                        ^ keyword.operator.ternary
//                          ^^^^ constant.language.null
//                               ^ keyword.operator.ternary
//                                 ^ punctuation.section.block.begin
//                                   ^^ meta.mapping.key.js
//                                     ^ punctuation.separator.key-value.js
//                                                      ^ punctuation.section.block.end
};

var str = `Hello, ${name}!`;
//        ^^^^^^^^^^^^^^^^^ meta.string
//        ^^^^^^^^ string.quoted.other
//                ^^^^^^^ meta.interpolation - string
//                       ^^ string.quoted.other
//                ^^ punctuation.section.interpolation.begin
//                  ^^^^ source.js.embedded variable.other.readwrite
//                      ^ punctuation.section.interpolation.end

function yy (a, b) {
// ^^^^^^^^^^^^^^^^^ meta.function
// ^^^^^^^^^^^^^^^ meta.function.declaration
//       ^^ entity.name.function
//          ^ punctuation.section.group.begin
//           ^ variable.parameter.function
//            ^ punctuation.separator.parameter.function
//              ^ variable.parameter.function
//               ^ punctuation.section.group.end
//                 ^ meta.block punctuation.section.block.begin
}
// <- meta.function meta.block punctuation.section.block

// Integers

    123_456_789_0n;
//  ^^^^^^^^^^^^^^ constant.numeric.integer.decimal
//               ^ storage.type.numeric

    0;
//  ^ constant.numeric.integer.decimal

    123 .foo;
//  ^^^ constant.numeric.integer.decimal
//      ^ punctuation.accessor
//       ^^^ meta.property.object

    +123;
//  ^ keyword.operator.arithmetic
//   ^^^ constant.numeric.integer.decimal - keyword

    -123;
//  ^ keyword.operator.arithmetic
//   ^^^ constant.numeric.integer.decimal - keyword

    + 123;
//  ^ keyword.operator.arithmetic

    123xyz;
//  ^^^^^^ invalid.illegal.numeric.decimal

    0123456789;
//  ^^^^^^^^^^ constant.numeric.integer.octal invalid.deprecated.numeric.octal

    0123456789xyz;
//  ^^^^^^^^^^^^^ invalid.illegal.numeric.octal

    0123456789.xyz;
//  ^^^^^^^^^^ invalid.deprecated.numeric.octal
//            ^ punctuation.accessor
//             ^^^ meta.property.object

    0123456789.123;
//  ^^^^^^^^^^ invalid.deprecated.numeric.octal
//            ^ punctuation.accessor
//             ^^^ invalid.illegal.illegal-identifier

    0b0110_1001_1001_0110n;
//  ^^^^^^^^^^^^^^^^^^^^^^ constant.numeric.integer.binary
//  ^^ punctuation.definition.numeric.base
//                       ^ storage.type.numeric

    0o0123_4567n;
//  ^^^^^^^^^^^^ constant.numeric.integer.octal
//  ^^ punctuation.definition.numeric.base
//             ^ storage.type.numeric

    0x01_23_45_67_89_ab_CD_efn;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^ constant.numeric.integer.hexadecimal
//  ^^ punctuation.definition.numeric.base
//                           ^ storage.type.numeric

    0B0; 0O0; 0X0;
//  ^^^ constant.numeric.integer.binary
//  ^^ punctuation.definition.numeric.base
//       ^^^ constant.numeric.integer.octal
//       ^^ punctuation.definition.numeric.base
//            ^^^ constant.numeric.integer.hexadecimal
//            ^^ punctuation.definition.numeric.base

    0b1.foo;
//  ^^^^^^^ - invalid
//  ^^^ constant.numeric.integer.binary
//  ^^ punctuation.definition.numeric.base
//     ^ punctuation.accessor
//      ^^^ meta.property.object

    0b1.0;
//  ^^^ constant.numeric.integer.binary
//  ^^ punctuation.definition.numeric.base
//     ^ punctuation.accessor
//      ^ invalid.illegal.illegal-identifier

    0b123;
//  ^^^^^ invalid.illegal.numeric.binary


// Floats

    1_234_567_890.123_456_789_0;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ constant.numeric.float.decimal

    .123_456_789_0;
//  ^^^^^^^^^^^^^^ constant.numeric.float.decimal
//  ^ punctuation.separator.decimal

    12345e6_7_8;
//  ^^^^^^^^^^^ constant.numeric.float.decimal

    123.456e+789;
//  ^^^^^^^^^^^^ constant.numeric.float.decimal
//     ^ punctuation.separator.decimal

    .123E-7_8_9;
//  ^^^^^^^^^^^ constant.numeric.float.decimal
//  ^ punctuation.separator.decimal

    0123.45;
//  ^^^^ constant.numeric.integer.octal invalid.deprecated.numeric.octal
//      ^ punctuation.accessor
//       ^^ invalid.illegal - constant.numeric

    123.4foo;
//  ^^^^^^^^ invalid.illegal.numeric.decimal

    123.4e+foo;
//  ^^^^^^ invalid.illegal.numeric.decimal

    123..foo;
//  ^^^^ constant.numeric.float.decimal
//      ^ punctuation.accessor
//       ^^^ meta.property.object

debugger;
// <- keyword.control.flow.debugger.js

debugger
[]
// <- meta.sequence

    a ?? b;
//    ^^ keyword.operator.logical

    a.?b.?c;
//   ^^ punctuation.accessor
//     ^ meta.property.object
//      ^^ punctuation.accessor
//        ^ meta.property.object

    a.?[propName];
//   ^^^^^^^^^^^^ meta.brackets
//   ^^ punctuation.accessor
//     ^ punctuation.section.brackets.begin

    a.?();
//  ^^^^^ meta.function-call
//  ^ variable.function
//   ^^^^ meta.group
//   ^^ punctuation.accessor
//     ^ punctuation.section.group.begin

    a.b.?();
//  ^^^^^^^ meta.function-call.method
//    ^ variable.function
//     
