## Snippets recipes

To add any of these, simply:

1. Go to `Tools` `->` `New Snippet`,
2. Replace the contents with any individual snippet from here,
3. Then `File` -> `Save As` with any name.
  * The "Save As" dialog will already be pointing to your `User` Sublime directory - exactly where the snippet needs to be saved.

For more info see [`Extending Sublime Text » Snippets`](http://docs.sublimetext.info/en/latest/extensibility/snippets.html)


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

#### `classSet.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
var cx = React.addons.classSet;
]]></content>
    <tabTrigger>cs</tabTrigger>
    <scope>source.js</scope>
    <description>React: var cx = React.addons.classSet;</description>
</snippet>
```

#### `componentDidMount.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
componentDidMount() {
	${1}
},
]]></content>
    <tabTrigger>cdm</tabTrigger>
    <scope>source.js</scope>
    <description>React: componentDidMount() { ... }</description>
</snippet>
```

#### `componentDidUpdate.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
componentDidUpdate(prevProps, prevState) {
	${1}
},
]]></content>
    <tabTrigger>cdup</tabTrigger>
    <scope>source.js</scope>
    <description>React: componentDidUpdate(pp, ps) { ... }</description>
</snippet>

```

#### `componentWillMount.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
componentWillMount() {
	${1}
},
]]></content>
    <tabTrigger>cwm</tabTrigger>
    <scope>source.js</scope>
    <description>React: componentWillMount() { ... }</description>
</snippet>

```

#### `componentWillReceiveProps.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
componentWillReceiveProps(nextProps) {
	${1}
},
]]></content>
    <tabTrigger>cwr</tabTrigger>
    <scope>source.js</scope>
    <description>React: componentWillReceiveProps(np) { ... }</description>
</snippet>
```

#### `componentWillUnmount.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
componentWillUnmount() {
	${1}
},
]]></content>
    <tabTrigger>cwun</tabTrigger>
    <scope>source.js</scope>
    <description>React: componentWillUnmount() { ... }</description>
</snippet>
```

#### `componentWillUpdate.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
componentWillUpdate(nextProps, nextState) {
	${1}
},
]]></content>
    <tabTrigger>cwu</tabTrigger>
    <scope>source.js</scope>
    <description>React: componentWillUpdate(np, ns) { ... }</description>
</snippet>
```

#### `cx.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
cx({
	$1: $2
});
]]></content>
    <tabTrigger>cx</tabTrigger>
    <scope>source.js</scope>
    <description>React: cx({ ... })</description>
</snippet>
```

#### `forceUpdate.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
this.forceUpdate(${1:callback});
]]></content>
    <tabTrigger>fup</tabTrigger>
    <scope>source.js</scope>
    <description>React: this.forceUpdate(...)</description>
</snippet>
```

#### `getDefaultProps.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
getDefaultProps() {
	return {
		${1}: ${2}
	};
},
]]></content>
    <tabTrigger>gdp</tabTrigger>
    <scope>source.js</scope>
    <description>React: getDefaultProps() { return {...} } </description>
</snippet>
```

#### `getDOMNode.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
this.getDOMNode()
]]></content>
    <tabTrigger>gdn</tabTrigger>
    <scope>source.js</scope>
    <description>React: this.getDOMNode()</description>
</snippet>
```

#### `getInitialState.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
getInitialState() {
	return {
		${1}: ${2}
	};
},
]]></content>
    <tabTrigger>gis</tabTrigger>
    <scope>source.js</scope>
    <description>React: getInitialState() { return {...} } </description>
</snippet>
```

#### `isMounted.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
this.isMounted()
]]></content>
    <tabTrigger>ism</tabTrigger>
    <scope>source.js</scope>
    <description>React: this.isMounted()</description>
</snippet>
```

#### `propTypes.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
propTypes: {
	${1}: React.PropTypes.${2:string}
},
]]></content>
    <tabTrigger>pt</tabTrigger>
    <scope>source.js</scope>
    <description>React: propTypes { ... }</description>
</snippet>
```

#### `react_component.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
import React from 'react';

const ${1} = React.createClass({

	render() {
		return (
			${0:<div />}
		);
	}

});

export default ${1};
]]></content>
    <tabTrigger>rcc</tabTrigger>
    <scope>source.js</scope>
    <description>React: component skeleton</description>
</snippet>
```

#### `react_component_concise.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
import React from 'react';

export default React.createClass({

	${2:  displayName: '${1:myAwesomeComponent}',}

	render() {
		return (
			${0:<div />}
		);
	}

});
]]></content>
    <tabTrigger>rcs</tabTrigger>
    <scope>source.js</scope>
    <description>React: concise component skeleton</description>
</snippet>
```

#### `render.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
render() {
	return (
		${1:<div />}
	);
}
]]></content>
    <tabTrigger>ren</tabTrigger>
    <scope>source.js</scope>
    <description>React: render() { return ... }</description>
</snippet>
```

#### `setState.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
this.setState({
	${1}: ${2}
});
]]></content>
    <tabTrigger>sst</tabTrigger>
    <scope>source.js</scope>
    <description>React: setState({ ... })</description>
</snippet>
```

#### `shouldComponentUpdate.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
shouldComponentUpdate(nextProps, nextState) {
	${1}
},
]]></content>
    <tabTrigger>scu</tabTrigger>
    <scope>source.js</scope>
    <description>React: shouldComponentUpdate(np, ns) { ... }</description>
</snippet>
```

#### `this-props.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
this.props.${1}
]]></content>
    <tabTrigger>props</tabTrigger>
    <scope>source.js</scope>
    <description>React: this.props.</description>
</snippet>
```

#### `this-state.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[
this.state.${1}
]]></content>
    <tabTrigger>state</tabTrigger>
    <scope>source.js</scope>
    <description>React: this.state.</description>
</snippet>
```

#### `wrap.sublime-snippet`

```xml
<snippet>
    <content><![CDATA[${SELECTION/( +).*/$1/}<${1:Component}>
$0${SELECTION/([ \t]+)([^\n]+)/\t$1$2/g}
${SELECTION/( +).*/$1/}</${1/([^ ]+).*/$1/}>]]></content>
    <scope>source.js</scope>
    <description>Wrap in a component</description>
</snippet>
```

To make `wrap.sublime-snippet` useful, you'll also add a key binding:

```json
  {
    "keys": ["ctrl+shift+,"],
    "command": "insert_snippet",
    "args": { "name": "Packages/user/wrap.sublime-snippet" }
  }
```
