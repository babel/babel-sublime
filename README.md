# 6to5-sublime

Language definitions for [ES6 JavaScript](http://kangax.github.io/compat-table/es6/) with [React JSX syntax](http://facebook.github.io/react/docs/jsx-in-depth.html) extensions, and snippets for common React constructs (like [lifecycle methods](http://facebook.github.io/react/docs/component-specs.html)) in ES6.

## Installation

Find it as **6to5** through [Package Control](https://packagecontrol.io/).

#### Setting as the default syntax

To set it as the default syntax for a particular extension:
  1. Open a file with that extension,
  2. Select `View` from the menu,
  3. Then `Syntax` `->` `Open all with current extension as...` `->` `JavaScript JSX`.
  4. Repeat this for each extension (e.g.: `.js` and `.jsx`).

#### Setting a Color Scheme

`6to5` comes bundled with `Next` and `Monokai` from [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage). Select one from `Preferences` `->` `Color Scheme` `->` `6to5`

## Screenshots

![6to5-sublime-vs-sublime-react](https://raw.github.com/6to5/6to5-sublime/5cd4353/screenshots/6to5-sublime-vs-sublime-react.gif)
(`6to5-sublime` vs `sublime-react`)

## Snippets

| Trigger  | Content |
| -------: | ------- |
| `cs→`    | `var cx = React.addons.classSet;` |
| `cdm→`   | `componentDidMount() { ... },` |
| `cdup→`  | `componentDidUpdate(prevProps, prevState) { ... },` |
| `cwm→`   | `componentWillMount() { ... },` |
| `cwr→`   | `componentWillReceiveProps(nextProps) { ... },` |
| `cwun→`  | `componentWillUnmount() { ... },` |
| `cwu→`   | `componentWillUpdate(nextProps, nextState) { ... },` |
| `cx→`    | `cx({ ... });` |
| `fup→`   | `forceUpdate(...);` |
| `gdp→`   | `getDefaultProps() { return {...}; },` |
| `gis→`   | `getInitialState() { return {...}; },` |
| `ism→`   | `isMounted()` |
| `pt→`    | `propTypes: { ...: React.PropTypes. },` |
| `rcc→`   | component skeleton |
| `ren→`   | `render() { return (...); }` |
| `sst→`   | `setState({ ... });` |
| `scu→`   | `shouldComponentUpdate(nextProps, nextState) { ... },` |
| `props→` | `this.props.` |
| `state→` | `this.state.` |

## About

Under the hood, _6to5-sublime_ is based on the excellent [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage) with JSX syntax support built on top. The initial definitions for JSX came from [reactjs/sublime-react](https://github.com/reactjs/sublime-react) via [yungters/sublime](https://github.com/yungsters/sublime.git) - but we've added a few improvements like support for [JSX namespaces](http://facebook.github.io/react/blog/2014/07/17/react-v0.11.html#jsx-namespacing) and comments between JSX attributes.

## Contributing

Pull Requests should include your changes to the respective `YAML-tmKittens` file as well as the converted `tmKittens` file. Use [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev) to convert the `YAML-tmKittens` files.
