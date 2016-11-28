// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).tmLanguage"

<div className key></div>
//^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//             ^^^ meta.jsx entity.other.attribute-name
//                ^ meta.jsx meta.tag punctuation.definition.tag.end
//                 ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                   ^^^ meta.jsx meta.tag entity.name.tag
//                      ^ meta.jsx meta.tag punctuation.definition.tag.end

<div /*cats*/ className /*dogs*/ key></div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^ meta.jsx comment.block
//   ^^ meta.jsx comment.block punctuation.definition.comment.begin
//         ^^ meta.jsx comment.block punctuation.definition.comment.end
//            ^^^^^^^^^ meta.jsx entity.other.attribute-name
//                      ^^^^^^^^ meta.jsx comment.block
//                      ^^ meta.jsx comment.block punctuation.definition.comment.begin
//                            ^^ meta.jsx comment.block punctuation.definition.comment.end
//                               ^^^ meta.jsx entity.other.attribute-name
//                                  ^ meta.jsx meta.tag punctuation.definition.tag.end
//                                   ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                                     ^^^ meta.jsx meta.tag entity.name.tag
//                                        ^ meta.jsx meta.tag punctuation.definition.tag.end

<div /*cats*/className/*dogs*/ key></div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^ meta.jsx comment.block
//   ^^ meta.jsx comment.block punctuation.definition.comment.begin
//         ^^ meta.jsx comment.block punctuation.definition.comment.end
//           ^^^^^^^^^ meta.jsx entity.other.attribute-name
//                    ^^^^^^^^ meta.jsx comment.block
//                    ^^ meta.jsx comment.block punctuation.definition.comment.begin
//                          ^^ meta.jsx comment.block punctuation.definition.comment.end
//                             ^^^ meta.jsx entity.other.attribute-name
//                                ^ meta.jsx meta.tag punctuation.definition.tag.end
//                                 ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                                   ^^^ meta.jsx meta.tag entity.name.tag
//                                      ^ meta.jsx meta.tag punctuation.definition.tag.end

<div className='MyClass' key></div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//             ^^^^^^^^^ meta.jsx string.quoted
//             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                       ^^^ meta.jsx entity.other.attribute-name
//                          ^ meta.jsx meta.tag punctuation.definition.tag.end
//                           ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                             ^^^ meta.jsx meta.tag entity.name.tag
//                                ^ meta.jsx meta.tag punctuation.definition.tag.end

<div className='MyClass' key={1} ></div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//             ^^^^^^^^^ meta.jsx string.quoted
//             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                       ^^^ meta.jsx entity.other.attribute-name
//                          ^ meta.jsx keyword.operator.assignment
//                           ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                            ^ meta.jsx meta.embedded.expression constant.numeric
//                             ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                               ^ meta.jsx meta.tag punctuation.definition.tag.end
//                                ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                                  ^^^ meta.jsx meta.tag entity.name.tag
//                                     ^ meta.jsx meta.tag punctuation.definition.tag.end

<div className='MyClass' key={1} />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//             ^^^^^^^^^ meta.jsx string.quoted
//             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                       ^^^ meta.jsx entity.other.attribute-name
//                          ^ meta.jsx keyword.operator.assignment
//                           ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                            ^ meta.jsx meta.embedded.expression constant.numeric
//                             ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                               ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className = 'MyClass' key={1} />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
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

