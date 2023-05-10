// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

/**
 * This is my first JavaScript program.
 * This will print 'Hello World' as the output
 **/

function testIfElseIndentationNoBraces(v)
{
    /**
     * comment
     */
    if (v.isNull() == true) return fun(v);

    if (v.isNull() == true)
        return false;

    if (v.isNull() == true)
        return false;
    else
    {
        if (v.endsWith("("))
            return false;
        else if (v.endsWith(")"))
            return true;
        else if (v.endsWith("\""))
            return true;
        else if (v.endsWith("\\"))
            return true;
        else if (v.endsWith('('))
            return false;
        else if (v.endsWith(')'))
            return true;
        else if (v.endsWith('\''))
            return true;
        else if (v.endsWith('\\'))
            return true;
        else
            return false;

        if (v.endsWith("baz"))
            return false;
        return true;
    }
}

function testIfElseIndentationNoBracesWithLineComments(v)
{
    /**
     * comment
     */

    // line comment
    if (v.isNull() == true) return fun(v);

    // line comment
    if (v.isNull() == true)
        // line comment
        return false;

    // line comment
    if (v.isNull() == true)
        // line comment
        return false;
    // line comment
    else
    // line comment
    {
        // line comment
        if (v.endsWith("("))
            // line comment
            return false;
        // line comment
        else if (v.endsWith(")"))
            // line comment
            return true;
        // line comment
        else if (v.endsWith("\""))
            // line comment
            return true;
        // line comment
        else if (v.endsWith("\\"))
            // line comment
            return true;
        // line comment
        else if (v.endsWith('('))
            // line comment
            return false;
        // line comment
        else if (v.endsWith(')'))
            // line comment
            return true;
        // line comment
        else if (v.endsWith('\''))
            // line comment
            return true;
        // line comment
        else if (v.endsWith('\\'))
            // line comment
            return true;
        // line comment
        else
            // line comment
            return false;

        // line comment
        if (v.endsWith("baz"))
            // line comment
            return false;
        // line comment
        return true;
    }
}

function testIfElseIndentationNoBracesMultiLine(v)
{
    // line comment
    if (v.isNull() == true
        || v.endsWith(")"))
        // line comment
        return false;
    else if (v.isNull() == true
        || v.endsWith("("))
        return false;
    // line comment
    return true;
}

function testIfElseIndentationNoBracesButComments(v)
{
    if (v.isNull() == true) return fun(v); /**/ // ; "comment" ()

    if (v.isNull() == true)                /**/ // ; "comment" ()
        return false;                      /**/ // ; "comment" ()

    if (v.isNull() == true)                /**/ // ; "comment" ()
        return false;                      /**/ // ; "comment" ()
    else                                   /**/ // ; "comment" ()
    {                                      /**/ // ; "comment" ()
        if (v.endsWith("("))               /**/ // ; "comment" ()
            return false;                  /**/ // ; "comment" ()
        else if (v.endsWith(")"))          /**/ // ; "comment" ()
            return true;                   /**/ // ; "comment" ()
        else if (v.endsWith("\""))         /**/ // ; "comment" ()
            return true;                   /**/ // ; "comment" ()
        else if (v.endsWith("\\"))         /**/ // ; "comment" ()
            return true;                   /**/ // ; "comment" ()
        else if (v.endsWith('('))          /**/ // ; "comment" ()
            return false;                  /**/ // ; "comment" ()
        else if (v.endsWith(')'))          /**/ // ; "comment" ()
            return true;                   /**/ // ; "comment" ()
        else if (v.endsWith('\''))         /**/ // ; "comment" ()
            return true;                   /**/ // ; "comment" ()
        else if (v.endsWith('\\'))         /**/ // ; "comment" ()
            return true;                   /**/ // ; "comment" ()
        else                               /**/ // ; "comment" ()
            return false;                  /**/ // ; "comment" ()
    }                                      /**/ // ; "comment" ()
}

