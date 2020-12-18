const isArray = x => Array.isArray(x);
const isBoolean = x => false === x || true === x;
const isComment = x => isNode(x) && /* Node.COMMENT_NODE */ 8 === x.nodeType;
const isDefined = x => 'undefined' !== typeof x;
const isDocument = x => isInstance(x, Document);
const isElement = x => isNode(x) && /* Node.ELEMENT_NODE */ 1 === x.nodeType;
const isFloat = x => isNumber(x) && 0 !== x % 1;
const isFunction = x => 'function' === typeof x;
const isInstance = (x, of) => x && isSet(of) && x instanceof of;
const isInteger = x => isNumber(x) && 0 === x % 1;
const isNode = x => isInstance(x, Node);
const isNull = x => null === x;
const isNumber = x => 'number' === typeof x;
const isNumeric = x => /^-?(?:\d*.)?\d+$/.test(x + "");
const isObject = (x, isPlain = true) => {
    if ('object' !== typeof x) {
        return false;
    }
    return isPlain ? isInstance(x, Object) : true;
};
const isPattern = x => isInstance(x, RegExp);
const isScalar = x => isBoolean(x) || isNumber(x) || isString(x);
const isSet = x => isDefined(x) && !isNull(x);
const isString = x => 'string' === typeof x;
const isText = x => isNode(x) && /* Node.TEXT_NODE */ 3 === x.nodeType;
const isWindow = x => isInstance(x, Window);

Object.assign(exports || {}, {
    isArray,
    isBoolean,
    isComment,
    isDefined,
    isDocument,
    isElement,
    isFloat,
    isFunction,
    isInstance,
    isInteger,
    isNode,
    isNull,
    isNumber,
    isNumeric,
    isObject,
    isPattern,
    isScalar,
    isSet,
    isString,
    isText,
    isWindow
});
