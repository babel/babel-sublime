// SYNTAX TEST "Packages/babel-sublime/JavaScript (Babel).sublime-syntax"

    isNaN;
//  ^^^^^ support.function - meta.function-call

    isNaN();
//  ^^^^^^^ meta.function-call - meta.function-call.method
//  ^^^^^ support.function
//       ^^ meta.group

    isNaN.call();
//  ^^^^^^^^^^^^ meta.function-call.method - meta.function-call meta.function-call
//  ^^^^^ support.function

    new Error();
//      ^^^^^ support.class.builtin

    Array;
//  ^^^^^ support.class.builtin
    ArrayBuffer;
//  ^^^^^^^^^^^ support.class.builtin
    Boolean;
//  ^^^^^^^ support.class.builtin
    BigInt;
//  ^^^^^^ support.class.builtin
    BigInt64Array;
//  ^^^^^^^^^^^^^ support.class.builtin
    BigUint64Array;
//  ^^^^^^^^^^^^^^ support.class.builtin
    DataView;
//  ^^^^^^^^ support.class.builtin
    Date;
//  ^^^^ support.class.builtin
    Float32Array;
//  ^^^^^^^^^^^^ support.class.builtin
    Float64Array;
//  ^^^^^^^^^^^^ support.class.builtin
    Function;
//  ^^^^^^^^ support.class.builtin
    Int8Array;
//  ^^^^^^^^^ support.class.builtin
    Int16Array;
//  ^^^^^^^^^^ support.class.builtin
    Int32Array;
//  ^^^^^^^^^^ support.class.builtin
    Map;
//  ^^^ support.class.builtin
    Number;
//  ^^^^^^ support.class.builtin
    Object;
//  ^^^^^^ support.class.builtin
    Promise;
//  ^^^^^^^ support.class.builtin
    Proxy;
//  ^^^^^ support.class.builtin
    RegExp;
//  ^^^^^^ support.class.builtin
    Set;
//  ^^^ support.class.builtin
    String;
//  ^^^^^^ support.class.builtin
    Symbol;
//  ^^^^^^ support.class.builtin
    Uint8Array;
//  ^^^^^^^^^^ support.class.builtin
    Uint16Array;
//  ^^^^^^^^^^^ support.class.builtin
    Uint32Array;
//  ^^^^^^^^^^^ support.class.builtin
    Uint32ClampedArray;
//  ^^^^^^^^^^^^^^^^^^ support.class.builtin
    WeakMap;
//  ^^^^^^^ support.class.builtin
    WeakSet;
//  ^^^^^^^ support.class.builtin

    Error;
//  ^^^^^ support.class.builtin
    EvalError;
//  ^^^^^^^^^ support.class.builtin
    RangeError;
//  ^^^^^^^^^^ support.class.builtin
    ReferenceError;
//  ^^^^^^^^^^^^^^ support.class.builtin
    SyntaxError;
//  ^^^^^^^^^^^ support.class.builtin
    TypeError;
//  ^^^^^^^^^ support.class.builtin
    URIError;
//  ^^^^^^^^ support.class.builtin

    Atomics;
//  ^^^^^^^ support.constant.builtin
    Math;
//  ^^^^ support.constant.builtin
    JSON;
//  ^^^^ support.constant.builtin
    Reflect;
//  ^^^^^^^ support.constant.builtin

    eval;
//  ^^^^ support.function
    isFinite;
//  ^^^^^^^^ support.function
    isNaN;
//  ^^^^^ support.function
    parseFloat;
//  ^^^^^^^^^^ support.function
    parseInt;
//  ^^^^^^^^ support.function
    decodeURI;
//  ^^^^^^^^^ support.function
    decodeURIComponent;
//  ^^^^^^^^^^^^^^^^^^ support.function
    encodeURI;
//  ^^^^^^^^^ support.function
    encodeURIComponent;
//  ^^^^^^^^^^^^^^^^^^ support.function


