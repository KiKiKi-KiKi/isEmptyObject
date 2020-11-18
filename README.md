# isEmptyObject

```typescript
isEmptyObject = (val?: any, checkOwnProperty?: boolean): boolean
```
Check a parameter is empty Object.  
Array, Date, Class, Function, Regex, Symoble are return false.  
When use `checkOwnProperty` option `true`, it check a object has only own property or not.

## Install

```sh
$ npm install is-empty-object-x
```

### usage

```js
import isEmptyObject from 'is-empty-object-x';

isEmptyObject({}); // => true;
```

## Build

```sh
$ npm run build
```

## Test

```sh
$ npm run test
```

```js
isEmptyObject();
// => false
isEmptyObject(undefined);
// => false
isEmptyObject(null);
// => false
```

Boolean
```js
isEmptyObject(true);
// => false
isEmptyObject(false);
// => false
```

String
```js
isEmptyObject('String');
// => false
isEmptyObject(new String(''));
// => false;
isEmptyObject('');
// => false
```

Number
```js
isEmptyObject(1);
// => false
isEmptyObject(0);
// => false
isEmptyObject(-1);
// => false
isEmptyObject(NaN);
// => false
isEmptyObject(Infinity);
// => false
isEmptyObject(-Infinity);
// => false
```

Array
```js
isEmptyObject([]);
// => false
```

Object
```js
isEmptyObject({});
// => true
isEmptyObject(new Object());
// => true
isEmptyObject({ foo: 1 });
// => false
isEmptyObject(new Object({ bar: 0 }));
// => false
```

Date
```js
const date = new Date();
isEmptyObject(date);
// => false
```

Function
```js
const func = function () { };
isEmptyObject(func);
// => false
```

Symbol
```js
const symbol1 = Symbol();
isEmptyObject(symbol1);
// => false
const symbol2 = Symbol('a');
isEmptyObject(symbol2);
// => false
```

RegExp
```js
const regex1 = /\w+/;
isEmptyObject(regex1);
// => false
const regex2 = new RegExp('\\w+');
isEmptyObject(regex2);
// => false
```

Class
```js
class MyClass {
  constructor() { }
}
const classObj = new MyClass();
isEmptyObject(classObj);
// => false
```

### checkOwnProperty option

```js
const o = new Object();
o.a = 'b';
const obj = Object.create(o);
obj.a; //=> 'b'
obj.hasOwnProperty('a'); // => false

isEmptyObject(obj);
// => true

// use checkOwnProperty Option!
isEmptyObject(obj, true);
// => false
```