<div className = 'MyClass' key={() => this.setState({})} />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//             ^ meta.jsx keyword.operator.assignment
//               ^^^^^^^^^ meta.jsx string.quoted
//               ^ meta.jsx string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx string.quoted punctuation.definition.string.end
//                         ^^^ meta.jsx entity.other.attribute-name
//                            ^ meta.jsx keyword.operator.assignment
//                             ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression
//                             ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                              ^^^^^ meta.jsx meta.embedded.expression meta.function.arrow
//                              ^ meta.jsx meta.embedded.expression meta.function.arrow punctuation.definition.parameters.begin
//                               ^ meta.jsx meta.embedded.expression meta.function.arrow punctuation.definition.parameters.end
//                                 ^^ meta.jsx meta.embedded.expression meta.function.arrow storage.type.function.arrow
//                                    ^^^^ meta.jsx meta.embedded.expression variable.language.this
//                                        ^ meta.jsx meta.embedded.expression keyword.operator.accessor
//                                         ^^^^^^^^ meta.jsx meta.embedded.expression meta.function-call.method.with-arguments variable.function
//                                                 ^ meta.jsx meta.embedded.expression meta.group.braces.round meta.brace.round.begin
//                                                  ^ meta.jsx meta.embedded.expression meta.group.braces.round meta.brace.curly.begin
//                                                   ^ meta.jsx meta.embedded.expression meta.group.braces.round meta.brace.curly.end
//                                                    ^ meta.jsx meta.embedded.expression meta.group.braces.round meta.brace.round.end
//                                                     ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                                       ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div class-Name= 'MyClass' key />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^^ meta.jsx entity.other.attribute-name
//             ^ meta.jsx keyword.operator.assignment
//               ^^^^^^^^^ meta.jsx string.quoted
//               ^ meta.jsx string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx string.quoted punctuation.definition.string.end
//                         ^^^ meta.jsx entity.other.attribute-name
//                             ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className= 'MyClass' key =  '' />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//              ^^^^^^^^^ meta.jsx string.quoted
//              ^ meta.jsx string.quoted punctuation.definition.string.begin
//                      ^ meta.jsx string.quoted punctuation.definition.string.end
//                        ^^^ meta.jsx entity.other.attribute-name
//                            ^ meta.jsx keyword.operator.assignment
//                               ^ meta.jsx string.quoted punctuation.definition.string.begin
//                                ^ meta.jsx string.quoted punctuation.definition.string.end
//                                  ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className = 'MyClass'
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//             ^ meta.jsx keyword.operator.assignment
//               ^^^^^^^^^ meta.jsx string.quoted
//               ^ meta.jsx string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx string.quoted punctuation.definition.string.end
  key={1} />
//^^^ meta.jsx entity.other.attribute-name
//   ^ meta.jsx keyword.operator.assignment
//    ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//     ^ meta.jsx meta.embedded.expression constant.numeric
//      ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//        ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  className = 'MyClass'
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^^^^^^^^^ meta.jsx entity.other.attribute-name
//          ^ meta.jsx keyword.operator.assignment
//            ^^^^^^^^^ meta.jsx string.quoted
//            ^ meta.jsx string.quoted punctuation.definition.string.begin
//                    ^ meta.jsx string.quoted punctuation.definition.string.end
  key={1} />
//^^^ meta.jsx entity.other.attribute-name
//   ^ meta.jsx keyword.operator.assignment
//    ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//     ^ meta.jsx meta.embedded.expression constant.numeric
//      ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//        ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
  = 'MyClass' key={1} />
//^ meta.jsx keyword.operator.assignment
//  ^^^^^^^^^ meta.jsx string.quoted
//  ^ meta.jsx string.quoted punctuation.definition.string.begin
//          ^ meta.jsx string.quoted punctuation.definition.string.end
//            ^^^ meta.jsx entity.other.attribute-name
//               ^ meta.jsx keyword.operator.assignment
//                ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                 ^ meta.jsx meta.embedded.expression constant.numeric
//                  ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                    ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
  =
//^ meta.jsx keyword.operator.assignment
  'MyClass' key={1} />
