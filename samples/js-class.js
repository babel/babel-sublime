class MyClass {
  regularMethod() {}
  *generatorMethod() {}
  static staticRegularMethod() {}
  static get staticGetterMethod() {}
  static set staticSetterMethod(arg) {}
  static *staticGeneratorMethod() {}
  static async staticAsyncMethod() {}
  async asyncMethod() {}
  [computedMethod()]() {}
  ["computedString"]() {}
  ["computed" + "String"]() {}
  *[Symbol.iterator]() {}
}
