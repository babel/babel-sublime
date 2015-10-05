class MyClass {
  [foo()]() {}
  ["str"]() {}
  ["str" + "ing"](
    arg1,
    arg2) {
    return;
  }
  *[Symbol.iterator](arg, arg2) {}
}