//^^^^^^^^^ meta.jsx string.quoted
//^ meta.jsx string.quoted punctuation.definition.string.begin
//        ^ meta.jsx string.quoted punctuation.definition.string.end
//          ^^^ meta.jsx entity.other.attribute-name
//             ^ meta.jsx keyword.operator.assignment
//              ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//               ^ meta.jsx meta.embedded.expression constant.numeric
//                ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                  ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className/*cats*/= 'MyClass' key />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^^^^^^^^ meta.jsx comment.block
//            ^^ meta.jsx comment.block punctuation.definition.comment.begin
//                  ^^ meta.jsx comment.block punctuation.definition.comment.end
//                    ^ meta.jsx keyword.operator.assignment
//                      ^^^^^^^^^ meta.jsx string.quoted
//                      ^ meta.jsx string.quoted punctuation.definition.string.begin
//                              ^ meta.jsx string.quoted punctuation.definition.string.end
//                                ^^^ meta.jsx entity.other.attribute-name
//                                    ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className=/*dogs*/'MyClass' key />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//             ^^^^^^^^ meta.jsx comment.block
//             ^^ meta.jsx comment.block punctuation.definition.comment.begin
//                   ^^ meta.jsx comment.block punctuation.definition.comment.end
//                     ^^^^^^^^^ meta.jsx string.quoted
//                     ^ meta.jsx string.quoted punctuation.definition.string.begin
//                             ^ meta.jsx string.quoted punctuation.definition.string.end
//                               ^^^ meta.jsx entity.other.attribute-name
//                                   ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className/*cats*/=/*dogs*/'MyClass' key />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^^^^^^^^ meta.jsx comment.block
//            ^^ meta.jsx comment.block punctuation.definition.comment.begin
//                  ^^ meta.jsx comment.block punctuation.definition.comment.end
//                    ^ meta.jsx keyword.operator.assignment
//                     ^^^^^^^^ meta.jsx comment.block
//                     ^^ meta.jsx comment.block punctuation.definition.comment.begin
//                           ^^ meta.jsx comment.block punctuation.definition.comment.end
//                             ^^^^^^^^^ meta.jsx string.quoted
//                             ^ meta.jsx string.quoted punctuation.definition.string.begin
//                                     ^ meta.jsx string.quoted punctuation.definition.string.end
//                                       ^^^ meta.jsx entity.other.attribute-name
//                                           ^^ meta.jsx meta.tag punctuation.definition.tag.end


// tight greater-/less-than operations.

for (var i=1; i<table.rows.length; i++) {
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//^ meta.for keyword.control.loop
//<- source.js
//  ^ meta.brace.round.begin
//   ^^^ storage.type
//       ^ variable.other.readwrite
//        ^ keyword.operator.assignment
//         ^ constant.numeric
//          ^ punctuation.terminator.statement
//            ^ variable.other.readwrite
//             ^ keyword.operator.relational
//              ^^^^^ variable.other.object variable.other.object
//                   ^ keyword.operator.accessor
//                    ^^^^ meta.property.object variable.other.property
//                        ^ keyword.operator.accessor
//                         ^^^^^^ meta.property.object variable.other.property
//                               ^ punctuation.terminator.statement
//                                 ^ variable.other.readwrite
//                                  ^^ keyword.operator.arithmetic
//                                    ^ meta.brace.round.end
//                                      ^ meta.brace.curly.begin
  var row = table.rows[i]
//^^^ storage.type
//    ^^^ variable.other.readwrite
//        ^ keyword.operator.assignment
//          ^^^^^ variable.other.object variable.other.object
//               ^ keyword.operator.accessor
//                ^^^^ meta.property.object variable.other.property
//                    ^ meta.group.braces.square meta.brace.square.begin
//                     ^ meta.group.braces.square variable.other.readwrite
//                      ^ meta.group.braces.square meta.brace.square.end
  var data = {}
//^^^ storage.type
//    ^^^^ variable.other.readwrite
//         ^ keyword.operator.assignment
//           ^ meta.brace.curly.begin
//            ^ meta.brace.curly.end
  for (var j=0; j<row.cells.length; j++) {
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.for
//^^^ keyword.control.loop
//    ^ meta.brace.round.begin
//     ^^^ storage.type
//         ^ variable.other.readwrite
//          ^ keyword.operator.assignment
//           ^ constant.numeric
//            ^ punctuation.terminator.statement
//              ^ variable.other.readwrite
//               ^ keyword.operator.relational
//                ^^^ variable.other.object variable.other.object
//                   ^ keyword.operator.accessor
//                    ^^^^^ meta.property.object variable.other.property
//                         ^ keyword.operator.accessor
//                          ^^^^^^ meta.property.object variable.other.property
//                                ^ punctuation.terminator.statement
//                                  ^ variable.other.readwrite
//                                   ^^ keyword.operator.arithmetic
//                                     ^ meta.brace.round.end
//                                       ^ meta.brace.curly.begin
    data[top[j]] = row.cells[j].innerHTML;
//  ^^^^ variable.other.object variable.other.object
//      ^ meta.group.braces.square meta.brace.square.begin
//       ^^^ meta.group.braces.square variable.other.object variable.other.object
//          ^ meta.group.braces.square meta.group.braces.square meta.brace.square.begin
//           ^ meta.group.braces.square meta.group.braces.square variable.other.readwrite
//            ^^ meta.group.braces.square meta.brace.square.end
//            ^ meta.group.braces.square meta.group.braces.square meta.brace.square.end
//               ^ keyword.operator.assignment
//                 ^^^ variable.other.object variable.other.object
//                    ^ keyword.operator.accessor
//                     ^^^^^ meta.property.object variable.other.property
//                          ^ meta.group.braces.square meta.brace.square.begin
//                           ^ meta.group.braces.square variable.other.readwrite
//                            ^ meta.group.braces.square meta.brace.square.end
//                             ^ keyword.operator.accessor
//                              ^^^^^^^^^ meta.property.object variable.other.property
//                                       ^ punctuation.terminator.statement
  }
//^ meta.brace.curly.end
  data.push(data)
//^^^^ variable.other.object variable.other.object
//    ^ keyword.operator.accessor
//     ^^^^ meta.function-call.method.with-arguments variable.function
//         ^ meta.group.braces.round meta.brace.round.begin
//          ^^^^ meta.group.braces.round variable.other.readwrite
//              ^ meta.group.braces.round meta.brace.round.end
}
//<- meta.brace.curly.end



