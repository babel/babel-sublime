// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).tmLanguage"

import React from 'react';
//^^^^ keyword.operator.module
//<- source.js
//     ^^^^^ variable.other.readwrite
//           ^^^^ keyword.operator.module
//                ^^^^^^^ string.quoted
//                ^ string.quoted punctuation.definition.string.begin
//                      ^ string.quoted punctuation.definition.string.end
//                       ^ punctuation.terminator.statement

import { InputsMixin } from './Forms';
//^^^^ keyword.operator.module
//<- source.js
//     ^^^^^^^^^^^^^^^ meta.group.braces.curly
//     ^ meta.group.braces.curly meta.brace.curly.begin
//       ^^^^^^^^^^^ meta.group.braces.curly variable.other.readwrite
//                   ^ meta.group.braces.curly meta.brace.curly.end
//                     ^^^^ keyword.operator.module
//                          ^^^^^^^^^ string.quoted
//                          ^ string.quoted punctuation.definition.string.begin
//                                  ^ string.quoted punctuation.definition.string.end
//                                   ^ punctuation.terminator.statement

export default <div><span /></div>
//^^^^ keyword.operator.module
//<- source.js
//     ^^^^^^^ keyword.control.loop
//            ^^^^^^^^^^^^^^^^^^^^ meta.jsx
//             ^ meta.jsx meta.tag punctuation.definition.tag.begin
//              ^^^ meta.jsx meta.tag entity.name.tag
//                 ^ meta.jsx meta.tag punctuation.definition.tag.end
//                  ^ meta.jsx meta.tag punctuation.definition.tag.begin
//                   ^^^^ meta.jsx meta.tag entity.name.tag
//                        ^^ meta.jsx meta.tag punctuation.definition.tag.end
//                          ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//                            ^^^ meta.jsx meta.tag entity.name.tag
//                               ^ meta.jsx meta.tag punctuation.definition.tag.end

