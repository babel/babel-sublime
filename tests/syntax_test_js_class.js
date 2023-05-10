// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

class MyClass extends TheirClass {
// <- keyword.declaration.class
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

    [w]
    get other() {}
//  ^^^ storage.type.accessor.js

    #v = 42;
//  ^ punctuation.definition.variable
//   ^ variable.other.readwrite
//     ^ keyword.operator.assignment
//       ^^ constant.numeric

    #u
    get other() {}
//  ^^^ storage.type.accessor.js

    f = a => b;
//  ^ entity.name.function variable.other.readwrite
//      ^^^^^^ meta.function
//      ^ variable.parameter.function

    g = function() {};
//  ^ entity.name.function variable.other.readwrite
//      ^^^^^^^^^^^^^ meta.function

    #h = function() {};
//  ^ punctuation.definition.variable
//   ^ entity.name.function variable.other.readwrite
//       ^^^^^^^^^^^^^ meta.function

    class = null;
//  ^^^^^ variable.other.readwrite

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
//         ^ entity.name.function variable.other.readwrite
//             ^^^^^^ meta.function
//             ^ variable.parameter.function

    static g = function() {};
//         ^ entity.name.function variable.other.readwrite
//             ^^^^^^^^^^^^^ meta.function

    static {
//  ^^^^^^ storage.modifier
//         ^ meta.block punctuation.section.block.begin
        this.#foo = 42;
//      ^^^^ variable.language.this
//          ^ punctuation.accessor
//           ^ punctuation.definition.variable
//            ^^^ meta.property.object
//                ^ keyword.operator.assignment
//                  ^^ meta.number.integer.decimal constant.numeric.value
    }
//  ^ meta.block punctuation.section.block.end

    static = 42;
//  ^^^^^^ variable.other.readwrite

    static() {}
//  ^^^^^^^^^^^ meta.function
//  ^^^^^^ entity.name.function

    accessor foo;
//  ^^^^^^^^ storage.modifier
//           ^^^ variable.other.readwrite

    foo // You thought I was a field...
    () { return '...but was a method all along!'; }
//  ^^ meta.class meta.block meta.function

    someMethod() {
        return #e * 2;
//             ^ punctuation.definition.variable
//              ^ variable.other.readwrite
//                ^ keyword.operator.arithmetic

        for (const param of this.#data.get('value')) {}
//                               ^ punctuation.definition.variable
//                                ^^^^ meta.property.object
    }

    #privateMethod() {}
//  ^^^^^^^^^^^^^^^^^^^ meta.function
//  ^^^^^^^^^^^^^^ entity.name.function.js
//  ^ punctuation.definition.js

    constructor(el)
//  ^^^^^^^^^^^^^^^ meta.function
    // ^ entity.name.function.constructor
    {
//  ^ meta.class meta.block meta.function meta.block punctuation.section.block
        $.foo = "";
        super(el);
    }
//  ^ meta.class meta.block meta.function meta.block punctuation.section.block

    get foo()
//  ^^^^^^^^^ meta.function
    // <- storage.type.accessor
    //   ^ entity.name.function
    {
        return this._foo;
    }

    get *foo()

    static foo(baz) {
//  ^^^^^^ storage.modifier
//         ^^^^^^^^^^ meta.function
    //     ^^^ entity.name.function

    }

    qux()
//  ^^^^^ meta.function
    { }
//  ^ meta.class meta.block meta.block punctuation.section.block.begin

    get bar () {
//  ^^^^^^^^^^^^ meta.function
//             ^ meta.class meta.block meta.block punctuation.section.block.begin
    // <- storage.type.accessor
    //   ^ entity.name.function
        return false;
    }

    baz() { return null }
//  ^^^^^^^^^^^^^^^^^^^^^ meta.function
    // <- entity.name.function

    get() { return "foobar"; }
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//  ^^^ entity.name.function.js - storage.type.accessor

    set (value) { return value; }
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
//       ^^^^^ variable.parameter.function.js
//  ^^^ entity.name.function.js - storage.type.accessor

    set  abc(value1, value2) { return value1 + value2; }
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function
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
//  ^^^^^^^^^^^^ meta.function

    static ['foo']() {}
//         ^^^^^^^^^^^^ meta.function

    async foo() {}
//  ^^^^^ keyword.declaration.async

    *foo() {}
//  ^ keyword.generator.asterisk

    async *foo() {}
//  ^^^^^ keyword.declaration.async
//        ^ keyword.generator.asterisk

    static *foo() {}
//  ^^^^^^ storage.modifier
//         ^ keyword.generator.asterisk
//          ^^^ entity.name.function

    static async foo() {}
//  ^^^^^^ storage.modifier
//         ^^^^^ keyword.declaration.async

    async() {}
//  ^^^^^^^^^^ meta.function
//  ^^^^^ entity.name.function
//       ^^ meta.function.parameters
//       ^ punctuation.section.group.begin
//        ^ punctuation.section.group.end
//          ^^ meta.block
//          ^ punctuation.section.block.begin
//           ^ punctuation.section.block.end

    static async() {}
//  ^^^^^^ storage.modifier
//         ^^^^^ entity.name.function
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
//                 ^^^^^ keyword.declaration.class

// Better highlighting while typing.
class
class
// <- keyword.declaration.class - entity.name.class

class{}/**/
//     ^ - meta.class

    @foo class Foo {}
//  ^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^ variable.annotation
//       ^^^^^ keyword.declaration.class

    @foo.bar class Foo {}
//  ^^^^^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^ variable.other.readwrite - variable.annotation
//       ^^^ variable.annotation
//           ^^^^^ keyword.declaration.class

    @(whatever) class Foo {}
//  ^^^^^^^^^^^ meta.annotation
//  ^ punctuation.definition.annotation
//   ^^^^^^^^^^ meta.group
//              ^^^^^ keyword.declaration.class
