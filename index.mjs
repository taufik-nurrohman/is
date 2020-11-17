export const isArray = x => Array.isArray(x);
export const isBoolean = x => false === x || true === x;
export const isFloat = x => isNumber(x) && 0 !== x % 1;
export const isFunction = x => 'function' === typeof x;
export const isInteger = x => isNumber(x) && 0 === x % 1;
export const isNull = x => null === x;
export const isNumber = x => 'number' === typeof x;
export const isNumeric = x => /^-?(?:\d*.)?\d+$/.test(x + "");
export const isObject = (x, isPlainObject) => {
    if ('object' !== typeof x) {
        return false;
    }
    return isPlainObject ? x instanceof Object : true;
};
export const isPattern = x => x instanceof RegExp;
export const isSet = x => 'undefined' !== typeof x && null !== x;
export const isString = x => 'string' === typeof x;

// Browser only?
export const isNode = x => isSet(Node) && x instanceof Node;
export const isNodeComment = x => isNode(x) && Node.COMMENT_NODE === x.nodeType;
export const isNodeElement = x => isNode(x) && Node.ELEMENT_NODE === x.nodeType;
export const isNodeText = x => isNode(x) && Node.TEXT_NODE === x.nodeType;
