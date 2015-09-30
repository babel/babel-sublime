var a: any = 'some string';
var b: any = undefined;
var c: any = 42;

function foo(): any { return 42; }
var d: string = foo();

var a: Array<number> = [42];
var b: Array<number> = ['some string'];
var c: Array<number> = [42, 'some string'];

var myNumbers: Array<number> = [42];
var d: number = myNumbers[0];

var a: boolean = true;
var b: boolean = false;
var c: boolean = 42;

var a: Function = function() {};
var b: Function = p => p;
var c: Function = 42;

function foo(): Function {
  return function(x: number): number { return x; }
}

var d: (str: string) => string = foo();

var a: mixed = 'some string';
var b: mixed = undefined;
var c: mixed = 42;

function foo(): mixed { return 42; }
var d: string = foo();

function foo(a: string, b: number): void { }
var x: boolean = someBool;
class Bar {
  y: string;
  someMethod(a: number): string { }
}

var a = [1, 2, 3];
var b: Array<number> = a.map(function(x) { return x + 1; });

class CA {
  x: string // optional semicolons
  y: number;
  constructor(x) { this.x = x; }
  foo(x: number): void { this.x = x; }
  bar() { return this.x; }
  bar(): number { return this.x; }
  static qux(): D { return new D(); }
  [x+y+z]<U>(a, b) { return null; }
  map<U>(f: (x: T) => U): List<U> { }
}

class CB<X> {
  x: X;
  foo(x: X) { this.x = x; }
  bar(): X { return this.x; }
}

class D extends C<number> {
  bar(): number {
    this.x = super.bar() + 1;
    return this.x;
  }
  static qux(): D { return new D(); }
}

var obj: {a: boolean; b: string; c: Foo} = {a: true, b: "Hi", c: new Foo()}

type MyType = {message: string; isAwesome: boolean};

var obj: { a: string; b?: number } = { a: "hello" };

function foo(x, y = false) { }
function bar(z, ...w) { }

function foo<X>(x: X): X { return x; }

class List<T> {
  map<U>(f: (x: T) => U): List<U> { }
}

var o: ?string = null;

var x: number | string = 0;
declare var f: ((x: number) => void) & ((x: string) => void);

var x: A | B | number | C = new C();

declare var f: ((x: Foo) => void) & ((x: Bar) => void);

function foo(a: ?string, b: any): Array<number> {}


type T = number;
type T = Array<string>;
var x: T = [];

function foo<X: ?number, Y:x>f: F<X, Y>, x: X): Y { return f(x); }

var b: { f: typeof Foo } = { f : Foo };

function foo(x: string | number | boolean): string { }

declare function something(): void;

function foo(x: { y: ?string }): string { return; }

declare class CC {
  x: string;
}

declare module M {
  declare function foo(c: C): void;
}

function foo(a: ?string, b: any): Array<number> {}
