// SYNTAX TEST "JavaScript (Babel).tmLanguage"

styled.h1`color: #ffcc00;`
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.styled-components
//^^^^ variable.other.object
//    ^ punctuation.accessor
//     ^^ variable.function.tagged-template
//       ^ punctuation.definition.string.template.begin
//        ^^^^^^^^^^^^^^^ source.css.embedded
//        ^^^^^^^^^^^^^^^ meta.property-list.css
//                       ^ punctuation.definition.string.template.end

    styled.h1``
//  ^^^^^^^^^^^ meta.styled-components
//^^ -meta.styled-components
//             ^^ -meta.styled-components

styled(Foo)`color: #ffcc00;`
//^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.styled-components
//^^^^^^^^^ meta.function-call.with-arguments
//         ^^^^^^^^^^^^^^^^^ -meta.function-call.with-arguments
//^^^^ variable.function
//    ^^^^^ meta.group
//    ^ punctuation.definition.group.begin
//     ^^^ variable.other.readwrite
//        ^ punctuation.definition.group.end
//         ^ punctuation.definition.string.template.begin
//          ^^^^^^^^^^^^^^^ source.css.embedded
//          ^^^^^^^^^^^^^^^ meta.property-list.css
//                         ^ punctuation.definition.string.template.end

    styled(Foo)``
//  ^^^^^^^^^^^^^ meta.styled-components
//^^ -meta.styled-components
//               ^^ -meta.styled-components

styled(Foo.bar())`color: #ffcc00;`
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.styled-components
//^^^^^^^^^^^^^^^ meta.function-call.with-arguments
//               ^^^^^^^^^^^^^^^^^ -meta.function-call.with-arguments
//^^^^ variable.function
//    ^^^^^^^^^^^ meta.group
//    ^ punctuation.definition.group.begin
//     ^^^ variable.other.class
//        ^ keyword.operator.accessor
//         ^^^ variable.function
//              ^ punctuation.definition.group.end
//               ^ punctuation.definition.string.template.begin
//                ^^^^^^^^^^^^^^^ source.css.embedded
//                ^^^^^^^^^^^^^^^ meta.property-list.css
//                               ^ punctuation.definition.string.template.end

    styled(Foo.bar())``
//  ^^^^^^^^^^^^^^^^^^^ meta.styled-components
//^^ -meta.styled-components
//                     ^^ -meta.styled-components

styled('div')`color: #ffcc00;`
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.styled-components
//^^^^^^^^^^^ meta.function-call.with-arguments
//           ^^^^^^^^^^^^^^^^^ -meta.function-call.with-arguments
//^^^^ variable.function
//    ^^^^^^^ meta.group
//    ^ punctuation.definition.group.begin
//     ^^^^^ string.quoted
//          ^ punctuation.definition.group.end
//           ^ punctuation.definition.string.template.begin
//            ^^^^^^^^^^^^^^^ source.css.embedded
//            ^^^^^^^^^^^^^^^ meta.property-list.css
//                           ^ punctuation.definition.string.template.end

injectGlobal`color: #ffcc00;`
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.styled-components
//^^^^^^^^^ variable.function.tagged-template
//          ^ punctuation.definition.string.template.begin
//           ^^^^^^^^^^^^^^^ source.css.embedded
//           ^^^^^^^^^^^^^^^ meta.property-list.css
//                          ^ punctuation.definition.string.template.end

    injectGlobal``
//  ^^^^^^^^^^^^^^ meta.styled-components
//^^ -meta.styled-components
//                ^^ -meta.styled-components

keyframes`0%{color: red;} 50%{color: blue;}`
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.styled-components
//^^^^^^^ variable.function.tagged-template
//       ^ punctuation.definition.string.template.begin
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ source.css.embedded
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.property-list.css
//                                         ^ punctuation.definition.string.template.end

    keyframes``
//  ^^^^^^^^^^^ meta.styled-components
//^^ -meta.styled-components
//             ^^ -meta.styled-components
