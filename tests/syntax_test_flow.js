// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"
/* Built-in types */

    const x:boolean;
//          ^^^^^^^ support.type.primitive.boolean

    const x:number;
//          ^^^^^^ support.type.primitive.number

    const x:string;
//          ^^^^^^ support.type.primitive.string

    const x:null;
//          ^^^^ support.type.primitive.null

    const x:void;
//          ^^^^ support.type.primitive.void

    const x:mixed;
//          ^^^^^ support.type.mixed

    const x:any;
//          ^^^ support.type.any

    const x:*;
//          ^ constant.language.type.existential

    const x:$Keys<>;
//          ^^^^^ support.type.utility

/* Literal types */

    const x:true;
//  ^^^^^ storage.type
//        ^ meta.binding.name variable.other.readwrite
//         ^^^^^ meta.flow-type
//         ^ punctuation.separator.type
//          ^^^^ constant.language.boolean.true

    const x:42;
//  ^^^^^ storage.type
//        ^ meta.binding.name variable.other.readwrite
//         ^^^ meta.flow-type
//         ^ punctuation.separator.type
//          ^^ constant.numeric.integer.decimal

    const x:"foo";
//  ^^^^^ storage.type
//        ^ meta.binding.name variable.other.readwrite
//         ^^^^^^ meta.flow-type
//         ^ punctuation.separator.type
//          ^^^^^ string.quoted.double

    const x:'bar';
//  ^^^^^ storage.type
//        ^ meta.binding.name variable.other.readwrite
//         ^^^^^^ meta.flow-type
//         ^ punctuation.separator.type
//          ^^^^^ string.quoted.single

/* Utility types */

/* Named types */

    const x:foo;
//          ^^^ variable.other.class

/* Modifiers */

    const x: ?number;
//         ^^^^^^^^^ meta.flow-type
//           ^ storage.modifier.maybe
//            ^^^^^^ support.type.primitive.number

    const x: number[];
//         ^^^^^^^^^^ meta.flow-type
//           ^^^^^^ support.type.primitive.number
//                 ^^ storage.modifier.array

    const x: Array <number>;
//         ^^^^^^^^^^^^^^^^ meta.flow-type
//           ^^^^^ variable.other.class
//                 ^ punctuation.section.generic.begin
//                  ^^^^^^ support.type.primitive.number
//                        ^ punctuation.section.generic.end

    const x: number | string;
//         ^^^^^^^^^^^^^^^^^ meta.flow-type
//           ^^^^^^ support.type.primitive.number
//                  ^ keyword.operator.type.union
//                    ^^^^^^ support.type.primitive.string

    const x: number & string;
//         ^^^^^^^^^^^^^^^^^ meta.flow-type
//           ^^^^^^ support.type.primitive.number
//                  ^ keyword.operator.type.intersection
//                    ^^^^^^ support.type.primitive.string

    const x: typeof 42;
//         ^^^^^^^^^^^ meta.flow-type
//           ^^^^^^ keyword.operator
//                  ^^ constant.numeric.integer.decimal

    const x: number %checks;
//         ^^^^^^^^^^^^^^^^ meta.flow-type
//           ^^^^^^ support.type.primitive.number
//                  ^^^^^^^ storage.modifier.checks


/* Object types */

    const x: { foo: number };
//         ^^^^^^^^^^^^^^^^^ meta.flow-type
//           ^^^^^^^^^^^^^^^ meta.type.object
//             ^^^ meta.object-literal.key
//                ^ punctuation.separator.key-value
//                  ^^^^^^ support.type.primitive.number

    const x: {

        foo : number,
//      ^^^ meta.object-literal.key
//          ^ punctuation.separator.key-value
//            ^^^^^^ support.type.primitive.number
//                  ^ punctuation.separator.comma

        bar ?: number,
//      ^^^ meta.object-literal.key
//          ^ storage.modifier.optional
//           ^ punctuation.separator.key-value
//             ^^^^^^ support.type.primitive.number
//                   ^ punctuation.separator.comma

        [baz : string] : number,
//      ^ punctuation.section.brackets.begin
//       ^^^ meta.object-literal.key
//           ^ punctuation.separator.key-value
//             ^^^^^^ support.type.primitive.string
//                   ^ punctuation.section.brackets.end
//                     ^ punctuation.separator.key-value
//                       ^^^^^^ support.type.primitive.number
//                             ^ punctuation.separator.comma
    };

    const x: {| foo: number |};