function testIfElseIndentationNoBracesButBlockCommentsPart1(v)
{
    /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ isNull( /*(*/ ) /*(*/ == /*(*/ true /*(*/ ) /*(*/ return /*(*/ fun /*(*/ ( /*(*/ ) /*(*/ ; // ; "comment" ()

    /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ isNull( /*(*/ ) /*(*/ == /*(*/ true /*(*/ ) /*(*/  // ; "comment" ()
        return false; /*(*/  // ; "comment" ()

    /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ isNull( /*(*/ ) /*(*/ == /*(*/ true /*(*/ ) /*(*/ // ; "comment" ()
        return false; /*(*/ // ; "comment" ()
    else /*(*/ // ; "comment" ()
    { /*(*/ // ; "comment" ()
        /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ "(") /*(*/ ) /*(*/ // ; "comment" ()
            return false; /*(*/ // ; "comment" ()
        else /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ ")") /*(*/ ) /*(*/ // ; "comment" ()
            return true; /*(*/ // ; "comment" ()
        else /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ "\"") /*(*/ ) /*(*/ // ; "comment" ()
            return true; /*(*/ // ; "comment" ()
        else /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ "\\") /*(*/ ) /*(*/ // ; "comment" ()
            return true; /*(*/ // ; "comment" ()
        else /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ '(') /*(*/ ) /*(*/ // ; "comment" ()
            return false; /*(*/ // ; "comment" ()
        else /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ ')') /*(*/ ) /*(*/ // ; "comment" ()
            return true; /*(*/ // ; "comment" ()
        else /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ '\'') /*(*/ ) /*(*/ // ; "comment" ()
            return true; /*(*/ // ; "comment" ()
        else /*(*/ if /*(*/ ( /*(*/ v /*(*/ . /*(*/ endsWith /*(*/ ( /*(*/ '\\') /*(*/ ) /*(*/ // ; "comment" ()
            return true; /*(*/ // ; "comment" ()
        else /*(*/ // ; "comment" ()
            return false; /*(*/ // ; "comment" ()
    } /*(*/ // ; "comment" ()
}

function testIfElseIndentationNoBracesButBlockCommentsPart2(v)
{
    /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ isNull( /*)*/ ) /*)*/ == /*)*/ true /*)*/ ) /*)*/ return /*)*/ fun /*)*/ ( /*)*/ ) /*)*/ ; // ; "comment" ()

    /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ isNull( /*)*/ ) /*)*/ == /*)*/ true /*)*/ ) /*)*/ // ; "comment" ()
        return false; /*)*/ // ; "comment" ()

    /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ isNull( /*)*/ ) /*)*/ == /*)*/ true /*)*/ ) /*)*/ // ; "comment" ()
        return false; /*)*/ // ; "comment" ()
    else /*)*/ // ; "comment" ()
    { /*)*/ // ; "comment" ()
        /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ "(") /*)*/ ) /*)*/ // ; "comment" ()
            return false; /*)*/ // ; "comment" ()
        else /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ ")") /*)*/ ) /*)*/ // ; "comment" ()
            return true; /*)*/ // ; "comment" ()
        else /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ "\"") /*)*/ ) /*)*/ // ; "comment" ()
            return true; /*)*/ // ; "comment" ()
        else /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ "\\") /*)*/ ) /*)*/ // ; "comment" ()
            return true; /*)*/ // ; "comment" ()
        else /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ '(') /*)*/ ) /*)*/ // ; "comment" ()
            return false; /*)*/ // ; "comment" ()
        else /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ ')') /*)*/ ) /*)*/ // ; "comment" ()
            return true; /*)*/ // ; "comment" ()
        else /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ '\'') /*)*/ ) /*)*/ // ; "comment" ()
            return true; /*)*/ // ; "comment" ()
        else /*)*/ if /*)*/ ( /*)*/ v /*)*/ . /*)*/ endsWith /*)*/ ( /*)*/ '\\') /*)*/ ) /*)*/ // ; "comment" ()
            return true; /*)*/ // ; "comment" ()
        else /*)*/ // ; "comment" ()
            return false; /*)*/ // ; "comment" ()
    } /*)*/ // ; "comment" ()
}

