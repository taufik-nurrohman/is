// This file is in sync with `index.mjs` file to enable CommonJS module loader feature.
// If you want to add/remove something here, make sure to do it in `index.mjs` file first.
($$ => {
    const isArray = x => Array.isArray(x);
    const isBoolean = x => false === x || true === x;
    const isComment = x => isNode(x) && /* Node.COMMENT_NODE */ 8 === x.nodeType;
    const isDefined = x => 'undefined' !== typeof x;
    const isDocument = x => document && document === x;
    const isElement = x => isNode(x) && /* Node.ELEMENT_NODE */ 1 === x.nodeType;
    const isFloat = x => isNumber(x) && 0 !== x % 1;
    const isFunction = x => 'function' === typeof x;
    const isInteger = x => isNumber(x) && 0 === x % 1;
    const isNode = x => isSet(Node) && x instanceof Node;
    const isNull = x => null === x;
    const isNumber = x => 'number' === typeof x;
    const isNumeric = x => /^-?(?:\d*.)?\d+$/.test(x + "");
    const isObject = (x, isPlainObject) => {
        if ('object' !== typeof x) {
            return false;
        }
        return isPlainObject ? x instanceof Object && Object === x.constructor : true;
    };
    const isPattern = x => x instanceof RegExp;
    const isScalar = x => isBoolean(x) || isNumber(x) || isString(x);
    const isSet = x => isDefined(x) && !isNull(x);
    const isString = x => 'string' === typeof x;
    const isText = x => isNode(x) && /* Node.TEXT_NODE */ 3 === x.nodeType;
    const isWindow = x => window && window === x;
    $$.isArray = isArray;
    $$.isBoolean = isBoolean;
    $$.isComment = isComment;
    $$.isDefined = isDefined;
    $$.isDocument = isDocument;
    $$.isElement = isElement;
    $$.isFloat = isFloat;
    $$.isFunction = isFunction;
    $$.isInteger = isInteger;
    $$.isNode = isNode;
    $$.isNull = isNull;
    $$.isNumber = isNumber;
    $$.isNumeric = isNumeric;
    $$.isObject = isObject;
    $$.isPattern = isPattern;
    $$.isScalar = isScalar;
    $$.isSet = isSet;
    $$.isString = isString;
    $$.isText = isText;
    $$.isWindow = isWindow;
})(exports || window || {});
