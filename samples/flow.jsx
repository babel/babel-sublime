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
var d: (str: string) => {str: string} = foo();

var f: (
  ((x: Foo) => void) &
  ((x: Bar) => void)
)

var a: mixed = 'some string';
var b: mixed = undefined;
var c: mixed = 42;

function foo(): mixed { return 42; }
var d: string = foo();

function foo(a: string, b: number): void { }
var x: boolean = someBool;
class Bar {
  y: string;
  x: WeakMap;
  z: MyObjact;
  someMethod(a: number): string { }
}

var a = [1, 2, 3];
var b: Array<number> = a.map(function(x) { return x + 1; });

function c([b: number]) {}

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

class A<T: void> extends B<T: void> {}

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

function fooStillBad(obj: { x: number }): (str: string) => {a: string} {
  console.log(Math.abs(obj.x));
  return obj;
}


type T = number;
type T = Array<string>;
var x: T = [];

function foo<X: ?number, Y:x>(f: F<X, Y>, x: X): Y { return f(x); }

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

import type {ClassFoo4, ClassFoo5} from "./ExportCJSNamed_Class";
import typeof {ClassFoo4, ClassFoo5} from "./ExportCJSNamed_Class";
import {foo4Inst, foo5Inst} from "./ExportCJSNamed_Class";
import type ClassFoo6 from "./issue-359";
import typeof ClassFoo6 from "./issue-359";

export type AliasFoo3 = {
  givesANum(): number
};


declare class Object {
  static (o: string): String;
  static (o: ?void): {[key: any]: any};
  static <T: Object>(o: T): T;
  static create(o: any, properties?: any): any; // compiler magic
  static assign(target: any, ...sources: Array<any>): any;
  [key:any]: any;
  apply(thisArg: any, argArray?: any): any;
  call(thisArg: any, ...argArray: Array<any>): any;
  arguments: any;
  caller: Function;
  max(...values: Array<number>): number;
  pow(x: number, y: number): number;
  @@iterator(): Iterator<T>;
  toLocaleString(): string;
  // concat creates a new array
  concat<S>(...items: Array<Array<S> | S>): Array<T | S>;
    reduceRight<U>(
    callbackfn: (previousValue: T|U, currentValue: T, currentIndex: number, array: Array<T>) => U
  ): U;
  length: number;
  static (...values:Array<any>): Array<any>;
  static isArray(obj: any): bool;
  static from<A, B>(arrayLike: any, mapFn?: ?(elem: A, index: number) => B, thisArg?: ?any): Array<B>;
  replace(searchValue: string | RegExp, replaceValue: string | (substring: string, ...args: Array<any>) => string): string;
  search(regexp: string | RegExp): number;
}

type IteratorResult<Yield,Return> = {
  done: true,
  value?: Return,
} | {
  done: false,
  value: Yield,
};

interface $Iterator<Yield,Return,Next> {
    @@iterator(): $Iterator<Yield,Return,Next>;
    next(value?: Next): IteratorResult<Yield,Return>;
}
type Iterator<T> = $Iterator<T,void,void>;

interface $Iterable<Yield,Return,Next> {
    @@iterator(): $Iterator<Yield,Return,Next>;
}
type Iterable<T> = $Iterable<T,void,void>;

/* Generators */
interface Generator<Yield,Return,Next> {
  @@iterator(): $Iterator<Yield,Return,Next>;
  next(value?: Next): IteratorResult<Yield,Return>;
  return<R>(value: R): { done: true, value: R };
  throw(error?: any): IteratorResult<Yield,Return>;
}

var a: number = 123,
    b: void = (x,y,z) => {};

for (var len: number; len < arr.length; i++) {

}

declare class Map<K, V> {
  @@iterator(): Iterator<[K, V]>;
  <Key, Value>(): Map<Key, Value>;
  <Key, Value>(iterable: Iterable<[Key, Value]>): Map<Key, Value>;
  entries(): Iterator<[K, V]>;
  forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
  keys(): Iterator<K>;
  set(key: K, value?: V): Map<K, V>;
  size: number;
  values(): Iterator<V>;
}

declare class Promise<R> {
  constructor(callback: (
    resolve: (result: Promise<R> | R) => void,
    reject:  (error: any) => void
  ) => void): void;

  then<U>(
    onFulfill?: (value: R) => Promise<U> | U,
    onReject?: (error: any) => Promise<U> | U
  ): Promise<U>;

  catch<U>(
    onReject?: (error: any) => ?Promise<U> | U
  ): Promise<U>;

  static resolve<T>(object?: Promise<T> | T): Promise<T>;
  static reject<T>(error?: any): Promise<T>;
  static all<T>(promises: Array<Promise<T>>): Promise<Array<T>>;
  static race<T>(promises: Array<Promise<T>>): Promise<T>;

  // Non-standard APIs common in some libraries

  done<U>(
    onFulfill?: (value: R) => void,
    onReject?: (error: any) => void
  ): void;

  static cast<T>(object?: T): Promise<T>;
}