//         ^^^^^^^^^^^^^^^^^^^ meta.flow-type
//           ^^^^^^^^^^^^^^^^^ meta.type.object.exact
//              ^^^ meta.object-literal.key
//                 ^ punctuation.separator.key-value
//                   ^^^^^^ support.type.primitive.number

    const x: {|

        foo : number,
//      ^^^ meta.object-literal.key
//          ^ punctuation.separator.key-value
//            ^^^^^^ support.type.primitive.number
//                  ^ punctuation.separator.comma

        bar ?: number,
//      ^^^ meta.object-literal.key
//          ^ storage.modifier.optional
//           ^ punctuation.separator.key-value
//             ^^^^^^ support.type.primitive.number
//                   ^ punctuation.separator.comma

        [baz : string] : number,
//      ^ punctuation.section.brackets.begin
//       ^^^ meta.object-literal.key
//           ^ punctuation.separator.key-value
//             ^^^^^^ support.type.primitive.string
//                   ^ punctuation.section.brackets.end
//                     ^ punctuation.separator.key-value
//                       ^^^^^^ support.type.primitive.number
//                             ^ punctuation.separator.comma
    |};

/* Tuple types */

    const x : [ number, boolean, string ];
//            ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.flow-type meta.sequence
//            ^ punctuation.section.brackets.begin
//              ^^^^^^ support.type.primitive.number
//                    ^ punctuation.separator.comma
//                      ^^^^^^^ support.type.primitive.boolean
//                             ^ punctuation.separator.comma
//                               ^^^^^^ support.type.primitive.string
//                                      ^ punctuation.section.brackets.end

/* Variables */

    var x : number;
//  ^^^ storage.type
//      ^ meta.binding.name variable.other.readwrite
//        ^^^^^^^^ meta.flow-type
//        ^ punctuation.separator.type
//          ^^^^^^ support.type.primitive.number
//                ^ punctuation.terminator.statement

    let x : number;
//  ^^^ storage.type
//      ^ meta.binding.name variable.other.readwrite
//        ^^^^^^^^ meta.flow-type
//        ^ punctuation.separator.type
//          ^^^^^^ support.type.primitive.number
//                ^ punctuation.terminator.statement

    const x : number;
//  ^^^^^ storage.type
//        ^ meta.binding.name variable.other.readwrite
//          ^^^^^^^^ meta.flow-type
//          ^ punctuation.separator.type
//            ^^^^^^ support.type.primitive.number
//                  ^ punctuation.terminator.statement

    const x: typeof 42, y: number;
//         ^^^^^^^^^^^ meta.flow-type
//                    ^ punctuation.separator.comma - meta.flow-type
//                       ^^^^^^^^ meta.flow-type

/* Functions */

    function f() : number {}
//  ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//           ^ entity.name.function
//               ^^^^^^^^ meta.flow-type
//                        ^^ meta.block

    function f<X, Y>() : number {}
//  ^^^^^^^^^^^^^^^^^^^^ meta.function.declaration
//           ^ entity.name.function
//            ^^^^^^  meta.generic.declaration
//            ^ punctuation.section.generic.begin
//             ^ variable.parameter.type
//              ^ punctuation.separator.comma
//                ^ variable.parameter.type
//                 ^ punctuation.section.generic.end
//                     ^^^^^^^^ meta.flow-type
//                              ^^ meta.block

function f(
    a : number,
//  ^ meta.binding.name variable.parameter.function
//    ^^^^^^^^ meta.flow-type
//    ^ punctuation.separator.type
//      ^^^^^^ support.type.primitive.number

    b ?: number,
//  ^ meta.binding.name variable.parameter.function
//    ^ storage.modifier.optional
//     ^^^^^^^^ meta.flow-type
//     ^ punctuation.separator.type
//       ^^^^^^ support.type.primitive.number

    ...c : Array<number>
//       ^^^^^^^^^^^^^^^ meta.flow-type
) {}

/* Classes */

class MyClass {
    foo() : number {}
//  ^^^^^^^^^^^^^^ meta.function.declaration
//        ^^^^^^^^ meta.flow-type
//        ^ punctuation.separator.type
//          ^^^^^^ support.type.primitive.number

    foo(
        a : number,
    //  ^ meta.binding.name variable.parameter.function
    //    ^^^^^^^^ meta.flow-type
    //    ^ punctuation.separator.type
    //      ^^^^^^ support.type.primitive.number

        b ?: number,
    //  ^ meta.binding.name variable.parameter.function
    //    ^ storage.modifier.optional
    //     ^^^^^^^^ meta.flow-type
    //     ^ punctuation.separator.type
    //       ^^^^^^ support.type.primitive.number

        ...c : Array<number>
    //       ^^^^^^^^^^^^^^^ meta.flow-type
    ) {}

