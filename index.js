const isArray = x => Array.isArray(x);
const isBoolean = x => false === x || true === x;
const isDefined = x => 'undefined' !== typeof x;
const isEmpty = x => {
    if (isString(x) && "" === x.trim()) {
        return true;
    }
    if (isArray(x) && 0 === x.length) {
        return true;
    }
    if (isObject(x) && 0 === Object.keys(x).length) {
        return true;
    }
    return !x;
};
const isFloat = x => isNumber(x) && 0 !== x % 1;
const isFunction = x => 'function' === typeof x;
const isInstance = (x, of) => x && isSet(of) && x instanceof of;
const isInteger = x => isNumber(x) && 0 === x % 1;
const isNull = x => null === x;
const isNumber = x => 'number' === typeof x;
const isNumeric = x => /^-?(?:\d*.)?\d+$/.test(x + "");
const isObject = (x, isPlain = true) => {
    if ('object' !== typeof x) {
        return false;
    }
    return isPlain ? isInstance(x, Object) : true;
};
const isScalar = x => isBoolean(x) || isNumber(x) || isString(x);
const isSet = x => isDefined(x) && !isNull(x);
const isString = x => 'string' === typeof x;

Object.assign(exports, {
    isArray,
    isBoolean,
    isDefined,
    isEmpty,
    isFloat,
    isFunction,
    isInstance,
    isInteger,
    isNull,
    isNumber,
    isNumeric,
    isObject,
    isScalar,
    isSet,
    isString
});