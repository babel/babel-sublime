// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

    /**@a*/
//  ^^^ punctuation.definition.comment.begin
//     ^^ entity.other.attribute-name.documentation
//       ^^ punctuation.definition.comment.end - entity.other.attribute-name.documentation
//  ^^^^^^^ comment.block.documentation.js

/** @a b */
//  ^^ entity.other.attribute-name.documentation
//     ^ - entity.other.attribute-name.documentation
//       ^^ punctuation.definition.comment.end

/** @a@b */
//  ^^ entity.other.attribute-name.documentation
//    ^^ - entity.other.attribute-name.documentation

/**
 * @a b
// ^^ entity.other.attribute-name.documentation
//    ^ comment.block.documentation
*/
// <- punctuation.definition.comment.end

/**
 * First line
 * @a @b c */
// ^^ entity.other.attribute-name.documentation
//    ^^ - entity.other.attribute-name.documentation
//    ^^^^ comment.block.documentation
//    ^^^^ - comment.block.documentation comment.block.documentation
//         ^^ comment.block.documentation punctuation.definition.comment.end

/**

  @a */
//^^ - entity.other.attribute-name.documentation
//   ^^ punctuation.definition.comment.end

/*@a */
//^^ - entity.other.attribute-name.documentation
//   ^^ punctuation.definition.comment.end