export default React.createClass({
//^^^^ keyword.operator.module
//<- source.js
//     ^^^^^^^ keyword.control.loop
//             ^^^^^ meta.function-call.static.with-arguments variable.other.class
//                  ^ meta.function-call.static.with-arguments keyword.operator.accessor
//                   ^^^^^^^^^^^ meta.function-call.static.with-arguments variable.function
//                              ^ meta.group.braces.round meta.brace.round.begin
//                               ^ meta.brace.curly.begin

  mixins: [InputsMixin],
//^^^^^^ constant.other.object.key string.unquoted.label
//      ^ constant.other.object.key punctuation.separator.key-value
//        ^ meta.group.braces.square meta.brace.square.begin
//         ^^^^^^^^^^^ meta.group.braces.square variable.other.readwrite
//                    ^ meta.group.braces.square meta.brace.square.end
//                     ^ meta.delimiter.comma

  submit() {
//^^^^^^ meta.method string.unquoted entity.name.function
//      ^ meta.method punctuation.definition.parameters.begin
//       ^ meta.method punctuation.definition.parameters.end
//         ^ meta.brace.curly.begin

    var {email, question} = this.state;
//  ^^^ storage.type
//      ^^^^^^^^^^^^^^^^^ meta.group.braces.curly
//      ^ meta.group.braces.curly meta.brace.curly.begin
//       ^^^^^ meta.group.braces.curly variable.other.readwrite
//            ^ meta.group.braces.curly meta.delimiter.comma
//              ^^^^^^^^ meta.group.braces.curly variable.other.readwrite
//                      ^ meta.group.braces.curly meta.brace.curly.end
//                        ^ keyword.operator.assignment
//                          ^^^^ variable.language.this
//                              ^ keyword.operator.accessor
//                               ^^^^^ meta.property.object variable.other.property
//                                    ^ punctuation.terminator.statement
    request
//  ^^^^^^^ variable.other.readwrite

      .post(`${API_BASE}/askform`)
//    ^ keyword.operator.accessor
//     ^^^^ meta.function-call.method.with-arguments variable.function
//         ^ meta.group.braces.round meta.brace.round.begin
//          ^ meta.group.braces.round string.interpolated keyword.other.template.begin
//           ^^ meta.group.braces.round keyword.other.substitution.begin
//             ^^^^^^^^ meta.group.braces.round variable.other.constant
//                     ^ meta.group.braces.round keyword.other.substitution.end
//                      ^^^^^^^^^ meta.group.braces.round string.interpolated
//                              ^ meta.group.braces.round string.interpolated keyword.other.template.end
//                               ^ meta.group.braces.round meta.brace.round.end
      .send({email, question})
//    ^ keyword.operator.accessor
//     ^^^^ meta.function-call.method.with-arguments variable.function
//         ^ meta.group.braces.round meta.brace.round.begin
//          ^^^^^^^^^^^^^^^^^
//          ^ meta.brace.curly.begin
//           ^^^^^ variable.other.readwrite
//                ^ meta.delimiter.comma
//                  ^^^^^^^^ variable.other.readwrite
//                          ^ meta.brace.curly.end
//                           ^ meta.group.braces.round meta.brace.round.end
      .end((err, res) =>
//    ^ keyword.operator.accessor
//     ^^^ meta.function-call.method.with-arguments variable.function
//        ^ meta.group.braces.round meta.brace.round.begin
//         ^^^^^^^^^^^^^ meta.group.braces.round meta.function.arrow
//         ^ meta.group.braces.round meta.function.arrow punctuation.definition.parameters.begin
//          ^^^ meta.group.braces.round meta.function.arrow variable.parameter.function
//             ^ meta.group.braces.round meta.function.arrow punctuation.separator.parameter.function
//               ^^^ meta.group.braces.round meta.function.arrow variable.parameter.function
//                  ^ meta.group.braces.round meta.function.arrow punctuation.definition.parameters.end
//                    ^^ meta.group.braces.round meta.function.arrow storage.type.function.arrow
        this.setState({isValid: !err}));
//      ^^^^ meta.group.braces.round variable.language.this
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.round
//          ^ meta.group.braces.round keyword.operator.accessor
//           ^^^^^^^^ meta.group.braces.round meta.function-call.method.with-arguments variable.function
//                   ^ meta.group.braces.round meta.group.braces.round meta.brace.round.begin
//                    ^^^^^^^^^^^^^^^ meta.group.braces.round
//                    ^ meta.group.braces.round meta.brace.curly.begin
//                     ^^^^^^^ meta.group.braces.round constant.other.object.key string.unquoted.label
//                            ^ meta.group.braces.round constant.other.object.key punctuation.separator.key-value
//                              ^ meta.group.braces.round keyword.operator.logical
//                               ^^^ meta.group.braces.round variable.other.readwrite
//                                  ^ meta.group.braces.round meta.brace.curly.end
//                                   ^^ meta.group.braces.round meta.brace.round.end
//                                   ^ meta.group.braces.round meta.group.braces.round meta.brace.round.end
//                                     ^ punctuation.terminator.statement
  },
//^ meta.brace.curly.end
// ^ meta.delimiter.comma


  'key//1': function() {},
//^^^^^^^^^^^^^^^^^^^^ meta.function.json
//^ meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^^^ meta.function.json string.quoted entity.name.function
//       ^ meta.function.json string.quoted punctuation.definition.string.end
//        ^ meta.function.json punctuation.separator.key-value
//          ^^^^^^^^ meta.function.json storage.type.function
//                  ^ meta.function.json punctuation.definition.parameters.begin
//                   ^ meta.function.json punctuation.definition.parameters.end
//                     ^ meta.group.braces.curly meta.brace.curly.begin
//                      ^ meta.group.braces.curly meta.brace.curly.end
//                       ^ meta.delimiter.comma

  'key/***/1': function() {},
//^^^^^^^^^^^^^^^^^^^^^^^ meta.function.json
//^ meta.function.json string.quoted punctuation.definition.string.begin
// ^^^^^^^^^ meta.function.json string.quoted entity.name.function
//          ^ meta.function.json string.quoted punctuation.definition.string.end
//           ^ meta.function.json punctuation.separator.key-value
//             ^^^^^^^^ meta.function.json storage.type.function
//                     ^ meta.function.json punctuation.definition.parameters.begin
//                      ^ meta.function.json punctuation.definition.parameters.end
//                        ^ meta.group.braces.curly meta.brace.curly.begin
//                         ^ meta.group.braces.curly meta.brace.curly.end
//                          ^ meta.delimiter.comma


  render() {
//^^^^^^ meta.method string.unquoted entity.name.function
//      ^ meta.method punctuation.definition.parameters.begin
//       ^ meta.method punctuation.definition.parameters.end
//         ^ meta.group.braces.curly meta.brace.curly.begin
    var {email} = this.state;
//  ^^^ meta.group.braces.curly storage.type
//      ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin
//       ^^^^^ meta.group.braces.curly meta.group.braces.curly variable.other.readwrite
//            ^ meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
//              ^ meta.group.braces.curly keyword.operator.assignment
//                ^^^^ meta.group.braces.curly variable.language.this
//                    ^ meta.group.braces.curly keyword.operator.accessor
//                     ^^^^^ meta.group.braces.curly meta.property.object variable.other.property
//                          ^ meta.group.braces.curly punctuation.terminator.statement
    var list = this.props.secondary.map(pic => <img src={pic} />)}
//  ^^^ meta.group.braces.curly storage.type
//      ^^^^ meta.group.braces.curly variable.other.readwrite
//           ^ meta.group.braces.curly keyword.operator.assignment
//             ^^^^ meta.group.braces.curly variable.language.this
//                 ^ meta.group.braces.curly keyword.operator.accessor
//                  ^^^^^ meta.group.braces.curly meta.property.object variable.other.property
//                       ^ meta.group.braces.curly keyword.operator.accessor
//                        ^^^^^^^^^ meta.group.braces.curly meta.property.object variable.other.property
//                                 ^ meta.group.braces.curly keyword.operator.accessor
//                                  ^^^ meta.group.braces.curly meta.function-call.method.with-arguments variable.function
//                                     ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                                      ^^^^^^ meta.group.braces.curly meta.group.braces.round meta.function.arrow
//                                      ^^^ meta.group.braces.curly meta.group.braces.round meta.function.arrow variable.parameter.function
//                                          ^^ meta.group.braces.curly meta.group.braces.round meta.function.arrow storage.type.function.arrow
//                                            ^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.group.braces.round meta.jsx
//                                             ^ meta.group.braces.curly meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.begin
//                                              ^^^ meta.group.braces.curly meta.group.braces.round meta.jsx meta.tag entity.name.tag
//                                                  ^^^ meta.group.braces.curly meta.group.braces.round meta.jsx entity.other.attribute-name
//                                                     ^ meta.group.braces.curly meta.group.braces.round meta.jsx keyword.operator.assignment
//                                                      ^ meta.group.braces.curly meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                                                       ^^^ meta.group.braces.curly meta.group.braces.round meta.jsx meta.embedded.expression variable.other.readwrite
//                                                          ^ meta.group.braces.curly meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                                            ^^ meta.group.braces.curly meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.end
//                                                              ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                                                               ^ meta.group.braces.curly meta.brace.curly.end
    var multilineAttr = <a desc="ab
//  ^^^ storage.type
//      ^^^^^^^^^^^^^ variable.other.readwrite
//                    ^ keyword.operator.assignment
//                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.jsx
//                      ^ meta.jsx meta.tag punctuation.definition.tag.begin
//                       ^ meta.jsx meta.tag entity.name.tag
//                         ^^^^ meta.jsx entity.other.attribute-name
//                             ^ meta.jsx keyword.operator.assignment
//                              ^^^^^^^^^^^^^^^ meta.jsx string.quoted
//                              ^ meta.jsx string.quoted punctuation.definition.string.begin
      cdef"></a>
//        ^ meta.jsx string.quoted punctuation.definition.string.end
//         ^ meta.jsx meta.tag punctuation.definition.tag.end
//          ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//            ^ meta.jsx meta.tag entity.name.tag
//             ^ meta.jsx meta.tag punctuation.definition.tag.end

    return (
//  ^^^^^^ keyword.control.flow
//         ^ meta.group.braces.round meta.brace.round.begin
      <div {...this.props} overlay={<div>test</div>}>
//    ^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.begin
//     ^^^ meta.group.braces.round meta.jsx meta.tag entity.name.tag
//         ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//          ^^^ meta.group.braces.round meta.jsx meta.embedded.expression keyword.operator.spread
//             ^^^^ meta.group.braces.round meta.jsx meta.embedded.expression variable.language.this
//                 ^ meta.group.braces.round meta.jsx meta.embedded.expression keyword.operator.accessor
//                  ^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.property.object variable.other.property
//                       ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                         ^^^^^^^ meta.group.braces.round meta.jsx entity.other.attribute-name
//                                ^ meta.group.braces.round meta.jsx keyword.operator.assignment
//                                 ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                                  ^^^^^^^^^^^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.jsx
//                                  ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.jsx meta.tag punctuation.definition.tag.begin
//                                   ^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.jsx meta.tag entity.name.tag
//                                      ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.jsx meta.tag punctuation.definition.tag.end
//                                           ^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.jsx meta.tag punctuation.definition.tag.begin
//                                             ^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.jsx meta.tag entity.name.tag
//                                                ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.jsx meta.tag punctuation.definition.tag.end
//                                                 ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                                  ^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.end
        <ns:tag></ns:tag>
//      ^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.begin
//       ^^^^^^ meta.group.braces.round meta.jsx meta.tag entity.name.tag
//             ^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.end
//              ^^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.begin
//                ^^^^^^ meta.group.braces.round meta.jsx meta.tag entity.name.tag
//                      ^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.end

        {list}
//      ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//       ^^^^ meta.group.braces.round meta.jsx meta.embedded.expression variable.other.readwrite
//           ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end
        {[<span>in an array</span>]}
//      ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//       ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.brace.square.begin
//        ^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.jsx
//        ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.jsx meta.tag punctuation.definition.tag.begin
//         ^^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.jsx meta.tag entity.name.tag
//             ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.jsx meta.tag punctuation.definition.tag.end
//                         ^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.jsx meta.tag punctuation.definition.tag.begin
//                           ^^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.jsx meta.tag entity.name.tag
//                               ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.jsx meta.tag punctuation.definition.tag.end
//                                ^ meta.group.braces.round meta.jsx meta.embedded.expression meta.group.braces.square meta.brace.square.end
//                                 ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end

        <input /*cmt*/
//      ^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.begin
//       ^^^^^ meta.group.braces.round meta.jsx meta.tag entity.name.tag
//             ^^^^^^^ meta.group.braces.round meta.jsx comment.block
//             ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.begin
//                  ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.end
          /*cmt*/value/*cmt*/=/*cmt*/{email}/*cmt*/
//        ^^^^^^^ meta.group.braces.round meta.jsx comment.block
//        ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.begin
//             ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.end
//               ^^^^^ meta.group.braces.round meta.jsx entity.other.attribute-name
//                    ^^^^^^^ meta.group.braces.round meta.jsx comment.block
//                    ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.begin
//                         ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.end
//                           ^ meta.group.braces.round meta.jsx keyword.operator.assignment
//                            ^^^^^^^ meta.group.braces.round meta.jsx comment.block
//                            ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.begin
//                                 ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.end
//                                   ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                                    ^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression variable.other.readwrite
//                                         ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                          ^^^^^^^ meta.group.braces.round meta.jsx comment.block
//                                          ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.begin
//                                               ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.end
          onChange={/*cmt*/this.onChange/*cmt*/}
//        ^^^^^^^^ meta.group.braces.round meta.jsx entity.other.attribute-name
//                ^ meta.group.braces.round meta.jsx keyword.operator.assignment
//                 ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                  ^^^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression comment.block
//                  ^^ meta.group.braces.round meta.jsx meta.embedded.expression comment.block punctuation.definition.comment.begin
//                       ^^ meta.group.braces.round meta.jsx meta.embedded.expression comment.block punctuation.definition.comment.end
//                         ^^^^ meta.group.braces.round meta.jsx meta.embedded.expression variable.language.this
//                             ^ meta.group.braces.round meta.jsx meta.embedded.expression keyword.operator.accessor
//                              ^^^^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.property.object variable.other.property
//                                      ^^^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression comment.block
//                                      ^^ meta.group.braces.round meta.jsx meta.embedded.expression comment.block punctuation.definition.comment.begin
//                                           ^^ meta.group.braces.round meta.jsx meta.embedded.expression comment.block punctuation.definition.comment.end
//                                             ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end
          onClick={this.onClick}
//        ^^^^^^^ meta.group.braces.round meta.jsx entity.other.attribute-name
//               ^ meta.group.braces.round meta.jsx keyword.operator.assignment
//                ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                 ^^^^ meta.group.braces.round meta.jsx meta.embedded.expression variable.language.this
//                     ^ meta.group.braces.round meta.jsx meta.embedded.expression keyword.operator.accessor
//                      ^^^^^^^ meta.group.braces.round meta.jsx meta.embedded.expression meta.property.object variable.other.property
//                             ^ meta.group.braces.round meta.jsx meta.embedded.expression punctuation.section.embedded.end
          required/*cmt*/ />
//        ^^^^^^^^ meta.group.braces.round meta.jsx entity.other.attribute-name
//                ^^^^^^^ meta.group.braces.round meta.jsx comment.block
//                ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.begin
//                     ^^ meta.group.braces.round meta.jsx comment.block punctuation.definition.comment.end
//                        ^^ meta.group.braces.round meta.jsx meta.tag punctuation.definition.tag.end

      </div>
    );
  }
});