    bar: number;
//     ^^^^^^^^ meta.flow-type
//     ^ punctuation.separator.type
//       ^^^^^^ support.type.primitive.number

    bar: number = 42;
//     ^^^^^^^^ meta.flow-type
//     ^ punctuation.separator.type
//       ^^^^^^ support.type.primitive.number
//              ^ keyword.operator.assignment
//                ^^ constant.numeric.integer.decimal
}

    class MyClass <X, Y> {}
//  ^^^^^^^^^^^^^^^^^^^^^^^ meta.class
//  ^^^^^ storage.type.class
//        ^^^^^^^ entity.name.class
//                ^^^^^^  meta.generic.declaration
//                ^ punctuation.section.generic.begin
//                 ^ variable.parameter.type
//                  ^ punctuation.separator.comma
//                    ^ variable.parameter.type
//                     ^ punctuation.section.generic.end

    class MyClass extends Parent<X, Y> {}
//                ^^^^^^^ storage.modifier.extends
//                        ^^^^^^ entity.other.inherited-class
//                              ^^^^^^ meta.generic

/* Type aliases */

    type MyType = number;
//  ^^^^^^^^^^^^^^^^^^^^ meta.declaration.type - meta.declaration.type meta.declaration.type
//  ^^^^ storage.type
//       ^^^^^^ entity.name.type
//              ^ keyword.operator.assignment
//                ^^^^^^ support.type.primitive.number

    type MyType<X, Y> = number;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.declaration.type
//  ^^^^ storage.type
//       ^^^^^^ entity.name.type
//             ^^^^^^  meta.generic.declaration
//             ^ punctuation.section.generic.begin
//              ^ variable.parameter.type
//               ^ punctuation.separator.comma
//                 ^ variable.parameter.type
//                  ^ punctuation.section.generic.end
//                    ^ keyword.operator.assignment
//                      ^^^^^^ support.type.primitive.number

    type;
//  ^^^^ variable.other.readwrite - storage

    type = function() {};
//  ^^^^^^^^^^^^^^^^^^^^ meta.function
//  ^^^^ entity.name.function variable.other.readwrite - storage

    type
//  ^^^^ storage.type
    /foo/g;
//  ^ keyword.operator.arithmetic - string

    type
//  ^^^^ storage.type
    foo;
//  ^^^ meta.declaration.type entity.name.type

    type /**/ foo;
//            ^^^ meta.declaration.type entity.name.type

/* Type casting expressions */

    (42 : number);
//  ^^^^^^^^^^^^^ meta.group
//  ^ punctuation.section.group
//   ^^ constant.numeric.integer.decimal
//      ^^^^^^^^ meta.flow-type
//      ^ punctuation.separator.type
//        ^^^^^^ support.type.primitive.number
//              ^ punctuation.section.group

// Opaque aliases
// Interface types
// Arrow functions
// Module Types
// Special comments

/* Imports/exports */

    import { type Foo } from 'bar';
//           ^^^^ storage.type
//                ^^^ variable.other.readwrite

    import type Foo from 'bar';
//         ^^^^ storage.type
//              ^^^ variable.other.readwrite

    export type { Foo };
//         ^^^^ storage.type
//                ^^^ variable.other.readwrite

    export type Foo = bar;
//         ^^^^ storage.type
//              ^^^ entity.name.type

    import typeof React from 'React';
//         ^^^^^^ keyword.operator
//                ^^^^^ variable.other.readwrite
//                      ^^^^ keyword.control.import-export

    import {typeof useState} from 'React';
//          ^^^^^^ keyword.operator
//                 ^^^^^^^^ variable.other.readwrite
//                           ^^^^ keyword.control.import-export

    import typeof {useState} from 'React';
//         ^^^^^^ keyword.operator
//                 ^^^^^^^^ variable.other.readwrite
//                           ^^^^ keyword.control.import-export

    import {typeof useState as UseState} from 'React';
//          ^^^^^^ keyword.operator
//                 ^^^^^^^^ variable.other.readwrite
//                          ^^ keyword.control.import-export

    import typeof {useState as UseState} from 'React';
//         ^^^^^^ keyword.operator
//                 ^^^^^^^^ variable.other.readwrite
//                          ^^ keyword.control.import-export
