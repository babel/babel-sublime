let obj = {
  'this is a \
  valid key': 'some value',

  "another key": "another value",

  [
    'some' + 'key' + true
  ]
  : 'some value',

  [
    capitalize(
      'another' + 'key'
    )
  ](arg1, arg2) {
    return false;
  },

  'foo\
  bar'(a, b) {}
}

class Obj {
  'fn'(a, b) {}
}

class Obj extends {} {

}

({[(() => {})()]: 'also valid'})