foo.constructor;
//  ^^^^^^^^^^^ variable.language.constructor
foo.__proto__;
//  ^^^^^^^^^ invalid.deprecated variable.language.prototype
foo.__defineGetter__;
//  ^^^^^^^^^^^^^^^^ invalid.deprecated support.function
foo.__defineSetter__;
//  ^^^^^^^^^^^^^^^^ invalid.deprecated support.function
foo.__lookupGetter__;
//  ^^^^^^^^^^^^^^^^ invalid.deprecated support.function

foo.hasOwnProperty;
//  ^^^^^^^^^^^^^^ support.function
foo.isPrototypeOf;
//  ^^^^^^^^^^^^^ support.function
foo.propertyIsEnumerable;
//  ^^^^^^^^^^^^^^^^^^^^ support.function
foo.toLocaleString;
//  ^^^^^^^^^^^^^^ support.function
foo.toString;
//  ^^^^^^^^ support.function
foo.valueOf;
//  ^^^^^^^ support.function

Array.from;
//    ^^^^ support.function.builtin
Array.isArray;
//    ^^^^^^^ support.function.builtin
Array.of;
//    ^^ support.function.builtin

ArrayBuffer.isView;
//          ^^^^^^ support.function.builtin

Atomics.and;
//      ^^^ support.function.builtin
Atomics.add;
//      ^^^ support.function.builtin
Atomics.compareExchange;
//      ^^^^^^^^^^^^^^^ support.function.builtin
Atomics.exchange;
//      ^^^^^^^^ support.function.builtin
Atomics.isLockFree;
//      ^^^^^^^^^^ support.function.builtin
Atomics.load;
//      ^^^^ support.function.builtin
Atomics.or;
//      ^^ support.function.builtin
Atomics.store;
//      ^^^^^ support.function.builtin
Atomics.sub;
//      ^^^ support.function.builtin
Atomics.wait;
//      ^^^^ support.function.builtin
Atomics.wake;
//      ^^^^ support.function.builtin
Atomics.xor;
//      ^^^ support.function.builtin

BigInt.asUintN;
//     ^^^^^^^ support.function.builtin
BigInt.asIntN;
//     ^^^^^^ support.function.builtin

Date.now;
//   ^^^ support.function.builtin
Date.parse;
//   ^^^^^ support.function.builtin
Date.UTC;
//   ^^^ support.function.builtin

JSON.parse;
//   ^^^^^ support.function.builtin
JSON.stringify;
//   ^^^^^^^^^ support.function.builtin

Math.E;
//   ^ support.constant.builtin
Math.LN10;
//   ^^^^ support.constant.builtin
Math.LN2;
//   ^^^ support.constant.builtin
Math.LOG10E;
//   ^^^^^^ support.constant.builtin
Math.LOG2E;
//   ^^^^^ support.constant.builtin
Math.PI;
//   ^^ support.constant.builtin
Math.SQRT1_2;
//   ^^^^^^^ support.constant.builtin
Math.SQRT2;
//   ^^^^^ support.constant.builtin
Math.abs;
//   ^^^ support.function.builtin
Math.acos;
//   ^^^^ support.function.builtin
Math.acosh;
//   ^^^^^ support.function.builtin
Math.asin;
//   ^^^^ support.function.builtin
Math.asin;
//   ^^^^ support.function.builtin
Math.atan;
//   ^^^^ support.function.builtin
Math.atanh;
//   ^^^^^ support.function.builtin
Math.atan2;
//   ^^^^^ support.function.builtin
Math.cbrt;
//   ^^^^ support.function.builtin
Math.ceil;
//   ^^^^ support.function.builtin
Math.clz32;
//   ^^^^^ support.function.builtin
Math.cos;
//   ^^^ support.function.builtin
Math.cosh;
//   ^^^^ support.function.builtin
Math.exp;
//   ^^^ support.function.builtin
Math.expm1;
//   ^^^^^ support.function.builtin
Math.floor;
//   ^^^^^ support.function.builtin
Math.fround;
//   ^^^^^^ support.function.builtin
Math.hypot;
//   ^^^^^ support.function.builtin
Math.imul;
//   ^^^^ support.function.builtin
Math.log;
//   ^^^ support.function.builtin
Math.log1p;
//   ^^^^^ support.function.builtin
Math.log10;
//   ^^^^^ support.function.builtin
Math.log2;
//   ^^^^ support.function.builtin
Math.max;
//   ^^^ support.function.builtin
Math.min;
//   ^^^ support.function.builtin
Math.pow;
//   ^^^ support.function.builtin
Math.random;
//   ^^^^^^ support.function.builtin
Math.round;
//   ^^^^^ support.function.builtin
Math.sign;
//   ^^^^ support.function.builtin
Math.sin;
//   ^^^ support.function.builtin
Math.sinh;
//   ^^^^ support.function.builtin
Math.sqrt;
//   ^^^^ support.function.builtin
Math.tan;
//   ^^^ support.function.builtin
Math.tanh;
//   ^^^^ support.function.builtin
Math.trunc;
//   ^^^^^ support.function.builtin

