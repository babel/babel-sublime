// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).tmLanguage"

<div className? />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//              ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className? = 'MyClass' key={1} />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//              ^ meta.jsx keyword.operator.assignment
//                ^^^^^^^^^ meta.jsx string.quoted
//                ^ meta.jsx string.quoted punctuation.definition.string.begin
//                        ^ meta.jsx string.quoted punctuation.definition.string.end
//                          ^^^ meta.jsx entity.other.attribute-name
//                             ^ meta.jsx keyword.operator.assignment
//                              ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                               ^ meta.jsx meta.embedded.expression constant.numeric
//                                ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                  ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div .className= 'MyClass' key={1} />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//    ^^^^^^^^^ meta.jsx entity.other.attribute-name
//             ^ meta.jsx keyword.operator.assignment
//               ^^^^^^^^^ meta.jsx string.quoted
//               ^ meta.jsx string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx string.quoted punctuation.definition.string.end
//                         ^^^ meta.jsx entity.other.attribute-name
//                            ^ meta.jsx keyword.operator.assignment
//                             ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                              ^ meta.jsx meta.embedded.expression constant.numeric
//                               ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                 ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div clas#sName= 'MyClass' key />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^ meta.jsx entity.other.attribute-name
//        ^^^^^ meta.jsx entity.other.attribute-name
//             ^ meta.jsx keyword.operator.assignment
//               ^^^^^^^^^ meta.jsx string.quoted
//               ^ meta.jsx string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx string.quoted punctuation.definition.string.end
//                         ^^^ meta.jsx entity.other.attribute-name
//                             ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div class:Name ='MyClass' key />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^ meta.jsx entity.other.attribute-name
//         ^^^^ meta.jsx entity.other.attribute-name
//              ^ meta.jsx keyword.operator.assignment
//               ^^^^^^^^^ meta.jsx string.quoted
//               ^ meta.jsx string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx string.quoted punctuation.definition.string.end
//                         ^^^ meta.jsx entity.other.attribute-name
//                             ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className 'MyClass' key />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//             ^^^^^^^^^ meta.jsx string.quoted
//             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                       ^^^ meta.jsx entity.other.attribute-name
//                           ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  key
//^^^ meta.jsx entity.other.attribute-name
  {1} />
//^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
// ^ meta.jsx meta.embedded.expression constant.numeric
//  ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//    ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className= 'MyClass' key=cats />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//              ^^^^^^^^^ meta.jsx string.quoted
//              ^ meta.jsx string.quoted punctuation.definition.string.begin
//                      ^ meta.jsx string.quoted punctuation.definition.string.end
//                        ^^^ meta.jsx entity.other.attribute-name
//                           ^ meta.jsx keyword.operator.assignment
//                            ^^^^ meta.jsx entity.other.attribute-name
//                                 ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className= 'MyClass' key==cats />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//              ^^^^^^^^^ meta.jsx string.quoted
//              ^ meta.jsx string.quoted punctuation.definition.string.begin
//                      ^ meta.jsx string.quoted punctuation.definition.string.end
//                        ^^^ meta.jsx entity.other.attribute-name
//                           ^^ meta.jsx keyword.operator.assignment
//                             ^^^^ meta.jsx entity.other.attribute-name
//                                  ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className= 'MyClass' key== cats />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//              ^^^^^^^^^ meta.jsx string.quoted
//              ^ meta.jsx string.quoted punctuation.definition.string.begin
//                      ^ meta.jsx string.quoted punctuation.definition.string.end
//                        ^^^ meta.jsx entity.other.attribute-name
//                           ^^ meta.jsx keyword.operator.assignment
//                              ^^^^ meta.jsx entity.other.attribute-name
//                                   ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className= 'MyClass' key=
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//              ^^^^^^^^^ meta.jsx string.quoted
//              ^ meta.jsx string.quoted punctuation.definition.string.begin
//                      ^ meta.jsx string.quoted punctuation.definition.string.end
//                        ^^^ meta.jsx entity.other.attribute-name
//                           ^ meta.jsx keyword.operator.assignment
cats />
//^^ meta.jsx entity.other.attribute-name
//   ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className='MyClass' key / x>
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//             ^^^^^^^^^ meta.jsx string.quoted
//             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                       ^^^ meta.jsx entity.other.attribute-name
//                             ^ meta.jsx entity.other.attribute-name
//                              ^ meta.jsx meta.tag punctuation.definition.tag.end

<div className='MyClass' = 'cats' key= >
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//             ^^^^^^^^^ meta.jsx string.quoted
//             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                       ^ meta.jsx keyword.operator.assignment
//                         ^^^^^^ meta.jsx string.quoted
//                         ^ meta.jsx string.quoted punctuation.definition.string.begin
//                              ^ meta.jsx string.quoted punctuation.definition.string.end
//                                ^^^ meta.jsx entity.other.attribute-name
//                                   ^ meta.jsx keyword.operator.assignment
//                                     ^ meta.jsx meta.tag punctuation.definition.tag.end

<div = key= >
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx keyword.operator.assignment
//     ^^^ meta.jsx entity.other.attribute-name
//        ^ meta.jsx keyword.operator.assignment
//          ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  =
//^ meta.jsx keyword.operator.assignment
  key= >
//^^^ meta.jsx entity.other.attribute-name
//   ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  key
//^^^ meta.jsx entity.other.attribute-name
  = >
//^ meta.jsx keyword.operator.assignment
//  ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  'asdasd'>
//^^^^^^^^ meta.jsx string.quoted
//^ meta.jsx string.quoted punctuation.definition.string.begin
//       ^ meta.jsx string.quoted punctuation.definition.string.end
//        ^ meta.jsx meta.tag punctuation.definition.tag.end

<div < >
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//     ^ meta.jsx meta.tag punctuation.definition.tag.end

< >
//<- meta.jsx invalid.illegal.tag.incomplete

<div className 'MyClass' key=cats />
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//             ^^^^^^^^^ meta.jsx string.quoted
//             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                       ^^^ meta.jsx entity.other.attribute-name
//                          ^ meta.jsx keyword.operator.assignment
//                           ^^^^ meta.jsx entity.other.attribute-name
//                                ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className= 'MyClass' key=cats
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//              ^^^^^^^^^ meta.jsx string.quoted
//              ^ meta.jsx string.quoted punctuation.definition.string.begin
//                      ^ meta.jsx string.quoted punctuation.definition.string.end
//                        ^^^ meta.jsx entity.other.attribute-name
//                           ^ meta.jsx keyword.operator.assignment
//                            ^^^^ meta.jsx entity.other.attribute-name