// illegal attribute name.
// missing equals, quotes
// and/or value.

<div class.Name />
//^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^ meta.jsx entity.other.attribute-name
//         ^^^^ meta.jsx entity.other.attribute-name
//              ^^ meta.jsx meta.tag punctuation.definition.tag.end
<div className? />
//^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//              ^^ meta.jsx meta.tag punctuation.definition.tag.end
<div $className />
//^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^^ meta.jsx entity.other.attribute-name
//              ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div = />
//^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx keyword.operator.assignment
//     ^^ meta.jsx meta.tag punctuation.definition.tag.end
<div / />
//^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//     ^^ meta.jsx meta.tag punctuation.definition.tag.end
<div < />
//^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//     ^^ meta.jsx meta.tag punctuation.definition.tag.end

<div className= />
//^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//              ^^ meta.jsx meta.tag punctuation.definition.tag.end
<div className=container />
//^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^ meta.jsx keyword.operator.assignment
//             ^^^^^^^^^ meta.jsx entity.other.attribute-name
//                       ^^ meta.jsx meta.tag punctuation.definition.tag.end
<div className=='container' />
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^^ meta.jsx keyword.operator.assignment
//              ^^^^^^^^^^^ meta.jsx string.quoted
//              ^ meta.jsx string.quoted punctuation.definition.string.begin
//                        ^ meta.jsx string.quoted punctuation.definition.string.end
//                          ^^ meta.jsx meta.tag punctuation.definition.tag.end
<div className'container' />
//^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^ meta.jsx entity.other.attribute-name
//            ^^^^^^^^^^^ meta.jsx string.quoted
//            ^ meta.jsx string.quoted punctuation.definition.string.begin
//                      ^ meta.jsx string.quoted punctuation.definition.string.end
//                        ^^ meta.jsx meta.tag punctuation.definition.tag.end

// comments between attributes,
// namespaced components, and
// non-alpha chars in tag/attribute names

<div /* comment */ onClick={this.onClick}>
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^^^^^^^^^^ meta.jsx comment.block
//   ^^ meta.jsx comment.block punctuation.definition.comment.begin
//              ^^ meta.jsx comment.block punctuation.definition.comment.end
//                 ^^^^^^^ meta.jsx entity.other.attribute-name
//                        ^ meta.jsx keyword.operator.assignment
//                         ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                          ^^^^ meta.jsx meta.embedded.expression variable.language.this
//                              ^ meta.jsx meta.embedded.expression keyword.operator.accessor
//                               ^^^^^^^ meta.jsx meta.embedded.expression meta.property.object variable.other.property
//                                      ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                       ^ meta.jsx meta.tag punctuation.definition.tag.end
  <Emoji.stuck_out_tongue />