Number.EPSILON;
//     ^^^^^^^ support.constant.builtin
Number.MAX_SAFE_INTEGER;
//     ^^^^^^^^^^^^^^^^ support.constant.builtin
Number.MAX_VALUE;
//     ^^^^^^^^^ support.constant.builtin
Number.MIN_SAFE_INTEGER;
//     ^^^^^^^^^^^^^^^^ support.constant.builtin
Number.MIN_VALUE;
//     ^^^^^^^^^ support.constant.builtin
Number.NEGATIVE_INFINITY;
//     ^^^^^^^^^^^^^^^^^ support.constant.builtin
Number.POSITIVE_INFINITY;
//     ^^^^^^^^^^^^^^^^^ support.constant.builtin
Number.isFinite;
//     ^^^^^^^^ support.function.builtin
Number.isInteger;
//     ^^^^^^^^^ support.function.builtin
Number.isNaN;
//     ^^^^^ support.function.builtin
Number.isSafeInteger;
//     ^^^^^^^^^^^^^ support.function.builtin
Number.NaN;
//     ^^^ support.function.builtin
Number.parseFloat;
//     ^^^^^^^^^^ support.function.builtin
Number.parseInt;
//     ^^^^^^^^ support.function.builtin

Object.assign;
//     ^^^^^^ support.function.builtin
Object.create;
//     ^^^^^^ support.function.builtin
Object.defineProperties;
//     ^^^^^^^^^^^^^^^^ support.function.builtin
Object.defineProperty;
//     ^^^^^^^^^^^^^^ support.function.builtin
Object.entries;
//     ^^^^^^^ support.function.builtin
Object.freeze;
//     ^^^^^^ support.function.builtin
Object.fromEntries;
//     ^^^^^^^^^^^ support.function.builtin
Object.getOwnPropertyDescriptors;
//     ^^^^^^^^^^^^^^^^^^^^^^^^^ support.function.builtin
Object.getOwnPropertyNames;
//     ^^^^^^^^^^^^^^^^^^^ support.function.builtin
Object.getOwnPropertySymbols;
//     ^^^^^^^^^^^^^^^^^^^^^ support.function.builtin
Object.getPrototypeOf;
//     ^^^^^^^^^^^^^^ support.function.builtin
Object.is;
//     ^^ support.function.builtin
Object.isExtensible;
//     ^^^^^^^^^^^^ support.function.builtin
Object.isFrozen;
//     ^^^^^^^^ support.function.builtin
Object.isSealed;
//     ^^^^^^^^ support.function.builtin
Object.keys;
//     ^^^^ support.function.builtin
Object.preventExtensions;
//     ^^^^^^^^^^^^^^^^^ support.function.builtin
Object.seal;
//     ^^^^ support.function.builtin
Object.setPrototypeOf;
//     ^^^^^^^^^^^^^^ support.function.builtin
Object.values;
//     ^^^^^^ support.function.builtin
Object.notABuiltin;
//     ^^^^^^^^^^^ meta.property.object - support

Promise.all;
//      ^^^ support.function.builtin
Promise.race;
//      ^^^^ support.function.builtin
Promise.reject;
//      ^^^^^^ support.function.builtin
Promise.resolve;
//      ^^^^^^^ support.function.builtin
Promise.allSettled;
//      ^^^^^^^^^^ support.function.builtin
Promise.any;
//      ^^^ support.function.builtin

