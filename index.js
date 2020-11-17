// This file is in sync with `index.mjs` file to enable CommonJS module loader feature.
// If you want to add/remove something here, make sure to do it in `index.mjs` file first.
($$ => {
    const isArray = x => Array.isArray(x);
    const isBoolean = x => false === x || true === x;
    const isFloat = x => isNumber(x) && 0 !== x % 1;
    const isFunction = x => 'function' === typeof x;
    const isInteger = x => isNumber(x) && 0 === x % 1;
    const isNull = x => null === x;
    const isNumber = x => 'number' === typeof x;
    const isNumeric = x => /^-?(?:\d*.)?\d+$/.test(x + "");
    const isObject = (x, isPlainObject) => {
        if ('object' !== typeof x) {
            return false;
        }
        return isPlainObject ? x instanceof Object : true;
    };
    const isPattern = x => x instanceof RegExp;
    const isSet = x => 'undefined' !== typeof x && null !== x;
    const isString = x => 'string' === typeof x;
    const isNode = x => isSet(Node) && x instanceof Node;
    const isNodeComment = x => isNode(x) && Node.COMMENT_NODE === x.nodeType;
    const isNodeElement = x => isNode(x) && Node.ELEMENT_NODE === x.nodeType;
    const isNodeText = x => isNode(x) && Node.TEXT_NODE === x.nodeType;
    $$.isArray = isArray;
    $$.isBoolean = isBoolean;
    $$.isFloat = isFloat;
    $$.isFunction = isFunction;
    $$.isInteger = isInteger;
    $$.isNull = isNull;
    $$.isNumber = isNumber;
    $$.isNumeric = isNumeric;
    $$.isObject = isObject;
    $$.isPattern = isPattern;
    $$.isSet = isSet;
    $$.isString = isString;
    $$.isNode = isNode;
    $$.isNodeComment = isNodeComment;
    $$.isNodeElement = isNodeElement;
    $$.isNodeText = isNodeText;
})(exports || window || {});
