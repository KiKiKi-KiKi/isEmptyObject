import isEmptyObject from '../src/index';

describe('isEmptyObject', () => {
  test('When empty parameter, return false', () => {
    expect(isEmptyObject()).toBe(false);
  });

  test('When param is undefined, return false', () => {
    expect(isEmptyObject(undefined)).toBe(false);
  });

  test('When param is null, return false', () => {
    expect(isEmptyObject(null)).toBe(false);
  });

  test('When param is NaN, return false', () => {
    expect(isEmptyObject(NaN)).toBe(false);
  });

  test('When param is Boolean, return false', () => {
    expect(isEmptyObject(true)).toBe(false);
    expect(isEmptyObject(false)).toBe(false);
  });

  test('When param is function, return false', () => {
    expect(
      isEmptyObject(function () {
        return true;
      })
    ).toBe(false);
  });

  test('When param is String, return false', () => {
    expect(isEmptyObject('String')).toBe(false);
    expect(isEmptyObject(new String('String'))).toBe(false);
  });

  test('When param is Number, return false', () => {
    expect(isEmptyObject(1)).toBe(false);
    expect(isEmptyObject(0)).toBe(false);
    expect(isEmptyObject(-1)).toBe(false);
  });

  test('When param is NaN and Infinity, return false', () => {
    expect(isEmptyObject(NaN)).toBe(false);
    expect(isEmptyObject(Infinity)).toBe(false);
    expect(isEmptyObject(-Infinity)).toBe(false);
  });

  test('When param is Array, return false', () => {
    expect(isEmptyObject([])).toBe(false);
    expect(isEmptyObject([1])).toBe(false);
  });

  test('When param is Object, return true', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject(new Object())).toBe(true);
  });

  test('When param is Object has key value, return false', () => {
    expect(isEmptyObject({ foo: 1 })).toBe(false);
    expect(isEmptyObject(new Object({ bar: 0 }))).toBe(false);
  });

  test('When param is extened Object , return false', () => {
    const o: { [key: string]: any } = new Object();
    o.a = 'b';
    const obj = Object.create(o);

    expect(obj.a).toBe('b');
    expect(obj.hasOwnProperty('a')).toBe(false);
    expect(isEmptyObject(obj)).toBe(false);
  });

  test('When param is Date, return true', () => {
    // typeof(date) => "object"
    // date.constructor.name => "Date"
    const date = new Date();
    expect(isEmptyObject(date)).toBe(false);
  });

  test('When param is RegExp Object, return true', () => {
    // typeof(class) => "object"
    // class.constructor.name => "RegExp"
    const regex1 = /\w+/;
    expect(isEmptyObject(regex1)).toBe(false);

    const regex2 = new RegExp('\\w+');
    expect(isEmptyObject(regex2)).toBe(false);
  });

  test('When param is Symbol, return false', () => {
    // typeof(symbol) => "symbol"
    const symbol1 = Symbol();
    expect(isEmptyObject(symbol1)).toBe(false);

    const symbol2 = Symbol('a');
    expect(isEmptyObject(symbol2)).toBe(false);
  });

  test('When param is Class, return false', () => {
    // typeof(class) => "object"
    // class.constructor.name => "Class Name"
    class MyClass {
      constructor() { }
    }
    const classObj = new MyClass();
    expect(isEmptyObject(classObj)).toBe(false);
  });
});
