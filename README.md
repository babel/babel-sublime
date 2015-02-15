# 6to5-sublime

Language definitions for [ES6 JavaScript](http://kangax.github.io/compat-table/es6/) with [React JSX syntax](http://facebook.github.io/react/docs/jsx-in-depth.html) extensions, and snippets for common React constructs (like [lifecycle methods](http://facebook.github.io/react/docs/component-specs.html)) in ES6.

## Installation

Find it as [**6to5**](https://packagecontrol.io/packages/6to5) through [Package Control](https://packagecontrol.io/).

#### Setting as the default syntax

To set it as the default syntax for a particular extension:
  1. Open a file with that extension,
  2. Select `View` from the menu,
  3. Then `Syntax` `->` `Open all with current extension as...` `->` `6to5` `->` `JavaScript 6to5`.
  4. Repeat this for each extension (e.g.: `.js` and `.jsx`).

#### Setting a Color Scheme

`6to5` comes bundled with `Next` and `Monokai` from [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage), and [`Oceanic Next`](https://github.com/voronianski/oceanic-next-theme).

Select one from `Preferences` `->` `Color Scheme` `->` `6to5`

## Screenshots

![6to5-sublime-vs-sublime-react](https://raw.github.com/6to5/6to5-sublime/5cd4353/screenshots/6to5-sublime-vs-sublime-react.gif)
(`6to5-sublime` vs `sublime-react`)

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

Under the hood, _6to5-sublime_ is based on the excellent [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage) with JSX syntax support built on top. The initial definitions for JSX came from [reactjs/sublime-react](https://github.com/reactjs/sublime-react) via [yungters/sublime](https://github.com/yungsters/sublime.git) - but we've added a few improvements like support for [JSX namespaces](http://facebook.github.io/react/blog/2014/07/17/react-v0.11.html#jsx-namespacing) and comments between JSX attributes.

## Contributing

Pull Requests should include your changes to the respective `YAML-tmKittens` file as well as the converted `tmKittens` file. Use [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev) to convert the `YAML-tmKittens` files.
