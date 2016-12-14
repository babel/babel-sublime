// SYNTAX TEST "JavaScript (Babel).tmLanguage"

styled.h1`color:palevioletred;`
//^^^^ source.js source.css.embedded.js variable.other.object.js
//    ^ source.js source.css.embedded.js keyword.operator.accessor
//     ^^ source.js source.css.embedded.js meta.function entity.name.function
//       ^ source.js source.css.embedded.js string.interpolated.css keyword.other.template.begin.css
//        ^^^^^ source.js source.css.embedded.js meta.property-list.css meta.property-name.css support.type.property-name.css
//             ^ source.js source.css.embedded.js meta.property-list.css meta.property-value.css punctuation.separator.key-value.css
//              ^^^^^^^^^^^^^ source.js source.css.embedded.js meta.property-list.css meta.property-value.css invalid.deprecated.color.w3c-non-standard-color-name.css
//                           ^ source.js source.css.embedded.js meta.property-list.css meta.property-value.css punctuation.terminator.rule.css
//                            ^ source.js source.css.embedded.js string.interpolated.css keyword.other.template.end.css

injectGlobal`body{color:#ffcc00;}`
//^^^^^^^^^^ source.js source.css.embedded.js entity.name.function.js
//          ^ source.js string.interpolated.css keyword.other.template.begin.css
//           ^^^^ source.js source.css.embedded.js entity.name.tag.scss
//               ^ source.js source.css.embedded.js meta.property-list.scss punctuation.section.property-list.begin.scss
//                ^^^^^ source.js source.css.embedded.js meta.property-list.scss meta.property-name.scss support.type.property-name.scss
//                     ^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss punctuation.separator.key-value.scss
//                      ^^^^^^^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss constant.other.color.rgb-value.scss
//                             ^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss punctuation.terminator.rule.scss
//                              ^ source.js source.css.embedded.js meta.property-list.scss punctuation.section.property-list.end.scss
//                               ^ source.js source.css.embedded.js string.interpolated.css keyword.other.template.end.css

keyframes`0%{color:palevioletred;}50%{color:dodgerblue;}`
//^^^^^^^ source.js source.css.embedded.js entity.name.function.js
//       ^ source.js string.interpolated.css keyword.other.template.begin.css
//        ^^ source.js source.css.embedded.js
//          ^ source.js source.css.embedded.js meta.property-list.scss punctuation.section.property-list.begin.scss
//           ^^^^^ source.js source.css.embedded.js meta.property-list.scss meta.property-name.scss support.type.property-name.scss
//                ^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss punctuation.separator.key-value.scss
//                 ^^^^^^^^^^^^^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss invalid.deprecated.color.w3c-non-standard-color-name.scss
//                              ^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss punctuation.terminator.rule.scss
//                               ^ source.js source.css.embedded.js meta.property-list.scss punctuation.section.property-list.end.scss
//                                    ^^^^^ source.js source.css.embedded.js meta.property-list.scss meta.property-name.scss support.type.property-name.scss
//                                         ^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss punctuation.separator.key-value.scss
//                                          ^^^^^^^^^^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss invalid.deprecated.color.w3c-non-standard-color-name.scss
//                                                    ^ source.js source.css.embedded.js meta.property-list.scss meta.property-value.scss punctuation.terminator.rule.scss
//                                                     ^ source.js source.css.embedded.js meta.property-list.scss punctuation.section.property-list.end.scss
//                                                      ^ source.js source.css.embedded.js string.interpolated.css keyword.other.template.end.css
