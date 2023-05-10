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
//  ^^^^^ keyword.declaration
//        ^ meta.binding.name variable.other.readwrite
//         ^^^^^ meta.flow-type
//         ^ punctuation.separator.type
//          ^^^^ constant.language.boolean.true

    const x:42;
//  ^^^^^ keyword.declaration
//        ^ meta.binding.name variable.other.readwrite
//         ^^^ meta.flow-type
//         ^ punctuation.separator.type
//          ^^ meta.number.integer.decimal constant.numeric

    const x:"foo";
//  ^^^^^ keyword.declaration
//        ^ meta.binding.name variable.other.readwrite
//         ^^^^^^ meta.flow-type
//         ^ punctuation.separator.type
//          ^^^^^ string.quoted.double

    const x:'bar';
//  ^^^^^ keyword.declaration
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
//                 ^ punctuation.definition.generic.begin
//                  ^^^^^^ support.type.primitive.number
//                        ^ punctuation.definition.generic.end

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
//                  ^^ meta.number.integer.decimal constant.numeric

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
//  ^^^ keyword.declaration
//      ^ meta.binding.name variable.other.readwrite
//        ^^^^^^^^ meta.flow-type
//        ^ punctuation.separator.type
//          ^^^^^^ support.type.primitive.number
//                ^ punctuation.terminator.statement

    let x : number;
//  ^^^ keyword.declaration
//      ^ meta.binding.name variable.other.readwrite
//        ^^^^^^^^ meta.flow-type
//        ^ punctuation.separator.type
//          ^^^^^^ support.type.primitive.number
//                ^ punctuation.terminator.statement

    const x : number;
//  ^^^^^ keyword.declaration
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
//  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//           ^ entity.name.function
//               ^^^^^^^^ meta.flow-type
//                        ^^ meta.block

    function f<X, Y>() : number {}
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//           ^ entity.name.function
//            ^^^^^^  meta.generic.declaration
//            ^ punctuation.definition.generic.begin
//             ^ variable.parameter.type
//              ^ punctuation.separator.comma
//                ^ variable.parameter.type
//                 ^ punctuation.definition.generic.end
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
//  ^^^^^^^^^^^^^^^^^ meta.function
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
//                ^^ meta.number.integer.decimal constant.numeric
}

    class MyClass <X, Y> {}
//  ^^^^^^^^^^^^^^^^^^^^^^^ meta.class
//  ^^^^^ keyword.declaration.class
//        ^^^^^^^ entity.name.class
//                ^^^^^^  meta.generic.declaration
//                ^ punctuation.definition.generic.begin
//                 ^ variable.parameter.type
//                  ^ punctuation.separator.comma
//                    ^ variable.parameter.type
//                     ^ punctuation.definition.generic.end

    class MyClass extends Parent<X, Y> {}
//                ^^^^^^^ storage.modifier.extends
//                        ^^^^^^ entity.other.inherited-class
//                              ^^^^^^ meta.generic

/* Type aliases */

    type MyType = number;
//  ^^^^^^^^^^^^^^^^^^^^ meta.declaration.type - meta.declaration.type meta.declaration.type
//  ^^^^ keyword.declaration
//       ^^^^^^ entity.name.type
//              ^ keyword.operator.assignment
//                ^^^^^^ support.type.primitive.number

    type MyType<X, Y> = number;
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.declaration.type
//  ^^^^ keyword.declaration
//       ^^^^^^ entity.name.type
//             ^^^^^^  meta.generic.declaration
//             ^ punctuation.definition.generic.begin
//              ^ variable.parameter.type
//               ^ punctuation.separator.comma
//                 ^ variable.parameter.type
//                  ^ punctuation.definition.generic.end
//                    ^ keyword.operator.assignment
//                      ^^^^^^ support.type.primitive.number

    type;
//  ^^^^ variable.other.readwrite - storage

    type = function() {};
//  ^^^^ entity.name.function variable.other.readwrite - storage
//         ^^^^^^^^^^^^^ meta.function

    type
//  ^^^^ keyword.declaration
    /foo/g;
//  ^ keyword.operator.arithmetic - string

    type
//  ^^^^ keyword.declaration
    foo;
//  ^^^ meta.declaration.type entity.name.type

    type /**/ foo;
//            ^^^ meta.declaration.type entity.name.type

/* Type casting expressions */

    (42 : number);
//  ^^^^^^^^^^^^^ meta.group
//  ^ punctuation.section.group
//   ^^ meta.number.integer.decimal constant.numeric
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
//           ^^^^ keyword.declaration
//                ^^^ variable.other.readwrite

    import type Foo from 'bar';
//         ^^^^ keyword.declaration
//              ^^^ variable.other.readwrite

    export type { Foo };
//         ^^^^ keyword.declaration
//                ^^^ variable.other.readwrite

    export type Foo = bar;
//         ^^^^ keyword.declaration
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

/* Generics */

    foo<T>();
//  ^^^ variable.function
//     ^^^ meta.generic
//     ^ punctuation.definition.generic.begin
//      ^ variable.other.class
//       ^ punctuation.definition.generic.end
//        ^^ meta.group
//        ^ punctuation.section.group.begin
//         ^ punctuation.section.group.end
//          ^ punctuation.terminator.statement

    foo<T, U<V>>();
//  ^^^ variable.function
//     ^^^^^^^^^ meta.generic
//     ^ punctuation.definition.generic.begin
//      ^ variable.other.class
//       ^ punctuation.separator.comma
//         ^ variable.other.class
//          ^^^ meta.generic
//          ^ punctuation.definition.generic.begin
//           ^ variable.other.class
//            ^ punctuation.definition.generic.end
//             ^ punctuation.definition.generic.end
//              ^^ meta.group
//              ^ punctuation.section.group.begin
//               ^ punctuation.section.group.end
//                ^ punctuation.terminator.statement

    const C = (props: any): React.Node => {};
//                                     ^^ keyword.declaration.function

    <T,>() => {};
//  ^^^^^^^^^^^^ meta.function
//  ^^^^ meta.generic.declaration
//  ^ punctuation.definition.generic.begin
//   ^ variable.parameter.type
//    ^ punctuation.separator.comma
//     ^ punctuation.definition.generic.end
//         ^^ keyword.declaration.function

    (a < b && c <= d);
//     ^ keyword.operator.comparison
//              ^^ keyword.operator.comparison
