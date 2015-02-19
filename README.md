# babel-sublime (previously 6to5-sublime)

Language definitions for [ES6 JavaScript](http://kangax.github.io/compat-table/es6/) with [React JSX syntax](http://facebook.github.io/react/docs/jsx-in-depth.html) extensions, and snippets for common React constructs (like [lifecycle methods](http://facebook.github.io/react/docs/component-specs.html)) in ES6.

## Installation

Find it as [**Babel**](https://packagecontrol.io/packages/Babel) through [Package Control](https://packagecontrol.io/).

#### Setting as the default syntax

To set it as the default syntax for a particular extension:
  1. Open a file with that extension,
  2. Select `View` from the menu,
  3. Then `Syntax` `->` `Open all with current extension as...` `->` `Babel` `->` `JavaScript (Babel)`.
  4. Repeat this for each extension (e.g.: `.js` and `.jsx`).

#### Setting a Color Scheme

`Babel` comes bundled with `Next` and `Monokai` from [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage). Select one from `Preferences` `->` `Color Scheme` `->` `Babel`

## Screenshots

![babel-sublime-vs-sublime-react--react-class](https://raw.githubusercontent.com/babel/babel-sublime/9a6e85f/screenshots/compare-react-class@2x.png)

* `bebel-sublime` supports modern JavaScript syntax, including [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), [shorthand methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions), [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings), and more.

![babel-sublime-vs-sublime-react--jsx-comments-etc](https://raw.githubusercontent.com/babel/babel-sublime/9a6e85f/screenshots/compare-jsx-comments-etc@2x.png)

* `babel-sublime` correctly matches comments between attributes, namespaced components, and non-alpha characters in tag/attribute names.

![babel-sublime-vs-sublime-react--jsx-illegal](https://raw.githubusercontent.com/babel/babel-sublime/9a6e85f/screenshots/compare-jsx-illegal@2x.png)

* Illegal attribute names; missing equals, quotes or braces; and missing values are highlighted, to easily spot mistakes.

![babel-sublime-vs-sublime-react--jsx-tight](https://raw.githubusercontent.com/babel/babel-sublime/9a6e85f/screenshots/compare-jsx-tight@2x.png)

* Tight (without spaces) greater-/less-than comparisons are correctly identified as such and not mistaken for JSX tags.


## Snippets

| Trigger  | Content |
| -------: | ------- |
| `cdm→`   | `componentDidMount() { ... },` |
| `cdup→`  | `componentDidUpdate(prevProps, prevState) { ... },` |
| `cs→`    | `var cx = React.addons.classSet;` |
| `cwm→`   | `componentWillMount() { ... },` |
| `cwr→`   | `componentWillReceiveProps(nextProps) { ... },` |
| `cwun→`  | `componentWillUnmount() { ... },` |
| `cwu→`   | `componentWillUpdate(nextProps, nextState) { ... },` |
| `cx→`    | `cx({ ... });` |
| `fup→`   | `this.forceUpdate(...);` |
| `gdn→`   | `this.getDOMNode()` |
| `gdp→`   | `getDefaultProps() { return {...}; },` |
| `gis→`   | `getInitialState() { return {...}; },` |
| `ism→`   | `this.isMounted()` |
| `props→` | `this.props.` |
| `pt→`    | `propTypes: { ...: React.PropTypes. },` |
| `rcc→`   | component skeleton |
| `rcs→`   | concise component skeleton |
| `ren→`   | `render() { return (...); }` |
| `scu→`   | `shouldComponentUpdate(nextProps, nextState) { ... },` |
| `sst→`   | `this.setState({ ... });` |
| `state→` | `this.state.` |

## About

Under the hood, _babel-sublime_ is based on the excellent [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage) with JSX syntax support built on top. The initial definitions for JSX came from [reactjs/sublime-react](https://github.com/reactjs/sublime-react) via [yungters/sublime](https://github.com/yungsters/sublime.git) - but we've added a few improvements like support for [JSX namespaces](http://facebook.github.io/react/blog/2014/07/17/react-v0.11.html#jsx-namespacing), comments between JSX attributes and invalid attribute matching.

## Contributing

Pull Requests should include your changes to the respective `YAML-tmKittens` file as well as the converted `tmKittens` file. Use [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev) to convert the `YAML-tmKittens` files.