function testIfElseIndentationWithBraces(v) {

    if (v.isNull() == true) { return fun(v); }

    if (v.isNull() == true) {
        return false;
    }

    if (v.isNull() == true) {
        return false;
    } else {
        if (v.endsWith("(")) {
            return false;
        } else if (v.endsWith(")")) {
            return true;
        } else if (v.endsWith("\"")) {
            return true;
        } else if (v.endsWith("\\")) {
            return true;
        } else if (v.endsWith('(')) {
            return false;
        } else if (v.endsWith(')')) {
            return true;
        } else if (v.endsWith('\'')) {
            return true;
        } else if (v.endsWith('\\')) {
            return true;
        } else {
            return false;
        }
    }

    if (v.isNull() == true)
    {
        return
    }
    if (v.isNull() == true)
    {
        return false
    }
    if (v.isNull() == true)
    {
        return false;
    }

    if (v.isNull() == true)
    {
        return false;
    }
    else
    {
        if (v.endsWith("("))
        {
            return false;
        }
        else if (v.endsWith(")"))
        {
            return true;
        }
        else if (v.endsWith("\""))
        {
            return true;
        }
        else if (v.endsWith("\\"))
        {
            return true;
        }
        else if (v.endsWith('('))
        {
            return false;
        }
        else if (v.endsWith(')'))
        {
            return true;
        }
        else if (v.endsWith('\''))
        {
            return true;
        }
        else if (v.endsWith('\\'))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function testIfElseIndentationWithBracesAndLineComments(v) {

    // comment
    if (v.isNull() == true) { return fun(v); }

    // comment
    if (v.isNull() == true) {
        // comment
        return false;
    }

    // comment
    if (v.isNull() == true) {
        // comment
        return false;
    } else {
        // comment
        if (v.endsWith("(")) {
            // comment
            return false;
        // comment
        } else if (v.endsWith(")")) {
            // comment
            return true;
        // comment
        } else if (v.endsWith("\"")) {
            // comment
            return true;
        // comment
        } else if (v.endsWith("\\")) {
            // comment
            return true;
        // comment
        } else if (v.endsWith('(')) {
            // comment
            return false;
        // comment
        } else if (v.endsWith(')')) {
            // comment
            return true;
        // comment
        } else if (v.endsWith('\'')) {
            // comment
            return true;
        // comment
        } else if (v.endsWith('\\')) {
            // comment
            return true;
        // comment
        } else {
            // comment
            return false;
        }
    }

    // comment
    if (v.isNull() == true)
    {
        // comment
        return
    }
    // comment
    if (v.isNull() == true)
    {
        // comment
        return false
    }
    // comment
    if (v.isNull() == true)
    {
        // comment
        return false;
    }

    // comment
    if (v.isNull() == true)
    {
        // comment
        return false;
    }
    // comment
    else
    {
        // comment
        if (v.endsWith("("))
        {
            // comment
            return false;
        }
        // comment
        else if (v.endsWith(")"))
        {
            // comment
            return true;
        }
        // comment
        else if (v.endsWith("\""))
        {
            // comment
            return true;
        }
        // comment
        else if (v.endsWith("\\"))
        {
            // comment
            return true;
        }
        // comment
        else if (v.endsWith('('))
        {
            // comment
            return false;
        }
        // comment
        else if (v.endsWith(')'))
        {
            // comment
            return true;
        }
        // comment
        else if (v.endsWith('\''))
        {
            // comment
            return true;
        }
        // comment
        else if (v.endsWith('\\'))
        {
            // comment
            return true;
        }
        // comment
        else
        {
            // comment
            return false;
        }
    }
}

function testIfElseIndentationWithBracesAndComment(v) {

    if (v.isNull() == true) { return }            /**/ // ; "comment" ()

    if (v.isNull() == true) { return fun(v) }     /**/ // ; "comment" ()

    if (v.isNull() == true) { return fun(v); }    /**/ // ; "comment" ()

    if (v.isNull() == true) {                     /**/ // ; "comment" ()
        return false;                             /**/ // ; "comment" ()
    }                                             /**/ // ; "comment" ()

    if (v.isNull() == true) {                     /**/ // ; "comment" ()
        return false;                             /**/ // ; "comment" ()
    } else {                                      /**/ // ; "comment" ()
        if (v.endsWith("(")) {                    /**/ // ; "comment" ()
            return false;                         /**/ // ; "comment" ()
        } else if (v.endsWith(")")) {             /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        } else if (v.endsWith("\"")) {            /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        } else if (v.endsWith("\\")) {            /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        } else if (v.endsWith('(')) {             /**/ // ; "comment" ()
            return false;                         /**/ // ; "comment" ()
        } else if (v.endsWith(')')) {             /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        } else if (v.endsWith('\'')) {            /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        } else if (v.endsWith('\\')) {            /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        } else {                                  /**/ // ; "comment" ()
            return false;                         /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
    }                                             /**/ // ; "comment" ()

    if (v.isNull() == true)                       /**/ // ; "comment" ()
    {                                             /**/ // ; "comment" ()
        return                                    /**/ // ; "comment" ()
    }                                             /**/ // ; "comment" ()
    if (v.isNull() == true)                       /**/ // ; "comment" ()
    {                                             /**/ // ; "comment" ()
        return false                              /**/ // ; "comment" ()
    }                                             /**/ // ; "comment" ()
    if (v.isNull() == true)                       /**/ // ; "comment" ()
    {                                             /**/ // ; "comment" ()
        return false;                             /**/ // ; "comment" ()
    }                                             /**/ // ; "comment" ()

    if (v.isNull() == true)                       /**/ // ; "comment" ()
    {                                             /**/ // ; "comment" ()
        return false;                             /**/ // ; "comment" ()
    }                                             /**/ // ; "comment" ()
    else                                          /**/ // ; "comment" ()
    {                                             /**/ // ; "comment" ()
        if (v.endsWith("("))                      /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return false;                         /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else if (v.endsWith(")"))                 /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else if (v.endsWith("\""))                /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else if (v.endsWith("\\"))                /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else if (v.endsWith('('))                 /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return false;                         /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else if (v.endsWith(')'))                 /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else if (v.endsWith('\''))                /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else if (v.endsWith('\\'))                /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return true;                          /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
        else                                      /**/ // ; "comment" ()
        {                                         /**/ // ; "comment" ()
            return false;                         /**/ // ; "comment" ()
        }                                         /**/ // ; "comment" ()
    }                                             /**/ // ; "comment" ()
}

function testSwitchCaseIndentation(v) {
    switch (s) {
    case
    case:
    case break
    case: break
    case "(": break
    case ")": break;
    case ":": break;
    case ";": break;
    case
        break;
    case:
        break;
    case ":"
        break;
    case ':':
        break;
    case NestedIfStatement:
        if (s.endsWith() = '(')
            return;
        break;
    case NestedSwitchCase:
        switch (v) {
        case 0: break;
        case 2:
            break;
        }
        break;
    case NestedSwitchCaseBlock:
        {
            switch (v) {
            case 0: break;
            case 2:
                break;
            }
            break;
        }
    case NestedSwitchCaseBlock2:
        {
            switch (v) {
            case 0: break;
            case 2:
                break;
            }
        }
        break;
    default:
        break;
    }
}

function testSwitchCaseIndentationWithLineComments(v) {
    switch (s) {                 // comments
    case                         // comments
    case:                        // comments
    case break                   // comments
    case: break                  // comments
    case "(": break              // comments
    case ")": break;             // comments
    case ":": break;             // comments
    case ";": break;             // comments
    case                         // comments
        break;                   // comments
    case:                        // comments
        break;                   // comments
    case ":"                     // comments
        break;                   // comments
    case ':':                    // comments
        break;                   // comments
    case NestedIfStatement:      // comments
        if (s.endsWith() = '(')  // comments
            return;              // comments
        break;                   // comments
    case NestedSwitchCase:       // comments
        switch (v) {             // comments
        case 0: break;           // comments
        case 2:                  // comments
            break;               // comments
        }                        // comments
        break;                   // comments
    case NestedSwitchCaseBlock:  // comments
        {                        // comments
            switch (v) {         // comments
            case 0: break;       // comments
            case 2:              // comments
                break;           // comments
            }                    // comments
            break;               // comments
        }                        // comments
    case NestedSwitchCaseBlock2: // comments
        {                        // comments
            switch (v) {         // comments
            case 0: break;       // comments
            case 2:              // comments
                break;           // comments
            }                    // comments
        }                        // comments
        break;                   // comments
    default:                     // comments
        break;                   // comments
    }                            // comments
}                                // comments

function testForIndentation(v)  {

    for (let i = 0; i < 10; i++)
        System.out.println("Row " + i);

    for (let i = 0; i < 10; i++) {
        System.out.println("Row " + i);
    }

    for (let i = 0; i < 10; i++)
    {
        System.out.println("Row " + i);
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++)
            System.out.println("Row " + i + " Col " + j);
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            System.out.println("Row " + i + " Col " + j);
        }
    }

    for (
        let i = 0;
        i < 10;
        i++)
    {
        let j = 0;
        let k = 0;
    }
}

function testWhileIndentationNoBraces(v)  {
    while () v++;
    while (()) v++;
    while ((())) v++;
    while ((())()) v++;
    while ()
        v++;
    while (v == '(')
        v++;
    while (v == ')')
        v++;
    while (v == '\'')
        v++;
    while (v == '\\')
        v++;
    while (v == "(")
        v++;
    while (v == ")")
        v++;
    while (v == "\"")
        v++;
    while (v == "\\\"")
        v++;
    while (v == foo( bar("") + "" ))
        v++;
}

function testWhileIndentationNoBracesButComments(v)  {
    while () v++;                     // ; "comment" ()
    while (()) v++;                   // ; "comment" ()
    while ((())) v++;                 // ; "comment" ()
    while ((())()) v++;               // ; "comment" ()
    while ()                          // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == '(')                  // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == ')')                  // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == '\'')                 // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == '\\')                 // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == "(")                  // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == ")")                  // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == "\"")                 // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == "\\\"")               // ; "comment" ()
        v++;                          // ; "comment" ()
    while (v == foo( bar("") + "" ))  // ; "comment" ()
        v++;                          // ; "comment" ()
    while () { } // a hack to make tests succeed
}

function testWhileIndentationNoBracesButBlockCommentsPart1(v)  {
    while /*(*/ () v++; /*(*/ // ; "comment" ()
    while /*(*/ (()) v++; /*(*/ // ; "comment" ()
    while /*(*/ ((())) v++; /*(*/ // ; "comment" ()
    while /*(*/ ((()/*(*/)/*(*/()) v++; /*(*/ // ; "comment" ()
    while /*(*/ () /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ '(' /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ ')' /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ '\'' /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ '\\' /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ "(" /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ ")" /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ "\"" /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ "\\\"" /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ ( /*(*/ v /*(*/ == /*(*/ foo( /*(*/ bar( /*(*/ "/*(*/" /*(*/ ) /*(*/ + /*(*/ "" /*(*/ ) /*(*/ ) /*(*/ // ; "comment" ()
        v++; /*(*/ // ; "comment" ()
    while /*(*/ () { } // a hack to make tests succeed
}

function testWhileIndentationNoBracesButBlockCommentsPart2(v)  {
    while /*)*/ () v++; /*)*/ // ; "comment" ()
    while /*)*/ (()) v++; /*)*/ // ; "comment" ()
    while /*)*/ ((())) v++; /*)*/ // ; "comment" ()
    while /*)*/ ((()/*)*/)/*)*/()) v++; /*)*/ // ; "comment" ()
    while /*)*/ () /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ '(' /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ ')' /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ '\'' /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ '\\' /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ "(" /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ ")" /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ "\"" /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ "\\\"" /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ ( /*)*/ v /*)*/ == /*)*/ foo( /*)*/ bar( /*)*/ "/*)*/" /*)*/ ) /*)*/ + /*)*/ "" /*)*/ ) /*)*/ ) /*)*/ // ; "comment" ()
        v++; /*)*/ // ; "comment" ()
    while /*)*/ () { } // a hack to make tests succeed
}

function testWhileIndentationWithBraces(v)  {

    while () { v++; }
    while (()) { v++; }
    while ((())) { v++; }
    while ((())()) { v++; }
    while () {
        v++;
    }
    while (v == '(') {
        v++;
    }
    while (v == ')') {
        v++;
    }
    while (v == '\'') {
        v++;
    }
    while (v == '\\') {
        v++;
    }
    while (v == "(") {
        v++;
    }
    while (v == ")") {
        v++;
    }
    while (v == "\"") {
        v++;
    }
    while (v == "\\\"") {
        v++;
    }
    while (v == foo( bar("") + "" )) {
        v++;
    }
    while ()
    {
        v++;
    }
    while (v == '(')
    {
        v++;
    }
    while (v == ')')
    {
        v++;
    }
    while (v == '\'')
    {
        v++;
    }
    while (v == '\\')
    {
        v++;
    }
    while (v == "(")
    {
        v++;
    }
    while (v == ")")
    {
        v++;
    }
    while (v == "\"")
    {
        v++;
    }
    while (v == "\\\"")
    {
        v++;
    }
    while (v == foo( bar("") + "" ))
    {
        v++;
    }
    while (
        v == foo( bar("") + "" )
        )
    {
        v++;
        v++;
    }
}

function testWhileIndentationWithBracesAndComments(v)  {

    while () { v++ }                    // ;  "comments" ()
    while () { v++; }                   // ;  "comments" ()
    while (()) { v++ }                  // ;  "comments" ()
    while ((())) { v++ }                // ;  "comments" ()
    while ((())()) { v++ }              // ;  "comments" ()
    while () {                          // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == '(') {                  // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == ')') {                  // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == '\'') {                 // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == '\\') {                 // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == "(") {                  // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == ")") {                  // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == "\"") {                 // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == "\\\"") {               // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == foo( bar("") + "" )) {  // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while ()                            // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == '(')                    // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == ')')                    // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == '\'')                   // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == '\\')                   // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == "(")                    // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == ")")                    // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == "\"")                   // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == "\\\"")                 // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (v == foo( bar("") + "" ))    // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (                             // ;  "comments" ()
        v == foo( bar("") + "" )        // ;  "comments" ()
        )                               // ;  "comments" ()
    {                                   // ;  "comments" ()
        v++                             // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (                             // ;  "comments" ()
        v == foo( bar("") + "" ) ) {    // ;  "comments" ()
        v++                             // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
    while (                             // ;  "comments" ()
        v == foo( bar("") + "" )        // ;  "comments" ()
        ) {                             // ;  "comments" ()
        v++                             // ;  "comments" ()
        v++                             // ;  "comments" ()
    }                                   // ;  "comments" ()
}
