## TODO

* Sync scopes in `Next.tmTheme`.

## JavaScript Grammar notes

### Curly Braces

```js
// blocks
func() {}
for() {}
if () {}
else {}
do {}
while {}
switch () {}
case xxx: {}
{{ }}
```

```js
// object
{} ? {} : {} 
= {}
({})
...{},
```

```js
// context dependent
label: {}
key-value: {}
```

```js
// destructure
func({a, b}) {}
func({a: {}}) {}
func(a = {}) {}
func({a, b = {}}) {}
return {a, b};
```

### Unexpected

```js
var Foo = {if(bar) {baz: 42;}};
```

```js
({[((a) => {})()]: 'also valid'});
```

## Limitations

### Can't Fix

#### Arrow Functions

The start of an arrow function (so the `(` or single parameter), and the `=>` must be on the same line. Otherwise, it won't get scoped as a function.

```js
// ok
var fn = name => 'hey ' + name;
// not ok
var fn = name // `name` and `=>` must be on the same line
  => 'hey ' + name
```

```js
// ok
var fn = (name, greeting) => {
  return greeting + ' ' + name;
};
// not ok
var fn = ( // `(name, greeting)` and `=>` must be on the same line
  name,
  greeting) => {
    return greeting + ' ' + name;
  };
```

### Fixable (I think)

#### Flow & var/let/const

Flow matching only works when the entire declartion is on the same line.

```js
// ok
var id: number = 123, name: string = 'andres';
// not ok
var id: number = 123,
    name: string = 'andres';
```