//^ meta.jsx meta.tag punctuation.definition.tag.begin
// ^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.tag entity.name.tag
//                        ^^ meta.jsx meta.tag punctuation.definition.tag.end
  <StyledForms.Input
//^ meta.jsx meta.tag punctuation.definition.tag.begin
// ^^^^^^^^^^^^^^^^^ meta.jsx meta.tag entity.name.tag
    $parent={this}
//  ^^^^^^^ meta.jsx entity.other.attribute-name
//         ^ meta.jsx keyword.operator.assignment
//          ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//           ^^^^ meta.jsx meta.embedded.expression variable.language.this
//               ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
    has_emoji={true}
//  ^^^^^^^^^ meta.jsx entity.other.attribute-name
//           ^ meta.jsx keyword.operator.assignment
//            ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//             ^^^^ meta.jsx meta.embedded.expression constant.language.boolean.true
//                 ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
    /* here's another comment */
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx comment.block
//  ^^ meta.jsx comment.block punctuation.definition.comment.begin
//                            ^^ meta.jsx comment.block punctuation.definition.comment.end
    className='styled-input'>
//  ^^^^^^^^^ meta.jsx entity.other.attribute-name
//           ^ meta.jsx keyword.operator.assignment
//            ^^^^^^^^^^^^^^ meta.jsx string.quoted
//            ^ meta.jsx string.quoted punctuation.definition.string.begin
//                         ^ meta.jsx string.quoted punctuation.definition.string.end
//                          ^ meta.jsx meta.tag punctuation.definition.tag.end
  </StyledForms.Input>
//^^ meta.jsx meta.tag punctuation.definition.tag.begin
//  ^^^^^^^^^^^^^^^^^ meta.jsx meta.tag entity.name.tag
//                   ^ meta.jsx meta.tag punctuation.definition.tag.end
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end


/**
 * These have always work
 */
<div>
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//  ^ meta.jsx meta.tag punctuation.definition.tag.end
  {'it\'s with text inside'}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
// ^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression string.quoted
// ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.begin
//    ^^ meta.jsx meta.embedded.expression string.quoted constant.character.escape
//                        ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.end
//                         ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end

<div>{'it\'s with text inside'}</div>
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//  ^ meta.jsx meta.tag punctuation.definition.tag.end
//   ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//    ^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression string.quoted
//    ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.begin
//       ^^ meta.jsx meta.embedded.expression string.quoted constant.character.escape
//                           ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.end
//                            ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                             ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                               ^^^ meta.jsx meta.tag entity.name.tag
//                                  ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  attr=''>
//^^^^ meta.jsx entity.other.attribute-name
//    ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx string.quoted punctuation.definition.string.begin
//      ^ meta.jsx string.quoted punctuation.definition.string.end
//       ^ meta.jsx meta.tag punctuation.definition.tag.end
  {'it\'s with text inside'}
//^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
// ^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression string.quoted
// ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.begin
//    ^^ meta.jsx meta.embedded.expression string.quoted constant.character.escape
//                        ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.end
//                         ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end

<div attr="">{'it\'s with text inside'}</div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^ meta.jsx entity.other.attribute-name
//       ^ meta.jsx keyword.operator.assignment
//        ^ meta.jsx string.quoted punctuation.definition.string.begin
//         ^ meta.jsx string.quoted punctuation.definition.string.end
//          ^ meta.jsx meta.tag punctuation.definition.tag.end
//           ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//            ^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression string.quoted
//            ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.begin
//               ^^ meta.jsx meta.embedded.expression string.quoted constant.character.escape
//                                   ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.end
//                                    ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                     ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                                       ^^^ meta.jsx meta.tag entity.name.tag
//                                          ^ meta.jsx meta.tag punctuation.definition.tag.end
<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  attr="">
//^^^^ meta.jsx entity.other.attribute-name
//    ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx string.quoted punctuation.definition.string.begin
//      ^ meta.jsx string.quoted punctuation.definition.string.end
//       ^ meta.jsx meta.tag punctuation.definition.tag.end
  {"it's with text inside"}
