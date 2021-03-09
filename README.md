# babel-sublime

> Only supports **Sublime Text 3**. Sublime Text 2 is no longer supported.

Language definitions for [ES6+ JavaScript](http://kangax.github.io/compat-table/es6/) with [React JSX syntax](http://facebook.github.io/react/docs/jsx-in-depth.html) extensions.

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

#### Advanced usage

It's possible to set `Babel` as the _only_ JavaScript package by disabling the stock one. To do so, add `"ignored_packages": ["JavaScript"]` to your `Preferences.sublime-settings`. The benefits include:
  * extension-less node scripts will automatically be recognized as `JavaScript (Babel)`,
  * and reduced clutter in the syntax menu.

**Keep in mind**, the stock snippets will no longer work (you may still use your own), and other third-party packages that depend on the stock package may break (no known ones so far).

## Screenshots

![babel-sublime-vs-built-in-jsx](screenshots/compare-builtin-jsx@2x.png)

## Snippets

Find them separately at [babel/babel-sublime-snippets](https://github.com/babel/babel-sublime-snippets) or as [**Babel Snippets**](https://packagecontrol.io/packages/Babel%20Snippets) through [Package Control](https://packagecontrol.io/).

## About

Under the hood, _babel-sublime_ is based on the excellent [Benvie/JavaScriptNext.tmLanguage](https://github.com/Benvie/JavaScriptNext.tmLanguage) with JSX syntax support built on top. The initial definitions for JSX came from [reactjs/sublime-react](https://github.com/reactjs/sublime-react) via [yungters/sublime](https://github.com/yungsters/sublime.git) - special thanks go to [@jgebhardt](https://github.com/jgebhardt) and [@zpao](https://github.com/zpao).

## Contributing

Pull Requests should include your changes to the respective `YAML-tmKittens` file as well as the converted `tmKittens` file. Use [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev) to convert the `YAML-tmKittens` files.