export class Counter extends React.Component {
//^^^^ keyword.operator.module
//<- source.js
//     ^^^^^ storage.type.class
//           ^^^^^^^ entity.name.class
//                   ^^^^^^^^^^^^^^^^^^^^^^^^ meta.class.extends
//                   ^^^^^^^ meta.class.extends storage.type.extends
//                           ^^^^^ meta.class.extends meta.property.class variable.other.class
//                                ^ meta.class.extends meta.property.class keyword.operator.accessor
//                                 ^^^^^^^^^ meta.class.extends meta.property.class variable.other.property.static
//                                           ^ meta.brace.curly.begin
  static propTypes = { initialCount: React.PropTypes.number };
//^^^^^^ storage.modifier
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class.property
//       ^^^^^^^^^ meta.class.property variable.other.property
//                 ^ meta.class.property keyword.operator.assignment
//                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class.property meta.group.braces.curly
//                   ^ meta.class.property meta.group.braces.curly meta.brace.curly.begin
//                     ^^^^^^^^^^^^ meta.class.property meta.group.braces.curly constant.other.object.key string.unquoted.label
//                                 ^ meta.class.property meta.group.braces.curly constant.other.object.key punctuation.separator.key-value
//                                   ^^^^^ meta.class.property meta.group.braces.curly meta.property.class variable.other.class
//                                        ^ meta.class.property meta.group.braces.curly meta.property.class keyword.operator.accessor
//                                         ^^^^^^^^^ meta.class.property meta.group.braces.curly meta.property.class variable.other.property.static
//                                                  ^ meta.class.property meta.group.braces.curly keyword.operator.accessor
//                                                   ^^^^^^ meta.class.property meta.group.braces.curly meta.property.object variable.other.property
//                                                          ^ meta.class.property meta.group.braces.curly meta.brace.curly.end
  static defaultProps = { initialCount: 0 };
//^^^^^^ storage.modifier
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class.property
//       ^^^^^^^^^^^^ meta.class.property variable.other.property
//                    ^ meta.class.property keyword.operator.assignment
//                      ^^^^^^^^^^^^^^^^^^^ meta.class.property meta.group.braces.curly
//                      ^ meta.class.property meta.group.braces.curly meta.brace.curly.begin
//                        ^^^^^^^^^^^^ meta.class.property meta.group.braces.curly constant.other.object.key string.unquoted.label
//                                    ^ meta.class.property meta.group.braces.curly constant.other.object.key punctuation.separator.key-value
//                                      ^ meta.class.property meta.group.braces.curly constant.numeric
//                                        ^ meta.class.property meta.group.braces.curly meta.brace.curly.end
  static childContextTypes = () => {
//^^^^^^ storage.modifier
//       ^^^^^^^^^^^^^^^^^ meta.class.property variable.other.property
//                         ^ meta.class.property keyword.operator.assignment
//                           ^^^^^ meta.class.property meta.function.arrow
//                           ^ meta.class.property meta.function.arrow punctuation.definition.parameters.begin
//                            ^ meta.class.property meta.function.arrow punctuation.definition.parameters.end
//                              ^^ meta.class.property meta.function.arrow storage.type.function.arrow
//                                 ^ meta.class.property meta.group.braces.curly meta.brace.curly.begin
    return {
//  ^^^^^^ meta.class.property meta.group.braces.curly keyword.control.flow
//         ^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.brace.curly.begin

      app: React.PropTypes.instanceOf(App).isRequired
//    ^^^ meta.class.property meta.group.braces.curly meta.group.braces.curly constant.other.object.key string.unquoted.label
//       ^ meta.class.property meta.group.braces.curly meta.group.braces.curly constant.other.object.key punctuation.separator.key-value
//         ^^^^^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.property.class variable.other.class
//              ^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.property.class keyword.operator.accessor
//               ^^^^^^^^^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.property.class variable.other.property.static
//                        ^ meta.class.property meta.group.braces.curly meta.group.braces.curly keyword.operator.accessor
//                         ^^^^^^^^^^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.function-call.method.with-arguments variable.function
//                                   ^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                                    ^^^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.group.braces.round variable.other.readwrite
//                                       ^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                                        ^ meta.class.property meta.group.braces.curly meta.group.braces.curly keyword.operator.accessor
//                                         ^^^^^^^^^^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.property.object variable.other.property
    }
//  ^ meta.class.property meta.group.braces.curly meta.group.braces.curly meta.brace.curly.end
  };
//^ meta.class.property meta.group.braces.curly meta.brace.curly.end
  getChildContext = makeGetChildContext();
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class.property
//^^^^^^^^^^^^^^^ meta.class.property variable.other.property
//                ^ meta.class.property keyword.operator.assignment
//                  ^^^^^^^^^^^^^^^^^^^ meta.class.property meta.function-call.without-arguments variable.function
//                                     ^^ meta.class.property meta.function-call.without-arguments meta.group.braces.round.function.arguments
  state = { count: this.props.initialCount };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class.property
//^^^^^ meta.class.property variable.other.property
//      ^ meta.class.property keyword.operator.assignment
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.class.property meta.group.braces.curly
//        ^ meta.class.property meta.group.braces.curly meta.brace.curly.begin
//          ^^^^^ meta.class.property meta.group.braces.curly constant.other.object.key string.unquoted.label
//               ^ meta.class.property meta.group.braces.curly constant.other.object.key punctuation.separator.key-value
//                 ^^^^ meta.class.property meta.group.braces.curly variable.language.this
//                     ^ meta.class.property meta.group.braces.curly keyword.operator.accessor
//                      ^^^^^ meta.class.property meta.group.braces.curly meta.property.object variable.other.property
//                           ^ meta.class.property meta.group.braces.curly keyword.operator.accessor
//                            ^^^^^^^^^^^^ meta.class.property meta.group.braces.curly meta.property.object variable.other.property
//                                         ^ meta.class.property meta.group.braces.curly meta.brace.curly.end
  tick() {
//^^^^ meta.class-method string.unquoted entity.name.function
//    ^ meta.class-method punctuation.definition.parameters.begin
//     ^ meta.class-method punctuation.definition.parameters.end
//       ^ meta.group.braces.curly meta.brace.curly.begin
    this.setState({ count: this.state.count + 1 });
//  ^^^^ meta.group.braces.curly variable.language.this
//      ^ meta.group.braces.curly keyword.operator.accessor
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly
//       ^^^^^^^^ meta.group.braces.curly meta.function-call.method.with-arguments variable.function
//               ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly
//                ^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly meta.brace.curly.begin
//                  ^^^^^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly constant.other.object.key string.unquoted.label
//                       ^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly constant.other.object.key punctuation.separator.key-value
//                         ^^^^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly variable.language.this
//                             ^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly keyword.operator.accessor
//                              ^^^^^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly meta.property.object variable.other.property
//                                   ^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly keyword.operator.accessor
//                                    ^^^^^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly meta.property.object variable.other.property
//                                          ^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly keyword.operator.arithmetic
//                                            ^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly constant.numeric
//                                              ^ meta.group.braces.curly meta.group.braces.round meta.group.braces.curly meta.brace.curly.end
//                                               ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.end
//                                                ^ meta.group.braces.curly punctuation.terminator.statement
  }
//^ meta.group.braces.curly meta.brace.curly.end
  render() {
//^^^^^^ meta.class-method string.unquoted entity.name.function
//      ^ meta.class-method punctuation.definition.parameters.begin
//       ^ meta.class-method punctuation.definition.parameters.end
//         ^ meta.group.braces.curly meta.brace.curly.begin
    return (
//  ^^^^^^ meta.group.braces.curly keyword.control.flow
//         ^ meta.group.braces.curly meta.group.braces.round meta.brace.round.begin
      <div onClick={this.tick.bind(this)}>
//    ^ meta.jsx meta.tag punctuation.definition.tag.begin
//     ^^^ meta.jsx meta.tag entity.name.tag
//         ^^^^^^^ meta.jsx entity.other.attribute-name
//                ^ meta.jsx keyword.operator.assignment
//                 ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//                  ^^^^ meta.jsx meta.embedded.expression variable.language.this
//                      ^ meta.jsx meta.embedded.expression keyword.operator.accessor
//                       ^^^^ meta.jsx meta.embedded.expression meta.property.object variable.other.property
//                           ^ meta.jsx meta.embedded.expression keyword.operator.accessor
//                            ^^^^ meta.jsx meta.embedded.expression meta.function-call.method.with-arguments variable.function
//                                ^ meta.jsx meta.embedded.expression meta.group.braces.round meta.brace.round.begin
//                                 ^^^^ meta.jsx meta.embedded.expression meta.group.braces.round variable.language.this
//                                     ^ meta.jsx meta.embedded.expression meta.group.braces.round meta.brace.round.end
//                                      ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
//                                       ^ meta.jsx meta.tag punctuation.definition.tag.end
        Clicks: {this.state.count}
//              ^ meta.jsx meta.embedded.expression punctuation.section.embedded.begin
//               ^^^^ meta.jsx meta.embedded.expression variable.language.this
//                   ^ meta.jsx meta.embedded.expression keyword.operator.accessor
//                    ^^^^^ meta.jsx meta.embedded.expression meta.property.object variable.other.property
//                         ^ meta.jsx meta.embedded.expression keyword.operator.accessor
//                          ^^^^^ meta.jsx meta.embedded.expression meta.property.object variable.other.property
//                               ^ meta.jsx meta.embedded.expression punctuation.section.embedded.end
      </div>
//    ^^ meta.jsx meta.tag punctuation.definition.tag.begin
//      ^^^ meta.jsx meta.tag entity.name.tag
//         ^ meta.jsx meta.tag punctuation.definition.tag.end
    );
//  ^ meta.brace.round.end
//   ^ meta.group.braces.curly punctuation.terminator.statement
  }
//^ meta.group.braces.curly meta.brace.curly.end
}
//<- meta.class meta.brace.curly.end