//^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression string.quoted
// ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.end
//                        ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end

<div attr={}>{"it's with text inside"}</div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^ meta.jsx entity.other.attribute-name
//       ^ meta.jsx keyword.operator.assignment
//        ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//         ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//          ^ meta.jsx meta.tag punctuation.definition.tag.end
//           ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//            ^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression string.quoted
//            ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.begin
//                                  ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.end
//                                   ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                    ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                                      ^^^ meta.jsx meta.tag entity.name.tag
//                                         ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  attr={}>
//^^^^ meta.jsx entity.other.attribute-name
//    ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//      ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//       ^ meta.jsx meta.tag punctuation.definition.tag.end
  {"it's with text inside"}
//^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
// ^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx meta.embedded.expression string.quoted
// ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.begin
//                       ^ meta.jsx meta.embedded.expression string.quoted punctuation.definition.string.end
//                        ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end



/**
 * Fixed
 */
<div>
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//  ^ meta.jsx meta.tag punctuation.definition.tag.end
  it's with text inside
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end

<div>it's with text inside</div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//  ^ meta.jsx meta.tag punctuation.definition.tag.end
//                        ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                          ^^^ meta.jsx meta.tag entity.name.tag
//                             ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  attr=''>
//^^^^ meta.jsx entity.other.attribute-name
//    ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx string.quoted punctuation.definition.string.begin
//      ^ meta.jsx string.quoted punctuation.definition.string.end
//       ^ meta.jsx meta.tag punctuation.definition.tag.end
  it's with text inside
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end

<div attr="">it's with text inside</div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^ meta.jsx entity.other.attribute-name
//       ^ meta.jsx keyword.operator.assignment
//        ^ meta.jsx string.quoted punctuation.definition.string.begin
//         ^ meta.jsx string.quoted punctuation.definition.string.end
//          ^ meta.jsx meta.tag punctuation.definition.tag.end
//                                ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                                  ^^^ meta.jsx meta.tag entity.name.tag
//                                     ^ meta.jsx meta.tag punctuation.definition.tag.end
<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  attr="">
//^^^^ meta.jsx entity.other.attribute-name
//    ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx string.quoted punctuation.definition.string.begin
//      ^ meta.jsx string.quoted punctuation.definition.string.end
//       ^ meta.jsx meta.tag punctuation.definition.tag.end
  it's with text inside
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end

<div attr={}>it's with text inside</div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^ meta.jsx entity.other.attribute-name
//       ^ meta.jsx keyword.operator.assignment
//        ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//         ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//          ^ meta.jsx meta.tag punctuation.definition.tag.end
//                                ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                                  ^^^ meta.jsx meta.tag entity.name.tag
//                                     ^ meta.jsx meta.tag punctuation.definition.tag.end
<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  attr={}>
//^^^^ meta.jsx entity.other.attribute-name
//    ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//      ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//       ^ meta.jsx meta.tag punctuation.definition.tag.end
  it's with text inside
</div>
//^^^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^ meta.jsx meta.tag punctuation.definition.tag.end

<div attr>it's with text inside</div>
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
//   ^^^^ meta.jsx entity.other.attribute-name
//       ^ meta.jsx meta.tag punctuation.definition.tag.end
//                             ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                               ^^^ meta.jsx meta.tag entity.name.tag
//                                  ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  >it's with text inside</div>
//^ meta.jsx meta.tag punctuation.definition.tag.end
//                      ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                        ^^^ meta.jsx meta.tag entity.name.tag
//                           ^ meta.jsx meta.tag punctuation.definition.tag.end

<div
//^ meta.jsx meta.tag entity.name.tag
//<- meta.jsx meta.tag punctuation.definition.tag.begin
  attr={}
//^^^^ meta.jsx entity.other.attribute-name
//    ^ meta.jsx keyword.operator.assignment
//     ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//      ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
  >it's with text inside</div>
//^ meta.jsx meta.tag punctuation.definition.tag.end
//                      ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                        ^^^ meta.jsx meta.tag entity.name.tag
//                           ^ meta.jsx meta.tag punctuation.definition.tag.end