Reflect.apply;
//      ^^^^^ support.function.builtin
Reflect.construct;
//      ^^^^^^^^^ support.function.builtin
Reflect.defineProperty;
//      ^^^^^^^^^^^^^^ support.function.builtin
Reflect.deleteProperty;
//      ^^^^^^^^^^^^^^ support.function.builtin
Reflect.get;
//      ^^^ support.function.builtin
Reflect.getOwnPropertyDescriptor;
//      ^^^^^^^^^^^^^^^^^^^^^^^^ support.function.builtin
Reflect.getPrototypeOf;
//      ^^^^^^^^^^^^^^ support.function.builtin
Reflect.has;
//      ^^^ support.function.builtin
Reflect.isExtensible;
//      ^^^^^^^^^^^^ support.function.builtin
Reflect.ownKeys;
//      ^^^^^^^ support.function.builtin
Reflect.preventExtensions;
//      ^^^^^^^^^^^^^^^^^ support.function.builtin
Reflect.set;
//      ^^^ support.function.builtin
Reflect.setPrototypeOf;
//      ^^^^^^^^^^^^^^ support.function.builtin

String.fromCharCode;
//     ^^^^^^^^^^^^ support.function.builtin
String.fromCodePoint;
//     ^^^^^^^^^^^^^ support.function.builtin
String.raw;
//     ^^^ support.function.builtin

Symbol.asyncIterator;
//     ^^^^^^^^^^^^^ support.constant.builtin
Symbol.hasInstance;
//     ^^^^^^^^^^^ support.constant.builtin
Symbol.isConcatSpreadable;
//     ^^^^^^^^^^^^^^^^^^ support.constant.builtin
Symbol.iterator;
//     ^^^^^^^^ support.constant.builtin
Symbol.match;
//     ^^^^^ support.constant.builtin
Symbol.replace;
//     ^^^^^^^ support.constant.builtin
Symbol.search;
//     ^^^^^^ support.constant.builtin
Symbol.species;
//     ^^^^^^^ support.constant.builtin
Symbol.split;
//     ^^^^^ support.constant.builtin
Symbol.toPrimitive;
//     ^^^^^^^^^^^ support.constant.builtin
Symbol.toStringTag;
//     ^^^^^^^^^^^ support.constant.builtin
Symbol.unscopeables;
//     ^^^^^^^^^^^^ support.constant.builtin
Symbol.for;
//     ^^^ support.function.builtin
Symbol.keyFor;
//     ^^^^^^ support.function.builtin
Symbol.notABuiltin;
//     ^^^^^^^^^^^ meta.property.object - support

BigInt64Array.BYTES_PER_ELEMENT;
//            ^^^^^^^^^^^^^^^^^ support.constant.builtin
BigUint64Array.BYTES_PER_ELEMENT;
//             ^^^^^^^^^^^^^^^^^ support.constant.builtin
Int8Array.BYTES_PER_ELEMENT;
//        ^^^^^^^^^^^^^^^^^ support.constant.builtin
Float32Array.BYTES_PER_ELEMENT;
//           ^^^^^^^^^^^^^^^^^ support.constant.builtin
Float64Array.BYTES_PER_ELEMENT;
//           ^^^^^^^^^^^^^^^^^ support.constant.builtin
Int8Array.BYTES_PER_ELEMENT;
//        ^^^^^^^^^^^^^^^^^ support.constant.builtin
Int16Array.BYTES_PER_ELEMENT;
//         ^^^^^^^^^^^^^^^^^ support.constant.builtin
Int32Array.BYTES_PER_ELEMENT;
//         ^^^^^^^^^^^^^^^^^ support.constant.builtin
Uint8Array.BYTES_PER_ELEMENT;
//         ^^^^^^^^^^^^^^^^^ support.constant.builtin
Uint16Array.BYTES_PER_ELEMENT;
//          ^^^^^^^^^^^^^^^^^ support.constant.builtin
Uint32Array.BYTES_PER_ELEMENT;
//          ^^^^^^^^^^^^^^^^^ support.constant.builtin
Uint32ClampedArray.BYTES_PER_ELEMENT;
//                 ^^^^^^^^^^^^^^^^^ support.constant.builtin
